import './App.scss';
import userObj from './data/userObj.mjs';
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
