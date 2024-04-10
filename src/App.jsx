import './App.css'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Timesheet from './Components/Timesheet'
import WorkflowApproval from './Components/WorkflowApproval.jsx'
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bigcontainer">
        <div className="container">
          <Header></Header>
          <Timesheet></Timesheet>
          <WorkflowApproval></WorkflowApproval>
          <Footer></Footer>
        </div>
      </div>  
    </> 
  )
}
 