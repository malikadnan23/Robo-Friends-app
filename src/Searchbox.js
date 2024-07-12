import React from "react";

const Searchbox = ({searchfield,searchChange}) => {
    return ( 
<div>

<input className="pa3 search-field ba b--green bg-lightest-blue" type="search" placeholder="search" onChange={searchChange}></input>
</div>

     );
}
 
export default Searchbox;