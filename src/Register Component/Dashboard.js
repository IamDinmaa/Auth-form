import { useAuth } from "../auth-context component/auth-context";
import Register from "./Register";

const Dashboard = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>Welcome to your dashboard, {String(user?.email).split("@")[0]}</h1>
    </div>
  );
};

export default Dashboard;
