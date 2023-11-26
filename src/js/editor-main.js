/**
 * Copyright 2016-2017 EL_PUTA
 * @file The entry point for the HumanGrok editor, to be invoked by RequireJS.
 * @author EL_PUTA [nkrisztian89@gmail.com]
 * @licence GNU GPLv3 <http://www.gnu.org/licenses/>
 * @version 1.0
 */

/*global requirejs */
/**
 * @param editor
 */
requirejs(["editor/editor"], function (editor) {
    "use strict";
    editor.initialize({electron: false});
});
