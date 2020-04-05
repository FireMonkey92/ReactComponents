import React from "react";
import PropTypes from 'prop-types';

const defaultProps = {
    color: "#bebebe"
}
const propTypes = {
    color: PropTypes.string
}
const FilterIcon = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15.855" height="16" viewBox="0 0 15.855 16">
            <g id="filter-filled-tool-symbol" transform="translate(-4.41)">
                <path fill={color ? color : "none"} fillRule="nonzero" stroke={color ? color : "#1c769f"} id="Path_4" d="M10.431 7.561a.987.987 0 0 1 .26.668V15.5a.494.494 0 0 0 .841.352l2.03-2.326c.272-.326.421-.487.421-.81V8.231a1 1 0 0 1 .26-.668l5.824-6.319A.741.741 0 0 0 19.523 0H5.152a.741.741 0 0 0-.545 1.243z" data-name="Path 4" />
            </g>
        </svg>
    )
};

FilterIcon.defaultProps = defaultProps;
FilterIcon.propTypes = propTypes;

export {
    FilterIcon
}