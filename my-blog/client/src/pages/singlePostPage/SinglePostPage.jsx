import Sidebar from '../../componenets/sidebar/Sidebar'
import SinglePost from '../../componenets/singlePost/SinglePost'
import './singlePostPage.css'

export default function SinglePostPage() {
  return (
    <div className='singlePostPage'>
        <SinglePost />
        <Sidebar />
    </div>
  )
}
