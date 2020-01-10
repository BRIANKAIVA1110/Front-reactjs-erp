import React from 'react';
import ReactDOM from 'react-dom';
import Articulos from '../Panels/Articulos';


class NavBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.ChildMenuItems=[];//menus
        this.ChildTabPanel=[];//menus
        this.CantChildTabPanel=0;
        this.NameMenuTitles = props.MenuTitles;//nombres y event de menu obj{}
        this.TabPanelContentId =props.TabPanelContentId;//contenedor de paneles generados al hacer click en menuItem
        this.createOrAddToTabPanel = this.createOrAddToTabPanel.bind(this);
    }

    init(){
        this.AddMenuItems(this.NameMenuTitles);
    }

    AddMenuItems(MenuTitles){
        if(MenuTitles!=null)
            MenuTitles.forEach(item => {
                this.ChildMenuItems.push(React.createElement(
                    "li",
                    {className:"nav-content-menu-item"},
                    <a href="#" onClick={()=>this.createOrAddToTabPanel(item.panelView,this.TabPanelContentId)}>{item.title}</a>
                ));
            });
    }
    
    async createOrAddToTabPanel(namePanelToAdd,tabPanelContentId)
    {
        var tabPanel= document.getElementById(tabPanelContentId);
        // var a = ReactDOM.findDOMNode(tabPanelContentId);
        debugger;
        const panel= await import(`../Panels/${namePanelToAdd}`);

        var child = React.createElement(
            panel.default,
            {Name:this.CantChildTabPanel++},
            null
        );
        this.ChildTabPanel.push(child);
        var content = React.createElement(
            "div",
            {Name:this.CantChildTabPanel++},
            this.ChildTabPanel
        );
        
        debugger;
        ReactDOM.render(content,tabPanel);
    }

    
    // componentDidMount(){
    //     debugger;
        
    // }
    render(){
        this.init();//inicializa valores
        return(
            <nav className="nav-content">
                <ul className="nav-content-menu">
                    {this.ChildMenuItems}
                </ul>
            </nav>
        );
    }
}

export default NavBar;