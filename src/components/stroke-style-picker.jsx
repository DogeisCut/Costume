import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';

import styles from './color-picker/color-picker.css';
import GradientTypes from '../lib/gradient-types';

import Modes from '../lib/modes';
import BufferedInputHOC from './forms/buffered-input-hoc.jsx';
import Input from './forms/input.jsx';

const BufferedInput = BufferedInputHOC(Input);

class StrokeStylePickerComponent extends React.Component {
    render () {
        return (
            <div
                className={styles.colorPickerContainer}
                dir={this.props.rtl ? 'rtl' : 'ltr'}
            >
            </div>
        );
    }
}

StrokeStylePickerComponent.propTypes = {
};

export default injectIntl(StrokeStylePickerComponent);
