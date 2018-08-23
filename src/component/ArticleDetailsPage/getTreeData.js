/*
 * @Author: duantao-ds
 * @Date: 2018-08-23 17:53:38
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-23 19:49:57
 */

const $ = require('jquery');

const getTree = (html, filename) => {

    let box = document.createElement('div');
    box.innerHTML = html;

    let $headerList = $(box).find('h1, h2, h3, h4, h5, h6');

    let data = [];

    let level = 0;
    let two = 0;
    let three = 0;
    let four = 0;
    let five = 0;
    let six = 0;

    $headerList.each((index, node) => {

        let hashId = Math.random().toString(16).substr(2);
        let name = `/article_details/${filename}#${hashId}`
        $(node).attr({name, id: name});
        let label = $(node).html();

        let obj = {
            name,
            label,
            children: []
        }

        if (node.nodeName === 'H1') {
            level = level + 1;
            data.push({
                ...obj,
                sign: level,
            });

            if (level !== 1) {
                two = 0;
            }
        }
        else if (node.nodeName === 'H2') {

            two = two + 1;

            data[level - 1].children.push({
                ...obj,
                sign: `${level}-${two}`
            });

            if (two !== 1) {
                three = 0;
            }

        }
        else if (node.nodeName === 'H3') {
            three = three + 1;
            data[level - 1].children[two - 1].children.push({
                ...obj,
                sign: `${level}.${two}.${three}`
            })

            if (three !== 1) {
                four = 0;
            }
        }
        else if (node.nodeName === 'H4') {
            four = four + 1;
            data[level - 1].children[two - 1].children[three - 1].children.push({
                ...obj,
                sign: `${level}.${two}.${three}.${four}`
            })

            if (four !== 1) {
                five = 0;
            }

        }
        else if (node.nodeName === 'H5') {

            five = five + 1;
            data[level - 1].children[two - 1].children[three - 1].children[four - 1].children.push({
                ...obj,
                sign: `${level}.${two}.${three}.${four}.${five}`
            })

            if (five !== 1) {
                six = 0;
            }

        }
        else if (node.nodeName === 'H6') {
            six = six + 1;
            data[level - 1].children[two - 1].children[three - 1].children[four - 1].children[five - 1].children.push({
                ...obj,
                sign: `${level}.${two}.${three}.${four}.${five}.${six}`
            })
        }
    })


    return {
        treeData: data,
        htmlString: box.innerHTML
    };
}

export default getTree;
