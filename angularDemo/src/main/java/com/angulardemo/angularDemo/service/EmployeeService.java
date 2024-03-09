package com.angulardemo.angularDemo.service;

import com.angulardemo.angularDemo.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {

    //CRUD
    Employee createEmployee(Employee employee);
    List<Employee> getAllEmployees();
    Employee getEmployee(Long id);

    Employee updateEmployee(Long id,Employee employee);

    void deleteEmployee(Long id);

}
