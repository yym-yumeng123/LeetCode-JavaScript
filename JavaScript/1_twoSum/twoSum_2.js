/**
 * 思路: 
 * 1. 创建一个 map { key: index }
 * 2. for 循环 nums 数组
 * 3. 用 target - nums[i]
 *      以计算那个数能跟当前的数组相加得到 target
 * 4. 检查 map 里有没有这个数, 有: 返回结果; 没有则把 num[i] 当做key, i当做value放入 map中 // 方便 map.has 搜索值


nums: [2,7,11,15] target: 9
1. map = {}
2. 9 - 2 = 7, map 里面没有 ==> { 2: 0 }
3. 9 - 7 = 2, map 里面有 2, 返回结果


 */

 const twoSum = function(nums, target) {
 	const map = new Map()
 	for (let i = 0; i < nums.length; i++) {
 		const complement = target - nums[i]
 		if(map.has(complement)) {
 			return [map.get(complement), i]
 		} else {
 			map.set(nums[i], i)
 		}
 	}

 	return []
 }