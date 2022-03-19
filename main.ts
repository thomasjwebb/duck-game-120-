controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d 1 d d d d d d d . . . 
        . . d d d d d d d d d d d d . . 
        . d d 1 d d d d d d d d d d d . 
        . d d 1 d d d d d d d d d d d . 
        . d 1 1 d d d d d d d d d d d . 
        . d 1 d d d d d d d d d d d d . 
        . d d d d d d d d d d d d 1 d . 
        . d d d d d d d d d d d d 1 d . 
        . d d d d d d d d d d d 1 d d . 
        . d d d d d d d d d d 1 d d d . 
        . d d d d d d d d d d 1 d d d . 
        . d d d d d d d d 1 d d d d d . 
        . . d d d d d d d d d d d d . . 
        `, mySprite, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 7))
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`level2`)
    music.powerUp.play()
    enemyEnemyRooll = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 7 . . . . . . 
        . . . . 7 1 1 1 1 1 7 . . . . . 
        . . . 7 7 1 1 f 1 1 7 7 . . . . 
        . . . 7 7 1 1 f 1 1 7 7 . . . . 
        . . . 7 7 1 1 1 1 1 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(enemyEnemyRooll, tiles.getTileLocation(43, 10))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.baDing.play()
    mySprite.vy = -75
    pause(1000)
    mySprite.ay = 100
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 7))
    tiles.setCurrentTilemap(tilemap`level7`)
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock0, function (sprite, location) {
    game.over(true)
    game.splash("You win!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark5, function (sprite, location) {
    game.splash("Level 1 complete! Moving on to level 2!")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 8))
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level5`)
    enemyEnemyRooll = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 . . . . . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        . . . . 7 7 7 7 7 7 . . . . . . 
        . . . . 7 1 1 1 1 1 7 . . . . . 
        . . . 7 7 1 1 f 1 1 7 7 . . . . 
        . . . 7 7 1 1 f 1 1 7 7 . . . . 
        . . . 7 7 1 1 1 1 1 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(enemyEnemyRooll, tiles.getTileLocation(46, 4))
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight3, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 7))
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level8`)
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight2, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`level3`)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let enemyEnemyRooll: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`myImage`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 7))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 50
controller.moveSprite(mySprite, 90, 0)
enemyEnemyRooll = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . 7 1 1 1 1 1 7 . . . . . 
    . . . 7 7 1 1 f 1 1 7 7 . . . . 
    . . . 7 7 1 1 f 1 1 7 7 . . . . 
    . . . 7 7 1 1 1 1 1 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(enemyEnemyRooll, tiles.getTileLocation(41, 7))
enemyEnemyRooll.follow(mySprite, 10)
music.powerUp.play()
