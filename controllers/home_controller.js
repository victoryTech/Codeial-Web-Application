const Post = require('../models/post');

module.exports.home = function(req, res){

    //to check cookies which added from chrome and to print in console
    //console.log(req.cookies);

    //to change the cookies and send
    //res.cookie('something', 30);

    //return res.end('<h1>Express is up for Codeial</h1>');
    
    // to show post in home without user information
    //   Post.find({}, function(err, posts){
    //     return res.render('home', {
    //         title: "Codial | Home",
    //         posts: posts
    //   });
    
    // });

    //populate the user of each post
    //to get info of user which having post in home
    Post.find({}).populate('user').exec(function(err, posts){
        
        return res.render('home', {
            title: "Codial | Home",
            posts: posts
      });
    });
}

// moduke.exports.actionName = function(req, res){}