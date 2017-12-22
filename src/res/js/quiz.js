function toggleIndicators() {
  $('.tt').popover('toggle');
  $("iframe").contents().find(".phishy-highlight").toggleClass('popover-section');
}

function sendAnswer(option) {
  $('#form_option').val(option);
  $( "#questionform" ).submit();
}
