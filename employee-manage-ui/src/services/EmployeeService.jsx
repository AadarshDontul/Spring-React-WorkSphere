import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8086/api/v1/employee";

class EmployeeService {

    createEmployee(employee) {
        return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, employee);
    }

    getEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id){
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`)
    }

}

export default new EmployeeService();