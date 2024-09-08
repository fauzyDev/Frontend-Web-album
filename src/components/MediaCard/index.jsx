import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types"
 
const MediaCard = ({ src, title, description, buttonText, alt, onClick, animation }) => {
  return (
    <Card className="mt-6 w-96 shadow-lg" data-aos={animation}>
      <CardHeader color="blue-gray" className="relative h-56 mt-4">
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          loading="lazy"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

MediaCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    animation: PropTypes.string
  }

export default MediaCard