/**
 * Created by mike on 2/23/16.
 */
$(document).ready(function () {
  $("nav").html(
    '<form style="display: inline" action="services?desktop" method="post">' +
    '    <input type="image" src="img/bigImgs/hp_desktop.jpg" style="height:12em;width:15em" class = "button">' +
    '</form><br>' +
    '<form style="display: inline" action="services?laptop" method="post">' +
    '    <input type="image" src="img/bigImgs/hp_laptop.jpg" style="height:12em;width:15em" class = "button">' +
    '</form><br>' +
    '<form style="display: inline" action="services?network" method="post">' +
    '    <input type="image" src="img/bigImgs/network.jpg" style="height:12em;width:15em" class = "button">' +
    '</form><br>' +
    '<form style="display: inline" action="services?general" method="post">' +
    '    <input type="image" src="img/A+_Certified.jpg" style="height:12em;width:15em" class = "button">' +
    '</form><br>'

  );

  $("footer").html(
    "&copy; Copyright 2012 - " + new Date().getFullYear() + " Cole Computer Services, LLC.  All rights reserved."
  );
});