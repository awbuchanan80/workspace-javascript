var test = {
    hotelname: "merriot",
    room: 350,
    booked: 120,
    display:function (){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.room);
$(function(){
    $('#submit').click(reservation);
    $('#lists').click(displayR);
})

var guestgroup = new Array();
function reservation(){
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#numberofguest').val(),
        checkIn: $('#checkin').val(),
        checkOut: $('#checkout').val(),
        roomNo: $('#roomNo').val()
    };
    $("p:first").html("Thank you for your reservation!");
    guestgroup.push(guest);
    console.log(guestgroup);
}

function displayR(){
    $("form").append("<table>");
    for(var i in displayR){
        var theguest = displayR[i];
        var row = "<tr><td>"+theguest.name+"</td>"+"<td>"+theguest.numberofGuest+"</td>"+"<td>"+theguest.checkin+"</td>"+"<td>"+theguest.checkout+"</td>"+"<td>"+theguest.roomNo+"</td></tr>";
        $("table").append(row);
    }



}