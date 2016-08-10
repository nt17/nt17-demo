(function () {
    var app = angular.module('conference', []);

    app.directive('logoPart', function () {
        return {
            restrict: 'E',
            templateUrl: 'page_parts/logo-part.html'
        };
    });
    app.directive('sideBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'page_parts/side-bar.html'
        };
    });
    app.directive('navBar', function () {
        return {
            restrict: 'E',
            templateUrl: "page_parts/nav-bar.html"
        };
    });
    app.directive('contentPart', function () {
        return {
            restrict: 'E',
            templateUrl: "page_parts/content-part.html"
        };
    });
    app.directive('home', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/home.html"
        };
    });
    app.directive('conferenceProgram', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/conference-program.html"
        };
    });
    app.directive('callForPapers', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/call-for-papers.html"
        };
    });
    app.directive('workshops', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/workshops.html"
        };
    });
    app.directive('callForToolDemos', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/call-for-tool-demos.html"
        };
    });
    app.directive('womenInSe', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/women-in-se.html"
        };
    });
    app.directive('submission', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/submission.html"
        };
    });
    app.directive('keynotes', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/keynotes.html"
        };
    });
    app.directive('organization', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/organization.html"
        };
    });
    app.directive('programCommittee', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/program-committee.html"
        };
    });
    app.directive('importantDates', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/important-dates.html"
        };
    });
    app.directive('registration', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/registration.html"
        };
    });
    app.directive('venue', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/venue.html"
        };
    });
    app.directive('accommodation', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/accommodation.html"
        };
    });
    app.directive('travel', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/travel.html"
        };
    });
    app.directive('previousYears', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/previous-years.html"
        };
    });
    app.directive('countryAndCity', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/country-and-city.html"
        };
    });
    app.directive('sponsorshipPackages', function () {
        return {
            restrict: 'E',
            templateUrl: "tabs/sponsorship-packages.html"
        };
    });
    app.directive('hostPart', function () {
        return {
            restrict: 'E',
            templateUrl: 'page_parts/host-part.html',
            controller: function () {
                this.elements = hostElements;
            },
            controllerAs: 'hostCtrl'
        };
    });
    app.directive('sponsorPart', function () {
        return {
            restrict: 'E',
            templateUrl: 'page_parts/sponsor-part.html',
            controller: function () {
                this.elements = sponsorElements;
            },
            controllerAs: 'sponsorCtrl'
        };
    });
    app.directive('galleryPart', function () {
        return {
            restrict: 'E',
            templateUrl: 'page_parts/gallery-part.html',
            controller: function () {
                this.current = 0;
                this.images = gallery;

                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                }
            },
            controllerAs: 'galleryCtrl'
        };
    });
    app.directive('ikuGalleryPart', function () {
        return {
            restrict: 'E',
            templateUrl: 'page_parts/iku-gallery-part.html',
            controller: function () {
                this.current = 0;
                this.images = ikuGallery;

                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                }
            },
            controllerAs: 'ikuGalleryCtrl'
        };
    });
    //        app.directive('twitterPart', function (){
    //           return {
    //               restrict:'E',
    //               templateUrl:'page_parts/twitter-part.html',
    //               controller: function (){
    //               this.a= "asd";
    //               this.load = function(d, s, id) {
    //                        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/
    //                                        .test(d.location) ? 'http'
    //                                        : 'https';
    //                        if (!d.getElementById(id)) {
    //                                js = d.createElement(s);
    //                                js.id = id;
    //                                js.src = p
    //                                                + "://platform.twitter.com/widgets.js";
    //                                fjs.parentNode
    //                                                .insertBefore(js, fjs);
    //                        }
    //                };
    //               },
    //               controllerAs : 'twitCtrl',
    //           } 
    //        });
    app.controller('tabController', function () {
        this.currentTab = NAV_ELEMENT.HOME;
        this.NAV_ELEMENT = NAV_ELEMENT;
        this.SIDE_ELEMENT = SIDE_ELEMENT;

        this.showPanel = "hidePanel";
        this.shiftBody = "fixBody";

        this.selectTab = function (setTab) {
            this.currentTab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.currentTab === checkTab;
        };

        this.setPanel = function () {
            if (this.showPanel === "hidePanel") {
                this.showPanel = "showPanel";
                this.shiftBody = "shiftBody";
            } else {
                this.showPanel = "hidePanel";
                this.shiftBody = "fixBody";
            }
        };
    });
    SIDE_ELEMENT = {
/*        HOME: {
            name: 'Home',
            id: "home",
            link: 'index.html'
        },
        WORKSHOPS: {
            name: 'Workshops',
            id: "workshops",
            link: 'workshops.html'
        },*/
        COUNTRY_AND_CITY: {
            name: "Location",
            id: "country_and_city",
            link: 'country-and-city.html'
        },
        VENUE: {
            name: 'Venue',
            id: "venue",
            link: 'venue.html'
        },
        TRAVEL: {
            name: 'Travel',
            id: "travel",
            link: 'travel.html'
        },
        ACCOMMODATION: {
            name: 'Accommodation',
            id: "accommodation",
            link: 'accommodation.html'
        },
        IMPORTANT_DATES: {
            name: 'Important Dates',
            id: "important_dates",
            link: 'important-dates.html'
        },
        REGISTRATION: {
            name: 'Registration',
            id: "registration",
            link: 'registration.html'
        },
        PAYMENT: {
            name: 'Payment',
            id: "payment",
            link: 'payment.html'
        },
        SUBMISSION: {
            name: 'Abstract Submission',
            id: "submission",
            link: 'submission.html'
        },
        KEYNOTES: {
            name: 'Program',
            id: "keynotes",
            link: 'keynotes.html'
        },
        CALL_FOR_TOOL_DEMOS: {
            name: 'Sattellites',
            id: "call_for_tool_demos",
            link: 'call-for-tool-demos.html'
        },
        SPONSORSHIP_PACKAGES: {
            name: "Sponsors/Exhibitions",
            id: "sponsorship_packages",
            link: 'sponsorship-packages.html'
        },
        PROGRAM_COMMITTEE: {
            name: 'NT Charter',
            id: "program_committee",
            link: 'program-committee.html'
        },
        PREVIOUS_YEARS: {
            name: 'NT Conferences',
            id: "previous_years",
            link: 'previous-years.html'
        },
        ORGANIZATION: {
            name: 'Contact Us',
            id: "organization",
            link: 'organization.html'
/*        },
        WOMEN_IN_SE: {
            name: 'Track on Women in Software Architecture',
            id: "women_in_se",
            link: 'women-in-se.html'*/
        }
    };
    NAV_ELEMENT = {
        HOME: {
            name: 'Home',
            id: "home",
            link: 'home.html'
        },
        CONFERENCE_PROGRAM: {
            name: 'Program',
            id: "conference_program",
            link: 'conference-program.html'
        },
        CALL_FOR_PAPERS: {
            name: 'Abstract Submission',
            id: "call_for_papers",
            link: 'call-for-papers.html'
        },
        REGISTRATION: {
            name: 'Registration',
            id: "registration",
            link: 'registration.html'
        },
        VENUE: {
            name: 'Venue',
            id: "venue",
            link: 'venue.html'
        }
    };
    var hostElements = [
        {
            name: 'IKU',
            link: 'http://www.iku.edu.tr/',
            image: 'images/iku_logo.png'
    }
    ];
    var sponsorElements = [
        {
			name: 'THY',
            link: 'https://www4.thy.com/TKC/app/main?language=en',
            image: 'images/sponsors/thy-alliance.jpg'
	    }, {
            name: 'Havelsan',
            link: 'http://www.havelsan.com.tr/ENG/Main',
            image: 'images/sponsors/havelsan.jpg'
        }, {
            name: 'Cybersoft',
            link: 'http://www.cybersoft.com.tr/ENG/?q=node',
            image: 'images/sponsors/cybersoft.png'
        }
    ];
    var gallery = [
        {
            small: "images/istanbul/ist-1(small).jpg",
            normal: "images/istanbul/ist-1.jpg",
            number: 0
    }, {
            small: "images/istanbul/ist-2(small).jpg",
            normal: "images/istanbul/ist-2.jpg",
            number: 1
    }, {
            small: "images/istanbul/ist-3(small).jpg",
            normal: "images/istanbul/ist-3.jpg",
            number: 2
    }, {
            small: "images/istanbul/ist-4(small).jpg",
            normal: "images/istanbul/ist-4.jpg",
            number: 3
    }, {
            small: "images/istanbul/ist-5(small).jpg",
            normal: "images/istanbul/ist-5.jpg",
            number: 4
    }
    ];
    var ikuGallery = [
        {
            small: "images/iku/iku-1(small).png",
            normal: "images/iku/iku-1.png",
            number: 0
    }, {
            small: "images/iku/iku-2(small).png",
            normal: "images/iku/iku-2.png",
            number: 1
    }, {
            small: "images/iku/iku-3(small).png",
            normal: "images/iku/iku-3.png",
            number: 2
    }, {
            small: "images/iku/iku-4(small).png",
            normal: "images/iku/iku-4.png",
            number: 3
    }, {
            small: "images/iku/iku-5(small).png",
            normal: "images/iku/iku-5.png",
            number: 4
    }
    ];
})();
