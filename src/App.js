import React from 'react';
import Header from "./components/header/Header";
import PostCard from "./components/postCard/PostCard";
import Post from './pages/post/Post';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(response => {
                if(response.ok){
                    return response.json();
                } else {
                    alert('Произошла ошибка. Статус ошибки: '+response.status);
                }
            })
            .then(data => this.setState({
                posts:data
            }))
    }

    render(){
        return (
            <>
                <Header/>
                <div className="container-center">
                    <Post />
                    {/*{*/}
                    {/*    this.state.posts.map( item => <PostCard data={item} /> )*/}
                    {/*}*/}
                </div>
            </>
        );
    }
}



export default App;
