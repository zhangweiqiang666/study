window.onload = function () {
   
    // 轮播图
    var wrap = document.getElementById('wrap'),
        pic = document.getElementById('pic'),
        list = document.getElementById('list').getElementsByTagName('li'),
        index = 0,
        timer = null;
    var next = document.getElementById("arrow-right");
    var prev = document.getElementById("arrow-left");
    next.onclick = function () {
        index++;
        if (index >= list.length) {
            index = 0;
        }
        changeImg(index);
    }
    // 上一张
    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = list.length - 1;
        }
        changeImg(index);
    }

    // 若果有在等待的定时器，则清掉
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // 自动切换
    timer = setInterval(autoPlay, 2000);

    // 定义并调用自动播放函数
    function autoPlay() {
        index++;
        if (index >= list.length) {
            index = 0;
        }
        changeImg(index);
    }

    // 定义图片切换函数
    function changeImg(curIndex) {
        for (var j = 0; j < list.length; j++) {
            list[j].className = "";
        }
        // 改变当前显示索引
        list[curIndex].className = "on";
        pic.style.marginTop = -379 * curIndex + "px";
        index = curIndex;
    }

    // 鼠标划过整个容器时停止自动播放
    wrap.onmouseover = function () {
        clearInterval(timer);
        
    }

    // 鼠标离开整个容器时继续播放至下一张
    wrap.onmouseout = function () {
        timer = setInterval(autoPlay, 2000);
    }

    // 遍历所有数字导航实现点击切换至对应的图片
    for (var i = 0; i < list.length; i++) {
        list[i].id = i;
        list[i].onclick = function () {
            clearInterval(timer);
            changeImg(this.id);
        }
    }
}