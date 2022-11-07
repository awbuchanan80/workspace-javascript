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
    guestgroup.push(guest);
    console.log(guestgroup);
}
