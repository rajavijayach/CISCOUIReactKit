
import React from 'react';
import PropTypes from 'prop-types';
import { TOAST_TYPES, TOAST_PADDING } from './pattern_constants';

export default class Toast extends React.Component{
	render(){

		let toastPadding = ['toast'];
		let toastType ='';

		if(this.props.padding){
			toastPadding.push(`toast--${this.props.padding}`);
		}

		if(this.props.type==='information'){
			toastType = 'toast__icon text-info icon-info-outline';
		}

		if(this.props.type==='success'){
			toastType = 'toast__icon text-success icon-check-outline';
		}

		if(this.props.type==='warning'){
			toastType = 'toast__icon text-warning icon-warning-outline';
		}

		if(this.props.type==='danger'){
			toastType = 'toast__icon text-danger icon-error-outline';
		}

		return(
			<div className={toastPadding.join(' ')}>
            	<div className={toastType}></div>
	            <div className="toast__body">
	                <div className="toast__title">{this.props.title}</div>
	                <div className="toast__message">{this.props.children}</div>
	            </div>
        	</div>
		)
	}
}


Toast.propTypes = {
    padding: PropTypes.oneOf(TOAST_PADDING),
    type: PropTypes.oneOf(TOAST_TYPES),
    title: PropTypes.string
};

Toast.defaultProps = {
    type: 'information',
    padding: 'regular',
    title: 'Toast'
};