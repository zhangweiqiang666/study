window.onload = function () {
    var myId, //id值
        tbody = document.getElementsByTagName('tbody')[0],
        batchDeleteBtn = document.getElementById('batchdelete'), //批量删除按钮
        addBtn = document.getElementById('add'), //增加按钮
        submit = document.getElementById('submit'), //提交按钮
        cancel = document.getElementById('cancel'), //取消按钮
        msg = document.getElementById('msg'), // 信息框
        inputs = msg.getElementsByTagName('input'), //信息输入框
        allcheck = document.getElementById('allcheck');
    findAllCategory();

    // 封装ajax
    function myAjax(options) {
        var http = new XMLHttpRequest();
        http.open(options.method, options.url);
        http.onreadystatechange = function () {
            if (http.status === 200 && http.readyState === 4) {
                options.callback(http.responseText)
            }
        }
        if (options.method === 'POST') {
            http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            http.send(encodeFormData(options.data));
        } else {
            http.send(options.data);
        }

    }
    // 查找全部
    function findAllCategory() {
        var obj = {
            method: 'GET',
            data: null,
            url: 'http://134.175.154.93:8099/manager/category/findAllCategory',
            callback: function (res) {

                var str = '';
                // console.log(JSON.parse(res).data);
                var data = JSON.parse(res).data;
                data.forEach(function (item) {
                    str += `
                            <tr id = "` + item.id + `" >
                                <td><input type="checkbox"> </td>
                                <td>` + item.name + `</td>
                                <td>` + item.comment + `</td>
                                <td>` + item.no + `</td>
                                <td>` + item.parent + `</td>
                                <td> 
                                <button class = "updata"> 修改 </button>
                                <button class="delete">删除</button>
                                </td>
                            </tr>
                `;
                });
                tbody.innerHTML = str;
            }
        }
        myAjax(obj);
    }
    //删除
    function deleteCategoryById(id) {
        var obj = {
            method: 'GET',
            data: null,
            url: 'http://134.175.154.93:8099/manager/category/deleteCategoryById?id=' + id,
            callback: function () {
                findAllCategory();
            }
        }
        myAjax(obj)
    }
    // 代理 删除/修改 按钮
    tbody.onclick = function (event) {
        var target = event.target;
        if (target.className == 'delete') {
            // console.log(event)
            deleteCategoryById(target.parentNode.parentNode.id);
        }
        if (target.className == 'updata') {
            myId = target.parentNode.parentNode.id;
            var tr = target.parentNode.parentNode;
            inputs[0].value = tr.children[1].innerText;
            inputs[1].value = tr.children[2].innerText;
            inputs[2].value = tr.children[3].innerText;
            inputs[3].value = tr.children[4].innerText;
            msg.className = 'on';
        }
    }

    //批量删除
    function batchDeleteCategory(ids) {
        var obj = {
            method: 'POST',
            data: ids,
            url: 'http://134.175.154.93:8099/manager/category/batchDeleteCategory',
            callback: function () {
                findAllCategory();
            }
        }
        myAjax(obj)
    }

    // 批量删除按钮
    batchDeleteBtn.onclick = function () {
        var inputs = document.getElementsByTagName('tbody')[0].getElementsByTagName('input');
        inputs = Array.prototype.slice.call(inputs, 0);
        var inputsRes = inputs.filter(function (item) {
            return item.checked == true;
        })

        var obj = {
            ids: ''
        }
        var arr = []

        if (inputsRes.length > 0) {
            inputsRes.forEach(function (item) {
                var id = item.parentNode.parentNode.id;
                // deleteCategoryById(id)
                arr.push(id);

            })
            if(arr[0] == 2){
                arr = arr.slice(1)
            }
            obj.ids = arr.toString();
            console.log(obj);
            batchDeleteCategory(obj);
            allcheck.checked = false;
        }
    }

    //增加数据
    function saveOrUpdateCategory(obj) {
        var obj = {
            method: 'POST',
            data: obj,
            url: 'http://134.175.154.93:8099/manager/category/saveOrUpdateCategory',
            callback: function () {
                findAllCategory();
            }
        }
        myAjax(obj)
    }

    // 增加按钮
    addBtn.onclick = function () {
        msg.className = 'on'
    }

    // 将js的对象转换成表单格式的数据
    function encodeFormData(data) {
        if (!data) {
            return "";
        }
        var pairs = [];
        for (var name in data) {
            if (!data.hasOwnProperty(name)) {
                continue;
            }
            if (typeof data[name] == "function") {
                continue;
            }
            var value = data[name].toString();
            name = encodeURIComponent(name.replace("%20", "+")); //编码名字
            value = encodeURIComponent(value.replace("%20", "+")); //编码值
            pairs.push(name + "=" + value);
        }
        return pairs.join('&');
    }

    // 确认按钮
    submit.onclick = function () {
        if (myId) {
            saveOrUpdateCategory({
                id: myId,
                name: inputs[0].value,
                comment: inputs[1].value,
                no: inputs[2].value,
                parent: inputs[3].value
            });
            myId = undefined;
        } else {
            saveOrUpdateCategory({
                name: inputs[0].value,
                comment: inputs[1].value,
                no: inputs[2].value,
                parent: inputs[3].value
            });
        }
        findAllCategory();
        inputs = Array.prototype.slice.call(inputs, 0);
        inputs.forEach(function (item) {
            item.value = '';
        });
        msg.className = 'hidd';

    }

    // 取消按钮
    cancel.onclick = function () {
        inputs = Array.prototype.slice.call(inputs, 0);
        inputs.forEach(function (item) {
            item.value = '';
        })
        msg.className = 'hidd';
        myId = undefined;
    }
    // 全选

    console.log(allcheck);
    allcheck.onclick = function () {
        var inputs = document.getElementsByTagName('tbody')[0].getElementsByTagName('input');
        inputs = Array.prototype.slice.call(inputs, 0);
        if (allcheck.checked == true) {
            inputs.forEach(function (item) {
                item.checked = true;

            })

        } else {
            inputs.forEach(function (item) {
                item.checked = false;

            })
        }
    }
}