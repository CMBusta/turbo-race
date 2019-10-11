//player object
const player ={
	character: $("#player"),
	playerPos: 0
}
console.log (player.character)

const ai = {
	character : $("#ai"),
	aiPos : 0
}
console.log (ai)

let playerPosition = 0;
let aiPosition = 0;


//Difficulties

const aiEasy = () =>{
	if (ai.aiPos < 1000){
		ai.character.animate({
			'left' : (aiPosition+=100) + 'px'
			})
		} else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		result()
		// aiEasy()
		setTimeout(aiEasy, 2000)

	}

const aiMedium = () =>{
	if (ai.aiPos < 1000){
		ai.character.animate({
			'left' : (aiPosition+=100) + 'px'
			})
		} else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		result()
		// aiMedium()
		setTimeout(aiMedium, 1000)
	}

const aiHard = () =>{
	if (ai.aiPos < 1000){
		ai.character.animate({
			'left' : (aiPosition+=100) + 'px'
			})
		} else{
			return true
		}
		console.log(ai.aiPos)
		ai.aiPos = aiPosition
		result()
		// aiHard()
		setTimeout(aiHard, 500)
	}



//move the ai


$("#easy").click(function(){
	aiEasy()
})
$("#medium").click(function(){
	aiMedium()
})
$("#hard").click(function(){
	aiHard()
})






// move the player function

player.character.click(function(){
	console.log($(this))
	$(this).animate({
		'left' : (playerPosition+=100) + 'px'

	})
	console.log(playerPosition)
	player.playerPos = playerPosition
	console.log(player)
	result()
})





// const playerMove = () =>{
// 	if (player.playerPos < 1000){
// 		player.character.animate({
// 			'left' : (playerPosition+=100) + 'px'
// 			})
// 		} else{
// 			return true
// 		}
// 		console.log(player.playerPos)
// 		player.playerPos = playerPosition
// 		result()
// 		// aiMove()
// 		setTimeout(playerMove, 2000)
// 	}

// player.character.click(function(){
// 	playerMove()

// })


$('body').keydown(function(e){
	console.log(e.which)
	if (e.which == 32){
		player.character.animate({
			'left' : (playerPosition+=100) + 'px'
			})
		player.playerPos = playerPosition
		result()

	}
})

$('body').keydown(function(e){
	console.log(e.which)
	if (e.which == 65){
		player.character.animate({
			'left' : (playerPosition-=100) + 'px'
			})
		player.playerPos = playerPosition
		result()

	}
})




const result= () => {
	if(player.playerPos === 1000){
		alert ('player won')
		return true
	}
	if (ai.aiPos === 1000){
		alert ('ai won')
		return true
	}
	if(ai.aiPos>=1000 || player.playerPos >= 1000){
	return true
	} 
}



