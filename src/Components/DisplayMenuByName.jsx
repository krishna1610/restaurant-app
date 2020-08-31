import React from "react";

class DisplayMenuByName extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.subMenuItem.name}</td>
        <td>{this.props.subMenuItem.description}</td>
      </tr>
    );
  }
}
export default DisplayMenuByName;
