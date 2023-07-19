import './App.css';
import FC from "./Components/FunctionalComp";
import { ClassComp, ClassComp1 } from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
import Employee from "./Components/Employee";
import AddEmployee from "./Components/EmployeeCrud/AddEmployee";
import ViewEmployee from "./Components/EmployeeCrud/ViewEmployee";
import UpdateEmployee from "./Components/EmployeeCrud/UpdateEmployee";
import DeleteEmployee from "./Components/EmployeeCrud/DeleteEmployee";
import GlobalContext from './Components/GlobalContext';

function App() {

  debugger;

  /* In real life application the react app will forward the requests to a local server which will call the Employee API so token and api url will not be exposed  */
  GlobalContext.ApiUrl = "https://localhost:44375/employees";
  GlobalContext.ApiToken = "xd4f!dfsd@sdf";

  return (
      <div>

<p  style={{color: "red"}}>
  Simplifications and Assumptions 
  <p>
  1. In real life application the react app will not call the api directly and will forward the requests to a local server which will call the Employee API so token
   and api url will not be exposed on client side 
  </p>

  <p>
  2. App is not using state management such as Redux so you need to refresh after updating/adding employees
  </p>
    
</p>

<Employee> </Employee>
*****************
<ViewEmployee></ViewEmployee>
*****************
<AddEmployee></AddEmployee>
*****************
<UpdateEmployee> </UpdateEmployee>
*****************
<DeleteEmployee> </DeleteEmployee>

{/* 


<Employee>dfgdfg</Employee>

      <FC/>
      <h1>  Goodbye commbox!</h1>
      <ClassComp/>
      <ClassComp1/>
      <Click/>
      <Counter/>
      <ParentComp/>

 */}

      </div>
  );
}

export default App;
