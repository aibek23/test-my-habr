import React from 'react';
import Comments from '../../components/commets/Comments';
import FormComments from '../../components/formCommet/FormComments';
import styles from  './Post.module.css';

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            postData:[],
            // useBtn1:true,
            // useBtn2:false,
            // useBtn3:false,
        };
    
        // Эта привязка обязательна для работы `this` в колбэке.
        // this.handleClick = this.handleClick.bind(this);
      }
    
    //   handleClick(e) {
    //       if(e.target.value==="1"){
    //         this.setState({useBtn1: true})
    //         this.setState({useBtn2: false})
    //         this.setState({useBtn3: false})     
    //       }else if(e.target.value==="2"){
    //         this.setState({useBtn2: true})
    //         this.setState({useBtn1: false})
    //         this.setState({useBtn3: false})  
    //       }else if(e.target.value==="3"){
    //         this.setState({useBtn3: true})
    //         this.setState({useBtn1: false})
    //         this.setState({useBtn2: false}) 
    //       }
    //   }

      componentDidMount(){
        this.getPostsById()
      }
      getPostsById(){
        const url ='http://localhost:3001/posts/'+this.props.match.params.id;
        fetch(url)
            .then(response=>{
                if(response.ok){
                    return response.json();
                } else{
                    alert('Ошибочка:  Статус'+ response.status)
                }
            })
             .then(data=>this.setState({postData:data}))
      }


    render(){
        return(
            <div className="postcard-container">
                <div className="postcard-blocks">
                     <div className="postcard_authors">
                        <span className={styles.create_name}>Тестов Тест</span>
                        <span className="create_date">31.07.2021 19:59</span>
                    </div>
                    <div className="postcard_img">
                        <img className="postcard__img" src={this.state.postData.image} alt=""/>
                    </div>
                    <div className="postcard_title">
                        <h1 style={ {color:'red', marginBottom:'100px'} }>{this.state.postData.title}</h1>
                    </div>
                    <div className="postcard_desc">
                        <p>
                            Если открыть произвольный JPEG-файл в блокноте, то можно увидеть лишь хаотичный набор
                            символов. Отсюда вопрос: возможно ли закодировать изображение так, чтобы его было можно
                            просмотреть не только обычным способом, но и в обычном блокноте, в виде ASCII-графики. Ответ
                            положительный, если использовать максимальное сжатие:

                            Grayscale (только оттенки серого).

                            Обнулить все AC-коэффициенты, то есть весь блок 8x8 пикселей сделать одноцветным.

                            Задать максимальный шаг квантования DC-коэффициента - 255. Это ограничивает цвет всего 9
                            оттенками серого: 0, 32, 64, 96, 128, 160, 192, 224, 255.
                        </p>
                    </div>
                </div>
                 <div className={styles.comments}>
                    {/* <div className={styles.title}>                         
                        <button className={this.state.useBtn1?`${styles.active}`:""} onClick={this.handleClick} value="1">Комментарии (<span
                        className={styles.counter}>5</span>)</button>
                        <button className={this.state.useBtn2?`${styles.active}`:""} onClick={this.handleClick} value="2">нравится(<span
                        className={styles.counter}>5</span>)</button>
                        <button className={this.state.useBtn3?`${styles.active}`:""} onClick={this.handleClick} value="3">жалоба(<span
                        className={styles.counter}>5</span>)</button>
                    </div> */}
                    <FormComments id={this.props.match.params.id}/> 

                </div> 
                {/* {this.state.useBtn1?<Comments id={this.props.match.params.id}/>:""} */}
                
            </div>

        )
    }
}

export default Post;