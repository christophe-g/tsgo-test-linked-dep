# tsgo test with linked dependencies

With tsconfig `skipLibCheck` set to `true`, the TypeScript compiler should not check the types of linked dependencies.

## Steps to reproduce

- git clone <git@github.com>:christophe-g/tsgo-test-linked-dep.git
- git clone --depth 1 <git@github.com>:vaadin/web-components.git
- cd tsgo-test-linked-dep
- npm i
- tsgo

This results in the following error:

```
../web-components/packages/button/src/vaadin-button-mixin.d.ts:6:34 - error TS2307: Cannot find module '@open-wc/dedupe-mixin' or its corresponding type declarations.

6 import type { Constructor } from '@open-wc/dedupe-mixin';
                                   ~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button-mixin.d.ts:7:39 - error TS2307: Cannot find module '@vaadin/a11y-base/src/active-mixin.js' or its corresponding type declarations.

7 import type { ActiveMixinClass } from '@vaadin/a11y-base/src/active-mixin.js';
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button-mixin.d.ts:8:41 - error TS2307: Cannot find module '@vaadin/a11y-base/src/disabled-mixin.js' or its corresponding type declarations.

8 import type { DisabledMixinClass } from '@vaadin/a11y-base/src/disabled-mixin.js';
                                          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button-mixin.d.ts:9:38 - error TS2307: Cannot find module '@vaadin/a11y-base/src/focus-mixin.js' or its corresponding type declarations.

9 import type { FocusMixinClass } from '@vaadin/a11y-base/src/focus-mixin.js';
                                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button-mixin.d.ts:10:41 - error TS2307: Cannot find module '@vaadin/a11y-base/src/keyboard-mixin.js' or its corresponding type declarations.

10 import type { KeyboardMixinClass } from '@vaadin/a11y-base/src/keyboard-mixin.js';
                                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button-mixin.d.ts:11:41 - error TS2307: Cannot find module '@vaadin/a11y-base/src/tabindex-mixin.js' or its corresponding type declarations.

11 import type { TabindexMixinClass } from '@vaadin/a11y-base/src/tabindex-mixin.js';
                                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button.d.ts:6:33 - error TS2307: Cannot find module '@vaadin/component-base/src/controller-mixin.js' or its corresponding type declarations.

6 import { ControllerMixin } from '@vaadin/component-base/src/controller-mixin.js';
                                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button.d.ts:7:30 - error TS2307: Cannot find module '@vaadin/component-base/src/element-mixin.js' or its corresponding type declarations.

7 import { ElementMixin } from '@vaadin/component-base/src/element-mixin.js';
                               ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

../web-components/packages/button/src/vaadin-button.d.ts:8:31 - error TS2307: Cannot find module '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js' or its corresponding type declarations.

8 import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Found 9 errors in 2 files.

Errors  Files
     6  ../web-components/packages/button/src/vaadin-button-mixin.d.ts:6
     3  ../web-components/packages/button/src/vaadin-button.d.ts:6

```

## Expected behavior

like `tsc`, linked dependencies should not be checked with the flag `--skipLibCheck` (or `skipLibCheck` in `tsconfig.json`).
