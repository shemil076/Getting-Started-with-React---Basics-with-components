import axios from "axios";
class AuthenticationService{

    

    executeBasicAthenticationService(username, password){
        return axios.get('http://localhost:8080/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ':' + password)
    }
   
    registerSuccessfulLogin(username, password){

        // let username = 'in28minutes'
        // let password = 'dummy'

        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password))
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