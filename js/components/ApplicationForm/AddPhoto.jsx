import React from 'react';
import ReactDOM from 'react-dom';
import Reason from './Reason.jsx';
import {Link} from 'react-router-dom';

export default class AddPhoto extends React.Component{
            constructor(props) {
                super(props);
                this.state = {
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rL-G7r58RVlw3KDddzmm09h89sOcBlhNF9xUIpCH_1scYyiT'
                }
            }

            handleChange = e => {
                this.setState({
                    imgSrc: e.target.value
                })
            }

            render() {
                return (
                    <div>
                           <h3>
                               Photo of the person submitting the application
                           </h3>
                            <img
                                onChange={this.handleChange}
                                src={this.state.imgSrc}
                                className="id-photo"
                                alt="id photo"
                            />
                            <div className="row">
                            <form className="col-md-12">
                                <div className="form-group">
                                    <label>
                                        Add your image
                                    </label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        name="imgSrc"
                                        onChange={this.handleChange}
                                        value={this.state.imgSrc}
                                    />
                                </div>
                            </form>
                        </div>
                        <Reason/>
                    </div>
                )
            }

}