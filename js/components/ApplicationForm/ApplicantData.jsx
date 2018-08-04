import React from 'react';
import ReactDOM from 'react-dom';

export default class ApplicantData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pesel: '',
            name: '',
            lastName: '',
            familyName: '',
            dateOfBirth: '',
            birthpalce: '',
            nationality: '',
            sex: '',
            fathersName: '',
            mothersName: '',
            maidenName: '',


        }
    }

   handleChange = e => {
       this.setState({
          [e.target.name]: e.target.value
       })
   }

    handleClick = () => {

    const personalData = {
        pesel: this.state.pesel,
        name: this.state.name,
        lastName: this.state.lastName,
        familyName: this.state.familyName,
        dateOfBirth: this.state.dateOfBirth,
        birthpalce: this.state.birthpalce,
        nationality: this.state.nationality,
        sex: this.state.sex,
        fathersName: this.state.fathersName,
        mothersName: this.state.mothersName,
        maidenName: this.state.maidenName,

    }
        console.log(personalData );
    }
    render(){
        return(
        <div className="row">
          <form className='col-md-12'>
            <div>
                Personal data
            </div>
            <div className="form-group">
              <label>
                  ID:
              </label>
                <input name="pesel" className='form-control' type='text' onChange={this.handleChange} placeholder="Social Security numbers"></input>
            </div>
            <div className="form-group">
              <label>
                  Name:
              </label>
              <input name="name" className='form-control' type='text' onChange={this.handleChange} placeholder="Name"></input>
            </div>
            <div className="form-group">
              <label>
                  Last name:
              </label>
              <input name="lastName" className='form-control' type='text' onChange={this.handleChange} placeholder="Last name"></input>
            </div>
            <div className="form-group">
              <label>
                  Family name:
              </label>
                <input name="familyName" className='form-control' type='text' onChange={this.handleChange} placeholder="Family name"></input>
            </div>
            <div className="form-group">
              <label>
                  Date of birth:
              </label>
              <input name="dateOfBirth" className='form-control' type='date' onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
                <label>
                    Birthpalce:
                </label>
                <input name="birthpalce" className='form-control' type='text' onChange={this.handleChange} placeholder="Birthplace"></input>
            </div>
            <div className="form-group">
              <label>
                  Nationality:
              </label>
              <input name="nationality" className='form-control' type='text' onChange={this.handleChange} placeholder="Family name"></input>
            </div>
            <div className="form-check">
              <div>
                  Sex:
              </div>
              <input name="sex" className="form-check-input" type="checkbox" onChange={this.handleChange} value="female" />
              <label className="form-check-label">
                 Female
              </label>
            </div>
            <div className="form-check">
             <input name="sex" className="form-check-input" type="checkbox" onChange={this.handleChange} value="male"/>
             <label className="form-check-label">
                 Male
             </label>
            </div>
            <div>
                Parents data
            </div>
            <div className="form-group">
             <label>
                 Father's name:
             </label>
             <input name="fathersName" className='form-control' type="text" onChange={this.handleChange} placeholder="father's name"></input>
            </div>
            <div className="form-group">
                <label>
                  Mother's name:
                </label>
                <input name="mothersName" className='form-control' type="text" onChange={this.handleChange} placeholder="mother's name"></input>
            </div>
            <div className="form-group">
                <label>
                     Mother's maiden name:
                </label>
             <input name="maidenName" className='form-control' type="text" onChange={this.handleChange} placeholder="mother's maiden name"/>
            </div>
           </form>
            <button onClick={this.handleClick}></button>


        </div>)
    }
}