import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
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

       const linkStyle = {

            fontWeight: 'bold',
            fontSize: '18px'
            
        }
   
    
    return (
    <div className="App">
       <Layout>
        <Header className="navBarColor" title="</> Amine SEDKI" scroll>
            <Navigation>
                <Link style={linkStyle} to="/resume" > Resume </Link>
                <Link style={linkStyle} to="/aboutme" > About me </Link>
                <Link style={linkStyle} to="/projects" > Projects </Link>
                <Link style={linkStyle} to="/contact" > Contact </Link>
            </Navigation>
        </Header>
        <Drawer title="Amine SEDKI">
            <Navigation>
                <Link to="/resume"> Resume </Link>
                <Link to="/aboutme"> About me </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
  );}
}

export default App;
