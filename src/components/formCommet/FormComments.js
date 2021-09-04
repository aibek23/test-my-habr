import React from 'react';
import styles from  './FormComments.module.css';
import { ToastContainer, toast } from 'react-toastify';
import Comments from '../commets/Comments';

import 'react-toastify/dist/ReactToastify.css';

class FormComments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            message:'',
            isDisable:true,
            
            
        };
    
        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {

            this.setState({
            [event.target.id]:event.target.value
        });
        if(this.state.name && this.state.message)this.setState({isDisable:false})
        else if(!this.state.name || !this.state.message)this.setState({isDisable:true})
      }
     

      handleSubmit(event) {
         event.preventDefault();
        let obj = {...this.state};
        obj.date = new Date().toLocaleString();
        let option = {
            method:"post",
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(obj),
        }
        
        fetch(`${process.env.REACT_APP_BASE_URL}/posts/${this.props.id}/comments`,option)
        .then(response=>{
            if(response.ok){
                // toast.success("успешно")
                toast.info('успешно!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
            console.log(obj);
        })
      }


    render(){
        return(
            <div className="container">

                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <p>ваша имя</p>
                        <div className={styles.formText}>
                            <input id="name" type="text" placeholder="Имя" onChange={this.handleChange}/>
                        </div> 
                        <p>Добавьте комментарии</p>
                        <div className={styles.formText}>
                            <textarea  placeholder="Сообщение" name="" id="message" cols="30" rows="5" onChange={this.handleChange}></textarea>
                        </div>                    
                        <button className={styles.formBtn} disabled={this.state.isDisable}>Отправить</button> 
                        <ToastContainer position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover 
                            />                 
                    </form>
                    {this.state.isDisable?<Comments id={this.props.id}/>:<Comments isDisable={this.state.isDisable} id={this.props.id}/>}
                    </div>

        )
    }
}

export default FormComments;