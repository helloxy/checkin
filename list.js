// 不使用数据库的话，把数据存在内存里，每跑一次服务内存就会释放，数据也就会消失。
var _ = require('underscore');

var list = [
    {
        uid: '1',
        name: 'A',
        desc: 'B',
        email: 'i@A.com',
        stat: 'null'
    },
    {
        uid: '2',
        name: 'A',
        desc: 'B',
        email: 'i@A.com',
        stat: 'null'
    }
]

exports.findByUid = function(uid,cb) {
    if (uid) {
        _.each(list,function(item,index){
            if (uid == item.uid) {
                cb(item)
            }
        });
    }
}

exports.findByUidAndUpdate = function(uid,body,cb) {
    exports.findByUid(uid,function(person) {
        person[body.key] = body.value;
        cb(person);
    })
}

exports.people = list;