import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCategories">
                <div className="postCategory">Music</div>
                <div className="postCategory">Life</div>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt nisi consequuntur voluptas corrupti qui explicabo fugit. Voluptate culpa eos quos doloremque nam delectus cumque, debitis optio, quidem, aliquid accusantium?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt nisi consequuntur voluptas corrupti qui explicabo fugit. Voluptate culpa eos quos doloremque nam delectus cumque, debitis optio, quidem, aliquid accusantium?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae deserunt nisi consequuntur voluptas corrupti qui explicabo fugit. Voluptate culpa eos quos doloremque nam delectus cumque, debitis optio, quidem, aliquid accusantium?</p>
    </div>
  )
}
