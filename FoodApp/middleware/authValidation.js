function authValidation(config){
    const {requiredRole,excent} = config
    return function(req,res,next){
        // if(req.session.user && req.session.user.loggedIn && requiredRole === req.session.user.role){

        // }
        console.log(req.originalURL)
        if(Array.isArray(excent) && excent.includes(req.path)){
            return next()
        }
        const {user} = req.session
        if(user?.loggedIn && requiredRole === user.role){
            return next()
        }

        return res.redirect("/not_allowed")
    }
}

module.exports = authValidation