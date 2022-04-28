import "./write.css";

export default function Write() {
  return (
    <div className="write">
        <img className='writeImg' src="https://media.cntraveler.com/photos/60596b398f4452dac88c59f8/3:2/w_3999,h_2666,c_limit/MtFuji-GettyImages-959111140.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i class="writeIcon fa-solid fa-plus" style={{ cursor: "pointer" }}></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
