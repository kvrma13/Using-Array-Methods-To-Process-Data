var avg = items.reduce(function(a,b){
	return a + b.price

},0) / items.length

document.querySelector("#answer1").innerHTML =`The average price is $ ${avg.toFixed(2)}`

var cost = items.filter(function(a){
if (a.price >= 14.00 && a.price <= 18.00){
return true
}else{
	return false 
}

}).map(function(a){
return a.title
})


document.querySelector("#answer2").innerHTML = cost

var price = 0
var name = ""

items.forEach(function(item){
	if(item.currency_code === "GBP"){
		price = item.price
		name = item.title
	}
})


document.querySelector("#answer3").innerHTML = `${price} ${name}`

var wood = items.filter(function(item){
	if(item.materials.indexOf("wood")!== -1){
		return true
	}else{
		return false
	}
})

var woodname = wood.map(function(item){
	return item.title
}).join(` is made of wood.\n`)

document.querySelector("#answer4").innerHTML = woodname













