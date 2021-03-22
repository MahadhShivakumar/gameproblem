class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
            console.log(mouseY)
    player1 = createSprite(200,350);
    player1.addImage("player1",gun_img2);
    
    player2 = createSprite(800,400);
    player2.addImage("player2",gun_img1);
    players=[player1,player2];
    
    // block1 = createSprite(50,300,40,40)
    // block2 = createSprite(950,300,40,40)

    // shield1= createSprite(125,300,20,20)
    // shield1.addImage("shield1",shield_img)
    //shield1.velocityY=1

    // shield2= createSprite(875,300,20,20)
    // shield2.addImage("shield2",shield_img)
    //shield2.velocityY=1

    //  edges=createEdgeSprites();
    //  shield1.bounceOff(edges)
    //  shield2.bounceOff(edges)

        }
    
    play(){
        
        form.hide();

        Player.getPlayerInfo();
        //image(back_img, 0, 0, 1000, 800);
        var x =200
        var y=World.mouseY;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=mouseY;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            if(index === player.index){   
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25); 
            }
           
        }

        if (keyIsDown(RIGHT_ARROW) && player.index !== null && player.index=== 1) {
            bullet = createSprite(0, 0, 20, 20); 
            bullet.x=player1.x+20;
            bullet.y=player1.y;
            bullet.velocityX=2
            console.log("ololo")
       }
        if (keyIsDown(LEFT_ARROW) && player.index !== null && player.index===2) {
            bullet = createSprite(0, 0, 20, 20);
            bullet.x=player2.x-20;
            bullet.y=player2.y;
            bullet.velocityX=-2
        }
    
        // if (keyIsDown(SPACE)) {
        //     bullet = createSprite(0, 0, 20, 20);
        //     if(player.index ===1){
        //         bullet.addImage("bullet1",bullet_img1)
        //         bullet.x=player1.x+20;
        //         bullet.y=player1.y;
        //         bullet.velocityX=5
                
        //     }
        //     else if(player.index === 2){
        //         bullet.addImage("bullet2",bullet_img2)
        //         bullet.x=player2.x-20;
        //         bullet.y=player2.y;
        //         bullet.velocityX=-5
        //     }
        //     bulletGroup.add(bullet)
        // }
    
        if (player.index !== null) {
            
                if (bulletGroup.isTouching(block1) || bulletGroup.isTouching(block2)) {
                    //fruitGroup.get(i).destroy();
                    player.score =player.score+1;
                    player.update();  
                }
            
        }

        if(player.score===10){
           //gameState=2 
           game.update(2);
        }
    
    }

    end(){
       console.log("Game Ended");
    }
}
