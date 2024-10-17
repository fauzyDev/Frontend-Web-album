import React from "react";
import { getData } from "../../services/api";
import MediaCard from "../MediaCard";
// import VideoCard from "../VideoCard";

const Gallery = () => {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
      const fetch = async () => {
        const response = await getData('/api/data')
        setData(response)
      }

      fetch()
    }, [])

  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <MediaCard
          api={data}
          buttonText="Download"
          alt="card image"
          animation="zoom-in"
        />

        {/* <VideoCard
          src="https://lzaziflsqehzrtbnyqxl.supabase.co/storage/v1/object/public/video/raiden-shogun-wisteria-genshin-impact-moewalls-com.mp4"
          title="Video Lomba Balap Karung"
          description="Video dokumentasi lomba balap karung saat perayaan 17 Agustus."
          buttonText="Lihat"
          alt="video"
          animation="zoom-in"
        /> */}
      </div>
    </div>
  );
};

export default Gallery
