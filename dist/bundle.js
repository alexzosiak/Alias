/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/card.js":
/*!********************!*\
  !*** ./js/card.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const card = [
    { word : 'Cat', img : 'img/Cat.svg' },
    { word : 'Dog', img : 'img/Dog.svg' },
    { word : 'Frog', img : 'img/Frog.svg'},
    { word : 'Horse', img : 'img/Horse.svg' },
    { word : 'Wolf', img : 'img/Wolf.svg' },
    { word : 'Duck', img : 'img/Duck.svg' },
    { word : 'Fox', img : 'img/Fox.svg' },
    { word : 'Lion', img : 'img/Lion.svg' },
    { word : 'Fish', img : 'img/Fish.svg' },
    { word : 'Tiger', img : 'img/Tiger.svg' },
    { word : 'Pig', img : 'img/Pig.svg' },
    { word : 'Mouse', img : 'img/Mouse.svg' },
    { word : 'Ant', img : 'img/Ant.svg' },
    { word : 'Bear', img : 'img/Bear.svg' },
    { word : 'Rabbit', img : 'img/Rabbit.svg' },
    { word : 'Snake', img : 'img/Snake.svg' },
    { word : 'Apple', img : 'img/Apple.svg' },
    { word : 'Pear', img : 'img/Pear.svg' },
    { word : 'Bee', img : 'img/Bee.svg' },
    { word : 'Ice cream', img : 'img/IceCream.svg' },
    { word : 'Egg', img : 'img/Egg.svg' },
    { word : 'Cupcake', img : 'img/Cupcake.svg' },
    { word : 'Banana', img : 'img/Banana.svg' },
    { word : 'Ball', img : 'img/Ball.svg' },
    { word : 'Car', img : 'img/Car.svg' },
    { word : 'Ice', img : 'img/Ice.svg' },
    { word : 'Key', img : 'img/Key.svg' },
    { word : 'Mushroom', img : 'img/Mushroom.svg' },
    { word : 'Umbrella', img : 'img/Umbrella.svg' },
    { word : 'Train', img : 'img/Train.svg' },
    { word : 'Leg', img : 'img/Leg.svg' },
    { word : 'Hand', img : 'img/Hand.svg' }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);


/***/ }),

/***/ "./js/db-cloud.js":
/*!************************!*\
  !*** ./js/db-cloud.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const elementImg = [
    { name: 'ball', src: 'fon/ball.svg', selector: ['ball', 'mode'] },
    { name: 'cloud1', src: 'fon/left1.svg', selector: ['cloud1', 'mode'] },
    { name: 'cloud2', src: 'fon/left2.svg', selector: ['cloud2', 'mode'] },
    { name: 'cloud3', src: 'fon/right3.svg', selector: ['cloud3', 'mode'] },
    { name: 'cloud4', src: 'fon/right4.svg', selector: ['cloud4', 'mode'] },
    { name: 'cloud5', src: 'fon/right5.svg', selector: ['cloud5', 'mode'] },
    { name: 'floor1', src: 'fon/floor1.svg', selector: ['floor1', 'mode', 'mode-floor'] },
    { name: 'floor2', src: 'fon/floor2.svg', selector: ['floor2', 'mode', 'mode-floor'] },
    { name: 'floor3', src: 'fon/floor3.svg', selector: ['floor3', 'mode', 'mode-floor'] }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementImg);

/***/ }),

/***/ "./js/fon.js":
/*!*******************!*\
  !*** ./js/fon.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createCloudAnimation(teg, src, arraySelectorClass) {
    const bg = document.querySelector('body');
    bg.style.backgroundColor = '#C1EFFF';

    const element = document.createElement(teg);

    arraySelectorClass.forEach((item) => {
        element.classList.add(item);
    });

    element.src = src;
    bg.append(element);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCloudAnimation);



/***/ }),

/***/ "./js/modules/generatorRandomCards.js":
/*!********************************************!*\
  !*** ./js/modules/generatorRandomCards.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function generatorRandomCards(card) {
    let cardAlias = card[Math.floor(Math.random() * card.length)];

    // let deletIndex = card.indexOf(aliasCard.word);
    // card.splice(deletIndex, 1);

  
    return cardAlias;
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatorRandomCards);

/***/ }),

/***/ "./js/modules/startField.js":
/*!**********************************!*\
  !*** ./js/modules/startField.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card */ "./js/card.js");
/* harmony import */ var _generatorRandomCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generatorRandomCards */ "./js/modules/generatorRandomCards.js");





class GameField {
    constructor(parendSelector, tegElement) {
        this.container = document.querySelector(parendSelector);
        this.element = document.createElement(tegElement);
        this.rightAnswer = [];
        this.wrongAnswer = [];
        this.pointsGame = 0;
    }

