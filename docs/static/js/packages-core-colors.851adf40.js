;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './packages/core/colors.mdx': function(e, t, n) {
      'use strict'
      n.r(t)
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        l = n('./node_modules/@mdx-js/tag/dist/index.js'),
        a = n('./node_modules/@rebass/grid/dist/index.js'),
        c = n('./packages/core/styled.ts')
      function s() {
        var e = (function(e, t) {
          t || (t = e.slice(0))
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        })([
          '\n  background-color: ',
          ';\n  height: ',
          ';\n  color: #fff;\n  text-align: center;\n  padding: 0 20px;\n',
        ])
        return (
          (s = function() {
            return e
          }),
          e
        )
      }
      var i = Object(c.c)(function(e) {
        return o.createElement(a.Flex, e, e.children)
      })(
        s(),
        function(e) {
          return e.backgroundColor || '#000'
        },
        function(e) {
          var t = e.height
          return ''.concat(t, 'px') || !1
        },
      )
      try {
        ;(i.displayName = 'FlexPismoColor'),
          (i.__docgenInfo = {
            description: '',
            displayName: 'FlexPismoColor',
            props: {
              backgroundColor: {
                defaultValue: null,
                description: '',
                name: 'backgroundColor',
                required: !0,
                type: { name: 'string' },
              },
              color: { defaultValue: null, description: '', name: 'color', required: !0, type: { name: 'string' } },
              height: { defaultValue: null, description: '', name: 'height', required: !0, type: { name: 'number' } },
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
            (STORYBOOK_REACT_CLASSES['packages/core/docz/FlexPismoColor.tsx#FlexPismoColor'] = {
              docgenInfo: i.__docgenInfo,
              name: 'FlexPismoColor',
              path: 'packages/core/docz/FlexPismoColor.tsx#FlexPismoColor',
            })
      } catch (N) {}
      var m = n('./packages/core/docz/wrapperPismoTheme.tsx'),
        u = '#8692A6',
        p = '#FAFAFA',
        g = '#ECEEF2',
        f = '#D6DAE2',
        y = '#C1C7D4',
        b = '#A2AEC2',
        E = '#8692A6',
        d = '#6E7A8C',
        C = '#4F5A6A',
        h = '#2C3644',
        w = '#151A21',
        A = '#3BB2DD',
        j = '#C3E9F6',
        k = '#77CFEE',
        S = '#3BB2DD',
        x = '#0B88B6',
        F = '#EC3853',
        D = '#F4BAC3',
        O = '#F3798B',
        I = '#EC3853',
        v = '#B4152C',
        B = n('./packages/core/typography.ts')
      function T(e) {
        return (T =
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
      function _(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              l = Object.keys(e)
            for (o = 0; o < l.length; o++) (n = l[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          for (o = 0; o < l.length; o++)
            (n = l[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      function P(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function M(e, t) {
        return !t || ('object' !== T(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function X(e) {
        return (X = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function q(e, t) {
        return (q =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      n.d(t, 'default', function() {
        return z
      })
      var z = (function(e) {
        function t(e) {
          var n
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            ((n = M(this, X(t).call(this, e))).layout = null),
            n
          )
        }
        var n, o, c
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && q(e, t)
          })(t, r.a.Component),
          (n = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components
                _(e, ['components'])
                return r.a.createElement(
                  l.MDXTag,
                  { name: 'wrapper', components: t },
                  r.a.createElement(l.MDXTag, { name: 'h1', components: t, props: { id: 'colors' } }, 'Colors'),
                  r.a.createElement(
                    l.MDXTag,
                    { name: 'p', components: t },
                    'The package @pismo/bolt-core export the colors available in the component library',
                  ),
                  r.a.createElement(l.MDXTag, { name: 'h2', components: t, props: { id: 'import' } }, 'Import'),
                  r.a.createElement(
                    l.MDXTag,
                    { name: 'pre', components: t },
                    r.a.createElement(
                      l.MDXTag,
                      { name: 'code', components: t, parentName: 'pre', props: {} },
                      "import { colors } from '@pismo/bolt-core`\n",
                    ),
                  ),
                  r.a.createElement(l.MDXTag, { name: 'h2', components: t, props: { id: 'usage' } }, 'Usage'),
                  r.a.createElement(
                    l.MDXTag,
                    { name: 'pre', components: t },
                    r.a.createElement(
                      l.MDXTag,
                      { name: 'code', components: t, parentName: 'pre', props: {} },
                      'const Button = styled.button`\n  color: ${colors.grey},\n  background-color: ${colors.red},\n`\n',
                    ),
                  ),
                  r.a.createElement(
                    l.MDXTag,
                    { name: 'h2', components: t, props: { id: 'available-colors' } },
                    'Available Colors',
                  ),
                  r.a.createElement(
                    m.a,
                    null,
                    r.a.createElement(
                      a.Flex,
                      { justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] },
                      r.a.createElement(
                        a.Flex,
                        { flexDirection: 'column', width: [1, 0.5, 1 / 3], m: '10px' },
                        r.a.createElement(
                          i,
                          { backgroundColor: u, height: 100, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey'),
                          r.a.createElement(B.e, null, '#8692A6'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: w, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey900'),
                          r.a.createElement(B.e, null, '#151A21'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: h, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey800'),
                          r.a.createElement(B.e, null, '#2C3644'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: C, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey700'),
                          r.a.createElement(B.e, null, '#4F5A6A'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: d, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey600'),
                          r.a.createElement(B.e, null, '#6E7A8C'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: E, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey500'),
                          r.a.createElement(B.e, null, '#8692A6'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: b, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.grey400'),
                          r.a.createElement(B.e, null, '#A2AEC2'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: y, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#2c3644' } }, 'colors.grey300'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#C1C7D4'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: f, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#151A21' } }, 'colors.grey200'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#D6DAE2'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: g, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#151A21' } }, 'colors.grey100'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#ECEEF2'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: p, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#151A21' } }, 'colors.grey50'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#FAFAFA'),
                        ),
                      ),
                      r.a.createElement(
                        a.Flex,
                        { flexDirection: 'column', width: [1, 0.5, 1 / 3], m: '10px' },
                        r.a.createElement(
                          i,
                          { backgroundColor: A, height: 100, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.blue'),
                          r.a.createElement(B.e, null, '#3BB2DD'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: x, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.blue700'),
                          r.a.createElement(B.e, null, '#0B88B6'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: S, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.blue500'),
                          r.a.createElement(B.e, null, '#3BB2DD'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: k, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#151A21' } }, 'colors.blue200'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#77CFEE'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: j, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#151A21' } }, 'colors.blue100'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#C3E9F6'),
                        ),
                      ),
                      r.a.createElement(
                        a.Flex,
                        { flexDirection: 'column', width: [1, 0.5, 1 / 3], m: '10px' },
                        r.a.createElement(
                          i,
                          { backgroundColor: F, height: 100, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.red'),
                          r.a.createElement(B.e, null, '#EC3853'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: v, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.red700'),
                          r.a.createElement(B.e, null, '#B4152C'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: I, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light' }, 'colors.red500'),
                          r.a.createElement(B.e, null, '#EC3853'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: O, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#151A21' } }, 'colors.red200'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#F3798B'),
                        ),
                        r.a.createElement(
                          i,
                          { backgroundColor: D, justifyContent: 'space-between', alignItems: 'center' },
                          r.a.createElement(B.e, { fontStyle: 'light', style: { color: '#2c3644' } }, 'colors.red100'),
                          r.a.createElement(B.e, { style: { color: '#151A21' } }, '#F4BAC3'),
                        ),
                      ),
                    ),
                  ),
                )
              },
            },
          ]) && P(n.prototype, o),
          c && P(n, c),
          t
        )
      })()
    },
  },
])
//# sourceMappingURL=packages-core-colors.8e2318af906385de48ca.js.map
