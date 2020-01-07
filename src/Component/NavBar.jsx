import React from 'react';
import ReactDOM from 'react-dom';
import Articulos from '../Panels/Articulos';


class NavBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.MenuTitles = props.MenuTitles;
        this.createOrAddToTabPanel = this.createOrAddToTabPanel.bind(this);
    }

    init(){
        var MenuTitlesGenerated=[];
        if(this.MenuTitles!=null)
        this.MenuTitles.forEach(item => {
            // debugger;
            MenuTitlesGenerated.push(React.createElement(
              "li",
              {className:"nav-content-menu-item"},
              <a href="#" onClick={()=>this.createOrAddToTabPanel("TabPanel1",item.panelView)}>{item.title}</a>
            ));
        });

        return MenuTitlesGenerated;
    }
    
    async createOrAddToTabPanel(rootName,namePanelToAdd){
        var tabPanel= document.getElementById(rootName);
        debugger;
        const panel= await import(`../Panels/${namePanelToAdd}`);
        debugger;
        var child = React.createElement(
            panel.default,
            {Name:"pepe1"},
            null
        );
        
        var child2 = React.createElement(
            Articulos,
            {Name:"pepe2"},
            null
        );
        ReactDOM.render(child,tabPanel);
        // ReactDOM.createPortal(child2,tabPanel);
        debugger;
    }
    render(){
        return(
            <nav className="nav-content">
                <ul className="nav-content-menu">
                    {this.init()}
                </ul>
            </nav>
        );
    }
}

export default NavBar;