import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from "formik";
import { Input } from "antd";
import cl from "classnames";
import './custom-input.less';

const InputTextArea = (props) => {

    const [error, setError] = useState(0);
    const { placeholder, value, name, onChange, onBlur, touched, label, row, err, disabled, maxLength } = props;

    return (
        <div className="InputTextArea">
            {!(err && touched) ? label !== undefined && <div className="input__label">{label}</div> : ""}
            <ErrorMessage name={name}>
                {errorMessage => <div className="input__error">{errorMessage}</div>}
            </ErrorMessage>
            <Input.TextArea
                rows={row}
                disabled={disabled}
                name={name}
                maxLength={maxLength}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            // className={cl((err && error) ? 'error_input' : '')}
            />
        </div>
    );
}

export default InputTextArea;