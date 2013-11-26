# Dynamic Response Media Sass Utilities

## Installation

+ Add utilities folder and _drm-sass-utilities.scss to project sass folder
+ Import _drm-sass-utilities.scss into main scss folder

## Documentation

+ Media Query Breakpoints

	breakpoint deminsions can be customized in variables file

	+ trenta
	+ venti
	+ grande
	+ tall
	+ short
	+ espresso
	+ bean

		@include breakpoint(trenta) {
			// place rules here
		}

		@include breakpoint(venti) {
			// place rules here
		}

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
		+ only works on elements with a definted width rule

	+ %info-block
	
			@extend %info-block;

		+ creates a horizontally centered box that takes up 90% of its container
		+ text is centered

	+ %feature-heading
	
			@extend %feature-heading;

		+ heading for feature boxes					