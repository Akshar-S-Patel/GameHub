import { Grid, GridItem, Stack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Stack>
      <GridItem area='main'>
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
