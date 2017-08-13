$(document).ready(function(){ 

var test = true;
var char1Count = true;
var countDefeated = 0;

//Counter
var obiCount = 0;
var lukeCount = 0;
var sidCount = 0;
var maulCount = 0;

//Disable button
var disableBtn = true;
/*When character 1 is clicked move the
  other characters to enimes section*/
	$('.resetBtn').on('click',function(){
		if(char1Count === true)
		{
			$(this).addClass('main');
			obiCount++;
			//Changes to false so Main character wont move to enemies area
			char1Count = false;
			// adds the characters that was not clicked to enemies section
			$('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
			//Centers characters Health text
			$('.char2 p').css({'margin-left': '30px'});
			
			$('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
			//Centers characters Health text
			$('.char3 p').css({'margin-left': '30px'});
			
			$('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
			//Centers characters Health text
			$('.char4 p').css({'margin-left': '30px'});
			//Adjusted the css so they would appear the same as before it was clicked
			$('.starImage').css({'width': '100px',
								'height': '100px',
								'margin-left': 'auto',
								'margin-right': 'auto',
								'display': 'block'});		
		}
		else if(char1Count === false && obiCount === 0)
		{
			//Enables attack button after defender is selected
			lukeCount++;
			sidCount++;
			maulCount++;
			disableBtn = false;
			$('.char1').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
			$('.char1 p').css({'margin-left': '30px'});
		}
	});

	$('.char1').on('click',function(){
		if(char1Count === true)
		{
			$(this).addClass('main');
			obiCount++;
			//Changes to false so Main character wont move to enemies area
			char1Count = false;
			// adds the characters that was not clicked to enemies section
			$('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
			//Centers characters Health text
			$('.char2 p').css({'margin-left': '30px'});
			
			$('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
			//Centers characters Health text
			$('.char3 p').css({'margin-left': '30px'});
			
			$('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
			//Centers characters Health text
			$('.char4 p').css({'margin-left': '30px'});
			//Adjusted the css so they would appear the same as before it was clicked
			$('.starImage').css({'width': '100px',
								'height': '100px',
								'margin-left': 'auto',
								'margin-right': 'auto',
								'display': 'block'});		
		}
		else if(char1Count === false && obiCount === 0)
		{
			//Enables attack button after defender is selected
			lukeCount++;
			sidCount++;
			maulCount++;
			disableBtn = false;
			$('.char1').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
			$('.char1 p').css({'margin-left': '30px'});
		}
	});
/*When character 2 is clicked move the
  other characters to enimes section*/
$('.char2').on('click',function(){
	if(char1Count === true)
	{
		$(this).addClass('main');
		lukeCount++;
		char1Count = false;
		$('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char1 p').css({'margin-left': '30px'});
		
		$('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char3 p').css({'margin-left': '30px'});
		
		$('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char4 p').css({'margin-left': '30px'});
		//Adjusted the css so they would appear the same as before it was clicked
		$('.starImage').css({'width': '100px',
							'height': '100px',
							'margin-left': 'auto',
							'margin-right': 'auto',
							'display': 'block'});
	}
	else if(char1Count === false && lukeCount === 0)
	{
		//Enables attack button after defender is selected
		disableBtn = false;
		obiCount++;
		sidCount++;
		maulCount++;
		$('.char2').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
		$('.char2 p').css({'margin-left': '30px'});
	}
});
/*When character 3 is clicked move the
  other characters to enimes section*/
$('.char3').on('click',function(){
	if(char1Count === true)
	{
		$(this).addClass('main');
		sidCount++;
		char1Count = false;
		$('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char1 p').css({'margin-left': '30px'});
		
		$('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char2 p').css({'margin-left': '30px'});
		
		$('.char4').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char4 p').css({'margin-left': '30px'});
		//Adjusted the css so they would appear the same as before it was clicked
		$('.starImage').css({'width': '100px',
							'height': '100px',
							'margin-left': 'auto',
							'margin-right': 'auto',
							'display': 'block'});
	}
	else if(char1Count === false && sidCount === 0)
	{
		//Enables attack button after defender is selected
		disableBtn = false;
		lukeCount++;
		obiCount++;
		maulCount++;
		$('.char3').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black','color':'white'});
		//Centers Health text
		$('.char3 p').css({'margin-left': '30px'});
	}
});
/*When character 4 is clicked move the
  other characters to enimes section*/
$('.char4').on('click',function(){
	if(char1Count === true)
	{
		$(this).addClass('main');
		maulCount++;
		char1Count = false;
		$('.char1').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char1 p').css({'margin-left': '30px'});
		
		$('.char2').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char2 p').css({'margin-left': '30px'});
		
		$('.char3').appendTo('.enemiesBox').css({'height':'150px','width':'100px', 'background-color':'red'});
		//Centers characters Health text
		$('.char3 p').css({'margin-left': '30px'});
		//Adjusted the css so they would appear the same as before it was clicked
		$('.starImage').css({'width': '100px',
							'height': '100px',
							'margin-left': 'auto',
							'margin-right': 'auto',
							'display': 'block'});
	}
	else if(char1Count === false && maulCount === 0)
	{
		//Enables attack button after defender is selected
		disableBtn = false;
		lukeCount++;
		obiCount++;
		sidCount++;
		$('.char4').appendTo('.defenderBox').addClass("def").css({'background-color' : 'black', 'color':'white'});
		//Centers Health text
		$('.char4 p').css({'margin-left': '30px'});
	}
});
//----------------------Attack-----------------
	$('.attackBtn').on('click',function() 
	{
		if(disableBtn === false)
		{
		var charName = $('.def').attr('characterName');
		//Gets main characters health atribute value
		var healthMain = $('.main').attr('health');
		//Gets the attack attribute value from the main Character
		var attackMain = $('.main').attr('attack');
		//Gets the defenders health attribute value 
		var healthDefender = $('.def').attr('health');
		//Gets the defenders counter attack attribute value 
		var counterAttack =  $('.def').attr('counterAttack');
		/* When user presses attack it reduces the main characters health
		   by the counterAttack amount */
		var healthMainAfter = healthMain - counterAttack;
		/* When user presses attack it reduces the defender characters health
		   by the Attack amount */
		var healthDefAfter = healthDefender - attackMain;
		//Updates main characters health attribute in the DOM
		var healthMain1 = $('.main').attr('health',healthMainAfter);
		//Updates defenders health attribute in the DOM	
		var healthDef1 = $('.def').attr('health',healthDefAfter);
		//Changes main characters health text in the DOM 
		$('.main p').html($('.main').attr("health"));
		//Changes the defenders health text in the DOM
		$('.def p').html($('.def').attr("health"));
		//Displays message 
		$('.defender').html('<p>' + 'You attacked ' + charName + 
							' for ' + attackMain +  ' damage '+
							 charName + ' attacked you back for ' + 
							 counterAttack + ' </p>').css({'font-size': '20px','text-align':'center'});
		//Doubles main Characters attack
		attackMain = attackMain  * 2;
		//Updates the main Characters attack 
		var attackMain1 = $('.main').attr('attack',attackMain);
		//Prents the attack button from being clicked after the game is over
			if(healthMainAfter <= 0)
			{
				$('.defender').html('<p>' + 'You have been defeated...Game Over!!!' + ' </p>').css({'font-size': '20px'});
				$('.main').remove();
				this.disabled = true;
				
			}
			else if(healthDefAfter <= 0)
			{
				//Defender Obi
				if($('.def.char1').attr('health') <= 0)
				{
					console.log(true);
					maulCount--;
					sidCount--;
					lukeCount--;
					//Remove the the defender
					$('.def').remove();
					$('.defender').html('<p>' + 'You have defeated ' + charName +
										 ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
					countDefeated++;
				}
				//Defender Luke
				else if($('.def.char2').attr('health') <= 0)
				{
					console.log(true);
					maulCount--;
					sidCount--;
					obiCount--;
					//Remove the the defender
					$('.def').remove();
					$('.defender').html('<p>' + 'You have defeated ' + charName +
										 ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
					countDefeated++;
				}
				//defender Darth Sid
				else if($('.def.char3').attr('health') <= 0)
				{
					console.log(true);
					maulCount--;
					lukeCount--;
					obiCount--;
					//Remove the the defender
					$('.def').remove();
					$('.defender').html('<p>' + 'You have defeated ' + charName +
										 ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
					countDefeated++;
				}
				//defender Darth Maul
				else if($('.def.char4').attr('health') <= 0)
				{
					console.log(true);
					lukeCount--;
					obiCount--;
					sidCount--;
					//Remove the the defender
					$('.def').remove();
					$('.defender').html('<p>' + 'You have defeated ' + charName +
										 ' choose to fight another enemy.' + '</p>').css({'font-size': '20px'});
					countDefeated++;
				}
				//Removed event listener after game is over
				if(countDefeated === 3)
				{
					$('.defender').html('<p>' + 'WINNER!!!' + '</p>').css({'font-size': '40px'})
					console.log('count after**** ' + countDefeated);
					this.disabled = true;
					
				}
			}
		}		
	});
});
