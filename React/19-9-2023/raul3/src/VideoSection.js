// VideoSection.js
import React from 'react';

function VideoSection() {
  return (
    <div className="video-section">
      <video width="900px" height="900px" autoPlay loop controls>
      <source src="file:///home/arteM02-088/Downloads/Dropbox_Homepage(2).mp4" type="video/mp4" />

      </video>
    </div>
  );
}

export default VideoSection;
