import React  from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

import { BUTTON_SIZES, BUTTON_COLORS } from './pattern_constants';

class Button extends React.Component {

    render() {
        let classes = ['btn'];

        if(this.props.size){
            classes.push(`btn--${this.props.size}`);
        }

        if(this.props.color){
            classes.push(`btn--${this.props.color}`);
        }

        if(this.props.disabled){
            classes.push("disabled");
        }    
        
        if(this.props.icon){
            classes.push(`btn--icon`);
        }

        return (
            <button
                className={classes.join(' ')}                
                {...this.props}
            >     
                { this.props.icon &&
                    <Icon icon={this.props.icon} />
                }          
                {this.props.label}
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    color: '',
    label: null,
    disabled: '',
    size: '',
    icon: null,
};


Button.propTypes = {
    color: PropTypes.oneOf(BUTTON_COLORS),
    label: PropTypes.string,
    disabled: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.oneOf(BUTTON_SIZES),
};

export default Button;
