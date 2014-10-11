Mug.fn = Mug.prototype.bind = function (event, callback, use_capture){
    use_capture = typeof use_capture !== 'undefined' ? use_capture : false;
    addEventListener(event, function (e){
        callback(e);
    }, false);
};