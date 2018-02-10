 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
    $('.timeline-wrapper').hide();

    var myFacebookToken = 'EAACEdEose0cBAAc3ZCoZBxWhXK0ZAdbzDaZCvVQTUZC0Ve7ft191wstdpwYXWSjsB4k1InJ6ZBZBRoUZCydrmqpOvwlbpc0QrSmHhRaK5t9AKGeeIYvxsva67hwJBBM4G9gzH7ABs75ZBK9IyBKrfbPqst7OUXMwJJfBF1MbcZBFOd0LmQ6huMMb4rrm6J3u9YnrcBYRVVFaFfDwZDZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);

                }
            }


            //end argument list
                    // error message
             error : function(request,errorType,errorMessage){

                console.log(request);
                console.log(errorType);
                alert(errorMessage);
            },
               // error message ends
        );// end ajax call
        beforeSend : function(){

            $('.timeline-wrapper').show();

        },

        complete : function(){

           $('.timeline-wrapper').hide();

        }

    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });
