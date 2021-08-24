import React from "react"
import youtube from "./api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails"


class SearchBar extends React.Component{
    state={text:"",videos:[],selectVideo:null}

    onSub = async (e)=>{
        e.preventDefault();
        const resp = await youtube.get('/search',{
            params:{
                q:this.state.text
            }
        })
        this.setState({
            videos:resp.data.items,
            selectVideo:resp.data.items[0]
        })
    };

    onVideoSelect = (video) =>{
        this.setState({
            selectVideo:video
        })
        console.log('from the video',video)
    }

    render(){
        return(
            <>
            <div className="search-bar ui segment">
                <form onSubmit={this.onSub} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.text} onChange={(e)=>this.setState({text:e.target.value})}/>
                    </div>
                {/* <label>I Have {this.state.videos.length} videos</label> */}
                </form>
            </div>
            <div className="ui grid" style={{margin:"10px"}}>
                <div className="ui row">
                    <div className="eleven wide column">
                       <VideoDetails video={this.state.selectVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default SearchBar;