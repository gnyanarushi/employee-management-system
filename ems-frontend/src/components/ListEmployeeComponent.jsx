import React , {useState , useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { listemployees , deleteEmployee } from './EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees , setEmployees] = useState([])
   const navigator = useNavigate();

   useEffect(() => {
    getAllEmployees();
    
   },[])


   function getAllEmployees()
   {
    listemployees().then((response) => {
        setEmployees(response.data);
        
    }).catch(
        error =>{console.error(error);}
    )
   }



   function addNewEmployee()
   {
    navigator('/add-employee');
   }

   function updateEmployee(id)
   {
    navigator(`/edit-Employee/${id}`)
   }


   function removeEmployee(employeeId)
   {
    console.log(employeeId);
    deleteEmployee(employeeId).then((response)=>{
        console.log(response.data);
        getAllEmployees();
    }).catch(errr => {console.log(errr)});
   }

  return (
    <div className='container'>
        <h2 className='text-center'>List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
       
        <table  className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Employee id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee EmailId</th>
                    <th>Actions</th>
                </tr>
            </thead>
        

        <tbody >
            {
                employees.map(employees =>  
                    <tr key = {employees.id}>
                        <td>{employees.id}</td>
                        <td>{employees.firstName}</td>
                        <td>{employees.lastName}</td>
                        <td>{employees.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=>updateEmployee(employees.id)}>Update</button>
                            <button className='btn btn-danger' onClick={()=>removeEmployee(employees.id)}>Delete</button>
                        </td>
                        
                    </tr>
                )
            }
        </tbody>
        </table>
    </div>

  )
}

export default ListEmployeeComponent