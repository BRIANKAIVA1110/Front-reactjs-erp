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
            MenuTitlesGenerated.push(React.createElement(
              "li",
              {class:"nav-content-menu-item"},
              <a href="#">{item}</a>
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