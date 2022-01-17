import './App.css';
import Users from "./components/User";
import Posts from "./components/Post";
import Comments from "./components/Comment";

export default function App() {

  return (
      <div className={'wrap'}>

        <div className={'topInfo'}>
          <div className={'users'}>
           <Users/>
          </div>
          <div className={'posts'}>
            <Posts/>
          </div>
        </div>

        <div className={'comments'}>
          <Comments/>
        </div>
      </div>
  );
}