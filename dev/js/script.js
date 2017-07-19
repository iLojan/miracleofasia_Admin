jQuery.noConflict();

(function($){

	'use strict';

	/*
	* document ready function
	*/
	$(function() {

		var starColor = '#279257';

		$('.parallax-window').parallax();

		$('.slick').slick({
			  dots: false,
			  infinite: false,
			  speed: 300,
			   slidesToShow:5,
			  slidesToScroll: 1,
			  responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    }
			  ]
			});

			$("#ex2").slider({
				tooltip: 'always'
			});

			$("#ex3").slider({
				tooltip: 'always'
			});

			$('.rating').each(function(){
				var val = $(this).data('value');
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '12px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: true
					});
				}
			});


			$('#slick2').slick({
			//   infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000
			});

                        
			$('#lin1').click(function(){
                 $("#sec1").show();
				 $("#sec2").hide();
				 $("#sec3").hide();
				 $("#lin1").css({'text-decoration': 'underline','color':'black','font-weight': 'bold'});
				 $('#lin2').addClass('lin');
				 $('#lin3').addClass('lin');
				 $("#lin2").css({'text-decoration': 'none'});
				 $("#lin3").css({'text-decoration': 'none'});



			});
			$("#ada").click(function(){
                $(".requ1").show();
				$("#ada1").show();
				$("#ada").hide();
			});
			$("#ada1").click(function(){
                $(".requ1").hide();
				$("#ada1").hide();
				$("#ada").show();
			});




			$('#lin2').click(function(){
                $("#sec2").show();
				$("#sec1").hide();
				$("#sec3").hide();
                $("#lin2").css({'text-decoration': 'underline','color':'black','font-weight': 'bold'});
				 $('#lin1').addClass('lin');
				 $('#lin3').addClass('lin');
				 $("#lin1").css({ 'text-decoration':'none'});
				 $("#lin3").css({'text-decoration':'none'});
			});
			$('#lin3').click(function(){
                $("#sec3").show();
				$("#sec1").hide();
				$("#sec2").hide();
				$("#lin3").css({'text-decoration': 'underline','color':'black','font-weight': 'bold'});
			     $('#lin2').addClass('lin');
				 $('#lin1').addClass('lin');
				 $("#lin2").css({'text-decoration': 'none'});


			});

			$('#yes').click(function(){
				$('#food').show("slow");
			});
			$('#no').click(function(){
				$('#food').hide("slow");
				$('#per').hide("slow");
			});

			$('#guepay').click(function(){
				$('#per').show("slow");
			});
			$('#includ').click(function(){
				$('#per').hide("slow");
			});
			// calenter
			$('.date').datepicker();



			// end

					$("#analytics").click(function(){
						$("#anal-sun").toggle();
						$("#finance-sub").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();

					});

			     $("#finance").click(function(){
                        $("#finance-sub").toggle();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();

			   });
			     $("#rate").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").toggle();
						$("#property-sub").hide();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();
			   });
			      $("#property").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").toggle();
						$("#opportunities-sub").hide();
						$("#guest-sub").hide();
			   });
			      $("#opportunities").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").toggle()
						$("#guest-sub").hide();
			   });
			      $("#guest").click(function(){
                        $("#finance-sub").hide();
						$("#anal-sun").hide();
						$("#rate-sub").hide();
						$("#property-sub").hide();
						$("#opportunities-sub").hide()
					    $("#guest-sub").toggle();
			   });


			   $(".Tennis").click(function(){

                 $("#TennisEquipment").toggle();

			   });
			    $('#Tennis').click(function() {
					if ($(this).is(':checked')) {
						 $("#TennisEquipment").toggle();
					}
				});



					$("#userimg1").change(function(){
						userimg(this);

					});

					$("#hotelimg").change(function(){
						hotelimg(this);
					});
					$("#hotelhome").change(function(){
                         hotelhome(this);
			         });
					 $("#roomhome").change(function(){
                         roomhome(this);
			         });




					$('#american').click(function(){
							$('#americancheck1').addClass("glyphicon glyphicon-ok");
							$("#americanhide").css({   ' border':' 1px solid #279257','background' : '#b5ea96','color':'black'});
							$("#americanhide").show();
							$('#american').hide();
					});
					$('#americanhide').click(function(){
								$('#americancheck1').removeClass("glyphicon glyphicon-ok");
								$("#americanhide").hide();
								$('#american').show();
					});
					$('#asia').click(function(){
						$('#asiacheck1').addClass("glyphicon glyphicon-ok");
					});

					$("#transport").change(function(){
						var seats = $("#transport").val();
					transport(seats);

		         	});

            $("#location").click(function(){
               $("#Locaop").slideToggle("slow");
			    $("#showstar").hide();
			   $("#showcut").hide();
			   $("#showeco").hide();
			});
			$("#star").click(function(){
               $("#Locaop").hide();
			   $("#showstar").slideToggle("slow");
			   $("#showcut").hide();
			   $("#showeco").hide();
			});

			$("#customer").click(function(){
               $("#Locaop").hide();
			   $("#showstar").hide();
			   $("#showcut").slideToggle("slow");
			    $("#showeco").hide();
			});
			$("#economy").click(function(){
               $("#Locaop").hide();
			   $("#showstar").hide();
			   $("#showcut").hide();
			   $("#showeco").slideToggle("slow");

			});

			$('#hideTR').click(function(){
				$('#showTR').show();
				$('#hideTR').hide();
			});
			$('#cancel').click(function(){
                $('#showTR').hide();
				$('#hideTR').show();
			});

			$('.addroom2').click(function(){
                 $('#addnewroom').show();
				 $('#roommain').hide();
			});
			$('#editroom').click(function(){
                 $('#roomeditde').show();
				 $('#roommain').hide();
			});

			$('.addhotel2').click(function(){
                 $('#addnewhotel').show();
				 $('#hotelmain').hide();
			});
			$("#edithotel").click(function(){
                $("#edithotelshow").show();
				$('#hotelmain').hide();
			});
