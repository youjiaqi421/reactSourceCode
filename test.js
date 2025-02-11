// 深拷贝

function deep(obj, hasWeakMap = new WeakMap()) {
	// 首先判断是否为对象
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}
	// 处理循环引用
	if (hasWeakMap.has(obj)) return hasWeakMap.get(obj)

	// 创建一个新的对象,继承原型链
	const cloneObj = new obj.constructor()

	// 将当前对象加入 WeakMap,防止循环引用
	hasWeakMap.set(obj, cloneObj)

	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			cloneObj[key] = deep(obj[key], hasWeakMap)
		}
	}

	return cloneObj
}

const classOne = {
	name: 'you',
	age: 18,
	hobby: ['game', 'music'],
	friend: {
		name: 'zhu',
		age: 20,
	},
}

const c1 = deep(classOne)

c1.friend.name = 'zhuxiaobao'
console.log(c1, classOne)
