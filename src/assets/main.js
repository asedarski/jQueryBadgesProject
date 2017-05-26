$(function () {
  $.ajax({
    url: 'https://www.codeschool.com/users/asedarski.json',
    dataType: 'jsonp',
    success: function (data) {
      populatePageWithCourses(data.courses.completed, '#completed');
      populatePageWithBadges(data.badges);
      populatePageWithCourses(data.courses.in_progress, '#inProgress');

    }
  });
});

function populatePageWithCourses(courses, selector) {
  var $badges = $(selector);
  courses.forEach(function (course) {
    $div = $('<div />', {
      'class': 'course'
    }).appendTo($badges);

    $('<h3 />', {
      text: course.title
    }).appendTo($div);

    $('<img />', {
      src: course.badge
    }).appendTo($div);

    $('<a />', {
      'class': 'btn btn-primary',
      target: '_blank',
      href: course.url,
      text: 'See Course'
    }).appendTo($div);
  });
}

function populatePageWithBadges(badges) {
  var $badges = $('#badges');
  badges.forEach(function (badge) {
    $div = $('<div />', {
      'class': 'achivements'
    }).appendTo($badges);

    $('<h3 />', {
      text: badge.name
    }).appendTo($div);

    $('<img />', {
      src: badge.badge
    }).appendTo($div);
  });
}
