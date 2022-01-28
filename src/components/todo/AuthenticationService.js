import axios from "axios";
class AuthenticationService{
    registerSuccessfulLogin(username, password){

        // let username = 'in28minutes'
        // let password = 'dummy'
  
        let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password)
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(basicAuthHeader)
    } 

    logOutSuccessfulLogin(){
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user ==null) return false;
        return true
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user ==null) return '';
        return user;
    }



    setupAxiosInterceptor(basicAuthHeader){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()