import React from 'react';
import "./UserStats.scss";

const UserStats = (props) => {
    const { user } = props;

    const getStatsElements = () => {
        const keys = Object.keys(user);
        const statElements = keys.map((key, index) => {
            const value = user[key];
            const valueStr = String(value);
            let digitCount = 0;
            const chars = []
            // let buffer = "";

            for (let i=valueStr.length; i>=0; i--) {
                const char = valueStr.charAt(i);
                chars.unshift(char);
                if (digitCount && digitCount % 3 === 0 && i>0) {
                    chars.unshift(',')
                }
                digitCount++;
            }

            // const formattedValue = chars.join('');
            let formattedValue = chars.join('');
            // console.log("formattedValue: ", formattedValue);
            // console.log("valueStr: ", valueStr);

            const segments = formattedValue.split(',');
            // console.log("segments.length: ", segments.length);

            const numberAbbreviations = ['', 'k', 'm', 'b'];
            const numberAbbr = numberAbbreviations[segments.length - 1];
            // console.log("numberAbbr: ", numberAbbr)
            
            if (numberAbbr) {
                const decimalStr = segments[1].charAt(0);
                // console.log("decimalStr: ", decimalStr);
                // formattedValue = `${segments[0]}.${decimalStr}${}`
                formattedValue = segments[0] + '.' + decimalStr + numberAbbr;
            }

            if (segments.length > 1) {

            }

            return (
                <div className='stats-column' key={index}>
                    <h3>{formattedValue}</h3>
                    <h4>{key}</h4>
                </div>
            )
        })

        return statElements;

        // keys.forEach(key => {

        // })

        // const iconElements = iconPaths.map((path, index) => {
        //     return <img className='icon' src={path} alt='grid' key={index}></img>
        // })
        // return iconElements;
    }


    return (
        <div className='user-stats'>
            {getStatsElements()}
        </div>
    )
}

export default UserStats;