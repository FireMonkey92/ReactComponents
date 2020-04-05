import React, { useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from "formik";
import cl from "classnames";

const SingleSelect = (props) => {

    const [error, setError] = useState(0);
    const { options, name, label, value, placeholder, err, touched, className, readOnly, isLoading, defaultValue } = props;

    const onChange = (option) => {
        if (props.name === 'state' || props.name === "homeState" || props.name === "officeState") {
            props.onChange(props.name, option);

        } else {
            props.onChange(props.name, option.value);
        }
        setError(0);
    };
    const customStyle = {
        control: base => ({
            ...base,
            borderColor: '#979797',

            '&:hover': {
                borderColor: '#979797'
            },
            '&:active': {
                borderColor: '#979797'
            }
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            const bgColor = "#c9e7f5";
            const color = "#1c769f"
            return {
                ...styles,
                backgroundColor: isDisabled
                    ? null
                    : isSelected
                        ? bgColor
                        : isFocused
                            ? "#f0f0f0"
                            : null,
                color: isDisabled ? null
                    : isSelected
                        ? color
                        : isFocused
                            ? "black"
                            : null,
                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled && (isSelected ? bgColor : bgColor),
                },
            }
        }
    }
    return (
        <div className='SingleSelect'>
            {!(err && touched) ? label !== undefined && <div className="input__label">{label}</div> : ""}
            <ErrorMessage name={name}>
                {errorMessage => <div className="input__error">{errorMessage}</div>}
            </ErrorMessage>
            <Select
                closeMenuOnSelect={true}
                name={name}
                styles={customStyle}
                placeholder={placeholder || ""}
                options={options}
                onChange={onChange}
                value={value}
                isSearchable={false}
                className={cl('_single-select', (err && error || error) ? 'error_input' : '')}
                classNamePrefix="_single-select"
                isLoading={isLoading}
                isDisabled={readOnly}
                defaultValue={defaultValue}
            />
        </div>
    );
}
export default SingleSelect;