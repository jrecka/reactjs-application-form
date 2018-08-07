import React from 'react';
import ReactDOM from 'react-dom';

export default class Email extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            email: ''
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
       console.log(this.state.email)

        }
        render(){
            return(
                <div className="row">
                    <form className="col-12">
                        <div className="form-group">
                            <label>
                                Email:
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="email"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>

            )
        }
    }