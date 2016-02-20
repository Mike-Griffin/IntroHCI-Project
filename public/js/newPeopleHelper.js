var curList = 0;

$(document).ready(function() {
  $("#completed-list").addClass("list-hide");
  $("#completed-list .list-checkbox").addClass("list-hide");
  $("#completed-list .edit-button").addClass("list-hide");
  $("#completed-list .delete-button").addClass("list-hide");
  $("#myBtn").click(function() {
    $("#myNewActivity").modal();
  });

});

// for SUCCESSFULLY ADDING TASK -->
$('#btnCancel').click(function() {
  $('#task-success').modal('toggle');
});

function deletedClicked() {
  console.log("Deleted");

  $('#addedTask').delay(2000).fadeIn();
  $('#addedTask').delay(2000).fadeOut();
}

function completedClicked() {
  if (curList === 0) {
    curList = 1;
    $("#active-list").addClass("list-hide");
    $("#completed-list").removeClass("list-hide");
    $("#active-button").removeClass("btn-primary");
    $("#completed-button").addClass("btn-primary");
    $("#add-new-button").addClass("list-hide");
    //document.getElementById("completed-list").classList.remove("list-hide");
  }
}


function activeClicked() {


  if (curList === 1) {
    curList = 0;
    $("#active-list").removeClass("list-hide");
    $("#completed-list").addClass("list-hide");
    $("#active-button").addClass("btn-primary");
    $("#completed-button").removeClass("btn-primary");
    $("#add-new-button").removeClass("list-hide");
  }


}
