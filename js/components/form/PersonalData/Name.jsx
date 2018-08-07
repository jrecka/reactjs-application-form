import React from 'react';
import ReactDOM from 'react-dom';

export default class Name extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleClick = () =>{
        console.log(this.state.name)
    }

    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Name
                        </label>
                        <input
                            name="name"
                            className='form-control'
                            type='text'
                            onChange={this.handleChange}
                            placeholder="Name">

                        </input>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}


            </div>
        )
    }
}