import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import  Select  from '../components/Select';

const style = {
	display: 'flex',
	justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};
const Presentation = () => (
	<div style={style}>
		<Select value={'Some item'}/>
	</div>
);

storiesOf('JavascriptNinja', module).add('DefaultDemo', () => <Presentation />);