// add new Res type
var num =1;
$("#addsocial").click(function(){
	var socialview =$('.addsocial');
	num +=1;
	var social = '<div class="col-md-12 col-xs-12 col-sm-12 form-group">'
             + '<div class="col-md-6 col-sm-6 form-group">'
             + ' <span>name</span>'
              +' <input type="text" ng-model="name" class="form-control" name=""/>'

             +  '</div>'

   + '   <div class="col-sm-6 col-xs-12 form-group ">'
          +     ' <span> social Url</span>'
           +     '<input type="socialUrl" ng-model="hotel_E-mail" name="socialUrl" placeholder="socialUrl" id="" class="form-control"/>'

            +  '</div>'
            +  '</div>';

            $(socialview).append(social);

});


$("#Propertyservices").click(function(){
	var Propertyservices = $ ('.Propertyservices');
	num +=1;
	var Propertyservices1= '<div class="col-md-12 col-xs-12 col-sm-12 form-group">'
	
             + '<div class="col-md-6 col-sm-6 form-group paddind0">'
               +'<span>service name</span>'
               +'<input type="text" ng-model="servicesName" class="form-control" name=""/>'

     + '         </div>'


+'<div class="col-md-12 col-sm-12 form-group paddind0">'
+'<span>Service Pay</span>'
+'<div class="radio">'

  +'<input type="radio" ng-model="servicesPay" name="pay"/>'
 + '<span>yes</span>'
+'</div>'
+'<div class="radio">'

 + '<input type="radio" ng-model="servicesPay" name="pay"/>'
  +'<span>no</span>'
  +'</div>'
  +'</div>'



+'<div class="col-sm-6 col-xs-12 form-group paddind0">'
                +'<span> amount</span>'
                +'<input type="amount" ng-model="serviceAmount" name="" placeholder="" id="" class="form-control"/>'

            + '</div>'

+'</div>'



              +'<div class="col-md-12"></div>'





+'<div class="col-sm-12 col-xs-12 form-group paddind0">'
               +'<div class="col-sm-4 col-xs-12  nmppaddind0">'
               + '<span> pay type</span>'

                  + ' <select  name="" id="langu" class="form-control">'
                     +' <option value="" ></option>'
                     + '<option value="" ></option>'
                     + '<option value="" ></option>'
                     + '<option value="" ></option>'
                  +  '</select>'

          + '   </div>'



              +' </div>'




+'<div class="col-sm-12 col-xs-12 form-group paddind0">'
               +'<div class="col-sm-4 col-xs-12  nmppaddind0">'
                +'<span> units</span>'

                  + ' <select  name="" id="langu" class="form-control">'
                    +  '<option value="" ></option>'
                    +' <option value="" ></option>'
                     + '<option value="" ></option>'
                   +   '<option value="" ></option>'
                 +  ' </select>'

              +'</div>'




               +'</div>'

                + '<div class="col-sm-12 col-xs-12 paddind0">'
               +  '<div class="col-sm-8 col-xs-12 form-group ">'
               + '<span> shortDescription</span>'

                +'<textarea rows="3" name="short" class="form-control"></textarea>'
               +  '</div>'
             + '</div>'


+'<div class="col-md-12 col-xs-12 Property services"></div>'
               +'<div class="text-muted-ali"> <p id="Propertyservices">add Property services</p></div>'
              + '</div>';

$(Propertyservices).append(Propertyservices1);

});

