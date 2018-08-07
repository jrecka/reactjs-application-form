import React from 'react';
import ReactDOM from 'react-dom';

export default class Pesel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pesel: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {

        console.log(this.state.pesel)
    }

    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            ID
                        </label>
                        <input
                            name="pesel"
                            className='form-control'
                            type='text'
                            onChange={this.handleChange}
                            placeholder="Social Security numbers">
                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}


            </div>
        )
    }
}