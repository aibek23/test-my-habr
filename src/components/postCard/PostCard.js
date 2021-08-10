import React from 'react';
import './postCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import Post from '../post/Post';
import {  NavLink, Route } from 'react-router-dom';

    class PostCard extends React.Component{
         
    render(){

        return (
            <>
                <Route exact path="/All" >      
                        <div className="postcard-blocks" key={this.props.data.id} >
                            <div className="postcard">
                                <div className="postcard_authors">
                                    <span className="create_name">Тестов Тест</span>
                                    <span className="create_date">31.07.2021 19:59</span>
                                </div>
                                <div className="postcard_img">
                                    <img src={this.props.data.image} className="postcard__img" alt=""/>
                                </div>
                                <div className="postcard_title">
                                <NavLink to={"/Post/"+this.props.data.id} className="NavPost"> {this.props.data.title}</NavLink>                                  
                                </div>
                                <div className="postcard_func">
                                    <span className="mr-35"> <FontAwesomeIcon icon={faThumbsUp}  /> 5 </span>
                                    <span className="mr-35"> <FontAwesomeIcon icon={faThumbsDown} /> 2 </span>
                                    <span className="mr-35"> <FontAwesomeIcon icon={faCommentAlt}  /> 33 </span>
                                </div>
                            </div>  
                        </div>   
                                           
                    </Route>
                     
                    <Route exact path={"/Post/"+this.props.data.id}>
                        <Post contend={this.props.data}/>
                    </Route> 
                  </>                    
        )
    }
}

export default PostCard;
