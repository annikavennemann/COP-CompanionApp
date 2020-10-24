// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/ui-framework/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = createElement;
exports.deleteElement = deleteElement;

function createElement(tag) {
  var parentHtmlElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;
  var cssClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var newElement = document.createElement(tag);
  parentHtmlElement.appendChild(newElement);

  if (text) {
    newElement.textContent = text;
  }

  if (Array.isArray(cssClass)) {
    cssClass.forEach(function (currywurst) {
      newElement.classList.add(currywurst);
    });
  } else if (cssClass) {
    newElement.classList.add(cssClass);
  }

  return newElement;
}

function deleteElement(delClass) {
  var delSections = document.querySelectorAll(delClass);
  delSections.forEach(function (section) {
    section.remove();
  });
}
/*cssClass.forEach((class) => {
    newElement.classList.add(class)
})*/
},{}],"js/components/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiFramework = require("../ui-framework");

var _default = function _default() {
  var headerAll = (0, _uiFramework.createElement)('header', document.body, 'header__all');
  var headerTitle = (0, _uiFramework.createElement)('h1', headerAll, 'header__title', 'Dashboard');
  var headerSubtitle = (0, _uiFramework.createElement)('p', headerAll, 'header__subtitle', '');
  return {
    componentName: 'Header',
    update: function update(newHeadline, newSubheadline) {
      headerTitle.textContent = newHeadline;
      headerSubtitle.textContent = newSubheadline;
      return 'the title just changed';
    }
  };
};

exports.default = _default;
},{"../ui-framework":"js/ui-framework/index.js"}],"js/components/Journal/JournalCard.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiFramework = require("./../../ui-framework");

var _default = function _default(journal, journalList) {
  journal.forEach(function (entry) {
    var journalElement = (0, _uiFramework.createElement)('li', journalList, 'journal-entry__card');
    var journalElementHeadline = (0, _uiFramework.createElement)('h2', journalElement, ['journal-entry__card__title', 'global__headline2'], entry.datum);
    /*Rating*/

    var journalElementRating = (0, _uiFramework.createElement)('div', journalElement, ['journal-entry__item', 'journal-entry__rating']);
    var ratingHeadline = (0, _uiFramework.createElement)('h3', journalElementRating, 'journal-entry__item__title', 'Rating:');
    var ratingStars = (0, _uiFramework.createElement)('p', journalElementRating, '', entry.rating);
    /*Comprehension*/

    var journalElementComprehension = (0, _uiFramework.createElement)('div', journalElement, ['journal-entry__item', 'journal-entry__comprehension']);
    var comprehensionHeadline = (0, _uiFramework.createElement)('h3', journalElementComprehension, 'journal-entry__item__title', 'Comprehension:');
    var ratingRectangles = (0, _uiFramework.createElement)('p', journalElementComprehension, '', entry.comprehension);
    /*Motto*/

    var journalElementMotto = (0, _uiFramework.createElement)('div', journalElement, ['journal-entry__item', 'journal-entry__motto']);
    var mottoHeadline = (0, _uiFramework.createElement)('h3', journalElementMotto, 'journal-entry__item__title', 'Motto:');
    var mottoText = (0, _uiFramework.createElement)('p', journalElementMotto, '', entry.motto);
    /*Notes*/

    var journalElementNotes = (0, _uiFramework.createElement)('div', journalElement, ['journal-entry__item', 'journal-entry__notes']);
    var notesHeadline = (0, _uiFramework.createElement)('h3', journalElementNotes, 'journal-entry__item__title', 'Notes:');
    var notesText = (0, _uiFramework.createElement)('p', journalElementNotes, '', entry.notes);
  });
};

exports.default = _default;
},{"./../../ui-framework":"js/ui-framework/index.js"}],"js/components/Journal/JournalSection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiFramework = require("./../../ui-framework");

