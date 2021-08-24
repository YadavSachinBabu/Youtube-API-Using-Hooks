import axios from "axios"
const KEY = 'AIzaSyBU3kMmSoDR4j1bETdvyNfONKhwExH5o98'
export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:8,
        key: KEY        
    }
})