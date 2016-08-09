window.onload = function () {
    elementId = document.location.hash.substring(1);
    selector = '[href="#'.concat(elementId).concat('"]');
    a = document.querySelector(selector);
    if (a != null) {
        a.click();
    }
    angular.element(a).triggerHandler('click');
};