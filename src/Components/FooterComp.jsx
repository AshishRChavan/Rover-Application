import './FooterComp.css'
export default function FooterComp(props){
  return(
    <>
      <div className="footercomplayout footercompui" >
        <div className="footertextlayout footertextui">
          {props.portal}
        </div>
        <div className="circlelayout circleui">
          <img src={props.logo} className="logoflayout"></img>
        </div>
      </div>
      {/* 
       */}
    </>
  )
}