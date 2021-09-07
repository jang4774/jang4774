        //Lineup Swiper ----------------------------------------------------------------
        var swiper3 = new Swiper(".headlinerSlide", {
            direction: "vertical",
            loop: true,
            slidesPerView: 1,
            // freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });

        var swiper4 = new Swiper(".lineupSwiper", {
            // loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper3,
            },
        });

        // Notice Swiper ------------------------------------------------------------
        var swiper = new Swiper(".noticeSwiper", {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });



        //jQuery-------------------------------------------------------------
        $(function() {

            //리사이징 할때마다 새로고침
            var lastWidth = $(window).width();
            $(window).resize(function() {
                if ($(window).width() != lastWidth) {
                    location.reload();
                    lastWidth = $(window).width();
                    return false;
                }
            });

            //mobile header
            $(".headerM i.fa-bars").click(function() {
                $("nav").toggleClass("on");
            });
            $("header nav i.fa-times").click(function() {
                $("header nav").removeClass("on");
            });

            // sec03 tab
            $(".sec03 .tab ul li").click(function() {
                $(this).addClass('on')
                    .siblings().removeClass('on');
                $("#" + $(this).data('id')).addClass('on')
                    .siblings().removeClass('on');
            });

            //To Top
            $(".scroll").click(function() {
                $("html, body").animate({
                    scrollTop: 0
                }, 500);
                return false;
            });

            // News Popup
            $(".sec02 .newspop button").click(function() {
                $(".sec02 .newspop").fadeOut();
            });
            $(".sec02 .news .newscard:nth-child(1)").click(function() {
                $(".sec02 .newspop.article01").fadeIn();
            });
            $(".sec02 .news .newscard:nth-child(2)").click(function() {
                $(".sec02 .newspop.article02").fadeIn();
            });
            $(".sec02 .news .newscard:nth-child(3)").click(function() {
                $(".sec02 .newspop.article03").fadeIn();
            });
            $(".sec02 .news .newscard:nth-child(4)").click(function() {
                $(".sec02 .newspop.article04").fadeIn();
            });

            // 상품정보제공고시
            $(".sec04 .productInfoButton").click(function() {
                $(".sec04 .productInfo").show();
            });
            $(".sec04 .productInfo .infoClose").click(function() {
                $(".sec04 .productInfo").hide();
            });

            // 할인안내 펼치기_M
            $(".sec04 .infoBoxBt").click(function() {
                $(".sec04 .infoBoxBt").text("할인안내>")
                $(".sec04 .infoBox").slideToggle();
                $(".sec04 .closeInfoBox").toggle();
            });
            //할인안내 닫기버튼
            $(".sec04 .closeInfoBox").click(function() {
                $(".sec04 .infoBox").slideUp();
                $(".sec04 .closeInfoBox").hide();
            })

            //오시는길Tab
            $(".route > ul > li").click(function() {
                $(this).addClass("on").siblings().removeClass("on");
                $("#" + $(this).data("id")).addClass("on").siblings().removeClass("on");
            });

            // datepicker(from, to)


            var dateFormat = "mm/dd/yy",
            from = $( "#from" )
              .datepicker({
                defaultDate: "+1w",
                changeMonth: false,
                numberOfMonths: 1,
                showOn: "both",
                buttonImage: "../img/calendar-alt-regular.svg",
                buttonImageOnly: true,
                buttonText: "Select date",
                minDate: 0, maxDate: "+2D"
              })
              .on( "change", function() {
                to.datepicker( "option", "minDate", getDate( this ) );
              }),
              
            to = $( "#to" ).datepicker({
              defaultDate: "+1w",
              changeMonth: false,
              numberOfMonths: 1,
              showOn: "both",
                buttonImage: "../img/calendar-alt-regular.svg",
                buttonImageOnly: true,
                buttonText: "Select date",
                minDate: 0, maxDate: "+2D"
            })
            .on( "change", function() {
              from.datepicker( "option", "maxDate", getDate( this ) );
            });
       
          function getDate( element ) {
            var date;
            try {
              date = $.datepicker.parseDate( dateFormat, element.value );
            } catch( error ) {
              date = null;
            }
       
            return date;
          }



            //             //셀렉트안에 옵션 채우기
            // for (var i = 49; i >= 1; i--) {
            //     $('#montly').append(new Option('No.'+i+'호', '../files/no'+i+'_newsletter.jpg'));
            // }
            // //옵션선택시 웹페이지 이동
            // $('#montly').on('change', function () {
            //     var url = $(this).val();
            //     if (url) {
            //         // window.location = url; //target_self
            //         window.open(url); //target_blank
            //     }
            //     return false;
            // });

            $(".mCustomScrollbar").mCustomScrollbar({
                theme: "light-3"
            });
        });
