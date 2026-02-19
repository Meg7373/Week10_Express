import logo from './logo.svg';
import './App.css';
import Register from '../Components/Users/Register';
import ListStudents from '../Components/Students/ListStudents';
import Login from '../Components/Users/Login';
import ListStudentsByCategory from '../Components/Students/ListStudentsByCategory';

function App() {
  return (
    <>
    <h2>React</h2>
    <Login />
    <ListStudents />
    <ListStudentsByCategory />
    <Register />

    </>
  );
}

export default App;
