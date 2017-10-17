//Reducer to choice configuration option
export default (choseConfig = 0, action) => {
    const {type, payload} = action;
    switch(type) {
        case "SELECT_CONFIG":
            return payload
    }

    return choseConfig;
}