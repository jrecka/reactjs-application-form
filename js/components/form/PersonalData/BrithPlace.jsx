import React from 'react';
import ReactDOM from 'react-dom';

export default class BrithPlace extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            birthplace: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
         console.log(this.state.birthplace);
    }

    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Birthpalce
                        </label>
                        <input
                            name="birthplace"
                            className='form-control'
                            type='text'
                            onChange={this.handleChange}
                            placeholder="Birthplace">

                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}

            </div>)
    }
}