import React from 'react';
import style from  './Comments.module.css';

class Comments extends React.Component{
    render(){
        return(
            <>
            <div className={style.Container}>
                <div className={style.user}>
                    <img src="https://yt3.ggpht.com/ytc/AAUvwnijT1I9o9EPkB_SmcFTm_DnXtFsU7dQM0TdE0FZbQ=s900-c-k-c0x00ffffff-no-rj" alt="" />
                </div>
                <div className={style.content}>
                <div className={style.full_name}>
                    <h3>Имя Комментатора</h3>
                </div>
                <div className={style.comment}>
                    <p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.</p>
                </div>
                </div>
            </div>
            <div className={style.Container}>
                <div className={style.user}>
                    <img src="https://st.depositphotos.com/1537427/4578/v/600/depositphotos_45788431-stock-illustration-female-user-icon.jpg" alt="" />
                </div>
                <div className={style.content}>
                <div className={style.full_name}>
                    <h3>Имя Комментатора</h3>
                </div>
                <div className={style.comment}>
                    <p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям.</p>
                </div>
                </div>
            </div>
            <div className={style.Container}>
                <div className={style.user}>
                    <img src="https://img-fotki.yandex.ru/get/6/sergfserg.2/0_27769_736110d4_L.jpg" alt="" />
                </div>
                <div className={style.content}>
                <div className={style.full_name}>
                    <h3>Имя Комментатора</h3>
                </div>
                <div className={style.comment}>
                    <p>Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское </p>
                </div>
                </div>
            </div>
            </>
        )
    }
}
export default Comments;