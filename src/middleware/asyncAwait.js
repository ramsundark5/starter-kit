function isPromise(val) {
    return val && typeof val.then === 'function';
  }
 
export default ({dispatch}) => next => action => isPromise(action) ? action.then(res => dispatch(res)) : next(action)