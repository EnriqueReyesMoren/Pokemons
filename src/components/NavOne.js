import React, {Component} from 'react';
import { Link } from "react-router-dom"


class NavOne extends Component {
    constructor(){
        super()
        this.state = {
          sticky: false
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);

        //Mobile Menu
        this.mobileMenu();
    }

    handleScroll = () => {

      if (window.scrollY > 100) {
        this.setState({
            sticky: true
        });
      } else if (window.scrollY < 100) {
        this.setState({
            sticky: false
        });
      }

    }

    mobileMenu = () => {
        //Mobile Menu Toggle
        let mainNavToggler = document.querySelector(".mobile-menu-toggle");
        let mainNav = document.querySelector(".side-nav-container");

        mainNavToggler.addEventListener("click", function () {
            mainNav.classList.add('active');
        });

        //Close Mobile Menu
        let closeMenu = document.querySelector(".side-menu-close");
            closeMenu.addEventListener("click", function () {
            mainNav.classList.remove('active');
        });

    }

    render() {
        return (
            <div>
                <header className="header-area">
                    <div className={`header-top header-menu-action ${this.state.sticky ? 'header-fixed' : ''}`}>
                        <div className="container">
                            <div className="row ostion-top-wrap">
                                <div className="col-lg-5 col-sm-5 site-branding">
                                    <div className="logo-action d-flex align-items-center">
                                        <div className="ostion-logo">
                                            <Link to="/">
                                                <a>
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/800px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon" title="Pokemon" style={{width:"200px" , height:"auto"}}/>
                                                </a>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7 ostion-menu">
                                    <div className="ostion-menu-innner">
                                        <div className="ostion-menu-content">
                                            <div className="navigation-top">
                                                <nav className="main-navigation">
                                                    <ul>
                                                        
                                                        <li><Link to="/"><a>Pokedex</a></Link></li>
                                                        <li><Link to="/pokemon-details"><a>Details</a></Link></li>
                                                        <li><Link to="favorits"><a>Favorits</a></Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="mobile-menu-toggle">
                                            <i className="fa fa-bars"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="side-nav-container">
                        <div className="humburger-menu">
                            <div className="humburger-menu-lines side-menu-close"></div>
                        </div>
                        <div className="side-menu-wrap">
                            <ul className="side-menu-ul">
                                <li className="sidenav__item"><a href="/">home</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link to="/"><a>Home 1</a></Link></li>
                                        <li><Link to="/index2"><a>Home 2</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">causes</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link to="/causes"><a>causes</a></Link></li>
                                        <li><Link to="/causes-detail"><a>causes detail</a></Link></li>
                                        <li><Link to="/donate"><a>donate now</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">event</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link to="/events"><a>events</a></Link></li>
                                        <li><Link to="/events-detail"><a>events detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">news</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link to="/news"><a>news</a></Link></li>
                                        <li><Link to="/single-news"><a>news detail</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><a href="#">pages</a>
                                    <span className="menu-plus-icon"></span>
                                    <ul className="side-sub-menu">
                                        <li><Link to="/about"><a>about</a></Link></li>
                                        <li><Link to="/gallery"><a>gallery</a></Link></li>
                                        <li><Link to="/volunteer"><a>become a volunteer</a></Link></li>
                                        <li><Link to="/team"><a>our team</a></Link></li>
                                        <li><Link to="/sponsor"><a>sponsors</a></Link></li>
                                    </ul>
                                </li>
                                <li className="sidenav__item"><Link to="/contact"><a>contact</a></Link></li>
                            </ul>
                            <ul className="side-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                            <div className="side-btn">
                                <Link to="/donate"><a className="theme-btn">donate now</a></Link>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavOne;