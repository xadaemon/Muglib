/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*/
//this is still a alpha version may not be reliable so use of th old api is still enabled
Mug.fn.ajax = {
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
                this.r.setRequestHeader(name, opts.headers[name]);
            }
        },
        req: function (opts) {
            var self = this;
            var r = new XMLHttpRequest();
            this.r.onload = function(){
                if (this.r.readyState == 4 && this.r.status == 200) {
                    self.onSucess.apply(self.host, [this.r.responseText]);
                }else{
                    self.onFail.apply(self.host, [this.r.statusText]);
                }
            };
            if(opts.data != 'NO_DATA' && opts.method == 'get'){
                this.r.open('GET', url, async);
                this.r.send(data);
            }else if(opts.data != 'NO_DATA' && opts.method == 'post'){
                this.r.open('POST', url, async);
                this.r.setHeaders({'Content-type':'application/x-www-form-urlencoded'});
                this.r.send(data);
            }
            return api.req();
        }
    }
};