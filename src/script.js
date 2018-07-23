//images slide show homepage

$('.slider').each(function () {
  let $this = $(this);
  let $group = $this.find('.slide_group');
  let $slides = $this.find('.slide');
  let bulletArray = [];
  let currentIndex = 0;
  let timeout;

  function move(newIndex) {
    let animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');

    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function () {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function () {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function () {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function (index) {
    let $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function () {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});

//login - new user

$(function () {

  $('#login-form-link').click(function (e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function (e) {
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });

});
// map

// ticket

const showConfirmInfo = () => {
  const bookingInfo = {};

  bookingInfo.firstName = $('#first-name-input').val();
  bookingInfo.lastName = $('#last-name-input').val();
  bookingInfo.address = $('#address-input').val();
  bookingInfo.email = $('#email-input').val();
  bookingInfo.phone = $('#phone-input').val();
  bookingInfo.package = $('#package-type').val();
  bookingInfo.date = $('#date-input').val();
  bookingInfo.child = $('#child-input').val();
  bookingInfo.junior = $('#junior-input').val();
  bookingInfo.adult = $('#adult-input').val();

  $('#first-name-display').text(bookingInfo.firstName);
  $('#last-name-display').text(bookingInfo.lastName);
  $('#address-display').text(bookingInfo.address);
  $('#email-display').text(bookingInfo.email);
  $('#phone-display').text(bookingInfo.phone);
  $('#package-display').text(bookingInfo.package);
  $('#date-display').text(bookingInfo.date);
  $('#child-display').text(bookingInfo.child);
  $('#junior-display').text(bookingInfo.junior);
  $('#adult-display').text(bookingInfo.adult);
};

$(document).ready(function () {

  var navListItems = $('div.setup-panel div a'),
    allWells = $('.setup-content'),
    allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
    e.preventDefault();
    var $target = $($(this).attr('href')),
      $item = $(this);

    if (!$item.hasClass('disabled')) {
      navListItems.removeClass('btn-primary').addClass('btn-default');
      $item.addClass('btn-primary');
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
    }
  });

  allNextBtn.click(function () {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
      curInputs = curStep.find("input[type='text'],input[type='url']"),
      isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
    }

    if (isValid){
      nextStepWizard.removeAttr('disabled').trigger('click');
      if (curStepBtn === 'step-2') {
        showConfirmInfo();
      }
    }
  });

  $('div.setup-panel div a.btn-primary').trigger('click');
});


