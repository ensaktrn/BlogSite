import "./singlepost.css"
import resim from "../image/whale.jpg"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={resim} alt="balina" className="singlePostImg" />
        
        <h1 className="singlePostTitle">
            Whales
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Enes</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum quibusdam soluta quae debitis quo animi consequuntur 
            dicta quidem unde nisi rerum, quam itaque eius? Ratione ex odio 
            dicta optio placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum quibusdam soluta quae debitis quo animi consequuntur 
            dicta quidem unde nisi rerum, quam itaque eius? Ratione ex odio 
            dicta optio placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum quibusdam soluta quae debitis quo animi consequuntur 
            dicta quidem unde nisi rerum, quam itaque eius? Ratione ex odio 
            dicta optio placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum quibusdam soluta quae debitis quo animi consequuntur 
            dicta quidem unde nisi rerum, quam itaque eius? Ratione ex odio 
            dicta optio placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum quibusdam soluta quae debitis quo animi consequuntur 
            dicta quidem unde nisi rerum, quam itaque eius? Ratione ex odio 
            dicta optio placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Illum quibusdam soluta quae debitis quo animi consequuntur 
            dicta quidem unde nisi rerum, quam itaque eius? Ratione ex odio 
            dicta optio placeat.</p>
        </div>
    </div>
  )
}
