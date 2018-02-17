//login AJAX
 
/*global $ */
 
console.log("it is working")
 
/*global $ */
 
$(document).ready(function(){
    // $("#sign-in").click(function(){
        // $("#Login").hide();
        // $("#home").show();
    // });
    $("#week-1").click(function(){
        $("#home").hide();
        $("#Spelling").show();
    });
    $("#back-1").click(function(){
		$("#home").show();
        $("#Spelling").hide();
    });
    $("#week-2").click(function(){
        $("#home").hide();
        $("#Spelling2").show();
    });
    $("#back-2").click(function(){
        $("#home").show();
        $("#Spelling2").hide();
    });
    $("#week-3").click(function(){
        $("#home").hide();
        $("#Spelling3").show();
    });
     $("#back-3").click(function(){
        $("#home").show();
        $("#Spelling3").hide();
    });
    $("#week-4").click(function(){
        $("#home").hide();
        $("#Spelling4").show();
    });
    $("#back-4").click(function(){
        $("#home").show();
        $("#Spelling4").hide();
    });
    $("#Log-Out").click(function(){
        $("#home").hide();
        $("#LogOut").show();
    });
});


$(document).ready(function(){
$("#sign-in").click(function(){
console.log("Function entered")
  var user_name=$('#user_name').val();
  var password_hash=$('#password_hash').val();
$.ajax(
	{
	type: 'POST',
	url: "http://localhost:3001/auth/login",
// headers: {
// 'Authorization': 'Basic ' + btoa(data.user_name + ':' + data.password_hash)
// },
	dataType: "json",
	data:{ user_name: user_name, password_hash: password_hash },
	success: function(responseData, textStatus, jqXHR) {
		$('#home').show();
		$('#Login').hide();
	},
	error: function(jqXHR, textStatus, errorThrown) {
		window.alert("There has been an error - Username and Password have been incorrectly entered");
	  }
	});
  });
});
 
 
 
 

 