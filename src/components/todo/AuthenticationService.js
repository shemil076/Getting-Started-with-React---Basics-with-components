class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('username', username);
    } 

    logOutSuccessfulLogin(){
        sessionStorage.removeItem('username');
    }
}

export default new AuthenticationService()