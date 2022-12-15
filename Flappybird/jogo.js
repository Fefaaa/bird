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


function loop(){
    flappyBird.desenha()

    fundo.desenha()

    requestAnimationFrame(loop)
}

loop();