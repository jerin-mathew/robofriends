import React from 'react';

const Scroll = (props) => {
    return (<div style={{ overflow: 'scroll', border: '5px solid black', height: '800px' }}>
        {props.children}
    </div>);
}
//ideally styles should be in seperate file
//props.children-retuns objects enrapped within this
export default Scroll;