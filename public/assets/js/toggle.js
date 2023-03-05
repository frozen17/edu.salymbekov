(function (a) {
  (a.superfish = {}),
    (a.superfish.o = []),
    (a.superfish.op = {}),
    (a.superfish.defaults = {
      hoverClass: "sfHover",
      pathClass: "overideThisToUse",
      delay: 800,
      animation: { opacity: "show" },
      speed: "normal",
      oldJquery: !1,
      disableHI: !1,
      onInit: function () {},
      onBeforeShow: function () {},
      onShow: function () {},
      onHide: function () {},
    }),
    (a.fn.superfish = function (b) {
      var c = "sfbreadcrumb",
        d = function () {
          var b = a(this),
            c = f(b);
          g(c, !0),
            clearTimeout(c.sfTimer),
            b.showSuperfishUl().siblings().hideSuperfishUl();
        },
        e = function () {
          var b = a(this),
            e = f(b),
            h = g(e, !0);
          clearTimeout(e.sfTimer),
            b.is("." + c) ||
              (e.sfTimer = setTimeout(function () {
                b.hideSuperfishUl(), h.$path.length && d.call(h.$path);
              }, h.delay));
        },
        f = function (a) {
          return a.parents("ul.superfish:first")[0];
        },
        g = function (b, c) {
          b = c ? b : f(b);
          return (a.superfish.op = a.superfish.o[b.serial]);
        },
        h = function () {
          return a.superfish.op.oldJquery ? "li[ul]" : "li:has(ul)";
        };
      return this.each(function () {
        var f = (this.serial = a.superfish.o.length),
          g = a.extend({}, a.superfish.defaults, b);
        (g.$path = a("li." + g.pathClass, this).each(function () {
          a(this)
            .addClass(g.hoverClass + " " + c)
            .filter(h())
            .removeClass(g.pathClass);
        })),
          (a.superfish.o[f] = a.superfish.op = g),
          a(h(), this)
            [a.fn.hoverIntent && !g.disableHI ? "hoverIntent" : "hover"](d, e)
            .not("." + c)
            .hideSuperfishUl();
        var i = a("a", this);
        i.each(function (a) {
          var b = i.eq(a).parents("li");
          i.eq(a)
            .focus(function () {
              d.call(b);
            })
            .blur(function () {
              e.call(b);
            });
        }),
          g.onInit.call(this);
      }).addClass("superfish");
    }),
    a.fn.extend({
      hideSuperfishUl: function () {
        var b = a.superfish.op,
          c = a("li." + b.hoverClass, this)
            .add(this)
            .removeClass(b.hoverClass)
            .find(">ul")
            .hide()
            .css("visibility", "hidden");
        b.onHide.call(c);
        return this;
      },
      showSuperfishUl: function () {
        var b = a.superfish.op,
          c = this.addClass(b.hoverClass)
            .find(">ul:hidden")
            .css("visibility", "visible");
        b.onBeforeShow.call(c),
          c.animate(b.animation, b.speed, function () {
            b.onShow.call(this);
          });
        return this;
      },
    }),
    a(window).unload(function () {
      a("ul.superfish").each(function () {
        a("li", this).unbind(
          "mouseover",
          "mouseout",
          "mouseenter",
          "mouseleave"
        );
      });
    });
})(jQuery);
(function (a) {
  (function (a) {
    a.fn.bgIframe = a.fn.bgiframe = function (b) {
      if (a.browser.msie && /6.0/.test(navigator.userAgent)) {
        b = a.extend(
          {
            top: "auto",
            left: "auto",
            width: "auto",
            height: "auto",
            opacity: !0,
            src: "javascript:false;",
          },
          b || {}
        );
        var c = function (a) {
            return a && a.constructor == Number ? a + "px" : a;
          },
          d =
            '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' +
            b.src +
            '"' +
            'style="display:block;position:absolute;z-index:-1;' +
            (b.opacity !== !1 ? "filter:Alpha(Opacity='0');" : "") +
            "top:" +
            (b.top == "auto"
              ? "expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')"
              : c(b.top)) +
            ";" +
            "left:" +
            (b.left == "auto"
              ? "expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')"
              : c(b.left)) +
            ";" +
            "width:" +
            (b.width == "auto"
              ? "expression(this.parentNode.offsetWidth+'px')"
              : c(b.width)) +
            ";" +
            "height:" +
            (b.height == "auto"
              ? "expression(this.parentNode.offsetHeight+'px')"
              : c(b.height)) +
            ";" +
            '"/>';
        return this.each(function () {
          a("> iframe.bgiframe", this).length == 0 &&
            this.insertBefore(document.createElement(d), this.firstChild);
        });
      }
      return this;
    };
  })(jQuery),
    (a.fn.hoverIntent = function (b, c) {
      var d = { sensitivity: 7, interval: 100, timeout: 0 };
      d = a.extend(d, c ? { over: b, out: c } : b);
      var e,
        f,
        g,
        h,
        i = function (a) {
          (e = a.pageX), (f = a.pageY);
        },
        j = function (b, c) {
          c.hoverIntent_t = clearTimeout(c.hoverIntent_t);
          if (Math.abs(g - e) + Math.abs(h - f) < d.sensitivity) {
            a(c).unbind("mousemove", i), (c.hoverIntent_s = 1);
            return d.over.apply(c, [b]);
          }
          (g = e),
            (h = f),
            (c.hoverIntent_t = setTimeout(function () {
              j(b, c);
            }, d.interval));
        },
        k = function (a, b) {
          (b.hoverIntent_t = clearTimeout(b.hoverIntent_t)),
            (b.hoverIntent_s = 0);
          return d.out.apply(b, [a]);
        },
        l = function (b) {
          var c =
            (b.type == "mouseover" ? b.fromElement : b.toElement) ||
            b.relatedTarget;
          while (c && c != this)
            try {
              c = c.parentNode;
            } catch (b) {
              c = this;
            }
          if (c == this) return !1;
          var e = jQuery.extend({}, b),
            f = this;
          f.hoverIntent_t && (f.hoverIntent_t = clearTimeout(f.hoverIntent_t)),
            b.type == "mouseover"
              ? ((g = e.pageX),
                (h = e.pageY),
                a(f).bind("mousemove", i),
                f.hoverIntent_s != 1 &&
                  (f.hoverIntent_t = setTimeout(function () {
                    j(e, f);
                  }, d.interval)))
              : (a(f).unbind("mousemove", i),
                f.hoverIntent_s == 1 &&
                  (f.hoverIntent_t = setTimeout(function () {
                    k(e, f);
                  }, d.timeout)));
        };
      return this.mouseover(l).mouseout(l);
    });
})(jQuery);
(function (a) {
  a.fn.supposition = function () {
    var b = a(window),
      c = function (a) {
        return (
          window[a == "y" ? "pageYOffset" : "pageXOffset"] ||
          (document.documentElement &&
            document.documentElement[a == "y" ? "scrollTop" : "scrollLeft"]) ||
          document.body[a == "y" ? "scrollTop" : "scrollLeft"]
        );
      },
      d = function () {
        $topNav = a("li", this);
        var b = parseInt($topNav.css("z-index")) + $topNav.length;
        $topNav.each(function () {
          a(this).css({ zIndex: --b });
        });
      },
      e = function () {
        this.css({ marginTop: "", marginLeft: "" }),
          this.removeClass("sfRight");
      },
      f = function () {
        this.each(function () {
          var d = a(this);
          d.css("display", "block");
          var e = d.width(),
            f = d.parents("ul").width(),
            g = b.width() + c("x"),
            h = d.offset().left + e + 6;
          var o = d.offset();
          if (o && d.children(":first").length) {
            var cw = d.children(":first").width();
            if (o.left - cw < cw) {
              d.parents(".sub-menu").removeClass("sfRight");
            }
          }
          (d.parents(".sub-menu").hasClass("sfRight") || h > g) &&
            (d.css(
              "margin-left",
              d.parents("ul").length == 1 ? g - h : -(e + f)
            ),
            d.addClass("sfRight"),
            d.closest("li").closest("ul").addClass("sfRight")),
            d.css("display", "none");
        });
      };
    return this.each(function () {
      var b = a.superfish.o[this.serial],
        c = b.onInit,
        g = b.onBeforeShow,
        h = b.onHide;
      a.extend(a.superfish.o[this.serial], {
        onInit: function () {
          d.call(this), c.call(this);
        },
        onBeforeShow: function () {
          f.call(this), g.call(this);
        },
        onHide: function () {
          e.call(this), h.call(this);
        },
      });
    });
  };
})(jQuery);

jQuery(document).ready(function () {
  jQuery(".offer_group").each();

  /*	Toggles and Tabs */
  jQuery(".toggle_container:not('.active')").hide();
  jQuery("h4.trigger").click(function () {
    jQuery(this).toggleClass("active").next().slideToggle("normal");

    return false;
  });

  if (jQuery(".tabgroup").length) {
    jQuery(".tabgroup").tabs().show();
  }
});
