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
	.append("div").attr('class', 'pack')
	.attr('pack',function(d){return d3.select(this.parentNode).attr('row') + d;});  // pack=C21, ...
    packs.text(function() {return d3.select(this).attr('pack');});
    var modal = d3.select(".modal");
    packs.on("click", function(d){
	var pack = d3.select(this).attr('pack');
	if (pack=='C25' ||pack=='C26') return;
	var plot = modal.select("img.modal-content");
	plot.attr("src", "I_d/"+pack+"-I_d.png");
	modal.style("display", "block");
    });

    var close = d3.select(".close");
    close.on("click", function(){
	modal.style("display", "none");
    });

    build_subpacks(d3.select("div.pack[pack='C25']"));
    build_subpacks(d3.select("div.pack[pack='C26']"));
}

function build_subpacks(container)
{
    container.text("...").classed("pack", false);
    var pack = container.attr('pack');
    var subs = ['T', 'B']
    var subpacks = container.selectAll('div').data(subs).enter().append("div")
	.attr("class", "subpack pack")
	.attr("sub", function(d) {return d;})
	.attr('pack', function(d) {return pack+d});
    subpacks.text(function() {return d3.select(this).attr('pack');});
    var modal = d3.select(".modal");
    subpacks.on("click", function(d){
	var pack = d3.select(this).attr('pack');
	var plot = modal.select("img.modal-content");
	plot.attr("src", "I_d/"+pack+"-I_d.png");
	modal.style("display", "block");
    });
}
    

buildgrid();