$("#Propertydetails").click(function(){
var Propertydetails = $('.Propertydetails');
num +=1;
var Propertydetails1 = '<div class="col-md-12 col-xs-12 col-sm-12 form-group">'

               +'<div class="col-sm-5 col-xs-12 form-group  checkin">'
                   +'<div class="col-sm-12 col-xs-12  form-grou  paddind0">'
              +  ' <lable> <strong> Check In </strong></lable></div>'
              + '<div class="col-sm-6 col-xs-12 form-group paddind0">'
               + '<span> From</span>'

              + ' <select  type="text" name="checkinfrom"  id="" class="form-control">'
    +             '<option value="" >Please select</option>'
    +'<option value="07:00" >7:00 &nbsp; AM</option>'
   + '<option value="07:30"  selected >7:30 &nbsp; AM</option>'
   +' <option value="08:00" >8:00&nbsp;AM</option>'
   +' <option value="08:30" >8:30&nbsp;AM</option>'
   + '<option value="09:00" >9:00&nbsp;AM</option>'
    +'<option value="09:30" >9:30&nbsp;AM</option>'
    +'<option value="10:00" >10:00&nbsp;AM</option>'
   + '<option value="10:30" >10:30&nbsp;AM</option>'
    +'<option value="11:00" >11:00&nbsp;AM</option>'
    +'<option value="11:30" >11:30&nbsp;AM</option>'
   +' <option value="12:00" >12:00&nbsp;PM</option>'
    +'<option value="12:30" >12:30&nbsp;PM</option>'
   + '<option value="13:00" >1:00&nbsp;PM</option>'
   + '<option value="13:30" >1:30&nbsp;PM</option>'
   + '<option value="14:00" >2:00&nbsp;PM</option>'
    +'<option value="14:30" >2:30&nbsp;PM</option>'
    +'<option value="15:00" >3:00&nbsp;PM</option>'
    +'<option value="15:30" >3:30&nbsp;PM</option>'
    +'<option value="16:00" >4:00&nbsp;PM</option>'
    +'<option value="16:30" >4:30&nbsp;PM</option>'
    +'<option value="17:00" >5:00&nbsp;PM</option>'
    +'<option value="17:30" >5:30&nbsp;PM</option>'
    +'<option value="18:00" >6:00&nbsp;PM</option>'
   +' <option value="18:30" >6:30&nbsp;PM</option>'
    +'<option value="19:00" >7:00&nbsp;PM</option>'
   + '<option value="19:30" >7:30&nbsp;PM</option>'
    +'<option value="20:00" >8:00&nbsp;PM</option>'
   +  '<option value="20:30" >8:30&nbsp;PM</option>'
    +'<option value="21:00" >9:00&nbsp;PM</option>'
    +'<option value="21:30" >9:30&nbsp;PM</option>'
  + ' <option value="22:00" >10:00&nbsp;PM</option>'
   + '<option value="22:30" >10:30&nbsp;PM</option>'
    +'<option value="23:00" >11:00&nbsp;PM</option>'
   +' <option value="23:30" >11:30&nbsp;PM</option>'
    +'<option value="00:00" >12:00&nbsp;PM</option>'

              + '</select>'
             +' </div>'
              + '<div class="col-sm-6 col-xs-12 form-group">'
              +'<span> To</span>'
                + '<select  type="text" name="checkinto"  id="" class="form-control">'
                 +'<option value="" >Please select</option>'
   + '<option value="07:00" >7:00&nbsp;AM</option>'
   + '<option value="07:30"  selected >7:30&nbsp;AM</option>'
   + '<option value="08:00" >8:00&nbsp;AM</option>'
    +'<option value="08:30" >8:30&nbsp;AM</option>'
    +'<option value="09:00" >9:00&nbsp;AM</option>'
    +'<option value="09:30" >9:30&nbsp;AM</option>'
    +'<option value="10:00" >10:00&nbsp;AM</option>'
    +'<option value="10:30" >10:30&nbsp;AM</option>'
    +'<option value="11:00" >11:00&nbsp;AM</option>'
    +'<option value="11:30" >11:30&nbsp;AM</option>'
   + '<option value="12:00" >12:00&nbsp;PM</option>'
   + '<option value="12:30" >12:30&nbsp;PM</option>'
   +' <option value="13:00" >1:00&nbsp;PM</option>'
    +'<option value="13:30" >1:30&nbsp;PM</option>'
    +'<option value="14:00" >2:00&nbsp;PM</option>'
    +'<option value="14:30" >2:30&nbsp;PM</option>'
    +'<option value="15:00" >3:00&nbsp;PM</option>'
    +'<option value="15:30" >3:30&nbsp;PM</option>'
    +'<option value="16:00" >4:00&nbsp;PM</option>'
    +'<option value="16:30" >4:30&nbsp;PM</option>'
+'<option value="17:00" >5:00&nbsp;PM</option>'
   + '<option value="17:30" >5:30&nbsp;PM</option>'
   + '<option value="18:00" >6:00&nbsp;PM</option>'
   +'<option value="18:30" >6:30&nbsp;PM</option>'
   + '<option value="19:00" >7:00&nbsp;PM</option>'
   + '<option value="19:30" >7:30&nbsp;PM</option>'
   + '<option value="20:00" >8:00&nbsp;PM</option>'
   +  '<option value="20:30" >8:30&nbsp;PM</option>'
   + '<option value="21:00" >9:00&nbsp;PM</option>'
   + '<option value="21:30" >9:30&nbsp;PM</option>'
   + '<option value="22:00" >10:00&nbsp;PM</option>'
   + '<option value="22:30" >10:30&nbsp;PM</option>'
   + '<option value="23:00" >11:00&nbsp;PM</option>'
   + '<option value="23:30" >11:30&nbsp;PM</option>'
   + '<option value="00:00" >12:00&nbsp;PM</option>'

              +'</select>'
              +'</div>'
             + '</div>'
              
              +'<div class="col-sm-5 col-xs-12 form-group  checkin">'
                + '  <div class="col-sm-12 col-xs-12  form-grou  paddind0">'
                +' <label> <strong> Check Out </strong></label></div>'
             + ' <div class="col-sm-6 col-xs-12 form-group paddind0">'
               + '<span> From</span>'
                 +'<select  type="text" name="checkoutfrom"  id="" class="form-control">'
                + '<option value="">Please select</option>'
      
    +'<option value="07:00" >7:00&nbsp;AM</option>'
    +'<option value="07:30"   >7:30&nbsp;AM</option>'
   + '<option value="08:00" >8:00&nbsp;AM</option>'
   + '<option value="08:30" >8:30&nbsp;AM</option>'
  +  '<option value="09:00" >9:00&nbsp;AM</option>'
   + '<option value="09:30" >9:30&nbsp;AM</option>'
  +  '<option value="10:00" >10:00&nbsp;AM</option>'
    +'<option value="10:30" >10:30&nbsp;AM</option>'
   + '<option value="11:00" >11:00&nbsp;AM</option>'
    +'<option value="11:30" >11:30&nbsp;AM</option>'
   + '<option value="12:00" >12:00&nbsp;PM</option>'
  +  '<option value="12:30" >12:30&nbsp;PM</option>'
    +'<option value="13:00" >1:00&nbsp;PM</option>'
    +'<option value="13:30" >1:30&nbsp;PM</option>'
    +'<option value="14:00" >2:00&nbsp;PM</option>'
   +' <option value="14:30" >2:30&nbsp;PM</option>'
    +'<option value="15:00" >3:00&nbsp;PM</option>'
    +'<option value="15:30" >3:30&nbsp;PM</option>'
    +'<option value="16:00" >4:00&nbsp;PM</option>'
    +'<option value="16:30" >4:30&nbsp;PM</option>'
    +'<option value="17:00" >5:00&nbsp;PM</option>'
    +'<option value="17:30" >5:30&nbsp;PM</option>'
    +'<option value="18:00" >6:00&nbsp;PM</option>'
    +'<option value="18:30" >6:30&nbsp;PM</option>'
    +'<option value="19:00" >7:00&nbsp;PM</option>'
    +'<option value="19:30" >7:30&nbsp;PM</option>'
    +'<option value="20:00" >8:00&nbsp;PM</option>'
    + '<option value="20:30" >8:30&nbsp;PM</option>'
   +' <option value="21:00" >9:00&nbsp;PM</option>'
    +'<option value="21:30" >9:30&nbsp;PM</option>'
    +'<option value="22:00" >10:00&nbsp;PM</option>'
    +'<option value="22:30" >10:30&nbsp;PM</option>'
    +'<option value="23:00" >11:00&nbsp;PM</option>'
    +'<option value="23:30" >11:30&nbsp;PM</option>'
    +'<option value="00:00" >12:00&nbsp;PM</option>'

               +'</select>'
              +'</div>'
               +'<div class="col-sm-6 col-xs-12 form-group">'
              +'<span> To</span>'
                 +'<select  type="text" name="checkoutto"  id="" class="form-control">'
                 +'<option value="">Please select</option>'
      
   + '<option value="07:00" >7:00&nbsp;AM</option>'
  +'  <option value="07:30"  selected >7:30&nbsp;AM</option>'
  +'  <option value="08:00" >8:00&nbsp;AM</option>'
    +'<option value="08:30" >8:30&nbsp;AM</option>'
   +' <option value="09:00" >9:00&nbsp;AM</option>'
    +'<option value="09:30" >9:30&nbsp;AM</option>'
    +'<option value="10:00" >10:00&nbsp;AM</option>'
    +'<option value="10:30" >10:30&nbsp;AM</option>'
    +'<option value="11:00" >11:00&nbsp;AM</option>'
    +'<option value="11:30" >11:30&nbsp;AM</option>'
    +'<option value="12:00" >12:00&nbsp;PM</option>'
    +'<option value="12:30" >12:30&nbsp;PM</option>'
    +'<option value="13:00" >1:00&nbsp;PM</option>'
    +'<option value="13:30" >1:30&nbsp;PM</option>'
    +'<option value="14:00" >2:00&nbsp;PM</option>'
    +'<option value="14:30" >2:30&nbsp;PM</option>'
    +'<option value="15:00" >3:00&nbsp;PM</option>'
    +'<option value="15:30" >3:30&nbsp;PM</option>'
   +' <option value="16:00" >4:00&nbsp;PM</option>'
    +'<option value="16:30" >4:30&nbsp;PM</option>'
    +'<option value="17:00" >5:00&nbsp;PM</option>'
    +'<option value="17:30" >5:30&nbsp;PM</option>'
    +'<option value="18:00" >6:00&nbsp;PM</option>'
    +'<option value="18:30" >6:30&nbsp;PM</option>'
   +' <option value="19:00" >7:00&nbsp;PM</option>'
    +'<option value="19:30" >7:30&nbsp;PM</option>'
   + '<option value="20:00" >8:00&nbsp;PM</option>'
   + ' <option value="20:30" >8:30&nbsp;PM</option>'
    +'<option value="21:00" >9:00&nbsp;PM</option>'
    +'<option value="21:30" >9:30&nbsp;PM</option>'
    +'<option value="22:00" >10:00&nbsp;PM</option>'
    +'<option value="22:30" >10:30&nbsp;PM</option>'
    +'<option value="23:00" >11:00&nbsp;PM</option>'
    +'<option value="23:30" >11:30&nbsp;PM</option>'
    +'<option value="00:00" >12:00&nbsp;PM</option>'

              + '</select>'
              +'</div>'
              +'</div>'

               +'<div class="col-sm-12 col-xs-12 form-group paddind0">'
               +'<div class="col-sm-4 col-xs-12  paddind0">'
               +' <span> Languages Spoken by Your Staff</span>'

                    +'<select  name="city" id="langu" class="form-control">'
                     + '<option value="Tamil" >Tamil</option>'
                      +'<option value="English" >English</option>'
                      +'<option value="Englishww" >Englissdah</option>'
                     + '<option value="Englisffh" >Englisfssdah</option>'
                   + '</select>'

            + ' </div>'
             + '<div class="col-sm-5 col-xs-12 form-group  ">'

                 + '<div class="col-sm-5 col-xs-12 form-group  Spoken"> <span id="lan" class="pay"> Languages Spoken </span></div>'
             + '</div>'

+'<div class="col-md-12 col-xs-12 Propertydetails"></div>'
               +'<div class="text-muted-ali"> <p id="Propertydetails">Property details</p></div>'

               +'</div>'


            +'</div>';

$(Propertydetails).append(Propertydetails1);



});

