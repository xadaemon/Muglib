Mug.js
===
[![Build Status](https://travis-ci.org/MugFoundation/Muglib.svg)](https://travis-ci.org/MugFoundation/Muglib)
License
===
Apache v0.2
How to use
===
0.1.0
===
**this version is too old and does not works anymore**
just call in the api like this:
```JS
$().get(url, data, callback, async);
$().post(url, data, callback, async);
mug().get(url, data, callback, async);
mug().post(url, data, callback, async);
```
1.1.0
===
**this is the current version**

 - Remade the API from scratch
 - Now API is independent and isolated preventing errors in one plugin affecting the rest of the library

```JS
var config_object = {
url: '',
method: '',
headers: '',
onSucess: function(resonse){
//function body
},
onFail: function(error){
//function body
}
//check wiki API page for every possible option this is the simplest usage possible
};
$().ajax(config_object);
mug().ajax(config_object);
```
Building
===
to build the library use grunt:

```Shell
$ grunt
```
OR
```Shell
$ grunt linted-build
```
