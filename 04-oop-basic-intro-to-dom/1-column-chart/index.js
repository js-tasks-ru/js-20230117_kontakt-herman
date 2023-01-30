export default class ColumnChart {
  chartHeight = 50;

  constructor({
      data = [],
      label = '',
      value = '',
      link = ''
  }) {
      this.data = data;
      this.label = label;
      this.value = value;
      this.link = link;
      this.render();
  }

  render() {
      const element = document.createElement('div');
      element.innerHTML = this.createElements();
      this.element = element.firstElementChild;
  }

  createElements() {
    return `
    <div class="dashboard__chart_orders">
      <div class="column-chart" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          Total ${this.label}
          ${this.getLink()}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">${this.getBalance()}</div>
          <div data-element="body" class="column-chart__chart">
            ${this.createColumn(this.data)}
          </div>
        </div>
      </div>
    </div>
    `
  }

  getLink() {
    return this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : '';
  }

  getBalance(sales) {
    sales = this.value;
    if(sales > 20000) {
      let fixedBalance = '' + sales;
      let res = fixedBalance.slice(0,3)
      let ressum = fixedBalance.slice(3, 6)

      return `$${res}.${ressum}`
    }

    return `
      ${sales}
    `
  }

  createColumn(data) {
    const maxValue = Math.max(...data);
    const scale = this.chartHeight / maxValue;

    return data
    .map(item => {
      const percent = (item / maxValue * 100).toFixed(0);

      return `<div style="--value: ${Math.floor(item * scale)}" data-tooltip="${percent}%"></div>`;
    })
    .join('');
  }

  update(data) {
    this.subElements.body.innerHTML = this.getColumnBody(data);
  }

  remove () {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }

    
}
