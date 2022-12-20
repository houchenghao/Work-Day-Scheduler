


function saveEventsToStoreage(Events){
  localStorage.setItem("Scheduler",JSON.stringify(Events));
}

function readEventsFromStoreage(){
  var Events= localStorage.getItem("Scheduler");
  if(Events){
    Events = JSON.parse(Events);
  }else{
    Events = [];
  }
  return Events;
}

function displayEventsToScheduler(){
  Events = readEventsFromStoreage();
  //console.log(Events);

   var timerContainer = $('.container-lg').children();
   //console.log(timerContainer);



  for (let i = 0; i<timerContainer.length; i++){

    for(let j = 0; j<Events.length; j++){

      if($('.container-lg').children().eq(i).attr('id') === Events[j].TimeId){

        $('.container-lg').children().eq(i).children('textarea').val(Events[j].Event)
        
        
      }
    }
    
  }


}
 

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
  var rootEl = $('#root')
  var saveBtnEl = $('.saveBtn');
  var timeDisplayEl = $('#currentDay');
  var Events =[];
  
  saveBtnEl.on('click',function(){
      
    var inputEvent = $(this).parent().children('textarea').val();
    var inputTimeId = $(this).parent().attr('id');

    var creatEvent = {
      TimeId: inputTimeId,
      Event: inputEvent,
    }

    /*console.log(creatEvent);*/

    // if (inputEvent === ""){
    //   return;
    // }

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
    /*console.log(Events);*/
    
    saveEventsToStoreage(Events);

    $(this).parent().children('textarea').val("");

    // displayEventsToScheduler();


  });

  displayEventsToScheduler()

  setInterval(function(){
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  },1000);







  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time

  //

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


  
});
