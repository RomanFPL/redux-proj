const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
        case "UPT":
            return state = 0
        default:
            return state;
            }
        }
              
export default reducer;