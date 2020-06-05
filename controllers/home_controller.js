// const Post = require('../models/post');
// const User = require('../models/user');

// module.exports.home = function(req, res) {

//     //to check cookies which added from chrome and to print in console
//     //console.log(req.cookies);

//     //to change the cookies and send
//     //res.cookie('something', 30);

//     //return res.end('<h1>Express is up for Codeial</h1>');

//     // to show post in home without user information
//     //   Post.find({}, function(err, posts){
//     //     return res.render('home', {
//     //         title: "Codial | Home",
//     //         posts: posts
//     //   });

//     // });

//     //populate the user of each post
//     //to get info of user which having post in home
//     Post.find({})
//         .populate('user')
//         .populate({
//             path: 'comments',
//             populate: {
//                 path: 'user'
//             }
//         })
//         .exec(function(err, posts) { // this acts like normal callback function
//             User.find({}, function(err, users) {
//                 return res.render('home', {
//                     title: "Codeial | Home",
//                     posts: posts,
//                     all_users: users
//                 });
//             });
//         })
// }

// // module.exports.actionName = function(req, res){}


// // using then
// // post.find({}).populate('comments').then(function());
// // let posts = post.find({}).populate('comments').exec();
// // posts.then

const Post = require('../models/post');
const User = require('../models/user');



module.exports.home = async function(req, res) {

    try {
        // populate the user of each post
        let posts = await Post.find({})
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
            });

        let users = await User.find({});

        return res.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users
        });

    } catch (err) {
        console.log('Error', err);
        return;
    }

}

// module.exports.actionName = function(req, res){}


// using then
// Post.find({}).populate('comments').then(function());

// let posts = Post.find({}).populate('comments').exec();

// posts.then()