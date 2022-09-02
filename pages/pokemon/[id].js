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


export default withRouter(( {router} ) => {
	const pokemon = store.pokemon.find(({ id }) => id.toString() === router.query.id)
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