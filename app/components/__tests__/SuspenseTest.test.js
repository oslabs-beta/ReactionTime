import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import { SuspenseTest } from '../SuspenseTest'

// 1) SuspenseTest Component should render contents inside the div
test('renders contents of SuspenseTest Component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<SuspenseTest />, container);
  // console.log(container.innerHTML);
  expect(container.textContent).toBeTruthy(); // expects that there is any content in a container to be truthy
})



