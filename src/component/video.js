import React, { useState } from "react";
import "./css/bootstrap.min.css";
import "./css/style.css";

export default function Video() {
  const [videoSrc, setVideoSrc] = useState(null);

  const handlePlayButtonClick = (src) => {
    setVideoSrc(src);
  };

  const handleModalClose = () => {
    setVideoSrc(null);
  };

  return (
    <>
      {/* <!-- Video Modal Start --> */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClose={handleModalClose}
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleModalClose}
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                {videoSrc && (
                  <iframe
                    className="embed-responsive-item"
                    src={videoSrc}
                    id="video"
                    allowFullScreen
                    title="uniqueTitle"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}

      {/* Button to trigger the modal */}
      <button
        type="button"
        className="btn-play"
        data-src="https://www.youtube.com/embed/your-video-id"
        onClick={() =>
          handlePlayButtonClick("https://www.youtube.com/embed/your-video-id")
        }
      >
        Play Video
      </button>
    </>
  );
}
