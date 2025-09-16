$('#dropdown-btn').on('click', function () {
  alert("hi");
    const panel = $('#nav-dropdown');
    
    if (panel.is(':visible')) {
      panel.slideUp(300);
    } else {
      panel
        .css('display', 'flex') // <-- keep flex
        .hide()
        .slideDown(300);
    }
  });