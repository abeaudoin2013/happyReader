//Structuring imports
// Now that we have placed all files inside the imports/ directory, 
// let’s think about how best to organize our code using modules. 
// It makes sense to put all code that runs when your app starts in an imports/startup directory. 
// Another good idea is splitting data and business logic from UI rendering code.
// We suggest using directories called imports/api and imports/ui for this logical split.

import { Template } from "meteor/templating";

import { Texts } from "../../api/texts.js";

// The body template uses the text template, so we need to import it as well:
import "../texts/texts.js";
import "../footer/footer.js";
import "./body.html";
 
Template.body.helpers({
  allTexts() {
    return Texts.find({}, { sort: { createdAt: -1 } });
  }
});

Template.body.rendered = function  () {
	if (!this._rendered) {
    this._rendered = true;
    var x = ["happy", "reader"];
    var y = $('#welcome').html(x[0]);
    $("#happy").html(x[0]).addClass("animated fadeIn").delay(500).queue(function (next) {
    	$("#reader").html(x[1]).addClass("animated fadeIn");
    	next();
    });
  }
}