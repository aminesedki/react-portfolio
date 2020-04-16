import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './Contact.css';

const Contact = () => {


return (
        <div className="Contact">
       
           <div>
                <h2 id="headerTitle">Contact Me</h2>
                <hr/>

                <div className="contact-list">
                        
                        <Grid className="demo-grid-2">
                                <Cell className="phoneCell" col={6}>
                                
                                        <i className="fa fa-phone-square" style={{backgroundColor: 'white',color:'#A9A9A9', fontSize: '74px'}} aria-hidden="true"/>
                                        <h3 id="phone">Phone : </h3>
                                        <h3> (+33)1 23 45 67 89 </h3>

                                </Cell>

                        
                                
                                <Cell className="mailCell" col={6}>
                                        
                                        <i className="fa fa-envelope" style={{backgroundColor: 'white', color:'#A9A9A9', fontSize: '74px'}} aria-hidden="true"/>
                                        <h3 id="mail"> E-mail : </h3>
                                        <h3> exemple@gmail.com </h3>        
                                </Cell>
                        
                        </Grid>
                </div>
            </div>
        </div>
);

}


export default Contact;