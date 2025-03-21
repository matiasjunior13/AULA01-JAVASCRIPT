const funcionario = prompt("Olá! Seja bem-vindo ao seu programa de calculo de ganhos. Por gentileza digite seu nome: ")
const horasTrabalhadas = Number(prompt('Digite a quantidade de horas que você trabalhou: '))
const ganhoHora = Number(prompt('Digite o valor que você recebeu por hora: '))


const salarioBruto = horasTrabalhadas * ganhoHora;
const inss = salarioBruto * 0.08;
const ir = salarioBruto * 0.075;
const salarioLiquido = salarioBruto - inss - ir;

alert(
  `Olá ${funcionario} com base nas suas informações, segue extrato: \n
  ============== Proventos ==============\n
  Horas Trabalhadas: ${horasTrabalhadas}
  Ganho por Hora: R$${ganhoHora}
  Salário bruto: R$${salarioBruto}.\n 
  ============== Descontos ==============z\n
  INSS: R$${inss}
  IR: R$${ir}\n
  ============== Saldo Final ==============\n
  Salário Liquido: R$${salarioLiquido}.\n`
);
