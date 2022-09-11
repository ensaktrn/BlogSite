import "./header.css"
import resim from "../image/homeImg.jpg"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={resim} alt="arkaplan" />
    </div>
  )
}
