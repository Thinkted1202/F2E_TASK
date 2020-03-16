export default {
	getActiveList: (state) => {
		return state.orders.filter(orders=> orders.status.code == 1 || orders.status.code == 2);
	},
	getCompleteList:(state) => {
		return state.orders.filter(orders=> orders.status.code ==3 || orders.status.code == 4);
	},
	getSortByDate:(state, getters) => func => {
		return getters[func].sort((a, b)=>{
			return new Date(a.date) - new Date(b.date);
		})
	}
}
