import './TimesheetComp.css'
export default function TimesheetComp(props){
  return(
    <>
      <div className="timesheetcomplayout timesheetcompui">
        <div className="headlayout headui">
          {props.head}
        </div>
        <div className="dayslayout daysui">
          {props.date}
        </div>
        <div className="hourslayout hoursui">
          {props.hours}
        </div>
        <div className="statuslayout statusui">
          {props.status}
        </div>
        <img src={props.logo} className="logolayout"></img>
      </div>
    </>
  )
}