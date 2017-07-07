/**
 * Copyright by AIWSolutions.
 */
import React from 'react';
import {shallow} from 'enzyme';
import {Box} from 'flexbox';

describe('<Box>', function() {
    it('should be rendered as a div', function() {
        expect(shallow(<Box/>).containsMatchingElement(<div/>)).to.be.true;
    });

    it('should render children', function() {
        expect(shallow(<Box>{'a child'}</Box>).containsMatchingElement(<div>{'a child'}</div>)).to.be.true;
    });

    it('should be rendered with padding margin', function() {
        const style = shallow(<Box p={2} m={1}/>).prop('style');
        expect(style).to.include({
            margin: 8,
            padding: 16
        });
    });

    it('should be rendered with details padding margin', function() {
        const style = shallow(<Box pt={1} pb={2} pl={3} pr={4} mt={1} mb={2} ml={3} mr={4}/>).prop('style');
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
        expect(shallow(<Box auto/>).prop('style')).to.have.property('flex').and.equal('1 1 auto');
    });

    it('should pass through grow, shrink, basis, align', function() {
        const style = shallow(<Box grow={1} shrink={1} basis="auto" align="flex-start"/>).prop('style');
        expect(style).to.include({
            flexGrow: 1,
            flexShrink: 1,
            flexBasis: 'auto',
            alignSelf: 'flex-start'
        });
    });

    it('style should override other properties', function() {
        expect(shallow(<Box p={1} style={{padding: 1}}/>).prop('style')).to.have.property('padding')
            .and.equal(1);
    });
});