import { useQuery } from "@tanstack/react-query";
import { getData } from "../../services/api";
import MediaCard from "../MediaCard";
import VideoCard from "../VideoCard";

const fetch = async () => {
    const response = await getData('/api/data')
    console.log(response)
    return response[0]
  }

const Gallery = () => {

  const { data } = useQuery({ queryKey: ['data'], queryFn: fetch, gcTime: 1, refetchInterval: 20000 });

  // filter berdasarkan url image
  const images = data?.data?.filter((item) => /\.(jpg|jpeg|png|gif)$/i.test(item.url)) || []

  // filter berdasarkan url video
  const video = data?.data?.filter((item) => /\.(mp4|avi|mov|wmv)$/i.test(item.url)) || []

  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <MediaCard
          api={{ data: images }}
          buttonText="Download"
          alt="card image"
          animation="zoom-in"
        />

        <VideoCard
          api={{ data: video}}
          buttonText="Download"
          alt="video"
          animation="zoom-in"
        />
      </div>
    </div>
  );
};

export default Gallery;
