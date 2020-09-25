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
      className: "salesDivider"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwic3RvcmUiLCJzYWxlcyIsInRpdGxlIiwicHJpY2UiLCJyZW5kZXIiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLEtBQUssQ0FBQ0MsU0FBeEIsQ0FBa0M7QUFDaENDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFPO0FBQ2xCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDUEMsTUFBQUEsS0FBSyxFQUFFLGlCQURBO0FBRVBDLE1BQUFBLEtBQUssRUFBRSxPQUZBO0FBR1BDLE1BQUFBLEtBQUssRUFBRSxnREFIQTtBQUlQQyxNQUFBQSxLQUFLLEVBQUU7QUFKQSxLQUFiO0FBTUM7O0FBRURDLEVBQUFBLE1BQU0sR0FBRTtBQUNOLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFHLE1BQUEsU0FBUyxFQUFDO0FBQWIsT0FBMEIsS0FBS0wsS0FBTCxDQUFXQyxLQUFyQyxDQURGLGVBRUU7QUFBRyxNQUFBLFNBQVMsRUFBQztBQUFiLE9BQXNCLEtBQUtELEtBQUwsQ0FBV0UsS0FBakMsNEJBQWdEO0FBQU0sTUFBQSxTQUFTLEVBQUM7QUFBaEIsV0FBaEQsV0FGRixlQUdFO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCxPQUF1QixLQUFLRixLQUFMLENBQVdHLEtBQWxDLENBSEYsZUFJRTtBQUFHLE1BQUEsU0FBUyxFQUFDO0FBQWIsWUFBdUIsS0FBS0gsS0FBTCxDQUFXSSxLQUFsQyxvQkFBeUM7QUFBTSxNQUFBLFNBQVMsRUFBQztBQUFoQixrQkFBekMsQ0FKRixlQUtFO0FBQU8sTUFBQSxTQUFTLEVBQUM7QUFBakIsNEJBQ0EsK0JBREEsZUFFQTtBQUFRLE1BQUEsU0FBUyxFQUFDO0FBQWxCLG9CQUNFLHdDQURGLGVBRUUsd0NBRkYsQ0FGQSxDQUxGLGVBWUUsK0JBWkYsZUFhRTtBQUFPLE1BQUEsU0FBUyxFQUFDO0FBQWpCLGdDQUNBLCtCQURBLGVBRUE7QUFBUSxNQUFBLFNBQVMsRUFBQztBQUFsQixvQkFDRSx3Q0FERixlQUVFLHdDQUZGLGVBR0Usd0NBSEYsZUFJRSx3Q0FKRixDQUZBLENBYkYsZUFzQkU7QUFBUSxNQUFBLFNBQVMsRUFBQztBQUFsQixxQkF0QkYsZUF1QkU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNBO0FBQUssTUFBQSxTQUFTLEVBQUMsTUFBZjtBQUFxQixNQUFBLEdBQUcsRUFBQztBQUF6QixNQURBLGVBQ3lGO0FBQUcsTUFBQSxTQUFTLEVBQUM7QUFBYixvQkFBb0IsOERBQXBCLHdEQUR6RixDQXZCRixlQTBCRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0E7QUFBSyxNQUFBLFNBQVMsRUFBQyxNQUFmO0FBQXFCLE1BQUEsR0FBRyxFQUFDO0FBQXpCLE1BREEsZUFDeUY7QUFBRyxNQUFBLFNBQVMsRUFBQztBQUFiLG9CQUFvQixtREFBcEIscUVBRHpGLENBMUJGLENBREY7QUFnQ0Q7O0FBNUMrQjs7QUErQ2xDRSxRQUFRLENBQUNELE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc3RvcmU6ICdUaWNrZXR5Ym9vdGlxdWUnLFxuICAgICAgICBzYWxlczogJzEsMzg2JyxcbiAgICAgICAgdGl0bGU6ICdQdW1wa2luIHBpZSBjYXQgYW5kIHNtYWxsIHBldCBoYXQgZmVsdCBjb3N0dW1lJyxcbiAgICAgICAgcHJpY2U6ICcyMC4wMCcsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0b3JlTmFtZVwiPnt0aGlzLnN0YXRlLnN0b3JlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic2FsZXNcIj57dGhpcy5zdGF0ZS5zYWxlc30gc2FsZXMgICA8c3BhbiBjbGFzc05hbWU9J3NhbGVzRGl2aWRlcic+fDwvc3Bhbj4gKioqKio8L3A+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnN0YXRlLnRpdGxlfTwvaDY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+JHt0aGlzLnN0YXRlLnByaWNlfSA8c3BhbiBjbGFzc05hbWU9XCJzdG9ja1wiPkluIHN0b2NrPC9zcGFuPjwvcD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlbGVjdFRpdGxlXCI+U2l6ZVxuICAgICAgICA8YnIvPlxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInNlbGVjdFwiPlxuICAgICAgICAgIDxvcHRpb24+Uzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24+TTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlbGVjdFRpdGxlXCI+UXVhbnRpdHlcbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICA8b3B0aW9uPjE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPjI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPjM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uPjQ8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+QWRkIHRvIGNhcnQ8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uQ29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwic3JjPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3N2Zy9zdGF0aWMvaWNvbnMvc3ZnLzcxMS83MTExOTIuc3ZnXCIvPjxwIGNsYXNzTmFtZT1cImluZm9cIj48c3Ryb25nPk90aGVyIHBlb3BsZSB3YW50IHRoaXMuPC9zdHJvbmc+IE92ZXIgMjAgcGVvcGxlIGhhdmUgdGhpcyBpbiB0aGVpciBjYXJ0cyByaWdodCBub3cuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uQ29udGFpbmVyXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwic3JjPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3N2Zy9zdGF0aWMvaWNvbnMvc3ZnLzU2NS81NjUzOTEuc3ZnXCIvPjxwIGNsYXNzTmFtZT1cImluZm9cIj48c3Ryb25nPk5pY2UgY2hvaWNlITwvc3Ryb25nPiBFbmpveSBmcmVlIHNoaXBwaW5nIHRvIHRoZSBVUyB3aGVuIHlvdSBzcGVuZCAkMzUrIGF0IHRoaXMgc2hvcC48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKSJdfQ==