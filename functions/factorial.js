export function fact(n) {
	let f = BigInt(1);
	for (let i = 1; i < n + 1; i++) {
		f = f * BigInt(i);
	}

	return f;
}