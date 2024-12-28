"use strict";
//* Wrong approach
//* We had a login class that only allows logging in with Google
class LoginPrevious {
    login(type) {
        if (type == "Google") {
            console.log("Sign in with Google");
        }
    }
}
//* We received a new requirement to support Facebook login in our system, so we have added the ability to log in using Facebook.
class LoginAfter {
    login(type) {
        if (type == "Google") {
            console.log("Sign in with Google");
        }
        if (type == "Facebook") {
            console.log("Sign in with Facebook");
        }
    }
}
//* We've overridden the login method to enable signing in with Google.
class LoginWithGoogle {
    login() {
        console.log("Sign in with Google");
    }
}
//* We've overridden the login method to enable signing in with Facebook.
class LoginWithFacebook {
    login() {
        console.log("Sign in with Facebook");
    }
}
