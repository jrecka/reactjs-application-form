import React from 'react';
import ReactDOM from 'react-dom';

export default class Surname extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            surname: ''

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {

            console.log(this.state.surname)
    }

    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Surname
                        </label>
                        <input
                            name="sureame"
                            className='form-control'
                            type='text'
                            onChange={this.handleChange}
                            placeholder="Surname">
                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}


            </div>)
    }
}