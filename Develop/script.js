$(function () { 
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
    
     var timerContainer = $('.container-lg').children();
     
    for (let i = 0; i<timerContainer.length; i++){
      for(let j = 0; j<Events.length; j++){
        if(timerContainer.eq(i).attr('id') === Events[j].TimeId){
          timerContainer.eq(i).children('textarea').val(Events[j].Event)
        }
      }
      
      //change id to only number
      if (parseInt(timerContainer.eq(i).attr('id').slice(5,7)) > parseInt(dayjs().format('H'))){
        timerContainer.eq(i).removeClass('past');
        timerContainer.eq(i).removeClass('present');
        timerContainer.eq(i).addClass('future');
      }
  
      if (parseInt(timerContainer.eq(i).attr('id').slice(5,7)) === parseInt(dayjs().format('H'))){
        timerContainer.eq(i).removeClass('past');
        timerContainer.eq(i).removeClass('future');
        timerContainer.eq(i).addClass('present');
      }
  
      if (parseInt(timerContainer.eq(i).attr('id').slice(5,7)) < parseInt(dayjs().format('H'))){
        timerContainer.eq(i).removeClass('present');
        timerContainer.eq(i).removeClass('future');
        timerContainer.eq(i).addClass('past');
      }
    }
  }
  




  var saveBtnEl = $('.saveBtn');
  var timeDisplayEl = $('#currentDay');
  
  
  //Define Events in displayEventsToScheduler
  displayEventsToScheduler();

  saveBtnEl.on('click',function(){
      
    var inputEvent = $(this).parent().children('textarea').val();
    var inputTimeId = $(this).parent().attr('id');
    var creatEvent = {
      TimeId: inputTimeId,
      Event: inputEvent,
    }

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
    
    saveEventsToStoreage(Events);

    $(this).parent().children('textarea').val("");

    displayEventsToScheduler();

  });

  displayEventsToScheduler()

  setInterval(function(){
    var rightNow = dayjs().format('dddd, MMMM DD');
    timeDisplayEl.text(rightNow);
    displayEventsToScheduler
  },1000);

});
