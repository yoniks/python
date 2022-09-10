



$( document ).ready(function() {





        const img_cards= document.querySelectorAll("#may-like-items").length
          for(let i=0;i<img_cards;i++){

            document.querySelectorAll("#may-like-items")[i].addEventListener("click",function(){
            //disabled=true;
            document.querySelectorAll("#may-like-items").disabled=true;
            const sku = document.querySelectorAll("#Items-Sku-Card")[i].textContent;


               ref = $.ajax({
                  type: "POST",
                  url: "/home/products/display/item",
                  data: {sku:sku}
               });
               ref.done(function(data){
                    $('#refresh-single-item').fadeOut(500).fadeIn(500);
                    $('#refresh-single-item').html(data);
                    document.querySelectorAll("#may-like-items").disabled=false;

               });


          });
       }

//show cart

       document.querySelector("#show_cart_to_user").addEventListener("click",function(){
            //disabled=true;
           start =  setTimeout(function(){// play delay 1 second
            document.querySelectorAll("#show_cart_to_user").disabled=true;
             window.location.href="/home/cart/add/order/user";
            document.querySelectorAll("#show_cart_to_user").disabled=false;

               clearTimeout(start);
              },500);

      });

//email
      document.querySelector("#form-submit").addEventListener("click",function(){
           const subscript_email = document.querySelector('input[name="email-subscript"]');

             $.ajax({
             type: "POST",
             url: "/home/send/email/to/subscript",
             data: JSON.stringify(subscript_email.value),
             contentType: "application/json",
             dataType: 'json'
           }).done(function(data){
              if(data.received=="sent"){
                  alert("received");
              }

           });
      });







   });