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
    var modal = d3.select(".modal");
    packs.on("click", function(d){
	var pack = d3.select(this.parentNode).attr('row') + d;
	var plot = modal.select("img.modal-content");
	plot.attr("src", "I_d/"+pack+"-I_d.png");
	modal.style("display", "block");
    });

    var close = d3.select(".close");
    close.on("click", function(){
	modal.style("display", "none");
    });
}

buildgrid();
