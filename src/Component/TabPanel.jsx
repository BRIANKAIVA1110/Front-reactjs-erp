import React from 'react';
import '../Content/CSS/pepe.css';

class TabPanel extends React.Component
{
    constructor(props)
    {
        super(props);
        this.Name=props.Name;
    }
    render(){
        return(
            <div id={this.Name} className="tabpanel-content">

            </div>
        );
    }
}
export default TabPanel;