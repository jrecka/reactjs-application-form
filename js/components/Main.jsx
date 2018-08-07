import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';

export default class Main extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12 main-style">
                        <h1 className="main-headline">
                            ID card application
                        </h1>
                        <Link
                            to="/applicationForm"
                            className="form-background-main">
                            <span>
                                Fill out the application
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        )}
}