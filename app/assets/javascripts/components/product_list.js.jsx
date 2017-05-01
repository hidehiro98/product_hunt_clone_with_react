var ProductList = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.products.map(function(product){
          return <ProductListItem product={product} key={product.id} />;
        })}
      </div>
    );
  }
});
