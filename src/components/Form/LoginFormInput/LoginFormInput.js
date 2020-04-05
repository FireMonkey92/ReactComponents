import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import { ErrorMessage } from 'formik';

import './LoginFormInput.less';

const LoginFormInput = (props) => {
    const { name, value, onChange, onBlur, type, placeholder } = props;
    const [placeholderActive, setPlaceholderStatus] = useState(false);

    const handleFocus = () => {
        setPlaceholderStatus(true)
    }

    const hanldeBlur = (e) => {
        setPlaceholderStatus(false)

        onBlur(e);
    }

    return (
        <div className="login-form__wrap">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={hanldeBlur}
                onFocus={handleFocus}
            />

            <ErrorMessage name={name}>
                {errorMessage => <div className="login-form__error">{errorMessage}</div>}
            </ErrorMessage>

            <div className={cl(['login-form__placeholder', {
                active: placeholderActive || value.length,
            }])}>
                {placeholder}
            </div>
        </div>
    )
}

export default LoginFormInput;