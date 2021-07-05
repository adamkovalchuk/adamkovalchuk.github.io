function validateName(name) {
    return name.length > 0
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    if(phone.length < 10) return false
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    return re.test(String(phone));
}

function validate(input, validator) {
    if(validator(input.value)) {
        input.classList.remove('invalid')
        if($('.input.invalid').length === 0) {
            $('#submit-form').attr('disabled', false)
        }
    }
    else {
        input.classList.add('invalid')
        $('#submit-form').attr('disabled', true)
    }
}

$(document).ready(function () {
    $('.name-input').on('input', function(e) { validate(e.target, validateName) })
    $('.email-input').on('input', function(e) { validate(e.target, validateEmail)  })
    $('.phone-input').on('input', function(e) { validate(e.target, validatePhone)  })
})