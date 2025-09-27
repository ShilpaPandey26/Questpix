import React, { useRef, useState } from "react";
import virtualclassthumb from "../../assets/Home/virtual_class_thumb.png"
import Partners_App_Features_Thumbnail from "../../assets/Home/Partners_App_Features_Thumbnail.png"

export default function TechnologySection() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlayVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="container px-4 py-10 text-center  flex flex-col  items-center">
      {/* Heading */}
      <div>
        <h2 className="text-[38px] font-bold mb-4">
          Experience Our <span className="text-[#2FC18B]">Technology</span>
        </h2>
        <p className="text-xl mb-12">
          Watch demos of our Testing Platform and the QuestPix App & Portal,
          showcasing how technology drives student progress.
        </p>
      </div>

      {/* Virtual Classroom Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 ">
        <div>
          {!playVideo ? (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img
                src={virtualclassthumb}
                alt="Video Thumbnail"
                className="w-full h-auto max-w-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <video
              className="w-full h-auto max-w-[500px] rounded-lg shadow-lg"
              ref={videoRef}
              controls
            >
              <source
                src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/Virtual_Classroom.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
          <h3 className="text-xl font-semibold mt-4">
            QuestPix Virtual Classroom
          </h3>
        </div>

        <div>
          {!playVideo ? (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img
                src={Partners_App_Features_Thumbnail}
                alt="Video Thumbnail"
                className="w-full h-auto max-w-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ) : (
            <video
              className="w-full h-auto max-w-[500px] rounded-lg shadow-lg"
              ref={videoRef}
              controls
            >
              <source
                src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/QuestPix_App_Features.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
          <h3 className="text-xl font-semibold mt-4">QuestPix App & Portal</h3>
        </div>
      </div>
    </div>
  );
}
