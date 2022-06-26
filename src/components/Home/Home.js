import React, { useEffect, useState } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import Loading from "../Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  useEffect(() => {
    const getUsers = () => {
      fetch(`https://randomuser.me/api/?page=1&results=10`)
        .then((res) => res.json())
        .then((data) => setUsers(data.results));
    };
    getUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch(
      `https://randomuser.me/api/?page=${page}&results=10`
    );
    const data = await res.json();
    return data.results;
  };
  const fetchData = async () => {
    const usersFromServer = await fetchUsers();
    setUsers([...users, ...usersFromServer]);
    if (usersFromServer.length === 0 || usersFromServer.length < 10) {
      setHasMore(false);
    }

    setPage(page + 1);
    console.log(usersFromServer.length);
  };
  return (
    <ListGroup as="ol" numbered>
      {}
      <InfiniteScroll
        dataLength={users?.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loading></Loading>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {users?.map((user) => (
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
      </InfiniteScroll>
    </ListGroup>
  );
};

export default Home;
