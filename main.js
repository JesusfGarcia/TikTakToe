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
			document.getElementById('btn1').style.color = 'red'
			document.getElementById('btn2').style.color = 'red'
			document.getElementById('btn3').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 1:
			document.getElementById('btn4').style.color = 'red'
			document.getElementById('btn5').style.color = 'red'
			document.getElementById('btn6').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 2:
			document.getElementById('btn7').style.color = 'red'
			document.getElementById('btn8').style.color = 'red'
			document.getElementById('btn9').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 3:
			document.getElementById('btn1').style.color = 'red'
			document.getElementById('btn4').style.color = 'red'
			document.getElementById('btn7').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 4:
			document.getElementById('btn2').style.color = 'red'
			document.getElementById('btn5').style.color = 'red'
			document.getElementById('btn8').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 5:
			document.getElementById('btn3').style.color = 'red'
			document.getElementById('btn6').style.color = 'red'
			document.getElementById('btn9').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 6:
			document.getElementById('btn1').style.color = 'red'
			document.getElementById('btn5').style.color = 'red'
			document.getElementById('btn9').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 7:
			document.getElementById('btn3').style.color = 'red'
			document.getElementById('btn5').style.color = 'red'
			document.getElementById('btn7').style.color = 'red'
			document.getElementById('labelResult').innerText = ganador
			end = true
			break
		case 8:
			if (end === false) {
				document.getElementById('labelResult').innerText = 'EMPATE!!'
			}

		default:
			break
	}
}

reset = () => {
	history.go('/')
}