var _JournalCard = _interopRequireDefault(require("./JournalCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(journal) {
  var main = document.querySelector('main');
  var section = (0, _uiFramework.createElement)('section', main, 'section-delete');
  section.id = 'journal'; //Button

  var rateTodayBtn = (0, _uiFramework.createElement)('button', section, ['nav__button', 'journal-entry__button'], 'Rate today'); //Journal-List

  var journalList = (0, _uiFramework.createElement)('ul', section, 'nav__journal-list'); //Journal-Card

  (0, _JournalCard.default)(journal, journalList);
};

exports.default = _default;
},{"./../../ui-framework":"js/ui-framework/index.js","./JournalCard":"js/components/Journal/JournalCard.js"}],"js/components/Journal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _JournalSection = _interopRequireDefault(require("./Journal/JournalSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var journal = [{
    datum: 'yesterday',
    rating: 3,
    comprehension: 7,
    motto: "That's life in the city",
    notes: "Si sine causa? quae fuerit causa, \
            mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, \
            idque instituit docere sic omne animal, simul atque."
  }, {
    datum: '23.10.2020',
    rating: 4,
    comprehension: 10,
    motto: "What a day",
    notes: "Si sine causa? quae fuerit causa, \
            mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, \
            idque instituit docere sic omne animal, simul atque."
  }];
  (0, _JournalSection.default)(journal);
};

exports.default = _default;
},{"./Journal/JournalSection":"js/components/Journal/JournalSection.js"}],"js/components/Nav.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

var _uiFramework = require("../ui-framework");

var _Journal = _interopRequireDefault(require("./Journal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Nav(onClick) {
  var footer = (0, _uiFramework.createElement)('footer', document.body, 'side__footer');
  var nav = (0, _uiFramework.createElement)('nav', footer, 'nav__footer');
  var navList = (0, _uiFramework.createElement)('ul', nav, 'nav_list', '');
  var navInfo = [{
    headline: 'Dashboard',
    subHeadline: null,
    class: 'nav__button--dashboard',
    href: '#dashboard'
  }, {
    headline: 'Code Buddys',
    subHeadline: 'on Monday - 26.10.2020',
    class: 'nav__button--buddy',
    href: '#buddy'
  }, {
    headline: 'Teams',
    subHeadline: 'for Exercise 1',
    class: 'nav__button--teams',
    href: '#teams'
  }, {
    headline: 'Energy',
    subHeadline: null,
    class: 'nav__button--energy',
    href: '#energy'
  }, {
    headline: 'Journal',
    subHeadline: null,
    class: 'nav__button--journal',
    href: '#journal',
    show: function show() {
      return (0, _Journal.default)();
    }
  }];
  navInfo.forEach(function (title) {
    var linkElement = (0, _uiFramework.createElement)('li', navList, title.class);
    linkElement.addEventListener('click', function (event) {
      onClick(title.headline, title.subHeadline);
      (0, _uiFramework.deleteElement)('.section-delete');
      title.show();
    });
  });
}
},{"../ui-framework":"js/ui-framework/index.js","./Journal":"js/components/Journal.js"}],"js/components/BuddyPair.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiFramework = require("../ui-framework");

