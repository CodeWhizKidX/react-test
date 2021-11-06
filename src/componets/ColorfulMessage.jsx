import React from 'react';

const ColorfulMessage = (props) => {
  const {color, children} = props;
  console.log(props)
  // color: color と同じ値になっている場合はcolorのみを指定できる
  const contentStyle = {
    color: color,
    fontStyle: '18px'
  }
  return (
    <p style={contentStyle}>{children}</p>
  );
}

export default ColorfulMessage;