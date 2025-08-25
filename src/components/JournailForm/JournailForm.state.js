export const INITIAL_STATE = {
	isValid: {
		post: true,
		title: true,
		date: true,
		tags: true,
	},
	values: {
		post: '',
		title: '',
		date: '',
		tags: []
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch(action.type) {
	case 'SET_VALUE':
		return {... state, values: {...state.values, ...action.payload}};
	case 'CLEAR':
		return {... state, values: INITIAL_STATE.values, isFormReadyToSubmit: false};
	case 'RESET_VALIDITY':
		return {... state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const titleValidity = String(state.values.title)?.trim().length;
		const postValidity = String(state.values.post)?.trim().length;
		const tagValidity = state.values.tags.length;
		const dateValidity = state.values.date;
		return {
			...state,
			isValid: {
				post: postValidity,
				title: titleValidity,
				tags: tagValidity,
				date: dateValidity
			},
			isFormReadyToSubmit: titleValidity && postValidity && dateValidity && tagValidity
		};
	}
	}
}