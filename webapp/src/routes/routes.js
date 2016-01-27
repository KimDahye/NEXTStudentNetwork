var config = require('getconfig'); 
var fs = require('fs');
var formidable = require('formidable');

module.exports = function(app, passport) {

    app.get('/', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        var userData = req.user.toObject();

        if (!!userData.password) {
            delete userData.password;
        }
       
        res.render('profile.ejs', {
            user : userData // get the user out of session and pass to template
        });
    });

    // upload(save) user's photo image. 
    // it return the relative address of the uploaded image.
    app.post('/profile/photo', isLoggedIn, function(req, res) {
        var CONSTANT = config.CONSTANT;
        var form = new formidable.IncomingForm();
        
        form.parse(req, function(err, fields, files) {
            console.log(files);
        });

        form.on('end', function(fields, files) {
            /* Temporary location of our uploaded file */
            var temp_path = this.openedFiles[0].path;
            /* The file name of the uploaded file */
            var file_name = this.openedFiles[0].name;
            /* Location where we want to copy the uploaded file */
            var new_location = './webapp/public/peoples/';          
 
            fs.rename(temp_path, new_location + file_name, function(err) {  
                if (err) {
                    console.error(err);
                    res.json({"status": CONSTANT.STATUS_FAIL, "message": CONSTANT.MESSAGE_ERROR_IMAGE_UPLOAD_FAIL});
                } else {
                    console.log("success!")
                    res.json({"status": CONSTANT.STATUS_SUCCESS, "message": {"address": "peoples/"+file_name}})
                }
            });
        });
    });

    // update user's photourl, moto, markdown as requested. 
    app.put('/profile', isLoggedIn, function(req, res) {
        var CONSTANT = config.CONSTANT;

        User.findOne({ 'email' :  req.user.email }, function(err, user) {
            // if there are any errors, return the error
            if (err) {
                res.json({"status": CONSTANT.STATUS_FAIL, "message": CONSTANT.MESSAGE_ERROR});
            }

            //update user
            user.profile.photourl = req.body.photourl;
            user.profile.moto = req.body.moto;
            user.profile.markdown = req.body.markdown;
            user.profile.movieurl = req.body.movieurl;
            user.save();
            res.json({"status": CONSTANT.STATUS_SUCCESS, "message": CONSTANT.MESSAGE_NON});
        });
    });

    // =====================================
    // ADMIN API ===========================
    // =====================================
    app.get('/changeStatus', isAdmin, function(req,res) { 
        var CONSTANT = config.CONSTANT;
        console.log("admin authentication success:" + req.user.email)
        var targetUser = req.targetUser;
        if (typeof(targetUser) == "undefined") 
            res.json({"status": CONSTANT.STATUS_FAIL, "message": "인수가 잘못되었습니다."});
        if(req.target)
        console.log("target user: " + req.targetUser);
        User.findOne({ 'email' :  req.targetUser }, function(err, user) {
            // if there are any errors, return the error
            if (err) {
                res.json({"status": CONSTANT.STATUS_FAIL, "message": CONSTANT.MESSAGE_ERROR});
            }

            var confirm = !user.confirm;
            user.confirm =  confirm;
            user.save();
            res.json({"status": CONSTANT.STATUS_SUCCESS, "message": CONSTANT.MESSAGE_CSOK});
        });
    });
    

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// route middlewrae to make sure a user is admin
function isAdmin(req, res, next) {
    var admins = config.adminlist;
    if (req.isAuthenticated() && admins.indexOf(req.user.email) != -1)
        return next();
    console.log("admin authentication failed");
    res.redirect('/');
}
