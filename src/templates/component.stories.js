import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import COMPONENT_NAME from './COMPONENT_NAME';
import description from './COMPONENT_NAME.md';

storiesOf('Components/COMPONENT_NAME', module)
	.add('Overview',
		() => (
			<COMPONENT_NAME/>
		),
		{
			info: {
				inline: true,
				text: description,
			}
		}
	)
	
