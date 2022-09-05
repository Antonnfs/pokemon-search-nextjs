import styled from "@emotion/styled";
import CssBaseline from '@mui/material/CssBaseline';
import { withRouter } from 'next/router'
import {Container, Wrapper} from "../../styles/styledEmotion"
import store from "../../src/store";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export async function getStaticPaths() {
	const allPokemon = require('../../src/pokemon.json')
	return {
		paths: allPokemon.map(p => ({
			params: {
				id: p.id.toString()
			}
		})),
		fallback: false, 
	}
}

export async function getStaticProps(context) {
	const allPokemon = require('../../src/pokemon.json')
	const pokemon = allPokemon.find(({id}) => id.toString() === context .params.id)
		return {
			props: {
				pokemon
			}, 
		}
}

export default withRouter(( { pokemon } ) => {
	return (
		<Wrapper> 
			<Container>
				<CssBaseline />
				{pokemon && (
					<div>
						<h1>{pokemon.name.english}</h1>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Attribute</TableCell>
									<TableCell>Value</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{Object.keys(pokemon.base).map(k => (
									<TableRow key={k}>
										<TableCell>{k}</TableCell>
										<TableCell>{pokemon.base[k]}</TableCell>
								</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				)}
			</Container>
		</Wrapper>
	)
})