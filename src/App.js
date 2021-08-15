import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Posts from './pages/posts/Posts';
import Post from './pages/post/Post';


class App extends React.Component{
   

    render(){
        return (
            <BrowserRouter>
                <Header/>
                <div className="container-center">
                    <Route path="/posts" component={Posts}/>
                    <Route path='/onepost' component={Post}/>
                </div>
            </BrowserRouter>
        );
    }
}



export default App;
