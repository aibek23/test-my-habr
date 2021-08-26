import React from 'react';
import styles from  './FormComments.module.css';

class FormComments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            message:''
            
        };
    
        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        
            this.setState({
                [event.target.id]:event.target.value
            })
          
        
      }
     

      handleSubmit(event) {
        event.preventDefault();
        let obj = {...this.state}
        console.log(obj)
      }


    render(){
        return(
   
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <p>ваша имя</p>
                        <div className={styles.formText}>
                            <input id="name" type="text" placeholder="Имя" onChange={this.handleChange}/>
                        </div> 
                        <p>Добавьте комментарии</p>
                        <div className={styles.formText}>
                            <label htmlFor=""></label>
                            <textarea  placeholder="Сообщение" name="" id="message" cols="30" rows="5" onChange={this.handleChange}></textarea>
                        </div>                    
                        <button className={styles.formBtn}>Отправить</button>                  
                    </form>
        )
    }
}

export default FormComments;