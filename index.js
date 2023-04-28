const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// create a canvas that fit the pixel map I created 
canvas.width = 60 * 16; // 960
canvas.height = 70 * 9; // 630


const parsedCollisions = collisions.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

// load background sprite image
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './img/map.png'
})

// creat a player 
const player = new Player({
  collisionBlocks,
});

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

  // draw collision blocks within the canvas
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.draw();
  })

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
