import './WorkflowApproval.css'
import WorkflowApprovalComp from './WorkflowApprovalComp'
export default function WorkflowApprovl(){
  const list = [{
    left:"156px",
    leftc:{lefthead:"190px",leftdate:"183px",lefthour:"203px",leftstatus:"195px"},
    heading:"Weekly Timesheets",
    date:"",
    hours:"",
    status:"Submitted",
    logo:"Submitted.png",
    leftg:"209px"
  },{
    left:"300px",
    leftc:{lefthead:"336px",leftdate:"323px",lefthour:"344px",leftstatus:"343px"},
    heading:"SC-400",
    date:"Old meadow, Doug Wed, 7 Apr, 2021",
    hours:"9.25 hrs",
    status:"Rejected",
    logo:"Rejected.png",
    leftg:"353px"
  },{
    left:"445px",
    leftc:{lefthead:"481px",leftdate:"468px",lefthour:"489px",leftstatus:"486px"},
    heading:"SC-346",
    date:"Old meadow, Doug Wed, 9 Jun, 2021",
    hours:"8.10 hrs",
    status:"Approved",
    logo:"Approved.png",
    leftg:"498px"
  },{
    left:"589px",
    leftc:{lefthead:"625px",leftdate:"612px",lefthour:"630px",leftstatus:"632px"},
    heading:"SC-232",
    date:"Old meadow, Doug Wed, 7 Apr, 2021",
    hours:"6 hrs",
    status:"Rejected",
    logo:"Rejected.png",
    leftg:"642px"
  },{
    left:"734px",
    leftc:{lefthead:"768px",leftdate:"183px",lefthour:"203px",leftstatus:"773px"},
    heading:"Weekly Timesheets",
    date:"",
    hours:"",
    status:"Submitted",
    logo:"Submitted.png",
    leftg:"787px"
  },{
    left:"878px",
    leftc:{lefthead:"914px",leftdate:"901px",lefthour:"922px",leftstatus:"921px"},
    heading:"SC-400",
    date:"Old meadow, Doug Wed, 7 Apr, 2021",
    hours:"9.25 hrs",
    status:"Rejected",
    logo:"Rejected.png",
    leftg:"929px"
  },{
    left:"1023px",
    leftc:{lefthead:"1057px",leftdate:"1046px",lefthour:"1067px",leftstatus:"1066px"},
    heading:"SC-346",
    date:"Old meadow, Doug Wed, 9 Jun, 2021",
    hours:"8.10 hrs",
    status:"Rejected",
    logo:"Rejected.png",
    leftg:"1075px"
  }]
  return(
    <>
      <div className="workflowapprovllayout workflowapprovalui">
        <div className="watextlayout watextui">
          Workflow and Approvals
        </div>
        <div className="taskpendinglayout taskpendingui">
          Tasks Pending (10)
        </div>
        <div className="workflowcontainer">
          {
            list.map((element)=><WorkflowApprovalComp left={element.left} leftc={element.leftc} heading={element.heading} date={element.date} hours={element.hours} status={element.status} logo={element.logo} leftg={element.leftg}></WorkflowApprovalComp>)
          }
        </div>
      </div>
    </>
  )
}