const sprites = new Image()
sprites.src = 'sprites.png'

const canvas = document.querySelector('#game-canvas')
const contexto = canvas.getContext('2d')

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 35,
    altura: 25, 
    x: 10,
    y: 50,

    desenha(){
    contexto.drawImage(
        sprites,
        flappyBird.spriteX, flappyBird.spriteY,
        flappyBird.largura, flappyBird.altura,
        flappyBird.x, flappyBird.y,
        flappyBird.largura, flappyBird.altura,
        )
    },
    atualiza(){
        flappyBird.y = flappyBird.y + 1
    }
}

const fundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 276,
    altura: 204, 
    x: 0,
    y: 480 - 204,

    desenha(){
    contexto.fillStyle = '#70c5ce'
    contexto.fillRect(0,0,canvas.width, canvas.height)
    contexto.drawImage(
        sprites,
        fundo.spriteX, fundo.spriteY,
        fundo.largura, fundo.altura,
        fundo.x, fundo.y,
        fundo.largura, fundo.altura,
        )
    contexto.drawImage(
        sprites,
        fundo.spriteX, fundo.spriteY,
        fundo.largura, fundo.altura,
        fundo.x + fundo.largura, fundo.y,
        fundo.largura, fundo.altura,
        )
    }
}

const chao = {
    spriteX: 0,
    spriteY: 613,
    largura: 225,
    altura: 109, 
    x: 0,
    y: 370,
    
    desenha(){
    contexto.drawImage(
        sprites,
        chao.spriteX, chao.spriteY,
        chao.largura, chao.altura,
        chao.x, chao.y,
        chao.largura, chao.altura,
        )
    contexto.drawImage(
        sprites,
        chao.spriteX, chao.spriteY,
        chao.largura, chao.altura,
        chao.x + chao.largura, chao.y,
        chao.largura, chao.altura,
            )
    }
}

const inicio = {
    spriteX: 130,
    spriteY: 0,
    largura: 180,
    altura: 152, 
    x: 70,
    y: 70,
        
        desenha(){
        contexto.drawImage(
            sprites,
            inicio.spriteX, inicio.spriteY,
            inicio.largura, inicio.altura,
            inicio.x, inicio.y,
            inicio.largura, inicio.altura,
            )
        }
}

const telainicio ={
    desenha(){
        fundo.desenha()
        chao.desenha()
        flappyBird.desenha()
        inicio.desenha()
    },
    click(){
        telaAtiva =telajogo
    }
}

const telajogo = {
    desenha(){
        fundo.desenha()
        chao.desenha()
        flappyBird.desenha()
    },
    click(){}
}
    
var telaAtiva = telainicio

function mudatelaAtiva(){
    telaAtiva.click()
}

window.addEventListener("click", mudatelaAtiva)


function loop(){
    telaAtiva.desenha()
    requestAnimationFrame(loop)
}

loop();