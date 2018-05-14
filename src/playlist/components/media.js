import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends Component {
    // constructor(props){
    //     super(props)
    //     //console.log(this)
    //     this.handleClick = this.handleClick.bind(this);
    // }
    handleClick = (event) => {
        console.log(this.props.image)
    }
    handleClick(event){
        console.log(this.props.title);
    }
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
            <div className="Media" onClick={this.handleClick}>
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

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio' ]).isRequired,
}

export default Media;