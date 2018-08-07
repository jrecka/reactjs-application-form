import React from 'react';
import ReactDOM from 'react-dom';

export default class Reason extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reasonOfApplication: '',
            message: ''
        }
    }

    showTextarea = () => {

        let textarea = document.querySelector('textarea'),
            selectVal = document.querySelector('select').value;
        if( selectVal === "Another reason") {
            textarea.classList.remove('show-or-hide');
        }else{
            textarea.classList.add('show-or-hide');
        }
    }



    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value
        })

        this.showTextarea();

    }


    handleClick = () => {
    console.log(this.state.reasonOfApplication);
    console.log(this.state.message);
    }

    render(){
        return(
            <div className="row">
                <form className="col-md-12">
                    <div className="form-group">



                        <label>
                            Reason for submitting the application
                        </label>
                        <select name="reasonOfApplication"
                                className="form-control"
                                value={this.state.reasonOfApplication}
                                onChange={this.handleChange}>
                            {this.props.options.map( (option,i) => <option key={i} value={option}>{option}</option>)}
                        </select>
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} className="show-or-hide" rows="4" cols="50"></textarea>

                    </div>
                </form>
{/*<button onClick={this.handleClick}>clickclickclick</button>*/}
            </div>
        )
    }

}