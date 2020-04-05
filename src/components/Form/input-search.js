import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import { ErrorMessage } from 'formik';

import './custom-input.less';

const SearchInput = (props) => {
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
        <div className="serach-input__wrap">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onBlur={hanldeBlur}
                onFocus={handleFocus}
            />
        </div>
    )
}

export default SearchInput;
