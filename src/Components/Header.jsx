import './Header.css'
import {useState} from 'react'
export default function Header(){
  const [drop,setDrop] = useState("")
  const [search,setSearch] = useState("Search")
  return(
    <>
      <div className="layout wbg ">
          <div className="myprojecttextlayout myprojectui ">
            My Project
          </div>
          <select value={drop} className="dropdownlayout dropdownui">
            <option>Demonstration Project</option>
          </select>
          <input type="search" placeholder="Search" className="searchlayout searchui">
            </input>
          {/* <img src="Search.png" className="searchlogo">
          </img> */}
      </div> 
    </>
  )
}