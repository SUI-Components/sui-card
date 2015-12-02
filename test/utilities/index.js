import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

export function createComponent(component){
  return class ChildComponent extends React.Component{
    render() {
      return(component);
    }
  };
}

export function shallowRender(component, props, ...children) {
  const shallowRenderer = ReactTestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return shallowRenderer.getRenderOutput();
}
