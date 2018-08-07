import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Pesel from './PersonalData/Pesel';
import Name from './PersonalData/Name';
import Surname from './PersonalData/Surname';
import FamilyName from './PersonalData/FamilyName';
import DateOfBirth from './PersonalData/DateOfBirth';
import Birthplace from './PersonalData/BrithPlace';
import Gender from './PersonalData/Gender';
import Nationality from './PersonalData/Nationality';




export default class ApplicationForm extends React.Component{
    render(){
        return(
            <div className="container form-background" style={{padding: "3rem"}}>
                <div className="row container">
                    <div className="col-md-4">
                        <Pesel/>
                        <Name/>
                        <Surname/>
                        <FamilyName/>
                    </div>
                    <div className="col-md-4">
                        <DateOfBirth/>
                        <Birthplace/>
                        <Nationality/>
                        <Gender />
                    </div>
                </div>
            </div>
            )
        }
    }
    {/*<Signature options={['1', '2', '3', '4', '5', '6']}/>*/}
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