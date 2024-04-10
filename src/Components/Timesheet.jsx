import './Timesheet.css'
import TimesheetComp from './TimesheetComp'
export default function Timesheet(){
  const List =[{
    left:"155px",
    leftc:"178px",
    head:"SC",
    date:"10 Dec 2023 (4 days age)",
    hours:"8.5 hrs",
    status:"Saved",
    logo:"Saved.png",
    leftg:"374px"
  },{
      left:"423px",
      leftc:"444px",
      head:"SC-400",
      date:"30 Apr 2021 (2.6yrs ago)",
      hours:"47.5 hrs",
      status:"Submitted",
      logo:"Submitted.png",
      leftg:"637px"
    },{
      left:"690px",
      leftc:"725px",
      head:"SC-400",
      date:"30 Apr 2021 (2.6 yrs ago)",
      hours:"9.25 hrs",
      status:"Rejected",
      logo:"Rejected.png",
      leftg:"907px"
     },{
      left:"958px",
      leftc:"984px",
      head:"WT-10053",
      date:"28 Mar 2022 (1.7 yrs ago)",
      hours:"47.50 hrs",
      status:"Approved",
      logo:"Approved.png",
      leftg:"1178px"
      }]
  // const leftList = ["155px","423px","690px","958px"]
  // const leftcList = ["178px","444px","725px","984px"]
  // const headList = ["SC","SC-400","SC-400","WT-10053"]
  // const dateList = ["10 Dec 2023 (4 days age)","30 Apr 2021 (2.6yrs ago)","30 Apr 2021 (2.6 yrs ago)","28 Mar 2022 (1.7 yrs ago)"]
  // const hoursList = ["8.5 hrs","47.5 hrs","9.25 hrs","47.50 hrs"]
  // const statusList = ["Saved","Submitted","Rejected","Approved"]
  return(
    <>
      <div className="timesheetlayout timesheetui">
        <div className="littlecontainert">
          <div className="timesheettextlayout timesheettextui">
            Timesheet
          </div>
          <div className="addtimesheetbuttonlayout addtimesheetbuttonui">     
            <div className="addtimesheettextlayout addtimesheettextui">
              Add Time Sheet
            </div>
            <img src="plus.png" className="pluslayout">
            </img>
          </div>
        </div>
        <div className="timesheetcontainer">
          {
            List.map((element)=> <TimesheetComp left={element.left} leftc={element.leftc} head={element.head} date={element.date} hours={element.hours} status={element.status} logo={element.logo} leftg={element.leftg}></TimesheetComp>)
          }
        </div>
      </div>
      
      
      
      {/* {
        List.map((element)=> <TimesheetComp left={element.left} leftc={element.leftc} head={element.head} date={element.date} hours={element.hours} status={element.status} logo={element.logo} leftg={element.leftg}></TimesheetComp>)
      } */}
      {/* <TimesheetComp left={"423px"}></TimesheetComp>
      <TimesheetComp left={"690px"}></TimesheetComp>
      <TimesheetComp left={"958px"}></TimesheetComp> */}
    </>
  )
}