import useStore from './store'

function App() {
	const {count, increase, decrease} = useStore()
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	)
}

export default App
