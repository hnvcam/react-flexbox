/**
 * Copyright by AIWSolutions.
 */
/* eslint object-curly-spacing:0 no-underscore-dangle: 0, global-require: 0 */
if (!global._babelPolyfill) {
    require('babel-polyfill');
}
import Flex from './Flex';
import Box from './Box';

export default {
    Flex,
    Box,
};
