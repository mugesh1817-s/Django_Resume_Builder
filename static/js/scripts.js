$(document).ready(function(){
    $('#btn').on('click', function(){
        var firstname = $('#firstname').val();
        var middlename=$('#middlename').val();
        var lastname = $('#lastname').val(); 
        var designation = $('#designation').val(); 
        var address = $('#address').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var summary =$('#summary').val();
        var title =$('#title').val();
        var description = $('#description').val();  
        var position = $('#position').val();
        var company = $('#company').val();
        var location = $('#location').val();
        var startdate=$('#startdate').val();
        var enddate = $('#enddate').val();
        var jobdescription = $('#jobdescription').val();
        var school = $('#school').val();
        var degree = $('#degree').val();
        var city = $('#city').val();
        var startdate1=$('#startdate1').val();
        var enddate1 = $('#enddate1').val();
        var brdescription=$('#brdescription').val();
        var projectname =$('#projectname').val();
        var projectlink=$('#projectlink').val();
        var projectdescription = $('#projectdescription').val();
        var skills =$('#skills').val();
        alert(firstname);
        alert(middlename);
        alert(lastname);
        alert(designation);
        alert(address);
        alert(email);
        alert(phone);
        alert(summary);
        alert(title);
        alert(description);
        alert(position);
        alert(company);
        alert(location);
        alert(startdate);
        alert(enddate);
        alert(jobdescription);
        alert(school);
        alert(degree);
        alert(city);
        alert(startdate1);
        alert(enddate1);
        alert(brdescription);
        alert(projectname);
        alert(projectlink);
        alert(projectdescription);
        alert(skills);
        if(firstname === ""){
            alert("Please complete the required field");
        } else {
            $.ajax({
                url: 'create/',
                type: 'POST',
                data: {
                    firstname: firstname,
                    middlename:middlename,
                    lastname: lastname,
                    designation: designation,
                    address: address,
                    email: email,
                    phone: phone,
                    summary:summary,
                    title:title,
                    description: description,
                    position: position,
                    company: company,
                    location: location,
                    startdate:startdate,
                    enddate: enddate,
                    jobdescription: jobdescription,
                    school: school,
                    degree: degree,
                    city: city,
                    startdate1:startdate1,
                    enddate1: enddate1,
                    brdescription: brdescription,
                    projectname:projectname,
                    projectlink:projectlink,
                    projectdescription:projectdescription,
                    skills: skills,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: function(){
                    Read();
                    $('#firstname').val('');
                    $('#middlename').val('');
                    $('#lastname').val('');
                    $('#designation').val('');
                    $('#address').val('');
                    $('#email').val('');
                    $('#phone').val('');
                    $('#summary').val('');
                    $('#title').val('');
                    $('#description').val('');
                    $('#position').val('');
                    $('#company').val('');
                    $('#location').val('');
                    $('#startdate').val('');
                    $('#enddate').val('');
                    $('#jobdescription').val('');
                    $('#school').val('');
                    $('#degree').val('');
                    $('#city').val('');
                    $('#startdate1').val('');
                    $('#enddate1').val('');
                    $('#brdescription').val('');
                    $("#projectname").val('');
                    $('#projectlink').val('');
                    $('#projectdescription').val('');
                    $('#skills').val('');
                    alert("Resume Successfully Created");
                }
            });
        }
    });
});
//  $(document).on('click', '.edit', function(){
//      $id = $(this).attr('name');
//      window.location = "edit/" + $id;
// });
 
//   $('#update').on('click', function(){
//         var firstname = $('#firstname').val();
//         var lastname = $('#lastname').val(); 
//         var age = $('#age').val(); 
//         var date = $('#date').val();
//         var gender = $('#gender').val();
//         var mobile = $('#mobile').val();
//         var email = $('#email').val();
//         var star =$('#star').val();
//         var rassi =$('#rassi').val();
//         var fathername = $('#fathername').val();  
//         var mothername = $('#mothername').val();
//         var fathercontact = $('#fathercontact').val();
//         var religion = $('#religion').val();
//         var caste=$('#caste').val();
//         var lang = $('#lang').val();
//         var education = $('#education').val();
//         var profession = $('#profession').val();
//         var country = $('#country').val();
//         var state = $('#state').val();
//         var pincode=$('#pincode').val();
//         var address1 = $('#address1').val();
//         var address2=$('#address2').val();
//         var height =$('#height').val();
//         var weight=$('#weight').val();
//         var hobby = $('#hobby').val();
//         var skills =$('#skills').val();
//         var family=$('#family').val();
//         var work=$('#work').val();
//         if($firstname == "" || $lastname == "" || $age == "" ||$date == "" ||$gender == "" 
//             ||$mobile == ""||$email == "" ){
//              alert("Please complete the required field");
//         }else{
//        $id = $('#member_id').val();
//        $.ajax({
//                url: 'update/' + $id,
//                type: 'POST',
//                data: {
//                     firstname: firstname,
//                     lastname: lastname,
//                     age: age,
//                     date: date,
//                     gender:gender,
//                     mobile: mobile,
//                     email: email,
//                     star:star,
//                     rassi:rassi,
//                     fathername: fathername,
//                     mothername: mothername,
//                     fathercontact: fathercontact,
//                     religion: religion,
//                     caste:caste,
//                     lang: lang,
//                     education: education,
//                     profession: profession,
//                     country: country,
//                     state: state,
//                     pincode:pincode,
//                     address1: address1,
//                     address2: address2,
//                     height:height,
//                     weight:weight,
//                     hobby:hobby,
//                     salary: salary,
//                     family: family,
//                     work: work,
//                     csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
//                     },
//                      success: function(){
//                        window.location = '/';
//                         alert('Updated!');
//                     }
//                   });
//                }
//   
//  });
// $(document).on('click', '.delete', function(){
//        $id = $(this).attr('name');
//         $.ajax({
//              url: 'delete/' + $id,
//              type: 'POST',
//              data: {
//              csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
//             },
//              success: function(){
//                  Read();
//                   alert("Deleted!");
//                 }
//              });
//  }); 

// function Read(){
//     $.ajax({
//         url: 'read/',
//         type: 'POST',
//         async: false,
//         data: {
//             res: 1,
//             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
//         },
//         success: function(response){
//             $('#cont').html(response);
//         }
//     });
// }
