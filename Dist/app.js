class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store: 'Ticketybootique',
      sales: '1,386',
      title: 'Pumpkin pie cat and small pet hat felt costume',
      price: '20.00'
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("p", {
      className: "storeName"
    }, this.state.store), /*#__PURE__*/React.createElement("p", {
      className: "sales"
    }, this.state.sales, " sales   ", /*#__PURE__*/React.createElement("span", {
      clas: true
    }, "|"), " *****"), /*#__PURE__*/React.createElement("h6", {
      className: "title"
    }, this.state.title), /*#__PURE__*/React.createElement("p", {
      className: "price"
    }, "$", this.state.price, " ", /*#__PURE__*/React.createElement("span", {
      className: "stock"
    }, "In stock")), /*#__PURE__*/React.createElement("label", {
      className: "selectTitle"
    }, "Size", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      className: "select"
    }, /*#__PURE__*/React.createElement("option", null, "S"), /*#__PURE__*/React.createElement("option", null, "M"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      className: "selectTitle"
    }, "Quantity", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
      className: "select"
    }, /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3"), /*#__PURE__*/React.createElement("option", null, "4"))), /*#__PURE__*/React.createElement("button", {
      className: "button"
    }, "Add to cart"), /*#__PURE__*/React.createElement("div", {
      className: "iconContainer"
    }, /*#__PURE__*/React.createElement("img", {
      className: "icon",
      src: "https://www.flaticon.com/svg/static/icons/svg/711/711192.svg"
    }), /*#__PURE__*/React.createElement("p", {
      className: "info"
    }, /*#__PURE__*/React.createElement("strong", null, "Other people want this."), " Over 20 people have this in their carts right now.")), /*#__PURE__*/React.createElement("div", {
      className: "iconContainer"
    }, /*#__PURE__*/React.createElement("img", {
      className: "icon",
      src: "https://www.flaticon.com/svg/static/icons/svg/565/565391.svg"
    }), /*#__PURE__*/React.createElement("p", {
      className: "info"
    }, /*#__PURE__*/React.createElement("strong", null, "Nice choice!"), " Enjoy free shipping to the US when you spend $35+ at this shop.")));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic3RvcmUiLCJzYWxlcyIsInRpdGxlIiwicHJpY2UiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2xCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDUEMsTUFBQUEsS0FBSyxFQUFFLGlCQURBO0FBRVBDLE1BQUFBLEtBQUssRUFBRSxPQUZBO0FBR1BDLE1BQUFBLEtBQUssRUFBRSxnREFIQTtBQUlQQyxNQUFBQSxLQUFLLEVBQUU7QUFKQSxLQUFiO0FBTUM7O0FBRURDLEVBQUFBLE1BQU0sR0FBRTtBQUNOLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFHLE1BQUEsU0FBUyxFQUFDO0FBQWIsT0FBMEIsS0FBS0wsS0FBTCxDQUFXQyxLQUFyQyxDQURGLGVBRUU7QUFBRyxNQUFBLFNBQVMsRUFBQztBQUFiLE9BQXNCLEtBQUtELEtBQUwsQ0FBV0UsS0FBakMsNEJBQWdEO0FBQU0sTUFBQSxJQUFJO0FBQVYsV0FBaEQsV0FGRixlQUdFO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCxPQUF1QixLQUFLRixLQUFMLENBQVdHLEtBQWxDLENBSEYsZUFJRTtBQUFHLE1BQUEsU0FBUyxFQUFDO0FBQWIsWUFBdUIsS0FBS0gsS0FBTCxDQUFXSSxLQUFsQyxvQkFBeUM7QUFBTSxNQUFBLFNBQVMsRUFBQztBQUFoQixrQkFBekMsQ0FKRixlQUtFO0FBQU8sTUFBQSxTQUFTLEVBQUM7QUFBakIsNEJBQ0EsK0JBREEsZUFFQTtBQUFRLE1BQUEsU0FBUyxFQUFDO0FBQWxCLG9CQUNFLHdDQURGLGVBRUUsd0NBRkYsQ0FGQSxDQUxGLGVBWUUsK0JBWkYsZUFhRTtBQUFPLE1BQUEsU0FBUyxFQUFDO0FBQWpCLGdDQUNBLCtCQURBLGVBRUE7QUFBUSxNQUFBLFNBQVMsRUFBQztBQUFsQixvQkFDRSx3Q0FERixlQUVFLHdDQUZGLGVBR0Usd0NBSEYsZUFJRSx3Q0FKRixDQUZBLENBYkYsZUFzQkU7QUFBUSxNQUFBLFNBQVMsRUFBQztBQUFsQixxQkF0QkYsZUF1QkU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNBO0FBQUssTUFBQSxTQUFTLEVBQUMsTUFBZjtBQUFxQixNQUFBLEdBQUcsRUFBQztBQUF6QixNQURBLGVBQ3lGO0FBQUcsTUFBQSxTQUFTLEVBQUM7QUFBYixvQkFBb0IsOERBQXBCLHdEQUR6RixDQXZCRixlQTBCRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0E7QUFBSyxNQUFBLFNBQVMsRUFBQyxNQUFmO0FBQXFCLE1BQUEsR0FBRyxFQUFDO0FBQXpCLE1BREEsZUFDeUY7QUFBRyxNQUFBLFNBQVMsRUFBQztBQUFiLG9CQUFvQixtREFBcEIscUVBRHpGLENBMUJGLENBREY7QUFnQ0Q7O0FBNUMrQjs7QUErQ2xDRSxRQUFRLENBQUNELE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc3RvcmU6ICdUaWNrZXR5Ym9vdGlxdWUnLFxuICAgICAgICBzYWxlczogJzEsMzg2JyxcbiAgICAgICAgdGl0bGU6ICdQdW1wa2luIHBpZSBjYXQgYW5kIHNtYWxsIHBldCBoYXQgZmVsdCBjb3N0dW1lJyxcbiAgICAgICAgcHJpY2U6ICcyMC4wMCcsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3JlTmFtZVwiPnt0aGlzLnN0YXRlLnN0b3JlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2FsZXNcIj57dGhpcy5zdGF0ZS5zYWxlc30gc2FsZXMgICA8c3BhbiBjbGFzPnw8L3NwYW4+ICoqKioqPC9wPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5zdGF0ZS50aXRsZX08L2g2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPiR7dGhpcy5zdGF0ZS5wcmljZX0gPHNwYW4gY2xhc3NOYW1lPVwic3RvY2tcIj5JbiBzdG9jazwvc3Bhbj48L3A+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWxlY3RUaXRsZVwiPlNpemVcbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICA8b3B0aW9uPlM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPk08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzZWxlY3RUaXRsZVwiPlF1YW50aXR5XG4gICAgICAgIDxici8+XG4gICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2VsZWN0XCI+XG4gICAgICAgICAgPG9wdGlvbj4xPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj4zPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj40PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPkFkZCB0byBjYXJ0PC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbkNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cInNyYz1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy83MTEvNzExMTkyLnN2Z1wiLz48cCBjbGFzc05hbWU9XCJpbmZvXCI+PHN0cm9uZz5PdGhlciBwZW9wbGUgd2FudCB0aGlzLjwvc3Ryb25nPiBPdmVyIDIwIHBlb3BsZSBoYXZlIHRoaXMgaW4gdGhlaXIgY2FydHMgcmlnaHQgbm93LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbkNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cInNyYz1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9zdmcvc3RhdGljL2ljb25zL3N2Zy81NjUvNTY1MzkxLnN2Z1wiLz48cCBjbGFzc05hbWU9XCJpbmZvXCI+PHN0cm9uZz5OaWNlIGNob2ljZSE8L3N0cm9uZz4gRW5qb3kgZnJlZSBzaGlwcGluZyB0byB0aGUgVVMgd2hlbiB5b3Ugc3BlbmQgJDM1KyBhdCB0aGlzIHNob3AuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkiXX0=