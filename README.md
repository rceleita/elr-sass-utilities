# Dynamic Response Media Sass Utilities

## About drm-sass-utilities

These are some sass extends and mixins that we are using over and over in our projects

## Installation

+ Add utilities folder and _drm-sass-utilities.scss to project sass folder
+ Import _drm-sass-utilities.scss into main scss file

## Documentation

### Media Query Breakpoints

breakpoint deminsions can be customized in variables file

+ trenta
+ venti
+ grande
+ tall
+ short
+ espresso
+ bean

		@include drm-breakpoint(trenta) {
			// place rules here
		}

		@include drm-breakpoint(venti) {
			// place rules here
		}

### Layout Utilities

+ %drm-container

		@extend %drm-container;

	+ Centers an element on the page
	+ for elements that take up the entire width of the wrapper
	+ includes built in breakpoints for responsiveness

+ %drm-reset-box

		@extend %drm-reset-box;

	+ removes margin and padding from an element

+ %drm-row

		@extend %drm-row;

	+ creates an element that completely fills its container

+ %drm-center-block

		@extend %drm-center-block;

	+ centers an element horizontally
	+ only works on elements with a definted width rule	

### Page Element Utilities

+ %drm-info-block

		@extend %drm-info-block;

	+ creates a horizontally centered box that takes up 90% of its container
	+ text is centered

+ %drm-feature-heading

		@extend %drm-feature-heading;

	+ heading for feature boxes	

### Shapes Utilities

+ drm-circle

		@include drm-circle($diameter);

	+ creates a perfect circle
	
+ drm-square

		@include drm-square($width);

	+ creates a perfect square

+ drm-rounded-square

		@include drm-rounded-square($width, $border-radius);

	+ creates a perfect square with rounded corners		
	
+ drm-retangle

		@include drm-retangle($width, $height);

	+ creates a rectangle

+ drm-rounded-rectangle

		@include drm-rounded-rectangle($width, $height, $border-radius);

	+ creates a rectangle with rounded corners						 

### Navigation Utilities

+ drm-nav-bar

		@include drm-nav-bar($text-color, $hover-color, $align);

	+ creates a horizontal list of links
	+ has a transparent background
	+ has a a:hover effect
	+ takes an optional $align argument; otherwize left alignment

+ drm-nav-bar-stacked

		@include drm-nav-bar-stacked($text-color, $hover-color, $align)

	+ creates a vertical list of links
	+ has a transparent background
	+ has a a:hover effect
	+ takes an optional $align argument; otherwize left alignment			

+ drm-nav-bar-solid

		@include drm-nav-bar-solid($text-color, $background-color, $align);

	+ creates a horizontal list of links with a solid color background
	+ hover state will invert text color and background color

+ drm-nav-bar-solid-stacked

		@include drm-nav-bar-solid-stacked($text-color, $background-color, $align);

	+ creates a vertical list of links with a solid color background
	+ hover state will invert text color and background color

+ drm-nav-bar-pills

+ drm-nav-bar-pills-stacked

+ drm-nar-bar-pills-solid

+ drm-nav-bar-pills-solid-stacked

+ drm-button-link

+ drm-button-solid

+ drm-rectangle-button				

### Effects Utilities

+ drm-solid-drop-shadow

		@include drm-solid-drop-shadow($color);

	+ Applies a solid 2px drop shadow to an element

+ drm-background-transparent

		@include drm-background-transparent($color, $opacity);

	+ Creates a slightly transparent background with a hex color backup
	+ Default opacity of 0.7

+ drm-border-transparent

		@include drm-border-transparent($color, $thickness, $opacity);

	+ Creates a slightly transparent border with a hex color backup
	+ Accepts a hex color value and pixel value for border-width
	+ Default thickness of 5px
	+ Default opacity of 0.7

+ drm-stitched-box

		@include drm-stitched-box($color, $stitch-color, $border-radius, $border-color, $opacity);

	+ Creates an element with a stitched border effect
	+ Takes an optional border and opacity argument

+ drm-stitched-row

		@include drm-stitched-row($color, $stitched-color, $border-color, $opacity);

	+ Creates a stitched top and bottom border
	+ Takes an optional border and opacity argument

+ drm-figure-transparent-border

		@include drm-figure-transparent-border($color, $thickness, $hover-color);

	+ Styles a div or figure with a transparent border that sits on top of the <img> element
	+ Specify a width and height on div or figure and img elements
	+ Make sure the containing element has a z-index of 100 and position: relative

+ drm-triple-shadow

		@include drm-triple-shadow($color1, $color2);

	+ creates a shadow with two thick borders and one thin border
	
+ drm-inset-text

		@include drm-inset-text($color);

	+ creates a slight shadow effect on text

+ drm-inset-border

		@include drm-inset-border($color);

	+ creates a bottom border with a slight shadow effect
	
+ drm-inset-box

		@include drm-inset-box($color);

	+ creates a slight box shadow

+ drm-boxy-drop-shadow

		@include drm-boxy-drop-shadow($color);

	+ creates a thick drop shadow
	+ takes an optional color argument

+ drm-double-border

		@include drm-double-border($color1, $color2, $color3);

	+ creates a double border effect				