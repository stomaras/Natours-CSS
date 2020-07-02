# Natours-CSS


# User Interfaces 

  # UI Development Basics 
  
  # Cascades:
    	The "C" in CSS stands for cascading. This refers to how CSS rules are applied to the DOM.It's possible for more than one style rule to apply to an HTML element.
      For instance, pretend we have a div containing filler text, like this "
      <div class="eassy-container">
        <p class = "eassy-text">
          Class aptent dkncsdlcsdlsnsdvl
        </p>
       </div>
       
   if this HTML was linked to a stylesheet that included the following two rules...
      .eassy-container {
        color: red
      }
      
      .eassy-container {
        color: blue;
      }
      
  We have a conflict.You see, both rules attempt to change the font color of the same element. When this occurs , cascading determines the order conflicting styles are applied
  , and therefore which 'overrides' the other. Here, the color:blue, declaration occurs after the color:red, declaration. So the font color in this div will be blue.
  
  Style rules are applied to elements in the order they are loaded. The font in the div will reeive instructions to be red. But when the browser reads and applies the next rule
  , the div will receive instructions to be blue instead. So when the page loads, we will see blue text.
  
  
  
 # ID's are unique:
 
  - Each element can have only one ID 
  - Each page can have only one element with that ID
  
 # Classes
 
  - You can use the same class on multiple elements 
  - You can use multiple classes on the same element
  
 # There are no browser defaults for any ID or Class
 
  - Adding a class name or ID to an element does anything to that element by default.
  - Classes and ID's don't have any styling information to them all by themselves, They require CSS to target them and apply styling
  
 # ID's have special browser functionality
 
  - Classes have no special abilities in the browser, but ID's do have one very important trick up their sleeve. This is the "hash value" in the URL.if you have a URL 
    like http://yourdomain.com#comments, the browser will attempt to locate the element with an ID of "comments" and will automatically scroll the page to show that element. It 
    is important to note here that the browser will scroll whatever elements it needs to in order to show that element, so if you do something like a scrollable DIV area within 
    your regular body, that div will be scrolled to.
    
    This is an important reason right here why having ID's be absolutely unique is important.So your browser knows where to scroll.
    
  # Elements can have both 
  
   - There is nothing stopping you from having both an ID and Class on a single element. In fact, it is often a very good idea. Take for example the default markup 
     for a wordpress comment list item: <li id="comment-1256" class="item">




# BEM METHODOLOGY

  - Block - Element - Modifier
  
    1) Block: Standalone entity that is meaningful on its own. ( Examples : menu, header, container, menu, checkbox, input )
    
    2) Element: A part of a block that has no standalone meaning and is semantically tied to its block. ( Examples : menu__item, list item, checkbox caption )
    
    3) Modifier: A flag on a block or element. Use them to change appearance or behaviour. ( Examples : menu__item--disabled, checked, fixed, size big, color yellow )
    
 # CSS Style Vocabulary :
 
    Here, lines reading height:100px are style declarations. Every declaration has two parts, formatted as key-value pair
      1) A property(height or width )
      2) A value ( for example 100px)
    Multiple declarations grouped together under a selector are called a declaration block
      height : 100px;
      width : 100px
      selector: A declaration block is prefixed with a selector telling the browser which elements the style declarations will aplly to
      #kitten-picture {
      
      }
    The combination of a declaration block and selector together is called a rule:
      #kitten-picture {
        height:100px;
        width:100px;
      }
    Multiple rules together in a file is called a stylesheet.
    
    
 # Advanced Selectors,
 
  refer to CSS selectors that do something more complex than selecting a tag, class, or ID. This includes selecting a type of tag within another tag, or selecting an element 
  with a certain ID or class, but only when the mouse is hovering over it.
  
  # Selector Stacking 
  A stacked selector selects multiple types of elements. Elements are listed on the same line preceding the CSS rule, seperated by a comma like this :
  a, strong {
    color:red;
  }
  In this example , all <a> and <strong> tags will be colored red. Stacking selectors helps keep stylesheets DRY by applying similar styles to multiple elements in a single rule
  
  # ALL/Universal selector
  The all selector , also called the universal selector , is denoted by the * symbol. It selects everything in HTML.
  *{
    margin:0
  }
  This is most commonly used for reseting default browser styles. For instance, the example above resets the margin of every element to 0.
  
  # Direct Descendant Selector
  The direct descendant selector selects children nested a single layer deep within the DOM.It's denoted with the > symbol. The left side of the symbol contains the parent,
  and the right side contains the direct descendent we are targeting, like this 
  
  .container > ul {
    border: 4px solid red;
  }
  If this rule was applied to the following HTML, one <ul> would have a red border, and one would not, because only one is a direct descendant of the div with a container class.
  
  ...
  <div class="container">
    // This <ul> would have a red border, bcause it's nested directly within a parent with the class 'container'
    <ul>
      <li>One</li>
      <li>Two</li>
    <uL>
      // The second <ul> would not have a red border, because it is not directly within the 'container' <div>
    <ul>
      <li>...</li>
      <li>...</li>
    </ul>
  </div>
  
  
 # Adjacent Selector
 
 The adjacent selector, denoted by the + symbol, isolates elements of a certin type, but only if they immediately follow another specific type.
 For instance, the rule below will turn contents of <p> elements red, but only if they immediately follow a <ul>:
  
  ul + p {
    color:red; 
  }
  
 # Simbling Combinator
  We cann use the simbling combinator by adding a ~ symbol between two elements in a selector, like this:
  
  ul ~ p {
    color:red;
  }
  This will select any paragraph following the <ul>. Any <p> before <ul> will not inherit the style.Notice this is different from the adjacent selector in that all <p>
  tags following a <ul> will have the style applied, not just the most immediate.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
