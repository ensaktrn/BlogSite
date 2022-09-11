import Header from "../../header/Header"
import "./home.css"
import Posts from "../../posts/Posts"
import Sidebar from "../../sideBar/Sidebar"


export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Posts />
      <Sidebar />
    </div>
    </>
  )
}
