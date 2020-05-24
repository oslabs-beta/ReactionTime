import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import { CreateRootTest } from '../CreateRootTest'

// 1) CreateRootTest Component should render contents inside the div
test('renders contents of CreateRootTest Component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<CreateRootTest />, container);
  // console.log(container.innerHTML);
  expect(container.textContent).toBeTruthy(); // expects that there is any content in a container to be truthy
})



