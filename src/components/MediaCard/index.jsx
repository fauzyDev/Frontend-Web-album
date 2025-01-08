import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import PropTypes from "prop-types"
 
const MediaCard = ({ api = { data: []}, buttonText = "Download", alt = "Image", onClick = () => {}, animation = "" }) => {
  return (
    <>
      {api?.data?.map((data, index) => {
        return (
      <Card key={index} className="mt-6 w-96 shadow-lg" data-aos={animation}>
        <CardHeader color="blue-gray" className="relative h-56 mt-4">
          <img
            src={data.url}
            alt={alt}
            onClick={onClick}
            loading="lazy"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Title: {data.judul}
          </Typography>
          <Typography>
           Deskripsi: {data.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button color="blue">{buttonText}</Button>
        </CardFooter>
      </Card>
        )
      })}
    </>
  );
};

MediaCard.propTypes = {
  api: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        judul: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }),
    buttonText: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    animation: PropTypes.string
  };

export default MediaCard