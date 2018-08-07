import React from 'react';
import ReactDOM from 'react-dom';

export default class PlaceOfApplication extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            placeOfApplication: '',
        }
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showData = () => {
        const dataObj = {
            city: this.state.placeOfApplication,
        }

        console.log(dataObj);


    render(){
        return(
            <div className="row">
                <form className="col-md-12">
                    <div className="form-group">
                        <label>
                            City
                        </label>
                        <input className="form-control" type="text" name="placeOfApplication" onChange={this.handleChange}/>
                    </div>
                </form>
                {/*<button className="btn"  onClick={this.showData}></button>*/}
            </div>
        )
    }
    }