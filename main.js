let matriz = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
]
let turno = 1

onClickButton = (id) => {
	let boton = document.getElementById(id)
	switch (id) {
		case 'btn1':
			if (boton.innerText === '') {
				matriz[0][0] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn2':
			if (boton.innerText === '') {
				matriz[0][1] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn3':
			if (boton.innerText === '') {
				matriz[0][2] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn4':
			if (boton.innerText === '') {
				matriz[1][0] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn5':
			if (boton.innerText === '') {
				matriz[1][1] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn6':
			if (boton.innerText === '') {
				matriz[1][2] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn7':
			if (boton.innerText === '') {
				matriz[2][0] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn8':
			if (boton.innerText === '') {
				matriz[2][1] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		case 'btn9':
			if (boton.innerText === '') {
				matriz[2][2] = turno
				turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
				changeTurn()
				verifyWinner()
			}
			break
		default:
			break
	}
}

changeTurn = () => {
	turno === 1 ? (turno = -1) : (turno = 1)
}

verifyWinner = () => {
	let r1 = matriz[0][0] + matriz[0][1] + matriz[0][2]
	let r2 = matriz[1][0] + matriz[1][1] + matriz[1][2]
	let r3 = matriz[2][0] + matriz[2][1] + matriz[2][2]
	let r4 = matriz[0][0] + matriz[1][0] + matriz[2][0]
	let r5 = matriz[0][1] + matriz[1][1] + matriz[2][1]
	let r6 = matriz[0][2] + matriz[1][2] + matriz[2][2]
	let r7 = matriz[0][0] + matriz[1][1] + matriz[2][2]
	let r8 = matriz[0][2] + matriz[1][1] + matriz[2][0]
	if (
		r1 === 3 ||
		r2 === 3 ||
		r3 === 3 ||
		r4 === 3 ||
		r5 === 3 ||
		r6 === 3 ||
		r7 === 3 ||
		r8 === 3
	) {
		alert('Ganaron las X')
		reset()
	}
	if (
		r1 === -3 ||
		r2 === -3 ||
		r3 === -3 ||
		r4 === -3 ||
		r5 === -3 ||
		r6 === -3 ||
		r7 === -3 ||
		r8 === -3
	) {
		alert('Ganaron las O')
		reset()
	}
	if (
		r1 !== 0 &&
		r2 !== 0 &&
		r3 !== 0 &&
		r4 !== 0 &&
		r5 !== 0 &&
		r6 !== 0 &&
		r7 !== 0 &&
		r8 !== 0
	) {
		alert('EMPATE')
		reset()
	}
}

reset = () => {
	history.go('/')
}
