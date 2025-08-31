package backend.emsApplication.emsApplication.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import backend.emsApplication.emsApplication.entity.Employee;
@CrossOrigin(origins = "*")
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
