import logo from './logo.svg';
import './App.scss';
import ImageGallery from './containers/ImageGallery/ImageGallery';
import userObj from './data/userObj.mjs';
import UserStats from './components/UserStats/UserStats';
import UserIcons from './components/UserIcons/UserIcons';
import UserFeed from './containers/UserFeed/UserFeed';

let userIndex = 0;
let user = Object.values(userObj)[userIndex];
let userName = Object.keys(userObj)[userIndex];

function App() {
    return (
        <div className="App">
            <div className='text-rows'>
                <h3>Cats of Instagram</h3>
                <p>The <a href="#">#catsofinstagram</a> channel</p>

                <UserFeed user={user} userName={userName}/>
            </div>
        </div>
    );
}

export default App;
