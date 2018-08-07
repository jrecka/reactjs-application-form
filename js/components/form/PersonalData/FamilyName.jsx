import React from 'react';
import ReactDOM from 'react-dom';

export default class FamilyName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            familyName: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        localStorage.setItem("familyName", this.state.familyName);
    }

    handleClick = () => {

        console.log(this.state.familyName);
    }
    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Family name
                        </label>
                        <input
                            name="familyName"
                            className='form-control'
                            type='text'
                            onChange={this.handleChange}
                            placeholder="Family name">

                        </input>

                    </div>
                </form>
            </div>
        )
    }
}