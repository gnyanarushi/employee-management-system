import React ,{useEffect, useState}from 'react'
import {addEmploye, getEmployee, updateEmployee} from './EmployeeService'
import { useNavigate , useParams } from 'react-router-dom'
const EmployeeComponent = () => {


  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setemail] = useState('')
  

  const {id} = useParams();
  
  const  handleFirstName = (e)=>setfirstName(e.target.value);
  const handleLastName = (e)=> setlastName(e.target.value);
  const handleEmailId = (e) =>setemail(e.target.value);
  
  const [errors , setErrors] = useState({
    firstName:'', 
    lastName : '',
    email:''
  })


  useEffect(()=>
  {
    if(id)
    { getEmployee(id).then((response)=>
    {
      setfirstName(response.data.firstName);
      setlastName(response.data.lastName);
      setemail(response.data.email);
    }).catch(error => console.error(error));
      
    }
  }

  ,[id])



  const navigator = useNavigate();




  function saveorUpdateEmployee(e)
  {
    e.preventDefault(); 
    const employees = {firstName, lastName,email}
    console.log(employees)
    if(validateForm())
    {
      if(id)
      {
        updateEmployee(id , employees).then((response)=>{
          console.log(response.data);
          navigator('/listEmployees')
        }).catch(err =>{console.log(err)});
      }
      else{
        addEmploye(employees).then((response)=>{
          console.log(response.data);
          navigator('/listEmployees');
          }).catch(err =>{console.log(err)});

      }
    }
   
  }
  

  function validateForm()
  {
    let valid = true;
    const errorsCopy = {...errors}

    if(firstName.trim())
    {
      errorsCopy.firstName = '';
    }
    else{
      errorsCopy.firstName = 'firstName is required';
      valid = false;
    }


    if(lastName.trim())
    {
      errorsCopy.lastName= '';
    }
    else
    {
      errorsCopy.lastName= 'last name is required' ;
      valid = false;
    }
    if(email.trim())
    {
      errorsCopy.email  ='';
    }
    else
    {
      errorsCopy.email = 'email is required ';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;


  }


  function pageTitle()
  {
    if(id)
    {
      return <h2 className='text-center'>update Employee</h2>
    }
    else
    {
      return <h2 className='text-center'>Add Employee</h2>
    }
  }

  
  return (

    <div className='container'>

      <br /><br /><br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {
            pageTitle()
          }
          
          <div className="card-body">
            <form >
              <div className="form-group mb-2">
                  <label className='form-label'>First Name</label>
                  <input type="text" 
                  placeholder='Enter the Employee first name' 
                  name='firstName'
                  value={firstName}
                  className={`form-control ${errors.firstName ? 'is-invalid': ''} `}
                  onChange={handleFirstName}
                  />  

                  {errors.firstName && <div className='invaid-feedback'>{errors.firstName}</div>}                
              </div>


              <div className="form-group mb-2">
                  <label className='form-label'>Last Name</label>
                  <input type="text" 
                  placeholder='Enter the Employee email' 
                  name='lastName'
                  value={lastName}
                  className= {`form-control ${errors.lastName ? 'is-invalid': ''} `}
                  onChange={handleLastName}
                  />
                    {errors.lastName && <div className='invaid-feedback'>{errors.lastName}</div>}
              </div>
              <div className="form-group mb-2">
                  <label className='form-label'>Email ID</label>
                  <input type="text" 
                  placeholder='Enter the Employee EmailID' 
                  name='emailid'
                  value={email}
                  className= {`form-control ${errors.email ? 'is-invalid': ''} `}
                  onChange={handleEmailId}
                  />
                   {errors.email && <div className='invaid-feedback'>{errors.email}</div>}
              </div>

              <button className='btn btn-success' onClick={saveorUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
        <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default EmployeeComponent