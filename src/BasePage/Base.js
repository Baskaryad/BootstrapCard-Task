import SideBar from "../Components/SideBar";
import TopBar from "../Components/TopBar";

export default function Base(){
    return (
        <div className="flex flex-col w-full border-opacity-50">
        <div className="grid h-20 card  rounded-box place-items-center m-5">
           <TopBar/>
        </div>
        <div className="divider"></div>
        {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center"> */}

        <div className="flex flex-nowrap rounded-box place-items-center h-screen">
  <div className="grid flex-grow h-full w-1/5 card rounded-box place-items-center bg-base-300 m-5">
      <SideBar/> 
    </div> 
  <div className="divider lg:divider-horizontal"></div> 
  <div className="grid flex-grow h-32 w-4/5 card bg-base-300 rounded-box place-items-center">content</div>
</div>
            
   
      </div>
    )
}