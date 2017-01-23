//back end logic

function Tasks (taskDescription, taskDueDate, taskCompleted) {
  this.taskDescription = taskDescription;
  this.taskDueDate = taskDueDate;
  this.taskCompleted = taskCompleted;
};


//front end logic
$(function(){
  $("form#inputTask").submit(function(event){
    event.preventDefault();
    var inputtedTaskDescription = $("input#taskDescription").val();
    var inputtedtaskDueDate = $("input#taskDueDate").val();

    var newTask = new Tasks(inputtedTaskDescription, inputtedtaskDueDate, false);

    
  });
});
