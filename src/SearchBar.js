import React, { useEffect, useState } from "react"
import youtube from "./api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails"


const SearchBar = () =>{
    const[text,setText]=useState("");
    const[selectVideo,setSelectVideo]=useState(null);
    const[videos,setVideos]=useState([]);


    const Search = async (e)=>{
        e.preventDefault();
        const resp = await youtube.get('/search',{
            params:{
                q:text
            }
        })
        setVideos(resp.data.items)
        setSelectVideo(resp.data.items[0])
    };

    return(
        <>
        <div className="search-bar ui segment">
            <form onSubmit={Search} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
            {/* <label>I Have {this.state.videos.length} videos</label> */}
            </form>
        </div>
        <div className="ui grid" style={{margin:"10px"}}>
            <div className="ui row">
                <div className="eleven wide column">
                   <VideoDetails video={selectVideo}/>
                </div>
                <div className="five wide column">
                    <VideoList onVideoSelect={setSelectVideo} 
                    videos={videos}/>
                </div>
            </div>
        </div>
        </>
    );

}

export default SearchBar;