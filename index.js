const ranke = [
    { vitoria: 16, derrota: 7 },
    { vitoria: 30, derrota: 15 },
    { vitoria: 30, derrota: 5 },
    { vitoria: 55, derrota: 4 },
    { vitoria: 85, derrota: 3 },
    { vitoria: 97, derrota: 2},
    { vitoria: 110, derrota: 1}
  ];
  
  function totalVitoriaDerrota() {
    let saldo = [];

    for (let i = 0; i < ranke.length; i++) {
        const totalSaldo = ranke[i].vitoria - ranke[i].derrota;
        saldo.push(totalSaldo);
    }
    return saldo;
  }
  

  function rankeJogador(quantidadeXP) {
    let nivel = "";
  
    if ( quantidadeXP > 0 && quantidadeXP < 10) {
      nivel = "Ferro";
    } else if (quantidadeXP >= 11 && quantidadeXP <= 20) {
      nivel = "Bronze";
    } else if (quantidadeXP >= 21 && quantidadeXP <= 50) {
      nivel = "Prata";
    } else if (quantidadeXP >= 51 && quantidadeXP <= 80) {
      nivel = "Ouro";
    } else if (quantidadeXP >= 81 && quantidadeXP <= 90) {
      nivel = "Diamante";
    } else if (quantidadeXP >= 91 && quantidadeXP <= 100) {
      nivel = "Lendário";
    } else if (quantidadeXP >= 101) {
      nivel = "Imortal";
    } 
    return nivel;
  }
  const saldos = totalVitoriaDerrota(); // Calcula os saldos individuais de vitórias - derrotas

// Determinando os níveis para cada jogador
for (let i = 0; i < saldos.length; i++) {
    const saldo = saldos[i];
    const nivelAtual = rankeJogador(saldo);
    console.log(`O Herói com saldo de vitoria ${saldo} está no nível de ${nivelAtual}`);
}


  
   
  

