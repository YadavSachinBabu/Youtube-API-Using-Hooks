import React from "react"

const VideoDetails = ({video}) =>{
    if(!video){
        return <div></div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (<div>
        <div className="ui embed">
        <iframe width="560" height="315" src={videoSrc} title="YouTube video player" frameBorder="0"></iframe>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>);
}

export default VideoDetails;