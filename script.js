function combinacao(num, x) {
    let y = num - x;
    let fatnum = 1;
    let fatx = 1;
    let faty = 1;
    for (let i = 1; i <= num; i++) {
        fatnum *= i;
    }
    for (let i = 1; i <= x; i++) {
        fatx *= i;
    }
    for (let i = 1; i <= y; i++) {
        faty *= i;
    }
    let fat_comb = fatnum / (faty * fatx);
    return fat_comb;
}

function probabilidade_acumulada_binomial(n, p, x) {
    let prob_acumulada = 0;
    for (let i = 0; i <= x; i++) {
        let c = combinacao(n, i);
        prob_acumulada += c * Math.pow(p, i) * Math.pow(1 - p, n - i);
    }
    return prob_acumulada * 100;
}

function calcularProbabilidade() {
    let n = parseInt(document.getElementById("n").value);
    let p = parseFloat(document.getElementById("p").value);
    let x = parseInt(document.getElementById("x").value);
    let q = 1 - p;

    let c = combinacao(n, x);
    let binomial_individual = (c * Math.pow(p, x) * Math.pow(q, n - x)) * 100;

    let prob_acumulada = probabilidade_acumulada_binomial(n, p, x);

    document.getElementById("probabilidade_individual").textContent = binomial_individual.toFixed(2) + "%";
    document.getElementById("probabilidade_acumulada").textContent = prob_acumulada.toFixed(2) + "%";
}

document.getElementById("calcularBtn").addEventListener("click", calcularProbabilidade);
