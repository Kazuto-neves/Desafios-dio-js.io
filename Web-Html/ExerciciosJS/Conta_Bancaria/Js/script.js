const CRIAR = document.getElementById("cConta");
const ARQUIVE = document.getElementById("arquive");
const IMPUT = document.getElementById("name");
var n = false;
var CP;
var CC;
var CUni;
var cc = 0;
var cp = 0;
var cuni = 0;

function liberar(n) {
  if (n) {
    const SACAR = document.getElementById("sacar");
    const DEPST = document.getElementById("depositar");
    SACAR.addEventListener("click", sacar);
    DEPST.addEventListener("click", depositar);
  }
}

CRIAR.addEventListener("click", criar);

function addBTNS() {
  const NSACAR = document.createElement("input");
  NSACAR.setAttribute("type", "button");
  NSACAR.setAttribute("class", "Result");
  NSACAR.setAttribute("id", "sacar");
  NSACAR.setAttribute("value", "Sacar");

  const NDEPST = document.createElement("input");
  NDEPST.setAttribute("type", "button");
  NDEPST.setAttribute("class", "Result");
  NDEPST.setAttribute("id", "depositar");
  NDEPST.setAttribute("value", "Depositar");

  ARQUIVE.appendChild(NSACAR);
  ARQUIVE.appendChild(NDEPST);
  liberar(n);
}

function in_out(arg) {
  let op = Number(prompt(arg));
  return op;
}

function criar() {
  if (!n) {
    n = true;
    addBTNS();
  }
  let op = in_out(
    "Tipo de conta\n 1 - Corrente\n 2 - Poupança\n 3 - Univercitario\n Digite Aqui: "
  );
  switch (op) {
    case 1:
      if (cc === 0) {
        op = in_out("Digite 1 para quero cartão\n 2 para não quero cartão");
        op === 1
          ? (CC = new ContaCorrente(1, 211, true))
          : (CC = new ContaCorrente(1, 211, false));
        alert(`Criado com sucesso ${IMPUT.value}`);
        cc = 1;
      } else {
        alert(
          "Já tem uma conta corrente\n esse programa e so pra demonstração de trabalho com\nJS orientado a objeto"
        );
      }
      break;
    case 2:
      if (cp === 0) {
        CP = new ContaPoupanca(2, 333);
        cp = 1;
        alert(`Criado com sucesso ${IMPUT.value}`);
      } else {
        alert(
          "Já tem uma conta poupança\n esse programa e so pra demonstração de trabalho com\nJS orientado a objeto"
        );
      }
      break;
    case 3:
      if (cuni === 0) {
        CUni = new ContaUniversitaria(2, 333);
        cuni = 1;
        alert(`Criado com sucesso ${IMPUT.value}`);
      } else {
        alert(
          "Já tem uma conta Universitaria\n esse programa e so pra demonstração de trabalho com\nJS orientado a objeto"
        );
      }
      break;
    default:
      alert(`Essa opção não existe selecione novamente ${IMPUT.value}`);
      criar();
      break;
  }
}

function sacar() {
  const QSACAR = "quanto deseja sacar?";
  let text = document.getElementById("text");
  let op = in_out(
    "Tipo de conta\n 1 - Corrente\n 2 - Poupança\n 3 - Univercitario\n Digite Aqui: "
  );
  switch (op) {
    case 1:
      op = in_out(QSACAR);
      if (op >= 1) {
        text.innerText = CC.sacar(op);
      } else {
        alert(`não aceitamos numeros negativos`);
      }
      break;
    case 2:
      op = in_out(QSACAR);
      if (op >= 1) {
        text.innerText = CP.sacar(op);
      } else {
        alert(`não aceitamos numeros negativos`);
      }
      break;
    case 3:
      op = in_out(QSACAR);
      if (op >= 1) {
        text.innerText = CUni.sacar(op);
      } else {
        alert(`não aceitamos numeros negativos`);
      }
      break;
    default:
      break;
  }
}

function depositar() {
    const QSACAR = "quanto deseja depositar?";
    let text = document.getElementById("text");
    let op = in_out(
      "Tipo de conta\n 1 - Corrente\n 2 - Poupança\n 3 - Univercitario\n Digite Aqui: "
    );
    switch (op) {
      case 1:
        op = in_out(QSACAR);
        if (op >= 1) {
          text.innerText = CC.depositar(op);
        } else {
          alert(`não aceitamos numeros negativos`);
        }
        break;
      case 2:
        op = in_out(QSACAR);
        if (op >= 1) {
          text.innerText = CP.depositar(op);
        } else {
          alert(`não aceitamos numeros negativos`);
        }
        break;
      case 3:
        op = in_out(QSACAR);
        if (op >= 1) {
          text.innerText = CUni.depositar(op);
        } else {
          alert(`não aceitamos numeros negativos`);
        }
        break;
      default:
        break;
    }
  }

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Saque negado; saldo insuficiente!");
    }

    this._saldo = this._saldo - valor;
    return (`foi sacado ${valor} seu saldo e de ${this._saldo}`);
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return (`foi depositado ${valor} seu saldo e de ${this._saldo}`);
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  get saldo() {
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  sacar(valor) {
    if (!this.cartaoCredito) {
      return "Precisa ter cartão";
    }
    this._saldo = this._saldo - valor;
    return (`foi sacado ${valor} seu saldo e de ${this._saldo}`);
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }

  sacar(valor) {
    if (valor > 1500) {
      return "Operação negada.";
    }
    this._saldo = this._saldo - valor;
    return (`foi sacado ${valor} seu saldo e de ${this._saldo}`);
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitária";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada.";
    }

    this._saldo = this._saldo - valor;
    return (`foi sacado ${valor} seu saldo e de ${this._saldo}`);
  }
}
