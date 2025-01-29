import { Box, Grid, GridItem, HStack, Stack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

// breakpoints
// "2xl": "96em" --> 4K
// xl: "80em" --> Laptop
// lg: "62em" --> Tablet
// md: "48em" --> Medium Mobile
// sm: "30em" --> Small Mobile
// base: "0em" --> 0px

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <Stack hideBelow='lg'>
          {/* Only show this item in xl and 2xl */}
          <GridItem area='aside' paddingX={5}>
            <GenreList />
          </GridItem>
        </Stack>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
