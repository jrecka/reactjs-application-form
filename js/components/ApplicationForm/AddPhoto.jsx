import React from 'react';
import ReactDOM from 'react-dom';

export default class AddPhoto extends React.Component{
            constructor(props) {
                super(props);
                this.state = {
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rL-G7r58RVlw3KDddzmm09h89sOcBlhNF9xUIpCH_1scYyiT'
                }
            }

            handleChange = e => {
                this.setState(
                    imgSrc:e.target.value
            )
            }

            render() {
                return (
                    <div>
                        <h2>Photo of the person submitting the application</h2>
                        <img onChange={this.handleChange} src={this.state.imgSrc} className="id-photo" alt="id photo"/>
                    </div>
                )
            }

}