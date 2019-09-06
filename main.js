console.log('It works')

$(document).ready(function () {
    $('.submit').click(function {
        console.log('clicked button')

        var Name = $('.Name').val()
        var Email = $('.Email').val()
        var Subject = $('.Subject').val()
        var Message = $('.Message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(Name.length > 3) {
            statusElm.append('<div>Name is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Name is not valid</div>')
        }

        if(Email.length > 5 && Email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(Subject.length >=2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(Message.length >= 20) {
            statusElm.append('<div>Message is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })
})
