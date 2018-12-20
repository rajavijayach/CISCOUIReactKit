// libraries import
import React, { Component } from 'react';

import Sidebar from './patterns/Sidebar'
import Header from './patterns/Header';
import Button from './patterns/Button';
import Section from './section';
import Icon from './patterns/Icon';
import Alert from './patterns/Alert';
import Toast from './patterns/Toast';

import { NAVIGATION_LINKS } from './app_constants';

// custom css imports
import '../css/App.css';



class App extends Component {
  render() {
    return (
      <div className="content-fluid">
        <Sidebar navigation={NAVIGATION_LINKS} color='indigo'/>
        <main>    
          <Header spacing='compressed' />
          <div className="content content--alt">
              <div className="container">

                {/******************************************************/}

                <Section title='Buttons'>
                  <Button>Click Here</Button>
                  <Button color='primary'>Click Here</Button>
                  <Button color='white-ghost'disabled='disabled'>Click Here</Button>
                  <Button color='success'size='wide'>Click Here</Button>
                  <Button icon={'tools'} /> 
                </Section>


                 {/******************************************************/}

                <Section title='Icons'>
                  <div className="col-sm">
                      <Icon icon='tools'/>   
                      <Icon icon='tools' size='medium'/> 
                  </div>
                </Section>
  

                {/******************************************************/}


                <Section title='Alerts'>
                   <div className="col-sm">
                      <Alert>Hello</Alert>    
                  </div>
                  <div className="col-sm">
                      <Alert type='warning'>Hello</Alert>    
                  </div>
                  <div className="col-sm">
                      <Alert type='danger'>Hello</Alert>    
                  </div> 
                </Section>


                 {/******************************************************/}

                <Section title='Toasts'>
                   <div className="col-sm">
                      <Toast>Message contents</Toast>    
                  </div>
                  <div className="col-sm">
                      <Toast title='Upload Complete' padding='loose' type='success'>
                          Successfully uploaded file
                          <span>
                              cfg_449021_cat.pkg 297kb
                          </span>
                      </Toast>    
                  </div>
                  <div className="col-sm">
                      <Toast title='Operation Failed'  type='danger'>
                          Failed to add device
                      </Toast>    
                  </div> 
                </Section>


                 {/******************************************************/}




              </div>
          </div>                  
      </main>
      </div>
    );
  }
}

export default App;
