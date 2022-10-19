var { jStat } = require("jstat");

export function Fbeta (x, a, b){
    return jStat.beta.cdf(x, a, b)
}