import React from "react";
import '../static/css/App.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div  className="header" >
                <div className="header_container">
                    <div>
                        <h1 className="header__title">{props.title}</h1>
                        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
                    </div>
                </div>
            <div>
                <Link to="/shops">  Shops  </Link>
                <div>|</div>
                <Link to="/actual">  Actual  </Link>
                <div>|</div>
                <Link to="/" >Welcome  </Link>
            </div>
        </div>
    );
};

Header.defaultProps = {
    title: 'Darling'
};

export default Header;