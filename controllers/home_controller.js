module.exports.home = function(req, res){
    //return res.end('<h1>Express is up for Codeial</h1>');

    //to check view engine is running
    return res.render('home', {
        title: "Home"
    });
}

// moduke.exports.actionName = function(req, res){}