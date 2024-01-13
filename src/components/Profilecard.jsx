import { auth } from "../Config/firebase-config";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profilecard = ({ profileActive, setProfileActive }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth).then(() => {
        toast.success("Log Out Succesfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.removeItem("user");
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateEventNavigation = () => {
    navigate("/create-event");
    setProfileActive(false);
  };

  return (
    <main className={profileActive ? "profilecard-active" : "profilecard"}>
      <p>
        <i className="fa-solid fa-user"></i>Profile
      </p>
      <p onClick={handleCreateEventNavigation}>
        <i className="fa-solid fa-plus"></i>Create New Event
      </p>
      <p onClick={handleSignOut}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>Logout
      </p>
    </main>
  );
};

export default Profilecard;
