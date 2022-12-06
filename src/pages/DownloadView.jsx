import React from 'react';
import MyGrid from '../components/MyGrid';
import Layout from '../components/layout';
import { Flex } from '@chakra-ui/react';

function DownloadView() {
  return (
    <Layout type="wide" alignItems="flex-start">
      <Flex
        flexGrow={1}
        direction="column"
        justifyContent="center"
        mx={[3, 6]}
        my={[8, 3]}
      >
        <MyGrid />
      </Flex>
    </Layout>
  );
}

export default DownloadView;
