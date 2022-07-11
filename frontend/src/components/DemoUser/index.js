import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

import "./DemoUser.css";

const DemoUser = () => {
  const dispatch = useDispatch();

  const loginDemo = (e) => {
    e.preventDefault();
    
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password"})).catch(
      async (res) => {
        await res.json();
      }
    );
  };

  return (
    <button className="demo-user-button" onClick={loginDemo}>
      Demo Login
    </button>
  );
}


export default DemoUser;