import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import theme from './style.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      pages: props.pages,
    };
  }

  renderNumbers() {
    const { onClick, pages } = this.props;
    const items = Array.from({ length: Number(pages) }, (v, k) => k + 1);
    return (
      items.map(item => (
        <a
          className={classnames({ [theme.selected]: (Number(this.state.page) === Number(item)) })}
          href="/" onClick={(e) => {
            e.preventDefault();
            onClick(item, e);
          }}
        > {item} </a>
      ))
    );
  }

  render() {
    const { onClick } = this.props;

    return (
      <div className={theme.pagination}>
        <div>
          <a
            href="/" onClick={(e) => {
              e.preventDefault();
              if (Number(this.state.page) > 1) {
                onClick(this.state.page - 1, e);
              }
            }}
          > {'<<'} </a>
        </div>
        <div className={theme.pages}>
          { this.renderNumbers() }
        </div>
        <div>
          <a
            href="/" onClick={(e) => {
              e.preventDefault();
              if (Number(this.state.page) < Number(this.state.pages)) {
                onClick(this.state.page + 1, e);
              }
            }}
          > {'>>'} </a>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  page: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Pagination;
