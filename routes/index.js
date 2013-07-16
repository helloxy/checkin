/*
 * GET home page.
 */

var list = require('../list').people;

exports.index = function(req,res,next) {
    res.render('index',{
        list: list
    });
}

exports.checkin = function(req,res,next) {
    var uid = req.params.uid;
    list.findByUidAndUpdate(uid,{
        key: 'stat',
        value: 'here'
    },function(newPerson){
        res.render('ok',newPerson)
    });
}