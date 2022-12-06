import React from 'react';
import Layout from '../components/layout';
import { Container, Text, useColorMode } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import files from '../configs/file.json';

const PreviewVPN = () => {
  let { id } = useParams();
  const data = files.filter(file => file.id === parseInt(id, 10));
  const { colorMode } = useColorMode();
console.log(colorMode);
  return (
    <Layout type="wide" alignItems="flex-start">
      <Container maxW="container.sm" color="#262626">
        <Text color={colorMode === 'light' ? 'black' : 'white'} fontSize="3xl">{data[0].description}</Text>
      </Container>
    </Layout>
  );
};

export default PreviewVPN;
