import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Typographer from './../src';

storiesOf('Typographer', module)
  .add('with text', () => (
    <Typographer text="Hello Button" speed = {100}/>
  ))
  .add('with children', () => (
    <Typographer speed = {100}>
      Hello Button
    </Typographer>
  ))
  .add('with nested children', () => (
    <Typographer speed = {100}>
      <div>Hello World</div>
      <div>Hello World 2</div>
    </Typographer>
  ));
