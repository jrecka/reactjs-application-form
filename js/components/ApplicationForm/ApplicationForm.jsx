import React from 'react';
import ReactDOM from 'react-dom';
import ApplicantData from './ApplicantData.jsx';
import Contact from './Contact.jsx';
import AddPhoto from './AddPhoto.jsx';
import Reason from './Reason.jsx';
import Signature from './Signature/Signature.jsx';

export default class ApplicationForm extends React.Component{
    render(){
        return(
            <div>
                <Signature options={['1', '2', '3', '4', '5', '6']}/>
                <Reason options={['-', 'First Id', 'Change of data contained in the Id', 'Id is out of date', 'Id is lost', 'Face image changed', 'Damage of Id', 'Another reason']}/>
            </div>
        )
    }
}
