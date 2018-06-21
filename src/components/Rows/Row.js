import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { get } from 'lodash';

import { Cell } from './Cells';

export default class Row extends PureComponent {
  renderColumns = () => {
    const {
      columns,
      rowData,
      rowIndex,
      styleCalculator,
      stickyFunction,
      onDragEnd,
      checkedRows,
      onCheck,
      idKey
    } = this.props;

    return columns.map((column, index) => {
      const { width, dataKey, cellRenderer } = column;
      const cellData = get(rowData, dataKey);
      const style = { width, ...styleCalculator(index) };
      const { isSticky, isLastSticky } = stickyFunction(index);

      return (
        <Cell
          dataKey={dataKey}
          cellData={cellData}
          rowData={rowData}
          style={style}
          renderer={cellRenderer}
          cellIndex={index}
          rowIndex={rowIndex}
          isSticky={isSticky}
          isLastSticky={isLastSticky}
          onDragEnd={onDragEnd(index)}
          key={`sitcky-table-row-${rowIndex}-${index}`}
          id={rowData[idKey]}
          checkedRows={checkedRows}
          onCheck={onCheck}
        />
      );
    });
  };

  render() {
    return (
      <div className="React-Sticky-Table--Row">{this.renderColumns()}</div>
    );
  }
}

Row.propTypes = {
  columns: PropTypes.array.isRequired,
  rowData: PropTypes.object.isRequired,
  rowIndex: PropTypes.number.isRequired,
  styleCalculator: PropTypes.func.isRequired,
  stickyFunction: PropTypes.func.isRequired,
  onDragEnd: PropTypes.func.isRequired
};
