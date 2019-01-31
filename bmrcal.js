var i=1
var gend,height,weight,age
var avgbmr

var bmrcal = function() {

	console.log('BMR Calculator')
	console.log('Male please enter 1 or Female please enter 2 : ')
	let stdin = process.openStdin()
	stdin.addListener("data",(value) => {
		if (i === 1){
			gend = value
			console.log('Enter your height (cm) :')}
		else if (i === 2){
			height = value
			console.log('Enter your weight (kg) :')}
		else if (i === 3){
			weight = value
			console.log('Enter your age :')}
		else {
			age= value
			stdin.destroy()
			if(gend == 1)
				{avgbmr = (66 + (13.7*weight) + (5*height) - (6.8*age))}
			else if(gend == 2)
				{avgbmr = (665 + (9.6*weight) + (1.8*height) - (4.7*age))}
			
			console.log('YOUR BMR: ' + avgbmr + ' CALORIES/DAY')
			}	
	i++	
	})
}

module.exports.bmrcal= bmrcal;