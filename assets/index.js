$(function () {
  window.setInterval(function () {
    var t = (Math.floor(Date.now()/1000)-1461686400)/86400;
    var formGenerated = (
      8500+(
        Math.floor(
          1160/4*(
            t-(
              (Math.sin(2*Math.PI*t))/(2*Math.PI)
            )
          )
        )
      )
    );
    var seatFormRatio =  Math.round(formGenerated/47300*100*10)/10 ;
    $('.formGenerated').text(formGenerated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    $('.seatFormRatio').text(seatFormRatio.toString()+"%");
  }, 1000);

  var parent = $(".partner-container");
  var divs = parent.children();
  while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  }
});
