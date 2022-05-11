import { GET_FORO, GET_TEMAS } from "../types"

const h = function (state, action) {
	const {payload, type} = action;

	switch(type) {
		case GET_FORO:
			return {
				...state,
				temas: payload
			}
		case GET_TEMAS:
			return{
				...state,
				selectedTema: payload
			}
			default:
				return state;
		}
};

export default h;
	
