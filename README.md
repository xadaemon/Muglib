


Mug.js
===
the easy ajax library by mug foundation
License
===
apache v0.2
How to use
===
just call in the api like this:
```JS
$().ajax.get(url, data, callback, async);
$().ajax.post(url, data, callback, async);
mug().ajax.get(url, data, callback, async);
mug().ajax.post(url, data, callback, async);
```
to compile the library use uglifyjs2:
```
$ uglifyjs release/core.js release/ajax.js --screw-ie8 -c -m -o compiled.js
```