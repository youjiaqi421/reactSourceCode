import {create} from 'zustand'

// import React from 'react'

const useStore = create(set => ({
	count: 0,
	increase: () => set(state => ({count: state.count + 1})),
	decrease: () => set(state => ({count: state.count - 1})),
}))

export default useStore

// function create1(createState) {
// 	// 创建一个仓库

// 	const createStore = createState => {
// 		let state // 存储当前的状态
// 		const listeners = new Set() // 用于保存所有的监听器函数

// 		// setState 方法用于更新状态，并触发所有监听器
// 		const setState = (partial, replace) => {
// 			// 如果 partial 是一个函数，则通过函数计算出新的状态
// 			const nextState = typeof partial === 'function' ? partial(state) : partial

// 			// 如果状态发生变化，则更新状态并通知所有监听器
// 			if (!Object.is(nextState, state)) {
// 				const previousState = state // 保存之前的状态
// 				state =
// 					replace || typeof nextState !== 'object' || nextState === null
// 						? nextState // 如果需要替换状态或新状态不是对象，则直接替换
// 						: Object.assign({}, state, nextState) // 合并状态
// 				// 执行所有监听器
// 				listeners.forEach(listener => listener(state, previousState))
// 			}
// 		}

// 		// 获取当前状态
// 		const getState = () => state

// 		// 获取初始状态
// 		const getInitialState = () => initialState

// 		// 订阅监听器，返回一个取消订阅的函数
// 		const subscribe = listener => {
// 			console.log(listener)
// 			listeners.add(listener) // 将监听器添加到监听器集合中
// 			// 返回一个取消订阅的函数
// 			return () => listeners.delete(listener)
// 		}

// 		// API 对象，包含 setState、getState、getInitialState 和 subscribe 方法
// 		const api = {setState, getState, getInitialState, subscribe}

// 		// 创建初始状态
// 		const initialState = (state = createState(setState, getState, api))

// 		// 返回 API 对象
// 		return api
// 	}

// 	// 使用 createStore 创建一个 API 对象
// 	const api = createStore(createState)

// 	// useStore 钩子，提供给 React 组件使用，支持选择器模式
// 	const useStore = (api, selector = state => state) => {
// 		// 使用 React 的 useSyncExternalStore 钩子，来订阅 store 和获取状态
// 		const slice = React.useSyncExternalStore(
// 			api.subscribe, // 订阅函数，通知状态更新
// 			() => selector(api.getState()), // 获取当前状态并通过选择器提取所需部分
// 			() => selector(api.getInitialState()) // 获取初始状态并通过选择器提取所需部分
// 		)

// 		console.log(slice, 'slice') // 打印当前获取到的 slice
// 		React.useDebugValue(slice) // 在 React DevTools 中显示调试信息
// 		return slice // 返回 slice，通常是状态的一部分
// 	}

// 	// useBoundStore 钩子，提供给 React 组件使用，使用 store 和 selector 获取状态
// 	const useBoundStore = selector => useStore(api, selector)

// 	// 将 api 方法和 useBoundStore 绑定到一起，以便外部可以访问
// 	Object.assign(useBoundStore, api)

// 	// 返回 useBoundStore，供外部组件使用
// 	return useBoundStore
// }
