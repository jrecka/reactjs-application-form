import React from 'react';
import ReactDOM from 'react-dom';


export default class FlatNumber extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flatNumber: ''
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
        console.log(this.state.flatNumber);
    }

    render() {
        return (
            <div className="row">
                <form className="col-12">

                    <div className="form-group">
                        <label>
                            Flat:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="flatNumber"
                            placeholder="Flat number"
                            onChange={this.handleChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}