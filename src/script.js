// top-up button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topUpBtn").style.display = "block";
  } else {
    document.getElementById("topUpBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


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
// contact

// Ticket Tab

const showConfirmInfo = () => {
  const bookingInfo = {};
  let totalPrice = 0;
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

  if (bookingInfo.package === "Weekday Pack") {
    totalPrice = bookingInfo.child * 15 + bookingInfo.junior * 20 + bookingInfo.adult * 30;
  } else if (bookingInfo.package === "Weekend Pack") {
    totalPrice = bookingInfo.child * 20 + bookingInfo.junior * 25 + bookingInfo.adult * 35;
  } else {
    totalPrice = bookingInfo.child * 17 + bookingInfo.junior * 22 + bookingInfo.adult * 32;
  }

  $('#first-name-display').text(bookingInfo.firstName);
  $('#last-name-display').text(bookingInfo.lastName);
  $('#address-display').text(bookingInfo.address);
  $('#email-display').text(bookingInfo.email);
  $('#phone-display').text(bookingInfo.phone);
  $('#package-display').text(bookingInfo.package);
  $('#date-display').text(bookingInfo.date);
  $('#child-display').text(bookingInfo.child ? bookingInfo.child : 0);
  $('#junior-display').text(bookingInfo.junior ? bookingInfo.junior : 0);
  $('#adult-display').text(bookingInfo.adult ? bookingInfo.adult : 0);
  $('#price-display').text(`$${totalPrice}`);
};

const validateStep1 = () => {
  const childTicketForm = $('.child-ticket-input-form');
  const childTicket = $('#child-input').val();
  if (childTicket < 0) {
    childTicketForm.append('<div class="error">Minimum value is 0</div>');
    return;
  }

  const juniorTicketForm = $('.junior-ticket-input-form');
  const juniorTicket = $('#junior-input').val();
  if (juniorTicket < 0) {
    juniorTicketForm.append('<div class="error">Minimum value is 0</div>');
    return;
  }

  const adultTicketForm = $('.adult-ticket-input-form');
  const adultTicket = $('#adult-input').val();
  if (adultTicket < 0) {
    adultTicketForm.append('<div class="error">Minimum value is 0</div>');
    return;
  }
}

$(document).ready(function () {

  let navListItems = $('div.setup-panel div a'),
    allWells = $('.setup-content'),
    allNextBtn = $('.nextBtn'),
    allBackBtn = $('.backBtn');

  allWells.hide();

  navListItems.click(function (e) {
    e.preventDefault();
    let $target = $($(this).attr('href')),
      $item = $(this);

    if (!$item.hasClass('disabled')) {
      navListItems.removeClass('btn-primary').addClass('btn-default');
      $item.addClass('btn-primary');
      allWells.hide();
      $target.show();
      $target.find('input:eq(0)').focus();
    }
  });

// Next Button

  allNextBtn.click(function () {
    let curStep = $(this).closest(".setup-content");
    let curStepBtn = curStep.attr("id");
    let nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a");
    console.log(nextStepWizard);
    let curInputs = curStep.find("input[type='text'],input[type='date'],input[type='number']");
    let isValid = true;

    if (curStepBtn === 'step-1') {
      validateStep1();
    }

    $(".form-group").removeClass("has-error");
    for (let i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i]).closest(".form-group").addClass("has-error");
      }
    }

    if (isValid) {
      nextStepWizard.removeAttr('disabled').trigger('click');
      if (curStepBtn === 'step-2') {
        showConfirmInfo();
      }
    }
  });

// back button
  allBackBtn.click(function () {
    let curStep = $(this).closest(".setup-content");
    let curStepBtn = curStep.attr("id");
    let backStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a");
    backStepWizard.trigger('click');
  });

  $('div.setup-panel div a.btn-primary').trigger('click');

//faq
// Add smooth scrolling to all links
  $(".anchor-link").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 110
      }, 800);
    } // End if
  });

  let $sticky = $('.sticky');
  let $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists
    let generalSidebarHeight = $sticky.innerHeight();
    let stickyTop = $sticky.offset().top;
    let stickOffset = 100;
    let stickyStopperPosition = $stickyrStopper.offset().top;
    let stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    let diff = stopPoint + stickOffset;

    $(window).scroll(function () { // scroll event
      let windowTop = $(window).scrollTop(); // returns number
      console.log('Kim kute');

      if (stopPoint < windowTop) {
        $sticky.css({position: 'absolute', top: diff});
      } else if (stickyTop < windowTop + stickOffset) {
        $sticky.css({position: 'fixed', top: stickOffset});
      } else {
        $sticky.css({position: 'absolute', top: 'initial'});
      }
    });

  }
// calendar


});



