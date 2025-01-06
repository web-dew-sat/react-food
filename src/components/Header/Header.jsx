import './Header.scss'

import {Link} from 'react-router-dom';
function Header() {
    return (
        <nav>
            <div className="nav-wrapper green darken-1">
                <Link to="/" className="brand-logo">React Shop</Link>
                <ul id="nav-mobile " className="right hide-on-med-and-down ">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
