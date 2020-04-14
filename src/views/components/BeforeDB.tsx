import React from 'react';
import Header from "./Header";
import HeadNav from "./HeadNav";
import Title from "./Title";
import FormToPost from "./FormToPost";

const BeforeDB: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <HeadNav />
      <Title />
      <FormToPost />
    </React.Fragment>
  );
};

export default BeforeDB;
