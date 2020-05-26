import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import { PackageTest } from '../PackageTest'

// 1) PackageTest Component should render contents inside the div
test('renders contents of PackageTest Component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<PackageTest />, container);
  // console.log(container.innerHTML);
  expect(container.textContent).toBeTruthy(); // expects that there is any content in a container to be truthy
})



