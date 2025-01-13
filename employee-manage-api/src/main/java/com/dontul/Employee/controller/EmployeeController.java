package com.dontul.Employee.controller;

import com.dontul.Employee.entity.EmployeeEntity;
import com.dontul.Employee.model.Employee;
import com.dontul.Employee.repository.EmployeeRepository;
import com.dontul.Employee.service.EmployeeService;
import com.dontul.Employee.service.EmployeeServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    //constructor based Injection
    private final EmployeeService employeeService;
    private final EmployeeRepository employeeRepository;

    public EmployeeController (EmployeeService employeeService, EmployeeRepository employeeRepository, EmployeeServiceImpl employeeServiceImpl){
            this.employeeService = employeeService;
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/add")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
        boolean deleted = false;
        deleted = employeeService.deleteEmployee(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);

    }

    @GetMapping("/{id")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = null;
        employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }


}
