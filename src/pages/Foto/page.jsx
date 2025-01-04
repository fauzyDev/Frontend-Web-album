import React from "react";
import MediaCard from "../../components/MediaCard";

const Foto = () => {
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
        ${isVisible ? "opacity-100" : "opacity-0"}`}>
        Halaman Foto
      </h1>
      <MediaCard api="data" buttonText="Download" alt="card image" animation="zoom-in"/>
    </>
  );
};

export default Foto;
