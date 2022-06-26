import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const Home = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("userData", () =>
    fetch("https://randomuser.me/api/?results=500").then((res) => {
      refetch();
      return res.json();
    })
  );

  return <div>{console.log(users)}</div>;
};

export default Home;
