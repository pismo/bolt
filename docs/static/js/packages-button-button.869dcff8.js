;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './packages/button/Button.mdx': function(e, n, t) {
      'use strict'
      t.r(n)
      var a = t('./node_modules/react/index.js'),
        r = t.n(a),
        o = t('./node_modules/@mdx-js/tag/dist/index.js'),
        i = t('./node_modules/docz/dist/index.m.js'),
        u = t('./packages/core/dist/index.js')
      function l() {
        var e = (function(e, n) {
          n || (n = e.slice(0))
          return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }))
        })([
          '\n  ',
          ';\n  border-radius: 4px;\n  background-color: ',
          ';\n  padding: 0.625rem 2rem;\n  color: #fff;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ',
          ';\n  }\n',
        ])
        return (
          (l = function() {
            return e
          }),
          e
        )
      }
      var d = function(e) {
          var n = { backgroundColor: '#586374', backgroundColorHover: '#373e49' },
            t = { backgroundColor: '#ff9800', backgroundColorHover: '#cc7a00' }
          return e.secondary ? n : t
        },
        s = u.styled.button(
          l(),
          { background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', outline: 'none' },
          function(e) {
            return d(e).backgroundColor
          },
          function(e) {
            return d(e).backgroundColorHover
          },
        )
      try {
        ;(s.displayName = 'Button'),
          (s.__docgenInfo = {
            description: '',
            displayName: 'Button',
            props: {
              form: { defaultValue: null, description: '', name: 'form', required: !1, type: { name: 'string' } },
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
                type: { name: '((instance: HTMLButtonElement) => void) | RefObject<HTMLButtonElement>' },
              },
              key: {
                defaultValue: null,
                description: '',
                name: 'key',
                required: !1,
                type: { name: 'string | number' },
              },
              autoFocus: {
                defaultValue: null,
                description: '',
                name: 'autoFocus',
                required: !1,
                type: { name: 'boolean' },
              },
              disabled: {
                defaultValue: null,
                description: '',
                name: 'disabled',
                required: !1,
                type: { name: 'boolean' },
              },
              formAction: {
                defaultValue: null,
                description: '',
                name: 'formAction',
                required: !1,
                type: { name: 'string' },
              },
              formEncType: {
                defaultValue: null,
                description: '',
                name: 'formEncType',
                required: !1,
                type: { name: 'string' },
              },
              formMethod: {
                defaultValue: null,
                description: '',
                name: 'formMethod',
                required: !1,
                type: { name: 'string' },
              },
              formNoValidate: {
                defaultValue: null,
                description: '',
                name: 'formNoValidate',
                required: !1,
                type: { name: 'boolean' },
              },
              formTarget: {
                defaultValue: null,
                description: '',
                name: 'formTarget',
                required: !1,
                type: { name: 'string' },
              },
              name: { defaultValue: null, description: '', name: 'name', required: !1, type: { name: 'string' } },
              type: { defaultValue: null, description: '', name: 'type', required: !1, type: { name: 'string' } },
              value: {
                defaultValue: null,
                description: '',
                name: 'value',
                required: !1,
                type: { name: 'string | number | string[]' },
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
                type: { name: '"none" | "both" | "inline" | "list"' },
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
                type: { name: 'boolean | "mixed" | "false" | "true"' },
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
                type: { name: 'boolean | "time" | "page" | "false" | "true" | "step" | "location" | "date"' },
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
                type: { name: '"link" | "none" | "copy" | "move" | "execute" | "popup"' },
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
                type: { name: 'boolean | "dialog" | "menu" | "grid" | "listbox" | "false" | "true" | "tree"' },
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
                type: { name: 'boolean | "mixed" | "false" | "true"' },
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
                type: { name: '"text" | "all" | "additions" | "additions text" | "removals"' },
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
                type: { name: '(event: ClipboardEvent<HTMLButtonElement>) => void' },
              },
              onCopyCapture: {
                defaultValue: null,
                description: '',
                name: 'onCopyCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLButtonElement>) => void' },
              },
              onCut: {
                defaultValue: null,
                description: '',
                name: 'onCut',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLButtonElement>) => void' },
              },
              onCutCapture: {
                defaultValue: null,
                description: '',
                name: 'onCutCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLButtonElement>) => void' },
              },
              onPaste: {
                defaultValue: null,
                description: '',
                name: 'onPaste',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLButtonElement>) => void' },
              },
              onPasteCapture: {
                defaultValue: null,
                description: '',
                name: 'onPasteCapture',
                required: !1,
                type: { name: '(event: ClipboardEvent<HTMLButtonElement>) => void' },
              },
              onCompositionEnd: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEnd',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLButtonElement>) => void' },
              },
              onCompositionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionEndCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLButtonElement>) => void' },
              },
              onCompositionStart: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStart',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLButtonElement>) => void' },
              },
              onCompositionStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionStartCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLButtonElement>) => void' },
              },
              onCompositionUpdate: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdate',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLButtonElement>) => void' },
              },
              onCompositionUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onCompositionUpdateCapture',
                required: !1,
                type: { name: '(event: CompositionEvent<HTMLButtonElement>) => void' },
              },
              onFocus: {
                defaultValue: null,
                description: '',
                name: 'onFocus',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLButtonElement>) => void' },
              },
              onFocusCapture: {
                defaultValue: null,
                description: '',
                name: 'onFocusCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLButtonElement>) => void' },
              },
              onBlur: {
                defaultValue: null,
                description: '',
                name: 'onBlur',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLButtonElement>) => void' },
              },
              onBlurCapture: {
                defaultValue: null,
                description: '',
                name: 'onBlurCapture',
                required: !1,
                type: { name: '(event: FocusEvent<HTMLButtonElement>) => void' },
              },
              onChange: {
                defaultValue: null,
                description: '',
                name: 'onChange',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onChangeCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onBeforeInput: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onBeforeInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onBeforeInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInput: {
                defaultValue: null,
                description: '',
                name: 'onInput',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInputCapture: {
                defaultValue: null,
                description: '',
                name: 'onInputCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onReset: {
                defaultValue: null,
                description: '',
                name: 'onReset',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onResetCapture: {
                defaultValue: null,
                description: '',
                name: 'onResetCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onSubmit: {
                defaultValue: null,
                description: '',
                name: 'onSubmit',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onSubmitCapture: {
                defaultValue: null,
                description: '',
                name: 'onSubmitCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInvalid: {
                defaultValue: null,
                description: '',
                name: 'onInvalid',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onInvalidCapture: {
                defaultValue: null,
                description: '',
                name: 'onInvalidCapture',
                required: !1,
                type: { name: '(event: FormEvent<HTMLButtonElement>) => void' },
              },
              onLoad: {
                defaultValue: null,
                description: '',
                name: 'onLoad',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onError: {
                defaultValue: null,
                description: '',
                name: 'onError',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onErrorCapture: {
                defaultValue: null,
                description: '',
                name: 'onErrorCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onKeyDown: {
                defaultValue: null,
                description: '',
                name: 'onKeyDown',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLButtonElement>) => void' },
              },
              onKeyDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyDownCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLButtonElement>) => void' },
              },
              onKeyPress: {
                defaultValue: null,
                description: '',
                name: 'onKeyPress',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLButtonElement>) => void' },
              },
              onKeyPressCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyPressCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLButtonElement>) => void' },
              },
              onKeyUp: {
                defaultValue: null,
                description: '',
                name: 'onKeyUp',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLButtonElement>) => void' },
              },
              onKeyUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onKeyUpCapture',
                required: !1,
                type: { name: '(event: KeyboardEvent<HTMLButtonElement>) => void' },
              },
              onAbort: {
                defaultValue: null,
                description: '',
                name: 'onAbort',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onAbortCapture: {
                defaultValue: null,
                description: '',
                name: 'onAbortCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onCanPlay: {
                defaultValue: null,
                description: '',
                name: 'onCanPlay',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onCanPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onCanPlayThrough: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThrough',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onCanPlayThroughCapture: {
                defaultValue: null,
                description: '',
                name: 'onCanPlayThroughCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onDurationChange: {
                defaultValue: null,
                description: '',
                name: 'onDurationChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onDurationChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onDurationChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onEmptied: {
                defaultValue: null,
                description: '',
                name: 'onEmptied',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onEmptiedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEmptiedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onEncrypted: {
                defaultValue: null,
                description: '',
                name: 'onEncrypted',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onEncryptedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEncryptedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onEnded: {
                defaultValue: null,
                description: '',
                name: 'onEnded',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onEndedCapture: {
                defaultValue: null,
                description: '',
                name: 'onEndedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadedData: {
                defaultValue: null,
                description: '',
                name: 'onLoadedData',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadedDataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedDataCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadedMetadata: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadata',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadedMetadataCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadedMetadataCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadStart: {
                defaultValue: null,
                description: '',
                name: 'onLoadStart',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onLoadStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onLoadStartCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onPause: {
                defaultValue: null,
                description: '',
                name: 'onPause',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onPauseCapture: {
                defaultValue: null,
                description: '',
                name: 'onPauseCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onPlay: {
                defaultValue: null,
                description: '',
                name: 'onPlay',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onPlayCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onPlaying: {
                defaultValue: null,
                description: '',
                name: 'onPlaying',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onPlayingCapture: {
                defaultValue: null,
                description: '',
                name: 'onPlayingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onProgress: {
                defaultValue: null,
                description: '',
                name: 'onProgress',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onProgressCapture: {
                defaultValue: null,
                description: '',
                name: 'onProgressCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onRateChange: {
                defaultValue: null,
                description: '',
                name: 'onRateChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onRateChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onRateChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSeeked: {
                defaultValue: null,
                description: '',
                name: 'onSeeked',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSeekedCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekedCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSeeking: {
                defaultValue: null,
                description: '',
                name: 'onSeeking',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSeekingCapture: {
                defaultValue: null,
                description: '',
                name: 'onSeekingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onStalled: {
                defaultValue: null,
                description: '',
                name: 'onStalled',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onStalledCapture: {
                defaultValue: null,
                description: '',
                name: 'onStalledCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSuspend: {
                defaultValue: null,
                description: '',
                name: 'onSuspend',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSuspendCapture: {
                defaultValue: null,
                description: '',
                name: 'onSuspendCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onTimeUpdate: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdate',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onTimeUpdateCapture: {
                defaultValue: null,
                description: '',
                name: 'onTimeUpdateCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onVolumeChange: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChange',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onVolumeChangeCapture: {
                defaultValue: null,
                description: '',
                name: 'onVolumeChangeCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onWaiting: {
                defaultValue: null,
                description: '',
                name: 'onWaiting',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onWaitingCapture: {
                defaultValue: null,
                description: '',
                name: 'onWaitingCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onClick: {
                defaultValue: null,
                description: '',
                name: 'onClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onContextMenu: {
                defaultValue: null,
                description: '',
                name: 'onContextMenu',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onContextMenuCapture: {
                defaultValue: null,
                description: '',
                name: 'onContextMenuCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onDoubleClick: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClick',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onDoubleClickCapture: {
                defaultValue: null,
                description: '',
                name: 'onDoubleClickCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onDrag: {
                defaultValue: null,
                description: '',
                name: 'onDrag',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnd: {
                defaultValue: null,
                description: '',
                name: 'onDragEnd',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEndCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnter: {
                defaultValue: null,
                description: '',
                name: 'onDragEnter',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragEnterCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragExit: {
                defaultValue: null,
                description: '',
                name: 'onDragExit',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragExitCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragExitCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragLeave: {
                defaultValue: null,
                description: '',
                name: 'onDragLeave',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragLeaveCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragOver: {
                defaultValue: null,
                description: '',
                name: 'onDragOver',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragOverCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragStart: {
                defaultValue: null,
                description: '',
                name: 'onDragStart',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDragStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onDragStartCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDrop: {
                defaultValue: null,
                description: '',
                name: 'onDrop',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onDropCapture: {
                defaultValue: null,
                description: '',
                name: 'onDropCapture',
                required: !1,
                type: { name: '(event: DragEvent<HTMLButtonElement>) => void' },
              },
              onMouseDown: {
                defaultValue: null,
                description: '',
                name: 'onMouseDown',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseDownCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseEnter: {
                defaultValue: null,
                description: '',
                name: 'onMouseEnter',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseLeave: {
                defaultValue: null,
                description: '',
                name: 'onMouseLeave',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseMove: {
                defaultValue: null,
                description: '',
                name: 'onMouseMove',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseMoveCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseOut: {
                defaultValue: null,
                description: '',
                name: 'onMouseOut',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOutCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseOver: {
                defaultValue: null,
                description: '',
                name: 'onMouseOver',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseOverCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseUp: {
                defaultValue: null,
                description: '',
                name: 'onMouseUp',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onMouseUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onMouseUpCapture',
                required: !1,
                type: { name: '(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void' },
              },
              onSelect: {
                defaultValue: null,
                description: '',
                name: 'onSelect',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onSelectCapture: {
                defaultValue: null,
                description: '',
                name: 'onSelectCapture',
                required: !1,
                type: { name: '(event: SyntheticEvent<HTMLButtonElement, Event>) => void' },
              },
              onTouchCancel: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancel',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchCancelCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchEnd: {
                defaultValue: null,
                description: '',
                name: 'onTouchEnd',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchEndCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchMove: {
                defaultValue: null,
                description: '',
                name: 'onTouchMove',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchMoveCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchStart: {
                defaultValue: null,
                description: '',
                name: 'onTouchStart',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onTouchStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onTouchStartCapture',
                required: !1,
                type: { name: '(event: TouchEvent<HTMLButtonElement>) => void' },
              },
              onPointerDown: {
                defaultValue: null,
                description: '',
                name: 'onPointerDown',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerDownCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerDownCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerMove: {
                defaultValue: null,
                description: '',
                name: 'onPointerMove',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerMoveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerMoveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerUp: {
                defaultValue: null,
                description: '',
                name: 'onPointerUp',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerUpCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerUpCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerCancel: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancel',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerCancelCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerCancelCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerEnter: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnter',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerEnterCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerEnterCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerLeave: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeave',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerLeaveCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerLeaveCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerOver: {
                defaultValue: null,
                description: '',
                name: 'onPointerOver',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerOverCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOverCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerOut: {
                defaultValue: null,
                description: '',
                name: 'onPointerOut',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onPointerOutCapture: {
                defaultValue: null,
                description: '',
                name: 'onPointerOutCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onGotPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onGotPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onGotPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onLostPointerCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onLostPointerCaptureCapture: {
                defaultValue: null,
                description: '',
                name: 'onLostPointerCaptureCapture',
                required: !1,
                type: { name: '(event: PointerEvent<HTMLButtonElement>) => void' },
              },
              onScroll: {
                defaultValue: null,
                description: '',
                name: 'onScroll',
                required: !1,
                type: { name: '(event: UIEvent<HTMLButtonElement>) => void' },
              },
              onScrollCapture: {
                defaultValue: null,
                description: '',
                name: 'onScrollCapture',
                required: !1,
                type: { name: '(event: UIEvent<HTMLButtonElement>) => void' },
              },
              onWheel: {
                defaultValue: null,
                description: '',
                name: 'onWheel',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLButtonElement>) => void' },
              },
              onWheelCapture: {
                defaultValue: null,
                description: '',
                name: 'onWheelCapture',
                required: !1,
                type: { name: '(event: WheelEvent<HTMLButtonElement>) => void' },
              },
              onAnimationStart: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStart',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLButtonElement>) => void' },
              },
              onAnimationStartCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationStartCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLButtonElement>) => void' },
              },
              onAnimationEnd: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEnd',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLButtonElement>) => void' },
              },
              onAnimationEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationEndCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLButtonElement>) => void' },
              },
              onAnimationIteration: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIteration',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLButtonElement>) => void' },
              },
              onAnimationIterationCapture: {
                defaultValue: null,
                description: '',
                name: 'onAnimationIterationCapture',
                required: !1,
                type: { name: '(event: AnimationEvent<HTMLButtonElement>) => void' },
              },
              onTransitionEnd: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEnd',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLButtonElement>) => void' },
              },
              onTransitionEndCapture: {
                defaultValue: null,
                description: '',
                name: 'onTransitionEndCapture',
                required: !1,
                type: { name: '(event: TransitionEvent<HTMLButtonElement>) => void' },
              },
              secondary: {
                defaultValue: null,
                description: '',
                name: 'secondary',
                required: !1,
                type: { name: 'boolean' },
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
            (STORYBOOK_REACT_CLASSES['packages/button/Button.tsx#Button'] = {
              docgenInfo: s.__docgenInfo,
              name: 'Button',
              path: 'packages/button/Button.tsx#Button',
            })
      } catch (h) {}
      function m(e) {
        return (m =
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
      function p(e, n) {
        if (null == e) return {}
        var t,
          a,
          r = (function(e, n) {
            if (null == e) return {}
            var t,
              a,
              r = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (t = o[a]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (a = 0; a < o.length; a++)
            (t = o[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]))
        }
        return r
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var a = n[t]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
      }
      function v(e, n) {
        return !n || ('object' !== m(n) && 'function' !== typeof n)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : n
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function y(e, n) {
        return (y =
          Object.setPrototypeOf ||
          function(e, n) {
            return (e.__proto__ = n), e
          })(e, n)
      }
      t.d(n, 'default', function() {
        return E
      })
      var E = (function(e) {
        function n(e) {
          var t
          return (
            (function(e, n) {
              if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
            })(this, n),
            ((t = v(this, f(n).call(this, e))).layout = null),
            t
          )
        }
        var t, a, u
        return (
          (function(e, n) {
            if ('function' !== typeof n && null !== n)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(n && n.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              n && y(e, n)
          })(n, r.a.Component),
          (t = n),
          (a = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  n = e.components,
                  t = p(e, ['components'])
                return r.a.createElement(
                  o.MDXTag,
                  { name: 'wrapper', components: n },
                  r.a.createElement(o.MDXTag, { name: 'h1', components: n, props: { id: 'button' } }, 'Button'),
                  r.a.createElement(
                    o.MDXTag,
                    { name: 'h2', components: n, props: { id: 'basic-usage' } },
                    'Basic usage',
                  ),
                  r.a.createElement(
                    i.e,
                    {
                      __codesandbox:
                        'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgHYG9wgicx5DdE12k9WCbmof0BXtTVzSQuUFXNdpwVQXRUWOU4AC9nAIRJsXYbh2GAdYogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnDiABY-PYAA2PiBPWMAQIAMR9aBEg4_hnEORFHUwdgAAUhH4JYiGoSg4GExF5JrRSaGcCAKMudgAEZxME-RiNIqYAEE5no9hI2g8gbCgdBw3YeROXosQApjGR2FRWiYG4YBDyomjsXkbda2AYLoDC4IADJCvGRJ5koZo8tC8LuFq-UwFCEie1Qdp2AAfg2fLw0jKKriqgrUA8mspBkat3zMWENWOGAwDCKAph66LYuG3yVxrRMgylHAlMyFJrwIbLazrND4LEfVkg8ODqCkE7qEOutJE2ghtt2_bsqkVaxrMb8QFu1AcAIOAsCA3RQIMcCsKm6DEtgHJEONfCAAEZlsUzJC8eaLSoLoiIDVBIYdcgKVQP68I9SQhSgWxNnQQFib-3GJqwbDOD0ARZp0ywypgP7DMoIcmJrOAtmodBXAERI2quLxKGJswhrMLzRwIRwoGFO8ufmfzIwHfn7isbnecHOAou4GLBYsJWqDVgQ7AYi3a2F3QxYlq4HaOjxJW2FIhEa9BVeFDiAGIAFYAA5pOTAB2cTrKOixPZ2H22gwAOBAACV-DJg-j5MYHEgBOOPayUVdMFm0J5rd1cE695O_bT4OwDAAuw84zji49uvfdT2XhUz1hs_lIPyHIKPXHbzuIsEiwFZrCBmh142cCd0XxcSKKugIPpzGt4U4BXkWMHX4iLC3neixtg_y7m0RBuIybCeoMjSYYmHshwS70NQRhNZ5q7UB8zuGIYo6wAAkuV6YAJ6vIVUNYvACGnBaTILA8hXEklgOBtck493QFjPu5Z2AQN1kOM2ys04a25kvPWnJP7dxTv7AhsD1jCS7AUK4nEcDSQAEwhy6HKbh_CsGX0DuwIOzcwDCNoFgS0aJ3BwEUgIIgVxQhzAyHEYWcD1iFUQMMQeRx3bsETt7XB-CbZXGIcbJaZ4KGJD_tQu4tDjH117jbAeGRmE1iGqA1AP1KbU2yHTCUJMAEAy0BQEC-gGCPymDfSuC1TYxUCusZxuCOJyNQBZcW-hi4IOnBxH4Lpi6sNEikDhM8eh9DgKI9oQo0C0AEMXfYVMXQFOoDAaykVvpKBAJZbYrg0gAWqb47QoMongQdvwVAPomRIHYPwIExIqjeAyBaX85JZkVP4Po_I1B-BXH4Jwo5xl1j8HKOQfoMxmr7PmSAbyCUsKwBhFgH0GzprkkoIkPMeQCiTi1Pg8oIIVkCBOTWfgUQ0A3P4KobAQzQUWDOTAeYEYSIQHgDcwx_AzRSihSAZy0kcBRxwJxC08QZh-BwNw-FtZ-DI1RpQdGstLTY1mQckAAA9ThyZiXUoRYIf51pcX4sJcS0lUByWuEpfwdYQ15A_SWdUD41BIApCGdQEGkSwIgCYiAWgvosj7IWWaWgyD_mzBmPwOV8hrVAA',
                      __position: 0,
                      __code: '<Button>My button</Button>',
                      __scope: { props: this ? this.props : t, Button: s },
                    },
                    r.a.createElement(s, null, 'My button'),
                  ),
                  r.a.createElement(o.MDXTag, { name: 'h2', components: n, props: { id: 'propstable' } }, 'PropsTable'),
                  r.a.createElement(i.f, { of: s }),
                )
              },
            },
          ]) && c(t.prototype, a),
          u && c(t, u),
          n
        )
      })()
    },
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
        o = t('./node_modules/polished/dist/polished.es.js'),
        i = t('./packages/core/dist/styled.js')
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
            i.withTheme(
              i.createGlobalStyle(
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
                o.normalize,
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
      var o = t('./packages/core/dist/themePismo.js')
      n.themePismo = o.themePismo
      var i = t('./packages/core/dist/styled.js')
      ;(n.css = i.css),
        (n.createGlobalStyle = i.createGlobalStyle),
        (n.keyframes = i.keyframes),
        (n.ThemeProvider = i.ThemeProvider),
        (n.withTheme = i.withTheme)
      var u = t('./node_modules/@rebass/grid/dist/index.js')
      ;(n.Box = u.Box), (n.Flex = u.Flex)
      var l = t('./packages/core/dist/typography.js')
      ;(n.H1 = l.H1), (n.H2 = l.H2), (n.H3 = l.H3), (n.H4 = l.H4), (n.P = l.P), (n.Small = l.Small), (n.Tiny = l.Tiny)
      var d = t('./packages/core/dist/colors.js')
      n.colors = d.colors
      var s = t('./packages/core/dist/media.js')
      n.media = s.media
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
      var o,
        i = t('./node_modules/styled-components/dist/styled-components.browser.esm.js').css,
        u = { desktop: 1025, tablet: 900, mobile: 737 }
      n.media = Object.keys(u).reduce(function(e, n) {
        var t,
          l = n.includes('desktop') ? 'min' : 'max'
        return r(
          {},
          e,
          (((t = {})[n] = function(e) {
            return i(
              o ||
                (o = a(
                  ['\n    @media (', '-width: ', 'em) {\n      ', '\n    }\n  '],
                  ['\n    @media (', '-width: ', 'em) {\n      ', '\n    }\n  '],
                )),
              l,
              u[n] / 16,
              i(e),
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
        o = a.css,
        i = a.createGlobalStyle,
        u = a.keyframes,
        l = a.ThemeProvider,
        d = a.withTheme
      ;(n.css = o),
        (n.createGlobalStyle = i),
        (n.keyframes = u),
        (n.ThemeProvider = l),
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
        o,
        i,
        u,
        l,
        d,
        s,
        m = t('./packages/core/dist/styled.js'),
        p = function(e) {
          return { light: 300, regular: 400, bold: 700, black: 900, default: 400 }[e.split(' ')[0] || 'default']
        }
      ;(n.H1 = m.default.h1(
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
        (n.H2 = m.default.h2(
          o ||
            (o = a(
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
        (n.H3 = m.default.h3(
          i ||
            (i = a(
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
        (n.H4 = m.default.h4(
          u ||
            (u = a(
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
        (n.P = m.default.p(
          l ||
            (l = a(
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
        (n.Small = m.default.small(
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
        (n.Tiny = m.default.small(
          s ||
            (s = a(
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
  },
])
//# sourceMappingURL=packages-button-button.8e2318af906385de48ca.js.map
