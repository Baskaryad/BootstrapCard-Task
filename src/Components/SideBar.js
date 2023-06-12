export default function SideBar(){
    return(
    
           <div className="side-bar-styles p-7">
            <div className="actions">
              <ul>
                <li>
                    <button>Admin</button>
                </li>
                <li>
                    <button>user</button>
                </li>
                <li>
                    <button>Student list</button>
                </li>
                <li>
                    <button>Interview notes</button>
                </li>
                </ul>
            </div>        
            <div className="logout-btn">
                    <button>logout</button>
            </div>
        </div>
    )
}