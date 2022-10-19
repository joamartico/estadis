var { jStat } = require("jstat");

export function FnormalStd(z) {
	// const z = (x - µ) / σ
	const dividend = Math.E ** -(z ** 2 / 2);
	const divisor = Math.sqrt(2 * Math.PI);
	return dividend / divisor;
}

export function Pnormal(x, µ, σ) {
	const dividend = Math.E ** -((x - µ) ** 2 / (2 * σ ** 2));
	const divisor = σ * Math.sqrt(2 * Math.PI);
	return dividend / divisor;
}

export function Fnormal(x, µ, σ) {
	// let sum = 0;
	// for (let i = 0; i <= x; i++) {
	// 	sum = sum + Pnormal(i, µ, σ);
	// }
	// return sum;
	return jStat.normal.cdf(x, µ, σ);
}

export function Gnormal(x, µ, σ) {
	return 1 - Fnormal(x, µ, σ);
}
