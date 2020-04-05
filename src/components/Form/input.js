import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import { ErrorMessage } from 'formik';

import './custom-input.less';

const Input = (props) => {
    const { name, value, onChange, onBlur, type, placeholder, label, err, error, touched, disabled, maxLength } = props;
    const [placeholderActive, setPlaceholderStatus] = useState(false);

    return (
        <div className="input__wrap">
            {!(err && touched) ? label !== undefined && <div className="input__label">{label}</div> : ""}
            <ErrorMessage name={name}>
                {errorMessage => <div className="input__error">{errorMessage}</div>}
            </ErrorMessage>
            <input
                type={type ? type : 'text'}
                name={name}
                value={value}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
            />

        </div>
    )
}

export default Input;