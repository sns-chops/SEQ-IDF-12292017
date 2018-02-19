function buildgrid() {
    var packs = [];
    for (var i=0; i<5; i++) {
	packs.push('D'+i);
    }
    d3.select(".grid")
	.selectAll("div")
	.data(packs)
	.enter()
	.append("div")
	.text(function(d){return d;})
    ;
}

buildgrid();
