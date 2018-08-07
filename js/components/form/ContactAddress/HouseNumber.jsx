import React from 'react';
import ReactDOM from 'react-dom';

export default class HouseNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            houseNumber: ''
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        console.log(this.showData());

    }

    showData = () => {

        console.log(this.state.houseNumber);
    }

    render() {
        return (
            <div className="row">
                <form className="col-12">
                    <div className="form-group">
                        <label>
                            House number:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="houseNumber"
                            placeholder="House number"
                            onChange={this.handleChange}/>
                    </div>
                </form>
            </div>

        )
    }
}