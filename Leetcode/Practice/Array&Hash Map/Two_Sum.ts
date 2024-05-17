function twoSum(nums: number[], target: number): number[] {
	// Store the hash map
	const numMap = new Map<number, number>();

	// Loop the array
	for (let i = 0; i < nums.length; i++) {
		// Calculate target to each value in the array
		const complement = target - nums[i];

		// Check if the complement exists in the map
		if (numMap.has(complement)) {
			// If found, return the index
			const index = numMap.get(complement);
			// Ensure the answer is not undefined
			if (index !== undefined) {
				return [index, i];
			}
		}

		// Store the current number and index
		numMap.set(nums[i], i);
	}

	// Return an empty array if no solution is found
	return [];
}