var _default = function _default(pair, parent) {
  var buddyListElement = (0, _uiFramework.createElement)('li', parent, 'buddy__pair');
  var buddyOne = (0, _uiFramework.createElement)('p', buddyListElement, ['buddy', 'buddy__one'], pair[0].Vorname + ' ' + pair[0].Nachname);
  var plusIconSvg = (0, _uiFramework.createElement)('div', buddyOne, 'buddy__plus-icon');
  var buddyTwo = (0, _uiFramework.createElement)('p', buddyListElement, ['buddy', 'buddy__two'], pair[1].Vorname + ' ' + pair[1].Nachname); // plusIconSvg.setAttribute('viewBox','0 0 21 21');
  // plusIconSvg.setAttribute('width','21px');
  // plusIconSvg.setAttribute('height','21px')
  // plusIconSvg.setAttribute('fill','currentColor')
  // plusIconSvg.setAttribute('version','1.1')
  // plusIconSvg.setAttribute('xmlns','http://www.w3.org/2000/svg')
  // plusIconPath.setAttribute('d', "M10.1666667,-7.10542736e-15 C11.2210285,-7.10542736e-15 12.0848318,0.815877791 12.1611809,1.85073766 L12.1666667,2 L12.1666667,8.16566667 L18.3333333,8.16666667 C19.4379028,8.16666667 20.3333333,9.06209717 20.3333333,10.1666667 C20.3333333,11.2210285 19.5174555,12.0848318 18.4825957,12.1611809 L18.3333333,12.1666667 L12.1666667,12.1656667 L12.1666667,18.3333333 C12.1666667,19.4379028 11.2712362,20.3333333 10.1666667,20.3333333 C9.11230487,20.3333333 8.24850154,19.5174555 8.1721524,18.4825957 L8.16666667,18.3333333 L8.16666667,12.1656667 L2,12.1666667 C0.8954305,12.1666667 3.01980663e-14,11.2712362 3.01980663e-14,10.1666667 C3.01980663e-14,9.11230487 0.815877791,8.24850154 1.85073766,8.1721524 L2,8.16666667 L8.16666667,8.16566667 L8.16666667,2 C8.16666667,0.8954305 9.06209717,-7.10542736e-15 10.1666667,-7.10542736e-15 Z" )
  // plusIconPath.id = 'Path'
};

exports.default = _default;
},{"../ui-framework":"js/ui-framework/index.js"}],"js/components/BuddyList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uiFramework = require("../ui-framework");

var _BuddyPair = _interopRequireDefault(require("./BuddyPair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(members) {
  var main = document.querySelector('main');
  var buddySection = (0, _uiFramework.createElement)('section', main, 'buddy-section');
  buddySection.id = 'journal';
  var buddyList = (0, _uiFramework.createElement)('ul', buddySection, 'buddy__list');
  var buddyPairs = [members.slice(0, 2), members.slice(2, 4), members.slice(4, 6), members.slice(6, 8), members.slice(8, 10)];
  buddyPairs.forEach(function (pair) {
    (0, _BuddyPair.default)(pair, buddyList);
  });
};

exports.default = _default;
},{"../ui-framework":"js/ui-framework/index.js","./BuddyPair":"js/components/BuddyPair.js"}],"js/App.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Header = _interopRequireDefault(require("./components/Header"));

var _Nav = _interopRequireDefault(require("./components/Nav"));

var _uiFramework = require("./ui-framework");

var _BuddyList = _interopRequireDefault(require("./components/BuddyList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  var headerComponent = (0, _Header.default)();
  var main = (0, _uiFramework.createElement)('main');
  var members = [{
    Vorname: 'Tine',
    Nachname: 'Krüger'
  }, {
    Vorname: 'Marie',
    Nachname: 'Reese'
  }, {
    Vorname: 'Annika',
    Nachname: 'Vennemann'
  }, {
    Vorname: 'Justin',
    Nachname: 'Timberlake'
  }, {
    Vorname: 'Barak',
    Nachname: 'Obama'
  }, {
    Vorname: 'Beyoncé',
    Nachname: 'Knowls'
  }, {
    Vorname: 'Lady',
    Nachname: 'Gaga'
  }, {
    Vorname: 'Mark',
    Nachname: 'Zuckerberg'
  }, {
    Vorname: 'Elon',
    Nachname: 'Mask'
  }, {
    Vorname: 'Steve',
    Nachname: 'Jobs'
  }];
  (0, _BuddyList.default)(members);
  (0, _Nav.default)(function (headerTitle, headerSubtitle) {
    return headerComponent.update(headerTitle, headerSubtitle);
  });
};

exports.default = _default;
},{"./components/Header":"js/components/Header.js","./components/Nav":"js/components/Nav.js","./ui-framework":"js/ui-framework/index.js","./components/BuddyList":"js/components/BuddyList.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _App = _interopRequireDefault(require("./js/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _App.default)();
},{"./js/App":"js/App.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51254" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/COP-CompanionApp.e31bb0bc.js.map