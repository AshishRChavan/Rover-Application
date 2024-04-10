import './Footer.css'
import FooterComp from './FooterComp'
export default function Footer(){
  const list =[{
    left:"152px",
    leftc:"320px",
    portal:"Admin Portal",
    leftcircle:"258px",
    logo:"Admin.png"
  },{
    left:"511px",
    leftc:"676px",
    portal:"Supplier Portal",
    leftcircle:"612px",
    logo:"Supplier.png"
  },{
    left:"870px",
    leftc:"1038px",
    portal:"History",
    leftcircle:"992px",
    logo:"History.png"
  }]
  return(
    <>
      <div className="footerlayout footerui">
        <div className="footercontainer">
          {
            list.map((element)=><FooterComp left={element.left} leftc={element.leftc} portal={element.portal} leftcircle={element.leftcircle} logo={element.logo}></FooterComp>)
          }
        </div>
      </div>
      {/*  */}
    </>
  )
}