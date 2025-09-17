const initialState = {
    booking: {},
    validationErrors: [],
}

export const booking = {
    namespaced: true,
    state: initialState,
    actions: {
        SET_BOOKING({ commit }, booking) {
            commit('SET_BOOKING', booking)
        },
        SET_VALIDATION_ERRORS({ commit }, errors) {
            commit('SET_VALIDATION_ERRORS', errors)
        },
    },
    mutations: {
        SET_BOOKING(state, booking) {
            state.booking = booking;
        },
        SET_VALIDATION_ERRORS(state, errors) {
            state.validationErrors = errors;
        },
    },

}