    startMenu() {
        this.element.classList.add('main-block');
        this.element.innerHTML = `
                    <h1 class="main-block_title">Alias</h1>
                    <button class="main-button utilit-btn1" data-start-game>Start game</button>
                    <button class="main-button utilit-btn2" data-open>Rules of game</button>`;
        container.append(this.element);

        document.querySelector('button[data-start-game]').addEventListener('click', () => {
            this.removeElement();
            this.startGame();
        })
        document.querySelector('button[data-open]').addEventListener('click', () => {
            this.removeElement();
            this.openRules();
        })
    }

    openRules() {
        this.element.classList.add('main-block');
        this.element.innerHTML = `<h2 class="rules_title">Правила игры:</h2> 
            <p class="rules_text">Игрок за 60секунд должен на английском обьяснить другому игроку слово указанное на карточке. Если смог тогда жми кнопку "YES", если нет тогда нажимай "NO". За каждое отгаданное слово игрок получит 1 балл!!!</p> 
            <button class="main-button utilit-btn1" data-back>back</button>`;
        container.append(this.element);

        document.querySelector('button[data-back]').addEventListener('click', () => {
            this.removeElement();
            this.startMenu();
        })
    }

    startGame() {
        this.clear();

        let aliasCard = (0,_generatorRandomCards__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"]);

        this.element.classList.add('main-block', 'field');
        this.element.innerHTML = `
            <span class="field_time" data-time>60</span>
            <img class="img">
            <div>
                <button class="answer-button wrong" id="card-false">No</button>
                <button class="answer-button right" id="card-true">Yes</button>
            </div>`;
        container.append(this.element);

        const img = document.querySelector('.img');
        img.src = aliasCard.img;

        this.time();
        
        document.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target.classList.contains('wrong')) {
                    
                  

                    this.wrongAnswer.push(aliasCard.word);

                    aliasCard = (0,_generatorRandomCards__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"])
                    img.src = aliasCard.img;

                    if (document.querySelector('span[data-time]').textContent === 'finish') {
                        this.removeElement();
                        this.stopGame();
                      }
                    
                }
                if(e.target.classList.contains('right')) {

                   

                    this.pointsGame += 1;
                    this.rightAnswer.push(aliasCard.word);  

                    aliasCard = (0,_generatorRandomCards__WEBPACK_IMPORTED_MODULE_1__["default"])(_card__WEBPACK_IMPORTED_MODULE_0__["default"])
                    img.src = aliasCard.img;
                    
                    console.log(this.rightAnswer);

                    if (document.querySelector('span[data-time]').textContent === 'finish') {
                      this.removeElement();
                      this.stopGame();
                    }
                
                }
            })
        })

       
    }

    stopGame() {

        const rightAnswerResult = this.rightAnswer.join(', ');
        const wrongAnswerResult = this.wrongAnswer.join(', ');

        this.element = document.createElement('div');
        this.element.classList.add('answer_block');
        this.element.innerHTML = `
        <h2 class="answer_title">Общий бал :&nbsp&nbsp&nbsp<span class="answer_points">${this.pointsGame}</span></h2>
        <div class="answer_part">Отгаданние слова : <span class="answer_out-right">${rightAnswerResult}</span></div>
        <div class="answer_part">Не отгадание слова : <span class="answer_out-wrong">${wrongAnswerResult}</span></div>
            <div class="answer_flexBtn">
                <button class="main-button utilit-btn1" id="NewGame">New game</button>
                <button class="main-button utilit-btn2" id="BackMenu">Back Menu</button>
            </div>
        `
        container.append(this.element);

        document.querySelectorAll('button').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.id === "NewGame") {
                    this.removeElement();
                    this.startGame();
                }
                if (e.target.id === "BackMenu") {
                    this.removeElement();
                    this.startMenu();
                }
            })
        })
        
    }

    time() {

    const time = document.querySelector('span[data-time]');

    let second = 3;

    const timer = setInterval(() => {
        if (second > 0) {
            second -= 1;
            time.textContent = second;
        } else {
            time.textContent = "finish";
            clearInterval(timer);
        };
    }, 1000);
    }

    clear() {
        this.pointsGame = 0;
        this.rightAnswer = [];
        this.wrongAnswer = [];
    }
    removeElement() {
        this.element.remove();
    }
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameField);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _db_cloud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db-cloud.js */ "./js/db-cloud.js");
/* harmony import */ var _fon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fon.js */ "./js/fon.js");
/* harmony import */ var _modules_startField_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/startField.js */ "./js/modules/startField.js");





window.addEventListener('DOMContentLoaded', () => {

    new _modules_startField_js__WEBPACK_IMPORTED_MODULE_2__["default"]('.container', 'div').startMenu();
    
    _db_cloud_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((item, i) => {
        (0,_fon_js__WEBPACK_IMPORTED_MODULE_1__["default"])('img', _db_cloud_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].src, _db_cloud_js__WEBPACK_IMPORTED_MODULE_0__["default"][i].selector);
    })
})

  
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map