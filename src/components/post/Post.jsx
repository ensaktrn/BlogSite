import "./post.css"
import whaleImg from "../image/whale.jpg"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={whaleImg} alt="balina" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Whales</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Aliquid sed assumenda possimus laborum officia quasi enim natus, 
         sunt voluptas tempora soluta, voluptatum sequi nobis necessitatibus 
         quo tenetur odio aperiam eum?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Aliquid sed assumenda possimus laborum officia quasi enim natus, 
         sunt voluptas tempora soluta, voluptatum sequi nobis necessitatibus 
         quo tenetur odio aperiam eum?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Aliquid sed assumenda possimus laborum officia quasi enim natus, 
         sunt voluptas tempora soluta, voluptatum sequi nobis necessitatibus 
         quo tenetur odio aperiam eum?</p>



    </div>
  )
}
