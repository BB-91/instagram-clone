import channelObj from "./channelObj.mjs";

const userObj = {
    John: {
        posts: 16_899,
        followers: 13_100_000,
        following: 7,
        followedChannels: [channelObj.Petco, channelObj.Petsmart],
    },
    Bill: {
        posts: 8371,
        followers: 4617,
        following: 93,
        followedChannels: [channelObj.Petsmart],
    },
    Steve: {
        posts: 374,
        followers: 36245,
        following: 716,
        followedChannels: [channelObj.Petco],
    },
}


export default userObj;