$("#Propertyfacilities").click(function(){
	var Propertyfacilities = $('.addPropertyfacilities');
	num +=1;
	var Propertyfacilities1 ='<h5>Property facilities'+num+'</h4>'
	+'<div class="col-md-12 col-xs-12 col-sm-12 form-group">'
            +  '<div class="col-md-6 col-sm-6 form-group paddind0">'
             + ' <span>facilities name</span>'
              + '<input type="text" ng-model="facilitiesName" name="" class="form-control" name=""/>'

               +'</div>'
            +'<div class="col-sm-6 col-xs-12 form-group ">'
              +  '<span> code</span>'
             +   '<input type="code" ng-model="hotel_E-mail" name="code" placeholder="code" id="" class="form-control"/>'

             +' </div>'



              + '<div class="col-sm-12 col-xs-12 form-group paddind0">'
              +' <div class="col-sm-6 col-xs-12 form-group paddind0">'
               + '<span> thumbnail</span>'
      +'<input type="text" ng-model="facilities_Thumbnail" name="thumbnail" id="" placeholder="thumbnail" class="form-control"/>'

       +   '    </div>'
     
            +   '<div class="col-sm-6 col-xs-12 form-group ">'
             +   '<span> openTime</span>'
              +  '<input type="email" ng-model="facilities_OpenTime" name="email" placeholder="openTime" id="" class="form-control"/>'

             +' </div>'
             +  '<div class="col-sm-12 col-xs-12 form-group paddind0">'
              + '<div class="col-sm-6 col-xs-12 form-group paddind0">'
               +' <span> close time</span>'
               + '<input type="text" ng-model="facilities_Closetime" name="closetime" id="" placeholder="closetime" class="form-control"/>'

              +'</div>'
           +' </div>'





             + '<div class="col-sm-12 col-xs-12 paddind0">'
                + '<div class="col-sm-8 col-xs-12 form-group paddind0">'
                +'<span> shortDescription</span>'

                +'<textarea rows="3" name="short" class="form-control"></textarea>'
                +' </div>'
              +'</div>'

+'</div>'

+'</div>';
$(Propertyfacilities).append(Propertyfacilities1);

});







