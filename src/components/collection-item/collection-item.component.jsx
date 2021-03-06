import React from "react";
import { connect } from "react-redux";
import Button from "../button/button.component";
import { createAddItemAction } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={addItem.bind(null, item)}>
        Add to cart
      </Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(createAddItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
