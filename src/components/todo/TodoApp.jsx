import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComponent></LoginComponent>
            </div>
        )
    }
}


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username : 'in28minutes', 
            password : '',
            hasLoginFail: false,
            hasLoginSuccess: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }



    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    loginClicked(){
        if (this.state.username=='in28minutes' && this.state.password=='dummy'){
            this.setState({hasLoginSuccess:true})
            this.setState({hasLoginFail:false})

        }else{
            this.setState({hasLoginSuccess:false})
            this.setState({hasLoginFail:true})
        }
    }


    // handleUsernameChange(event){
    //     this.setState({
    //         [event.target.name] : event.target.value
    //     })
    // }

    // handlePasswordChange(event){
    //     this.setState({
    //         password : event.target.value
    //     })
    // }
    
    
    render() {
        return (
           <div>
                <ShowInvalidCredentials hasLoginFail={this.state.hasLoginFail}/>
                <ShowLoginSuccessful hasLoginSuccess={this.state.hasLoginSuccess}/>
                Usser Name : <input type="text" name="username" value = {this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value = {this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
           </div>
        )
    }
}


function ShowInvalidCredentials(props) {
    if(props.hasLoginFail){
        return <div>Invalid credentials</div>
    }else{
        return null
    }
}

function ShowLoginSuccessful(props){
    if(props.hasLoginSuccess){
        return <div>Login successful</div>
    }else{
        return null
    }
}

export default TodoApp;