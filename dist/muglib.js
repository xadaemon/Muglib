/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
MuglibVersion 1.2.1 build at lab on day 10-23-2014
*/
(function ( window, undefined ) {
    var Mug = function (element, index) {
        index = typeof index !== 'undefined' ? index : 0;
        if (window === this) {
            return new Mug(element, index);
        }
        this.node = document.querySelectorAll(element, index);
        return this;
    };
    Mug.fn = Mug.prototype;
    window.Mug = Mug;
    window.$ = Mug;
})(window);Mug.fn.ajax = {
    request: function(opts){
        if (typeof opts == 'string') opts = {url:opts};
        opts.url = opts.url || '';
        opts.method = opts.method || 'get';
        opts.data = opts.data || 'NO_DATA';
        opts.async = opts.async || true;
    },
    api: {
        r: new XMLHttpRequest(),
        host: {},
        setHeaders: function(opts){
            for (var name in opts.headers) {
                this.r && thi.r.setRequestHeader(name, opts.headers[name]);
            };
        },
        req: function (opts) {
            var self = this;
            var r = new XMLHttpRequest();
            this.r.onload = function(){
                if (this.r.readyState == 4 && this.r.status == 200) {
                    self.onSucess.apply(self.host, [this.r.responseText]);
                }else{
                    self.onSucess.apply(self.host, [this.r.statusText]);
                }
            }
            if(opts.data != 'NO_DATA' && opts.method == 'get'){
                this.r.open('GET', url, async);
                this.r.send(data);
            }else if(opts.data != 'NO_DATA' && opts.method == 'post'){
                this.r.open('POST', url, async);
                this.r.setHeaders({'Content-type':'application/x-www-form-urlencoded'});
                this.r.send(data);
            }
            return this;
            return api.req();
        }
    }
};Mug.fn = {
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
        return this;
    },
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
        return this;
    }
};Mug.fn = Mug.prototype.get = function (url, data, callback, async) {
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
};Mug.fn = Mug.prototype.post = function (url, data, callback, async) {
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
};Mug.fn.html = function(content) {
    node.innerHTML(content);
    return this;
};