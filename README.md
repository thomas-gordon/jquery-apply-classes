# jQuery Apply Classes

##Summary

Apply a set of classes to a jquery element or set. Useful for mixing up ordering on older browsers, rainbow colouring.

##Use cases

Sometimes you want to apply a set of classes over an element set, be it for ordering or colouring. I created this tool when I was given the requirement to "Make the borders on the elements rainbow and maintain this colouring on each page load".

In order to accomplish this I opted to use classes for the older browsers and nth-child selectors for today. Hope it is useful for ya!

##Usage

eg.

	$('.section__header').applyClasses({
	    classes:[
	    	'position__level-1', 
	    	'position__level-2'
    	]
	});
	
The above takes the `.section__header` object and loops through it, applying in sequence the classes outlined in order then
 starting again from the start of the array eg:

    <div class="section__header">Test</div>
    <div class="section__header">Test</div>
    <div class="section__header">Test</div>
    <div class="section__header">Test</div>
    
Will now look like:

    <div class="section__header position__level-1">Test</div>
    <div class="section__header position__level-2">Test</div>
    <div class="section__header position__level-1">Test</div>
    <div class="section__header position__level-2">Test</div>

##Options

**classes**: An array of classes to be applied  
**avoid**: Specify a selector to be avoided as part of the looping. eg. '.section__header--ignore'
**random**: Set to true to apply the classes in a random order over your page.