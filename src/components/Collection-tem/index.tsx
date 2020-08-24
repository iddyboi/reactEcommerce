import React, { FC } from "react";
import "./style.scss";

interface IProps {
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionItem: FC<IProps> = ({ name, imageUrl, price }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <div className="name">{name}</div>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
