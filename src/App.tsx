import { Box, Grid, GridItem, HStack, Stack } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

const App = () => {
  return (
    // breakpoints
    //   "2xl": "96em" --> 4K
    //   xl: "80em" --> Laptop
    //   lg: "62em" --> Tablet
    //   md: "48em" --> Medium Mobile
    //   sm: "30em" --> Small Mobile
    //   base: "0em" --> 0px
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
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
  );
};

export default App;
