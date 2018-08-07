import React from 'react';
import ReactDOM from 'react-dom';

export default class Nationality extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nationality: ''

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
            console.log(this.state.nationality);
    }
    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Nationality
                        </label>
                        <input
                            name="nationality"
                            className='form-control'
                            type='text'
                            onChange={this.handleChange}
                            placeholder="Nationality">
                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}
            </div>)
    }
}