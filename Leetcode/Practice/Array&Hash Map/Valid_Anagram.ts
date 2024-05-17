function isAnagram(s: string, t: string): boolean {
	// lowercase
	s = s.toLowerCase();
	t = t.toLowerCase();
	// s === t then true
	// tar === rat
	if (s.length !== t.length) return false;

	return s.split("").sort().join("") === t.split("").sort().join("");
}
