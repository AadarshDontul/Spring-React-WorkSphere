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
        return axios.delete(`${EMPLOYEE_API_BASE_URL}/${id}`);
    }

    async getEmployeeById(id) {
        try {
            console.log(`Fetching employee with ID: ${id}`);
            const response = await axios.get(`${EMPLOYEE_API_BASE_URL}/${id}`);
            console.log('Response:', response);
            return response;
        } catch (error) {
            console.log('Full error:', error);
            console.log('Response data:', error.response?.data);
            throw error;
        }
    }

    updateEmployee(employee, id){
        return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`,employee);
    }

}

export default new EmployeeService();