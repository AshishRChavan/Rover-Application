import './Navbar.css'
export default function Navbar(){
  return(
    <>
      <div className="navlayout navbg navshadow navopacity">
        <div className="navbarcontainer">
          <div className="container1">
            <div className="navlogobg navlogolayout navlogoopacity" style={{display:"inline-block"}}>
            </div>
            <div className="textlayout textui" style={{display:"inline-block"}}>
              Rover
            </div>
          </div> 
          <div className="container2">
            <img src="bell.png" className="belllayout bellui"></img>
            <div className="dotlayout dotui">
            </div>
            <img src="profile1.png" className="profilelayout profileui"></img> 
          </div>
        </div>
      </div>
    </>
  )
}
//   return(
//     <>
//       <div className="navlayout navbg navshadow navopacity">
//         <div className="navbarcontainer" style={{backgroundColor:"pink"}}>
//           <div className="container1">
//             <div className="navlogobg navlogolayout navlogoopacity" style={{display:"inline-block"}}>
//             </div>
//             <div className="textlayout textui" style={{display:"inline-block"}}>
//               Rover
//             </div>
//           </div> 
//           <div className="container2">
//             <img src="bell.png" className="belllayout bellui"></img>
//             <div className="dotlayout dotui">
//             </div>
//             <img src="profile1.png" className="profilelayout profileui"></img> 
//           <div>
//         </div>
//       </div> 
//     </div>
//     </>
//   )
// }
