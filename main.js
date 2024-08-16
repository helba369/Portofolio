function toggleDetail(e) {
    const target = $(e.target)

    if ($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("Less Info").addClass("active")
    }
    const item = $(target).parents(".about-exp-item")

    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle(".about-exp-item-detail")

    // console.log($(item).children(".about-exp-item-detail"))

}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if (!$(email).val()) {
        alert("Email is Required")
    } else if (!$(subject).val()) {
        alert("Subject is Required")
    } else if (!$(message).val()) {
        alert("Message is Required")
    } else {
        $(email).val("")
        $(subject).val("")
        $(message).val("")
        alert("Form Submitted")
    }
}