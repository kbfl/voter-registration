window.setInterval(function () {
  var t = (Math.floor(Date.now()/1000)-1459353600)/86400;
  var formGenerated = (
    6500+(
      Math.floor(
        288/2*(
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
