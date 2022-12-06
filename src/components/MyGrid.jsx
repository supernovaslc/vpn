import { Grid, GridItem } from '@chakra-ui/react';
import Details from './Details';
import files from '../configs/file.json';

const MyGrid = () => {
  return (
    <>
      <Grid
        templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
        h="100%"
        gap="20px"
        overflow="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'primary',
            borderRadius: '24px',
          },
        }}
      >
        {files.map(file => (
          <GridItem
            key={file.id}
            bg="primary"
            borderRadius="10"
          >
            <Details
              data={file}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default MyGrid;
