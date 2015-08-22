



//////////////////
// ADD CALENDER //
//////////////////
function loadCalendar() {
  console.log("Load Calendar")
  $("#my-calendar").zabuto_calendar({
    data: eventData,
    cell_border: true,
    today: true,
    year: 2015,
    month: 4,
    show_previous: 6,
    show_next: 6,
    action: function () {
      $("#loading").attr('style', 'width:5%');
      return myDateFunction(this.id);
    }
  });
};

///////////////////////
// CALENDER DATA ADD //
//////////////////////
function myDateFunction(id) {
  $("#date-popover").hide();
  var date = $("#" + id).data("date");
  var hasEvent = $("#" + id).data("hasEvent");
  $("#dateArea").html('<strong>Date :</strong> '+ date);
  parser("SCADA/"+date)
  return true;
}

//////////////////////////
// CALENDER DATA LISTNER//
//////////////////////////
function myNavFunction(id) {
  $("#date-popover").hide();
  var nav = $("#" + id).data("navigation");
  var to = $("#" + id).data("to");
  console.log('nav ' + nav + ' to: \ + to.month' + '/' + to.year);
}
