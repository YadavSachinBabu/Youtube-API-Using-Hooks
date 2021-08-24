import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos,onVideoSelect}) =>{
    const renderList = videos.map((video)=>{
        return (
        <div key={video.id.videoId}>
            <VideoItem onVideoSelect={onVideoSelect} video={video}/>
        </div>
        )
    })
    return (
    <div className="ui relaxed divided list">
        {renderList}
    </div> 
    )
}

export default VideoList;