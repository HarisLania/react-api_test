import React, { Component, SyntheticEvent } from 'react'
import './Public.css';

class Register extends Component {
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    confirm_password = '';

    submit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log(
            {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                confirm_password: this.confirm_password
            }
        );
        
    }

    render () {
        return (
            <main className="form-signin">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please Register!</h1>
                    <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="First Name" required
                    onChange={e => this.first_name = e.target.value} />
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Last Name" required
                    onChange={e => this.last_name = e.target.value} />
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                    onChange={e => this.email = e.target.value} />
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                    onChange={e => this.password = e.target.value} />
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingInput" placeholder="Confirm Password" required
                    onChange={e => this.confirm_password = e.target.value} />
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
            </main>
        )
    }
}

export default Register