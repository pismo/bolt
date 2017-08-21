import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import style from './style.css';
import Title from '../Title';
import withDefaultTheme from '../helpers/withDefaultTheme';

const defaultFormatter = value => value;

class DonutChart extends Component {
  constructor(props, context) {
    super(props, context);

    const first = props.config.data[0];
    const fomatter = first.formatter || defaultFormatter;

    this.state = {
      label: first.name,
      value: fomatter(first.y),
      color: first.color,
      subTitle: first.subTitle,
    };

    this.setContainer = this.setContainer.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  componentDidMount() {
    this.mountChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  setContainer(el) {
    this.container = el;
  }

  mountChart() {
    // Create the chart
    this.chart = Highcharts.chart(this.container, {
      credits: false,
      chart: {
        type: 'pie',
      },
      exporting: { enabled: false },
      title: { text: null },
      yAxis: {
        title: {
          text: 'Total percent market share',
        },
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%'],
        },
        series: {
          point: {
            events: {
              mouseOver: this.handleMouseOver,
            },
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: 'Versions',
          data: this.props.config.data,
          innerSize: '90%',
          dataLabels: { enabled: false },
        },
      ],
    });
  }

  handleMouseOver({ target }) {
    const data = this.props.config.data.find(({ name }) => name === target.name);
    const formatter = data.formatter || defaultFormatter;

    this.setState({
      value: formatter(target.y),
      label: target.name,
      color: target.color,
    });
  }

  render() {
    const { label, color, subTitle, value } = this.state;
    const { width, height, theme } = this.props;
    const withSubtitle = subTitle ? theme.withSubtitle : '';

    return (
      <div className={theme.chartWrapper}>
        <div ref={this.setContainer} style={{ width, height, margin: '0 auto' }} />
        <div className={`${theme.chartLabel} ${withSubtitle}`}>
          {
            value &&
            <Title
              prevTitle={label}
              subTitle={subTitle}
              className={theme.chartLabelTitle}
            >
              <span style={{ color }}>{value}</span>
            </Title>
          }
        </div>
      </div>
    );
  }
}

DonutChart.defaultProps = {
  width: '200px',
  height: '200px',
};

DonutChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  config: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      y: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      formatter: PropTypes.func,
    })),
  }).isRequired,
  theme: PropTypes.shape({}).isRequired,
};

export default withDefaultTheme(style, DonutChart);
