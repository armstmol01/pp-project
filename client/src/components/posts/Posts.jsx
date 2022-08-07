import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Posts.css'
import Activity from '../activity/Activity'
import Nav from '../nav/Nav'
import ImgDisplay from '../img-display/ImgDisplay'
import Footer from '../footer/Footer'
import{MdPets} from 'react-icons/md'

const Posts = () => { // functional react component, not class based
  // useEffect hook is availabe for functional components
  // they are bound to state change events
  // it's exected at lest once on component load

  // const epoch = Math. round (new Date ().getTime () / 1000)
  // import {FaDog, FaCat, FaFish, FaBone} from 'react-icons/fa'

  const location = useLocation();
  const userData = location.state.resp;
  const [errorMsg, setErrorMsg] = useState("");
  const [activities, setActivities] = useState(["hey"]);
  const [loaded, setLoaded] = useState(false);

  const axios = require('axios');
  const base_url = 'https://www.strava.com';

  useEffect(() => {
    setLoaded(false);
    let url = "/api/strava-creds";
    fetch(url)
       .then(checkStatus)
       .then((res) => (res.json()))
       .then(handleResponse)
       .catch(handleError);
  }, [""]);

  const makeTitles = (names) => {
    console.log(names);
    // capitalize first letter of name
    let str = names[0][0].toUpperCase() + names[0].substring(1);
    for (let i = 1; i < names.length; i++) {
      str += " + " + names[i][0].toUpperCase() + names[i].substring(1);
    }
    return str;
  }

  const makeImgKey = (names, pets) => {
    // format name[0]-....-name[len-1]-pet[0]-...-pet[i-1]
    let path = "";
    for (let i = 0; i < names.length; i++) {
      path += names[i] + "-";
    }
    path += pets[0];
    for (let i = 1; i < pets.length; i++) {
      path += "-" + pets[i];
    }
    return path;
  }

  const handleResponse = (res) => {
     console.log("handleResp: ");
    // console.log(res);
    // console.log(res.expires_at <= Math.floor(Date.now() / 1000))
    let curr_time = Math.floor(Date.now() / 1000);
    if (res.expires_at <= curr_time) { // more than 6 hrs ago (30 sec buffer)
      // query strava api for new access token
      let url = base_url + '/oauth/token';
      axios.post(url, {},  // weirdly need {} there for post reqs, not for get
        {
          params: {
            'client_id': res.client_id,
            'client_secret': res.client_secret,
            'grant_type': 'refresh_token',
            'refresh_token': res.refresh_token
          }
        }
      )
      .then(checkStatus)
      .then(updateStravaCredentials)
      .then(loadActivities)
      .catch(handleError);
    } else {
      loadActivities(res);
    }
  }

  const updateStravaCredentials = (res) => {
    let data = res.data;

    axios.post('/api/update-strava-creds', {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: data.expires_at
    })
      .then(checkStatus)
      .catch(handleError);

    return data;
  }

  const loadActivities = (data) => {
    let url = base_url + '/api/v3/athlete/activities';
    // set date
    // let date = new Date();
    // date.setHours(0, 0, 0, 0);
    // let today = Math.floor(Date.parse(date) / 1000);
    // let yesterday = Math.floor(Date.parse(date) /1000) - 86400;

    // set authorization
    let autho = 'Bearer ' + data.access_token; // 'Bearer {}'.format(resp.access_token)
    axios.get(url,
      {
        params: {
          'after': 1658386800
        },
        headers: {
          'Authorization' : autho
        }
      }).then(checkStatus)
        .then(function (response) {
          filterActivities(response.data);
        })
        .catch(handleError);
  }

  // filter activities to find last matching activity
  const filterActivities = (data) => {
    console.log("filter");
    console.log(data);
    let match;
    let items = {};
    for (let k = Object.keys(data).length - 1; k >= 0; k--) {
      let activity = data[k].name.toLowerCase();
      for (let i = 0; i < userData.pets.length; i++) {
        match = activity.includes(userData.pets[i]);
      }
      for (let j = 0; j < userData.name.length; j++) {
        match = activity.includes(userData.name[j]);
      }
      if (match) {
        items = data[k];
        break;
      }
    }

    setActivities(items);
    setLoaded(true);
  }

  const checkStatus = async (res) => {
    if (res.status !== 200) {
      let message = "Failed to load activities";
      throw new Error(message);
    }
    return res;
  }

  const handleError = (error) => {
    setErrorMsg(error.message);
  }

  // {errorMsg === '' ?
  //     <div className="posts__container">
  //       <div className="title__container">
  //         {/* <h2>{makeTitles(userData.name)}'s pets</h2> */}
  //         <h1>{makeTitles(userData.pets)}</h1>
  //       </div>
  //       <div className="content__container">
  //         {loaded===true?<Activity data={activities}/>:<p>Loading...</p>}
  //         {loaded===true?<ImgDisplay data={makeImgKey(userData.name, userData.pets)}/>:<p>Loading...</p>}
  //       </div>
  //       <Footer />
  //       <MdPets className='pet__icon'/>
  //     </div>
  //     : {errorMsg}}

  return (
    <div className='posts'>
      <Nav data={{active: 'posts', message: makeTitles(userData.name) + '\'s pets'}}/>
      <div className="posts__container">
        <div className="title__container">
          {/* <h2>{makeTitles(userData.name)}'s pets</h2> */}
          <h1>{makeTitles(userData.pets)}</h1>
        </div>
        <div className="content__container">
          {loaded===true?<Activity data={activities}/>:<p>Loading...</p>}
          {loaded===true?<ImgDisplay data={makeImgKey(userData.name, userData.pets)}/>:<p>Loading...</p>}
        </div>
        {/* {loaded===true?<Footer />:''} */}
        <MdPets className='pet__icon'/>
      </div>
    </div>
  )
}

export default Posts