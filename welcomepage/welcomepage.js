$(document).ready(function() {
    
$( function() {
    $( "#dialog" ).dialog();
  } );

var surveyJSON = {pages:[{name:"page1",elements:[{type:"checkbox",name:"question2",title:"Which resource(s) did you use? You can pick more than one.",choices:[{value:"item1",text:"Responding to Microaggressions"},{value:"item2",text:"Being an Ally"},{value:"item3",text:"How to ask questions"},{value:"item4",text:"None"}]},{type:"rating",name:"question5",title:"How prepared do you feel to handle future situations involving microaggressions?",minRateDescription:"Not prepared",maxRateDescription:" Very prepared"},{type:"radiogroup",name:"question3",title:"Would you recommend this resource to someone else?",choices:[{value:"item1",text:"Yes"},{value:"item2",text:"Maybe"},{value:"item3",text:"No"}]},{type:"comment",name:"question4",title:"Which resource was the most helpful and why? Please explain."},{type:"comment",name:"question1",title:"Any comments, questions, or suggestions? Please let us know!"}]}],sendResultOnPageNext:true}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    survey.sendResult('75a924a6-a0d8-40b5-a8ed-d6d59edf7720');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
  
});