/*global $ */ 
$(function() {
  $("#draggableq1").draggable();

  $("#draggableq2").draggable();

  $("#draggableq21").draggable();

  $("#draggableq3").draggable();

  $("#draggableq4").draggable();

  $("#rejectq11").draggable({ revert: true });
  $("#rejectq12").draggable({ revert: true });
  $("#rejectq13").draggable({ revert: true });

  $("#rejectq21").draggable({ revert: true });
  $("#rejectq22").draggable({ revert: true });
  $("#rejectq23").draggable({ revert: true });

  $("#rejectq31").draggable({ revert: true });
  $("#rejectq32").draggable({ revert: true });
  $("#rejectq33").draggable({ revert: true });

  $("#rejectq41").draggable({ revert: true });
  $("#rejectq42").draggable({ revert: true });
  $("#rejectq43").draggable({ revert: true });

  $("#droppableq1").droppable({
    drop: function(event, ui) {
      $(this)
        .addClass("ui-state-highlight")

        .find("p")
        .html(
          "You meet someone and are curious about what their ethnicity is. <br/>Which way would be the best way to ask? <br>(Drag the correct answer to this box.)"
        );
      $("#droppableq2").droppable({
        drop: function(event, ui) {
          $(this)
            .addClass("ui-state-highlight")

            .find("p")
            .html(
              "You're sitting in class and need help with a math problem. <br/>You want to ask your desk mate for help.<br>(Drag the correct answer to this box.)"
            );

          $("#droppableq3").droppable({
            drop: function(event, ui) {
              $(this)
                .addClass("ui-state-highlight")

                .find("p")
                .html(
                  "You are meeting the new person at work, and they are a person of color.<br>(Drag the correct answer to this box.)"
                );

              $("#droppableq4").droppable({
                drop: function(event, ui) {
                  $(this)
                    .addClass("ui-state-highlight")

                    .find("p")
                    .html(
                      "Your friend comes to work that day wearing their hair natural. What's the best way to respond? <br/>(Drag the correct answer to this box.)"
                    );
                }
              });
            }
          });
        }
      });
    }
  });
});
