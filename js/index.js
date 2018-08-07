$(function () {
  $('#calendar').fullCalendar({
    // put your options and callbacks here
    eventRender: function (eventObj, $el) {
      $el.popover({
        title: eventObj.title,
        content: eventObj.start,
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      });
    },
    events: [
      {
        title: '4D Projection Promotion',
        start: '2018-07-31T17:30:00'
      },
      {
        title: 'Fantasmics',
        start: '2018-08-05T14:30:00',
      },
      {
        title: 'My Friend Duffy',
        start: '2018-09-07T16:30:00',
      },
      {
        title: 'Brand New Dream',
        start: '2018-09-09T17:30:00'
      },
      {
        title: 'Out of Shadowland',
        start: '2018-09-15T14:30:00',
      },
      {
        title: 'My Friend Duffy',
        start: '2018-09-16T16:30:00',
      },
      {
        title: 'Journey to the Center of the Earth',
        start: '2018-10-06T17:30:00'
      },
      {
        title: 'Mermaid Lagoon Theater',
        start: '2018-10-07T14:30:00',
      },
      {
        title: 'Toy Story',
        start: '2018-10-20T16:30:00',
      }
    ]
  })
});

$(function () {
  var $gallery = $('.gallery a').simpleLightbox();

  $gallery.on('show.simplelightbox', function () {
    console.log('Requested for showing');
  })
    .on('shown.simplelightbox', function () {
      console.log('Shown');
    })
    .on('close.simplelightbox', function () {
      console.log('Requested for closing');
    })
    .on('closed.simplelightbox', function () {
      console.log('Closed');
    })
    .on('change.simplelightbox', function () {
      console.log('Requested for change');
    })
    .on('next.simplelightbox', function () {
      console.log('Requested for next');
    })
    .on('prev.simplelightbox', function () {
      console.log('Requested for prev');
    })
    .on('nextImageLoaded.simplelightbox', function () {
      console.log('Next image loaded');
    })
    .on('prevImageLoaded.simplelightbox', function () {
      console.log('Prev image loaded');
    })
    .on('changed.simplelightbox', function () {
      console.log('Image changed');
    })
    .on('nextDone.simplelightbox', function () {
      console.log('Image changed to next');
    })
    .on('prevDone.simplelightbox', function () {
      console.log('Image changed to prev');
    })
    .on('error.simplelightbox', function (e) {
      console.log('No image found, go to the next/prev');
      console.log(e);
    });
});