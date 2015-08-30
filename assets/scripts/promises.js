
// and…
Promise.all([
    $.getJSON('http://hipsterjesus.com/api/'),
    $.getJSON('http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?')
]).then(function (resp) {
    'use strict';
    console.log(resp);

}, function () {
    'use strict';
    console.log('something went wrong');
});

//http://en.wikipedia.org/w/api.php?format=json&action=query&titles=India&prop=revisions&rvprop=content&callback=?
