import './WorkflowApprovalComp.css'
export default function WorkflowApprovalComp(props){
  return(
    <>
      <div className="wacomplayout wacompui">
        <div className="waheadinglayout waheadingui">
          {props.heading}
        </div>
        <div className="wadatelayout wadateui">
          {props.date}
        </div>
        <div className="wahourslayout wahoursui">
          {props.hours}
        </div>
        <div className="wastatuslayout wastatusui">
          {props.status}
        </div>
        <img src={props.logo} className="walogolayout"></img>
        <div className="linelayout lineui">
        </div>
      </div>
    </>
  )
}