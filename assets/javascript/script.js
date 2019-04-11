var config = {
    apiKey: "AIzaSyCHdKPWLSz5QFlgHD6kMOs7Nk9hZX1ki3Q",
    authDomain: "train-project-c8982.firebaseapp.com",
    databaseURL: "https://train-project-c8982.firebaseio.com",
    projectId: "train-project-c8982",
    storageBucket: "train-project-c8982.appspot.com",
    messagingSenderId: "412017456980"
};
firebase.initializeApp(config);

var database = firebase.database();

console.log(database);

$(document).ready(function() {


$("#add-train").on("click", function(event) {
    event.preventDefault();
console.log("clicked!");

var trainName = $("#train-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var trainTime = $("#time-input").val().trim();
var trainFrequency = $("#frequency-input").val().trim();

console.log(trainName);

var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
};

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.time);
console.log(newTrain.frequency);


});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());


    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;

    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);


    // var tFrequency = 3;
    // var firstTime = "3:00";
    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // var time = moment();
    // console.log("CURRENT TIME: " + moment(time).format("hh:mm"));

    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    
    // var trainRemainder = diffTime%tFrequency;
    // console.log(trainRemainder);

    // var minutes = tFrequency - trainRemainder;



    var time = moment();
    console.log(time);
    var timeChange = moment(trainTime, "hh:mm").subtract(1, "years");
    console.log(timeChange);
    var timeDifference = moment().diff(moment(timeChange), "minutes");

    console.log(timeDifference);
    var remTime = timeDifference % trainFrequency
    var timePopsicle = trainFrequency - remTime

    console.log(timePopsicle);
    var arrivingTime = moment().add(timePopsicle, "minutes").format("hh:mm");



    var newItem = $("#name").append($("<p>").text(trainName));
    var newItem = $("#dest").append($("<p>").text(trainDestination));
    var newItem = $("#freq").append($("<p>").text(trainFrequency));
    var newItem = $("#arr").append($("<p>").text(trainTime));
    var newItem = $("#min").append($("<p>").text(arrivingTime));

});

















});