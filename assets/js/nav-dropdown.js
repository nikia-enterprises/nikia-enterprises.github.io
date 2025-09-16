
$('#dropdown-btn').on('click', function () {
    const panel = $('#nav-dropdown');
    const svg = $('#dropdown-btn svg');
    const border = $('#nav-border');
    
    if (panel.is(':visible')) {
      panel.slideUp(300);

      svg
        .removeClass('fill-primary')
        .addClass('fill-black');
      border
        .removeClass('border-primary')
        .addClass('border-greyed');
    } else {
      panel
        .css('display', 'flex') // <-- keep flex
        .hide()
        .slideDown(300);
      svg
        .removeClass('fill-black')
        .addClass('fill-primary');
      border
        .removeClass('border-greyed')
        .addClass('border-primary');
    }
    console.log(svg);
  });