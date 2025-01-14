import './App.css';
import NavigationBar from './components/NavigationBar';
import AddEmployee from './components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<EmployeeList />} />
          <Route path='/' element={<EmployeeList />} />
          <Route path='/employeeList' element={<EmployeeList />} />
          <Route path='/addEmployee' element={<AddEmployee />} />
          <Route path='/editEmployee/:id'element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
