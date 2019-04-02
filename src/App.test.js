import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Board from './Board';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
