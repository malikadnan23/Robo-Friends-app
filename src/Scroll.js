import React from "react";


const Scroll = (props) => {
    return ( 
<div style={{height:'800px',border: '5px solid black', overflowY:'scroll', marginTop:'20px', scrollbar:'none' }}>
        {props.children}
</div>

     );
}
 
export default Scroll ;