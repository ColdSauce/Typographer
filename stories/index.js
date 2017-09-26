import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Typist from './../src';

storiesOf('Typist', module)
  .add('with text', () => (
    <Typist>Hello Button</Typist>
  ));
