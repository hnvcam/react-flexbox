/**
 * Copyright by AIWSolutions.
 */
import React from 'react';
import PropTypes from 'prop-types';
import onlyUpdateForPropTypes from 'recompose/onlyUpdateForPropTypes';
import { computeStyle } from './utils';

const propTypes = {
    order: PropTypes.number,
    auto: PropTypes.bool,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    basis: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    align: PropTypes.oneOf([
        'auto',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch',
    ]),
    col: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    children: PropTypes.node,
    style: PropTypes.object,
};

const defaultProps = {
    order: undefined,
    auto: false,
    grow: 0,
    shrink: 1,
    basis: 'auto',
    align: undefined,
    col: undefined,
    children: undefined,
    style: undefined,
};

const Box = ({
            children, order, auto, grow, shrink, basis, align, col, style, ...others
        }) => {
    const boxStyle = {
        WebkitOrder: order,
        order,
        WebkitBoxSizing: 'border-box',
        boxSizing: 'border-box',
        WebkitFlexGrow: grow,
        flexGrow: grow,
        WebkitFlexShrink: shrink,
        flexShrink: shrink,
        WebkitFlexBasis: basis,
        flexBasis: basis,
        WebkitAlignSelf: align,
        alignSelf: align,
    };

    if (auto) {
        boxStyle.WebkitFlex = '1 1 auto';
        boxStyle.flex = '1 1 auto';
    }

    if (col) {
        const widthPercentage = (col * 100) / 12;
        boxStyle.width = `${widthPercentage.toFixed(2)}%`;
    }

    const computedStyle = computeStyle(others);
    return (
      <div
        style={Object.assign({}, boxStyle, computedStyle.style, style)}
        {...computedStyle.others}
      >
        {children}
      </div>
    );
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
export default onlyUpdateForPropTypes(Box);
