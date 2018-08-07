import React from 'react';
import ReactDOM from 'react-dom';

export default class PostalCode extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            postalCode: ''
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
        console.log(this.state.postalCode);
        }
        render(){
            return(
                <div className="row">
                    <form className="col-12">
                        <div class="form-group">
                            <label>
                                Postal code:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="postalCode"
                                placeholder="postal code"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>

            )
        }
    }