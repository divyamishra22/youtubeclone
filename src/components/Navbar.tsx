import React from "react"
import { useAppSelector } from "../redux/Hooks/index.ts";
// import { searchTerm, searchTerms } from "../redux/reducers"


// const handleSearch = (e) =>{
//   e.prevent.default;
   
// }
 
const Navbar = () => {
  const searchTerm = useAppSelector((state) => state.youapp.searchTerm);
  return (
    <>
    <div className =" wrapper">

    <i className="fa-solid fa-bars"></i>
    </div>
    <div className="youtube">
      <i className="fa-brands fa-youtube"></i>
      <span>You Tube</span>
    </div>
     <form >
      <div>
     <i className="fa-solid fa-magnifying-glass"></i>
     </div>
      {/* <input type="text" value = {searchTerm}
      onChange{}/> */}
      <i className="fa-solid fa-xmark"></i>
      <i className="fa-solid fa-magnifying-glass"></i>

     </form>
     <i className="fa-solid fa-microphone"></i>
    </>
  )
}

export default Navbar