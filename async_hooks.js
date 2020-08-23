const async_hooks = require('async_hooks');
//Stability: 1 - Experimental

const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
  	console.log('init');
  	console.log(asyncId);
  },
  destroy(asyncId) { }
}).enable();