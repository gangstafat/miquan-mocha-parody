// Thông báo nhập số điện thoại không hoạt động
$( document ).ready(function() {
  $("#fake-number").on("click", function() {
    var el = $("#fake-alert");
    if (el.text() === el.data("text-swap")) {
      el.text(el.data("text-org"));
    } else {
      el.data("text-org", el.text());
      el.text(el.data("text-swap"));
    }
  });
});

// Thông báo hem có responsive
