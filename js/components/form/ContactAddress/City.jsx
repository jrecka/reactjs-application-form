import React from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            city: ''

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
      console.log(this.state.city);
        }

        render(){
            return(
                <div className="row">
                    <form className="col-12">
                        <div className="form-group">
                            <label>
                                City:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="city"
                                placeholder="City"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>


            )
        }
    }
