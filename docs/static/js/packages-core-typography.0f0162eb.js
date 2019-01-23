;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    './packages/core/typography.mdx': function(A, e, o) {
      'use strict'
      o.r(e),
        o.d(e, 'default', function() {
          return s
        })
      var n = o('./node_modules/react/index.js'),
        t = o.n(n),
        a = o('./node_modules/@mdx-js/tag/dist/index.js'),
        l = o('./node_modules/docz/dist/index.m.js'),
        i = o('./packages/core/typography.ts'),
        c = o('./packages/core/docz/wrapperPismoTheme.tsx')
      function g(A) {
        return (g =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(A) {
                return typeof A
              }
            : function(A) {
                return A && 'function' === typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype
                  ? 'symbol'
                  : typeof A
              })(A)
      }
      function B(A, e) {
        if (null == A) return {}
        var o,
          n,
          t = (function(A, e) {
            if (null == A) return {}
            var o,
              n,
              t = {},
              a = Object.keys(A)
            for (n = 0; n < a.length; n++) (o = a[n]), e.indexOf(o) >= 0 || (t[o] = A[o])
            return t
          })(A, e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(A)
          for (n = 0; n < a.length; n++)
            (o = a[n]), e.indexOf(o) >= 0 || (Object.prototype.propertyIsEnumerable.call(A, o) && (t[o] = A[o]))
        }
        return t
      }
      function m(A, e) {
        for (var o = 0; o < e.length; o++) {
          var n = e[o]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(A, n.key, n)
        }
      }
      function r(A, e) {
        return !e || ('object' !== g(e) && 'function' !== typeof e)
          ? (function(A) {
              if (void 0 === A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return A
            })(A)
          : e
      }
      function E(A) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(A) {
              return A.__proto__ || Object.getPrototypeOf(A)
            })(A)
      }
      function p(A, e) {
        return (p =
          Object.setPrototypeOf ||
          function(A, e) {
            return (A.__proto__ = e), A
          })(A, e)
      }
      var s = (function(A) {
        function e(A) {
          var o
          return (
            (function(A, e) {
              if (!(A instanceof e)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
            ((o = r(this, E(e).call(this, A))).layout = null),
            o
          )
        }
        var o, n, g
        return (
          (function(A, e) {
            if ('function' !== typeof e && null !== e)
              throw new TypeError('Super expression must either be null or a function')
            ;(A.prototype = Object.create(e && e.prototype, {
              constructor: { value: A, writable: !0, configurable: !0 },
            })),
              e && p(A, e)
          })(e, t.a.Component),
          (o = e),
          (n = [
            {
              key: 'render',
              value: function() {
                var A = this.props,
                  e = A.components,
                  o = B(A, ['components'])
                return t.a.createElement(
                  a.MDXTag,
                  { name: 'wrapper', components: e },
                  t.a.createElement(a.MDXTag, { name: 'h1', components: e, props: { id: 'typography' } }, 'Typography'),
                  t.a.createElement(
                    a.MDXTag,
                    { name: 'h2', components: e, props: { id: 'global-settings' } },
                    'Global settings',
                  ),
                  t.a.createElement(
                    a.MDXTag,
                    { name: 'p', components: e },
                    'All elements of Bolt have defaults that comes from the theme:',
                  ),
                  t.a.createElement(
                    a.MDXTag,
                    { name: 'ul', components: e },
                    t.a.createElement(
                      a.MDXTag,
                      { name: 'li', components: e, parentName: 'ul' },
                      t.a.createElement(
                        a.MDXTag,
                        { name: 'inlineCode', components: e, parentName: 'li' },
                        'fontFamily',
                      ),
                      ': Lato',
                    ),
                    t.a.createElement(
                      a.MDXTag,
                      { name: 'li', components: e, parentName: 'ul' },
                      t.a.createElement(
                        a.MDXTag,
                        { name: 'inlineCode', components: e, parentName: 'li' },
                        'fontSizeBase',
                      ),
                      ': 16px',
                    ),
                    t.a.createElement(
                      a.MDXTag,
                      { name: 'li', components: e, parentName: 'ul' },
                      t.a.createElement(
                        a.MDXTag,
                        { name: 'inlineCode', components: e, parentName: 'li' },
                        'lineHeightBase',
                      ),
                      ': 1.5',
                    ),
                  ),
                  t.a.createElement(
                    a.MDXTag,
                    { name: 'h2', components: e, props: { id: 'available-components' } },
                    'Available Components',
                  ),
                  t.a.createElement(a.MDXTag, { name: 'p', components: e }, '4 Heading sizes'),
                  t.a.createElement(
                    l.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbreDeuAdpGAJ9gLXaUib0oQGiwzfQ7CgCAPEyARkikAnVxRkmkMJ4nkN68nKepqZPg3GgGaZlm2ckfnOdrEnU3MvnFcF9gqZp0XqHp9hGeZ1xWbrGXUzlxMYPQ3mSfNsmKbV4XabFggJb1g32fNuWpDRuZZMxxSYFxqRodh-HEdmqRwY-sxvxAKiaLohicEdoDdFAgxwOYn6htgHJjREz1M-ybSA106h9PzuBLEoNiYAgFJCEayN86uVEZxSTkm7RAoQYsmsasG4z4AiKua8IfVZka7uUcZ2uCCuZN7Ps9yUa6FJQigfWrnQ-fF9rLx2quAB2LfVw8NediuABOI_Id-_7V5n9hN4X9YXvWLoCD6cwy8H6vp9HmYAG1844GyozAgT55Scn_vZAAuuwAAPnA-UmBb6A3aNAyqOlvoOjQLQAQ_1Eo3n8LEVKlAhwTyNCBSasALrtxbhgouWCRYlymPBRq-d0D4DgowQh-RyAkLuGIYooUQIWnyCVK4SEcD2X3gAVi6EQVU-UREjB_oQK4AASYAzUKGFX7o1do515DdW4L1MuFch7T0jAVAgVCYCcnkIoiw1jRH9w0Vo6C1jbH6MMcY3qnj-7APJC8cBb5_5wVgQg-UPwBD4QpoooRDCsAsSLKgfSyE2H9w4XgJC3CiF8MHHAQRwiaCiOKqVOCOB95ITkQJRxOjLQqOHvfTR2j_FTW8V1EGZjK6qLAW02A9i6nOMbuwFpHjKF6LMgYzpJj6m2MCaAkJkDwnwMQe0aJsSHFmASV9JJP1e4wWTBkqaWTky5N4fwwpCSnEiLEeUnA6FkyyPkUM5RvS3GtIme0qZPiun93Lj0ppVivkDK2UokpIyxlzMmfKX5sz-n_hAcE86oSVmRPWcKTZ8TMF7IdAc9Cxys74HQuc4hBSingstHcq4FSkIvOKQ095oz3HQu-bCmZpj_nmN6cC3RU1BkMpcVND54y-WwA6UYkGCKFnIogWEiJayNnxDidsnFyTe5YUJdkHAMxSX5NIVcwVjTp4itZeKn5HK-5TQBRYwgvKbH9wFZSoVsBTUIolb4s1iKglgJRcshVUTMXKrBTsl0uKmGpKmHheIUAtUcPkjGvVlyKU3IhWUq49kcAAA5kxwWqfSnu1NhSmomAJbokrZmluPDgaxjgoDCmjQkMFqbGVNLdSC7oFqK2cutdyoFCKnUtpdaVKF7qu2eulUi31cq0WKqDVAFVqBQ2MJSfpIiqBkhmXYcA_CUAk3kuufU0p4j2CZoCufJ5NSFFGqZaOjtHq_m9sBZYgdzaj2QpZWO9l3avUyunaigNGKYnBuxagKO40pIyQEHJBS2N_yOywEnEC-gGDpwdNDDSCpzSFzQ6xAseBfZCRzvKdhFpNaZkdjhlS0EPCUi8aRYjFFPTkDNLQAA4vW2jUBbEwcoFR5J7CljQV9iQv404iPuiY5Idh_GfrQSrTAXjEnyI4EonB3jhczC909nCONOAZCHqhQpy1tG4AwFsZGBT9j1i0Z2LRNoGAyNFvLOwAAxGADzoGtPMJSv4OAXizL4d9pGHTGRPphvVT50L0GfZwfri1NqT1LXRleiJoQYmMgEjLaNBTvGZqrkYFhPztixDzUS-GeQUgitwH8_3UOkg0u_C4BkCOYGlAgG3YnbQycUNpxUkYEIRJMnri1uLTDpHyP01kw6Ab_gsuCUY2pstGnqo-fIcggG99BPrDOHAbeLGJTsc4_EWx29tgwESDKH08Bt6NYywIbeQW4PuVIlu4bTpRuO0G1arOI2KNwBwL7dAtj0B_fpvqJwq8YCMAU4DuDDQ9B4MlH7NVcmeg1aWAdrIHHKBcdO-wc7l3MjHj21YdT6XmsPfzHiQjL0V0bbvj97Ikd2tY6O7jk7_deMJy0BQZDYEILJOgkqxmJVlMiSFIzOAmx0DTdYkDnHePhtrxq5c8XJHMlObpuLTTqBcPmR6KxmAivOdTSWE9st6vRIybtGj32CPcH4PLZhpbx4VuJOSTHbobPjfHe41zzGDR647byBEIgtjaEFHcp6hXfuQf2BV3AS5jBgBKDJ2Wh3GQnfVl2ZFyN7BTPmZhZZuDVx7eI6d565qDLIpEGilcWH1ja_RX285hvcGa0gTrcKbe1jqXzf_J4spPCYDb0Zi6GCTLYfj5gJPppI_t62e2PZ46oO28D5wEvlfGBt6bDbfKOC88ACkeUjGo7xT5n3Jv_dTV4w9I31-eOB_rr0VEkQAuwt8esC3x5IxX7j_3IZsACLmUndC9BYAAAL659BQBPiEC3D3CPB96njCBYgSgzC2AfCRCAg1YXT_R15JDcAAAy0QlAiAc8C8FBEAigj8NB881Bh8C8jB1Bl8C8rBEAb4ii6whAJASwXg6AiQSwrmQgIgQhQg4QmW5CFgRmcWP6heFmVm4BJE6wmir-YetiL0xQ74UcuWmMPOSGegAuK6OCWeyO6ex4meSOiU5CW-4hGAkes46wA4Ao-sMUfcdClK3eLmzcBQDKXhjaUADhhQlKzeSQQRDKRUJUI-4RNYM-c-080R7hvhz05-Ea-kuh8kI4ZkNhkoy-dh6Adk7mrg_0_0eUFgzhVkbh7Qrm2oAU2otU54SEZR9SXhhRSE5AyYAU6E6EzRtazmARhRWa56SErgAUvREUUUYR7A_A7QJBEQbkg07gcAoiGQEAYA6UERw-lIdkcEQUrkY-aAs-vSiR7QFSMip-LOygOU2wrgaQAEcA1ABhKcDA5C_AqA12_AVw_AQIxIVQ3gGQFov45ITIIA28_ArAGQ-Q1Anx0xIAma8JGxNY_A5QLGEAMwp0MJ_AtUg0zE4qQJ4qmA5IlAiQeYeQncZoUoTm5QII_xAgiJFg_AUQaAmJKgEYGgcA9JsJhJdAmAukEA8AMJUhsJFJogSAsJuxlSUiFo8Q9ErgOASEnJDJHWmuk24sLJAAeuhDgBUsmIqbCZLrYDLhqZIsmNqXqfwCKVaJECyRKfvFKTKX4PKfwM_JVFHL8dUFgagJACkPcY8d1vzqnCABZNHAJOSFkJ8d8UbhaJaejPwPIAoPIPIEAA',
                      __position: 0,
                      __code:
                        "<WrapperPismoTheme>\n  <H1> {'<H1> -'} Bolt components library </H1>\n  <H2> {'<H2> -'} Bolt components library </H2>\n  <H3> {'<H3> -'} Bolt components library </H3>\n  <H4> {'<H4> -'} Bolt components library </H4>\n</WrapperPismoTheme>",
                      __scope: {
                        props: this ? this.props : o,
                        H1: i.a,
                        H2: i.b,
                        H3: i.c,
                        H4: i.d,
                        P: i.e,
                        Small: i.f,
                        Tiny: i.g,
                        WrapperPismoTheme: c.a,
                      },
                    },
                    t.a.createElement(
                      c.a,
                      null,
                      t.a.createElement(i.a, null, ' ', '<H1> -', ' Bolt components library '),
                      t.a.createElement(i.b, null, ' ', '<H2> -', ' Bolt components library '),
                      t.a.createElement(i.c, null, ' ', '<H3> -', ' Bolt components library '),
                      t.a.createElement(i.d, null, ' ', '<H4> -', ' Bolt components library '),
                    ),
                  ),
                  t.a.createElement(a.MDXTag, { name: 'p', components: e }, '2 Small sizes'),
                  t.a.createElement(
                    l.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbrPD4igXrgHaRgCYSXqLXaUib0oQGiwzfQ7CgCAPEyARkikcmidXFHGDZ9gt152tGCI1BEmJ0mxYl9gqZpumpk-DcaGZ1n2c5yRpdxnc0bmWTMcUmBcakaHYfhxHZqkcGPrMb8QComi6IYnACC0CgQP0BhmJ-obYByY0RM9X3sm0gNdOofTg7gSxKDYmAIBSQhGsjYOrlRGcUk5NO0QKEGLJrGrBuM-AIjjhPCH1WZGvzlGWcTggrmTez7PclGuhSUIoFcct2HQ5vW9rLx2quAB2fvVw8LudiuABOcfId-_7O4b3v54sF71i6Ag-nMKPS_j-vK5mABtYOcGylmCCfeVOWP-yAF12AAHyf-VMCXwH2nvyqdO-h00FoAIf6iUbz-FiKlSgQ4a5GhApNWAF1s4Zx_mHP-isI5THgo1YO6B8BwUYKA_I5AIF3DEMUUKIELT5BKlcJCOB7IjwAKxdCIKqfKFCRgH0IFcAAJMAZqMDCrF0au0c68hurcF6lHGOZd66RgKgQOBMBOTyFYRYeRlDi48L4dBeRijhGiPEb1XRxdz7kheNfN8x84KPxfvKH4Ah8LU1YWQlBWAWJFlQPpZCWDi44LwEhfBYCiGDjgKQ8hNBKHFVKnBHAI8kJMIEqogRloOHlxXrw_hxipr6K6iDKRsdOFXyybAZRST1Gp3YBknRsChFmREbkiRyTFGmMvhY2-1jn6v3aPYxxKizAuK-m4n6hcYLJh8VNPxyZAmEOIaElxaiKFUOiTgdCyZGHMLKewwpWjMk1OyXUgxeTi7RwKWkuReySl9LYREipVSmm1PlIcxpxT_wX3MedSxHTbHdOFL05xv8hkOhGehcZft8DoWmeAkJYTrmWiWVcGJSENnhJSdsyp2j7n7MeQ0yRxzpGFPOYIqapSUUaKmjs6pRLYA5LESDF5LT3k3ysTYrpPT4hOP6QC9xhcsKguyDgGYkLgmQLmaS1J9cKWYupQcnFRcponJkYQQlCji4kthWS2AkqXk0sMVK15Zir4fPaSyuxvz2VXIGS6QFaDPFTG5nynB8lCZCtmTChZNyolXHsjgAAHMmOC8TkUFzpsKSVEwBLdFpY08Nx4cDyMcFAYU3MrnutRWkrVFzugyqjbi-V-KzkvLVamjVpU7nauzbq-lbzDVMq-ays1UAOWoEtagjx-lpYOvPvhKALroXzOSZE6h7BvUBRnmshJLCxVorLZmnVRy82nNkYWlNA7bkYvLdinNeqGU1s-San5DjzX_NQHbcaUkZICDkgpbG_5XZYCAroUCBhwLewdNDDSCpzSh1faxAseBDZCQDvKbBFolbUCZt-lS0EPCUj0aRIDFFPTkDNLQAA4ommDUBFFXsoJB9x2CljQUNhAv405APukQ5IbBeGfrQRjTAHD5HyI4EojenDoczCF11nCTtMh-13Po7KmDcAYCKMjPR5R6wYM7Fom0DAoGQ09wAMRgFU8ezj6CUr-DgHosyf7DaRm4xkT6VruWaaM5eg2N7k4tTak9WV0ZXrEaEKRjIBII2jXozhmaq5GBYW04osQ807PhnkFIfzcAdPF0tprNjLmuAZBtiepQIBsEuzdsBPQYEILuKMCEIkvj1zgZVh-kDYHMyuxow6PL_h3OCQQ6xiN7Hqqaege_AGK8CPrDOHAAeyGJRoYw_ERRA9tgwESDKH08AB7Od-AlgQA99M3vcqRMy2CisVbsLV9bTpiuuxwIbdAij0AbaZvqJwncYCMHowdm9DQ9BAMlEbLltGeiRaWP1rI6HKCYZG-wMbE3MjHl61YOLc3pxLCWxGkigz3HteXnKv2tsUufcGz94bxccPpYfR7bLP7zLsDZSzEqTGRJChZnATY6AqusUO9937hWu6RdmaT4DviFOMxVhx1A-OWooZgPTjHU1Id4gA_BijQdfE04J4be7gDgGRo_Y148zXXHuIdt0VHAuhtYcx5jBoydut5AiEQRRiCCjuV1XTnXx37BM7gLMxgwAlCg4jXLjICvqyw-GZp4TomHniZvVcWXD2Fe6uaiiyKRBopXBu_IqP0U-uKdjzeuNIEE3CgHvI-FdX_y6KiQQmAA8WYuhgmim7JeYBl7SYXge0ntiyeOid5PuecD18bxgAemx03yjgs3AApHlMRL2gWaa14L3XU0cMPX5xP7D-vk69FRJEXTjzDHrCh8eSM4-bfF348AInUS7ovQsAAAXx30KAT5CC3HuI8bPp5hBYglDMWwHxIiAkixdf60ekjcAADLRCUCIBNwtygEQCKB9wtxQEQFjwtxwEQFzwtxIEQBvisLrCEAkBLBeDoCJBLBKZCAiD4FCDhBubQIWACbWZbp-5iYSYn4w41i8JL4m6KIvTFDvh2xeaYzY7aCPqezgStoAIe5Pau7Hju6PaJTQLt4kEYDm6zjrADgCjdwxRFxIKwoZ49zpwFAooaHcxyGFCwoJ5JD6EopFQlSF4mE1iV7V71wWGqHaHPQj42r6RcHyQjhmRSGSgN4yHoB2QqauD_T_R5QWCKFWQqHtBKbagBTai1TnhITBHJIaF-FITkDJgBToToQJHxqKZ6HyhKY-qjpISuABRZERRRTGHsD8DtCAERBuSDTuBwCUIZAQBgDpSmEF6Uh2RwRBSuTF5oBV6FJ2HtAxIMJD7I7KA5TbCuBpAARwDUA45ZbPogDQL8CoBTb8BXD8BAjEhVDeAZAWi_jkhMggADz8CsAZD5DUAbGVEgDep3FtE1j8DlDIYQAzCnTXH8C1SDTMTUqHHUqYDkiUCJB5h5C5xmhSgKblAgh7ECAPEWD8BRBoAfEqARgaBwBwk3EAl0CYC6QQDwDXHkE3HgmiBIA3HdGxJ0IWjxD0SuA4BIQYnwmpbs7lZMzIkAB66EOAMSyYDJNx5OtgVO7JtCyYXJvJ_AxJVokQyJ5JI8lJ1JfgdJ_A6wL08gdsOx1Q7-qAkAKQsx8xvBuOSxFk9sAk5IWQGxWx_OFoEp6M_Aqp8g9pQAA',
                      __position: 1,
                      __code:
                        "<WrapperPismoTheme>\n  <Small> {'<Small> -'} Bolt components library </Small>\n  <br />\n  <Tiny> {'<Tiny> -'} Bolt components library </Tiny>\n</WrapperPismoTheme>",
                      __scope: {
                        props: this ? this.props : o,
                        H1: i.a,
                        H2: i.b,
                        H3: i.c,
                        H4: i.d,
                        P: i.e,
                        Small: i.f,
                        Tiny: i.g,
                        WrapperPismoTheme: c.a,
                      },
                    },
                    t.a.createElement(
                      c.a,
                      null,
                      t.a.createElement(i.f, null, ' ', '<Small> -', ' Bolt components library '),
                      t.a.createElement('br', null),
                      t.a.createElement(i.g, null, ' ', '<Tiny> -', ' Bolt components library '),
                    ),
                  ),
                  t.a.createElement(a.MDXTag, { name: 'p', components: e }, 'Paragraph'),
                  t.a.createElement(
                    l.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbrLDeuAdpGAJ9gLXaUib0oQGiwzfQ7CgCAPEyARkikAnVx3NG5lkzHFJgXGpGh2H4cR2apHBj6zG_EAqJouiGJwAgtAoED9AYZifqG2AcmNETPW17JtIDXTqH0w24EsSg2JgCAUkIRrI0Nq5URnFJORdtEChBiyaxqwbjPgCIbbtwh9VmRrfZRxn7YIK5k3s-z3JRroUlCKBXHLdh0MT5Pay8dqrgAdlz1cPAznYrgATlLyHfv-9O4-z2uLBe9YugIPpzAt4Pbdj8OZgAbUNnBssZggn3lTlB_sgBddgAB8F_lTAG8B9pZ8qnTvodNBaAEf7EpvfxYlSyghyjo0QMm2ALs9t2t5Nnepn9-DGsN9B8Dgxhj_ycgz7uGIYooUQIWnyCVK4SEcD2SLgAVi6EQVU-VQEjD7oQK4AASYAzUr6FUDo1do515DdW4L1C2VsQ6x0jAVAgN8YCcnkEgiwNCwGB0wdg6CNC6EEKISQ3qXDA6j3JC8Seb5B5wXnkveUPwBD4Qpkg4BT8sAsSLKgfSyF36B0_ngJCP8T7_0HHAIBICaBgOKqVOCOAi5IXgQJJhuDLSoNDk3LBOCBFTR4V1EG5DrZoInu42ADD7EsOduwVxnDr74LMoQrxpCHF0KEePUR08JGL2Xu0GRcjGFmEUV9ZRP1X7Jk0VNbRyY9F_wAUYxRzDQHgIsTgdCyY4EIOCSgvx7C3GRI8dE3h3jA6W18c46hXTAnZOQaY0J4T4lRPlL0uJAT_xjxEedMRqSpEZOFFkhR298kOlfuhYpOt8DoXKafQxxjxmWjqVcSxSEWkmMce0sJHDpndNmbEsh_SKF-OGXgqaQSHmsKmh0iJfzYCeOISDBZiTllT3EZI9JmT4jyJyTslR_ssKHOyDgGYpyDHnyqYCpxscQWvPBT0j5AcpoDMoYQX5tDA4AsuUC2ApKFkQr4WSxZwiJ4rJSQi6RmzkVjNyS6XZL8zZTDwvEKAWLP7yRlXiypFyakTPMVceyOAAAcyY4I2PuX7amwpSUTAEt0SFcTTXHhwDQxwUBhTSoSGM1VjznFspGd0ClFrPnUu-UMhZTKXUstKlM9lXrOXQqWbyuFazEVCqgCi1Aorn6qP0kRVAyQzIf1HvhKASrznVIcWYiB7BNUBSrk02xiCiVPNDR6jlfTfWDKoQG51RbJkvLDe871XKYXRtWQKjZsjhXbNQDLcaUkZICDkgpbG_5lZYCAroUCBhwKawdNDDSCpzTG3XaxAseB-ZCT1vKD-FpPgbhoHAXdKloIeEpNw0iJ6KKenIGaWgABxe196oB0JnZQG9KiP5LGgvzM-fxpzHvdC-yQH9AM_WglamA_6oPkRwJROd_7jZmH9tzOEcqcAyELVMpDlL71wBgHQyMSGGHrHvTsWibQMDnqNVnAAxGATjo6cOSpSv4OA3CzIHv5pGPDGRPpivRbxsT06-Zzsdi1NqT1KXRlemBoQEGMgEjNaNJD_6ZqrhJvxuhYh5pKfDPIdmxnA7i0kOp34XAMhSzHUoEA2blZLrVmBCCKijAhCJFo9c1B6ZbrPRe4LV74MOj8_4bTgln0YbNVh6qvHL6rwBk3YD6wzhwDzm-iUn7v3xDoXnbYMBEgyh9PAPO9nNMCDzsJud7lSJZsC06CLyt_NUp1kFzMyscD83QHQ9AvX6b6icOnGAjAkMDbnQ0PQB9JQCzRQhnocBcs9HfTAL9lAf0lfYGVirmRjwbdq45-r-Y8RHpeim9LjduvZGlq5_LWQdt7cDv-pWKtgJ6G83u8y7AkWMxKqhkSQpGZwE2OgKLrFBtveK4FjO63Kmg9PVoljdNIs6X-y1Lb8Pf2ByWI1s1qPRJwbtKt_m8396H3NVuxLx5ktKJUXLboL3Cu7YR1Nf9DRHbZbyBEIgdD74FHcpyuHRWCclPsEjuAlTGDACUFYObC3afVjyVJtRUxyOUZmdRudVwqeq6W5y5qDzIpEGilcGbNCLfRTy6x63c6bUgTtcKPONDrlxf_Fw8xv8YB50Zi6GCTyZtB5gCH5x_u870e2Ix46I3Hfe5wLH-PGA86bDdfKOCicACkeViErb2bx9n23Jd_sxg9PH5ePuY152ZSMvRUSREE7Mvh6xifHkb9XznUvYDEeAED8xd0XoWAAAL_b6FAJ8hBbj3EeJ708wgsQShmLYD4kRATrYuv9S3SRuAABloiUEQAnJOZ-ICKBzkna_l-S5J3v5fmuSdn8QDfEg9YhASBLC8OgRISw2MhARAAChBwgtNL4LASN5Me0dcqMaNR8SJ1gsEm9Bc6EXpih3wZY9NMYvtPNftV0QAU094MhadlczVqcSCltzI6NJQ49QCMARdZx1gBwBRM4YoA4H5Lk3cs5XYCgHluDHUoBGDChLk7ckhhCHkioSp_cJCaxw9I9Y4ZCOC-Dnoi8JUtdvcUMzJL5U96D0A7IONXB_p_o8oLAWCrJ2D2g2NtQAptRapzwkJTCHFuCDCkJyBkwAp0J0InDbVWNBCDCtVy0kJXAAofCIoopxD2B-B2gj8Ig3JBp3A4AwEMgIAwB0pJC_dKQ7I4IgpXJA80AI8_ElD2hLFYEC8ntlAcpthXA0gAI4BqA8CV0GBL5-BUAqt-Arh-AgRiQqhvAMgLRfxyQmQQA85-BWAMh8hqAOioiQBNU5j0iax-Byg30IAZhTppj-BapBpmJwVBjwVMByRKBEg8w8hvYzQpQWNygQQ-iBAFiLB-Aog0ANiVAIwNA4A7iZiDi6BMBdIIB4BpiICZjzjRAkAZicirFoELR4h6JXAcAkIPj7i3N0dws-t3jQT-AAA9dCHASxZMBEmY8HWwKHZ4jEqBZMHE_E_gYEq0SIZ48EouSE6EvwOE_gdYF6eQGWHo6oDfVASAFIOoho7QZddWcCCyWWASckLIDororbC0ak9GfgDk-QZUoAA',
                      __position: 2,
                      __code: "<WrapperPismoTheme>\n  <P> {'<P> -'} Bolt components library </P>\n</WrapperPismoTheme>",
                      __scope: {
                        props: this ? this.props : o,
                        H1: i.a,
                        H2: i.b,
                        H3: i.c,
                        H4: i.d,
                        P: i.e,
                        Small: i.f,
                        Tiny: i.g,
                        WrapperPismoTheme: c.a,
                      },
                    },
                    t.a.createElement(
                      c.a,
                      null,
                      t.a.createElement(i.e, null, ' ', '<P> -', ' Bolt components library '),
                    ),
                  ),
                  t.a.createElement(a.MDXTag, { name: 'h2', components: e, props: { id: 'styles' } }, 'Styles'),
                  t.a.createElement(
                    a.MDXTag,
                    { name: 'p', components: e },
                    'Use the prop ',
                    t.a.createElement(a.MDXTag, { name: 'inlineCode', components: e, parentName: 'p' }, 'fontStyle'),
                    ' to style the Typography',
                  ),
                  t.a.createElement(
                    l.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYAAJABGJYYIAJkQ5NEIAFiWAAFJZnCiBIlksf52HkN0TXaT0CESIUUkyGY8ESf0BXtKD2AAdTouEsNsIhKGsGBjxIsi5Qo6RTgAL0kEZOIybi4F4_jjyYyD2CDKVhNNLV2nBVBdFRY4JOcKjsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOz0Jc9gADYXLc9YwBAgAxH1oESOz-GcQ5EUdTB2CwoR-CWXifjgTzERCmswpoZwIHEy52DgzCzHkHS9KmABBOZTPYSNoPIGwoHQcMSM5UyxCamMZHYVFElgbhgEPcSjOG-B5G3WtgFa6AOuCAAyZbxmomBKGaBb2s67h9vlMBQl0ntUHadgAH4NkW8NI26q4dqW1AqprKQZGrd8zFhDVjhgMAwigKY7p6vrXvqlca0TNSCBwcLMhSa8CFm2s6w42YuJ4vjNmPZGUbrLCjRAyaRv4KAIBSQhxFXPHzPaRgCYKghiZgPgQDJinRBAXqLXaUib0oQGiwzV1gDprCxF59h2cpyG8akcXqdrenCcK4yWdJ8nCE4Ah4liKnZZp0XlcZ5nWel8cdbJ8hxHYHm-YFqZPg3LMjfFyXze13XrYNpXJAVn3E39mmUdd7nJf5wWneoEWxYl0iuhSUIoFcARFZ3IPg-Nom1dZhOk5Tz2rf14O5rFlWmZz_g8-To4Xi9m27fYCPHadaOXdjyXq5TtPazrouA7rP3cZRrPVam1mvHa4uS9p0eK_H_hJ_QBvw4doXnagjvSKXnv5eHpWGezheQCXwu9a5nuLFd8vTcXgWcj78-w_tyPW8zTf6bj9hT8f72S733eh8x4kxPsnHY08S7XxNpXUBkptgrxfi3YW7dP6Sw8GA-BA8AFYKAfPEB6C4Fn2thfAeV8y7QOPgQnYRCEFNzXlHd-s83bbwwTQrBQ9FZSDRnMWSmNFIwFxlIaGsN4aI1mlIcGH0zDfhAFRGidEGI4AIFoCgIF9AMGYj9IasAcjGhEp6bR2RtIBl0tQfShi4CWEoGxGAmsphmUjIYq4qIZwpE5M4tEBQQYWRrDVQaatUTWNsRzfUsxGo-JRubK4yZ7L2XcijLu5Z2DoVifE2sS8rgAHZUmriodsK4ABOHJstMD_STgQK4KS4nrBeusLoBA-jmAsREGxdjQkzAANqGJwNlMmBAnzyk5B0-yABddgAAfcZ8pSkA1fCMyqOlvoOjQLQAQ_1Eo3n8LEVKlAhwRJvmrC6HjXELJMUsluqB9LwUaoY9A-A4KME2fkcgOy7hiGKKFECFp8glSuEhHA9lMkAFYuhEFVPlL5IxgmECuAAEmAM1A5U1GrtHOvIbq3BeoWKsa0jmkYKGwE5PIcFFhGbfLVnChF0ECXdDMqirqIMaU9PJC8AZb4OlwTGZM-UPwBD4V5uCj5ZysAsSLJcqYyEblqzuXgJCjytkvMHHAd5nyaDfOKqVOCOBMlIRBQJEl5cLRQrsZSxFNKUVooxVigJOLoX9JpUSg1ZKnHsHhWao-sALUMsxUi2AzK-lsqGZyiZUz2i8v5cSswQqvoip-n4mCyYpVTRlcmeVzzXnKqFaSr5PzNU4HQsmYFoKnWQrtaa6lHraXyktSDbFQS7H4srY61VloXVuorcAqt9L0WMsrf61l512XBu5WG4UEbBWLNjQ6eN6Ek06PwOhNN2ylUqohWq3NVwtVIWLS2o1ZbXVUt9V2mtPq624sII2ztza12topQe91navU9p9Uy3pA7Bkcq5aG8N8QBVRsnaKvxBMzK3JwDMJdirdmZt3cajm5aj1Pqtf4qalj614odZGm95KprwfNXSk9vVX0sv6YOoNX6eVjt_Zh6NLop0XP0nheIUA53ZB6fhKAEGM2ruzeujVVx7I4AABzJjgrqndviBbCngxMAS3Rn29Rk8eHAjNHBQGFIxhImGeOWlgzC-9Ha8HHu9dalDtqG0YZLeuu97aEP4eM0e_tJGP3Du_ZRqAf7UA0fOWK_SRFUDJBA9KtjTHOMrqzYajd7ABMBQKYWvVYKYP7ps3h6t9mz12svYZ692nsOwFw5WxDvbO2OcDZ-kNFG-VUYnagGR40pIyQEHJBS2N_zKKwEBXQoEDDgU0Q6aGGkFTmmMb11iBY8D8KEno-UtyLQMP0HAYbKloIeEpMzSb7oKKenIGaWgABxNTK2oDMya5QRborblLGgvwnZfxpzrfIjgAx0qzs_WgopmAJ37v6Moi1k7xizB-O4XCFjdyZDhZs-9-zK24AwGZpGd7RL1grZ2LRNoGBZuSaSQAYjALj6rAOzFTCwv4OAa2zJjf4ZGIHGRPq0cA4T9iDWTsTYcS1NqT17PRletdoQt2MgElk6Nd7J2ZqrnpiT5mYh5rs_DPIeWEu1biMkDz34XAMhSJq0oEAoHlEdbUWBCCoqjAhCJNK9cbdlEDZm3NmgC27Q_WN_4AXgkpuiWF5jf7pjxXmXWDM8pHjk1pLOHAIPO2YD7coId5maTtgwESDKH08A0kq75wINJFOWvuVIoF5N5v352Cd7cvP82cD8PQMzdAxfbf6icEnGAjB3ul5aw0PQazJQCIA69nocAQ89DDxHqPaslix_j5kY8veU9q7T_mPEE2Xreb94LW50itfbYlHtg78RjuYyUSo4CegDcjfMuwH9ZMSpfflEKMmcBNjoBew6K7LX0AD632b5OPeM0X_aNbt-83PdH5an703yOyHxnwmDnwGye2TXv1Yn4Rb1WXWTk0gMkHd3klO07wdDkW6DXyyBfxAKmhOwaEai5wsF6ECSIGZmOQKHciQzLzwIr3sHfzgAzUYGACUCsGb1b0QOrBjXp292h1hzVmIPeyuDgK4PbyQ2ahbUiiIGiiuEb0ZhkOiiD0x3kJa2UxAlU2FDSUZkiwUKJg1SeRgDSTJhdBgn3Ub1MJgHMLsSMLSWR22FR2Okr1UOd3_AcKcIwDSU2BNXlDgliQAFI8p0UMD6NHYgDI9X8CDMYHoIjB9oi0CiCHEyCIgKChD8MrV1gM9ZNIwcCN9Ij8DYBwdgBT8NU7oXoLAAABI_PoKAJ8QgW4e4R4XQ08YQLECUGYWwD4SIQEHvC6f6WQpIbgAAGWiEoEQBiTiUmIgEUCqVmNiRmOyTiSWJmKKTiTWIgDfHBXWEIBICWC8HQESCWCxyEBEGOKEHCH532QsAhxayh1WzVnhxa0RxrAqIPRSMiGZhemKHfBkVQN4l3z1wP26xAG8xWQyEQI4Nk3gIhPbx9xrA8IuIwCoNnHWAHAFBThin8RORvS0KSRcQKBbTxI0ygBRMKBvSUKSDJJbSKhKiMOpJrCsJsI5npOxMJOelCJ8ymH-JHDMn2URLR3QDshx1cH-n-jygsHRKsixPaCx21ACm1FqnPCQglPLjxOFKQnIGTACnQnQlVJU0xxJOFMExiyQlcACn1IiiiipPYH4HaFGIiDckGncDgG-QyAgDAHShpMMMpDsjgiClchMLQGsLtVZPaC1SBWCJX2UBym2FcDSAAjgGoCBK6wYH2X4FQET34CuH4CBGJCqG8AyAtF_HJCZBADSX4FYAyHyGoGzNtJAAE0bK9JrH4HKG2wgBmFOjrP4FqkGmYk9RLM9UwHJEoESDzDyC8TNClAx3KBBELNTnLPWH4CiDQG7JUAjA0DgGbIsFbJgHmAjF0ggHgDrOuPrKnM5hzJAH9O1QBQtHiHolcBwCQm3NrH4B_2QWUTXIAD10IcAtVkwXydyQAr9bBb9vz_lkw_zAKzytQrRIg1zrzMlbz7y_Anz-AalKoZF8zqhujUBIAUhEzkztBOt1FwILJZEBJyQshszcyw8LRzy7y5h-B5AFB5B5AgA',
                      __position: 3,
                      __code:
                        "<WrapperPismoTheme>\n  <P fontStyle=\"light\">\n    {'<P fontStyle=\"light\"> -'} Bolt component {'<P>'} light\n  </P>\n  <P fontStyle=\"light italic\">\n    {'<P fontStyle=\"light italic\"> -'} Bolt component {'<P>'} light italic\n  </P>\n  <P>\n    {'<P> -'} Bolt component {'<P>'} regular\n  </P>\n  <P fontStyle=\"regular italic\">\n    {'<P fontStyle=\"regular italic\"> -'} Bolt component {'<P>'} regular italic\n  </P>\n  <P fontStyle=\"bold\">\n    {'<P fontStyle=\"bold\"> -'} Bolt component {'<P>'} bold\n  </P>\n  <P fontStyle=\"bold italic\">\n    {'<P fontStyle=\"bold italic\"> -'} Bolt component {'<P>'} bold italic\n  </P>\n  <P fontStyle=\"black\">\n    {'<P fontStyle=\"black\"> -'} Bolt component {'<P>'} black\n  </P>\n  <P fontStyle=\"black italic\">\n    {'<P fontStyle=\"black italic\"> -'} Bolt component {'<P>'} black italic\n  </P>\n</WrapperPismoTheme>",
                      __scope: {
                        props: this ? this.props : o,
                        H1: i.a,
                        H2: i.b,
                        H3: i.c,
                        H4: i.d,
                        P: i.e,
                        Small: i.f,
                        Tiny: i.g,
                        WrapperPismoTheme: c.a,
                      },
                    },
                    t.a.createElement(
                      c.a,
                      null,
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'light' },
                        '<P fontStyle="light"> -',
                        ' Bolt component ',
                        '<P>',
                        ' light',
                      ),
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'light italic' },
                        '<P fontStyle="light italic"> -',
                        ' Bolt component ',
                        '<P>',
                        ' light italic',
                      ),
                      t.a.createElement(i.e, null, '<P> -', ' Bolt component ', '<P>', ' regular'),
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'regular italic' },
                        '<P fontStyle="regular italic"> -',
                        ' Bolt component ',
                        '<P>',
                        ' regular italic',
                      ),
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'bold' },
                        '<P fontStyle="bold"> -',
                        ' Bolt component ',
                        '<P>',
                        ' bold',
                      ),
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'bold italic' },
                        '<P fontStyle="bold italic"> -',
                        ' Bolt component ',
                        '<P>',
                        ' bold italic',
                      ),
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'black' },
                        '<P fontStyle="black"> -',
                        ' Bolt component ',
                        '<P>',
                        ' black',
                      ),
                      t.a.createElement(
                        i.e,
                        { fontStyle: 'black italic' },
                        '<P fontStyle="black italic"> -',
                        ' Bolt component ',
                        '<P>',
                        ' black italic',
                      ),
                    ),
                  ),
                  t.a.createElement(a.MDXTag, { name: 'h2', components: e, props: { id: 'api' } }, 'API'),
                  t.a.createElement(
                    a.MDXTag,
                    { name: 'p', components: e },
                    'All Typography components have the props as the H1 shown below',
                  ),
                  t.a.createElement(l.f, { of: i.a }),
                )
              },
            },
          ]) && m(o.prototype, n),
          g && m(o, g),
          e
        )
      })()
    },
  },
])
//# sourceMappingURL=packages-core-typography.8e2318af906385de48ca.js.map
