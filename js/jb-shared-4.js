
  this.gbar_ = this.gbar_ || {};
  (function (_) {
    var window = this;
    try {
      if (_.Y) {
        var cj = _.Y,
          dj;
        if (dj = _.B(cj.f, 3))
          for (var ej = _.xh(dj), fj = 0; fj < ej.length; fj++) _.Jh(ej[fj], "ogpc", "");
        _.Ti(cj, !!cj.b && cj.b.Jb(), !1)
      };
    } catch (e) {
      _._DumpException(e)
    }
    try {
      _.gj = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(_.gj, _.z);
    } catch (e) {
      _._DumpException(e)
    }
    try {
      var hj = function (a) {
        _.A(this, a, 0, -1, null)
      };
      _.v(hj, _.z);
      var ij = _.F(_.vc, hj, 17) || new hj,
        jj, kj = (jj = _.F(ij, _.gj, 1)) ? _.td(_.B(jj, 4) || "") : null,
        lj, mj = (lj = _.F(ij, _.gj, 2)) ? _.td(_.B(lj, 4) || "") : null,
        nj = function (a, c, d) {
        },
        pj = function (a, c, d) {
          _.Bc.log(47, {
            att: a,
            max: c,
            url: d
          });
          a < c ? oj(a + 1, c) : _.L.log(Error("R`" + a + "`" + c), {
            url: d
          })
        },
        oj = function (a, c) {
          if (kj) {
            var d = _.Md("SCRIPT");
            d.async = !0;
            d.type = "text/javascript";
            d.charset = "UTF-8";
            _.Id(d, kj);
            d.onload = _.Zc(nj, a, c, d.src);
            d.onerror = _.Zc(pj, a, c, d.src);
            _.Kd("HEAD")[0].appendChild(d)
          }
        };
      oj(1, 2);
      if (mj) {
        var qj = _.Md("LINK");
        qj.setAttribute("type", "text/css");
        qj.rel = "stylesheet";
        qj.href = _.sd(mj);
        _.Kd("HEAD")[0].appendChild(qj)
      };
    } catch (e) {
      _._DumpException(e)
    }
  })(this.gbar_);
