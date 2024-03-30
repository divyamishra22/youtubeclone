import React from "react"
import { useAppDispatch, useAppSelector } from "../redux/Hooks/index.ts";
import { clearVideos, clearsearchTerm, searchTerms } from "../redux/reducers/index.ts";
import { getsearchVideos } from "../redux/actioncreatos/getsearchpageVideos.ts";
// import { searchTerm, searchTerms } from "../redux/reducers"



 
const Navbar = () => {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youapp.searchTerm);
  // const nextPageToken = useAppSelector((state) => state.youapp.nextPageToken);
  const handleSubmit = () =>{
    if(searchTerm!=null){
      // dispatch(clearVideos())
      dispatch(getsearchVideos())
    }
    else{
      console.log("search")
    }
  }
  return (
    <>
    <div className =" wrapper">

    <i className="fa-solid fa-bars"></i>
    </div>
    <div className="youtube">
      <i className="fa-brands fa-youtube"></i>
      <span>You Tube</span>
    </div>
     <form  onSubmit={() =>handleSubmit()}>
      <div>
     <i className="fa-solid fa-magnifying-glass"></i>
     </div>
      <input type="text" value = {searchTerm}
      onChange={(e)=>  dispatch(searchTerms(e.target.value))}/>
      <i className="fa-solid fa-xmark" onClick={() => dispatch(clearsearchTerm())}></i>
      <i className="fa-solid fa-magnifying-glass"></i>

     </form>
     <i className="fa-solid fa-microphone"></i>
    </>
  )
}

export default Navbar