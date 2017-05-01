var Upvote = React.createClass({
  getInitialState: function() {
    return {
      product: this.props.product
    }
  },

  render: function() {
    var divClasses = classNames({
      "product-upvote": true,
      "product-upvote-upvoted": this.state.product.up_voted
    });

    return (
      <div className={divClasses} onClick={this.upvote}>
        <div className="product-arrow"></div>
        <div className="product-count">
          {this.state.product.up_votes}
        </div>
      </div>
    );
  },

  upvote: function() {
    var that = this;
    $.ajax({
      type: 'POST',
      url: Routes.upvote_product_path(this.props.product.id, {format: 'json'}),
      success: function(data) {
        that.setState({ product: data });
      }
    });
  }
});
