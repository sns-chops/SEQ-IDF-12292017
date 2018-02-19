function buildgrid() {
    var rows = ["D", "C", "B"];
    var packs = [];
    for (var i=1; i<37+1; i++) {
	packs.push(i);
    }
    var grid = d3.select("body").append("div").attr('class', 'grid');
    var rows = grid.selectAll("div").data(rows)
	.enter()
	.append("div").attr('class', 'row').attr('row', function(d){return d;});
    var packs = rows.selectAll("div")
	.data(packs)
	.enter()
	.append("div")
	.text(function(d){return d3.select(this.parentNode).attr('row') + d;});
}

buildgrid();
