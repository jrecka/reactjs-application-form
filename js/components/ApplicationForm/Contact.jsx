import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';


export default class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            street: '',
            houseNumber: '',
            flat: '',
            postalCode: '',
            city: '',
            ePuap: '',
            email: '',
            phone: '',


        }
    }


    handleChange = e =>{
        this.setState(
            [e.target.name]: e.target.value
        )
    }
    handleClick = () =>{
        console.log(this.showData());

    }

        showData = () =>{
            const contactData = {
                street: this.state.street,
                houseNumber: this.state.houseNumber,
                flat: this.state.flat,
                postalCode: this.state.postalCode,
                city: this.state.city,
                ePuap: this.state.ePuap,
                email: this.state.email,
                phone: this.state.phone

            }
            return contactData
        }
        render(){
        return(
            <div className="row">
                <form className="col-12">
                    <div className="form-group">
                        <label>
                            Steet:
                        </label>
                        <input  type="text" className="form-control" name="street" placeholder="street" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>
                            House number:
                        </label>
                            <input type="text" className="form-control" name="houseNumber" placeholder="house number" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>
                            Flat:
                        </label>
                            <input type="text" className="form-control" name="flat" placeholder="flat" onChange={this.handleChange}/>
                    </div>
                    <div class="form-group">
                        <label>
                            Postal code:
                        </label>
                            <input type="text" className="form-control" name="postalCode" placeholder="postal code" onChange={this.handleChange}/>
                        <div className="form-group">
                            <label>
                                City:
                            </label>
                            <input type="text" className="form-control" name="city" placeholder="Last name" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            Electronic address:
                        </label>
                        <input type="text" className="form-control" name="ePuap" placeholder="electrionic address" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>
                            Phone number:
                        </label>
                        <input type="text" className="form-control"  name="phone" placeholder="phone number" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>
                            Email:
                        </label>
                        <input type="email" className="form-control" name="email" placeholder="email" onChange={this.handleChange}/>
                    </div>
                </form>
                <Link to="/addPhoto">--></Link>
            </div>

        )
    }
}