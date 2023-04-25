const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 80 * 12; // 1280
canvas.height = 80 * 6; // 720


class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './img/Test.png'
})
const player = new Player();

// default with wsd not pressed
const keys = {
  w: {
      pressed: false,
  },
  a: {
      pressed: false,
  },
  d: {
      pressed: false,
  },
}

function animate() {
  window.requestAnimationFrame(animate);
  

  background.draw();
  // determine which key is pressed and if key d pressed, move right, if key a pressed, move left
  player.velocity.x = 0;
  if (keys.d.pressed) {
      player.velocity.x = 5;
  } else if (keys.a.pressed) {
      player.velocity.x = -5;
  }

  player.draw();
  player.update();
  
}

animate()
