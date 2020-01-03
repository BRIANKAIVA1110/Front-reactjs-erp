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
        this.state ={
          MenuTitles:[
            "Articulos",
            "Clientes",
            "Proveedores",
          ]
        };
    }

    render() {
        return (
          <div className="application-content">
            <div className="application-content-nav">
                <NavBar 
                  Name="NavBar1"
                  MenuTitles={this.state.MenuTitles}
                />
            </div>
            <div className="application-content-view">
                <ProfilePanel/>
                <TabPanel Name="TabPanel1"/>
            </div>

          </div>
        );
      }
}

export default Application;