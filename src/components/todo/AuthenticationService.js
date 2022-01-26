class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('authenticatedUser', username);
    } 

    logOutSuccessfulLogin(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user ==null) return false;
        return true
    }
}

export default new AuthenticationService()