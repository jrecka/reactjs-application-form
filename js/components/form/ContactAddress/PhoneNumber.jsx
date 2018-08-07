import React from 'react';
import ReactDOM from 'react-dom';



export default class PhoneNumber extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            phone: ''
        }
    }


    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
    })
    }
    handleClick = () =>{
        console.log(this.showData());

    }

    showData = () =>{
        console.log(this.state.phoneNumber);

        }
        render(){
            return(
                <div className="row">
                    <form className="col-12">
                        <div className="form-group">
                            <label>
                                Phone number:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="phoneNumber"
                                placeholder="phone number"
                                onChange={this.handleChange}/>
                        </div>
                </div>

            )
        }
    }