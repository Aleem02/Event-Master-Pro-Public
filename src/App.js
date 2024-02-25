import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
// import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Profilecard from "./components/Profilecard";
import { useEffect, useState } from "react";
// import CreateEvent from "./components/CreateEvent";
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
import './components/mediaquery.css'
// import RelatedEvents from "./components/RelatedEvents";

function App() {
  
  //const navigate = useNavigate();

  const [profileActive, setProfileActive] = useState(false);

  const dbCollectionRef = collection(db, "Events");

  

  //Category functinality useState
  const [activeCategory, setActiveCategory] = useState("All");

  //imageURL
  // const [imgUrl, setImgurl] = useState(null);

  //reading database
  const [dbData, setDbData] = useState([]);

  //Loading animation useState
  const [isLoading, setIsLoading] = useState(true);


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
          //console.log(dbData);
        });
      } catch (err) {
        console.log(err);
      }
    };
    readDataBase();
  }, [activeCategory]);

  

  return (
    <div className="App">
      <ToastContainer style={{zIndex : 99}}/>
      <Navbar
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
        
        <Route path="/:id" element={<EventDetail />} />
      </Routes>
    </div>
  );
}

export default App;
