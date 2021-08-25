import axios from "axios"
const KEY = 'YOUR_KEY_ENTER_HERE'
export default axios.create({
    baseURL :'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:8,
        key: KEY        
    }
})
