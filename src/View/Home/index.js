import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../store/Actions/TestActions";
import Users from "../../components/Users";
import "../../App.css";
import { useHistory } from "react-router";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = "/signin";
    // history.push('/signin');
  };
  
  return (
    <div className="App">
      <h2>Welcome to the Homepage / Landing page</h2>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
      <Users />
    </div>
  );
}

export default Home;
