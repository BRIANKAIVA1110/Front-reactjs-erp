import React from 'react';

class Articulos extends React.Component
{
    constructor(props)
    {
        super(props);
        this.Name= props.Name;
    }

    render()
    {
        return(
            <div id={this.Name} width="150px" height="150px">holi</div>
        );
    }
}

export default Articulos;