var express = require('express');
const { getUserAndPassword } = require('../../models/usersModel');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout:'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        console.log(req.body);

        var data = await usersModel.getUserAndPassword(user, password);

        if(data != undefined){
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login',{
                layout: 'admin/layout',
                error = true
            })
        }
    }
finally {}
});

module.exports = router;
