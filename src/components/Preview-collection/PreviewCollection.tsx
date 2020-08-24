import React, { FC } from "react";
import "./style.scss";
import CollectionItem from "../Collection-tem";

interface IProps {
  title: string;
  items: Items[];
}
interface Items {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const PreviewCollection: FC<IProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
