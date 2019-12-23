// ==UserScript==
// @name         Jira Copy Name
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jira.icann.org/browse/*
// @grant        GM_setClipboard
// ==/UserScript==

let copyToClipBoard = (text) => {
    GM_setClipboard(text, '')
}

let createButton = (text, copyText) => {
    let a = document.createElement('a');
    a.classList.add('aui-button');
    let span = document.createElement('span');
    span.append(document.createTextNode(text));
    a.append(span);
    a.addEventListener('click', copyToClipBoard.bind(this, copyText));
    return a;
};


(function() {
    'use strict';

    let ticketName = document.querySelector('#summary-val').textContent;
    let ticketNumber = document.querySelector('#key-val').textContent;
    let menuNode = document.getElementById('opsbar-jira.issue.tools');

    menuNode.prepend(createButton('Bug', `bugfix/${ticketNumber}`));
    menuNode.prepend(createButton('Improvement', `improvement/${ticketNumber}`));
    menuNode.prepend(createButton('Feature', `feature/${ticketNumber}`));
    menuNode.prepend(createButton('Copy Name', ticketName));
})();