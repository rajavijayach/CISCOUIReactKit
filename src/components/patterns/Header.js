import React  from 'react';
import PropTypes from 'prop-types';
import { HEADER_SPACING } from './pattern_constants';


class Header extends React.Component {

    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        event.preventDefault();
        const sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.classList.toggle('sidebar--hidden');
    }

    render() {

        let classes =['header'];
        if(this.props.spacing){
            classes.push(`header--${this.props.spacing}`);
        }

        return (
            <header className={classes.join(' ')}>
                <div className="header-bar container">
                    <a onClick={this.handleClick} to="/" className="btn btn--small btn--icon toggle-menu">
                        <span className="icon-list-menu"></span>
                    </a>
                    <a to="/" className="header-bar__logo">
                        <span className="icon-cisco"></span>
                    </a>
                    <div className="header-bar__main">
                        <div className="header-heading">
                            <h1 className="page-title">{this.props.title}</h1>
                        </div>
                    </div>
                    {this.props.children}
                    
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string,
    spacing: PropTypes.oneOf(HEADER_SPACING),
};

Header.defaultProps = {
    title: "Title",
    spacing:''
};


export default Header;