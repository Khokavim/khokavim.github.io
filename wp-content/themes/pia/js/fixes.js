$(function() {
  var $ul = $("#nav > ul");
  var $items = $("#nav > ul li");
  $items.each(function(i,e) {
    $(e)
      .on("touchstart", function() {
        $(e).parent().addClass("pressed")
        $(e).addClass("pressed")
      })
      .on("touchend", function() {
        $(e).parent().removeClass("pressed")
        $(e).removeClass("pressed")
      })
  })

  $(document)
    .on("touchend", function() {
      $items.removeClass("pressed")
      $ul.removeClass("pressed");
    })

  var sr = ScrollReveal({ reset: false });

  $(".numbers .item").each(function(i,e) {
    sr.reveal(e, { duration: 1000, distance: "50px", delay: i * 200 });
  })

  sr.reveal('.feature .image', { duration: 1000, origin: "left", distance: "50px", delay: 500 });
  sr.reveal('.feature .description', { duration: 1000, origin: "right", distance: "50px", delay: 400 });
  sr.reveal('#footer .p-0', { duration: 1000, origin: "top", distance: "50px", delay: 200 });
  sr.reveal('#footer .container', { duration: 1000, origin: "top", distance: "50px", delay: 200 });
  sr.reveal('header h1', { duration: 1000, origin: "right", distance: "50px", delay: 200 });


  // play and show the video
  $("#player").show();
  $("#player").addClass("active")
  var video = document.getElementById("player");
  video.play();

})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var playerWidth = $("#player").width();
var playerHeight = $("#player").height();

function onYouTubeIframeAPIReady() {

  // player = new YT.Player('player', {
  //   height: playerHeight,
  //   width: playerWidth,
  //   videoId: 'z8O-lUiRmWk',
  //   playerVars: {
  //     playlist: 'z8O-lUiRmWk',
  //     controls: 0,
  //     autoplay: 1,
  //     rel: 0,
  //     loop: 1,
  //     modestbranding: 1,
  //   },
  //   loop: 1,
  //   modestbranding: 1,
  //   events: {
  //     'onReady': onPlayerReady,
  //     'onStateChange': onPlayerStateChange
  //   }
  // });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  console.log("ready, play...");
  event.target.setPlaybackQuality('hd720');
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {

  if (event.data == YT.PlayerState.BUFFERING) {
    console.log("quality set to hd720")
    event.target.setPlaybackQuality('hd720');
  }

  if (event.data == YT.PlayerState.PLAYING ) {
    $("#player").addClass("active"); 
  }
}


function resize() {
  var size = [1615, 910];
  var $player = $("#player");
  var $space = $(".video-background");
  var playerWidth = $space.width();
  var playerHeight = $space.height();

  var ratio = size[0]/size[1];

  var newWidth = playerWidth * ratio;
  var newHeight = playerHeight * size[1]/size[0];

  var scaleX = playerWidth / size[0];
  var scaleY = playerHeight / size[1];
  var scale = Math.max(scaleX, scaleY);

  $("#player").css({
    width: size[0] * scale,
    height: size[1] * scale,
  })
}

resize();

$(window)
  .on("resize", resize);

function stopVideo() {
  player.stopVideo();
}


var map;
var style = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

var image = "/wp-content/themes/pia/images/marker.png";
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.60592889068551, lng: -0.1907756979755959},
    zoom: 16,
    styles: style,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    position: { lat: 51.6050285, lng: -0.1886132 },
    icon: image, 
  });
}
    