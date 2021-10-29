import React from 'react';
import FormInput  from '../forminput/forminput';

import './signin.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
handlesubmit = event => {
    event.preventdefault();
    this.setState({ email: '', password: ''})
}

handleChange = event =>{
    const { value, name } = event.target;
    this.setState({ [name]: value})
}
    render(){
        return(
            <div className='signin'>
                <h2> Already have an account </h2>
                    <span> SignIn with registered Email & Password </span>

                <form onSubmit={this.handlesubmit}>
                    <FormInput name='email' 
                            type='email' 
                            handleChange={this.handleChange}
                            value={this.state.email}
                            label='email'
                            required />

                    <FormInput name='password' 
                            type='password' 
                            value={this.state.email} 
                            handleChange={this.handleChange} 
                            label='password'
                            required 
                            />
                    <input name='submit' type='Submit Form' />
                </form>
            </div>
        )
    }
}
export default SignIn;