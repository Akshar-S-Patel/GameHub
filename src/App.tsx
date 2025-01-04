import { Grid, GridItem, Stack } from '@chakra-ui/react';
import NavBar from './components/NavBar';

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
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Stack>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
