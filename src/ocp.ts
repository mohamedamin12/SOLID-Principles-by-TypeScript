//* Wrong approach

//* We had a login class that only allows logging in with Google
class LoginPrevious {
  public login(type: string) {
    if (type == "Google") {
      console.log("Sign in with Google");
    }
  }
}

//* We received a new requirement to support Facebook login in our system, so we have added the ability to log in using Facebook.
class LoginAfter {
  public login(type: string) {
    if (type == "Google") {
      console.log("Sign in with Google");
    }
    if (type == "Facebook") {
      console.log("Sign in with Facebook");
    }
  }
}

//* Correct approach
interface ILogin {
  login(): void;
}

//* We've overridden the login method to enable signing in with Google.
class LoginWithGoogle implements ILogin {
  login(): void {
    console.log("Sign in with Google");
  }
}

//* We've overridden the login method to enable signing in with Facebook.
class LoginWithFacebook implements ILogin {
  login(): void {
    console.log("Sign in with Facebook");
  }
}