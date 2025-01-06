package com.dontul.Employee.controller;

import com.dontul.Employee.model.Employee;
import com.dontul.Employee.service.EmployeeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    //constructor based Injection
    private final EmployeeService employeeService;

    public EmployeeController (EmployeeService employeeService){
            this.employeeService = employeeService;
    }

    @PostMapping("/add")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }


}
