import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'antd';
import { ErrorMessage } from 'formik';
import './custom-input.less';

const AntdDatePicker = (props) => { 
    const { name, format, showToday, style, disabled, value, onChange, placeholder, label, err, touched, disabledDate } = props;

    return (
        <div className="input__wrap">
            {!(err && touched) ? label !== undefined && <div className="input__label">{label}</div> : ""}
            <ErrorMessage name={name}>
                {errorMessage => <div className="input__error">{errorMessage}</div>}
            </ErrorMessage>
            <DatePicker
                name={name}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                format={format ? format : 'YYYY/MM/DD'}
                disabled={disabled ? true : false}
                disabledDate={disabledDate}
                showToday={showToday ? true : false}
                style={style}
            />
        </div>
    );
}

export default AntdDatePicker;

