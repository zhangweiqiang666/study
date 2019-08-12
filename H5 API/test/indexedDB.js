 (function () {
     var dbObj = {};
     /**
      * 打开数据库
      */
     dbObj.init = function (param) {
         this.dbName = param.dbName;
         this.dbVersion = param.dbVersion;
         this.dbStoreName = param.dbStoreName;
         if (!window.indexedDB) {
             alert('浏览器不支持indexedDB')
         }
         var request = indexedDB.open(this.dbName, this.dbVersion);
         // 打开数据库失败
         request.onerror = function (event) {
             console.log('数据库打开失败,错误码：', event)
         }
         // 打开数据库成功
         request.onsuccess = function () {
             // 获取数据对象
             dbObj.db = this.result;
             console.log('连接数据库成功');
         }

         // if (this.db.objectStoreNames.contains(dbObj.dbStoreName)) {
         //     console.log('数据仓库已存在');
         // }
         // 创建数据库
         request.onupgradeneeded = function (event) {
             dbObj.db = this.result;
             dbObj.db.createObjectStore(dbObj.dbStoreName, {
                //  设置了内联主键就不可以使用put的第二个参数
                //  keyPath: "id", //设置主键 
                 autoIncrement: true // 自增
             });
         }
     }

     dbObj.getStore = function (dbStoreName, mode) {
         // 获取事务对象 
         var ts = dbObj.db.transaction(dbStoreName, mode);
         // 通过事务对象去获取对象仓库
         return ts.objectStore(dbStoreName);
     }
     /**
      * 添加和修改数据
      */
     dbObj.put = function (msg, key) {
         var store = this.getStore(dbObj.dbStoreName, 'readwrite')
         var request = store.put(msg, key);
         request.onsuccess = function () {
             if (key) 
                 console.log('修改成功');
             else 
                 console.log('添加成功');
         };
         request.onerror = function (event) {
             console.log(event);
         }
     }
     /**
      * 删除数据
      */
     dbObj.delete = function (id) {
         var store = this.getStore(dbObj.dbStoreName, 'readwrite')
         var request = store.delete(id);
         request.onsuccess = function () {
             alert('删除成功');
         }

     }
     /**
      * 查询数据
      */
     dbObj.select = function (key) {
         var store = this.getStore(dbObj.dbStoreName, 'readwrite')
         if (key)
             var request = store.get(key);
         else
             var request = store.getAll();
         request.onsuccess = function () {
             console.log(request.result);
         }
     }
     /**
      * 删除表
      */
     dbObj.clear = function () {
         var store = this.getStore(dbObj.dbStoreName, 'readwrite')
         var request = store.clear();
         request.onsuccess = function () {
             alert('清除成功');
         }
     };
     console.log(dbObj)
     window.dbObj = dbObj;
 })()