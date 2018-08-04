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
            sex: ['female', 'male'],
            fathersName: '',
            mothersName: '',
            maidenName: '',
            street: '',
            houseNumber: '',
            flat: '',
            postCode: '',
            city: '',
            email: ''
            
        }
    }
   
    
    
//    handleChange = e => {
//        this.setState({
//           [e.target.name]: e.target.value
//        })
//    }
    
    
    render(){
        return(
        <div>
          <form className='col-md-12'> 
          <div>Personal data</div>
          <div className="form-group">
              <label>ID:</label>
              <input name="pesel" className='form-control' type='text' placeholder="Social Security numbers"></input>
          </div>
          <div className="form-group">
              <label>Name:</label>
              <input name="name" className='form-control' type='text' placeholder="Name"></input>
          </div>
          <div className="form-group">
              <label>Last name:</label>
              <input name="lastName" className='form-control' type='text' placeholder="Last name"></input>
          </div>
          <div className="form-group">
              <label>Family name:</label>
              <input name="familyName" className='form-control' type='text' placeholder="Family name"></input>
          </div>          
           <div className="form-group">
              <label>Date of birth:</label>
              <input name="dateOfBirth" className='form-control' type='data' placeholder="Family name"></input>
          </div>         
           <div className="form-group">
              <label>Birthpalce:</label>
              <input name="birthpalce" className='form-control' type='text' placeholder="Birthplace"></input>
          </div>          
            <div className="form-group">
              <label>Nationality:</label>
              <input name="nationality" className='form-control' type='text' placeholder="Family name"></input>
          </div>  
          <div className="form-check">
              <div> Sex:</div>
              <input name="name" className="form-check-input" type="checkbox" value="female" />
              <label className="form-check-label">
            Female
              </label>
         </div>
         <div className="form-check">
             <input name="name" className="form-check-input" type="checkbox" value="male"/>
             <label className="form-check-label">Male</label>
         </div>
         <div>Parents data</div>   
         <div className="form-group">
             <label>Father's name:</label>
             <input name="fathersName" className='form-control' type="text" placeholder="father's name"></input>
         </div>    
         <div className="form-group">
             <label>Mother's name:</label>
             <input name="mothersName" className='form-control' type="text" placeholder="mother's name"></input>
         </div> 
        <div className="form-group">
             <label>Mother's maiden name:</label>
             <input name="maidenName" className='form-control' type="text" placeholder="mother's maiden name"/>
         </div> 
       
         
         </form>
        
           
            
        </div>)
    }
}