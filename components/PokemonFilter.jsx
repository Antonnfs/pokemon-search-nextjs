import styled from "@emotion/styled"; 
import { observer } from "mobx-react";
import store from "../src/store";
import { Input} from "../styles/styledEmotion"


const PokemonFilter = () => (
	<Input
		type="text"
		value={store.filter}
		onChange={(evt) => store.setFilter(evt.target.value)}
	/>
)

export default	observer(PokemonFilter);