import React, { StrictMode,useContext, useState,useEffect } from "react";
//import Typical from "react-typical";
//import DownloadLink from "react-download-link";
import ReactDOM from "react-dom";
import { AuthContext } from "../context/authcontext.js";
import { Redirect } from "react-router-dom";
//import ProgressiveImage from "react-progressive-image-loading";
//import { LazyLoadImage} from 'react-lazy-load-image-component';
//import 'react-lazy-load-image-component/src/effects/blur.css';
// import download from "./down.png";
import { UserContext } from '../context/UserContext'
import axios from "axios";
import Loading from "./loading"
import "./contest.css";

function Contest() {
// const {REACT_APP_client_id}=process.env;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
const[phots,setphotos]=useState([])
  const [dark, setMode] = useState(false);
  const [result, getresult] = useState([]);
  const { currentUser } = useContext(AuthContext);
  function handleChange(event) {
    setphotos(event.target.value);
  }

//   function handleSubmit(event) {
//     console.log(photos);


    const url =
      `https://codeforces.com/api/contest.list?gym=true?phase=BEFORE`;
    
    axios.get(url).then((response) => {
      console.log(response);
      getresult(response.data.result);
      

    });



      //}
      if(loading==true){
        return <Loading/>
    }
    if(!currentUser?.uid){
      return <Redirect to="/signin"/>
  }
  return (
    <div className="body">
      <div className="App">
        <div className="container">
        {/* <Typical
      className="heading"
      steps={[  "Picture Perfect!",5000]}
      loop={Infinity}
      wrapper="h1"
    /> */}



          <div className="form">
            {/* <input
              className="take"
              onChange={handleChange}
              type="text"
              placeholder="search photos E.g:-Car,bikes....."
              name="photos"
            />
            <button className="btn" onClick={handleSubmit} type="submit">
              Search
            </button> */}

            <div className="card-list">

              {result.map((photos) => (<div className="cards">

                  {/* <LazyLoadImage
                    className="image"
                  preview={photos.blur_hash}
                  src={photos.urls.small}


                  border-radius="2px"
                  padding="2%"
                  flex-wrap="wrap"
                  placeholderSrc={photos.blur_hash}
                   effect="blur"/> */}
                   <h3>Contest Name</h3>
            <p className="des">{photos.name}</p>
            <h3>Phase</h3>
            <p className="des">{photos.phase}</p>
            
              </div>
              ))}

            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
                }
                export default Contest;