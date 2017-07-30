import React from 'react';

const RenderArray = ({ children }) => (
  React.Children.toArray(children)
);

export default RenderArray;
