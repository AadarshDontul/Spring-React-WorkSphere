package com.dontul.Employee.service;

import com.dontul.Employee.model.Employee;

import java.util.List;

public interface EmployeeService {

    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployee();
}
