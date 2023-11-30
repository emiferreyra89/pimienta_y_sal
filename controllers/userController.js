const userController = {
    usuario: function(req, res, next) {
        let mensaje = "aca todavia no hay nada, volve al home...";
        res.render('user', {title:'User', mensaje});
      }
}

module.exports = userController;