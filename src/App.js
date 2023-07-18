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


function App() {
  return (
      <div>

<ViewEmployee></ViewEmployee>
*****************
<AddEmployee></AddEmployee>
*****************
<Employee> </Employee>
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
