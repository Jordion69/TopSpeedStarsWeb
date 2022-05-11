import { useReducer } from "react"
import React from 'react'
import ForoReducer from './ForoReducer'
import ForoContext from "./ForoContext"
import axios from "axios"

export default function ForoState(props) {
	const initialState = {
		temas: [],
		selectedTema: null
	}

	const [state, dispatch] = useReducer(ForoReducer, initialState )
	
	const getForo = async () => {
		const res = await axios.get('https://daw-m07-uf4-pr01.herokuapp.com/api/v1/hotels')
		dispatch({
			type: 'GET_FORO',
			payload: res.data.body
		})
	}
	
	const getTema = async (id) => {
		const res = await axios.get('https://daw-m07-uf4-pr01.herokuapp.com/api/v1/hotels/' + id)
		dispatch({
			type: 'GET_TEMAS',
			payload: res.data.body
		})
		
	}
  return (
	<ForoContext.Provider value={{
		temas:state.temas,
		selectedTema: state.selectedTema,
		getForo,
		getTema
	}}>
	  {props.children}
	</ForoContext.Provider>
  )
}
