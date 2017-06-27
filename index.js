var Clipboard = require('clipboard');
var Noty = require('noty')


var clipboard = new Clipboard('.clipboard');
clipboard.on('success', function(e) {
	new Noty({
	    text: 'Copied to clipboard'
	}).show();
    e.clearSelection();
});