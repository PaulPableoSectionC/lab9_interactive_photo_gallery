$(document).ready(function () {
  let x = 0;

  // Handle next slide
  $(".btn-next").click(function () {
    x = x <= 300 ? x + 100 : 0;
    $("figure").css("left", -x + "%");
  });

  // Handle previous slide
  $(".btn-prev").click(function () {
    x = x >= 100 ? x - 100 : 400;
    $("figure").css("left", -x + "%");
  });

  // Handle filter buttons
  $(".filter-btn").click(function () {
    const category = $(this).data("category");
    if (category === "all") {
      $("img").show();
    } else {
      $("img").hide();
      $(`img[data-category="${category}"]`).show();
    }
    x = 0; // Reset slider position when filter changes
    $("figure").css("left", 0);
  });

  // Lightbox functionality
  $("figure img").click(function () {
    const src = $(this).attr("src");
    $("#lightbox-image").attr("src", src);
    $("#lightbox-container").fadeIn();
  });

  // Close lightbox
  $(".close-btn").click(function () {
    $("#lightbox-container").fadeOut();
  });
});
