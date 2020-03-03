// import { createStore, applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import rootReducer from '../reducers'

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose

// const middlewares = [
//   thunkMiddleware
// ]

// if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
//   middlewares.push(require('redux-logger').createLogger())
// }

// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares),
//   // other store enhancers if any
// )

// export default function configStore () {
//   const store = createStore(rootReducer, enhancer)
//   return store
// }
import { createStore } from 'redux'  // 引入createStore方法
import reducer from "./reducer"

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) // 创建数据存储仓库

export default store   //暴露出去   
