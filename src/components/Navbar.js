import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authService: {
                isLoggedIn: false
            },
            searchQuery: ''
        };
    }

    componentDidMount() {
        const userImageUrl = localStorage.getItem('userImageUrl');

        if (userImageUrl) {
            this.setState({userImageUrl});
        }
    }

    updateSearch = event => {
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    };

    render() {

        const {searchQuery, authService} = this.state;

        return (
            <nav className="Navbar container" role="navigation">

                <ul className="pt-4">
                    <Link id="logo-container" to={authService.isLoggedIn ? '/scholarship' : ''} className="nav-logo">
                        Atila
                    </Link>
                    <span className="float-right">

                                <li>
                                    <input value={searchQuery} className="form-control search-input" type="text" name="search"
                                           placeholder="Enter to search" onChange={this.updateSearch}/>
                                </li>
                                <li><Link to="search"><FontAwesomeIcon icon={faSearch}/></Link></li>
                                <li><Link to="blog">Blog</Link>
                                </li>
                                <li><a href="/forum" title="Forums">Forum</a></li>
                                <li><a href="/essay" title="Essays">Essays</a></li>
                                <li><Link to="team">Team</Link></li>
                            </span>
                </ul>
            </nav>
        )
    }
}

export default Navbar;