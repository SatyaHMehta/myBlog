import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i class="singlePostEditIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostEditIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Satya</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aliquid aperiam repudiandae. Corrupti ratione atque praesentium velit saepe. Totam aperiam ea dolores minima cumque ipsa officiis magni velit laudantium corporis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aliquid aperiam repudiandae. Corrupti ratione atque praesentium velit saepe. Totam aperiam ea dolores minima cumque ipsa officiis magni velit laudantium corporis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus aliquid aperiam repudiandae. Corrupti ratione atque praesentium velit saepe. Totam aperiam ea dolores minima cumque ipsa officiis magni velit laudantium corporis.</p>
      </div>
    </div>
  );
}
