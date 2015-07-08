
// and…
Promise.all([$.getJSON('http://hipsterjesus.com/api/'), $.getJSON('http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?')]).then(function(resp) {
    console.log(resp);

}, function() {
    console.log("something went wrong");
});

//http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?
