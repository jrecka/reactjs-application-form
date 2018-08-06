import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';

export default class Main extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <h1>
                    ID card
                </h1>
                <Link to="/applicationForm">ID card request</Link>
            </div>
        )}
}