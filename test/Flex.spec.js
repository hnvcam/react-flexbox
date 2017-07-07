/**
 * Copyright by AIWSolutions.
 */
import React from 'react';
import {shallow} from 'enzyme';
import {Flex} from 'flexbox';

describe('<Flex>', function() {
    it('should be rendered as a div', function() {
        const wrapper = shallow(<Flex/>);
        expect(wrapper.containsMatchingElement(<div/>)).to.be.true;
        const style = wrapper.prop('style');
        expect(style).to.include({
            boxSizing: 'border-box',
            flexDirection: 'row'
        });
        expect(wrapper.prop('className')).to.include('flex');
    });

    it('should be rendered as column if specified', function() {
        expect(shallow(<Flex column/>).prop('style')).to.have.property('flexDirection')
            .and.equal('column');
    });

    it('should render children', function() {
        expect(shallow(<Flex>{'a child'}</Flex>).containsMatchingElement(<div>{'a child'}</div>)).to.be.true;
    });

    it('should be rendered with padding margin', function() {
        const style = shallow(<Flex p={2} m={1}/>).prop('style');
        expect(style).to.include({
            margin: 8,
            padding: 16
        });
    });

    it('should be rendered with details padding margin', function() {
        const style = shallow(<Flex pt={1} pb={2} pl={3} pr={4} mt={1} mb={2} ml={3} mr={4}/>).prop('style');
        expect(style).to.include({
            paddingTop: 8,
            paddingBottom: 16,
            paddingLeft: 24,
            paddingRight: 32,
            marginTop: 8,
            marginBottom: 16,
            marginLeft: 24,
            marginRight: 32
        });
    });

    it('should be rendered with correct auto style', function() {
        expect(shallow(<Flex auto/>).prop('style')).to.have.property('flex').and.equal('1 1 auto');
    });

    it('should pass through wrap, justify, align, fullWidth', function() {
        const style = shallow(<Flex wrap="wrap" justify="center" align="flex-start" fullWidth/>).prop('style');
        expect(style).to.include({
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%'
        });
    });

    it('style should override other properties', function() {
        expect(shallow(<Flex p={1} style={{padding: 1}}/>).prop('style')).to.have.property('padding')
            .and.equal(1);
    });
});