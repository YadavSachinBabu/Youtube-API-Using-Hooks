import axios from "axios"
const KEY = 'AIzaSyAVUBcGt0emh8rdwlXW5fe7NBFIPG8DKFk'
export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:8,
        key: KEY        
    }
})