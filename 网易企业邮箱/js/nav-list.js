window.onload = function () {

    var navList = document.getElementById("nav-list").getElementsByTagName('li');
    var navI = document.getElementById("nav-list").getElementsByTagName('i');
    index = 0;
    console.log(navList)
    console.log(navI)
    for (var i = 0; i < navList.length; i++) {
        navList[i].id = i; 
        navList[i].onclick = function () {
            changeList(this.id)
        }
    }

    function changeList(curIndex) {
        for (var j = 0; j < navI.length; j++) {
            
            navI[j].className = "";
            console.log(navI[j])
             
        }
        console.log(33333)
        // 改变当前显示索引
        navI[curIndex].className = 'onclick';
    }
}