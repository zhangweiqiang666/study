(function () {
    var arr = [
        {
        id: 1,
        name: '根编目',
        cate_path: null
    }, {
        id: 2,
        name: 'Java课程',
        cate_path: '1.2'
    }, {
        id: 3,
        name: 'Spring课程',
        cate_path: '1.2.3'
    }, {
        id: 6,
        name: 'Servlet课程',
        cate_path: '1.2.6'
    }, {
        id: 4,
        name: 'SpringBoot课程',
        cate_path: '1.2.3.4'
    }, {
        id: 5,
        name: 'Web课程',
        cate_path: '1.5'
    }, {
        id: 7,
        name: 'React课程',
        cate_path: '1.5.7'
    }, {
        id: 8,
        name: 'redux课程',
        cate_path: '1.5.7.8'
    }, {
        id: 9,
        name: 'HTML5课程',
        cate_path: '1.5.9'
    }, {
        id: 10,
        name: 'H5API课程',
        cate_path: '1.5.7.9.10'
    }, {
        id: 11,
        name: 'Python',
        cate_path: '1.11'
    }, {
        id: 12,
        name: 'Django课程',
        cate_path: '1.11.12'
    }];
    arr = myTree(arr);
    console.log(arr);

    //数据封装
    function myTree(arr) {
        arr.forEach(function (item, index, arr) {
            if (item.cate_path != null) {
                item.parentId = item.cate_path.split('.');
                item.parentId = Number(item.parentId.splice(item.parentId.length - 2, 1).join());
            } else {
                item.parentId = null
            }
            item.children = [];
            return item.parentId;
        });
        arr.forEach(function (item, index, arr) {
            arr.forEach(function (item1, index1, arr1) {
                if (item.id == item1.parentId) {
                    item.children.push(item1) //将parentId=item.id加到children中
                }
                return item;
            });
        });
        arr = arr[0].children;
        return arr;
    }
});