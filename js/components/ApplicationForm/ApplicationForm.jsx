import React from 'react';
import ReactDOM from 'react-dom';
import ApplicantData from './ApplicantData.jsx';
import Contact from './Contact.jsx';
import AddPhoto from './AddPhoto.jsx';
import Reason from './Reason.jsx';

export default class ApplicationForm extends React.Component{
    render(){
        return(
            <Reason options={['-', 'First Id', 'Change of data contained in the Id', 'Id is out of date', 'Id is lost', 'Face image changed', 'Damage of Id', 'Another reason']}/>
        )
    }
}
