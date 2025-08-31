import axios from "axios";


const rest_api_base_url = 'http://localhost:8080/api/employees';
export const listemployees = () => axios.get( rest_api_base_url);
export const addEmploye = (employee)=> axios.post(rest_api_base_url , employee);

export const getEmployee = (employeeID)=>axios.get(rest_api_base_url+'/'+employeeID);


export const updateEmployee = (employeeid , employee) => axios.put(rest_api_base_url+'/'+employeeid , employee);


export const deleteEmployee = (employeeId)=>axios.delete(rest_api_base_url + '/'+employeeId);