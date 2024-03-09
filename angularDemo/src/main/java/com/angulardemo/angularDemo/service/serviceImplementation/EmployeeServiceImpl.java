package com.angulardemo.angularDemo.service.serviceImplementation;

import com.angulardemo.angularDemo.exception.EmployeeNotFoundException;
import com.angulardemo.angularDemo.model.Employee;
import com.angulardemo.angularDemo.repository.EmployeeRepository;
import com.angulardemo.angularDemo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.Optional.ofNullable;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    /*@Autowired -field injection is not recommended
    constructor injection is recommended*/
    /*@Autowired -constructor injection
    public EmployeeServiceImpl(EmployeeRepository employeeRepository ){
        this.employeeRepository = employeeRepository;
    }*/
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getEmployee(Long id) {
        return employeeRepository.findById(id).
                orElseThrow(() -> new EmployeeNotFoundException("Employee with id not found"));
    }

    @Override
    public Employee updateEmployee(Long id,Employee employee) {

        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        employeeOptional.ifPresent(existingEmployee -> {
            existingEmployee.setName(employee.getName());
            existingEmployee.setEmail(employee.getEmail());
            employeeRepository.save(existingEmployee);
        });
        return employee;
    }

    @Override
    public void deleteEmployee(Long id) {;
         employeeRepository.deleteById(id);
    }
}
