import React from 'react';
import ReactDOM from 'react-dom';

export default class ElectronicAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            electronicAddress: ''

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
            console.log(this.state.electronicAddress)
        }

        render(){
            return(
                <div className="row">
                    <form className="col-12">
                        <div className="form-group">
                            <label>
                                Electronic address:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                name="electronicAddress"
                                placeholder="Electronic address"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                </div>


            )
        }
    }