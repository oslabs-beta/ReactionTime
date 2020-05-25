import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow';
import Home from '../Home.tsx'

// 1) Home Component should render contents inside the div
test('renders contents of Home Component', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Home />, container);
  // console.log(container.textContent);
  expect(container.textContent).toBeTruthy(); // expects that there is any content in a container to be truthy
})

// 2) Home component should have padding for improved UI
test('uses paddingLeft for improved UI', () => {

  // Shallow render the component, to see what the render method returns 
  const renderer = new ShallowRenderer();
  renderer.render(<Home />)
  const result = renderer.getRenderOutput();
  // console.log(result);
  console.log(result.props.style.paddingLeft);
  expect(result.props.style.paddingLeft).toBeDefined(); // expects that our component has a paddingLeft, value designated doesn't matter
})

