import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { pick } from 'lodash';

import { cellPropKeys } from '../../constants';
import { RowId } from '../../types';

import { renderElement } from '../../util';

export default class CheckboxCell extends Component {
  handleCellCheck = () => {
    const { onCheck, id } = this.props;

    onCheck(id);
  };

  render() {
    const { id, renderer, isChecked } = this.props;
    const onChange = this.handleCellCheck;

    const checkbox = (
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={this.handleCellCheck}
      />
    );

    return renderElement(
      renderer,
      { ...pick(this.props, cellPropKeys), checkbox, onChange, isChecked },
      checkbox
    );
  }
}
CheckboxCell.propTypes = {
  onCheck: PropTypes.func.isRequired,
  id: RowId.isRequired,
  isChecked: PropTypes.bool.isRequired,
  renderer: PropTypes.func
};
