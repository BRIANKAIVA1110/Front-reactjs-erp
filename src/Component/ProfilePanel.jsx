import React from 'react';
import '../Content/CSS/pepe.css';
import avatar from '../Content/Images/perfil-avatar-default.jpg';

class ProfilePanel extends React.Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        return(
            <div className="profilePanel-content">
                <div className="profilePanel-content-avatar">
                    <img className="profilePanel-content-avatar-img" src={avatar} alt="Avantar"/>
                </div>
            </div>
        );
    }
}

export default ProfilePanel;