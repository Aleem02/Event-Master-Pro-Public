import { Route, Routes, useNavigate } from "react-router-dom";
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
import { storage, db, auth } from "./Config/firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  onSnapshot,
  serverTimestamp,
  orderBy,
  where,
} from "firebase/firestore";
import EventDetail from "./components/EventDetail";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();

  const [profileActive, setProfileActive] = useState(false);

  const dbCollectionRef = collection(db, "Events");

  //create event useStates
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [registerLink, setRegisterLink] = useState("");
  const [category, setCategory] = useState("");
  const [mode, setMode] = useState("");
  const [date, setDate] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  //Category functinality useState
  const [activeCategory, setActiveCategory] = useState("All");

  //imageURL
  const [imgUrl, setImgurl] = useState(null);

  //reading database
  const [dbData, setDbData] = useState([]);

  //Loading animation useState
  const [isLoading, setIsLoading] = useState(true);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const imageFolderRef = ref(storage, `Event-Images/${imageUpload?.name}`);
    try {
      await uploadBytes(imageFolderRef, imageUpload).then(() => {
        listAll(ref(storage, "Event-Images")).then((imgs) => {
          console.log(imgs);
          imgs.items.forEach((item) => {
            //console.log(item.name);
            if (item.name == imageUpload?.name) {
              getDownloadURL(item).then((url) => {
                setImgurl(url);
                console.log(url);
                alert("upload succesful");
              });
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

  //console.log(imgUrl);

  useEffect(() => {
    const readDataBase = async () => {
      const q =
        activeCategory == "All"
          ? query(dbCollectionRef, orderBy("createdAt", "desc"))
          : query(dbCollectionRef, where("category", "==", activeCategory));
      try {
        // const data = await getDocs(dbCollectionRef);
        // const filteredData = data.docs.map((doc) => ({
        //   ...doc.data(),
        //   id: doc.id,
        // }));
        //console.log(filteredData);

        onSnapshot(q, (snapshot) => {
          const filteredData = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setDbData(filteredData);
          setIsLoading(false);
          console.log(dbData);
        });
      } catch (err) {
        console.log(err);
      }
    };
    readDataBase();
  }, [activeCategory]);

  //create event submit

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!title || !category || !description || !mode || !date || !registerLink) {
      toast.error("Please Provide All Information");
    } else {
      try {
        await addDoc(dbCollectionRef, {
          currentUser: auth.currentUser.email,
          title: title,
          category: category,
          description: description,
          imgUrl: imgUrl,
          mode: mode,
          location: location,
          date: date,
          registerLink: registerLink,
          createdAt: serverTimestamp(),
        }).then(() => {
          navigate("/");
          toast.success("Event Created Successfully");
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  //console.log(dbData);

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
        <Route
          path="/"
          element={
            <Home
              dbData={dbData}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              isLoading={isLoading}
            />
          }
        />
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
              handleFormSubmit={handleFormSubmit}
            />
          }
        />
        <Route path="/:id" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;
