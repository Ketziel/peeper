#What does this plugin with the creepy name do?

Peeper lets you move a some of an exisivley large list of  children within a parent to a collapsible view. Using this plugin let's you handle the hiding/displaying of elements within a parent that is dynamic so you don't need to add anything to your markup - Yay!

#Using this thing

The most simple way to use peeper, would be to just call it on a <ul> that conbtains <li>'s.

 ```html
<ul id="animal-farm">
	<li>Elephant</li>
	<li>Lion</li>
	<li>Bear</li>
	<li>Fish</li>
	<li>Panda</li>
	<li>Wizard</li>
</ul>
 ```

 ```javascript
$('#animal-farm').peeper();
 ```
 
 This will display the first three elements (Elephant, Lion & bear), whilst hiding the others. An <a> tag will be inserted at the bottom with the text 'More' - this opens/closes the collapsible view.
 
 Instead of <ul>'s and <li>'s, you can use divs for your list.
 
  ```html
<div id="very-important-super-duper-offers-list">
	<div class="super-duper-offer">
		<!-- Some mark up for the special offer -->
	</div>
	<div class="super-duper-offer">
		<!-- Some mark up for the special offer -->
	</div>
	<div class="super-duper-offer">
		<!-- Some mark up for the special offer -->
	</div>
	<div class="super-duper-offer">
		<!-- Some mark up for the special offer -->
	</div>
</div>
 ```

 ```javascript
$('#very-important-super-duper-offers-list').peeper({peeps: '.super-duper-offer', peepsToShow: 2});
 ```
 
 
Using the option `peeps`, you can specify the selector for each child object that may be put into the collapsible view. Of course, this can be any selector so in the above example you could set `peeps` to `'div'` instead, however you might not want to do this if the children also have children.
 

#Options to help you do what you done do


| Name                      | Type                   | Default  Value   | Description                                                                                                                                                                        |
| -------------------|-----------------| ----------------|-----------------------------------------------------------------------------------------------------------------|
| peeps                      |string                  | 'li'                       | A selector that specifies the child elements to hide/display.                                                                                        |
| peepsToShow         |integer                | 3                         | Specifies the number of children that will be shown (the rest shall go into the collapsible view.                                |
| peepList Identifier |string                  | 'peeper'              | A class name for the collapsible container (used to determine what should be hidden/displayed.                             |
| expandText            |string                  | 'MORE'               | A string to be used as the text for the button to open the collapsible view.                                                                 |
| expandIdentifier    |string                   | 'peeper-clicker' | A class name for the button that opens the collapsible view.                                                                                       |
| jqueryAnimSpeed  |integer                 | 200                    | Used to define the speed of the jquery animation (if css transitions are not being used)                                           |
| anim                       |string                   | ''                         | Used to define the name of a class to use for a css transition (if empty, jquery will be used instead)                       |
| animClose             |string                   | 'closed'              | Used to define the name of a class which sets the close stylings for a css transition                                                |


#License I guess...

Peeper is under the [MIT](//opensource.org/licenses/MIT) License.