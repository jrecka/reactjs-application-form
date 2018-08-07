import React from 'react';
import ReactDOM from 'react-dom';

export default class MaidenName extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            maidenName: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {

            console.log(this.state.maidenName);
    }
    render(){
        return(
            <div className="row">
                <form className='col-md-12'>
                    <div className="form-group">
                        <label>
                            Mother's maiden name:
                        </label>
                        <input name="maidenName" className='form-control' type="text" onChange={this.handleChange} placeholder="mother's maiden name"/>
                    </div>
                </form>
                {/*<button onClick={this.handleClick}></button>*/}
            </div>)
    }
}