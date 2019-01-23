;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    './packages/core/dist/colors.js': function(e, n, t) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.colors = {
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
    './packages/core/dist/createGlobalStylePismo.js': function(e, n, t) {
      'use strict'
      var a =
        (this && this.__makeTemplateObject) ||
        function(e, n) {
          return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: n }) : (e.raw = n), e
        }
      Object.defineProperty(n, '__esModule', { value: !0 })
      var r,
        i = t('./node_modules/polished/dist/polished.es.js'),
        o = t('./packages/core/dist/styled.js')
      ;(n.baseStyle = function(e) {
        return {
          fontFamily: e.fontFamily,
          color: e.fontColor,
          fontsize: e.fontSizeBase,
          lineHeight: e.lineHeightBase,
          backgroundColor: e.background,
          height: '100%',
        }
      }),
        (n.createGlobalStylePismo = function(e) {
          return (
            void 0 === e && (e = ''),
            o.withTheme(
              o.createGlobalStyle(
                r ||
                  (r = a(
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
                  var t = e.theme
                  return n.baseStyle(t)
                },
                e,
              ),
            )
          )
        })
    },
    './packages/core/dist/index.js': function(e, n, t) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 })
      var a = t('./packages/core/dist/styled.js')
      n.styled = a.default
      var r = t('./packages/core/dist/createGlobalStylePismo.js')
      n.createGlobalStylePismo = r.createGlobalStylePismo
      var i = t('./packages/core/dist/themePismo.js')
      n.themePismo = i.themePismo
      var o = t('./packages/core/dist/styled.js')
      ;(n.css = o.css),
        (n.createGlobalStyle = o.createGlobalStyle),
        (n.keyframes = o.keyframes),
        (n.ThemeProvider = o.ThemeProvider),
        (n.withTheme = o.withTheme)
      var l = t('./node_modules/@rebass/grid/dist/index.js')
      ;(n.Box = l.Box), (n.Flex = l.Flex)
      var u = t('./packages/core/dist/typography.js')
      ;(n.H1 = u.H1), (n.H2 = u.H2), (n.H3 = u.H3), (n.H4 = u.H4), (n.P = u.P), (n.Small = u.Small), (n.Tiny = u.Tiny)
      var d = t('./packages/core/dist/colors.js')
      n.colors = d.colors
      var m = t('./packages/core/dist/media.js')
      n.media = m.media
    },
    './packages/core/dist/media.js': function(e, n, t) {
      'use strict'
      var a =
          (this && this.__makeTemplateObject) ||
          function(e, n) {
            return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: n }) : (e.raw = n), e
          },
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var n, t = 1, a = arguments.length; t < a; t++)
                  for (var r in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                return e
              }).apply(this, arguments)
          }
      Object.defineProperty(n, '__esModule', { value: !0 })
      var i,
        o = t('./node_modules/styled-components/dist/styled-components.browser.esm.js').css,
        l = { desktop: 1025, tablet: 900, mobile: 737 }
      n.media = Object.keys(l).reduce(function(e, n) {
        var t,
          u = n.includes('desktop') ? 'min' : 'max'
        return r(
          {},
          e,
          (((t = {})[n] = function(e) {
            return o(
              i ||
                (i = a(
                  ['\n    @media (', '-width: ', 'em) {\n      ', '\n    }\n  '],
                  ['\n    @media (', '-width: ', 'em) {\n      ', '\n    }\n  '],
                )),
              u,
              l[n] / 16,
              o(e),
            )
          }),
          t),
        )
      }, {})
    },
    './packages/core/dist/styled.js': function(e, n, t) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 })
      var a = t('./node_modules/styled-components/dist/styled-components.browser.esm.js'),
        r = a.default,
        i = a.css,
        o = a.createGlobalStyle,
        l = a.keyframes,
        u = a.ThemeProvider,
        d = a.withTheme
      ;(n.css = i),
        (n.createGlobalStyle = o),
        (n.keyframes = l),
        (n.ThemeProvider = u),
        (n.withTheme = d),
        (n.default = r)
    },
    './packages/core/dist/themePismo.js': function(e, n, t) {
      'use strict'
      Object.defineProperty(n, '__esModule', { value: !0 }),
        (n.themePismo = {
          background: '#fafafa',
          primary: '#D6DAE2',
          fontColor: '#2c3644',
          fontColorSmall: '#8692a6',
          fontFamily: "'Lato', sans-serif",
          fontSizeBase: '16px',
          lineHeightBase: '1.5',
        })
    },
    './packages/core/dist/typography.js': function(e, n, t) {
      'use strict'
      var a =
        (this && this.__makeTemplateObject) ||
        function(e, n) {
          return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: n }) : (e.raw = n), e
        }
      Object.defineProperty(n, '__esModule', { value: !0 })
      var r,
        i,
        o,
        l,
        u,
        d,
        m,
        s = t('./packages/core/dist/styled.js'),
        p = function(e) {
          return { light: 300, regular: 400, bold: 700, black: 900, default: 400 }[e.split(' ')[0] || 'default']
        }
      ;(n.H1 = s.default.h1(
        r ||
          (r = a(
            ['\n  font-size: 2.075rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            ['\n  font-size: 2.075rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
          )),
        function(e) {
          var n = e.fontStyle
          return p(void 0 === n ? '' : n)
        },
        function(e) {
          var n = e.fontStyle
          return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
        },
      )),
        (n.H2 = s.default.h2(
          i ||
            (i = a(
              ['\n  font-size: 1.725rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 1.725rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var n = e.fontStyle
            return p(void 0 === n ? '' : n)
          },
          function(e) {
            var n = e.fontStyle
            return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
          },
        )),
        (n.H3 = s.default.h3(
          o ||
            (o = a(
              ['\n  font-size: 1.4375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 1.4375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var n = e.fontStyle
            return p(void 0 === n ? '' : n)
          },
          function(e) {
            var n = e.fontStyle
            return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
          },
        )),
        (n.H4 = s.default.h4(
          l ||
            (l = a(
              ['\n  font-size: 1.2rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 1.2rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var n = e.fontStyle
            return p(void 0 === n ? '' : n)
          },
          function(e) {
            var n = e.fontStyle
            return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
          },
        )),
        (n.P = s.default.p(
          u ||
            (u = a(
              ['\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var n = e.fontStyle
            return p(void 0 === n ? '' : n)
          },
          function(e) {
            var n = e.fontStyle
            return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
          },
        )),
        (n.Small = s.default.small(
          d ||
            (d = a(
              ['\n  font-size: 0.83125rem;\n  color: ', ';\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 0.83125rem;\n  color: ', ';\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            return e.theme.fontColorSmall
          },
          function(e) {
            var n = e.fontStyle
            return p(void 0 === n ? '' : n)
          },
          function(e) {
            var n = e.fontStyle
            return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
          },
        )),
        (n.Tiny = s.default.small(
          m ||
            (m = a(
              ['\n  font-size: 0.69375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
              ['\n  font-size: 0.69375rem;\n  font-weight: ', ';\n  font-style: ', ';\n'],
            )),
          function(e) {
            var n = e.fontStyle
            return p(void 0 === n ? '' : n)
          },
          function(e) {
            var n = e.fontStyle
            return (void 0 === n ? '' : n).split(' ')[1] || 'normal'
          },
        ))
    },
    './packages/form/Form.mdx': function(e, n, t) {
      'use strict'
      t.r(n)
      var a = t('./node_modules/react/index.js'),
        r = t.n(a),
        i = t('./node_modules/@mdx-js/tag/dist/index.js'),
        o = t('./node_modules/docz/dist/index.m.js'),
        l = t('./packages/core/dist/index.js'),
        u = t('./node_modules/react-icons/md/index.mjs')
      function d() {
        var e = E(['\n  cursor: pointer;\n  color: #2c3644;\n  font-size: 1.2rem;\n  margin-right: 0.35rem;\n'])
        return (
          (d = function() {
            return e
          }),
          e
        )
      }
      function m() {
        var e = E(['\n  display: flex;\n  align-items: center;\n'])
        return (
          (m = function() {
            return e
          }),
          e
        )
      }
      function s() {
        var e = E(['\n  margin: 0;\n'])
        return (
          (s = function() {
            return e
          }),
          e
        )
      }
      function p() {
        var e = E([
          '\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  border-bottom: 1px solid #f2f3f5;\n  padding: 0.8125rem 1.25rem;\n',
        ])
        return (
          (p = function() {
            return e
          }),
          e
        )
      }
      function v() {
        var e = E(['\n    padding: 2rem;\n  '])
        return (
          (v = function() {
            return e
          }),
          e
        )
      }
      function c() {
        var e = E(['\n  padding: 2rem 0;\n\n  ', '\n'])
        return (
          (c = function() {
            return e
          }),
          e
        )
      }
      function f() {
        var e = E(['\n    width: auto;\n    margin-top: 0;\n  '])
        return (
          (f = function() {
            return e
          }),
          e
        )
      }
      function y() {
        var e = E(['\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  margin: 1rem auto;\n\n  ', '\n'])
        return (
          (y = function() {
            return e
          }),
          e
        )
      }
      function E(e, n) {
        return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }))
      }
      var h = l.styled.form(y(), l.media.mobile(f())),
        g = l.styled.div(c(), l.media.mobile(v())),
        C = l.styled.div(p()),
        V = Object(l.styled)(l.P)(s()),
        q = l.styled.span(m()),
        M = Object(l.styled)(u.a)(d()),
        b = function(e) {
          return function(n) {
            n.preventDefault(), e && e(n)
          }
        },
        T = function(e) {
          var n = e.onClickBack,
            t = e.title,
            r = e.onSubmit,
            i = e.children
          return a.createElement(
            h,
            { onSubmit: b(r) },
            t &&
              a.createElement(
                C,
                null,
                n && a.createElement(q, { onClick: n }, a.createElement(M, null)),
                a.createElement(V, { fontStyle: 'bold' }, t),
              ),
            a.createElement(g, null, i),
          )
        }
      try {
        ;(h.displayName = 'FormWrapper'),
          (h.__docgenInfo = {
            description: '',
            displayName: 'FormWrapper',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: HTMLFormElement) => void) | RefObject<HTMLFormElement>' },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'string | number' },
              },
              acceptCharset: {
                defaultValue: null,
                description: '',
                name: 'acceptCharset',
                required: !1,
                type: { name: 'string' },
              },
              action: { defaultValue: null, description: '', name: 'action', required: !1, type: { name: 'string' } },
              autoComplete: {
                defaultValue: null,
                description: '',
                name: 'autoComplete',
                required: !1,
                type: { name: 'string' },
              },
              encType: { defaultValue: null, description: '', name: 'encType', required: !1, type: { name: 'string' } },
              method: { defaultValue: null, description: '', name: 'method', required: !1, type: { name: 'string' } },
              name: { defaultValue: null, description: '', name: 'name', required: !1, type: { name: 'string' } },
              noValidate: {
                defaultValue: null,
                description: '',
                name: 'noValidate',
                required: !1,
                type: { name: 'boolean' },
              },
              target: { defaultValue: null, description: '', name: 'target', required: !1, type: { name: 'string' } },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: { defaultValue: null, description: '', name: 'dir', required: !1, type: { name: 'string' } },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: { defaultValue: null, description: '', name: 'hidden', required: !1, type: { name: 'boolean' } },
              id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
              lang: { defaultValue: null, description: '', name: 'lang', required: !1, type: { name: 'string' } },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: { defaultValue: null, description: '', name: 'slot', required: !1, type: { name: 'string' } },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: { defaultValue: null, description: '', name: 'is', required: !1, type: { name: 'string' } },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: { defaultValue: null, description: '', name: 'role', required: !1, type: { name: 'string' } },
              about: { defaultValue: null, description: '', name: 'about', required: !1, type: { name: 'string' } },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: { defaultValue: null, description: '', name: 'inlist', required: !1, type: { name: 'any' } },
              prefix: { defaultValue: null, description: '', name: 'prefix', required: !1, type: { name: 'string' } },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: { defaultValue: null, description: '', name: 'typeof', required: !1, type: { name: 'string' } },
              vocab: { defaultValue: null, description: '', name: 'vocab', required: !1, type: { name: 'string' } },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: { defaultValue: null, description: '', name: 'color', required: !1, type: { name: 'string' } },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: { defaultValue: null, description: '', name: 'itemID', required: !1, type: { name: 'string' } },
              itemRef: { defaultValue: null, description: '', name: 'itemRef', required: !1, type: { name: 'string' } },
              results: { defaultValue: null, description: '', name: 'results', required: !1, type: { name: 'number' } },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description: 'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: { name: 'boolean | "time" | "false" | "true" | "page" | "step" | "location" | "date"' },
              },
              'aria-describedby': {
                defaultValue: null,
                description: 'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: { name: '"link" | "none" | "copy" | "execute" | "move" | "popup"' },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: { name: 'boolean | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | "grid"' },
              },
              'aria-hidden': {
                defaultValue: null,
                description: 'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "grammar" | "spelling"' },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description: 'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description: 'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description: 'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description: 'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: { name: '"text" | "additions" | "additions text" | "all" | "removals"' },
              },
              'aria-required': {
                defaultValue: null,
                description: 'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description: 'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description: 'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description: 'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description: 'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description: 'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description: 'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description: 'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLFormElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLFormElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLFormElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLFormElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLFormElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLFormElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLFormElement>) => void' },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLFormElement>) => void' },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLFormElement>) => void' },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLFormElement>) => void' },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLFormElement>) => void' },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLFormElement>) => void' },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLFormElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLFormElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLFormElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLFormElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLFormElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLFormElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLFormElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLFormElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLFormElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLFormElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLFormElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLFormElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLFormElement, MouseEvent>) => void' },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLFormElement, Event>) => void' },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLFormElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLFormElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLFormElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLFormElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLFormElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLFormElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLFormElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLFormElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLFormElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLFormElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLFormElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLFormElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLFormElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLFormElement>) => void' },
              },
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
            (STORYBOOK_REACT_CLASSES['packages/form/Form.tsx#FormWrapper'] = {
              docgenInfo: h.__docgenInfo,
              name: 'FormWrapper',
              path: 'packages/form/Form.tsx#FormWrapper',
            })
      } catch (A) {}
      try {
        ;(g.displayName = 'FormArea'),
          (g.__docgenInfo = {
            description: '',
            displayName: 'FormArea',
            props: {
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
              ref: {
                defaultValue: null,
                description: '',
                name: 'ref',
                required: !1,
                type: { name: '((instance: HTMLDivElement) => void) | RefObject<HTMLDivElement>' },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'string | number' },
              },
              defaultChecked: {
                defaultValue: null,
                description: '',
                name: 'defaultChecked',
                required: !1,
                type: { name: 'boolean' },
              },
              defaultValue: {
                defaultValue: null,
                description: '',
                name: 'defaultValue',
                required: !1,
                type: { name: 'string | string[]' },
              },
              suppressContentEditableWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressContentEditableWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              suppressHydrationWarning: {
                defaultValue: null,
                description: '',
                name: 'suppressHydrationWarning',
                required: !1,
                type: { name: 'boolean' },
              },
              accessKey: {
                defaultValue: null,
                description: '',
                name: 'accessKey',
                required: !1,
                type: { name: 'string' },
              },
              className: {
                defaultValue: null,
                description: '',
                name: 'className',
                required: !1,
                type: { name: 'string' },
              },
              contentEditable: {
                defaultValue: null,
                description: '',
                name: 'contentEditable',
                required: !1,
                type: { name: 'boolean' },
              },
              contextMenu: {
                defaultValue: null,
                description: '',
                name: 'contextMenu',
                required: !1,
                type: { name: 'string' },
              },
              dir: { defaultValue: null, description: '', name: 'dir', required: !1, type: { name: 'string' } },
              draggable: {
                defaultValue: null,
                description: '',
                name: 'draggable',
                required: !1,
                type: { name: 'boolean' },
              },
              hidden: { defaultValue: null, description: '', name: 'hidden', required: !1, type: { name: 'boolean' } },
              id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
              lang: { defaultValue: null, description: '', name: 'lang', required: !1, type: { name: 'string' } },
              placeholder: {
                defaultValue: null,
                description: '',
                name: 'placeholder',
                required: !1,
                type: { name: 'string' },
              },
              slot: { defaultValue: null, description: '', name: 'slot', required: !1, type: { name: 'string' } },
              spellCheck: {
                defaultValue: null,
                description: '',
                name: 'spellCheck',
                required: !1,
                type: { name: 'boolean' },
              },
              tabIndex: {
                defaultValue: null,
                description: '',
                name: 'tabIndex',
                required: !1,
                type: { name: 'number' },
              },
              inputMode: {
                defaultValue: null,
                description: '',
                name: 'inputMode',
                required: !1,
                type: { name: 'string' },
              },
              is: { defaultValue: null, description: '', name: 'is', required: !1, type: { name: 'string' } },
              radioGroup: {
                defaultValue: null,
                description: '',
                name: 'radioGroup',
                required: !1,
                type: { name: 'string' },
              },
              role: { defaultValue: null, description: '', name: 'role', required: !1, type: { name: 'string' } },
              about: { defaultValue: null, description: '', name: 'about', required: !1, type: { name: 'string' } },
              datatype: {
                defaultValue: null,
                description: '',
                name: 'datatype',
                required: !1,
                type: { name: 'string' },
              },
              inlist: { defaultValue: null, description: '', name: 'inlist', required: !1, type: { name: 'any' } },
              prefix: { defaultValue: null, description: '', name: 'prefix', required: !1, type: { name: 'string' } },
              property: {
                defaultValue: null,
                description: '',
                name: 'property',
                required: !1,
                type: { name: 'string' },
              },
              resource: {
                defaultValue: null,
                description: '',
                name: 'resource',
                required: !1,
                type: { name: 'string' },
              },
              typeof: { defaultValue: null, description: '', name: 'typeof', required: !1, type: { name: 'string' } },
              vocab: { defaultValue: null, description: '', name: 'vocab', required: !1, type: { name: 'string' } },
              autoCapitalize: {
                defaultValue: null,
                description: '',
                name: 'autoCapitalize',
                required: !1,
                type: { name: 'string' },
              },
              autoCorrect: {
                defaultValue: null,
                description: '',
                name: 'autoCorrect',
                required: !1,
                type: { name: 'string' },
              },
              autoSave: {
                defaultValue: null,
                description: '',
                name: 'autoSave',
                required: !1,
                type: { name: 'string' },
              },
              color: { defaultValue: null, description: '', name: 'color', required: !1, type: { name: 'string' } },
              itemProp: {
                defaultValue: null,
                description: '',
                name: 'itemProp',
                required: !1,
                type: { name: 'string' },
              },
              itemScope: {
                defaultValue: null,
                description: '',
                name: 'itemScope',
                required: !1,
                type: { name: 'boolean' },
              },
              itemType: {
                defaultValue: null,
                description: '',
                name: 'itemType',
                required: !1,
                type: { name: 'string' },
              },
              itemID: { defaultValue: null, description: '', name: 'itemID', required: !1, type: { name: 'string' } },
              itemRef: { defaultValue: null, description: '', name: 'itemRef', required: !1, type: { name: 'string' } },
              results: { defaultValue: null, description: '', name: 'results', required: !1, type: { name: 'number' } },
              security: {
                defaultValue: null,
                description: '',
                name: 'security',
                required: !1,
                type: { name: 'string' },
              },
              unselectable: {
                defaultValue: null,
                description: '',
                name: 'unselectable',
                required: !1,
                type: { name: '"on" | "off"' },
              },
              'aria-activedescendant': {
                defaultValue: null,
                description:
                  'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
                name: 'aria-activedescendant',
                required: !1,
                type: { name: 'string' },
              },
              'aria-atomic': {
                defaultValue: null,
                description:
                  'Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.',
                name: 'aria-atomic',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-autocomplete': {
                defaultValue: null,
                description:
                  "Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be\npresented if they are made.",
                name: 'aria-autocomplete',
                required: !1,
                type: { name: '"none" | "inline" | "list" | "both"' },
              },
              'aria-busy': {
                defaultValue: null,
                description:
                  'Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user.',
                name: 'aria-busy',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-checked': {
                defaultValue: null,
                description:
                  'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.\n@see aria-pressed\n@see aria-selected.',
                name: 'aria-checked',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-colcount': {
                defaultValue: null,
                description: 'Defines the total number of columns in a table, grid, or treegrid.\n@see aria-colindex.',
                name: 'aria-colcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colindex': {
                defaultValue: null,
                description:
                  "Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.\n@see aria-colcount\n@see aria-colspan.",
                name: 'aria-colindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-colspan': {
                defaultValue: null,
                description:
                  'Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-colindex\n@see aria-rowspan.',
                name: 'aria-colspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-controls': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) whose contents or presence are controlled by the current element.\n@see aria-owns.',
                name: 'aria-controls',
                required: !1,
                type: { name: 'string' },
              },
              'aria-current': {
                defaultValue: null,
                description:
                  'Indicates the element that represents the current item within a container or set of related elements.',
                name: 'aria-current',
                required: !1,
                type: { name: 'boolean | "time" | "false" | "true" | "page" | "step" | "location" | "date"' },
              },
              'aria-describedby': {
                defaultValue: null,
                description: 'Identifies the element (or elements) that describes the object.\n@see aria-labelledby',
                name: 'aria-describedby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-details': {
                defaultValue: null,
                description:
                  'Identifies the element that provides a detailed, extended description for the object.\n@see aria-describedby.',
                name: 'aria-details',
                required: !1,
                type: { name: 'string' },
              },
              'aria-disabled': {
                defaultValue: null,
                description:
                  'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.\n@see aria-hidden\n@see aria-readonly.',
                name: 'aria-disabled',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-dropeffect': {
                defaultValue: null,
                description:
                  'Indicates what functions can be performed when a dragged object is released on the drop target.\n@deprecated in ARIA 1.1',
                name: 'aria-dropeffect',
                required: !1,
                type: { name: '"link" | "none" | "copy" | "execute" | "move" | "popup"' },
              },
              'aria-errormessage': {
                defaultValue: null,
                description:
                  'Identifies the element that provides an error message for the object.\n@see aria-invalid\n@see aria-describedby.',
                name: 'aria-errormessage',
                required: !1,
                type: { name: 'string' },
              },
              'aria-expanded': {
                defaultValue: null,
                description:
                  'Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.',
                name: 'aria-expanded',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-flowto': {
                defaultValue: null,
                description:
                  "Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,\nallows assistive technology to override the general default of reading in document source order.",
                name: 'aria-flowto',
                required: !1,
                type: { name: 'string' },
              },
              'aria-grabbed': {
                defaultValue: null,
                description:
                  'Indicates an element\'s "grabbed" state in a drag-and-drop operation.\n@deprecated in ARIA 1.1',
                name: 'aria-grabbed',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-haspopup': {
                defaultValue: null,
                description:
                  'Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.',
                name: 'aria-haspopup',
                required: !1,
                type: { name: 'boolean | "dialog" | "menu" | "false" | "true" | "listbox" | "tree" | "grid"' },
              },
              'aria-hidden': {
                defaultValue: null,
                description: 'Indicates whether the element is exposed to an accessibility API.\n@see aria-disabled.',
                name: 'aria-hidden',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-invalid': {
                defaultValue: null,
                description:
                  'Indicates the entered value does not conform to the format expected by the application.\n@see aria-errormessage.',
                name: 'aria-invalid',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "grammar" | "spelling"' },
              },
              'aria-keyshortcuts': {
                defaultValue: null,
                description:
                  'Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.',
                name: 'aria-keyshortcuts',
                required: !1,
                type: { name: 'string' },
              },
              'aria-label': {
                defaultValue: null,
                description: 'Defines a string value that labels the current element.\n@see aria-labelledby.',
                name: 'aria-label',
                required: !1,
                type: { name: 'string' },
              },
              'aria-labelledby': {
                defaultValue: null,
                description:
                  'Identifies the element (or elements) that labels the current element.\n@see aria-describedby.',
                name: 'aria-labelledby',
                required: !1,
                type: { name: 'string' },
              },
              'aria-level': {
                defaultValue: null,
                description: 'Defines the hierarchical level of an element within a structure.',
                name: 'aria-level',
                required: !1,
                type: { name: 'number' },
              },
              'aria-live': {
                defaultValue: null,
                description:
                  'Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.',
                name: 'aria-live',
                required: !1,
                type: { name: '"off" | "assertive" | "polite"' },
              },
              'aria-modal': {
                defaultValue: null,
                description: 'Indicates whether an element is modal when displayed.',
                name: 'aria-modal',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiline': {
                defaultValue: null,
                description: 'Indicates whether a text box accepts multiple lines of input or only a single line.',
                name: 'aria-multiline',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-multiselectable': {
                defaultValue: null,
                description:
                  'Indicates that the user may select more than one item from the current selectable descendants.',
                name: 'aria-multiselectable',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-orientation': {
                defaultValue: null,
                description:
                  "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
                name: 'aria-orientation',
                required: !1,
                type: { name: '"horizontal" | "vertical"' },
              },
              'aria-owns': {
                defaultValue: null,
                description:
                  'Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship\nbetween DOM elements where the DOM hierarchy cannot be used to represent the relationship.\n@see aria-controls.',
                name: 'aria-owns',
                required: !1,
                type: { name: 'string' },
              },
              'aria-placeholder': {
                defaultValue: null,
                description:
                  'Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.\nA hint could be a sample value or a brief description of the expected format.',
                name: 'aria-placeholder',
                required: !1,
                type: { name: 'string' },
              },
              'aria-posinset': {
                defaultValue: null,
                description:
                  "Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-setsize.",
                name: 'aria-posinset',
                required: !1,
                type: { name: 'number' },
              },
              'aria-pressed': {
                defaultValue: null,
                description:
                  'Indicates the current "pressed" state of toggle buttons.\n@see aria-checked\n@see aria-selected.',
                name: 'aria-pressed',
                required: !1,
                type: { name: 'boolean | "false" | "true" | "mixed"' },
              },
              'aria-readonly': {
                defaultValue: null,
                description:
                  'Indicates that the element is not editable, but is otherwise operable.\n@see aria-disabled.',
                name: 'aria-readonly',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-relevant': {
                defaultValue: null,
                description:
                  'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.\n@see aria-atomic.',
                name: 'aria-relevant',
                required: !1,
                type: { name: '"text" | "additions" | "additions text" | "all" | "removals"' },
              },
              'aria-required': {
                defaultValue: null,
                description: 'Indicates that user input is required on the element before a form may be submitted.',
                name: 'aria-required',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-roledescription': {
                defaultValue: null,
                description: 'Defines a human-readable, author-localized description for the role of an element.',
                name: 'aria-roledescription',
                required: !1,
                type: { name: 'string' },
              },
              'aria-rowcount': {
                defaultValue: null,
                description: 'Defines the total number of rows in a table, grid, or treegrid.\n@see aria-rowindex.',
                name: 'aria-rowcount',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowindex': {
                defaultValue: null,
                description:
                  "Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.\n@see aria-rowcount\n@see aria-rowspan.",
                name: 'aria-rowindex',
                required: !1,
                type: { name: 'number' },
              },
              'aria-rowspan': {
                defaultValue: null,
                description:
                  'Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.\n@see aria-rowindex\n@see aria-colspan.',
                name: 'aria-rowspan',
                required: !1,
                type: { name: 'number' },
              },
              'aria-selected': {
                defaultValue: null,
                description:
                  'Indicates the current "selected" state of various widgets.\n@see aria-checked\n@see aria-pressed.',
                name: 'aria-selected',
                required: !1,
                type: { name: 'boolean | "false" | "true"' },
              },
              'aria-setsize': {
                defaultValue: null,
                description:
                  'Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.\n@see aria-posinset.',
                name: 'aria-setsize',
                required: !1,
                type: { name: 'number' },
              },
              'aria-sort': {
                defaultValue: null,
                description: 'Indicates if items in a table or grid are sorted in ascending or descending order.',
                name: 'aria-sort',
                required: !1,
                type: { name: '"none" | "ascending" | "descending" | "other"' },
              },
              'aria-valuemax': {
                defaultValue: null,
                description: 'Defines the maximum allowed value for a range widget.',
                name: 'aria-valuemax',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuemin': {
                defaultValue: null,
                description: 'Defines the minimum allowed value for a range widget.',
                name: 'aria-valuemin',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuenow': {
                defaultValue: null,
                description: 'Defines the current value for a range widget.\n@see aria-valuetext.',
                name: 'aria-valuenow',
                required: !1,
                type: { name: 'number' },
              },
              'aria-valuetext': {
                defaultValue: null,
                description: 'Defines the human readable text alternative of aria-valuenow for a range widget.',
                name: 'aria-valuetext',
                required: !1,
                type: { name: 'string' },
              },
              dangerouslySetInnerHTML: {
                defaultValue: null,
                description: '',
                name: 'dangerouslySetInnerHTML',
                required: !1,
                type: { name: '{ __html: string; }' },
              },
              onCopy: {
                defaultValue: null,
                description: '',
                name: 'onCopy',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLDivElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLDivElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLDivElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLDivElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLDivElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLDivElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLDivElement>) => void' },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLDivElement>) => void' },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLDivElement>) => void' },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLDivElement>) => void' },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLDivElement>) => void' },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLDivElement>) => void' },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLDivElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLDivElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLDivElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLDivElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLDivElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLDivElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLDivElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLDivElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLDivElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLDivElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLDivElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLDivElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLDivElement, MouseEvent>) => void' },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLDivElement, Event>) => void' },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLDivElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLDivElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLDivElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLDivElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLDivElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLDivElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLDivElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLDivElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLDivElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLDivElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLDivElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLDivElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLDivElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLDivElement>) => void' },
              },
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
            (STORYBOOK_REACT_CLASSES['packages/form/Form.tsx#FormArea'] = {
              docgenInfo: g.__docgenInfo,
              name: 'FormArea',
              path: 'packages/form/Form.tsx#FormArea',
            })
      } catch (A) {}
      try {
        ;(T.displayName = 'Form'),
          (T.__docgenInfo = {
            description: '',
            displayName: 'Form',
            props: {
              onClickBack: {
                defaultValue: null,
                description: '',
                name: 'onClickBack',
                required: !1,
                type: { name: '() => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: 'onSubmitType' },
              },
              title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
            },
          }),
          'undefined' !== typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['packages/form/Form.tsx#Form'] = {
              docgenInfo: T.__docgenInfo,
              name: 'Form',
              path: 'packages/form/Form.tsx#Form',
            })
      } catch (A) {}
      function L(e) {
        return (L =
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
      function D(e, n) {
        if (null == e) return {}
        var t,
          a,
          r = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              r = {},
              i = Object.keys(e)
            for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (a = 0; a < i.length; a++)
            (t = i[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]))
        }
        return r
      }
      function H(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
      }
      function S(e, n) {
        return !n || ('object' !== L(n) && 'function' !== typeof n)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : n
      }
      function F(e) {
        return (F = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function w(e, n) {
        return (w =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e
          })(e, n)
      }
      t.d(n, 'default', function() {
        return P
      })
      var P = (function(e) {
        function n(e) {
          var t
          return (
            (function(e, n) {
              if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
            })(this, n),
            ((t = S(this, F(n).call(this, e))).layout = null),
            t
          )
        }
        var t, a, l
        return (
          (function(e, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && w(e, n)
          })(n, r.a.Component),
          (t = n),
          (a = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.components,
                  t = D(e, ['components'])
                return r.a.createElement(
                  i.MDXTag,
                  { name: 'wrapper', components: n },
                  r.a.createElement(i.MDXTag, { name: 'h1', components: n, props: { id: 'form' } }, 'Form'),
                  r.a.createElement(
                    i.MDXTag,
                    { name: 'h2', components: n, props: { id: 'basic-usage' } },
                    'Basic usage',
                  ),
                  r.a.createElement(
                    o.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAxYU5XkN0TXaT04IEG1VVQAV7U1c0kLlBVzXacFUF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ04gAWfj2AANn4wT1jAECYJ9aBEk4_hnEORFHUwdgAAUhH4JYiGoSg4BExEFJrJSaGcCBKMudgAEYJKE-QSLIqYAEE5gY9hI2g8gbCgdBw3YeROQYsQApjGR2FROiYG4YBD2o2jsXkbda2AYLoDC4IADJCvGRJ5koZo8tC8LuFq-UwFCUie1Qdp2AAfg2fLw0jKKriqgrUA8mspBkat3zMWENWOGAwDCKAph66LYuG3yVxrRMgylHAYMyFJrwIbLazrNCiDEfVkhOqQTsOutJE2ghtt2_bsqkVaxrMb8QBOnACDgLAgN0UCDHA7Cpug48WFcJZ9KWRLYByRDjQIgABGZbFMyQvHmi0qC6YisMg9gjBCOx7vw00tXxu0wfYfV0G8gQhBGG9JV2RH3UIqULViag4EkIh0Cpl0sBwotUHIk6AHVMjmDJ_Lh7IcCU9DinWFgLKgVx1KNWAsEwiwwF1q0IC6KUBg4osoFCIhUH1_MuAmK4ZK4gBSO3WPYq5nK6OUwgiTD1gAEmACGIFcHBTI8aAYFV9b7fQR2QnCSg7YsD20AtCIZiuLi7eKIbY4mkWpq82D4IZiV5YyxWZFjiwRK7AorgAJh99hc5Iixg9D8PI-juvawbsSUhbn284LzzeamE6AAkJWnKukvQHBa7V2xyS1q5DewO34ggFJUG52giHuHp9AyO2PFZlIhEa9AccoKBhSuABiMB38v4VpwtLwbkiL3pJwEflwdgb9m5gGTGAAArHbIeTd244AABzOWblAtuzkcCoLHmYQupEp5l3QpYF4sBF7w0jPpTkA904Ww7qgXBpcWY7AADJoF2IxBWy8LLuAHurDe2tt563WHvA-R8YAnz6ufAQmF6H4MYdsBouhSHZEjHTBmTM5GUPWL0AQQDyz9koGgWgUitGP2fqA5u5BkwyQkhJO2tlLT5Ecl7TB2CazUItP0FIhAc44GTGgsR0iSKTQdLReYexUDODeEQF4lgyrdEYpGGArB9BXHutteC55kk0CitwGKrADHoCCcXB0hiMizR0rPeeGRDKUCHMxGs1B7BQFiNsORbUriLVyewfJXBmQRKiS8dp4TIkeGiQQWJ8x1gxAILAIZqIZyFBrP1cMqStQ4HugAOWLGYIaZhS4MlGS8GpWBkgJOoCMsZVxzkDPGXEnJMVElZIIKs806T0KZP0JyK4PSchdPqRYJJJ4ByApoNqGac0CA9XWBAZokZrmHIIFFeFYzHmfJ2UU0WpcTr-UCuEppLS5FLGmbAJYyKXhLGWcEeQVxKmdmqYOOA9ymLrC6AQPo5hoxx0YFLGWcJhk3JSgcsZxzEhwv6QizkWVVwWGAMS7oxVlpHSOty-Cc86UCBukqpijTmk7DkewBVnKtVasYHIlhqBdg6paSlK1erWZSrjsa2sprWYKJZFuaVxqpBmtYZqpVkrPXKpOkQmZ3R7E0SSnwEAWNCkgDELK4hMB5BXXgiG2Afqdy0unH6gNjrjrlzNPGylg0U3oQrq4G6paiDS1mHCbK74hqfUstsVwaQAJANQADEC-gGD_PYPwVAPomRIH7cBcoIJvAZAtL-ckw6hIWH4MknR5t-BXH4FxHAG6uLGXWPwco5B-gzGaqu0d3kErYRITOkhmBySUESHmPIBRJxagfuO0sYIQDztHVENAJ7-CqGwO2ndNY90wHmBGUiEB4Anr7QuwQWo_0gGcjJHAAB2TdFp4gzD8Jg4DR1-Co3RpQTGj9LS42HWukAAA9DdyZN14drPwM0XMebi0Q1RujzdcOftXExl91pEPIbQxhrDOHm78HWENeQn1iRVG8B8agkAUjtuoF2vQYEQDMRAMfDetBV38APRKWgHiX21v4NJ-QlmgA',
                      __position: 0,
                      __code: '<Form>My Form</Form>',
                      __scope: { props: this ? this.props : t, Form: T },
                    },
                    r.a.createElement(T, null, 'My Form'),
                  ),
                  r.a.createElement(i.MDXTag, { name: 'h2', components: n, props: { id: 'propstable' } }, 'PropsTable'),
                  r.a.createElement(o.f, { of: T }),
                )
              },
            },
          ]) && H(t.prototype, a),
          l && H(t, l),
          n
        )
      })()
    },
  },
])
//# sourceMappingURL=packages-form-form.8e2318af906385de48ca.js.map
