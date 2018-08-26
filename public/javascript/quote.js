//
// ARPIE.js
//
$(document).ready(function() {
  console.log('Ready Eddy');

  Keen.ready(function(){
  const client = new Keen({
      projectId: '5b4e4c9bc9e77c000175c383',
      writeKey: '510542BAA562677F99956A7303C01E82AD2E718214CEC72E208445BBC40CBFE80C10E638271C5A78BFCCD6723D15181DAEF78CDCC409B8939A84C190F2233B1FAD53F5D9DEE29A6CE20742A3BE2DF83A7ADB3194B8AEABC5B1F305B99AC83ED6'
    });



    $("#quoteButton").click(()=>{
      $("#error").hide();
      console.log('HI');
      var data = {};

      data.firstName = $("#firstName").val();
      data.lastName = $("#lastName").val();
      data.company = $("#company").val();
      data.phone = $("#phone").val();
      data.email = $("#email").val();
      data.location = $("#location").val();
      data.jobSize = $("#jobSize").val();
      data.jobDescription = $("#jobDescription").val();

      data.services = [];
      // loop through all checked options
      $("input:checked").each(function () {
          data.services.push( $(this).val() );
      });
      // console.log(data);


      // check to see if all the fields are there
      if (data.phone || data.email) {
        // Record an event
        client.recordEvent('quote', {
          freeQuote: data
        });

        // Redirect
        window.location.replace("./thankyou.html");
      }
      else {
        // give notice that fields aren't filled out
        window.scrollTo(0, 0);
        console.log('Nope');
        $("#error").show();
      }

    });
    // End quotebutton
  });
  // End Keen.ready
});
// End document.ready
