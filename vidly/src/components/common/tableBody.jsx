import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  render() {
    const { data, columns, onDelete, onLike } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr>{columns.map(colmun => <td>{_.get(item, colmun.path)}</td>)}</tr>
        ))}
        <tr />
      </tbody>
    );
  }
}

export default TableBody;
