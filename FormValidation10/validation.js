function formValidation() {
    //declare variables to access form elements
    var uid = document.registration.userId
    var uname = document.registration.uname
    var passid = document.registration.passid
    var uadd = document.registration.address
    var usermail = document.registration.userMail
    var ucountry = document.registration.country;
    var malePerson = document.registration.msex;
    var femalePerson = document.registration.fsex; 

    //uid stores and has access to element user id in the form registration
    if (userIdVal(uid, 5, 12)) {
        if (passid_validation(passid, 7, 12)) {
            if (allLetters(uname)) {
                if (alphaNumeric(uadd)) {
                    if (countryselect(ucountry)) {
                        if (validateEmail(usermail)) {
                            if (validsex(malePerson, femalePerson)) {
                                
                            }
                        }
                    }
                }
            }
        }
    }


        //handling the first element 'uid' 7 to 12
        function userIdVal(uid, mx, my) {
            var uidLen = uid.value.length
            //uidLen refers to the length of the element uid
            if (uidLen == 0 || uidLen >= my || uidLen < mx) {
                uid.focus()
                uid.style.border = '2px solid red'
                alert('Please input your user ID')
                return false
            }
            return true
        }
        //handling name validation
        function allLetters(uname) {
            var letters = /^[A-Za-z]+$/; //something .................expression
            if (uname.value.match(letters)) {

                return true
            }
            else {
                uname.focus()
                alert('username must have alphabet characters only')
                return false
            }

        }

        //handling password validation
        function passid_validation(passid, mx, my) {
            var passidlen = passid.value.length
            if (passidlen == 0 || passidlen >= my || passidlen < mx) {
                alert('please check your user password')
                passid.focus()
                return false

            } else {
                return true
            }
        }

        // handler for the address
        function alphaNumeric(uadd) {
            var letters = /^[0-9a-zA-Z]+$/

            if (uadd.value.match(letters)) {
                return true
            }
            else {
                alert('User address must be alpha numeric')
                uadd.focus()
                return false
            }
        }


        function validateEmail(usermail) {
            var userMailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            if (usermail.value.match(userMailPattern)) {
                return true
            }
            else {
                alert('register correct user email')
                usermail.focus()
                return false
            }
        }


        function countryselect(ucountry) {
            if (ucountry.value == "Default") {
                alert('Select your country from the list');
                ucountry.focus();
                return false;
            }
            else {
                return true;
            }
        }


        function validsex(malePerson, femalePerson) {
            gender = 0;
        
            if (malePerson.checked) {
                gender++;
            }
            if (femalePerson.checked) {
                gender++;
            }
        
            if (gender == 2) {
                alert('Sorry, you have chosen both Male and Female. Choose one !');
                femalePerson.checked = false
                malePerson.checked = false
                malePerson.focus();
                return false;
            }
        
            if (gender == 0) {
                alert('Select either male or female');
                malePerson.focus();
                return false;
            }
            else {
                alert('Form Succesfully Submitted');
                window.location.reload()
                return true;
            }
        }


    }