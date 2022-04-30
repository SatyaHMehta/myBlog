import './home.css'
import Header from "../../componenets/header/Header";
import Posts from "../../componenets/posts/Posts";
import Sidebar from "../../componenets/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar/>
      </div>
    </>
  );
}
