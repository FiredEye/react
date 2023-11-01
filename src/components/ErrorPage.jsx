import React from "react";
import ContentWrapper from "./ContentWrapper";

const Error = ({ error }) => {
  return (
    <ContentWrapper>
      <h1 className="text-pink-700 p-5">{error?.data?.status_message}</h1>
    </ContentWrapper>
  );
};

export default Error;
