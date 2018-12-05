import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import { Select} from '../component/Select';

const Presentation = () => (
  <div>
    <Select />
  </div>
)

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

storiesOf('JavascriptNinja', module).add('defaultDemo', () => <Presentation style={style}/>);
