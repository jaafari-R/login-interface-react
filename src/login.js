import React, { Component } from "react";
import swal from 'sweetalert';

import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './login.css';

class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }

        this.login = this.login.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    login(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // this.setState({email: email, password: password})

        const auth = this.authenticate(email, password);

        if(auth)
            swal("Logged in Successfully", ":)", 'success');
        else
            swal("Invalid Credentials", ":(", 'error');
    }

    authenticate(email, password) {
        if(email == 'test@test.test' &&
            password == '1234')
            return true;
        return false;
    }

    render() {
        return <div id="container" class="row text-center">
            <div class="offset-md-4 col-md-4">
                <form onSubmit={(e) => {this.login(e);}}>
                    <h1 class="">Login App</h1>
                    <br />
                    <input class="form-control" type="text" name="email" id="email" placeholder="Email"/>
                    <br />
                    <input class="form-control" type="password" name="password" id="password" placeholder="Password"/>
                    <br />
                    <button type="submit" class="btn btn-primary form-control">Sign in</button>
                </form>
            </div>
        </div>
    }
}

export default Login;