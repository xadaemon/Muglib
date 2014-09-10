/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*/
(function () {
    var mug = function (element,index) {
        if (window === this) {
            return new mug(element);
        }
        this.e = document.querySelectorAll(element);
        index = typeof index !== 'undefined' ? index : 0;
    };
window.mug = mug;
    window.$ = mug;
})(window);