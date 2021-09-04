import React from 'react';
import style from  './Comments.module.css';

class Comment extends React.Component{
    render(){
        return(
            <div className={style.Container}>
                {/* <div className={style.user}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnijT1I9o9EPkB_SmcFTm_DnXtFsU7dQM0TdE0FZbQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                </div> */}
                <div className={style.content}>
                <div className={style.full_name}>
                    <h3>{this.props.data.name}</h3><p> / {this.props.data.date}</p>
                </div>
                <div className={style.comment}>
                    <p>{this.props.data.message}</p>
                </div>
                </div>
            </div>
        )
    }
}
export default Comment;