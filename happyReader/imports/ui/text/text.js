import { Template } from 'meteor/templating';
 
 //import data api
 // this is the const
import { Texts } from '../../api/texts.js';
 
 // import html
import './text.html';

Template.text.helper({
	testDisplay() {
		return this.text
	}
});