$("#addResturent").click(function(){

	// var val1 = $("addre").val();
	var wrapper1 = $('.resview');
	
	num +=1;
	// var fieldHTML1 = '<input type="text">';
	var fieldHTML1 = '<h3>Resturent Types'+ num +'</h3>'
	+'<div class="col-md-12 col-xs-12 col-sm-12 form-group paddind0">'
	             + ' <div class="col-md-6 col-sm-6 form-group">'
						 + '<span>name</span>'
	               +'<input type="text" ng-model="name" class="form-control" name=""/>'

	              + '</div>'

	+'<div class="col-sm-6 col-xs-12 form-group ">'
	               + '<span> openTime</span>'
	              + ' <input type="openTime" ng-model="openTime" name="openTime" placeholder="opentime" id="" class="form-control"/>'
	             + '</div>'




	+'</div>'
	+'<div class="col-md-12 col-xs-12 col-sm-12 form-group paddind0">'
	 +             '<div class="col-md-6 col-sm-6 form-group">'
	  +             '<span>closingTime</span>'
	 +              '<input type="text" ng-model="name" class="form-control" name=""/>'

	   +            '</div>'

	+'<div class="col-sm-6 col-xs-12 form-group ">'
	 +               '<span> thumbnail</span>'
	 +               '<input type="thumbnail" ng-model="thumbnail" name="thumbnail" placeholder="thumbnail" id="" class="form-control"/>'

	  +            '</div>'

	+'<div class="col-md-12 col-xs-12 col-sm-12 form-group ">'
	+              '<div class="col-md-6 col-sm-6 form-group paddind0">'
	   +           ' <span>type</span>'
	 +              '<input type="text" ng-model="name" class="form-control" name=""/>'

	+'</div>'

	 + '<div class="col-sm-12 col-xs-12 paddind0">'
	  +              ' <div class="col-sm-8 col-xs-12 form-group paddind0">'
	    +            '<span> shortDescription</span>'

	       +         '<textarea rows="3" name="short" class="form-control"></textarea>'
	        +         '</div>'
	         +     '</div>'

	+'</div>'
	+'</div>';

		$(wrapper1).append(fieldHTML1);



});


			    //+++++++
			$("#langu").change(function(){

				var val1 = $("#langu").val();
				var wrapper = $('.Spoken');
				var fieldHTML = '<input type="text" name='+ val1 +' value='+ val1 +' id="" class="form-control"/> ';

			    $(wrapper).append(fieldHTML);
				$("#lan").show();


			});




				// +++++


			$('.rating-lg').each(function(){
				var val = $(this).data('value');
				var readonly = true;
				if($(this).data('enableEdit')){
					readonly = false;
				}
				if(val && val>=0 && val<=5){
					$(this).rateYo({
						rating: val,
						starWidth: '24px',
						ratedFill: starColor,
						normalFill: "#dddddd",
						readOnly: readonly
					});
				}
			});

			$('input').iCheck({
				checkboxClass: 'icheckbox_square-green',
				radioClass: 'iradio_square-green'
			});

			$('.filter-toggle').on('click', function(){
				$('.filter-cont-wrap').toggleClass('hidden-xs');
			});

			$('#imageGallery').on('click', function(e){
				event = e || window.event;
			    var target = event.target || event.srcElement,
			        link = target.src ? target.parentNode : target,
			        options = {
			        	index: link,
			        	event: event,
			        	continuous: false,
			        	toggleControlsOnSlideClick: false
			        },
			        links = this.getElementsByTagName('a');
			    blueimp.Gallery(links, options);
			});



			if(!isMobileDevice()){
				$("#stickyForm").sticky({topSpacing:0});
				$("#stickyNav").sticky({topSpacing:0});
				$("#stickybut").sticky({bottomSpacing:0});

				$('#stickyNav').onePageNav({
					currentClass: 'active',
					changeHash: false,
					scrollSpeed: 750,
				});
			}


		});


 function hotelimg(input) {
						if (input.files && input.files[0]) {
							var reader = new FileReader();

							reader.onload = function (e) {

									var wrapper = $('.hoimgad');
				            var fieldHTML = ' <div class="col-sm-6 col-md-4"><div class=""><img src="'+ e.target.result +'"  id="hotel" alt="hotel" class="hotimg"><div class="caption "><a href=""> Deletet<i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></div><div></div> ';
			                 $(wrapper).append(fieldHTML);
								// $('#hotel').attr('src', e.target.result);

							}

							reader.readAsDataURL(input.files[0]);
						}
					}
					// Hotel thum Photo
					function hotelhome(input){
						if(input.files && input.files[0]){
							var reader = new FileReader();
							reader.onload = function(e){
								$("#hotelhomeimg").attr('src',e.target.result)
							}
							reader.readAsDataURL(input.files[0]);
						}
					}
					// END
					// Room thum Photo
					function roomhome(input){
						if(input.files && input.files[0]){
							var reader = new FileReader();
							reader.onload = function(e){
								$("#roomhomeimg").attr('src',e.target.result)
							}
							reader.readAsDataURL(input.files[0]);
						}
					}
					// END
					 function userimg(input) {
						if (input.files && input.files[0]) {
							var reader = new FileReader();

							reader.onload = function (e) {
								$('#user').attr('src', e.target.result);

							}

							reader.readAsDataURL(input.files[0]);
						}
					}
