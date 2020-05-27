module.exports.home = function(req, res){

    //to check cookies which added from chrome and to print in console
    console.log(req.cookies);

    //to change the cookies and send
    res.cookie('something', 30);

    //return res.end('<h1>Express is up for Codeial</h1>');
    //to check view engine is running
    return res.render('home', {
        title: "Home"
    });
}

// moduke.exports.actionName = function(req, res){}