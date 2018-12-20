
import React from 'react';
import PropTypes from 'prop-types';

import { ICON_SIZES, ICON_NAMES } from './pattern_constants';

class Icon extends React.Component {

    render() {

        const {
            icon,
            size,
            title,
            ...other_props
        } = this.props;

        let classes = [];

        classes.push(`icon-${icon}`);

        if(size){
            classes.push(`icon-${size}`);
        }

        return (
            <span
                className={classes.join(' ')}
                title={title}
                {...other_props}
            />
        );
    }
}

Icon.defaultProps = {
    icon: '',
    size: null,
    title: null,
};

Icon.propTypes = {
    icon: PropTypes.oneOf(ICON_NAMES),
    size: PropTypes.oneOf(ICON_SIZES),
    title: PropTypes.string,
};

export default Icon;
