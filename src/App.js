import React, { Component } from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';

import Main from './Components/Main';

/*
font-weight: bold;
font-size: 18px;
&:hover{
    text-decoration: underline;
    }
*/
   

class App extends Component {
  
  
  render(){

    
    return (
    <div className="App">
       <Layout>
        <Header className="navBarColor" title={<Link id="titleNavBar" to="/"> Amine Sedki </Link>}  scroll>
            <Navigation>
                <Link id="navBarItem" to="/resume" > Resume </Link>
                <Link id="navBarItem" to="/aboutme" > About me </Link>
                <Link id="navBarItem" to="/projects" > Projects </Link>
                <Link id="navBarItem" to="/contact" > Contact </Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
  );}
}

export default App;
