function containsDuplicate(nums: number[]): boolean {
	// new Set will create a new array that is unique that automatically filter out the duplcation
	const counter = new Set<number>(nums);
	// Compare the size of the set
	// IF the set size is less than the array then duplication exist in the array
	return counter.size !== nums.length;
}
