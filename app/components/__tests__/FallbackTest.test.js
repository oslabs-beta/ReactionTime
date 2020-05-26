import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import { FallbackTest } from '../FallbackTest'

// 1) FallbackTest Component should render contents inside the div
test('renders contents of FallbackTest Component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<FallbackTest />, container);
  // console.log(container.innerHTML);
  expect(container.textContent).toBeTruthy(); // expects that there is any content in a container to be truthy
})



