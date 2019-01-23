;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    './packages/core/dist/colors.js': function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.colors = {
          grey: '#8692A6',
          grey50: '#FAFAFA',
          grey100: '#ECEEF2',
          grey200: '#D6DAE2',
          grey300: '#C1C7D4',
          grey400: '#A2AEC2',
          grey500: '#8692A6',
          grey600: '#6E7A8C',
          grey700: '#4F5A6A',
          grey800: '#2C3644',
          grey900: '#151A21',
          blue: '#3BB2DD',
          blue100: '#C3E9F6',
          blue200: '#77CFEE',
          blue500: '#3BB2DD',
          blue700: '#0B88B6',
          red: '#EC3853',
          red100: '#F4BAC3',
          red200: '#F3798B',
          red500: '#EC3853',
          red700: '#B4152C',
        })
    },
    './packages/core/dist/createGlobalStylePismo.js': function(e, t, n) {
      'use strict'
      var o =
        (this && this.__makeTemplateObject) ||
        function(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        i = n('./node_modules/polished/dist/polished.es.js'),
        s = n('./packages/core/dist/styled.js')
      ;(t.baseStyle = function(e) {
        return {
          fontFamily: e.fontFamily,
          color: e.fontColor,
          fontsize: e.fontSizeBase,
          lineHeight: e.lineHeightBase,
          backgroundColor: e.background,
          height: '100%',
        }
      }),
        (t.createGlobalStylePismo = function(e) {
          return (
            void 0 === e && (e = ''),
            s.withTheme(
              s.createGlobalStyle(
                r ||
                  (r = o(
                    [
                      '\n  ',
                      "\n  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i');\n\n  html, body, #root, #router {\n    ",
                      '\n  }\n  ',
                      '\n',
                    ],
                    [
                      '\n  ',
                      "\n  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i');\n\n  html, body, #root, #router {\n    ",
                      '\n  }\n  ',
                      '\n',
                    ],
                  )),
                i.normalize,
                function(e) {
                  var n = e.theme
                  return t.baseStyle(n)
                },
                e,
              ),
            )
          )
        })
    },
    './packages/core/dist/index.js': function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n('./packages/core/dist/styled.js')
      t.styled = o.default
      var r = n('./packages/core/dist/createGlobalStylePismo.js')
      t.createGlobalStylePismo = r.createGlobalStylePismo
      var i = n('./packages/core/dist/themePismo.js')
      t.themePismo = i.themePismo
      var s = n('./packages/core/dist/styled.js')
      ;(t.css = s.css),
        (t.createGlobalStyle = s.createGlobalStyle),
        (t.keyframes = s.keyframes),
        (t.ThemeProvider = s.ThemeProvider),
        (t.withTheme = s.withTheme)
      var a = n('./node_modules/@rebass/grid/dist/index.js')
      ;(t.Box = a.Box), (t.Flex = a.Flex)
      var l = n('./packages/core/dist/typography.js')
      ;(t.H1 = l.H1), (t.H2 = l.H2), (t.H3 = l.H3), (t.H4 = l.H4), (t.P = l.P), (t.Small = l.Small), (t.Tiny = l.Tiny)
      var c = n('./packages/core/dist/colors.js')
      t.colors = c.colors
      var u = n('./packages/core/dist/media.js')
      t.media = u.media
    },
    './packages/core/dist/media.js': function(e, t, n) {
      'use strict'
      var o =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
          },
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                  for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                return e
              }).apply(this, arguments)
          }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i,
        s = n('./node_modules/styled-components/dist/styled-components.browser.esm.js').css,
        a = { desktop: 1025, tablet: 900, mobile: 737 }
      t.media = Object.keys(a).reduce(function(e, t) {
        var n,
          l = t.includes('desktop') ? 'min' : 'max'
        return r(
          {},
          e,
          (((n = {})[t] = function(e) {
            return s(
              i ||
                (i = o(
                  ['\n    @media (', '-width: ', 'em) {\n      ', '\n    }\n  '],
                  ['\n    @media (', '-width: ', 'em) {\n      ', '\n    }\n  '],
                )),
              l,
              a[t] / 16,
              s(e),
            )
          }),
          n),
        )
      }, {})
    },
    './packages/core/dist/styled.js': function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        r = o.default,
        i = o.css,
        s = o.createGlobalStyle,
        a = o.keyframes,
        l = o.ThemeProvider,
        c = o.withTheme
      ;(t.css = i),
        (t.createGlobalStyle = s),
        (t.keyframes = a),
        (t.ThemeProvider = l),
        (t.withTheme = c),
        (t.default = r)
    },
    './packages/core/dist/themePismo.js': function(e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.themePismo = {
          background: '#fafafa',
          primary: '#D6DAE2',
          fontColor: '#2c3644',
          fontColorSmall: '#8692a6',
          fontFamily: "'Lato', sans-serif",
          fontSizeBase: '16px',
          lineHeightBase: '1.5',
        })
    },
    './packages/core/dist/typography.js': function(e, t, n) {
      'use strict'
      var o =
        (this && this.__makeTemplateObject) ||
        function(e, t) {
          return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
        }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var r,
        i,
        s,
        a,
        l,
        c,
        u,
        f = n('./packages/core/dist/styled.js'),
        d = function(e) {
          return { light: 300, regular: 400, bold: 700, black: 900, default: 400 }[e.split(' ')[0] || 'default']
        }
      ;(t.H1 = f.default.h1(
        r ||
          (r = o(
            ['\n  font-size: 2.075rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            ['\n  font-size: 2.075rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
          )),
        function(e) {
          var t = e.fontStyle
          return d(void 0 === t ? '' : t)
        },
        function(e) {
          var t = e.fontStyle
          return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
        },
      )),
        (t.H2 = f.default.h2(
          i ||
            (i = o(
              ['\n  font-size: 1.725rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 1.725rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var t = e.fontStyle
            return d(void 0 === t ? '' : t)
          },
          function(e) {
            var t = e.fontStyle
            return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
          },
        )),
        (t.H3 = f.default.h3(
          s ||
            (s = o(
              ['\n  font-size: 1.4375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 1.4375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var t = e.fontStyle
            return d(void 0 === t ? '' : t)
          },
          function(e) {
            var t = e.fontStyle
            return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
          },
        )),
        (t.H4 = f.default.h4(
          a ||
            (a = o(
              ['\n  font-size: 1.2rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 1.2rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var t = e.fontStyle
            return d(void 0 === t ? '' : t)
          },
          function(e) {
            var t = e.fontStyle
            return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
          },
        )),
        (t.P = f.default.p(
          l ||
            (l = o(
              ['\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var t = e.fontStyle
            return d(void 0 === t ? '' : t)
          },
          function(e) {
            var t = e.fontStyle
            return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
          },
        )),
        (t.Small = f.default.small(
          c ||
            (c = o(
              ['\n  font-size: 0.83125rem;\n  color: ', ';\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 0.83125rem;\n  color: ', ';\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            return e.theme.fontColorSmall
          },
          function(e) {
            var t = e.fontStyle
            return d(void 0 === t ? '' : t)
          },
          function(e) {
            var t = e.fontStyle
            return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
          },
        )),
        (t.Tiny = f.default.small(
          u ||
            (u = o(
              ['\n  font-size: 0.69375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 0.69375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var t = e.fontStyle
            return d(void 0 === t ? '' : t)
          },
          function(e) {
            var t = e.fontStyle
            return (void 0 === t ? '' : t).split(' ')[1] || 'normal'
          },
        ))
    },
    './packages/form-section/FormSection.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        i = n('./node_modules/@mdx-js/tag/dist/index.js'),
        s = n('./node_modules/docz/dist/index.m.js'),
        a = n('./packages/core/dist/index.js')
      function l() {
        var e = u(['\n    justify-content: center;\n    flex-direction: column;\n  '])
        return (
          (l = function() {
            return e
          }),
          e
        )
      }
      function c() {
        var e = u(['\n  justify-content: space-between;\n\n  ', '\n'])
        return (
          (c = function() {
            return e
          }),
          e
        )
      }
      function u(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
      }
      var f = Object(a.styled)(a.Flex)(c(), a.media.mobile(l()))
      try {
        ;(f.displayName = 'FormSection'),
          (f.__docgenInfo = {
            description: '',
            displayName: 'FormSection',
            props: {
              theme: {
                defaultValue: null,
                description: '',
                name: 'theme',
                required: !1,
                type: { name: 'ThemeInterface' },
              },
              as: {
                defaultValue: null,
                description:
                  "Typing Note: prefer using .withComponent for now as it is actually type-safe.\n\nString types need to be cast to themselves to become literal types (as={'a' as 'a'}).",
                name: 'as',
                required: !1,
                type: {
                  name:
                    '"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 154 more ... | FunctionComponent<...>',
                },
              },
            },
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/form-section/FormSection.tsx#FormSection'] = {
              docgenInfo: f.__docgenInfo,
              name: 'FormSection',
              path: 'packages/form-section/FormSection.tsx#FormSection',
            })
      } catch (b) {}
      function d(e) {
        return (d =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function m(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++)
            (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function y(e, t) {
        return !t || ('object' !== d(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function A(e, t) {
        return (A =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      n.d(t, 'default', function() {
        return h
      })
      var h = (function(e) {
        function t(e) {
          var n
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            ((n = y(this, g(t).call(this, e))).layout = null),
            n
          )
        }
        var n, o, a
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && A(e, t)
          })(t, r.a.Component),
          (n = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components,
                  n = m(e, ['components'])
                return r.a.createElement(
                  i.MDXTag,
                  { name: 'wrapper', components: t },
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h1', components: t, props: { id: 'formsection' } },
                    'FormSection',
                  ),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: t, props: { id: 'basic-usage' } },
                    'Basic usage',
                  ),
                  r.a.createElement(
                    s.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAxYUiGcLYe3MeQ3RNdpPTggQEKQgZUH9AV7U1c00LlBVzXacFUF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ34gAWUT2AANlE8T1jAECYJ9aBEn4_hnEORFHUwdgAAUhH4JYiGoSg4CkxE1JrDSaGcCB6MudgAEY5Ik-QqJoqYAEE5jY9hI2g8gbCgdBw3YeROTYsQwpjGR2FRFiYG4YBD0Y5jsXkbda2ASLoBi4IADJyvGRJ5koZoSui2LuGa-UwFCajkPadgAH4NlK8NIwSq4GrK1A_JrKQZGrd8zFhDVjhgMAwigKZBsS5KJuClca0TIMpRwGDMhSa8CEK2s6ywnCpTwsR9WSS7EOu6gpAe3DqDOutJD2ggDqOk7CqkLbprMb8QFep7UBwAg4CwIDdFAgxwMI-boJg2AsCs7IIFcJZ0tgHJUONMiAAEZlsazJC8FaLSoLpKIDF0sCIotUFo8HkNCvHskjNHsE5Yp1nUPIYjARIaZA_QrjsyUYAtQICBGIJUFVBmLAAEmAY8WFcHBrI8aAYAFnb2CF1EIFF8W9BoYb9AyFXzrAdGrQgLoIeGygoFCIhlfWYpxqN0H7O2Vw0gAuBqDhiWwJATia34VAfSZJB2H4IFiSqbwMgtX9ySTiSLH4VgMnyah-CufgBJwSuBMs9Z-HKch-hmZCy5TkBArSwjYBhLAfVzhbyUoRI8zyApJy1cXyhBTOBFruOQCiNBW_4VRsDDueC5ATB5gjaiIHgVvY_O_gzSlZeQE8pScAAdiri14hmPwcAAJg32t-FJ8nKEpj3LVppPy4gAAHqV2TFXN-m9T6WmtOfS-N874Pyfq_EA6xxryFBunaoHxqCQBSGHCO2h4b6AYJxEAtBfRZDLqnM0tALRQPvnMfg6D5AsKAA',
                      __position: 0,
                      __code: '<FormSection>My FormSection</FormSection>',
                      __scope: { props: this ? this.props : n, FormSection: f },
                    },
                    r.a.createElement(f, null, 'My FormSection'),
                  ),
                  r.a.createElement(i.MDXTag, { name: 'h1', components: t, props: { id: 'propstable' } }, 'PropsTable'),
                  r.a.createElement(s.f, { of: f }),
                )
              },
            },
          ]) && p(n.prototype, o),
          a && p(n, a),
          t
        )
      })()
    },
  },
])
//# sourceMappingURL=packages-form-section-form-section.8e2318af906385de48ca.js.map
