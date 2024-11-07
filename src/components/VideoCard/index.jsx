import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

const VideoCard = ({ src, title, description, buttonText, alt, onClick, animation }) => {
  return (
    <Card className="mt-6 w-96 shadow-lg" data-aos={animation}>
      <CardHeader color="blue-gray" className="relative h-56 mt-4 overflow-hidden">
        <video
          src={src}
          alt={alt}
          onClick={onClick}
          className="object-cover w-full h-full rounded-lg"
          playsInline
          controls
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         Title: {title}
        </Typography>
        <Typography>
        Deskripsi: {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="blue">{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

VideoCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    animation: PropTypes.string.isRequired
  };

export default VideoCard;
