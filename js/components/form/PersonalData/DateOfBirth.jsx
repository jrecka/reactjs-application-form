import React from 'react';
import ReactDOM from 'react-dom';

export default class DateOfBirth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dateOfBirth: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {

        const personalData = {
                console.log(this.state.dateOfBirth);
    }
    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Date of birth
                        </label>
                        <input
                            name="dateOfBirth"
                            className='form-control'
                            type='date'
                            onChange={this.handleChange}>
                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}
            </div>)
    }
}