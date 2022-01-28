import axios from "axios";
class AuthenticationService{

    

    executeBasicAthenticationService(username, password){
        return axios.get('http://localhost:8080/basicauth', {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJWTAthenticationService(username, password){
        return axios.post('http://localhost:8080/authenticate',{
            username,
            password
        })
    }

    createBasicAuthToken(username, password){
        return 'Basic ' + window.btoa(username + ':' + password)
    }

    createJwtToken(token){
        return 'Bearer ' + token
    }
   
    registerSuccessfulLogin(username, password){

        // let username = 'in28minutes'
        // let password = 'dummy'

        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password))
    } 

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptor(this.createJwtToken(token))
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



    setupAxiosInterceptor(token){

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn){
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()