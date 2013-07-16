/*
 * GET home page.
 */

var list = require('../list');

exports.index = function(req,res,next) {
    res.render('index',{
        list: list.people
    });
}

exports.checkin = function(req,res,next) {
    var uid = req.params.uid;
    list.findByUidAndUpdate(uid,{
        key: 'stat',
        value: 'here'
    },function(newPerson){
        console.log('ok')
        res.render('ok',{
            person: newPerson
        })
    });
}