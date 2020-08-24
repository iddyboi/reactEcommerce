import React, { useState } from "react";
import { ShopData } from "../../data/mock_data/shopdata";
import PreviewCollection from "../../components/Preview-collection/PreviewCollection";

const ShopPage = () => {
  const [collections, setCollections] = useState(ShopData);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
