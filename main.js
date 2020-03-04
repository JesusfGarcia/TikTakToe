let matriz = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
]
let turno = 1
let end = false

onClickButton = (id) => {
	let boton = document.getElementById(id)
	switch (id) {
		case 'btn1':
			if (boton.innerText === '' && end === false) {
				matriz[0][0] = turno
				putCharacter(boton)
			}
			break
		case 'btn2':
			if (boton.innerText === '' && end === false) {
				matriz[0][1] = turno
				putCharacter(boton)
			}
			break
		case 'btn3':
			if (boton.innerText === '' && end === false) {
				matriz[0][2] = turno
				putCharacter(boton)
			}
			break
		case 'btn4':
			if (boton.innerText === '' && end === false) {
				matriz[1][0] = turno
				putCharacter(boton)
			}
			break
		case 'btn5':
			if (boton.innerText === '' && end === false) {
				matriz[1][1] = turno
				putCharacter(boton)
			}
			break
		case 'btn6':
			if (boton.innerText === '' && end === false) {
				matriz[1][2] = turno
				putCharacter(boton)
			}
			break
		case 'btn7':
			if (boton.innerText === '' && end === false) {
				matriz[2][0] = turno
				putCharacter(boton)
			}
			break
		case 'btn8':
			if (boton.innerText === '' && end === false) {
				matriz[2][1] = turno
				putCharacter(boton)
			}
			break
		case 'btn9':
			if (boton.innerText === '' && end === false) {
				matriz[2][2] = turno
				putCharacter(boton)
			}
			break
		default:
			break
	}
}

putCharacter = (boton) => {
	turno === 1 ? (boton.innerText = 'X') : (boton.innerText = 'O')
	changeTurn()
	verifyWinner()
	verifyDraw()
}

changeTurn = () => {
	turno === 1 ? (turno = -1) : (turno = 1)
}

verifyWinner = async () => {
	let r1 = matriz[0][0] + matriz[0][1] + matriz[0][2]
	let r2 = matriz[1][0] + matriz[1][1] + matriz[1][2]
	let r3 = matriz[2][0] + matriz[2][1] + matriz[2][2]
	let r4 = matriz[0][0] + matriz[1][0] + matriz[2][0]
	let r5 = matriz[0][1] + matriz[1][1] + matriz[2][1]
	let r6 = matriz[0][2] + matriz[1][2] + matriz[2][2]
	let r7 = matriz[0][0] + matriz[1][1] + matriz[2][2]
	let r8 = matriz[0][2] + matriz[1][1] + matriz[2][0]
	let arrayResults = [r1, r2, r3, r4, r5, r6, r7, r8]
	arrayResults.map((result, index) => {
		result === 3 && drawLine(index, result)
		result === -3 && drawLine(index, result)
	})
}

verifyDraw = () => {
	let draw = 0
	matriz.map((value) => {
		value.map((item) => {
			item !== 0 && draw++
		})
	})
	draw === 9 && drawLine(8)
}

drawLine = (line, result) => {
	let ganador = ''
	result === 3
		? (ganador = 'Han ganado las X')
		: result === -3
		? (ganador = 'Han ganado las O')
		: null
	switch (line) {
		case 0:
			redLetter('btn1', 'btn2', 'btn3', ganador)
			break
		case 1:
			redLetter('btn4', 'btn5', 'btn6', ganador)
			break
		case 2:
			redLetter('btn7', 'btn8', 'btn9', ganador)
			break
		case 3:
			redLetter('btn1', 'btn4', 'btn7', ganador)
			break
		case 4:
			redLetter('btn2', 'btn5', 'btn8', ganador)
			break
		case 5:
			redLetter('btn3', 'btn6', 'btn9', ganador)
			break
		case 6:
			redLetter('btn1', 'btn5', 'btn9', ganador)
			break
		case 7:
			redLetter('btn3', 'btn5', 'btn7', ganador)
			break
		case 8:
			if (end === false) {
				document.getElementById('labelResult').innerText = 'EMPATE!!'
			}

		default:
			break
	}
}

redLetter = (id1, id2, id3, ganador) => {
	document.getElementById(id1).style.color = 'red'
	document.getElementById(id2).style.color = 'red'
	document.getElementById(id3).style.color = 'red'
	document.getElementById('labelResult').innerText = ganador
	end = true
}

reset = () => {
	history.go('/')
}
