import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import './media.css';

class Media extends PureComponent {
    state = {
        author: 'Ismaeljdz77'
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    //     //console.log(this)
    //     //this.handleClick = this.handleClick.bind(this);
    // }
    handleClick = (event) => {
        //console.log(this.props.image)
        this.setState({
            author: 'Ismaeljdz7',
        })
    }
    // handleClick(event){
    //     console.log(this.props.title);
    // }
    render(){

        let { title, cover } = this.props;
        let { author } = this.state;

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
                        src={cover}
                        alt=""
                        width={240}
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
    //type: PropTypes.oneOf(['video', 'audio' ]),
}

export default Media;