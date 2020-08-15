let carro = ['Voyage', 'Saveiro', 'Celta', 'Captiva']
const estacionamento = [10]
let Auto = [carro[0], carro[1], carro[2]]
console.log('Quantidade de carros ' + carro.length)
console.log("Carros Estacionados " + Auto.length)
console.log(`Bem vindo ao Estacionamento Do Gabriel.
                      Capacidade de Veiculos: ${estacionamento}
                      Quantidade de vaga: ${(estacionamento - Auto.length)}
                      Vaga 1: ${Auto[0]}
                      Vaga 2: ${Auto[1]}
                      Vaga 3: ${Auto[2]}`
)
Auto.push(carro[3])
console.log('Atualizando...')
console.log("Carros Estacionados " + Auto.length)
console.log(`Bem vindo ao Estacionamento Do Gabriel.
                Capacidade de Veiculos: ${estacionamento}
                Quantidade de vaga: ${(estacionamento - Auto.length)}
                Vaga 1: ${Auto[0]}
                Vaga 2: ${Auto[1]}
                Vaga 3: ${Auto[2]}
                Vaga 4: ${Auto[3]}`
)