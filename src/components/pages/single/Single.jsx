import Sidebar from "../../sideBar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar />
    </div>
  )
}
