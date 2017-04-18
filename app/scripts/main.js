$(function() {

  var breakpoint = {};
  var columns = {};
  breakpoint.refreshValue = function () {
    this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
  };
  columns.adaptSize = function () {
    if(breakpoint.value != undefined && breakpoint.value != 'bpSmall') {
      $('[data-col="R1"]').height(function() {
        return $('[data-col="L1"]').outerHeight() + 200;
      });

      $('[data-col="L2"]').height(function() {
        return $('[data-col="R2"]').outerHeight() + 400;
      });

      $('[data-col="R3"]').height(function() {
        return $('[data-col="L3"]').outerHeight() + 200;
      });
    }
  };

  $(window).resize(function () {
    // debounce!!!!
    console.log(breakpoint.value);
    breakpoint.refreshValue();
    columns.adaptSize();
  }).resize();

});
