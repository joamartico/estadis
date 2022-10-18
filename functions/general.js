export function fact(n) {
	let f = BigInt(1);
	for (let i = 1; i < n + 1; i++) {
		f = f * BigInt(i);
	}

	return f;
}

export class BigDecimal {
	// Configuration: constants
	static DECIMALS = 18; // number of decimals on all instances
	static ROUNDED = true; // numbers are truncated (false) or rounded (true)
	static SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
	constructor(value) {
		if (value instanceof BigDecimal) return value;
		let [ints, decis] = String(value).split(".").concat("");
		this._n =
			BigInt(
				ints +
					decis
						.padEnd(BigDecimal.DECIMALS, "0")
						.slice(0, BigDecimal.DECIMALS)
			) + BigInt(BigDecimal.ROUNDED && decis[BigDecimal.DECIMALS] >= "5");
	}
	static fromBigInt(bigint) {
		return Object.assign(Object.create(BigDecimal.prototype), {
			_n: bigint,
		});
	}
	add(num) {
		return BigDecimal.fromBigInt(this._n + new BigDecimal(num)._n);
	}
	subtract(num) {
		return BigDecimal.fromBigInt(this._n - new BigDecimal(num)._n);
	}
	static _divRound(dividend, divisor) {
		return BigDecimal.fromBigInt(
			dividend / divisor +
				(BigDecimal.ROUNDED ? ((dividend * 2n) / divisor) % 2n : 0n)
		);
	}
	multiply(num) {
		return BigDecimal._divRound(
			this._n * new BigDecimal(num)._n,
			BigDecimal.SHIFT
		);
	}
	divide(num) {
		return BigDecimal._divRound(
			this._n * BigDecimal.SHIFT,
			new BigDecimal(num)._n
		);
	}
	toString() {
		const s = this._n.toString().padStart(BigDecimal.DECIMALS + 1, "0");
		return (
			s.slice(0, -BigDecimal.DECIMALS) +
			"." +
			s.slice(-BigDecimal.DECIMALS).replace(/\.?0+$/, "")
		);
	}
}

export function toFixed(x) {
	if (Math.abs(x) < 1.0) {
		var e = parseInt(x.toString().split("e-")[1]);
		if (e) {
			x *= Math.pow(10, e - 1);
			x = "0." + new Array(e).join("0") + x.toString().substring(2);
		}
	} else {
		var e = parseInt(x.toString().split("+")[1]);
		if (e > 20) {
			e -= 20;
			x /= Math.pow(10, e);
			x += new Array(e + 1).join("0");
		}
	}
	return x;
}
