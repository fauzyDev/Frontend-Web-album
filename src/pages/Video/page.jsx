import React from "react";
import VideoCard from "../../components/VideoCard";

const Video = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1
        className={`text-2xl font-semibold text-center p-4 mt-2 underline transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        Halaman Video
      </h1>
      <VideoCard 
        src=""
        title="Video Lomba Balap Karung"
        description=""
        buttonText="Download"
        alt="video"
        animation="zoom-in"/>
    </>
  );
};

export default Video;
