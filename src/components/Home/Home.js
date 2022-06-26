import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ListGroup, Badge } from "react-bootstrap";
import Loading from "../Loading/Loading";

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
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <ListGroup as="ol" numbered>
      {users?.results?.map((user) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto d-flex text-start">
            <img
              src={user.picture.thumbnail}
              alt="userImg"
              style={{ height: "70px", width: "70px", borderRadius: "50%" }}
            />
            <div className="fw-bold mx-3">
              <span style={{ fontSize: "20px" }}>
                {" "}
                {user.name.first} {user.name.last}
              </span>

              <p>
                Email:{" "}
                <span className="fw-normal text-primary">{user.email}</span>
              </p>
              <p>
                Phone:{" "}
                <span className="fw-normal text-success">{user.phone}</span>
              </p>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Home;
