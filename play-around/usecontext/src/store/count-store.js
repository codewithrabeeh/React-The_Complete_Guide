export const initialState = {
    a: 0,
    b: 0,
    c: 0
  };

 export const reducer = (state, action) => {
    switch (action) {
      case 'incrementA':
        return { ...state, a: state.a + 1 }
      case 'decrementA':
        return { ...state, a: state.a - 1 }
      case 'incrementB':
        return { ...state, b: state.b + 1 }
      case 'decrementB':
        return { ...state, b: state.b - 1 }
      case 'incrementC':
        return { ...state, c: state.c + 1 }
      case 'decrementC':
        return { ...state, c: state.c - 1 }
      case 'reset':
        return initialState
      default:
        return state
    }
  }
  