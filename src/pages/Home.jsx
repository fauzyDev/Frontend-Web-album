import React from "react";
import Gallery from "../components/Gallery";

const Home = () => {
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
        className={`text-2xl font-semibold text-center p-4 mt-2 underline transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Halaman Beranda
      </h1>
      <Gallery/>
    </>
  );
};

export default Home;
