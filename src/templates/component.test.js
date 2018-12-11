import React from 'react';

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import COMPONENT_NAME from './COMPONENT_NAME';

describe('COMPONENT_NAME container', function() {
	it('should not overflow', () => {
		const wrapper = renderer.create(<COMPONENT_NAME/>).toJSON();
		expect(wrapper).toHaveStyleRule('overflow', 'hidden');
	});
});
