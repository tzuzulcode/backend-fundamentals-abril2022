function authPermissions(config){

    if(config.authRequired){
        return function(req,res,next){
            if(req.session.user && req.session.user.loggedIn){
                return next()
            }

            return res.redirect("/")
        }
    }else{
        return function(req,res,next){
            if(!config.exclude.includes(req.path) && req.session.user?.loggedIn){
                
                return res.redirect("/")
            }

            return next()
        }
    }

    
}

module.exports = authPermissions