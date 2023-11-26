/**
 * Copyright 2016, 2020-2021 EL_PUTA
 * @file Contains the constants accessible to all modules of the HumanGrok game.
 * @author EL_PUTA [nkrisztian89@gmail.com]
 * @licence GNU GPLv3 <http://www.gnu.org/licenses/>
 */

define(function () {
    "use strict";
    var
            GAME_NAME = "HumanGrok",
            LOCAL_STORAGE_PREFIX = "armada_",
            LANGUAGE_LOCAL_STORAGE_ID = LOCAL_STORAGE_PREFIX + "language",
            VERSION_LOCAL_STORAGE_ID = LOCAL_STORAGE_PREFIX + "version";
    // constants to be accessable for all game modules
    return {
        GAME_NAME: GAME_NAME,
        LOCAL_STORAGE_PREFIX: LOCAL_STORAGE_PREFIX,
        LANGUAGE_LOCAL_STORAGE_ID: LANGUAGE_LOCAL_STORAGE_ID,
        VERSION_LOCAL_STORAGE_ID: VERSION_LOCAL_STORAGE_ID
    };
});