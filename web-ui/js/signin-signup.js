$(document).ready(() => {
    signin_signup_switcher();
})

const signin_signup_switcher = () => {
    $('.account.signup').hide();
    $('.signup-link').on('click', () => {
        $('.account.signup').show();
        $('.account.signin').hide();
    })

    $('.signin-link').on('click', () => {
        $('.account.signin').show();
        $('.account.signup').hide();
    })
}