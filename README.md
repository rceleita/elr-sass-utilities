# Dynamic Response Media Sass Utilities

## Installation

+ Add utilities folder and _drm-sass-utilities.scss to project sass folder
+ Import _drm-sass-utilities.scss into main scss folder

## Documentation

+ Media Query Breakpoints

	breakpoint deminsions can be updated in variables file

	+ trenta
	+ venti
	+ grande
	+ tall
	+ short
	+ espresso
	+ bean

+ Extends

	+ %container

		@extend %container;

		+ Centers an element on the page
		+ for elements that take up the entire width of the wrapper
		+ includes built in breakpoints for responsiveness

	+ %reset-box
	
		@extend %reset-box;

		+ removes margin and padding from an element

	+ %row
	
		@extend %row;

		+ creates an element that completely fills its container

	+ %center-block
	
		@extend %center-block;

		+ centers an element horizontally
		+ only works on elements with a definted width style

	+ %info-block
	
		@extend %info-block;

		+ creates a horizontally centered box that takes up 90% of its container
		+ text is centered

	+ %feature-heading
	
		@extend %feature-heading;

		+ heading for feature boxes					