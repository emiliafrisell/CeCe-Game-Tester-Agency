let menu = document.querySelector('.menu');
let dropDown = document.querySelector('.drop-down');
let logo = document.querySelector('#logo');
let title = document.querySelector('.title');
let factText = document.querySelector('.facts-text');
let factTitle = document.querySelector('.facts-title');
let factImg = document.querySelector('.facts-img');
let catchLine = document.querySelector('#catch');
let i = 0;

let catches = [
            'Are your friends tired of you asking them to test your game over and over? We can help!',        
            'Here at Game Tester Agency we help with testing of all types of games',        
            'Short game of a few minutes or hours of quests? We got you.',
            'Developing a childrens game? We have testers of all ages from 3 to 80!',
            'Does it take a Wizard to tackle your challenges? No problem, we have testers of all levels',
            'After testing we provide extensive documentation of the game experience and thorough feedback',
            'Developing a Game and need to test it before Launch? <br> You\'ve come to the right place!'
            ]

const setupEventListeners = function() {
    menu.addEventListener('click', displayMenu);

}

const displayMenu = function() {
    if (menu.classList.contains('fa-bars')) {
      //menu is closed
      menu.classList.remove('fa-bars');
      menu.classList.add('fa-times');
      dropDown.classList.remove('hidden');
    } else if (menu.classList.contains('fa-times')) {
      // menu is open
      menu.classList.remove('fa-times');
      menu.classList.add('fa-bars');
      dropDown.classList.add('hidden');
    }
  };

function hideMenu() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } if (dropDown.classList.contains('hidden')) {
        
    } else {
        dropDown.classList.add('hidden');
    }
}

function showMenu() {
    if (dropDown.classList.contains('hidden')) {
        dropDown.classList.remove('hidden');
    } if (menu.classList.contains('hidden')) {
        
    } else {
        menu.classList.add('hidden');
    }
}

function showText() {
    if (document.querySelector('#facts')) {
        factText.classList.remove('hidden')
        factTitle.classList.remove('hidden')
        // factImg.classList.add('hidden')
    }
}

function showImage() {
    if (document.querySelector('#facts')) {
        factText.classList.add('hidden')
        factTitle.classList.add('hidden')
        // factImg.classList.remove('hidden')
    }
}

function changeText() {

        if (catchLine.timer) {
            window.clearTimeout(catchLine.timer);
        }

        catchLine.timer = window.setTimeout( function(){ 
            catchLine.innerHTML = catches[i]; 

            i++

            if(i == catches.length) {
                i = 0;
            }

            changeText(); 

        }, 3000);  

}

  function loadPageSize() {

    if (window.innerWidth > '920' || window.innerWidth >= '920') {
        showMenu();
        // showImage();       

    } else if (window.innerWidth > '858') {
        console.log('858')
        showMenu()
        // showImage();

    } else if (window.innerWidth > '650') {
        console.log('800')
        // showImage();
        hideMenu();
     
    }  else {
        hideMenu()
        // showText()
    }    
}

  window.onresize = loadPageSize;

  window.onload = function() {
    setupEventListeners();
    loadPageSize();
    // changeCatches();
    changeText();
  }