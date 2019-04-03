import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Components|Button', module).add('Examples', () => (
  <Button color="primary">primary</Button>
));
