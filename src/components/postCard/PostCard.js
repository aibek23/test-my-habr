import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

class PostCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="postcard-container">
                <div className="postcard">
                    <div className="postcard_authors">
                        <span className="create_name">Тестов Тест</span>
                        <span className="create_date">31.07.2021 19:59</span>
                    </div>
                    <div className="postcard_img">
                        <img className="postcard__img" src={this.props.data.image} alt=""/>
                    </div>
                    <div className="postcard_title">
                        <a href="#">{this.props.data.title}</a>
                    </div>
                    <div className="postcard_func">
                        <span className="mr-35"> <FontAwesomeIcon icon={faThumbsUp}  /> 5 </span>
                        <span className="mr-35"> <FontAwesomeIcon icon={faThumbsDown} /> 2 </span>
                        <span className="mr-35"> <FontAwesomeIcon icon={faCommentAlt}  /> 33 </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;
