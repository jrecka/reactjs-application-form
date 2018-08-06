import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationForm from './ApplicationForm/ApplicationForm.jsx';
import { HashRouter, Route, Link, Switch, NavLink,} from 'react-router-dom';
import Main from './Main.jsx';
import Contact from './ApplicationForm/Contact';
import AddPhoto from './ApplicationForm/AddPhoto';
import Declaration from  './ApplicationForm/Declatarion';




export default class App extends React.Component {
 
    
    render() {
        
        return (
            <div>
                <HashRouter>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route path="/applicationForm" component={ApplicationForm}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/addPhoto" component={AddPhoto}/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>


        )
  }
}
