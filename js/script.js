// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {
  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページトップへもどる
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },

      300
    );
    return false;
  });

  //固定ヘッダー
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top) {
      $nav.addClass("fixed");
      $("body").css("margin-top", navHeight);
    } else {
      $nav.removeClass("fixed");
      $("body").css("margin-top", "0");
    }

    // スクロールするとしたからフワッと要素を表示させる
    $(function () {
      function animation() {
        $(".fadeInUp").each(function () {
          //ターゲットの位置を取得
          var target = $(this).offset().top;
          //スクロール量を取得
          var scroll = $(window).scrollTop();
          //ウィンドウの高さを取得
          var windowHeight = $(window).height();
          //ターゲットまでスクロールするとフェードインする
          if (scroll > target - 700) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
          }
        });
      }
      animation();
      $(window).scroll(function () {
        animation();
      });
    });
    // 国庫まで

    // 要素fadeInUpを取得
    // let $fadeInUp = $(".fadeInUp");

    // if ($(window).scrollTop() >= offset.top) {
    //   // $fadeInUp.addClass("qq");
    //   // fadeInUp.fadeIn();
    //   console.log("js");
    // } else {
    //   // fadeInUp.fadeOut();
    // }
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var offset = $nav.offset();
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;

    $("html, body").animate(
      {
        scrollTop: position,
      },

      300,
      "swing"
    );
    return false;
  });

  // function Play1() {
  //   console.log("sa");
  //   document.getElementById("test1").play();
  // }
  // //一時停止
  // function Pause1() {
  //   document.getElementById("test1").pause();
  // }
  // //最初から再生
  // function PlayFromFirst1() {
  //   document.getElementById("test1").currentTime = 0;
  //   document.getElementById("test1").play();
  // }
  $(".playBtn").click(function () {
    if ($("#video1")[0].paused) {
      $("#video1")[0].play();
      $(".Btn").css("opacity", "0.0");
    } else {
      $("#video1")[0].pause();
    }
  });
  $(".playBtn2").click(function () {
    if ($("#video2")[0].paused) {
      $("#video2")[0].play();
      $(".Btn2").css("opacity", "0.0");
    } else {
      $("#video2")[0].pause();
    }
  });
});