# 7-1 Architecture pattern SASS

  sass/
  |
  |- abstracts/
  |   |- _variable.scss    # Sass Variables
  |   |- _mixins.scss      # Sass Mixins
  |
  |- vendors/
  |   |- _bootstrap.scss   # Bootstrap
  |
  |- base/
  |   |- _reset.scss       # Reset / normalize
  |   |- _typography.scss  # Typography rules
  |
  |- layout/
  |   |- _navigation.scss  # Navigation
  |   |- _grid.scss        # Grid System
  |   |- _header.scss      # Header
  |   |- _footer.scss      # Footer
  |   |- _sidebar.scss     # Sidebar
  |   |- _forms.scss       # Forms
  |
  |- components/   
  |   |- _buttons.scss    # Buttons
  |   |- _carousel.scss   # Carousel
  |   |- _cover.scss      # Cover
  |   |- _dropdown.scss   # Dropdown
  |
  |- pages/
  |   |- _home.scss       # Home specific styles
  |   |- _contact.scss    # Contact Specific styles
  |
  |- themes/
  |   |- _theme.scss      # Default theme
  |   |- _admin.scss      # Admin theme
  |
  - main.scss             # Main Sass input file
  
  As we can see, everything is in a big sass directory. At the top level of the directory is a single main.scss file(this is the input file)and seven subdirectories:
  # 1. abstracts 
     Contains no actual styles, just Sass mechanisms that help define styles in other directories(sometimes called "helpers").
     This includes things like global variables, functions, and mixins. Each of these categories should be placed in their own appropriately-named partial file, as seen above.
  # 2. vendors 
     Contains any third-party stylesheets a project uses. For instance, if we wanted to use Bootstrap 4 alongside our own custom Sass in a project, we'd download the Bootstrap
     stylesheet and place it here.
  # 3. base
     Contains boilerplate used throughout an entire site. This includes project-wide typography styles, and stylesheets that universally reset or normalize default CSS.
  # 4. layout 
    contains styles for different aspects of the site's structural layout (think of areas like nav bars, headers, footers, etc.)

  # 5. components 
    are like "mini" layouts. Styles for small, reusable pieces of the site should reside here (think buttons, forms, profile pictures, etc.)

  # 6. pages
    is where page-specific styles reside. For instance, if a project contained several style rules that are only ever used on the "Contact Us" page, 
    they'd live here in a _contact.scss file, as seen above.

  # 7.themes 
    is used whenever a site has multiple themes. For instance, the example project above includes both admin and default themes. We can therefore assume
    this example site is styled entirely differently for logged-in admins. Perhaps to better present and accommodate the additional features an Admin has. 
    Some websites also offer a "night mode", where the background of the site is darker with lighter-colored text for easier reading in low-light environments. 
    An option like this would be represented in its own theme file too.
