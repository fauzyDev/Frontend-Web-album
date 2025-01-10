import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../services/api";
import VideoCard from "../../components/VideoCard";

const fetch = async () => {
  const response = await getData('/api/filter/video')
  return response[0]
}

const Video = () => {
  const [isVisible, setIsVisible] = React.useState(false);

   const { data } = useQuery({ queryKey: ['data'], queryFn: fetch, gcTime: 1000, refetchInterval: 30000 });
   const video = data?.data?.filter((item) => /\.(mp4|avi|mov|wmv)$/i.test(item.url)) || []

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className={`text-2xl font-semibold text-center p-4 mt-2 underline transition-opacity duration-1000
          ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Halaman Foto
        </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <VideoCard api={{ data: video }} buttonText="Download" alt="Video" animation="zoom-in" />
      </div>
    </div>
  );
};

export default Video;
