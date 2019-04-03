import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

storiesOf('Apollo|Getting started', module).add('Installation', () => (
  <Welcome showApp={linkTo('Button')} />
));
