## Steps

In a terminal window, type the following commands:

- npm install
- npm start

## Local Environment

OS: MAC 14.3 (23D56) (Sonoma)
Node: v20.10.0
NPM: v10.2.3

## Errors

- TypeScript cannot find `freeplay/thin`

- Starting up node app fires off this error:

```
Error getting library version: TypeError: Cannot read properties of undefined (reading 'join')
    at getLibraryVersion (/Users/jmedina2/workspace/demo-space/freeplay-demo/node_modules/freeplay/dist/cjs/utils.js:21:52)
    at Object.<anonymous> (/Users/jmedina2/workspace/demo-space/freeplay-demo/node_modules/freeplay/dist/cjs/utils.js:35:34)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Module.require (node:internal/modules/cjs/loader:1235:19)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (/Users/jmedina2/workspace/demo-space/freeplay-demo/node_modules/freeplay/dist/cjs/support.js:53:20)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
```
