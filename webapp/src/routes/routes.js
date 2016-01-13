var config = require('getconfig'); 

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

    // update user's photourl, moto as requested. 
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
            user.save();
            res.json({"status": CONSTANT.STATUS_SUCCESS, "message": CONSTANT.MESSAGE_NON});
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
