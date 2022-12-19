var rootEl = $('#root')
var saveBtnEl = $('.saveBtn');
var textCenterEl = $('.text-center')
var eventIndex = 0;
var Events =[];



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () { 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtnEl.on('click',function(){
      
    
    var inputEvent = $(this).parent().children('textarea').val();
    var inputTimeId = $(this).parent().attr('id');

    console.log(inputTimeId);
    console.log(inputEvent);

    var creatEvent = {
      TimeId: inputTimeId,
      Event: inputEvent,
    }

    console.log(creatEvent);

   

    if (inputEvent===""){
      return;
    }

   
    if(Events.length === 0){
      Events.push(creatEvent);
    }else{
      for(let i = 0; i < Events.length; i++){
        if (Events[i].TimeId !== creatEvent.TimeId){
           if (i===((Events.length)-1)){
             Events.push(creatEvent);
             break;
           }
           continue;
         }else{
           Events[i].Event = creatEvent.Event;
           break;
         }
       }
    }





    /*Events[i].Event = creatEvent.Event;*/
    
    console.log(Events);

  

    



    /*localStorage.setItem(inputTimeId,inputEvent);*/


    /*console.log($(this).parent().children('textarea').val());
    console.log($(this).parent().attr('id'));*/
    /*Events.time.push($(this).parent().attr('id'));
    Events.thisEvent.push($(this).parent().children('textarea').val());*/





    /*localStorage.setItem("Events",JSON.stringify(Events));*/
    
  

    
  });

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  /*for (var i = 0; i < letters.length; i++) {
    // Create button
    var letterBtn = $('<button>');
    // Assign style to the button
    letterBtn.addClass('letter-button btn btn-info');
    // Assign the letter to the data-letter attribute
    letterBtn.attr('data-letter', letters[i]);
    // Display the letter
    letterBtn.text(letters[i]);
    // Attach the letter element
    buttonListEl.append(letterBtn);
  }*/



});
