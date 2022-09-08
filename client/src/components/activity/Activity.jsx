import React, {useState, useEffect} from 'react'
import './Activity.css';
import Map from '../map/Map';

const Activity = (props) => {
  const activity = props.data;
  // console.log("MAP: " + activity.map);
  // console.log("NAME: " + activity.name);
  const [mapLines, setMapLines] = useState([]);
  const [mapCenter, setMapCenter] = useState([0, 0]);

  var polyline = require('@mapbox/polyline');
  var moment = require('moment');

  let activityDate = moment(activity.start_date_local).local().format("MMM Do, YYYY");
  let activityDistance = (activity.distance*0.00062137).toFixed(2);

  let hours = Math.floor(activity.elapsed_time / 3600).toFixed(0);
  let min = ((activity.elapsed_time / 60) - (hours * 60)).toFixed(0);
  let activityDuration = hours + "h ";
  if (min < 10) {
    activityDuration += "0" + min
  } else {
    activityDuration += min;
  }
  activityDuration += "m";
  //if (hours > 0) {
    // activityDuration =  hours + ":" + min;
  // } else {
  //   activityDuration = min + "m";
  // }


  useEffect(() => {
    const lines = polyline.decode(activity.map.summary_polyline);
      // console.log(lines);
    setMapLines(lines);
    let center = findCenter(lines);
    setMapCenter(center);
  }, [""]);

  const findCenter = (lines) => {
    let maxLat = -1000;
    let minLat = 1000;
    let maxLng = -1000;
    let minLng = 1000;

    for (let i = 0; i < lines.length; i++) {
      maxLat = Math.max(lines[i][0], maxLat);
      minLat = Math.min(lines[i][0], minLat);
      maxLng = Math.max(lines[i][1], maxLng);
      minLng = Math.min(lines[i][1], minLng);
    }

    return [(maxLat + minLat) / 2, (maxLng + minLng) / 2];
  }

  return (
    <div className='activity__container'>
      <div className='activity__title'>
        <h2>{activityDate}</h2>

        <h2>{activityDistance} miles</h2>
        <h2>{activityDuration}</h2>
      </div>
      <Map data={{lines: mapLines, center: mapCenter}} />
    </div>
  );
}

export default Activity