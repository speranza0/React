import React, { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "이름없음",
  };
  render() {
    const { color, isSpecial, name } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}안녕하세요 {name}
      </div>
    );
  }
}

// function Hello() {
//   return <div>안녕하세요</div>;
// }

export default Hello;
