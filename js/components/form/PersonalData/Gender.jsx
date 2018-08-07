import React from 'react';
import ReactDOM from 'react-dom';

export default class Gender extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gender: ''
        }
    }

    handleChange = e => {
        this.setState({
            gender: e.target.value
        })
        localStorage.setItem("gender", this.state.gender)
    }

    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Gender
                        </label>
                        <select name="gender"
                                className="form-control"
                                value={this.state.gender}
                                onChange={this.handleChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </form>
            </div>)
    }
}