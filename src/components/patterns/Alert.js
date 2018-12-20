
import React from 'react';
import PropTypes from 'prop-types';
import { ALERT_TYPES } from './pattern_constants';


export default class Alert extends React.Component{

	constructor(props){
		super();
		this.handClick = this.handClick.bind(this);
	}

	handClick(event){
		event.preventDefault();
		const { parentNode } = event.target;
		parentNode.classList.add('hide');
	}

	render(){		
		let alertType = '';
		let iconType = '';

		if(this.props.type==='default' || this.props.type===''){
			alertType = 'alert';
			iconType = 'alert__icon icon-info-outline';
		}

		if(this.props.type==='success'){
			alertType = 'alert alert--success';
			iconType = 'alert__icon icon-check-outline';
		}

		if(this.props.type==='warning'){
			alertType = 'alert alert--warning';
			iconType = 'alert__icon icon-warning-outline';
		}

		if(this.props.type==='danger'){
			alertType = 'alert alert--danger';
			iconType = 'alert__icon icon-error-outline';
		}
		
		return(
			<div className={alertType}>
	            <div className={iconType}></div>
	            <div className="alert__message">{this.props.children}</div>
	            <a onClick={this.handClick} href="/" className="alert__close icon-close"> </a>
        	</div>
		);
	}
}

Alert.propTypes = {
    type: PropTypes.oneOf(ALERT_TYPES)
};

Alert.defaultProps = {
    type: ''
};