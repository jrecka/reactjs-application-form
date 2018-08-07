import React from 'react';
import ReactDOM from 'react-dom';

export default class DateOfApplication extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dateOfApplication: '',
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showData = () => {
        const dataObj = {
            dateOfApplication: this.state.dateOfApplication
        }

        console.log(dataObj)


        render(){
            return(
                <div className="row">
                    <form className="col-md-12">
                        <div className="form-group">
                            <label>
                                Date
                            </label>
                            <input className="form-control" type="date" name="dateOfApplication0" onChange={this.handleChange}/>
                        </div>
                    </form>
                    {/*<button className="btn"  onClick={this.showData}></button>*/}
                </div>
            )
        }
    }