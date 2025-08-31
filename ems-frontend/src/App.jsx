import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/headerComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
function App() {
  // const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   
    <HeaderComponent/>
    <Routes> 
    <Route path='/' element = {<ListEmployeeComponent/>}></Route>
    <Route path='/listEmployees' element = {<ListEmployeeComponent/>}></Route>
    <Route path='/add-employee' element = {<EmployeeComponent/>}></Route>
    <Route path='/edit-Employee/:id' element = {<EmployeeComponent/> }></Route>
    </Routes>
    <br /><br /><br /><br /><br /><br />
    <FooterComponent/>
      
    </BrowserRouter>   
    
  )
}

export default App
