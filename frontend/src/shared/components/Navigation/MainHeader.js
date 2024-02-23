import React from "react";

import "./MainHeader.css";


//the header from main navigation is passed here

const MainHeader = props => {
    return <header className="main-header">{props.children}</header>;

};

export default MainHeader;