function transport(seats){
switch (seats) {
    case 'Airport shuttle (arranged by property)':
        	       $("#to").show();
					$("#departs").show();
					$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();

    break;
    case 'Airport shuttle (public)':
                    $("#to").show();
					$("#departs").show();
			     	$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();
    break;
    case 'Bus':
                    $("#to").show();
					$("#departs").show();
					$("#line").show();
					$('#highway').hide();
					$('#junction').hide();
    break;
    case 'Car':
                	$("#to").show();
					$("#departs").hide();
					$("#line").hide();
					$('#highway').show();
					$('#junction').show();
    break;
    case 'Subway/Metro':
                    $("#to").show();
					$("#departs").show();
					$("#line").show();
					$('#highway').hide();
					$('#junction').hide();
   break;
   case 'taxi':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").hide();
					$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();
 break;
 case'Train':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").show();
					$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();
 break;
  case'Tram':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").show();
					$("#line").show();
					$('#highway').hide();
					$('#junction').hide();
 break;
 case'Walking':
                    $("#othe").hide();
					$("#to").show();
					$("#departs").hide();
					$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();
 break;

  default:
                    $("#othe").hide();
					$("#to").hide();
					$("#departs").hide();
					$("#line").hide();
					$('#highway').hide();
					$('#junction').hide();
}
}
}(jQuery));