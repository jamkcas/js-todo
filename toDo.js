function addToList(item, time) {
  $('.toDo').append('<li><button class="delete">Delete</button><span>Due: ' + time + '</span><input type="checkbox" />' + item + '</li>'); // Creates a li element that includes a delete button, the passed in time, and the passed in list element, then adds it to the toDo class
}

function checkOff(event) {
  // $(event.target).change();  // Toggle the checked button
  var $item = $(event.target).parent(); // Assign $item variable to its parent li element
  $item.addClass('done'); // Add the done class to the current li (which does the line strikethrough and text color change)
  $('.completed').append($item); // remove the item from the to do list and add it to the completed list
  // $('.completed').append($(event.target).parent().addClass('done')); // does lines 7-10
}

function unCheckOff(event) {
  // $(event.target).change(); // Toggle the checked button
  var $item = $(event.target).parent();
  $item.removeClass('done');
  $('.toDo').append($item);
  // $('.toDo').append($(event.target).parent().removeClass('done'));
}

function deleteItem(event) {
  $(event.target).parent().fadeOut(2000, function(){ // When delete is selected, its parent li fades out in 2 secs, then is removed from the list completely
    $(this).remove();
  });
}


// The on load function
$(function() {

  $('.toDo').on('click', 'input', checkOff); // Delegates a click event to existing and future inputs on toDo class to call the checkOff function
  $('.completed').on('click', 'input', unCheckOff); // Delegates a click event to existing and future inputs on completed class to call the unCheckOff function
  $('.toDo').on('click', 'button', deleteItem); // Delegates a click event to existing and future inputs on toDo class to call the deleteItem function
  $('.completed').on('click', 'button', deleteItem); // Delegates a click event to existing and future inputs on completed class to call the deleteItem function

  // Creating a click event for when the form is submitted
  $('.submit').on('click', function(e){
    e.preventDefault(); // Prevents the default action which would refresh the page
    var $input = $('.input').val(); // Assigns the user input value to $input variable
    var $date = $('.date').val(); // Assigns the date input value to $date variable
    addToList($input, $date); // Runs the addToList function passing in the $input and $date as parameters
    $('.input').val(""); // Reset the user input value
    $('.date').val(""); // Reset the date input value
  });

});
