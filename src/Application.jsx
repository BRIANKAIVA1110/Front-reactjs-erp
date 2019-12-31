import React, { Component } from 'react';
import './Content/CSS/pepe.css';
import NavBar from './Component/NavBar';
import ProfilePanel from './Component/ProfilePanel';
import TabPanel from './Component/TabPanel';




class Application extends Component
{
    constructor(props)
    {
        super(props);
    }


    render() {
        return (
          <div className="application-content">
            <div className="application-content-nav">
                <NavBar/>
            </div>
            <div className="application-content-view">
                <ProfilePanel/>
                <TabPanel/>
            </div>

          </div>
        );
      }
}

export default Application;