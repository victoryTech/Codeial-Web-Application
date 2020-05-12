module.exports.profile = function(req, res){
    //res.end('<h1>User Profiles</h1>');
    return res.render('user_profile',{
        title: 'User Profile'
    })
}