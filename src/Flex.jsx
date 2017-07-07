/**
 * Copyright by AIWSolutions.
 */
import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes';
import { computeStyle } from './utils';
import './flexbox.scss';

const propTypes = {
    column: PropTypes.bool,
    reverse: PropTypes.bool,
    wrap: PropTypes.oneOf([
        'nowrap',
        'wrap',
        'wrap-reverse',
    ]),
    justify: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
    ]),
    align: PropTypes.oneOf([
        'flex-start',
        'flex-end',
        'center',
        'stretch',
        'baseline',
    ]),
    fullWidth: PropTypes.bool,
    col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    children: PropTypes.node,
    style: PropTypes.object,
    auto: PropTypes.bool,
};

const defaultProps = {
    column: false,
    reverse: false,
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'flex-start',
    fullWidth: false,
    col: undefined,
    children: undefined,
    style: undefined,
    auto: false,
};

const Flex = ({
            children,
            auto,
            column,
            reverse,
            wrap,
            justify,
            align,
            fullWidth,
            style,
            col,
            ...others
        }) => {
        /* eslint no-nested-ternary: 0 */
    const flexDirection = column ? (reverse ? 'column-reverse' : 'column')
            : (reverse ? 'row-reverse' : 'row');

    const flexStyle = {
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        WebkitFlexDirection: flexDirection,
        flexDirection,
        WebkitFlexWrap: wrap,
        flexWrap: wrap,
        WebkitJustifyContent: justify,
        justifyContent: justify,
        WebkitAlignItems: align,
        alignItems: align,
    };

    if (auto) {
        flexStyle.WebkitFlex = '1 1 auto';
        flexStyle.flex = '1 1 auto';
    }

    if (fullWidth) {
        flexStyle.width = '100%';
    }
    if (col) {
        const widthPercentage = (col * 100) / 12;
        flexStyle.width = `${widthPercentage.toFixed(2)}%`;
    }

    const computedStyle = computeStyle(others);
    return (
      <div
        className="flex"
        style={Object.assign({}, flexStyle, computedStyle.style, style)}
        {...computedStyle.others}
      >
        {children}
      </div>
    );
};

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;
export default onlyUpdateForPropTypes(Flex);
