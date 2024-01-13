import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profilecard from "./components/Profilecard";
import { useEffect, useState } from "react";
import CreateEvent from "./components/CreateEvent";
import { storage } from "./Config/firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

function App() {
  const [profileActive, setProfileActive] = useState(false);

  //create event useStates
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [registerLink, setRegisterLink] = useState("");
  const [category, setCategory] = useState("");
  const [mode, setMode] = useState("");
  const [date, setDate] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  //imageURL
  const [imgUrl, setImgurl] = useState(null);

  //console.log(imageUpload)

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const imageFolderRef = ref(storage, `Event-Images/${imageUpload.name}`);
    try {
      await uploadBytes(imageFolderRef, imageUpload).then(() => {
        listAll(ref(storage, "Event-Images")).then((imgs) => {
          console.log(imgs);
          imgs.items.forEach((item) => {
            console.log(item.name);
            if (item.name == imageUpload?.name) {
              getDownloadURL(item).then((url)=>{
                setImgurl(url);
                
              })
            } else {
              return null;
            }
          });
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(imgUrl);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar
        profileActive={profileActive}
        setProfileActive={setProfileActive}
      />
      <Profilecard
        profileActive={profileActive}
        setProfileActive={setProfileActive}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/create-event"
          element={
            <CreateEvent
              setTitle={setTitle}
              setDescription={setDescription}
              setLocation={setLocation}
              setRegisterLink={setRegisterLink}
              setCategory={setCategory}
              setMode={setMode}
              setDate={setDate}
              imageUpload={imageUpload}
              setImageUpload={setImageUpload}
              handleFileUpload={handleFileUpload}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
