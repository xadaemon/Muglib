


Mug.js[![Build Status](https://travis-ci.org/MugFoundation/Muglib.svg)](https://travis-ci.org/MugFoundation/Muglib)
===
the easy ajax library by mug foundation
License
===
apache v0.2
How to use
===
0.1.0
===
just call in the api like this:
```JS
$().ajax.get(url, data, callback, async);
$().ajax.post(url, data, callback, async);
mug().ajax.get(url, data, callback, async);
mug().ajax.post(url, data, callback, async);
```
to compile the library use grunt:

```
$ grunt
```
OR
```
$ grunt linted-build
```