import MediaCard from "../MediaCard";
import VideoCard from "../VideoCard";

// Komponen utama untuk menampilkan beberapa card
const Gallery = () => {
  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <MediaCard
          src="https://i.pinimg.com/564x/99/77/55/99775533f099797cb04e817735093874.jpg"
          title="Foto Peringatan 17 Agustus"
          description="Foto perayaan 17 Agustus yang meriah di lapangan."
          buttonText="Download"
          alt="card image"
          animation="zoom-in"
        />

        <VideoCard
          src="https://lzaziflsqehzrtbnyqxl.supabase.co/storage/v1/object/public/video/raiden-shogun-wisteria-genshin-impact-moewalls-com.mp4"
          title="Video Lomba Balap Karung"
          description="Video dokumentasi lomba balap karung saat perayaan 17 Agustus."
          buttonText="Lihat"
          alt="video"
          animation="zoom-in"
        />
      </div>
    </div>
  );
};

export default Gallery
