/**
 * Copyright by AIWSolutions.
 */
import _ from 'lodash';

function scale(value) {
    if (_.isNumber(value)) {
        return value * 8;
    }
    return value;
}

export default function computeStyle(props) {
    const { mt, mr, mb, ml, m, pt, pr, pb, pl, p, data, ...others } = props;
    return {
        style: _.pickBy({
            marginTop: scale(mt),
            marginRight: scale(mr),
            marginBottom: scale(mb),
            marginLeft: scale(ml),
            margin: scale(m),
            paddingTop: scale(pt),
            paddingRight: scale(pr),
            paddingBottom: scale(pb),
            paddingLeft: scale(pl),
            padding: scale(p),
        }, value => !_.isUndefined(value)),
        others,
    };
}
