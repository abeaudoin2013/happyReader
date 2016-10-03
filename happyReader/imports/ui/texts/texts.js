import { Template } from 'meteor/templating';
 
 //import data api
 // this is the const
import { Texts } from '../../api/texts.js';
 
 // import html
import './texts.html';

Template.texts.helpers({
	display() {
		if (!this.clicked) {
			return this.text
		} else {
			return this.title
		}
	}
});
 
 // set events for task template
Template.texts.events({
  'click .text'() {
    // Set the clicked property to the opposite of its current value
    
    // Texts.update(this._id, {
    //   $set: { clicked: ! this.clicked },
    // });
		Router.route("/text", function () {
			this.render("text");
		});
  }
});