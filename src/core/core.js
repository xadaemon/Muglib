/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*/
(function () {
    var Mug = function (element,index) {
        index = typeof index !== 'undefined' ? index : 0;
        this.element = document.querySelectorAll(element, index);
        if (window === this) {
            return new Mug(element, index);
        }
    };
window.Mug = Mug;
window.$ = Mug;
})(window);