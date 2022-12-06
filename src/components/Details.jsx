import {
  Image,
  Divider,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {isMobile} from 'react-device-detect';

const Details = ({ data }) => {
  const { id, name, imageSrc, fileMobile, fileDesktop } = data;

  const navigate = useNavigate();

  const onButtonClick = () => {
    fetch(isMobile ? fileMobile : fileDesktop).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = isMobile ? fileMobile : fileDesktop;
        alink.click();
      });
    });
  };

  return (
    <Card borderWidth="1px" align="center">
      <CardBody align="center">
        <Image w="100%" h="200px" src={imageSrc} alt={name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '135px',
          },
        }}
      >
        <Button
          onClick={onButtonClick}
          variant="solid"
          w="48%"
          colorScheme="blue"
        >
          现在下载
        </Button>
        <Button
          onClick={() => navigate(`/preview/${id}`)}
          variant="solid"
          w="48%"
          colorScheme="red"
        >
          预习
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Details;
