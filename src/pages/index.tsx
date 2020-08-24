import React, { FC } from "react";
import "./Homepage.style.scss";
import Directory from "../components/Directory";
import { RouteComponentProps } from "react-router-dom";

interface IProps extends RouteComponentProps<any> {}

const Homepage: FC<IProps> = ({ history }) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
