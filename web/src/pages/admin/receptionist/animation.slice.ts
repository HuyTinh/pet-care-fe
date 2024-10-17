const inittalState = {
    isAnimation: false,
}

export const animationReducer = (state = inittalState, action) => {
    switch (action.type) {
        case 'START_ANIMATION':
            return { ...state, isAnimating: true };
        case 'STOP_ANIMATION':
            return { ...state, isAnimating: false };
        default:
            return state;
    }
}

export const startAnimation = () => {
    type: 'START_ANIMATION'
}

export const endAnimation = () => {
    type: 'END_ANIMATION'
}