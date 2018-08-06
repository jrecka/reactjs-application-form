import React from 'react';
import ReactDOM from 'react-dom';
import ApplicantData from './ApplicantData.jsx';
import {Link} from 'react-router-dom';

export default class ApplicationForm extends React.Component{
    render(){
        return(
            <div>
                <div className="container application-form">
                    <ApplicantData
                        options={['female', 'male']}/>
                    {/*<Contact/>*/}
                    {/*<AddPhoto/>*/}
                        {/*options={*/}
                            {/*[*/}
                                {/*'-',*/}
                                {/*'First Id',*/}
                                {/*'Change of data contained in the Id',*/}
                                {/*'Id is out of date',*/}
                                {/*'Id is lost',*/}
                                {/*'Face image changed',*/}
                                {/*'Damage of Id',*/}
                                {/*'Another reason'*/}
                            {/*]*/}
                        {/*}*/}
                    {/*/>*/}
                    {/*<Declaration/>*/}
                    <Link to="/contact">--></Link>
                </div>
            </div>
            )
        }
    }
    {/*<Signature options={['1', '2', '3', '4', '5', '6']}/>*/}