import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.shape({
		english: PropTypes.string.isRequired,
		japanece: PropTypes.string.isRequired,
		chinese: PropTypes.string.isRequired,
		french: PropTypes.string.isRequired,
	}),
	type: PropTypes.arrayOf(PropTypes.string.isRequired),
	base: PropTypes.shape({
		HP: PropTypes.number.isRequired,
		Attack: PropTypes.number.isRequired,
		Defence: PropTypes.number.isRequired,
		"Sp.Attack": PropTypes.number.isRequired,
		"Sp.Defence": PropTypes.number.isRequired,
		Speed: PropTypes.number.isRequired,
	}),
	onSelect: PropTypes.func.isRequired,
});

export default PokemonType;