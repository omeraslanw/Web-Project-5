import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setUsers(response.data);
          setLoading(true);
        });
    };
    fetchUsers();
  }, []);
  console.log(users);
  console.log(loading);
  return (
    <>
      <div>
        {loading ? (
          users.map((user) => (
            <div key={user.id}>
              <ul>
                <li key={user.id}>
                  {user.username}:{user.name}
                </li>
              </ul>
            </div>
          ))
        ) : (
          <Loading />
        )}
        ;
      </div>
    </>
  );
}

export default App;
