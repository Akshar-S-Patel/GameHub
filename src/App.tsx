import { Grid, GridItem, Stack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

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
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <Stack hideBelow='lg'>
        {/* Only show this item in xl and 2xl */}
        <GridItem area='aside'>
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
