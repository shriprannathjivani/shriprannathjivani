$(function () {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 68) {
            header.addClass("darkHeader");
        } else {
            header.removeClass("darkHeader");
        }
    });
    feather.replace();

});


$('.eventBox').slick({
    centerMode: false,
    centerPadding: '0px',
    dots: false,
    autoplay: true,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('ShortNotes-carousel').slick({
    focusOnSelect: true,
    centerMode: false,
    centerPadding: '10px',
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
    arrows: true,
    dots: false,
    autoplay: false,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();


$('.kidsLesson').slick({
  centerMode: false,
  centerPadding: '0px',
  dots: true,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
  nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
  speed: 300,
  arrows: true,
  autoplay: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//eventsLesson
$('.eventsLesson').slick({
  centerMode: false,
  centerPadding: '0px',
  dots: false,
  autoplay: true,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
  nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
  speed: 300,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
//TestimonialSlider

$('.TestimonialSlider').slick({
  adaptiveHeight: true,
  centerMode: false,
  centerPadding: '0px',
  dots: false,
  infinite: true,
  prevArrow: '<button type="button" class="slick-prev"> <i data-feather="arrow-left"></i> </button>',
  nextArrow: '<button type="button" class="slick-next"><i data-feather="arrow-right"></i></button>',
  speed: 300,
  autoplay: true,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// Satguru 

$('.satgure-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  asNavFor: '.satgure-for'
});
$('.satgure-for').slick({
  centerMode: true,
  centerPadding: '1rem',
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.satgure-nav',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
	
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
      pageLanguage: '/auto/', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false, includedLanguages: 'hi,gu,en,ne',
  }, 'google_translate_element');
}

// leaf design

 
var LeafScene = function(el) {
  this.viewport = el;
  this.world = document.createElement('div');
  this.leaves = [];

  this.options = {
    numLeaves: 15,
    wind: {
      magnitude: 1.2,
      maxSpeed: 12,
      duration: 300,
      start: 0,
      speed: 0
    },
  };

  this.width = this.viewport.offsetWidth;
  this.height = this.viewport.offsetHeight;

  // animation helper
  this.timer = 0;

  this._resetLeaf = function(leaf) {

    // place leaf towards the top left
    leaf.x = this.width * 2 - Math.random()*this.width*1.75;
    leaf.y = -10;
    leaf.z = Math.random()*150;
    if (leaf.x > this.width) {
      leaf.x = this.width + 10;
      leaf.y = Math.random()*this.height/2;
    }
    // at the start, the leaf can be anywhere
    if (this.timer == 0) {
      leaf.y = Math.random()*this.height;
    }

    // Choose axis of rotation.
    // If axis is not X, chose a random static x-rotation for greater variability
    leaf.rotation.speed = Math.random()*10;
    var randomAxis = Math.random();
    if (randomAxis > 0.5) {
      leaf.rotation.axis = 'X';
    } else if (randomAxis > 0.25) {
      leaf.rotation.axis = 'Y';
      leaf.rotation.x = Math.random()*180 + 90;
    } else {
      leaf.rotation.axis = 'Z';
      leaf.rotation.x = Math.random()*360 - 180;
      // looks weird if the rotation is too fast around this axis
      leaf.rotation.speed = Math.random()*3;
    }

    // random speed
    leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
    leaf.ySpeed = Math.random() + 1.5;

    return leaf;
  }

  this._updateLeaf = function(leaf) {
    var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

    var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
    leaf.x -= xSpeed;
    leaf.y += leaf.ySpeed;
    leaf.rotation.value += leaf.rotation.speed;

    var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
    if (leaf.rotation.axis !== 'X') {
      t += ' rotateX(' + leaf.rotation.x + 'deg)';
    }
    leaf.el.style.webkitTransform = t;
    leaf.el.style.MozTransform = t;
    leaf.el.style.oTransform = t;
    leaf.el.style.transform = t;

    // reset if out of view
    if (leaf.x < -10 || leaf.y > this.height + 10) {
      this._resetLeaf(leaf);
    }
  }

  this._updateWind = function() {
    // wind follows a sine curve: asin(b*time + c) + a
    // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
    // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

    if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

      this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
      this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
      this.options.wind.start = this.timer;

      var screenHeight = this.height;

      this.options.wind.speed = function(t, y) {
        // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
        var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
        return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
      }
    }
  }
}

LeafScene.prototype.init = function() {

  for (var i = 0; i < this.options.numLeaves; i++) {
    var leaf = {
      el: document.createElement('div'),
      x: 0,
      y: 0,
      z: 0,
      rotation: {
        axis: 'X',
        value: 0,
        speed: 0,
        x: 0
      },
      xSpeedVariation: 0,
      ySpeed: 0,
      path: {
        type: 1,
        start: 0,

      },
      image: 1
    };
    this._resetLeaf(leaf);
    this.leaves.push(leaf);
    this.world.appendChild(leaf.el);
  }

  this.world.className = 'leaf-scene';
  this.viewport.appendChild(this.world);

  // set perspective
  this.world.style.webkitPerspective = "400px";
  this.world.style.MozPerspective = "400px";
  this.world.style.oPerspective = "400px";
  this.world.style.perspective = "400px";
  
  // reset window height/width on resize
  var self = this;
  window.onresize = function(event) {
    self.width = self.viewport.offsetWidth;
    self.height = self.viewport.offsetHeight;
  };
}

LeafScene.prototype.render = function() {
  this._updateWind();
  for (var i = 0; i < this.leaves.length; i++) {
    this._updateLeaf(this.leaves[i]);
  }

  this.timer++;

  requestAnimationFrame(this.render.bind(this));
}

// start up leaf scene
var leafContainer = document.querySelector('.falling-leaves'),
    leaves = new LeafScene(leafContainer);

leaves.init();
leaves.render();

$('.count').each(function () {
  totalReview = document.getElementsByClassName('TestimonialSliderItem').length;
  console.log(totalReview);
  $(this).prop('Counter',0).animate({
      Counter: totalReview
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

