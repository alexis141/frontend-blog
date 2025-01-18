

// import React, { useState, useEffect } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';

// const MyMap = () => {
//   const [viewport, setViewport] = useState({
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 10,
//   });

//   const [markers, setMarkers] = useState([]);

//   const handleMapClick = (event) => {
//     setMarkers([...markers, { 
//       latitude: event.lngLat[1], 
//       longitude: event.lngLat[0] 
//     }]);
//   };

//   return (
//     <ReactMapGL
//       {...viewport}
//       width="100%"
//       height="500px"
//       mapStyle="mapbox://styles/mapbox/streets-v11"
//       onViewportChange={setViewport}
//       onClick={handleMapClick}
//     >
//       {markers.map((marker, index) => (
//         <Marker key={index} latitude={marker.latitude} longitude={marker.longitude}>
//           <div style={{ color: 'red' }}>●</div>
//         </Marker>
//       ))}
//     </ReactMapGL>
//   );
// };

// export default MyMap;