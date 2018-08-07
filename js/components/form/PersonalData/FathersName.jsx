import React from 'react';
import ReactDOM from 'react-dom';

export default class ApplicantData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fathersName: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        console.log(this.state.fathersName);

    }

    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Father's name:
                        </label>
                        <input
                            name="fathersName"
                            className='form-control'
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Father's name">

                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}
            </div>
        )
    }
}