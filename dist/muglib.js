/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*/
mug.fn = mug.prototype.ajax = {
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
};;/*
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
})(window);;mug.fn = mug.prototype.socket = {
    init: function (url, protocol,callback) {
        var socketRef = new WebSocket(url, protocol);
        socketRef.onopen = callback(e, 1);
        socketRef.onopen = callback(e, 1);
        socketRef.onopen = callback(e, 1);
    },
    send: function (msg){
        socketRef.send();
    }
};;mug.fn = mug.prototype.textHandling = {
    binToAscii: function (instring){
        outstring = instring.replace(/01000001/g, "A");
        outstring = instring.replace(/01000010/g, "B");
        outstring = instring.replace(/01000011/g, "C");
        outstring = instring.replace(/01000100/g, "D");
        outstring = instring.replace(/01000101/g, "E");
        outstring = instring.replace(/01000110/g, "F");
        outstring = instring.replace(/01000111/g, "G");
        outstring = instring.replace(/01001000/g, "H");
        outstring = instring.replace(/01001001/g, "I");
        outstring = instring.replace(/01001010/g, "J");
        outstring = instring.replace(/01001011/g, "K");
        outstring = instring.replace(/01001100/g, "L");
        outstring = instring.replace(/01001101/g, "M");
        outstring = instring.replace(/01001110/g, "N");
        outstring = instring.replace(/01001111/g, "O");
        outstring = instring.replace(/01010000/g, "P");
        outstring = instring.replace(/01010001/g, "Q");
        outstring = instring.replace(/01010010/g, "R");
        outstring = instring.replace(/01010011/g, "S");
        outstring = instring.replace(/01010100/g, "T");
        outstring = instring.replace(/01010101/g, "U");
        outstring = instring.replace(/01010110/g, "V");
        outstring = instring.replace(/01010111/g, "W");
        outstring = instring.replace(/01011000/g, "X");
        outstring = instring.replace(/01011001/g, "Y");
        outstring = instring.replace(/01011010/g, "Z");
        outstring = instring.replace(/01100000/g, "`");
        outstring = instring.replace(/01111110/g, "~");
        outstring = instring.replace(/00110001/g, "1");
        outstring = instring.replace(/00110010/g, "2");
        outstring = instring.replace(/00110011/g, "3");
        outstring = instring.replace(/00110100/g, "4");
        outstring = instring.replace(/00110101/g, "5");
        outstring = instring.replace(/00110110/g, "6");
        outstring = instring.replace(/00110111/g, "7");
        outstring = instring.replace(/00111000/g, "8");
        outstring = instring.replace(/00111000/g, "9");
        outstring = instring.replace(/00110000/g, "0");
        outstring = instring.replace(/00100001/g, "!");
        outstring = instring.replace(/01000000/g, "@");
        outstring = instring.replace(/00100011/g, "#");
        outstring = instring.replace(/00100100/g, "$");
        outstring = instring.replace(/00100101/g, "%");
        outstring = instring.replace(/01011110/g, "^");
        outstring = instring.replace(/00100110/g, "&");
        outstring = instring.replace(/00101010/g, "*");
        outstring = instring.replace(/00101000/g, "(");
        outstring = instring.replace(/00101001/g, ")");
        outstring = instring.replace(/01011111/g, "_");
        outstring = instring.replace(/00101101/g, "-");
        outstring = instring.replace(/00111101/g, "=");
        outstring = instring.replace(/00101011/g, "+");
        outstring = instring.replace(/01011100/g, "/");
        outstring = instring.replace(/01111100/g, "|");
        outstring = instring.replace(/01111011/g, "{");
        outstring = instring.replace(/01111101/g, "}");
        outstring = instring.replace(/01011011/g, "[");
        outstring = instring.replace(/01011101/g, "]");
        outstring = instring.replace(/00111100/g, "<");
        outstring = instring.replace(/00111110/g, ">");
        outstring = instring.replace(/00101111/g, "\\");
        outstring = instring.replace(/00111111/g, "?");
        outstring = instring.replace(/00101110/g, ".");
        outstring = instring.replace(/00101100/g, ",");
        outstring = instring.replace(/00100111/g, "'");
        outstring = instring.replace(/00100010/g, "\"");
        outstring = instring.replace(/00111010/g, ":");
        outstring = instring.replace(/00111011/g, ";");
        outstring = instring.replace(/01100001/g, "a");
        outstring = instring.replace(/01100010/g, "b");
        outstring = instring.replace(/01100011/g, "c");
        outstring = instring.replace(/01100100/g, "d");
        outstring = instring.replace(/01100101/g, "e");
        outstring = instring.replace(/01100110/g, "f");
        outstring = instring.replace(/01100111/g, "g");
        outstring = instring.replace(/01101000/g, "h");
        outstring = instring.replace(/01101001/g, "i");
        outstring = instring.replace(/01101010/g, "j");
        outstring = instring.replace(/01101011/g, "k");
        outstring = instring.replace(/01101100/g, "l");
        outstring = instring.replace(/01101101/g, "m");
        outstring = instring.replace(/01101110/g, "n");
        outstring = instring.replace(/01101111/g, "o");
        outstring = instring.replace(/01110000/g, "p");
        outstring = instring.replace(/01110001/g, "q");
        outstring = instring.replace(/01110010/g, "r");
        outstring = instring.replace(/01110011/g, "s");
        outstring = instring.replace(/01110100/g, "t");
        outstring = instring.replace(/01110101/g, "u");
        outstring = instring.replace(/01110110/g, "v");
        outstring = instring.replace(/01110111/g, "w");
        outstring = instring.replace(/01111000/g, "x");
        outstring = instring.replace(/01111001/g, "y");
        outstring = instring.replace(/01111010/g, "z");
        outstring = instring.replace(/\n/g, "");
        outstring = instring.replace(/1010/g, "\n");
        return outstring;
    },
    asciiToBin: function(instring){
                outstring = instring.replace(/A/g, "01000001");
        outstring = instring.replace(/B/g, "01000010");
        outstring = instring.replace(/C/g, "01000011");
        outstring = instring.replace(/D/g, "01000100");
        outstring = instring.replace(/E/g, "01000101");
        outstring = instring.replace(/F/g, "01000110");
        outstring = instring.replace(/G/g, "01000111");
        outstring = instring.replace(/H/g, "01001000");
        outstring = instring.replace(/I/g, "01001001");
        outstring = instring.replace(/J/g, "01001010");
        outstring = instring.replace(/K/g, "01001011");
        outstring = instring.replace(/L/g, "01001100");
        outstring = instring.replace(/M/g, "01001101");
        outstring = instring.replace(/N/g, "01001110");
        outstring = instring.replace(/O/g, "01001111");
        outstring = instring.replace(/P/g, "01010000");
        outstring = instring.replace(/Q/g, "01010001");
        outstring = instring.replace(/R/g, "01010010");
        outstring = instring.replace(/S/g, "01010011");
        outstring = instring.replace(/T/g, "01010100");
        outstring = instring.replace(/U/g, "01010101");
        outstring = instring.replace(/V/g, "01010110");
        outstring = instring.replace(/W/g, "01010111");
        outstring = instring.replace(/X/g, "01011000");
        outstring = instring.replace(/Y/g, "01011001");
        outstring = instring.replace(/Z/g, "01011010");
        outstring = instring.replace(/`/g, "01100000");
        outstring = instring.replace(/~/g, "01111110");
        outstring = instring.replace(/1/g, "00110001");
        outstring = instring.replace(/2/g, "00110010");
        outstring = instring.replace(/3/g, "00110011");
        outstring = instring.replace(/4/g, "00110100");
        outstring = instring.replace(/5/g, "00110101");
        outstring = instring.replace(/6/g, "00110110");
        outstring = instring.replace(/7/g, "00110111");
        outstring = instring.replace(/8/g, "00111000");
        outstring = instring.replace(/9/g, "00111000");
        outstring = instring.replace(/0/g, "00110000");
        outstring = instring.replace(/!/g, "00100001");
        outstring = instring.replace(/@/g, "01000000");
        outstring = instring.replace(/#/g, "00100011");
        outstring = instring.replace(/$/g, "00100100");
        outstring = instring.replace(/%/g, "00100101");
        outstring = instring.replace(/^/g, "01011110");
        outstring = instring.replace(/&/g, "00100110");
        outstring = instring.replace(/\*/g, "00101010");
        outstring = instring.replace(/\(/g, "00101000");
        outstring = instring.replace(/\)/g, "00101001");
        outstring = instring.replace(/_/g, "01011111");
        outstring = instring.replace(/-/g, "00101101");
        outstring = instring.replace(/=/g, "00111101");
        outstring = instring.replace(/\+/g, "00101011");
        outstring = instring.replace(/\//g, "01011100");
        outstring = instring.replace(/\|/g, "01111100");
        outstring = instring.replace(/\{/g, "01111011");
        outstring = instring.replace(/\}/g, "01111101");
        outstring = instring.replace(/\[/g, "01011011");
        outstring = instring.replace(/]/g, "01011101");
        outstring = instring.replace(/</g, "00111100");
        outstring = instring.replace(/>/g, "00111110");
        outstring = instring.replace(/00101111/g, "\\");
        outstring = instring.replace(/\?/g, "00111111");
        outstring = instring.replace(/./g, "00101110");
        outstring = instring.replace(/,/g, "00101100");
        outstring = instring.replace(/'/g, "00100111");
        outstring = instring.replace(/\\/g, "00100010");
        outstring = instring.replace(/:/g, "00111010");
        outstring = instring.replace(/;/g, "00111011");
        outstring = instring.replace(/a/g, "01100001");
        outstring = instring.replace(/b/g, "01100010");
        outstring = instring.replace(/c/g, "01100011");
        outstring = instring.replace(/d/g, "01100100");
        outstring = instring.replace(/e/g, "01100101");
        outstring = instring.replace(/f/g, "01100110");
        outstring = instring.replace(/g/g, "01100111");
        outstring = instring.replace(/h/g, "01101000");
        outstring = instring.replace(/i/g, "01101001");
        outstring = instring.replace(/j/g, "01101010");
        outstring = instring.replace(/k/g, "01101011");
        outstring = instring.replace(/l/g, "01101100");
        outstring = instring.replace(/m/g, "01101101");
        outstring = instring.replace(/n/g, "01101110");
        outstring = instring.replace(/o/g, "01101111");
        outstring = instring.replace(/p/g, "01110000");
        outstring = instring.replace(/q/g, "01110001");
        outstring = instring.replace(/r/g, "01110010");
        outstring = instring.replace(/s/g, "01110011");
        outstring = instring.replace(/t/g, "01110100");
        outstring = instring.replace(/u/g, "01110101");
        outstring = instring.replace(/v/g, "01110110");
        outstring = instring.replace(/w/g, "01110111");
        outstring = instring.replace(/x/g, "01111000");
        outstring = instring.replace(/y/g, "01111001");
        outstring = instring.replace(/z/g, "01111010");
        outstring = instring.replace(/\n/g, "00001010");
        outstring = instring.replace(/([0-1]){8}/g, "$1\n");
        return outstring;
    }
};