import React from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            street: ''

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
        console.log(this.state.street);
    }

    render() {
        return (
            <div className="row">
                <form className="col-12">
                    <div className="form-group">
                        <label>
                            Steet:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="street"
                            placeholder="Street"
                            onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}
