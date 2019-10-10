$(document).ready(function () {

    const googleStore = $("#google-play");
    const appleStore = $("#apple-store");
    const Features = $("#Features");
    const instagram = $("#fa-instagram");
    const facebook = $("#fa-facebook-f");
    const google = $("#fa-google-plus-g");

    googleStore.click(function () {
        location.href = "https://play.google.com/store/apps/details?id=com.locnall.KimGiSa";
    });

    appleStore.click(function () {
        location.href= "https://play.google.com/store/apps/details?id=com.instagram.android";
    });

    Features.click(function(){
        Features.parent().parent().css("color","black");
    });

    instagram.click(function(){
        location.href= "https://www.instagram.com/taeilkim_/?hl=ko";
    });

    facebook.click(function(){
        location.href= "https://www.facebook.com/xodlfsha";
    });

    google.click(function(){
        location.href= "https://www.google.com";
    });
});