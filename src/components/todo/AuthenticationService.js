class AuthenticationService{
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem('username', username);
    } 
}

export default new AuthenticationService()