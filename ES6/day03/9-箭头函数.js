function test() {
    console.log(this);
    (() => {
        console.log(this);
    })();
}
test();
let obj = {
    name: 'zhangsan',
    test,
}
obj.test()

function test1() {
    console.log(this);
    return () => {
        console.log(this);
    };
}

let obj1= {
    name: 'zhangsan',
    test:test1()
}
obj1.test()