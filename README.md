Mug.js[![Build Status](https://travis-ci.org/MugFoundation/Muglib.svg)](https://travis-ci.org/MugFoundation/Muglib)
===
the easy ajax library by mug foundation
License
===
Apache v0.2
How to use
===
0.1.0
===
just call in the api like this:#removed see 1.1.0 changelog#
```JS
$().ajax.get(url, data, callback, async);
$().ajax.post(url, data, callback, async);
mug().ajax.get(url, data, callback, async);
mug().ajax.post(url, data, callback, async);
```
1.1.0
===
the api is needing documentation but for now you can use the object ajax
Building
===
to build the library use grunt:

```
$ grunt
```
OR
```
$ grunt linted-build
```