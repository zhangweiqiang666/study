onmessage = function (event) {
    // 主线程给后台线程的参数
    var num = event.data;
    var total = 0;
    for (i = 0; i < num; i++) {
        total += i;
    }
    this.postMessage(total)
}