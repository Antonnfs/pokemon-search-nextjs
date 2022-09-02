import Button from "@mui/material/Button";
import Link from "next/link";

const PokemonRow = ( { pokemon, onSelect } ) => (
	<>
		<tr> 
			<td>
				<Link href={`/pokemon/${pokemon.id}`}>
					<a>{pokemon.name.english}</a>
				</Link>
				</td>
			<td>{pokemon.type.join(",  ")}</td>
			<td>
				<Button variant="outlined" onClick={() => onSelect(pokemon)}
				>More Informaiton </Button>
			</td>
		</tr>
	</>
);

export default PokemonRow;