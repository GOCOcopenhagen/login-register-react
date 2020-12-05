import React from 'react';
import loginImg from "../../silhouette-basket-08.svg";


let checkName = false;

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            Email: null,
            password: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state
        if (data.Email == "your_name@goco.dk" && data.password == "GOodCOmpany"){
            checkName = true;
            console.log(checkName);
            window.alert("Hello: "+ data.Email);
        } else {
            window.alert("Wrong Email or Password")
            checkName = false;
        }
        
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">{(checkName) ? "Hello "+ this.state.Email : "Login"}</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} alt="basketball player"/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" placeholder="Email" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={this.handleInputChange}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">login</button>
            </div>
        </div>
        {console.log("Hello A: "+ checkName)}
        </form>
        )
    }
}