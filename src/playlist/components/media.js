import React, {Component} from 'react';
import './media.css';

class Media extends Component {

    render(){

        let { title, author, image } = this.props;

        const styles = {
            container: {
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red',

            }
        }
        return (
            <div className="Media">
                <div className="Media-cover">
                    <img className="Media-image"
                        src={image}
                        alt=""
                        width={260}
                        height={160}
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>
        )
    }
}

export default Media;