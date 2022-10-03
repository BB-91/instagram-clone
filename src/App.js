import logo from './logo.svg';
import './App.scss';
import ImageGallery from './containers/ImageGallery/ImageGallery';
import userObj from './data/userObj.mjs';
import UserStats from './components/UserStats/UserStats';

// let user = userObj.Bill;
let user = userObj.John;
// let user = userObj.Steve;

// const imageNames = [];
// for (let i = 0; i < 7; i++) {
//     const imageName = `cat${i + 1}.jpg`;
//     imageNames.push(imageName);
// }

const imagePaths = [];
for (let i = 0; i < 7; i++) {
    const path = `images/cat${i+1}.jpg`;
    imagePaths.push(path);
}

const iconPaths = ['grid', 'play', 'user', 'video'].map(name => `icons/${name}.png`);
// const iconPaths = ['grid', 'play', 'user', 'video'];

function App() {

    // const getStatsElements = () => {
    //     const keys = Object.keys(currentUser);
    //     const statElements = keys.map((key, index) => {
    //         const value = currentUser[key];
    //         const valueStr = String(value);
    //         let digitCount = 0;
    //         const chars = []
    //         // let buffer = "";

    //         for (let i=valueStr.length; i>=0; i--) {
    //             const char = valueStr.charAt(i);
    //             chars.unshift(char);
    //             if (digitCount && digitCount % 3 === 0 && i>0) {
    //                 chars.unshift(',')
    //             }
    //             digitCount++;
    //         }

    //         // const formattedValue = chars.join('');
    //         let formattedValue = chars.join('');
    //         // console.log("formattedValue: ", formattedValue);
    //         // console.log("valueStr: ", valueStr);

    //         const segments = formattedValue.split(',');
    //         // console.log("segments.length: ", segments.length);

    //         const numberAbbreviations = ['', 'k', 'm', 'b'];
    //         const numberAbbr = numberAbbreviations[segments.length - 1];
    //         // console.log("numberAbbr: ", numberAbbr)
            
    //         if (numberAbbr) {
    //             const decimalStr = segments[1].charAt(0);
    //             // console.log("decimalStr: ", decimalStr);
    //             // formattedValue = `${segments[0]}.${decimalStr}${}`
    //             formattedValue = segments[0] + '.' + decimalStr + numberAbbr;
    //         }

    //         if (segments.length > 1) {

    //         }

    //         return (
    //             <div className='stats-column'>
    //                 {/* <h3>{value}</h3> */}
    //                 <h3>{formattedValue}</h3>
    //                 <h4>{key}</h4>
    //             </div>
    //         )
    //     })

    //     return statElements;

    //     // keys.forEach(key => {

    //     // })

    //     // const iconElements = iconPaths.map((path, index) => {
    //     //     return <img className='icon' src={path} alt='grid' key={index}></img>
    //     // })
    //     // return iconElements;
    // }

    const getIconElements = () => {
        const iconElements = iconPaths.map((path, index) => {
            return <img className='icon' src={path} alt='grid' key={index}></img>
        })
        return iconElements;
    }

    return (
        <div className="App">
            <div className='text-rows'>
                <h3>Cats of Instagram</h3>
                <p>The <a href="#">#catsofinstagram</a> channel</p>

                {/* <div className='img-div' style={{ backgroundImage: `url(${imagePath})`}} key={index}></div> */}

                <UserStats user={user}/>

                {/* <div className='stats-row'>
                    {getStatsElements()}
                </div> */}

                <div className='icon-row'>
                    {getIconElements()}
                </div>

                {/* <div>
                    <img className='icon' src='icons/grid.png' alt='grid'></img>
                </div> */}

                <ImageGallery imagePaths={imagePaths} />
            </div>




        </div>
    );
}

export default App;
