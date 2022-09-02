import React from "react";
import styled from "@emotion/styled";
import CssBaseline from '@mui/material/CssBaseline';
import PokemonFilter from "../components/PokemonFilter";
import PokemonInfo from "../components/PokemonInfo";
import PokemonTable from "../components/PokemonTable";
import { Title, TwoColumnLayout, Container, Wrapper} from "../styles/styledEmotion"
import store from "../src/store";

export async function getServerSideProps() {
  const pokemon = await (await fetch("http://localhost:3000/pokemon.json")).json()
  return {
    props: {
      pokemon
    }, 
  }
}

export default function Home({ pokemon }) {
  store.setPokemon(pokemon)

  const [showing, setShowing] = React.useState(false);

  React.useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  if (typeof window !== 'undefined') {
    return (
      <Wrapper>
        <Container>
          <CssBaseline />
          <Title>Pokemon Search</Title>
          <TwoColumnLayout> 
            <div>
              <PokemonFilter />
              <PokemonTable />
            </div>
            <PokemonInfo />
          </TwoColumnLayout>
        </Container>
      </Wrapper>
    )
  } else {
    return <></>
  }
}
