Carousel.js
===========

# Dependencies

  - jquery.js (required)
  - jquery.animate-enhanced.js (optional)

# Initialization

After you've included jQuery (and any other external script files), you can
initialize your carousel following the form new $.carousel([el], [options]):

    var carousel = new $.carousel('#carousel ul', {height: 438, width: 700});

# Optional Parameters

El (element) is required, however you can also pass in a hash of optional parameters to
override the defaults.

  - itemSel (item selector)
  - height (integer)
  - width (integer)
  - nextSlideSel (next button selector)
  - prevSlideSel (previous button selector)
  - duration (jQuery fade duration, integer or string)
  - easing (jQuery easing)
  - nextCallback (function)
  - prevCallback (function)
