import React from 'react';
import Comment from'./Comment'


class Comments extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }      
    }
  
    componentDidMount() {
      fetch( `${process.env.REACT_APP_BASE_URL}/comments?postId=${this.props.id}`)
      .then(response => {
        if(response.ok){
            return response.json();
        } else {
            alert('Произошла ошибка. Статус ошибки: '+response.status);
        }
    })
    .then(data => this.setState({
        comments:data.reverse()
    }))
      
     
      if(this.props.isDisable){
        fetch( `${process.env.REACT_APP_BASE_URL}/comments?postId=${this.props.id}`)
        .then(response => {
          if(response.ok){
              return response.json();
          } else {
              alert('Произошла ошибка. Статус ошибки: '+response.status);
          }
      })
      .then(data => this.setState({
          comments:data.reverse()
      }))
    }

      // console.log(url)

  }

    //         let socket = new WebSocket("ws://localhost:3001/comments")
    //         socket.onopen = function() {
    //             alert("Соединение установлено.");
    //           };
              
    //           socket.onclose = function(event) {
    //             if (event.wasClean) {
    //               alert('Соединение закрыто чисто');
    //             } else {
    //               alert('Обрыв соединения'); // например, "убит" процесс сервера
    //             }
    //             alert('Код: ' + event.code + ' причина: ' + event.reason);
    //           };
              
    //           socket.onmessage = function(event) {
    //             alert("Получены данные " + event.data);
    //           };
              
    //           socket.onerror = function(error) {
    //             alert("Ошибка " + error.message);
    //           };
    // }

    render(){
        return(
            <>
                    {    
                       this.state.comments.map(item => <Comment data={item} key={item.id}/>)
                    }
            </>
        )
    }
}
export default Comments;