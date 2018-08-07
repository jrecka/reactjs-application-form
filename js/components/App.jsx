import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import ApplicationForm from './form/ApplicationForm';
import Main from './Main'


export default class App extends React.Component {
 
    
    render() {
        
        return (
            <div >
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/applicationForm" component={ApplicationForm}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>


        )
  }
}
