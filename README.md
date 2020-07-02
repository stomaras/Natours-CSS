# Natours-CSS

# BEM METHODOLOGY

  - Block - Element - Modifier
  
    1) Block: Standalone entity that is meaningful on its own. ( Examples : menu, header, container, menu, checkbox, input )
    
    2) Element: A part of a block that has no standalone meaning and is semantically tied to its block. ( Examples : menu__item, list item, checkbox caption )
    
    3) Modifier: A flag on a block or element. Use them to change appearance or behaviour. ( Examples : menu__item--disabled, checked, fixed, size big, color yellow )
    
    
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
