import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Components|Button', module)
  .addDecorator(withInfo)
  .add('Examples', () => <Button color="primary">primary</Button>, {
    info: {
      inline: true,
      text:
        'The component also support [HTML DOM Input Button](https://www.w3schools.com/jsref/dom_obj_button.asp) Object Properties.',
    },
  });
