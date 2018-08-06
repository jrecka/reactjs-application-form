import React from 'react';
import ReactDOM from 'react-dom';

export default class Declatarion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            date: '',
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showData = () => {
        const dataObj = {
            city: this.state.city,
            date: this.state.date
        }

        console.log(dataObj)
    }

    render(){
        return(
            <div className="row">
                <form className="col-md-12">
                    <div className="form-group">
                        <label>
                            City

                        </label>
                        <input className="form-control" type="text" name="city" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>
                            Date
                        </label>
                        <input className="form-control" type="date" name="date" onChange={this.handleChange}/>
                    </div>
                </form>
                {/*<button className="btn"  onClick={this.showData}></button>*/}
            </div>
        )
    }
    }