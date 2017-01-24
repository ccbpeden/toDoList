//back end logic

function Tasks (taskName, taskDescription, taskDueDate, taskCompleted) {
  this.taskName = taskName;
  this.taskDescription = taskDescription;
  this.taskDueDate = taskDueDate;
  this.taskCompleted = taskCompleted;
};

var anotherTask;

//front end logic
$(function(){
  $("form#inputTask").submit(function(event){
    event.preventDefault();
    var inputtedTaskName = $("input#taskName").val();
    var inputtedTaskDescription = $("input#taskDescription").val();
    var inputtedtaskDueDate = $("input#taskDueDate").val();

    var newTask = new Tasks(inputtedTaskName, inputtedTaskDescription, inputtedtaskDueDate, false);

    $("ol#taskList").append("<li id='" + newTask.taskName + "'><span class='currentTask'> " + newTask.taskName + "</span></li>");

    $(".currentTask").last().click(function(){
      $("#show-tasks").toggle();
      $(".description").text(newTask.taskDescription);
      $(".dueDate").text(newTask.taskDueDate);
      anotherTask = newTask;
    });
  });
  $('button#delete').click(function() {
   $('#show-tasks').toggle();
   $("#"+anotherTask.taskName).remove();
  });
});
