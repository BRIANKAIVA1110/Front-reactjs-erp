import React from 'react';

class NavBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.MenuTitles = props.MenuTitles;

    }

    init(){
        var MenuTitlesGenerated=[];
        if(this.MenuTitles!=null)
        this.MenuTitles.forEach(item => {
            // debugger;
            MenuTitlesGenerated.push(React.createElement(
              "li",
              {className:"nav-content-menu-item"},
              <a href="#" onClick={item.panelView}>{item.title}</a>
            ));
        });

        return MenuTitlesGenerated;
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