function addSessionToTemplate(config){
    return function(req,res,next){
        const user = req.session.user

        res.locals.user = user

        next()
    }
}

// function addSessionToTemplate(req,res,next){
//     const user = req.session.user

//     res.locals.user = user

//     next()
// }


module.exports = addSessionToTemplate