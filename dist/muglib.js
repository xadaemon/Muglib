/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
MuglibVersion 0.3.0 build at lab on day 09-18-2014
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
})(window);Mug.fn = Mug.prototype.ajax = {
    get: function (url, data, callback, async) {
        async = typeof async !== 'undefined' ? async : true;
        var r = new XMLHttpRequest();
        r.onload = function(){
            if (r.readyState == 4 && r.status == 200) {
                callback(r.responseText);
            }else{
                callback(r.statusText);
            }
        };
        if(data !== ""){
            r.open("get", url + '?' + data, async);
        }else{
            r.open("get", url, async);
            r.send();
            r.onerror = function (){
                callback(r.statusText);
            };
        }
    },
    post: function (url, data, callback, async) {
        async = typeof async !== 'undefined' ? async : true;
        var r = new XMLHttpRequest();
        r.onload = function(){
            if (r.readyState == 4 && r.status == 200) {
                callback(r.responseText);
            }else{
                callback(r.statusText);
            }
        };
        if(data !== ""){
            r.open("post", url, async);
            r.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            r.send(data);
        }else{
            r.open("post", url, async);
            r.send();
            r.onerror = function (){
                callback(r.statusText);
            };
        }
    }
};