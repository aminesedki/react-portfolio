import React from 'react';
import './LandingPage.css';
import avatar from './img/avatar.jpg';

const LandingPage = () => {


return (
       
        <div className="LandingPage">
                <div id="container"> 
                 <img src={avatar} alt="avatar" className="avatar"/>
                <h3>Full stack Web developer</h3>
                <hr/>
                <p> HTML/CSS | Bootstrap </p>
                <p> JavaScript | ReactJs </p>
                <p> Python  | Django | Flask </p>
                <p> SQL | MongoDB </p>
                </div>
        </div>

);

}


export default LandingPage;