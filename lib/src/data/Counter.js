let count = 0;
const Counter = {
	increment() {
		return 'id-' + String(count++);
	},
};

export default Counter;