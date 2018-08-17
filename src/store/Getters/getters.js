/*
 * @Author: duantao-ds
 * @Date: 2018-08-17 11:33:20
 * @Last Modified by: duantao-ds
 * @Last Modified time: 2018-08-17 15:52:22
 */


const getters = {

    // 展示的博客列表
    showArticleList: state => {

        let showList = [];
        let item = [];

        let {allArticleList, pageSize, pageNumber} = state;

        if (allArticleList.length <= pageSize) {
            allArticleList.forEach((item, index) => item.sign = index + 1);
            return allArticleList;
        }

        allArticleList.forEach((articleItem, index) => {

            if (index !== 0 && index % pageSize === 0) {
                showList.push(item);
                item = [];
            }

            item.push({
                ...articleItem,
                sign: index + 1
            });

            if (index === allArticleList.length - 1) {
                showList.push(item);
            }
        });

        return showList[pageNumber - 1];
    }
}

export default getters;
