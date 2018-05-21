import React from 'react';
import Media from './media';
import './playlist.css';

//componente puro
function Playlist (props) {
        const playlist = props.data.categories[0].playlist
        //console.log(this.props.data)
        return (
            <div className="Playlist">
                {
                    playlist.map((item) => {
                        return <Media {...item} key={item.id}/>
                    })
                }
            </div>       
        )
}

export default Playlist;
