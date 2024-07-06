$(".inner-head").on("click", function (e) {
    if ($(this).next().hasClass("hidden")) {
        $(this).next().slideDown(500, function () {
            $(this).removeClass('hidden')
        });
    }
    else {
        $(this).next().slideUp(500, function () {
            $(this).addClass('hidden')
        });
    }
})






var countDownDate = new Date("Aug 6, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var Clock = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(".inner-days").text(days + "d");
  $(".inner-hours").text(hours + "h");
  $(".inner-mints").text(minutes + "m");
  $(".inner-secs").text(seconds + "s");


  $("textarea").on("input",function(){
    let charCount = $(this).val().length;
    let remaining= 100 - charCount;
    $(".char").text(remaining);
}) 
}
,1000)


