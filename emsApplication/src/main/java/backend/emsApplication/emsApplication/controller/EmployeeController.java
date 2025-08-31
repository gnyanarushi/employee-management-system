package backend.emsApplication.emsApplication.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.emsApplication.emsApplication.entity.Employee;
import backend.emsApplication.emsApplication.service.EmployeeService;
import jakarta.persistence.GeneratedValue;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	 
	@PostMapping
	public Employee addEmployee(@RequestBody Employee employee)
	{
		Employee savedEmployee = employeeService.addEmployee(employee);
		
		return savedEmployee;
	}
	
	 
	@GetMapping("{id}")
	public Employee getEmployeeById(@PathVariable("id") Integer id )
	{
		Employee receivedEmployee = employeeService.getEmployeeById(id);
		
		return receivedEmployee; 
	}
	
	
	
 
	@GetMapping
	public List<Employee> getEmployees()
	{
		List<Employee> allEmployes =  employeeService.getAllEmployees();
		System.out.println(allEmployes);
		return allEmployes;
		
		}
	
	@PutMapping("{id}")
	public Employee updateEmployeeById(@PathVariable Integer id , @RequestBody Employee UpdateEmployee)
	
	{
		
		Employee employee =   employeeService.updateEmployeeById(id, UpdateEmployee);
		
		
		return employee;
	}
	
	@DeleteMapping("{id}")
	public String deleteEmployee(@PathVariable Integer id )
	{
		employeeService.deleteEmployeeById(id);
		
		return "Employee deleted successfully";
	}
	
	

}
