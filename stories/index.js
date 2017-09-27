import React from 'react';
import {
	storiesOf
} from '@kadira/storybook';
import Typographer from './../src';

storiesOf('Typographer', module)
	.add('with children', () => (
		<Typographer speed={100}>
      Hello Button
    </Typographer>
	))
	.add('with 1 layer nested children', () => (
		<Typographer speed={100}>
      <div>Hello World </div>
      <div>Hello World 2 </div>
      <span>Hello World 3 </span>
    </Typographer>
	))
	.add('with 2 layer nested children', () => (
		<Typographer speed={100}>
			<div>
				Hello World 1
				<div>Hello World 2 </div>
				<div>Hello World 2 </div>
				<div>Hello World 2 </div>
			</div>
			<span>Hello World 3 </span>
		</Typographer>
	))
	.add('with 5 layer nested children', () => (
		<Typographer speed={100}>
			<div>
				Hello World 1
				<div>Hello World 2
					<div>Hello World 3
						<div>Hello World 4
							<span>Hello World 5 </span>
						</div>
					</div>
				</div>
			</div>
		</Typographer>
	))
	.add('with 2 layer nested children and custom separator', () => (
		<Typographer speed={100} separator={'- -'}>
			<div>
				Hello World 1
				<div>Hello World 2</div>
				<div>Hello World 2</div>
				<div>Hello World 2</div>
			</div>
			<span>Hello World 3 </span>
		</Typographer>
	));
