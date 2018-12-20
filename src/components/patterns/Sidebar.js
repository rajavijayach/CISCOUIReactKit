import React  from 'react';
import PropTypes from 'prop-types';
import { SIDEBAR_SPACING, SIDEBAR_COLORS } from './pattern_constants';

class Sidebar extends React.Component {

    constructor(){
        super();
        this.activateLink = this.activateLink.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.buildNavigationLinks = this.buildNavigationLinks.bind(this);
    }
    
    activateLink({target}){
        const { parentNode } = target;
        document.querySelectorAll('.sidebar .sidebar__item').forEach((li)=>{
            li.classList.remove('sidebar__item--selected');
        });
        if(parentNode.classList.contains('sidebar__item')){            
            parentNode.classList.toggle('sidebar__item--selected');
        }
    }

    toggleSidebar(event){
        event.preventDefault();
        const { parentNode } = event.target;
        // Open one slider at a time
        // document.querySelectorAll('.sidebar .sidebar__drawer').forEach((li)=>{
        //     li.classList.remove('sidebar__drawer--opened');
        // });

        // makes sure onclick is triggered by sidebar_drawer li element, not ny its children
        if(parentNode.classList.contains('sidebar__drawer')){            
            parentNode.classList.toggle('sidebar__drawer--opened');
        }
    }

    buildNavigationLinks(nav) {
        if(nav.type==="link"){
            return (
                <li className="sidebar__item" key={nav.name + nav.url}>
                    <a onClick={this.activateLink} to={nav.url}>
                        {nav.name}
                    </a>
                </li>
            );
        } else {
            return (
                <li onClick={this.toggleSidebar} className="sidebar__drawer" key={nav.name + nav.url}>
                    <a to="#">
                        {nav.name}
                    </a>
                    <ul>
                        {nav.nestedNavigation.map(function(nestedNav){
                            return (
                                <li className="sidebar__item" key={nestedNav.name + nestedNav.url}>
                                    <a onClick={this.activateLink} to={nestedNav.url}>
                                        {nestedNav.name}
                                    </a>
                                </li>
                            )                                                           
                        },this)}
                    </ul>
                </li>
            );
        }
    }

    render() {
        let classes = ['sidebar'];
        if(this.props.color){
            classes.push(`sidebar--${this.props.color}`);
        }
        if(this.props.spacing){
            classes.push(`sidebar--${this.props.spacing}`);
        }
        return (
            <div className={classes.join(' ')} >
                <div className="sidebar__header">
                    <div className="sidebar__header-title">{this.props.title}</div>
                </div>
                <ul>
                    {this.props.navigation.map(this.buildNavigationLinks)}
                </ul>
            </div>
        )
    }
}

Sidebar.propTypes = {
    title: PropTypes.string,
    color: PropTypes.oneOf(SIDEBAR_COLORS),
    spacing: PropTypes.oneOf(SIDEBAR_SPACING),
};

Sidebar.defaultProps = {
    title: "Title",
    navigation: [],
    color:'',
    spacing:''
};


export default Sidebar;