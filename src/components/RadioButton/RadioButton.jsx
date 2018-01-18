import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './RadioButton.css';

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev) {
        if(this.props.onChange === null) { return; }
        this.props.onChange(this.props.id, ev.target.checked);
    }

    render() {
        return (
            <label>
                <input 
                    type="radio"
                    role="radio"
                    id={this.props.id}
                    className={styles.RadioButton}
                    name={this.props.name}
                    value={this.props.value}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                    readOnly={this.props.readOnly}
                    onChange={this.handleChange}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur} />
                {this.props.label}
            </label>
        );
    };
};

RadioButton.defaultProps = {

};

RadioButton.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};
