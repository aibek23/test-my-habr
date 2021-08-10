import React from 'react';
import './post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons'


class Post extends React.Component{
     

    render(){
        return (       
            <div  className="postcard-blocks">
            <div className="post">
                <div className="postcard_authors">
                    <span className="create_name">Тестов Тест</span>
                    <span className="create_date">31.07.2021 19:59</span>
                </div>
                <div className="post_img">
                    <img src={this.props.contend.image} className="postcard__img" alt=""/>
                </div>
                <div className="post_title">
                    <h1>{this.props.contend.title}</h1>                    
                </div>
                <p>{this.props.contend.title1}</p>
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

export default Post;
