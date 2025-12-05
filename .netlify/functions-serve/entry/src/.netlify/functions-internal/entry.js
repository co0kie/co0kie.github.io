var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/web-streams-polyfill/dist/ponyfill.es2018.js
var require_ponyfill_es2018 = __commonJS({
  "node_modules/web-streams-polyfill/dist/ponyfill.es2018.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.WebStreamsPolyfill = {}));
    })(exports, function(exports2) {
      "use strict";
      const SymbolPolyfill2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol : (description) => `Symbol(${description})`;
      function noop3() {
        return void 0;
      }
      function getGlobals() {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else if (typeof global !== "undefined") {
          return global;
        }
        return void 0;
      }
      const globals = getGlobals();
      function typeIsObject2(x3) {
        return typeof x3 === "object" && x3 !== null || typeof x3 === "function";
      }
      const rethrowAssertionErrorRejection2 = noop3;
      const originalPromise2 = Promise;
      const originalPromiseThen2 = Promise.prototype.then;
      const originalPromiseResolve2 = Promise.resolve.bind(originalPromise2);
      const originalPromiseReject2 = Promise.reject.bind(originalPromise2);
      function newPromise2(executor) {
        return new originalPromise2(executor);
      }
      function promiseResolvedWith2(value) {
        return originalPromiseResolve2(value);
      }
      function promiseRejectedWith2(reason) {
        return originalPromiseReject2(reason);
      }
      function PerformPromiseThen2(promise, onFulfilled, onRejected) {
        return originalPromiseThen2.call(promise, onFulfilled, onRejected);
      }
      function uponPromise2(promise, onFulfilled, onRejected) {
        PerformPromiseThen2(PerformPromiseThen2(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection2);
      }
      function uponFulfillment2(promise, onFulfilled) {
        uponPromise2(promise, onFulfilled);
      }
      function uponRejection2(promise, onRejected) {
        uponPromise2(promise, void 0, onRejected);
      }
      function transformPromiseWith2(promise, fulfillmentHandler, rejectionHandler) {
        return PerformPromiseThen2(promise, fulfillmentHandler, rejectionHandler);
      }
      function setPromiseIsHandledToTrue2(promise) {
        PerformPromiseThen2(promise, void 0, rethrowAssertionErrorRejection2);
      }
      const queueMicrotask2 = (() => {
        const globalQueueMicrotask = globals && globals.queueMicrotask;
        if (typeof globalQueueMicrotask === "function") {
          return globalQueueMicrotask;
        }
        const resolvedPromise = promiseResolvedWith2(void 0);
        return (fn) => PerformPromiseThen2(resolvedPromise, fn);
      })();
      function reflectCall2(F3, V, args) {
        if (typeof F3 !== "function") {
          throw new TypeError("Argument is not a function");
        }
        return Function.prototype.apply.call(F3, V, args);
      }
      function promiseCall2(F3, V, args) {
        try {
          return promiseResolvedWith2(reflectCall2(F3, V, args));
        } catch (value) {
          return promiseRejectedWith2(value);
        }
      }
      const QUEUE_MAX_ARRAY_SIZE2 = 16384;
      class SimpleQueue2 {
        constructor() {
          this._cursor = 0;
          this._size = 0;
          this._front = {
            _elements: [],
            _next: void 0
          };
          this._back = this._front;
          this._cursor = 0;
          this._size = 0;
        }
        get length() {
          return this._size;
        }
        push(element) {
          const oldBack = this._back;
          let newBack = oldBack;
          if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE2 - 1) {
            newBack = {
              _elements: [],
              _next: void 0
            };
          }
          oldBack._elements.push(element);
          if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
          }
          ++this._size;
        }
        shift() {
          const oldFront = this._front;
          let newFront = oldFront;
          const oldCursor = this._cursor;
          let newCursor = oldCursor + 1;
          const elements = oldFront._elements;
          const element = elements[oldCursor];
          if (newCursor === QUEUE_MAX_ARRAY_SIZE2) {
            newFront = oldFront._next;
            newCursor = 0;
          }
          --this._size;
          this._cursor = newCursor;
          if (oldFront !== newFront) {
            this._front = newFront;
          }
          elements[oldCursor] = void 0;
          return element;
        }
        forEach(callback) {
          let i3 = this._cursor;
          let node = this._front;
          let elements = node._elements;
          while (i3 !== elements.length || node._next !== void 0) {
            if (i3 === elements.length) {
              node = node._next;
              elements = node._elements;
              i3 = 0;
              if (elements.length === 0) {
                break;
              }
            }
            callback(elements[i3]);
            ++i3;
          }
        }
        peek() {
          const front = this._front;
          const cursor = this._cursor;
          return front._elements[cursor];
        }
      }
      function ReadableStreamReaderGenericInitialize2(reader, stream) {
        reader._ownerReadableStream = stream;
        stream._reader = reader;
        if (stream._state === "readable") {
          defaultReaderClosedPromiseInitialize2(reader);
        } else if (stream._state === "closed") {
          defaultReaderClosedPromiseInitializeAsResolved2(reader);
        } else {
          defaultReaderClosedPromiseInitializeAsRejected2(reader, stream._storedError);
        }
      }
      function ReadableStreamReaderGenericCancel2(reader, reason) {
        const stream = reader._ownerReadableStream;
        return ReadableStreamCancel2(stream, reason);
      }
      function ReadableStreamReaderGenericRelease2(reader) {
        if (reader._ownerReadableStream._state === "readable") {
          defaultReaderClosedPromiseReject2(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        } else {
          defaultReaderClosedPromiseResetToRejected2(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
        }
        reader._ownerReadableStream._reader = void 0;
        reader._ownerReadableStream = void 0;
      }
      function readerLockException2(name) {
        return new TypeError("Cannot " + name + " a stream using a released reader");
      }
      function defaultReaderClosedPromiseInitialize2(reader) {
        reader._closedPromise = newPromise2((resolve, reject) => {
          reader._closedPromise_resolve = resolve;
          reader._closedPromise_reject = reject;
        });
      }
      function defaultReaderClosedPromiseInitializeAsRejected2(reader, reason) {
        defaultReaderClosedPromiseInitialize2(reader);
        defaultReaderClosedPromiseReject2(reader, reason);
      }
      function defaultReaderClosedPromiseInitializeAsResolved2(reader) {
        defaultReaderClosedPromiseInitialize2(reader);
        defaultReaderClosedPromiseResolve2(reader);
      }
      function defaultReaderClosedPromiseReject2(reader, reason) {
        if (reader._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue2(reader._closedPromise);
        reader._closedPromise_reject(reason);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      function defaultReaderClosedPromiseResetToRejected2(reader, reason) {
        defaultReaderClosedPromiseInitializeAsRejected2(reader, reason);
      }
      function defaultReaderClosedPromiseResolve2(reader) {
        if (reader._closedPromise_resolve === void 0) {
          return;
        }
        reader._closedPromise_resolve(void 0);
        reader._closedPromise_resolve = void 0;
        reader._closedPromise_reject = void 0;
      }
      const AbortSteps2 = SymbolPolyfill2("[[AbortSteps]]");
      const ErrorSteps2 = SymbolPolyfill2("[[ErrorSteps]]");
      const CancelSteps2 = SymbolPolyfill2("[[CancelSteps]]");
      const PullSteps2 = SymbolPolyfill2("[[PullSteps]]");
      const NumberIsFinite2 = Number.isFinite || function(x3) {
        return typeof x3 === "number" && isFinite(x3);
      };
      const MathTrunc2 = Math.trunc || function(v2) {
        return v2 < 0 ? Math.ceil(v2) : Math.floor(v2);
      };
      function isDictionary2(x3) {
        return typeof x3 === "object" || typeof x3 === "function";
      }
      function assertDictionary2(obj, context) {
        if (obj !== void 0 && !isDictionary2(obj)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertFunction2(x3, context) {
        if (typeof x3 !== "function") {
          throw new TypeError(`${context} is not a function.`);
        }
      }
      function isObject2(x3) {
        return typeof x3 === "object" && x3 !== null || typeof x3 === "function";
      }
      function assertObject2(x3, context) {
        if (!isObject2(x3)) {
          throw new TypeError(`${context} is not an object.`);
        }
      }
      function assertRequiredArgument2(x3, position, context) {
        if (x3 === void 0) {
          throw new TypeError(`Parameter ${position} is required in '${context}'.`);
        }
      }
      function assertRequiredField2(x3, field, context) {
        if (x3 === void 0) {
          throw new TypeError(`${field} is required in '${context}'.`);
        }
      }
      function convertUnrestrictedDouble2(value) {
        return Number(value);
      }
      function censorNegativeZero2(x3) {
        return x3 === 0 ? 0 : x3;
      }
      function integerPart2(x3) {
        return censorNegativeZero2(MathTrunc2(x3));
      }
      function convertUnsignedLongLongWithEnforceRange2(value, context) {
        const lowerBound = 0;
        const upperBound = Number.MAX_SAFE_INTEGER;
        let x3 = Number(value);
        x3 = censorNegativeZero2(x3);
        if (!NumberIsFinite2(x3)) {
          throw new TypeError(`${context} is not a finite number`);
        }
        x3 = integerPart2(x3);
        if (x3 < lowerBound || x3 > upperBound) {
          throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
        }
        if (!NumberIsFinite2(x3) || x3 === 0) {
          return 0;
        }
        return x3;
      }
      function assertReadableStream2(x3, context) {
        if (!IsReadableStream2(x3)) {
          throw new TypeError(`${context} is not a ReadableStream.`);
        }
      }
      function AcquireReadableStreamDefaultReader2(stream) {
        return new ReadableStreamDefaultReader2(stream);
      }
      function ReadableStreamAddReadRequest2(stream, readRequest) {
        stream._reader._readRequests.push(readRequest);
      }
      function ReadableStreamFulfillReadRequest2(stream, chunk, done) {
        const reader = stream._reader;
        const readRequest = reader._readRequests.shift();
        if (done) {
          readRequest._closeSteps();
        } else {
          readRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadRequests2(stream) {
        return stream._reader._readRequests.length;
      }
      function ReadableStreamHasDefaultReader2(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamDefaultReader2(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamDefaultReader2 {
        constructor(stream) {
          assertRequiredArgument2(stream, 1, "ReadableStreamDefaultReader");
          assertReadableStream2(stream, "First parameter");
          if (IsReadableStreamLocked2(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          ReadableStreamReaderGenericInitialize2(this, stream);
          this._readRequests = new SimpleQueue2();
        }
        get closed() {
          if (!IsReadableStreamDefaultReader2(this)) {
            return promiseRejectedWith2(defaultReaderBrandCheckException2("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamDefaultReader2(this)) {
            return promiseRejectedWith2(defaultReaderBrandCheckException2("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith2(readerLockException2("cancel"));
          }
          return ReadableStreamReaderGenericCancel2(this, reason);
        }
        read() {
          if (!IsReadableStreamDefaultReader2(this)) {
            return promiseRejectedWith2(defaultReaderBrandCheckException2("read"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith2(readerLockException2("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise2((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: void 0, done: true }),
            _errorSteps: (e3) => rejectPromise(e3)
          };
          ReadableStreamDefaultReaderRead2(this, readRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamDefaultReader2(this)) {
            throw defaultReaderBrandCheckException2("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readRequests.length > 0) {
            throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
          }
          ReadableStreamReaderGenericRelease2(this);
        }
      }
      Object.defineProperties(ReadableStreamDefaultReader2.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultReader2.prototype, SymbolPolyfill2.toStringTag, {
          value: "ReadableStreamDefaultReader",
          configurable: true
        });
      }
      function IsReadableStreamDefaultReader2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_readRequests")) {
          return false;
        }
        return x3 instanceof ReadableStreamDefaultReader2;
      }
      function ReadableStreamDefaultReaderRead2(reader, readRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "closed") {
          readRequest._closeSteps();
        } else if (stream._state === "errored") {
          readRequest._errorSteps(stream._storedError);
        } else {
          stream._readableStreamController[PullSteps2](readRequest);
        }
      }
      function defaultReaderBrandCheckException2(name) {
        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
      }
      const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
      }).prototype);
      class ReadableStreamAsyncIteratorImpl2 {
        constructor(reader, preventCancel) {
          this._ongoingPromise = void 0;
          this._isFinished = false;
          this._reader = reader;
          this._preventCancel = preventCancel;
        }
        next() {
          const nextSteps = () => this._nextSteps();
          this._ongoingPromise = this._ongoingPromise ? transformPromiseWith2(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
          return this._ongoingPromise;
        }
        return(value) {
          const returnSteps = () => this._returnSteps(value);
          return this._ongoingPromise ? transformPromiseWith2(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
        }
        _nextSteps() {
          if (this._isFinished) {
            return Promise.resolve({ value: void 0, done: true });
          }
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith2(readerLockException2("iterate"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise2((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readRequest = {
            _chunkSteps: (chunk) => {
              this._ongoingPromise = void 0;
              queueMicrotask2(() => resolvePromise({ value: chunk, done: false }));
            },
            _closeSteps: () => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease2(reader);
              resolvePromise({ value: void 0, done: true });
            },
            _errorSteps: (reason) => {
              this._ongoingPromise = void 0;
              this._isFinished = true;
              ReadableStreamReaderGenericRelease2(reader);
              rejectPromise(reason);
            }
          };
          ReadableStreamDefaultReaderRead2(reader, readRequest);
          return promise;
        }
        _returnSteps(value) {
          if (this._isFinished) {
            return Promise.resolve({ value, done: true });
          }
          this._isFinished = true;
          const reader = this._reader;
          if (reader._ownerReadableStream === void 0) {
            return promiseRejectedWith2(readerLockException2("finish iterating"));
          }
          if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel2(reader, value);
            ReadableStreamReaderGenericRelease2(reader);
            return transformPromiseWith2(result, () => ({ value, done: true }));
          }
          ReadableStreamReaderGenericRelease2(reader);
          return promiseResolvedWith2({ value, done: true });
        }
      }
      const ReadableStreamAsyncIteratorPrototype2 = {
        next() {
          if (!IsReadableStreamAsyncIterator2(this)) {
            return promiseRejectedWith2(streamAsyncIteratorBrandCheckException2("next"));
          }
          return this._asyncIteratorImpl.next();
        },
        return(value) {
          if (!IsReadableStreamAsyncIterator2(this)) {
            return promiseRejectedWith2(streamAsyncIteratorBrandCheckException2("return"));
          }
          return this._asyncIteratorImpl.return(value);
        }
      };
      if (AsyncIteratorPrototype !== void 0) {
        Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype2, AsyncIteratorPrototype);
      }
      function AcquireReadableStreamAsyncIterator2(stream, preventCancel) {
        const reader = AcquireReadableStreamDefaultReader2(stream);
        const impl = new ReadableStreamAsyncIteratorImpl2(reader, preventCancel);
        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype2);
        iterator._asyncIteratorImpl = impl;
        return iterator;
      }
      function IsReadableStreamAsyncIterator2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_asyncIteratorImpl")) {
          return false;
        }
        try {
          return x3._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl2;
        } catch (_a2) {
          return false;
        }
      }
      function streamAsyncIteratorBrandCheckException2(name) {
        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
      }
      const NumberIsNaN2 = Number.isNaN || function(x3) {
        return x3 !== x3;
      };
      function CreateArrayFromList2(elements) {
        return elements.slice();
      }
      function CopyDataBlockBytes2(dest, destOffset, src, srcOffset, n2) {
        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n2), destOffset);
      }
      function TransferArrayBuffer2(O2) {
        return O2;
      }
      function IsDetachedBuffer2(O2) {
        return false;
      }
      function ArrayBufferSlice2(buffer, begin, end) {
        if (buffer.slice) {
          return buffer.slice(begin, end);
        }
        const length = end - begin;
        const slice = new ArrayBuffer(length);
        CopyDataBlockBytes2(slice, 0, buffer, begin, length);
        return slice;
      }
      function IsNonNegativeNumber2(v2) {
        if (typeof v2 !== "number") {
          return false;
        }
        if (NumberIsNaN2(v2)) {
          return false;
        }
        if (v2 < 0) {
          return false;
        }
        return true;
      }
      function CloneAsUint8Array2(O2) {
        const buffer = ArrayBufferSlice2(O2.buffer, O2.byteOffset, O2.byteOffset + O2.byteLength);
        return new Uint8Array(buffer);
      }
      function DequeueValue2(container) {
        const pair = container._queue.shift();
        container._queueTotalSize -= pair.size;
        if (container._queueTotalSize < 0) {
          container._queueTotalSize = 0;
        }
        return pair.value;
      }
      function EnqueueValueWithSize2(container, value, size) {
        if (!IsNonNegativeNumber2(size) || size === Infinity) {
          throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
        }
        container._queue.push({ value, size });
        container._queueTotalSize += size;
      }
      function PeekQueueValue2(container) {
        const pair = container._queue.peek();
        return pair.value;
      }
      function ResetQueue2(container) {
        container._queue = new SimpleQueue2();
        container._queueTotalSize = 0;
      }
      class ReadableStreamBYOBRequest2 {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get view() {
          if (!IsReadableStreamBYOBRequest2(this)) {
            throw byobRequestBrandCheckException2("view");
          }
          return this._view;
        }
        respond(bytesWritten) {
          if (!IsReadableStreamBYOBRequest2(this)) {
            throw byobRequestBrandCheckException2("respond");
          }
          assertRequiredArgument2(bytesWritten, 1, "respond");
          bytesWritten = convertUnsignedLongLongWithEnforceRange2(bytesWritten, "First parameter");
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer2(this._view.buffer))
            ;
          ReadableByteStreamControllerRespond2(this._associatedReadableByteStreamController, bytesWritten);
        }
        respondWithNewView(view) {
          if (!IsReadableStreamBYOBRequest2(this)) {
            throw byobRequestBrandCheckException2("respondWithNewView");
          }
          assertRequiredArgument2(view, 1, "respondWithNewView");
          if (!ArrayBuffer.isView(view)) {
            throw new TypeError("You can only respond with array buffer views");
          }
          if (this._associatedReadableByteStreamController === void 0) {
            throw new TypeError("This BYOB request has been invalidated");
          }
          if (IsDetachedBuffer2(view.buffer))
            ;
          ReadableByteStreamControllerRespondWithNewView2(this._associatedReadableByteStreamController, view);
        }
      }
      Object.defineProperties(ReadableStreamBYOBRequest2.prototype, {
        respond: { enumerable: true },
        respondWithNewView: { enumerable: true },
        view: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBRequest2.prototype, SymbolPolyfill2.toStringTag, {
          value: "ReadableStreamBYOBRequest",
          configurable: true
        });
      }
      class ReadableByteStreamController2 {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get byobRequest() {
          if (!IsReadableByteStreamController2(this)) {
            throw byteStreamControllerBrandCheckException2("byobRequest");
          }
          return ReadableByteStreamControllerGetBYOBRequest2(this);
        }
        get desiredSize() {
          if (!IsReadableByteStreamController2(this)) {
            throw byteStreamControllerBrandCheckException2("desiredSize");
          }
          return ReadableByteStreamControllerGetDesiredSize2(this);
        }
        close() {
          if (!IsReadableByteStreamController2(this)) {
            throw byteStreamControllerBrandCheckException2("close");
          }
          if (this._closeRequested) {
            throw new TypeError("The stream has already been closed; do not close it again!");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
          }
          ReadableByteStreamControllerClose2(this);
        }
        enqueue(chunk) {
          if (!IsReadableByteStreamController2(this)) {
            throw byteStreamControllerBrandCheckException2("enqueue");
          }
          assertRequiredArgument2(chunk, 1, "enqueue");
          if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError("chunk must be an array buffer view");
          }
          if (chunk.byteLength === 0) {
            throw new TypeError("chunk must have non-zero byteLength");
          }
          if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
          }
          if (this._closeRequested) {
            throw new TypeError("stream is closed or draining");
          }
          const state = this._controlledReadableByteStream._state;
          if (state !== "readable") {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
          }
          ReadableByteStreamControllerEnqueue2(this, chunk);
        }
        error(e3 = void 0) {
          if (!IsReadableByteStreamController2(this)) {
            throw byteStreamControllerBrandCheckException2("error");
          }
          ReadableByteStreamControllerError2(this, e3);
        }
        [CancelSteps2](reason) {
          ReadableByteStreamControllerClearPendingPullIntos2(this);
          ResetQueue2(this);
          const result = this._cancelAlgorithm(reason);
          ReadableByteStreamControllerClearAlgorithms2(this);
          return result;
        }
        [PullSteps2](readRequest) {
          const stream = this._controlledReadableByteStream;
          if (this._queueTotalSize > 0) {
            const entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain2(this);
            const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
            readRequest._chunkSteps(view);
            return;
          }
          const autoAllocateChunkSize = this._autoAllocateChunkSize;
          if (autoAllocateChunkSize !== void 0) {
            let buffer;
            try {
              buffer = new ArrayBuffer(autoAllocateChunkSize);
            } catch (bufferE) {
              readRequest._errorSteps(bufferE);
              return;
            }
            const pullIntoDescriptor = {
              buffer,
              bufferByteLength: autoAllocateChunkSize,
              byteOffset: 0,
              byteLength: autoAllocateChunkSize,
              bytesFilled: 0,
              elementSize: 1,
              viewConstructor: Uint8Array,
              readerType: "default"
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
          }
          ReadableStreamAddReadRequest2(stream, readRequest);
          ReadableByteStreamControllerCallPullIfNeeded2(this);
        }
      }
      Object.defineProperties(ReadableByteStreamController2.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        byobRequest: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ReadableByteStreamController2.prototype, SymbolPolyfill2.toStringTag, {
          value: "ReadableByteStreamController",
          configurable: true
        });
      }
      function IsReadableByteStreamController2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_controlledReadableByteStream")) {
          return false;
        }
        return x3 instanceof ReadableByteStreamController2;
      }
      function IsReadableStreamBYOBRequest2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_associatedReadableByteStreamController")) {
          return false;
        }
        return x3 instanceof ReadableStreamBYOBRequest2;
      }
      function ReadableByteStreamControllerCallPullIfNeeded2(controller) {
        const shouldPull = ReadableByteStreamControllerShouldCallPull2(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise2(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded2(controller);
          }
        }, (e3) => {
          ReadableByteStreamControllerError2(controller, e3);
        });
      }
      function ReadableByteStreamControllerClearPendingPullIntos2(controller) {
        ReadableByteStreamControllerInvalidateBYOBRequest2(controller);
        controller._pendingPullIntos = new SimpleQueue2();
      }
      function ReadableByteStreamControllerCommitPullIntoDescriptor2(stream, pullIntoDescriptor) {
        let done = false;
        if (stream._state === "closed") {
          done = true;
        }
        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor2(pullIntoDescriptor);
        if (pullIntoDescriptor.readerType === "default") {
          ReadableStreamFulfillReadRequest2(stream, filledView, done);
        } else {
          ReadableStreamFulfillReadIntoRequest2(stream, filledView, done);
        }
      }
      function ReadableByteStreamControllerConvertPullIntoDescriptor2(pullIntoDescriptor) {
        const bytesFilled = pullIntoDescriptor.bytesFilled;
        const elementSize = pullIntoDescriptor.elementSize;
        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
      }
      function ReadableByteStreamControllerEnqueueChunkToQueue2(controller, buffer, byteOffset, byteLength) {
        controller._queue.push({ buffer, byteOffset, byteLength });
        controller._queueTotalSize += byteLength;
      }
      function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue2(controller, pullIntoDescriptor) {
        const elementSize = pullIntoDescriptor.elementSize;
        const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
        const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
        let totalBytesToCopyRemaining = maxBytesToCopy;
        let ready = false;
        if (maxAlignedBytes > currentAlignedBytes) {
          totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
          ready = true;
        }
        const queue = controller._queue;
        while (totalBytesToCopyRemaining > 0) {
          const headOfQueue = queue.peek();
          const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
          const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          CopyDataBlockBytes2(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
          if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
          } else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
          }
          controller._queueTotalSize -= bytesToCopy;
          ReadableByteStreamControllerFillHeadPullIntoDescriptor2(controller, bytesToCopy, pullIntoDescriptor);
          totalBytesToCopyRemaining -= bytesToCopy;
        }
        return ready;
      }
      function ReadableByteStreamControllerFillHeadPullIntoDescriptor2(controller, size, pullIntoDescriptor) {
        pullIntoDescriptor.bytesFilled += size;
      }
      function ReadableByteStreamControllerHandleQueueDrain2(controller) {
        if (controller._queueTotalSize === 0 && controller._closeRequested) {
          ReadableByteStreamControllerClearAlgorithms2(controller);
          ReadableStreamClose2(controller._controlledReadableByteStream);
        } else {
          ReadableByteStreamControllerCallPullIfNeeded2(controller);
        }
      }
      function ReadableByteStreamControllerInvalidateBYOBRequest2(controller) {
        if (controller._byobRequest === null) {
          return;
        }
        controller._byobRequest._associatedReadableByteStreamController = void 0;
        controller._byobRequest._view = null;
        controller._byobRequest = null;
      }
      function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue2(controller) {
        while (controller._pendingPullIntos.length > 0) {
          if (controller._queueTotalSize === 0) {
            return;
          }
          const pullIntoDescriptor = controller._pendingPullIntos.peek();
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue2(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto2(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor2(controller._controlledReadableByteStream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerPullInto2(controller, view, readIntoRequest) {
        const stream = controller._controlledReadableByteStream;
        let elementSize = 1;
        if (view.constructor !== DataView) {
          elementSize = view.constructor.BYTES_PER_ELEMENT;
        }
        const ctor = view.constructor;
        const buffer = TransferArrayBuffer2(view.buffer);
        const pullIntoDescriptor = {
          buffer,
          bufferByteLength: buffer.byteLength,
          byteOffset: view.byteOffset,
          byteLength: view.byteLength,
          bytesFilled: 0,
          elementSize,
          viewConstructor: ctor,
          readerType: "byob"
        };
        if (controller._pendingPullIntos.length > 0) {
          controller._pendingPullIntos.push(pullIntoDescriptor);
          ReadableStreamAddReadIntoRequest2(stream, readIntoRequest);
          return;
        }
        if (stream._state === "closed") {
          const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
          readIntoRequest._closeSteps(emptyView);
          return;
        }
        if (controller._queueTotalSize > 0) {
          if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue2(controller, pullIntoDescriptor)) {
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor2(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain2(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
          }
          if (controller._closeRequested) {
            const e3 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError2(controller, e3);
            readIntoRequest._errorSteps(e3);
            return;
          }
        }
        controller._pendingPullIntos.push(pullIntoDescriptor);
        ReadableStreamAddReadIntoRequest2(stream, readIntoRequest);
        ReadableByteStreamControllerCallPullIfNeeded2(controller);
      }
      function ReadableByteStreamControllerRespondInClosedState2(controller, firstDescriptor) {
        const stream = controller._controlledReadableByteStream;
        if (ReadableStreamHasBYOBReader2(stream)) {
          while (ReadableStreamGetNumReadIntoRequests2(stream) > 0) {
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto2(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor2(stream, pullIntoDescriptor);
          }
        }
      }
      function ReadableByteStreamControllerRespondInReadableState2(controller, bytesWritten, pullIntoDescriptor) {
        ReadableByteStreamControllerFillHeadPullIntoDescriptor2(controller, bytesWritten, pullIntoDescriptor);
        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
          return;
        }
        ReadableByteStreamControllerShiftPendingPullInto2(controller);
        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
        if (remainderSize > 0) {
          const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
          const remainder = ArrayBufferSlice2(pullIntoDescriptor.buffer, end - remainderSize, end);
          ReadableByteStreamControllerEnqueueChunkToQueue2(controller, remainder, 0, remainder.byteLength);
        }
        pullIntoDescriptor.bytesFilled -= remainderSize;
        ReadableByteStreamControllerCommitPullIntoDescriptor2(controller._controlledReadableByteStream, pullIntoDescriptor);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue2(controller);
      }
      function ReadableByteStreamControllerRespondInternal2(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        ReadableByteStreamControllerInvalidateBYOBRequest2(controller);
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          ReadableByteStreamControllerRespondInClosedState2(controller);
        } else {
          ReadableByteStreamControllerRespondInReadableState2(controller, bytesWritten, firstDescriptor);
        }
        ReadableByteStreamControllerCallPullIfNeeded2(controller);
      }
      function ReadableByteStreamControllerShiftPendingPullInto2(controller) {
        const descriptor = controller._pendingPullIntos.shift();
        return descriptor;
      }
      function ReadableByteStreamControllerShouldCallPull2(controller) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return false;
        }
        if (controller._closeRequested) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (ReadableStreamHasDefaultReader2(stream) && ReadableStreamGetNumReadRequests2(stream) > 0) {
          return true;
        }
        if (ReadableStreamHasBYOBReader2(stream) && ReadableStreamGetNumReadIntoRequests2(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableByteStreamControllerGetDesiredSize2(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableByteStreamControllerClearAlgorithms2(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
      }
      function ReadableByteStreamControllerClose2(controller) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        if (controller._queueTotalSize > 0) {
          controller._closeRequested = true;
          return;
        }
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (firstPendingPullInto.bytesFilled > 0) {
            const e3 = new TypeError("Insufficient bytes to fill elements in the given buffer");
            ReadableByteStreamControllerError2(controller, e3);
            throw e3;
          }
        }
        ReadableByteStreamControllerClearAlgorithms2(controller);
        ReadableStreamClose2(stream);
      }
      function ReadableByteStreamControllerEnqueue2(controller, chunk) {
        const stream = controller._controlledReadableByteStream;
        if (controller._closeRequested || stream._state !== "readable") {
          return;
        }
        const buffer = chunk.buffer;
        const byteOffset = chunk.byteOffset;
        const byteLength = chunk.byteLength;
        const transferredBuffer = TransferArrayBuffer2(buffer);
        if (controller._pendingPullIntos.length > 0) {
          const firstPendingPullInto = controller._pendingPullIntos.peek();
          if (IsDetachedBuffer2(firstPendingPullInto.buffer))
            ;
          firstPendingPullInto.buffer = TransferArrayBuffer2(firstPendingPullInto.buffer);
        }
        ReadableByteStreamControllerInvalidateBYOBRequest2(controller);
        if (ReadableStreamHasDefaultReader2(stream)) {
          if (ReadableStreamGetNumReadRequests2(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue2(controller, transferredBuffer, byteOffset, byteLength);
          } else {
            if (controller._pendingPullIntos.length > 0) {
              ReadableByteStreamControllerShiftPendingPullInto2(controller);
            }
            const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest2(stream, transferredView, false);
          }
        } else if (ReadableStreamHasBYOBReader2(stream)) {
          ReadableByteStreamControllerEnqueueChunkToQueue2(controller, transferredBuffer, byteOffset, byteLength);
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue2(controller);
        } else {
          ReadableByteStreamControllerEnqueueChunkToQueue2(controller, transferredBuffer, byteOffset, byteLength);
        }
        ReadableByteStreamControllerCallPullIfNeeded2(controller);
      }
      function ReadableByteStreamControllerError2(controller, e3) {
        const stream = controller._controlledReadableByteStream;
        if (stream._state !== "readable") {
          return;
        }
        ReadableByteStreamControllerClearPendingPullIntos2(controller);
        ResetQueue2(controller);
        ReadableByteStreamControllerClearAlgorithms2(controller);
        ReadableStreamError2(stream, e3);
      }
      function ReadableByteStreamControllerGetBYOBRequest2(controller) {
        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
          const firstDescriptor = controller._pendingPullIntos.peek();
          const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          const byobRequest = Object.create(ReadableStreamBYOBRequest2.prototype);
          SetUpReadableStreamBYOBRequest2(byobRequest, controller, view);
          controller._byobRequest = byobRequest;
        }
        return controller._byobRequest;
      }
      function ReadableByteStreamControllerGetDesiredSize2(controller) {
        const state = controller._controlledReadableByteStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableByteStreamControllerRespond2(controller, bytesWritten) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (bytesWritten !== 0) {
            throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
          }
        } else {
          if (bytesWritten === 0) {
            throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
          }
          if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
            throw new RangeError("bytesWritten out of range");
          }
        }
        firstDescriptor.buffer = TransferArrayBuffer2(firstDescriptor.buffer);
        ReadableByteStreamControllerRespondInternal2(controller, bytesWritten);
      }
      function ReadableByteStreamControllerRespondWithNewView2(controller, view) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const state = controller._controlledReadableByteStream._state;
        if (state === "closed") {
          if (view.byteLength !== 0) {
            throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
          }
        } else {
          if (view.byteLength === 0) {
            throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
          }
        }
        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
          throw new RangeError("The region specified by view does not match byobRequest");
        }
        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
          throw new RangeError("The buffer of view has different capacity than byobRequest");
        }
        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
          throw new RangeError("The region specified by view is larger than byobRequest");
        }
        const viewByteLength = view.byteLength;
        firstDescriptor.buffer = TransferArrayBuffer2(view.buffer);
        ReadableByteStreamControllerRespondInternal2(controller, viewByteLength);
      }
      function SetUpReadableByteStreamController2(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
        controller._controlledReadableByteStream = stream;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._byobRequest = null;
        controller._queue = controller._queueTotalSize = void 0;
        ResetQueue2(controller);
        controller._closeRequested = false;
        controller._started = false;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        controller._autoAllocateChunkSize = autoAllocateChunkSize;
        controller._pendingPullIntos = new SimpleQueue2();
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise2(promiseResolvedWith2(startResult), () => {
          controller._started = true;
          ReadableByteStreamControllerCallPullIfNeeded2(controller);
        }, (r3) => {
          ReadableByteStreamControllerError2(controller, r3);
        });
      }
      function SetUpReadableByteStreamControllerFromUnderlyingSource2(stream, underlyingByteSource, highWaterMark) {
        const controller = Object.create(ReadableByteStreamController2.prototype);
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith2(void 0);
        let cancelAlgorithm = () => promiseResolvedWith2(void 0);
        if (underlyingByteSource.start !== void 0) {
          startAlgorithm = () => underlyingByteSource.start(controller);
        }
        if (underlyingByteSource.pull !== void 0) {
          pullAlgorithm = () => underlyingByteSource.pull(controller);
        }
        if (underlyingByteSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
        }
        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
        if (autoAllocateChunkSize === 0) {
          throw new TypeError("autoAllocateChunkSize must be greater than 0");
        }
        SetUpReadableByteStreamController2(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
      }
      function SetUpReadableStreamBYOBRequest2(request, controller, view) {
        request._associatedReadableByteStreamController = controller;
        request._view = view;
      }
      function byobRequestBrandCheckException2(name) {
        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
      }
      function byteStreamControllerBrandCheckException2(name) {
        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
      }
      function AcquireReadableStreamBYOBReader2(stream) {
        return new ReadableStreamBYOBReader2(stream);
      }
      function ReadableStreamAddReadIntoRequest2(stream, readIntoRequest) {
        stream._reader._readIntoRequests.push(readIntoRequest);
      }
      function ReadableStreamFulfillReadIntoRequest2(stream, chunk, done) {
        const reader = stream._reader;
        const readIntoRequest = reader._readIntoRequests.shift();
        if (done) {
          readIntoRequest._closeSteps(chunk);
        } else {
          readIntoRequest._chunkSteps(chunk);
        }
      }
      function ReadableStreamGetNumReadIntoRequests2(stream) {
        return stream._reader._readIntoRequests.length;
      }
      function ReadableStreamHasBYOBReader2(stream) {
        const reader = stream._reader;
        if (reader === void 0) {
          return false;
        }
        if (!IsReadableStreamBYOBReader2(reader)) {
          return false;
        }
        return true;
      }
      class ReadableStreamBYOBReader2 {
        constructor(stream) {
          assertRequiredArgument2(stream, 1, "ReadableStreamBYOBReader");
          assertReadableStream2(stream, "First parameter");
          if (IsReadableStreamLocked2(stream)) {
            throw new TypeError("This stream has already been locked for exclusive reading by another reader");
          }
          if (!IsReadableByteStreamController2(stream._readableStreamController)) {
            throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
          }
          ReadableStreamReaderGenericInitialize2(this, stream);
          this._readIntoRequests = new SimpleQueue2();
        }
        get closed() {
          if (!IsReadableStreamBYOBReader2(this)) {
            return promiseRejectedWith2(byobReaderBrandCheckException2("closed"));
          }
          return this._closedPromise;
        }
        cancel(reason = void 0) {
          if (!IsReadableStreamBYOBReader2(this)) {
            return promiseRejectedWith2(byobReaderBrandCheckException2("cancel"));
          }
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith2(readerLockException2("cancel"));
          }
          return ReadableStreamReaderGenericCancel2(this, reason);
        }
        read(view) {
          if (!IsReadableStreamBYOBReader2(this)) {
            return promiseRejectedWith2(byobReaderBrandCheckException2("read"));
          }
          if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith2(new TypeError("view must be an array buffer view"));
          }
          if (view.byteLength === 0) {
            return promiseRejectedWith2(new TypeError("view must have non-zero byteLength"));
          }
          if (view.buffer.byteLength === 0) {
            return promiseRejectedWith2(new TypeError(`view's buffer must have non-zero byteLength`));
          }
          if (IsDetachedBuffer2(view.buffer))
            ;
          if (this._ownerReadableStream === void 0) {
            return promiseRejectedWith2(readerLockException2("read from"));
          }
          let resolvePromise;
          let rejectPromise;
          const promise = newPromise2((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
          });
          const readIntoRequest = {
            _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
            _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
            _errorSteps: (e3) => rejectPromise(e3)
          };
          ReadableStreamBYOBReaderRead2(this, view, readIntoRequest);
          return promise;
        }
        releaseLock() {
          if (!IsReadableStreamBYOBReader2(this)) {
            throw byobReaderBrandCheckException2("releaseLock");
          }
          if (this._ownerReadableStream === void 0) {
            return;
          }
          if (this._readIntoRequests.length > 0) {
            throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
          }
          ReadableStreamReaderGenericRelease2(this);
        }
      }
      Object.defineProperties(ReadableStreamBYOBReader2.prototype, {
        cancel: { enumerable: true },
        read: { enumerable: true },
        releaseLock: { enumerable: true },
        closed: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamBYOBReader2.prototype, SymbolPolyfill2.toStringTag, {
          value: "ReadableStreamBYOBReader",
          configurable: true
        });
      }
      function IsReadableStreamBYOBReader2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_readIntoRequests")) {
          return false;
        }
        return x3 instanceof ReadableStreamBYOBReader2;
      }
      function ReadableStreamBYOBReaderRead2(reader, view, readIntoRequest) {
        const stream = reader._ownerReadableStream;
        stream._disturbed = true;
        if (stream._state === "errored") {
          readIntoRequest._errorSteps(stream._storedError);
        } else {
          ReadableByteStreamControllerPullInto2(stream._readableStreamController, view, readIntoRequest);
        }
      }
      function byobReaderBrandCheckException2(name) {
        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
      }
      function ExtractHighWaterMark2(strategy, defaultHWM) {
        const { highWaterMark } = strategy;
        if (highWaterMark === void 0) {
          return defaultHWM;
        }
        if (NumberIsNaN2(highWaterMark) || highWaterMark < 0) {
          throw new RangeError("Invalid highWaterMark");
        }
        return highWaterMark;
      }
      function ExtractSizeAlgorithm2(strategy) {
        const { size } = strategy;
        if (!size) {
          return () => 1;
        }
        return size;
      }
      function convertQueuingStrategy2(init2, context) {
        assertDictionary2(init2, context);
        const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
        const size = init2 === null || init2 === void 0 ? void 0 : init2.size;
        return {
          highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble2(highWaterMark),
          size: size === void 0 ? void 0 : convertQueuingStrategySize2(size, `${context} has member 'size' that`)
        };
      }
      function convertQueuingStrategySize2(fn, context) {
        assertFunction2(fn, context);
        return (chunk) => convertUnrestrictedDouble2(fn(chunk));
      }
      function convertUnderlyingSink2(original, context) {
        assertDictionary2(original, context);
        const abort = original === null || original === void 0 ? void 0 : original.abort;
        const close = original === null || original === void 0 ? void 0 : original.close;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        const write = original === null || original === void 0 ? void 0 : original.write;
        return {
          abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback2(abort, original, `${context} has member 'abort' that`),
          close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback2(close, original, `${context} has member 'close' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback2(start, original, `${context} has member 'start' that`),
          write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback2(write, original, `${context} has member 'write' that`),
          type
        };
      }
      function convertUnderlyingSinkAbortCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (reason) => promiseCall2(fn, original, [reason]);
      }
      function convertUnderlyingSinkCloseCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return () => promiseCall2(fn, original, []);
      }
      function convertUnderlyingSinkStartCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (controller) => reflectCall2(fn, original, [controller]);
      }
      function convertUnderlyingSinkWriteCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (chunk, controller) => promiseCall2(fn, original, [chunk, controller]);
      }
      function assertWritableStream2(x3, context) {
        if (!IsWritableStream2(x3)) {
          throw new TypeError(`${context} is not a WritableStream.`);
        }
      }
      function isAbortSignal3(value) {
        if (typeof value !== "object" || value === null) {
          return false;
        }
        try {
          return typeof value.aborted === "boolean";
        } catch (_a2) {
          return false;
        }
      }
      const supportsAbortController = typeof AbortController === "function";
      function createAbortController() {
        if (supportsAbortController) {
          return new AbortController();
        }
        return void 0;
      }
      class WritableStream2 {
        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
          if (rawUnderlyingSink === void 0) {
            rawUnderlyingSink = null;
          } else {
            assertObject2(rawUnderlyingSink, "First parameter");
          }
          const strategy = convertQueuingStrategy2(rawStrategy, "Second parameter");
          const underlyingSink = convertUnderlyingSink2(rawUnderlyingSink, "First parameter");
          InitializeWritableStream2(this);
          const type = underlyingSink.type;
          if (type !== void 0) {
            throw new RangeError("Invalid type is specified");
          }
          const sizeAlgorithm = ExtractSizeAlgorithm2(strategy);
          const highWaterMark = ExtractHighWaterMark2(strategy, 1);
          SetUpWritableStreamDefaultControllerFromUnderlyingSink2(this, underlyingSink, highWaterMark, sizeAlgorithm);
        }
        get locked() {
          if (!IsWritableStream2(this)) {
            throw streamBrandCheckException$22("locked");
          }
          return IsWritableStreamLocked2(this);
        }
        abort(reason = void 0) {
          if (!IsWritableStream2(this)) {
            return promiseRejectedWith2(streamBrandCheckException$22("abort"));
          }
          if (IsWritableStreamLocked2(this)) {
            return promiseRejectedWith2(new TypeError("Cannot abort a stream that already has a writer"));
          }
          return WritableStreamAbort2(this, reason);
        }
        close() {
          if (!IsWritableStream2(this)) {
            return promiseRejectedWith2(streamBrandCheckException$22("close"));
          }
          if (IsWritableStreamLocked2(this)) {
            return promiseRejectedWith2(new TypeError("Cannot close a stream that already has a writer"));
          }
          if (WritableStreamCloseQueuedOrInFlight2(this)) {
            return promiseRejectedWith2(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamClose2(this);
        }
        getWriter() {
          if (!IsWritableStream2(this)) {
            throw streamBrandCheckException$22("getWriter");
          }
          return AcquireWritableStreamDefaultWriter2(this);
        }
      }
      Object.defineProperties(WritableStream2.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        getWriter: { enumerable: true },
        locked: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(WritableStream2.prototype, SymbolPolyfill2.toStringTag, {
          value: "WritableStream",
          configurable: true
        });
      }
      function AcquireWritableStreamDefaultWriter2(stream) {
        return new WritableStreamDefaultWriter2(stream);
      }
      function CreateWritableStream2(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(WritableStream2.prototype);
        InitializeWritableStream2(stream);
        const controller = Object.create(WritableStreamDefaultController2.prototype);
        SetUpWritableStreamDefaultController2(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function InitializeWritableStream2(stream) {
        stream._state = "writable";
        stream._storedError = void 0;
        stream._writer = void 0;
        stream._writableStreamController = void 0;
        stream._writeRequests = new SimpleQueue2();
        stream._inFlightWriteRequest = void 0;
        stream._closeRequest = void 0;
        stream._inFlightCloseRequest = void 0;
        stream._pendingAbortRequest = void 0;
        stream._backpressure = false;
      }
      function IsWritableStream2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_writableStreamController")) {
          return false;
        }
        return x3 instanceof WritableStream2;
      }
      function IsWritableStreamLocked2(stream) {
        if (stream._writer === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamAbort2(stream, reason) {
        var _a2;
        if (stream._state === "closed" || stream._state === "errored") {
          return promiseResolvedWith2(void 0);
        }
        stream._writableStreamController._abortReason = reason;
        (_a2 = stream._writableStreamController._abortController) === null || _a2 === void 0 ? void 0 : _a2.abort();
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseResolvedWith2(void 0);
        }
        if (stream._pendingAbortRequest !== void 0) {
          return stream._pendingAbortRequest._promise;
        }
        let wasAlreadyErroring = false;
        if (state === "erroring") {
          wasAlreadyErroring = true;
          reason = void 0;
        }
        const promise = newPromise2((resolve, reject) => {
          stream._pendingAbortRequest = {
            _promise: void 0,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
          };
        });
        stream._pendingAbortRequest._promise = promise;
        if (!wasAlreadyErroring) {
          WritableStreamStartErroring2(stream, reason);
        }
        return promise;
      }
      function WritableStreamClose2(stream) {
        const state = stream._state;
        if (state === "closed" || state === "errored") {
          return promiseRejectedWith2(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
        }
        const promise = newPromise2((resolve, reject) => {
          const closeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._closeRequest = closeRequest;
        });
        const writer = stream._writer;
        if (writer !== void 0 && stream._backpressure && state === "writable") {
          defaultWriterReadyPromiseResolve2(writer);
        }
        WritableStreamDefaultControllerClose2(stream._writableStreamController);
        return promise;
      }
      function WritableStreamAddWriteRequest2(stream) {
        const promise = newPromise2((resolve, reject) => {
          const writeRequest = {
            _resolve: resolve,
            _reject: reject
          };
          stream._writeRequests.push(writeRequest);
        });
        return promise;
      }
      function WritableStreamDealWithRejection2(stream, error2) {
        const state = stream._state;
        if (state === "writable") {
          WritableStreamStartErroring2(stream, error2);
          return;
        }
        WritableStreamFinishErroring2(stream);
      }
      function WritableStreamStartErroring2(stream, reason) {
        const controller = stream._writableStreamController;
        stream._state = "erroring";
        stream._storedError = reason;
        const writer = stream._writer;
        if (writer !== void 0) {
          WritableStreamDefaultWriterEnsureReadyPromiseRejected2(writer, reason);
        }
        if (!WritableStreamHasOperationMarkedInFlight2(stream) && controller._started) {
          WritableStreamFinishErroring2(stream);
        }
      }
      function WritableStreamFinishErroring2(stream) {
        stream._state = "errored";
        stream._writableStreamController[ErrorSteps2]();
        const storedError = stream._storedError;
        stream._writeRequests.forEach((writeRequest) => {
          writeRequest._reject(storedError);
        });
        stream._writeRequests = new SimpleQueue2();
        if (stream._pendingAbortRequest === void 0) {
          WritableStreamRejectCloseAndClosedPromiseIfNeeded2(stream);
          return;
        }
        const abortRequest = stream._pendingAbortRequest;
        stream._pendingAbortRequest = void 0;
        if (abortRequest._wasAlreadyErroring) {
          abortRequest._reject(storedError);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded2(stream);
          return;
        }
        const promise = stream._writableStreamController[AbortSteps2](abortRequest._reason);
        uponPromise2(promise, () => {
          abortRequest._resolve();
          WritableStreamRejectCloseAndClosedPromiseIfNeeded2(stream);
        }, (reason) => {
          abortRequest._reject(reason);
          WritableStreamRejectCloseAndClosedPromiseIfNeeded2(stream);
        });
      }
      function WritableStreamFinishInFlightWrite2(stream) {
        stream._inFlightWriteRequest._resolve(void 0);
        stream._inFlightWriteRequest = void 0;
      }
      function WritableStreamFinishInFlightWriteWithError2(stream, error2) {
        stream._inFlightWriteRequest._reject(error2);
        stream._inFlightWriteRequest = void 0;
        WritableStreamDealWithRejection2(stream, error2);
      }
      function WritableStreamFinishInFlightClose2(stream) {
        stream._inFlightCloseRequest._resolve(void 0);
        stream._inFlightCloseRequest = void 0;
        const state = stream._state;
        if (state === "erroring") {
          stream._storedError = void 0;
          if (stream._pendingAbortRequest !== void 0) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = void 0;
          }
        }
        stream._state = "closed";
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseResolve2(writer);
        }
      }
      function WritableStreamFinishInFlightCloseWithError2(stream, error2) {
        stream._inFlightCloseRequest._reject(error2);
        stream._inFlightCloseRequest = void 0;
        if (stream._pendingAbortRequest !== void 0) {
          stream._pendingAbortRequest._reject(error2);
          stream._pendingAbortRequest = void 0;
        }
        WritableStreamDealWithRejection2(stream, error2);
      }
      function WritableStreamCloseQueuedOrInFlight2(stream) {
        if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamHasOperationMarkedInFlight2(stream) {
        if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
          return false;
        }
        return true;
      }
      function WritableStreamMarkCloseRequestInFlight2(stream) {
        stream._inFlightCloseRequest = stream._closeRequest;
        stream._closeRequest = void 0;
      }
      function WritableStreamMarkFirstWriteRequestInFlight2(stream) {
        stream._inFlightWriteRequest = stream._writeRequests.shift();
      }
      function WritableStreamRejectCloseAndClosedPromiseIfNeeded2(stream) {
        if (stream._closeRequest !== void 0) {
          stream._closeRequest._reject(stream._storedError);
          stream._closeRequest = void 0;
        }
        const writer = stream._writer;
        if (writer !== void 0) {
          defaultWriterClosedPromiseReject2(writer, stream._storedError);
        }
      }
      function WritableStreamUpdateBackpressure2(stream, backpressure) {
        const writer = stream._writer;
        if (writer !== void 0 && backpressure !== stream._backpressure) {
          if (backpressure) {
            defaultWriterReadyPromiseReset2(writer);
          } else {
            defaultWriterReadyPromiseResolve2(writer);
          }
        }
        stream._backpressure = backpressure;
      }
      class WritableStreamDefaultWriter2 {
        constructor(stream) {
          assertRequiredArgument2(stream, 1, "WritableStreamDefaultWriter");
          assertWritableStream2(stream, "First parameter");
          if (IsWritableStreamLocked2(stream)) {
            throw new TypeError("This stream has already been locked for exclusive writing by another writer");
          }
          this._ownerWritableStream = stream;
          stream._writer = this;
          const state = stream._state;
          if (state === "writable") {
            if (!WritableStreamCloseQueuedOrInFlight2(stream) && stream._backpressure) {
              defaultWriterReadyPromiseInitialize2(this);
            } else {
              defaultWriterReadyPromiseInitializeAsResolved2(this);
            }
            defaultWriterClosedPromiseInitialize2(this);
          } else if (state === "erroring") {
            defaultWriterReadyPromiseInitializeAsRejected2(this, stream._storedError);
            defaultWriterClosedPromiseInitialize2(this);
          } else if (state === "closed") {
            defaultWriterReadyPromiseInitializeAsResolved2(this);
            defaultWriterClosedPromiseInitializeAsResolved2(this);
          } else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected2(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected2(this, storedError);
          }
        }
        get closed() {
          if (!IsWritableStreamDefaultWriter2(this)) {
            return promiseRejectedWith2(defaultWriterBrandCheckException2("closed"));
          }
          return this._closedPromise;
        }
        get desiredSize() {
          if (!IsWritableStreamDefaultWriter2(this)) {
            throw defaultWriterBrandCheckException2("desiredSize");
          }
          if (this._ownerWritableStream === void 0) {
            throw defaultWriterLockException2("desiredSize");
          }
          return WritableStreamDefaultWriterGetDesiredSize2(this);
        }
        get ready() {
          if (!IsWritableStreamDefaultWriter2(this)) {
            return promiseRejectedWith2(defaultWriterBrandCheckException2("ready"));
          }
          return this._readyPromise;
        }
        abort(reason = void 0) {
          if (!IsWritableStreamDefaultWriter2(this)) {
            return promiseRejectedWith2(defaultWriterBrandCheckException2("abort"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith2(defaultWriterLockException2("abort"));
          }
          return WritableStreamDefaultWriterAbort2(this, reason);
        }
        close() {
          if (!IsWritableStreamDefaultWriter2(this)) {
            return promiseRejectedWith2(defaultWriterBrandCheckException2("close"));
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return promiseRejectedWith2(defaultWriterLockException2("close"));
          }
          if (WritableStreamCloseQueuedOrInFlight2(stream)) {
            return promiseRejectedWith2(new TypeError("Cannot close an already-closing stream"));
          }
          return WritableStreamDefaultWriterClose2(this);
        }
        releaseLock() {
          if (!IsWritableStreamDefaultWriter2(this)) {
            throw defaultWriterBrandCheckException2("releaseLock");
          }
          const stream = this._ownerWritableStream;
          if (stream === void 0) {
            return;
          }
          WritableStreamDefaultWriterRelease2(this);
        }
        write(chunk = void 0) {
          if (!IsWritableStreamDefaultWriter2(this)) {
            return promiseRejectedWith2(defaultWriterBrandCheckException2("write"));
          }
          if (this._ownerWritableStream === void 0) {
            return promiseRejectedWith2(defaultWriterLockException2("write to"));
          }
          return WritableStreamDefaultWriterWrite2(this, chunk);
        }
      }
      Object.defineProperties(WritableStreamDefaultWriter2.prototype, {
        abort: { enumerable: true },
        close: { enumerable: true },
        releaseLock: { enumerable: true },
        write: { enumerable: true },
        closed: { enumerable: true },
        desiredSize: { enumerable: true },
        ready: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultWriter2.prototype, SymbolPolyfill2.toStringTag, {
          value: "WritableStreamDefaultWriter",
          configurable: true
        });
      }
      function IsWritableStreamDefaultWriter2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_ownerWritableStream")) {
          return false;
        }
        return x3 instanceof WritableStreamDefaultWriter2;
      }
      function WritableStreamDefaultWriterAbort2(writer, reason) {
        const stream = writer._ownerWritableStream;
        return WritableStreamAbort2(stream, reason);
      }
      function WritableStreamDefaultWriterClose2(writer) {
        const stream = writer._ownerWritableStream;
        return WritableStreamClose2(stream);
      }
      function WritableStreamDefaultWriterCloseWithErrorPropagation2(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (WritableStreamCloseQueuedOrInFlight2(stream) || state === "closed") {
          return promiseResolvedWith2(void 0);
        }
        if (state === "errored") {
          return promiseRejectedWith2(stream._storedError);
        }
        return WritableStreamDefaultWriterClose2(writer);
      }
      function WritableStreamDefaultWriterEnsureClosedPromiseRejected2(writer, error2) {
        if (writer._closedPromiseState === "pending") {
          defaultWriterClosedPromiseReject2(writer, error2);
        } else {
          defaultWriterClosedPromiseResetToRejected2(writer, error2);
        }
      }
      function WritableStreamDefaultWriterEnsureReadyPromiseRejected2(writer, error2) {
        if (writer._readyPromiseState === "pending") {
          defaultWriterReadyPromiseReject2(writer, error2);
        } else {
          defaultWriterReadyPromiseResetToRejected2(writer, error2);
        }
      }
      function WritableStreamDefaultWriterGetDesiredSize2(writer) {
        const stream = writer._ownerWritableStream;
        const state = stream._state;
        if (state === "errored" || state === "erroring") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return WritableStreamDefaultControllerGetDesiredSize2(stream._writableStreamController);
      }
      function WritableStreamDefaultWriterRelease2(writer) {
        const stream = writer._ownerWritableStream;
        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
        WritableStreamDefaultWriterEnsureReadyPromiseRejected2(writer, releasedError);
        WritableStreamDefaultWriterEnsureClosedPromiseRejected2(writer, releasedError);
        stream._writer = void 0;
        writer._ownerWritableStream = void 0;
      }
      function WritableStreamDefaultWriterWrite2(writer, chunk) {
        const stream = writer._ownerWritableStream;
        const controller = stream._writableStreamController;
        const chunkSize = WritableStreamDefaultControllerGetChunkSize2(controller, chunk);
        if (stream !== writer._ownerWritableStream) {
          return promiseRejectedWith2(defaultWriterLockException2("write to"));
        }
        const state = stream._state;
        if (state === "errored") {
          return promiseRejectedWith2(stream._storedError);
        }
        if (WritableStreamCloseQueuedOrInFlight2(stream) || state === "closed") {
          return promiseRejectedWith2(new TypeError("The stream is closing or closed and cannot be written to"));
        }
        if (state === "erroring") {
          return promiseRejectedWith2(stream._storedError);
        }
        const promise = WritableStreamAddWriteRequest2(stream);
        WritableStreamDefaultControllerWrite2(controller, chunk, chunkSize);
        return promise;
      }
      const closeSentinel2 = {};
      class WritableStreamDefaultController2 {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get abortReason() {
          if (!IsWritableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$22("abortReason");
          }
          return this._abortReason;
        }
        get signal() {
          if (!IsWritableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$22("signal");
          }
          if (this._abortController === void 0) {
            throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
          }
          return this._abortController.signal;
        }
        error(e3 = void 0) {
          if (!IsWritableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$22("error");
          }
          const state = this._controlledWritableStream._state;
          if (state !== "writable") {
            return;
          }
          WritableStreamDefaultControllerError2(this, e3);
        }
        [AbortSteps2](reason) {
          const result = this._abortAlgorithm(reason);
          WritableStreamDefaultControllerClearAlgorithms2(this);
          return result;
        }
        [ErrorSteps2]() {
          ResetQueue2(this);
        }
      }
      Object.defineProperties(WritableStreamDefaultController2.prototype, {
        abortReason: { enumerable: true },
        signal: { enumerable: true },
        error: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(WritableStreamDefaultController2.prototype, SymbolPolyfill2.toStringTag, {
          value: "WritableStreamDefaultController",
          configurable: true
        });
      }
      function IsWritableStreamDefaultController2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_controlledWritableStream")) {
          return false;
        }
        return x3 instanceof WritableStreamDefaultController2;
      }
      function SetUpWritableStreamDefaultController2(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledWritableStream = stream;
        stream._writableStreamController = controller;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue2(controller);
        controller._abortReason = void 0;
        controller._abortController = createAbortController();
        controller._started = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._writeAlgorithm = writeAlgorithm;
        controller._closeAlgorithm = closeAlgorithm;
        controller._abortAlgorithm = abortAlgorithm;
        const backpressure = WritableStreamDefaultControllerGetBackpressure2(controller);
        WritableStreamUpdateBackpressure2(stream, backpressure);
        const startResult = startAlgorithm();
        const startPromise = promiseResolvedWith2(startResult);
        uponPromise2(startPromise, () => {
          controller._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded2(controller);
        }, (r3) => {
          controller._started = true;
          WritableStreamDealWithRejection2(stream, r3);
        });
      }
      function SetUpWritableStreamDefaultControllerFromUnderlyingSink2(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(WritableStreamDefaultController2.prototype);
        let startAlgorithm = () => void 0;
        let writeAlgorithm = () => promiseResolvedWith2(void 0);
        let closeAlgorithm = () => promiseResolvedWith2(void 0);
        let abortAlgorithm = () => promiseResolvedWith2(void 0);
        if (underlyingSink.start !== void 0) {
          startAlgorithm = () => underlyingSink.start(controller);
        }
        if (underlyingSink.write !== void 0) {
          writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
        }
        if (underlyingSink.close !== void 0) {
          closeAlgorithm = () => underlyingSink.close();
        }
        if (underlyingSink.abort !== void 0) {
          abortAlgorithm = (reason) => underlyingSink.abort(reason);
        }
        SetUpWritableStreamDefaultController2(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function WritableStreamDefaultControllerClearAlgorithms2(controller) {
        controller._writeAlgorithm = void 0;
        controller._closeAlgorithm = void 0;
        controller._abortAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function WritableStreamDefaultControllerClose2(controller) {
        EnqueueValueWithSize2(controller, closeSentinel2, 0);
        WritableStreamDefaultControllerAdvanceQueueIfNeeded2(controller);
      }
      function WritableStreamDefaultControllerGetChunkSize2(controller, chunk) {
        try {
          return controller._strategySizeAlgorithm(chunk);
        } catch (chunkSizeE) {
          WritableStreamDefaultControllerErrorIfNeeded2(controller, chunkSizeE);
          return 1;
        }
      }
      function WritableStreamDefaultControllerGetDesiredSize2(controller) {
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function WritableStreamDefaultControllerWrite2(controller, chunk, chunkSize) {
        try {
          EnqueueValueWithSize2(controller, chunk, chunkSize);
        } catch (enqueueE) {
          WritableStreamDefaultControllerErrorIfNeeded2(controller, enqueueE);
          return;
        }
        const stream = controller._controlledWritableStream;
        if (!WritableStreamCloseQueuedOrInFlight2(stream) && stream._state === "writable") {
          const backpressure = WritableStreamDefaultControllerGetBackpressure2(controller);
          WritableStreamUpdateBackpressure2(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded2(controller);
      }
      function WritableStreamDefaultControllerAdvanceQueueIfNeeded2(controller) {
        const stream = controller._controlledWritableStream;
        if (!controller._started) {
          return;
        }
        if (stream._inFlightWriteRequest !== void 0) {
          return;
        }
        const state = stream._state;
        if (state === "erroring") {
          WritableStreamFinishErroring2(stream);
          return;
        }
        if (controller._queue.length === 0) {
          return;
        }
        const value = PeekQueueValue2(controller);
        if (value === closeSentinel2) {
          WritableStreamDefaultControllerProcessClose2(controller);
        } else {
          WritableStreamDefaultControllerProcessWrite2(controller, value);
        }
      }
      function WritableStreamDefaultControllerErrorIfNeeded2(controller, error2) {
        if (controller._controlledWritableStream._state === "writable") {
          WritableStreamDefaultControllerError2(controller, error2);
        }
      }
      function WritableStreamDefaultControllerProcessClose2(controller) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkCloseRequestInFlight2(stream);
        DequeueValue2(controller);
        const sinkClosePromise = controller._closeAlgorithm();
        WritableStreamDefaultControllerClearAlgorithms2(controller);
        uponPromise2(sinkClosePromise, () => {
          WritableStreamFinishInFlightClose2(stream);
        }, (reason) => {
          WritableStreamFinishInFlightCloseWithError2(stream, reason);
        });
      }
      function WritableStreamDefaultControllerProcessWrite2(controller, chunk) {
        const stream = controller._controlledWritableStream;
        WritableStreamMarkFirstWriteRequestInFlight2(stream);
        const sinkWritePromise = controller._writeAlgorithm(chunk);
        uponPromise2(sinkWritePromise, () => {
          WritableStreamFinishInFlightWrite2(stream);
          const state = stream._state;
          DequeueValue2(controller);
          if (!WritableStreamCloseQueuedOrInFlight2(stream) && state === "writable") {
            const backpressure = WritableStreamDefaultControllerGetBackpressure2(controller);
            WritableStreamUpdateBackpressure2(stream, backpressure);
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded2(controller);
        }, (reason) => {
          if (stream._state === "writable") {
            WritableStreamDefaultControllerClearAlgorithms2(controller);
          }
          WritableStreamFinishInFlightWriteWithError2(stream, reason);
        });
      }
      function WritableStreamDefaultControllerGetBackpressure2(controller) {
        const desiredSize = WritableStreamDefaultControllerGetDesiredSize2(controller);
        return desiredSize <= 0;
      }
      function WritableStreamDefaultControllerError2(controller, error2) {
        const stream = controller._controlledWritableStream;
        WritableStreamDefaultControllerClearAlgorithms2(controller);
        WritableStreamStartErroring2(stream, error2);
      }
      function streamBrandCheckException$22(name) {
        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
      }
      function defaultControllerBrandCheckException$22(name) {
        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
      }
      function defaultWriterBrandCheckException2(name) {
        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
      }
      function defaultWriterLockException2(name) {
        return new TypeError("Cannot " + name + " a stream using a released writer");
      }
      function defaultWriterClosedPromiseInitialize2(writer) {
        writer._closedPromise = newPromise2((resolve, reject) => {
          writer._closedPromise_resolve = resolve;
          writer._closedPromise_reject = reject;
          writer._closedPromiseState = "pending";
        });
      }
      function defaultWriterClosedPromiseInitializeAsRejected2(writer, reason) {
        defaultWriterClosedPromiseInitialize2(writer);
        defaultWriterClosedPromiseReject2(writer, reason);
      }
      function defaultWriterClosedPromiseInitializeAsResolved2(writer) {
        defaultWriterClosedPromiseInitialize2(writer);
        defaultWriterClosedPromiseResolve2(writer);
      }
      function defaultWriterClosedPromiseReject2(writer, reason) {
        if (writer._closedPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue2(writer._closedPromise);
        writer._closedPromise_reject(reason);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "rejected";
      }
      function defaultWriterClosedPromiseResetToRejected2(writer, reason) {
        defaultWriterClosedPromiseInitializeAsRejected2(writer, reason);
      }
      function defaultWriterClosedPromiseResolve2(writer) {
        if (writer._closedPromise_resolve === void 0) {
          return;
        }
        writer._closedPromise_resolve(void 0);
        writer._closedPromise_resolve = void 0;
        writer._closedPromise_reject = void 0;
        writer._closedPromiseState = "resolved";
      }
      function defaultWriterReadyPromiseInitialize2(writer) {
        writer._readyPromise = newPromise2((resolve, reject) => {
          writer._readyPromise_resolve = resolve;
          writer._readyPromise_reject = reject;
        });
        writer._readyPromiseState = "pending";
      }
      function defaultWriterReadyPromiseInitializeAsRejected2(writer, reason) {
        defaultWriterReadyPromiseInitialize2(writer);
        defaultWriterReadyPromiseReject2(writer, reason);
      }
      function defaultWriterReadyPromiseInitializeAsResolved2(writer) {
        defaultWriterReadyPromiseInitialize2(writer);
        defaultWriterReadyPromiseResolve2(writer);
      }
      function defaultWriterReadyPromiseReject2(writer, reason) {
        if (writer._readyPromise_reject === void 0) {
          return;
        }
        setPromiseIsHandledToTrue2(writer._readyPromise);
        writer._readyPromise_reject(reason);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "rejected";
      }
      function defaultWriterReadyPromiseReset2(writer) {
        defaultWriterReadyPromiseInitialize2(writer);
      }
      function defaultWriterReadyPromiseResetToRejected2(writer, reason) {
        defaultWriterReadyPromiseInitializeAsRejected2(writer, reason);
      }
      function defaultWriterReadyPromiseResolve2(writer) {
        if (writer._readyPromise_resolve === void 0) {
          return;
        }
        writer._readyPromise_resolve(void 0);
        writer._readyPromise_resolve = void 0;
        writer._readyPromise_reject = void 0;
        writer._readyPromiseState = "fulfilled";
      }
      const NativeDOMException = typeof DOMException !== "undefined" ? DOMException : void 0;
      function isDOMExceptionConstructor(ctor) {
        if (!(typeof ctor === "function" || typeof ctor === "object")) {
          return false;
        }
        try {
          new ctor();
          return true;
        } catch (_a2) {
          return false;
        }
      }
      function createDOMExceptionPolyfill() {
        const ctor = function DOMException4(message, name) {
          this.message = message || "";
          this.name = name || "Error";
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
          }
        };
        ctor.prototype = Object.create(Error.prototype);
        Object.defineProperty(ctor.prototype, "constructor", { value: ctor, writable: true, configurable: true });
        return ctor;
      }
      const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();
      function ReadableStreamPipeTo2(source, dest, preventClose, preventAbort, preventCancel, signal) {
        const reader = AcquireReadableStreamDefaultReader2(source);
        const writer = AcquireWritableStreamDefaultWriter2(dest);
        source._disturbed = true;
        let shuttingDown = false;
        let currentWrite = promiseResolvedWith2(void 0);
        return newPromise2((resolve, reject) => {
          let abortAlgorithm;
          if (signal !== void 0) {
            abortAlgorithm = () => {
              const error2 = new DOMException$1("Aborted", "AbortError");
              const actions = [];
              if (!preventAbort) {
                actions.push(() => {
                  if (dest._state === "writable") {
                    return WritableStreamAbort2(dest, error2);
                  }
                  return promiseResolvedWith2(void 0);
                });
              }
              if (!preventCancel) {
                actions.push(() => {
                  if (source._state === "readable") {
                    return ReadableStreamCancel2(source, error2);
                  }
                  return promiseResolvedWith2(void 0);
                });
              }
              shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
            };
            if (signal.aborted) {
              abortAlgorithm();
              return;
            }
            signal.addEventListener("abort", abortAlgorithm);
          }
          function pipeLoop() {
            return newPromise2((resolveLoop, rejectLoop) => {
              function next(done) {
                if (done) {
                  resolveLoop();
                } else {
                  PerformPromiseThen2(pipeStep(), next, rejectLoop);
                }
              }
              next(false);
            });
          }
          function pipeStep() {
            if (shuttingDown) {
              return promiseResolvedWith2(true);
            }
            return PerformPromiseThen2(writer._readyPromise, () => {
              return newPromise2((resolveRead, rejectRead) => {
                ReadableStreamDefaultReaderRead2(reader, {
                  _chunkSteps: (chunk) => {
                    currentWrite = PerformPromiseThen2(WritableStreamDefaultWriterWrite2(writer, chunk), void 0, noop3);
                    resolveRead(false);
                  },
                  _closeSteps: () => resolveRead(true),
                  _errorSteps: rejectRead
                });
              });
            });
          }
          isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
            if (!preventAbort) {
              shutdownWithAction(() => WritableStreamAbort2(dest, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel2(source, storedError), true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
              shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation2(writer));
            } else {
              shutdown();
            }
          });
          if (WritableStreamCloseQueuedOrInFlight2(dest) || dest._state === "closed") {
            const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
            if (!preventCancel) {
              shutdownWithAction(() => ReadableStreamCancel2(source, destClosed), true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          setPromiseIsHandledToTrue2(pipeLoop());
          function waitForWritesToFinish() {
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen2(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === "errored") {
              action(stream._storedError);
            } else {
              uponRejection2(promise, action);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === "closed") {
              action();
            } else {
              uponFulfillment2(promise, action);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight2(dest)) {
              uponFulfillment2(waitForWritesToFinish(), doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              uponPromise2(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
            }
          }
          function shutdown(isError, error2) {
            if (shuttingDown) {
              return;
            }
            shuttingDown = true;
            if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight2(dest)) {
              uponFulfillment2(waitForWritesToFinish(), () => finalize(isError, error2));
            } else {
              finalize(isError, error2);
            }
          }
          function finalize(isError, error2) {
            WritableStreamDefaultWriterRelease2(writer);
            ReadableStreamReaderGenericRelease2(reader);
            if (signal !== void 0) {
              signal.removeEventListener("abort", abortAlgorithm);
            }
            if (isError) {
              reject(error2);
            } else {
              resolve(void 0);
            }
          }
        });
      }
      class ReadableStreamDefaultController2 {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsReadableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$12("desiredSize");
          }
          return ReadableStreamDefaultControllerGetDesiredSize2(this);
        }
        close() {
          if (!IsReadableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$12("close");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue2(this)) {
            throw new TypeError("The stream is not in a state that permits close");
          }
          ReadableStreamDefaultControllerClose2(this);
        }
        enqueue(chunk = void 0) {
          if (!IsReadableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$12("enqueue");
          }
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue2(this)) {
            throw new TypeError("The stream is not in a state that permits enqueue");
          }
          return ReadableStreamDefaultControllerEnqueue2(this, chunk);
        }
        error(e3 = void 0) {
          if (!IsReadableStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException$12("error");
          }
          ReadableStreamDefaultControllerError2(this, e3);
        }
        [CancelSteps2](reason) {
          ResetQueue2(this);
          const result = this._cancelAlgorithm(reason);
          ReadableStreamDefaultControllerClearAlgorithms2(this);
          return result;
        }
        [PullSteps2](readRequest) {
          const stream = this._controlledReadableStream;
          if (this._queue.length > 0) {
            const chunk = DequeueValue2(this);
            if (this._closeRequested && this._queue.length === 0) {
              ReadableStreamDefaultControllerClearAlgorithms2(this);
              ReadableStreamClose2(stream);
            } else {
              ReadableStreamDefaultControllerCallPullIfNeeded2(this);
            }
            readRequest._chunkSteps(chunk);
          } else {
            ReadableStreamAddReadRequest2(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded2(this);
          }
        }
      }
      Object.defineProperties(ReadableStreamDefaultController2.prototype, {
        close: { enumerable: true },
        enqueue: { enumerable: true },
        error: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ReadableStreamDefaultController2.prototype, SymbolPolyfill2.toStringTag, {
          value: "ReadableStreamDefaultController",
          configurable: true
        });
      }
      function IsReadableStreamDefaultController2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_controlledReadableStream")) {
          return false;
        }
        return x3 instanceof ReadableStreamDefaultController2;
      }
      function ReadableStreamDefaultControllerCallPullIfNeeded2(controller) {
        const shouldPull = ReadableStreamDefaultControllerShouldCallPull2(controller);
        if (!shouldPull) {
          return;
        }
        if (controller._pulling) {
          controller._pullAgain = true;
          return;
        }
        controller._pulling = true;
        const pullPromise = controller._pullAlgorithm();
        uponPromise2(pullPromise, () => {
          controller._pulling = false;
          if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded2(controller);
          }
        }, (e3) => {
          ReadableStreamDefaultControllerError2(controller, e3);
        });
      }
      function ReadableStreamDefaultControllerShouldCallPull2(controller) {
        const stream = controller._controlledReadableStream;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue2(controller)) {
          return false;
        }
        if (!controller._started) {
          return false;
        }
        if (IsReadableStreamLocked2(stream) && ReadableStreamGetNumReadRequests2(stream) > 0) {
          return true;
        }
        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize2(controller);
        if (desiredSize > 0) {
          return true;
        }
        return false;
      }
      function ReadableStreamDefaultControllerClearAlgorithms2(controller) {
        controller._pullAlgorithm = void 0;
        controller._cancelAlgorithm = void 0;
        controller._strategySizeAlgorithm = void 0;
      }
      function ReadableStreamDefaultControllerClose2(controller) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue2(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        controller._closeRequested = true;
        if (controller._queue.length === 0) {
          ReadableStreamDefaultControllerClearAlgorithms2(controller);
          ReadableStreamClose2(stream);
        }
      }
      function ReadableStreamDefaultControllerEnqueue2(controller, chunk) {
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue2(controller)) {
          return;
        }
        const stream = controller._controlledReadableStream;
        if (IsReadableStreamLocked2(stream) && ReadableStreamGetNumReadRequests2(stream) > 0) {
          ReadableStreamFulfillReadRequest2(stream, chunk, false);
        } else {
          let chunkSize;
          try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
          } catch (chunkSizeE) {
            ReadableStreamDefaultControllerError2(controller, chunkSizeE);
            throw chunkSizeE;
          }
          try {
            EnqueueValueWithSize2(controller, chunk, chunkSize);
          } catch (enqueueE) {
            ReadableStreamDefaultControllerError2(controller, enqueueE);
            throw enqueueE;
          }
        }
        ReadableStreamDefaultControllerCallPullIfNeeded2(controller);
      }
      function ReadableStreamDefaultControllerError2(controller, e3) {
        const stream = controller._controlledReadableStream;
        if (stream._state !== "readable") {
          return;
        }
        ResetQueue2(controller);
        ReadableStreamDefaultControllerClearAlgorithms2(controller);
        ReadableStreamError2(stream, e3);
      }
      function ReadableStreamDefaultControllerGetDesiredSize2(controller) {
        const state = controller._controlledReadableStream._state;
        if (state === "errored") {
          return null;
        }
        if (state === "closed") {
          return 0;
        }
        return controller._strategyHWM - controller._queueTotalSize;
      }
      function ReadableStreamDefaultControllerHasBackpressure2(controller) {
        if (ReadableStreamDefaultControllerShouldCallPull2(controller)) {
          return false;
        }
        return true;
      }
      function ReadableStreamDefaultControllerCanCloseOrEnqueue2(controller) {
        const state = controller._controlledReadableStream._state;
        if (!controller._closeRequested && state === "readable") {
          return true;
        }
        return false;
      }
      function SetUpReadableStreamDefaultController2(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
        controller._controlledReadableStream = stream;
        controller._queue = void 0;
        controller._queueTotalSize = void 0;
        ResetQueue2(controller);
        controller._started = false;
        controller._closeRequested = false;
        controller._pullAgain = false;
        controller._pulling = false;
        controller._strategySizeAlgorithm = sizeAlgorithm;
        controller._strategyHWM = highWaterMark;
        controller._pullAlgorithm = pullAlgorithm;
        controller._cancelAlgorithm = cancelAlgorithm;
        stream._readableStreamController = controller;
        const startResult = startAlgorithm();
        uponPromise2(promiseResolvedWith2(startResult), () => {
          controller._started = true;
          ReadableStreamDefaultControllerCallPullIfNeeded2(controller);
        }, (r3) => {
          ReadableStreamDefaultControllerError2(controller, r3);
        });
      }
      function SetUpReadableStreamDefaultControllerFromUnderlyingSource2(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
        const controller = Object.create(ReadableStreamDefaultController2.prototype);
        let startAlgorithm = () => void 0;
        let pullAlgorithm = () => promiseResolvedWith2(void 0);
        let cancelAlgorithm = () => promiseResolvedWith2(void 0);
        if (underlyingSource.start !== void 0) {
          startAlgorithm = () => underlyingSource.start(controller);
        }
        if (underlyingSource.pull !== void 0) {
          pullAlgorithm = () => underlyingSource.pull(controller);
        }
        if (underlyingSource.cancel !== void 0) {
          cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
        }
        SetUpReadableStreamDefaultController2(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
      }
      function defaultControllerBrandCheckException$12(name) {
        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
      }
      function ReadableStreamTee2(stream, cloneForBranch2) {
        if (IsReadableByteStreamController2(stream._readableStreamController)) {
          return ReadableByteStreamTee2(stream);
        }
        return ReadableStreamDefaultTee2(stream);
      }
      function ReadableStreamDefaultTee2(stream, cloneForBranch2) {
        const reader = AcquireReadableStreamDefaultReader2(stream);
        let reading = false;
        let readAgain = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise2((resolve) => {
          resolveCancelPromise = resolve;
        });
        function pullAlgorithm() {
          if (reading) {
            readAgain = true;
            return promiseResolvedWith2(void 0);
          }
          reading = true;
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask2(() => {
                readAgain = false;
                const chunk1 = chunk;
                const chunk2 = chunk;
                if (!canceled1) {
                  ReadableStreamDefaultControllerEnqueue2(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerEnqueue2(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgain) {
                  pullAlgorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableStreamDefaultControllerClose2(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableStreamDefaultControllerClose2(branch2._readableStreamController);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead2(reader, readRequest);
          return promiseResolvedWith2(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList2([reason1, reason2]);
            const cancelResult = ReadableStreamCancel2(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList2([reason1, reason2]);
            const cancelResult = ReadableStreamCancel2(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
        }
        branch1 = CreateReadableStream2(startAlgorithm, pullAlgorithm, cancel1Algorithm);
        branch2 = CreateReadableStream2(startAlgorithm, pullAlgorithm, cancel2Algorithm);
        uponRejection2(reader._closedPromise, (r3) => {
          ReadableStreamDefaultControllerError2(branch1._readableStreamController, r3);
          ReadableStreamDefaultControllerError2(branch2._readableStreamController, r3);
          if (!canceled1 || !canceled2) {
            resolveCancelPromise(void 0);
          }
        });
        return [branch1, branch2];
      }
      function ReadableByteStreamTee2(stream) {
        let reader = AcquireReadableStreamDefaultReader2(stream);
        let reading = false;
        let readAgainForBranch1 = false;
        let readAgainForBranch2 = false;
        let canceled1 = false;
        let canceled2 = false;
        let reason1;
        let reason2;
        let branch1;
        let branch2;
        let resolveCancelPromise;
        const cancelPromise = newPromise2((resolve) => {
          resolveCancelPromise = resolve;
        });
        function forwardReaderError(thisReader) {
          uponRejection2(thisReader._closedPromise, (r3) => {
            if (thisReader !== reader) {
              return;
            }
            ReadableByteStreamControllerError2(branch1._readableStreamController, r3);
            ReadableByteStreamControllerError2(branch2._readableStreamController, r3);
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(void 0);
            }
          });
        }
        function pullWithDefaultReader() {
          if (IsReadableStreamBYOBReader2(reader)) {
            ReadableStreamReaderGenericRelease2(reader);
            reader = AcquireReadableStreamDefaultReader2(stream);
            forwardReaderError(reader);
          }
          const readRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask2(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const chunk1 = chunk;
                let chunk2 = chunk;
                if (!canceled1 && !canceled2) {
                  try {
                    chunk2 = CloneAsUint8Array2(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError2(branch1._readableStreamController, cloneE);
                    ReadableByteStreamControllerError2(branch2._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel2(stream, cloneE));
                    return;
                  }
                }
                if (!canceled1) {
                  ReadableByteStreamControllerEnqueue2(branch1._readableStreamController, chunk1);
                }
                if (!canceled2) {
                  ReadableByteStreamControllerEnqueue2(branch2._readableStreamController, chunk2);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: () => {
              reading = false;
              if (!canceled1) {
                ReadableByteStreamControllerClose2(branch1._readableStreamController);
              }
              if (!canceled2) {
                ReadableByteStreamControllerClose2(branch2._readableStreamController);
              }
              if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond2(branch1._readableStreamController, 0);
              }
              if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerRespond2(branch2._readableStreamController, 0);
              }
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamDefaultReaderRead2(reader, readRequest);
        }
        function pullWithBYOBReader(view, forBranch2) {
          if (IsReadableStreamDefaultReader2(reader)) {
            ReadableStreamReaderGenericRelease2(reader);
            reader = AcquireReadableStreamBYOBReader2(stream);
            forwardReaderError(reader);
          }
          const byobBranch = forBranch2 ? branch2 : branch1;
          const otherBranch = forBranch2 ? branch1 : branch2;
          const readIntoRequest = {
            _chunkSteps: (chunk) => {
              queueMicrotask2(() => {
                readAgainForBranch1 = false;
                readAgainForBranch2 = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!otherCanceled) {
                  let clonedChunk;
                  try {
                    clonedChunk = CloneAsUint8Array2(chunk);
                  } catch (cloneE) {
                    ReadableByteStreamControllerError2(byobBranch._readableStreamController, cloneE);
                    ReadableByteStreamControllerError2(otherBranch._readableStreamController, cloneE);
                    resolveCancelPromise(ReadableStreamCancel2(stream, cloneE));
                    return;
                  }
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView2(byobBranch._readableStreamController, chunk);
                  }
                  ReadableByteStreamControllerEnqueue2(otherBranch._readableStreamController, clonedChunk);
                } else if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView2(byobBranch._readableStreamController, chunk);
                }
                reading = false;
                if (readAgainForBranch1) {
                  pull1Algorithm();
                } else if (readAgainForBranch2) {
                  pull2Algorithm();
                }
              });
            },
            _closeSteps: (chunk) => {
              reading = false;
              const byobCanceled = forBranch2 ? canceled2 : canceled1;
              const otherCanceled = forBranch2 ? canceled1 : canceled2;
              if (!byobCanceled) {
                ReadableByteStreamControllerClose2(byobBranch._readableStreamController);
              }
              if (!otherCanceled) {
                ReadableByteStreamControllerClose2(otherBranch._readableStreamController);
              }
              if (chunk !== void 0) {
                if (!byobCanceled) {
                  ReadableByteStreamControllerRespondWithNewView2(byobBranch._readableStreamController, chunk);
                }
                if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                  ReadableByteStreamControllerRespond2(otherBranch._readableStreamController, 0);
                }
              }
              if (!byobCanceled || !otherCanceled) {
                resolveCancelPromise(void 0);
              }
            },
            _errorSteps: () => {
              reading = false;
            }
          };
          ReadableStreamBYOBReaderRead2(reader, view, readIntoRequest);
        }
        function pull1Algorithm() {
          if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith2(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest2(branch1._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, false);
          }
          return promiseResolvedWith2(void 0);
        }
        function pull2Algorithm() {
          if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith2(void 0);
          }
          reading = true;
          const byobRequest = ReadableByteStreamControllerGetBYOBRequest2(branch2._readableStreamController);
          if (byobRequest === null) {
            pullWithDefaultReader();
          } else {
            pullWithBYOBReader(byobRequest._view, true);
          }
          return promiseResolvedWith2(void 0);
        }
        function cancel1Algorithm(reason) {
          canceled1 = true;
          reason1 = reason;
          if (canceled2) {
            const compositeReason = CreateArrayFromList2([reason1, reason2]);
            const cancelResult = ReadableStreamCancel2(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function cancel2Algorithm(reason) {
          canceled2 = true;
          reason2 = reason;
          if (canceled1) {
            const compositeReason = CreateArrayFromList2([reason1, reason2]);
            const cancelResult = ReadableStreamCancel2(stream, compositeReason);
            resolveCancelPromise(cancelResult);
          }
          return cancelPromise;
        }
        function startAlgorithm() {
          return;
        }
        branch1 = CreateReadableByteStream2(startAlgorithm, pull1Algorithm, cancel1Algorithm);
        branch2 = CreateReadableByteStream2(startAlgorithm, pull2Algorithm, cancel2Algorithm);
        forwardReaderError(reader);
        return [branch1, branch2];
      }
      function convertUnderlyingDefaultOrByteSource2(source, context) {
        assertDictionary2(source, context);
        const original = source;
        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
        const pull = original === null || original === void 0 ? void 0 : original.pull;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const type = original === null || original === void 0 ? void 0 : original.type;
        return {
          autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange2(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
          cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback2(cancel, original, `${context} has member 'cancel' that`),
          pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback2(pull, original, `${context} has member 'pull' that`),
          start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback2(start, original, `${context} has member 'start' that`),
          type: type === void 0 ? void 0 : convertReadableStreamType2(type, `${context} has member 'type' that`)
        };
      }
      function convertUnderlyingSourceCancelCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (reason) => promiseCall2(fn, original, [reason]);
      }
      function convertUnderlyingSourcePullCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (controller) => promiseCall2(fn, original, [controller]);
      }
      function convertUnderlyingSourceStartCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (controller) => reflectCall2(fn, original, [controller]);
      }
      function convertReadableStreamType2(type, context) {
        type = `${type}`;
        if (type !== "bytes") {
          throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
        }
        return type;
      }
      function convertReaderOptions2(options, context) {
        assertDictionary2(options, context);
        const mode = options === null || options === void 0 ? void 0 : options.mode;
        return {
          mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode2(mode, `${context} has member 'mode' that`)
        };
      }
      function convertReadableStreamReaderMode2(mode, context) {
        mode = `${mode}`;
        if (mode !== "byob") {
          throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
        }
        return mode;
      }
      function convertIteratorOptions2(options, context) {
        assertDictionary2(options, context);
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        return { preventCancel: Boolean(preventCancel) };
      }
      function convertPipeOptions2(options, context) {
        assertDictionary2(options, context);
        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
        const signal = options === null || options === void 0 ? void 0 : options.signal;
        if (signal !== void 0) {
          assertAbortSignal2(signal, `${context} has member 'signal' that`);
        }
        return {
          preventAbort: Boolean(preventAbort),
          preventCancel: Boolean(preventCancel),
          preventClose: Boolean(preventClose),
          signal
        };
      }
      function assertAbortSignal2(signal, context) {
        if (!isAbortSignal3(signal)) {
          throw new TypeError(`${context} is not an AbortSignal.`);
        }
      }
      function convertReadableWritablePair2(pair, context) {
        assertDictionary2(pair, context);
        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
        assertRequiredField2(readable, "readable", "ReadableWritablePair");
        assertReadableStream2(readable, `${context} has member 'readable' that`);
        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
        assertRequiredField2(writable, "writable", "ReadableWritablePair");
        assertWritableStream2(writable, `${context} has member 'writable' that`);
        return { readable, writable };
      }
      class ReadableStream3 {
        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
          if (rawUnderlyingSource === void 0) {
            rawUnderlyingSource = null;
          } else {
            assertObject2(rawUnderlyingSource, "First parameter");
          }
          const strategy = convertQueuingStrategy2(rawStrategy, "Second parameter");
          const underlyingSource = convertUnderlyingDefaultOrByteSource2(rawUnderlyingSource, "First parameter");
          InitializeReadableStream2(this);
          if (underlyingSource.type === "bytes") {
            if (strategy.size !== void 0) {
              throw new RangeError("The strategy for a byte stream cannot have a size function");
            }
            const highWaterMark = ExtractHighWaterMark2(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource2(this, underlyingSource, highWaterMark);
          } else {
            const sizeAlgorithm = ExtractSizeAlgorithm2(strategy);
            const highWaterMark = ExtractHighWaterMark2(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource2(this, underlyingSource, highWaterMark, sizeAlgorithm);
          }
        }
        get locked() {
          if (!IsReadableStream2(this)) {
            throw streamBrandCheckException$12("locked");
          }
          return IsReadableStreamLocked2(this);
        }
        cancel(reason = void 0) {
          if (!IsReadableStream2(this)) {
            return promiseRejectedWith2(streamBrandCheckException$12("cancel"));
          }
          if (IsReadableStreamLocked2(this)) {
            return promiseRejectedWith2(new TypeError("Cannot cancel a stream that already has a reader"));
          }
          return ReadableStreamCancel2(this, reason);
        }
        getReader(rawOptions = void 0) {
          if (!IsReadableStream2(this)) {
            throw streamBrandCheckException$12("getReader");
          }
          const options = convertReaderOptions2(rawOptions, "First parameter");
          if (options.mode === void 0) {
            return AcquireReadableStreamDefaultReader2(this);
          }
          return AcquireReadableStreamBYOBReader2(this);
        }
        pipeThrough(rawTransform, rawOptions = {}) {
          if (!IsReadableStream2(this)) {
            throw streamBrandCheckException$12("pipeThrough");
          }
          assertRequiredArgument2(rawTransform, 1, "pipeThrough");
          const transform = convertReadableWritablePair2(rawTransform, "First parameter");
          const options = convertPipeOptions2(rawOptions, "Second parameter");
          if (IsReadableStreamLocked2(this)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
          }
          if (IsWritableStreamLocked2(transform.writable)) {
            throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
          }
          const promise = ReadableStreamPipeTo2(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
          setPromiseIsHandledToTrue2(promise);
          return transform.readable;
        }
        pipeTo(destination, rawOptions = {}) {
          if (!IsReadableStream2(this)) {
            return promiseRejectedWith2(streamBrandCheckException$12("pipeTo"));
          }
          if (destination === void 0) {
            return promiseRejectedWith2(`Parameter 1 is required in 'pipeTo'.`);
          }
          if (!IsWritableStream2(destination)) {
            return promiseRejectedWith2(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
          }
          let options;
          try {
            options = convertPipeOptions2(rawOptions, "Second parameter");
          } catch (e3) {
            return promiseRejectedWith2(e3);
          }
          if (IsReadableStreamLocked2(this)) {
            return promiseRejectedWith2(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
          }
          if (IsWritableStreamLocked2(destination)) {
            return promiseRejectedWith2(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
          }
          return ReadableStreamPipeTo2(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        }
        tee() {
          if (!IsReadableStream2(this)) {
            throw streamBrandCheckException$12("tee");
          }
          const branches = ReadableStreamTee2(this);
          return CreateArrayFromList2(branches);
        }
        values(rawOptions = void 0) {
          if (!IsReadableStream2(this)) {
            throw streamBrandCheckException$12("values");
          }
          const options = convertIteratorOptions2(rawOptions, "First parameter");
          return AcquireReadableStreamAsyncIterator2(this, options.preventCancel);
        }
      }
      Object.defineProperties(ReadableStream3.prototype, {
        cancel: { enumerable: true },
        getReader: { enumerable: true },
        pipeThrough: { enumerable: true },
        pipeTo: { enumerable: true },
        tee: { enumerable: true },
        values: { enumerable: true },
        locked: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ReadableStream3.prototype, SymbolPolyfill2.toStringTag, {
          value: "ReadableStream",
          configurable: true
        });
      }
      if (typeof SymbolPolyfill2.asyncIterator === "symbol") {
        Object.defineProperty(ReadableStream3.prototype, SymbolPolyfill2.asyncIterator, {
          value: ReadableStream3.prototype.values,
          writable: true,
          configurable: true
        });
      }
      function CreateReadableStream2(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
        const stream = Object.create(ReadableStream3.prototype);
        InitializeReadableStream2(stream);
        const controller = Object.create(ReadableStreamDefaultController2.prototype);
        SetUpReadableStreamDefaultController2(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
        return stream;
      }
      function CreateReadableByteStream2(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
        const stream = Object.create(ReadableStream3.prototype);
        InitializeReadableStream2(stream);
        const controller = Object.create(ReadableByteStreamController2.prototype);
        SetUpReadableByteStreamController2(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
        return stream;
      }
      function InitializeReadableStream2(stream) {
        stream._state = "readable";
        stream._reader = void 0;
        stream._storedError = void 0;
        stream._disturbed = false;
      }
      function IsReadableStream2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_readableStreamController")) {
          return false;
        }
        return x3 instanceof ReadableStream3;
      }
      function IsReadableStreamLocked2(stream) {
        if (stream._reader === void 0) {
          return false;
        }
        return true;
      }
      function ReadableStreamCancel2(stream, reason) {
        stream._disturbed = true;
        if (stream._state === "closed") {
          return promiseResolvedWith2(void 0);
        }
        if (stream._state === "errored") {
          return promiseRejectedWith2(stream._storedError);
        }
        ReadableStreamClose2(stream);
        const reader = stream._reader;
        if (reader !== void 0 && IsReadableStreamBYOBReader2(reader)) {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._closeSteps(void 0);
          });
          reader._readIntoRequests = new SimpleQueue2();
        }
        const sourceCancelPromise = stream._readableStreamController[CancelSteps2](reason);
        return transformPromiseWith2(sourceCancelPromise, noop3);
      }
      function ReadableStreamClose2(stream) {
        stream._state = "closed";
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseResolve2(reader);
        if (IsReadableStreamDefaultReader2(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._closeSteps();
          });
          reader._readRequests = new SimpleQueue2();
        }
      }
      function ReadableStreamError2(stream, e3) {
        stream._state = "errored";
        stream._storedError = e3;
        const reader = stream._reader;
        if (reader === void 0) {
          return;
        }
        defaultReaderClosedPromiseReject2(reader, e3);
        if (IsReadableStreamDefaultReader2(reader)) {
          reader._readRequests.forEach((readRequest) => {
            readRequest._errorSteps(e3);
          });
          reader._readRequests = new SimpleQueue2();
        } else {
          reader._readIntoRequests.forEach((readIntoRequest) => {
            readIntoRequest._errorSteps(e3);
          });
          reader._readIntoRequests = new SimpleQueue2();
        }
      }
      function streamBrandCheckException$12(name) {
        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
      }
      function convertQueuingStrategyInit2(init2, context) {
        assertDictionary2(init2, context);
        const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
        assertRequiredField2(highWaterMark, "highWaterMark", "QueuingStrategyInit");
        return {
          highWaterMark: convertUnrestrictedDouble2(highWaterMark)
        };
      }
      const byteLengthSizeFunction2 = (chunk) => {
        return chunk.byteLength;
      };
      try {
        Object.defineProperty(byteLengthSizeFunction2, "name", {
          value: "size",
          configurable: true
        });
      } catch (_a2) {
      }
      class ByteLengthQueuingStrategy2 {
        constructor(options) {
          assertRequiredArgument2(options, 1, "ByteLengthQueuingStrategy");
          options = convertQueuingStrategyInit2(options, "First parameter");
          this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsByteLengthQueuingStrategy2(this)) {
            throw byteLengthBrandCheckException2("highWaterMark");
          }
          return this._byteLengthQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsByteLengthQueuingStrategy2(this)) {
            throw byteLengthBrandCheckException2("size");
          }
          return byteLengthSizeFunction2;
        }
      }
      Object.defineProperties(ByteLengthQueuingStrategy2.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(ByteLengthQueuingStrategy2.prototype, SymbolPolyfill2.toStringTag, {
          value: "ByteLengthQueuingStrategy",
          configurable: true
        });
      }
      function byteLengthBrandCheckException2(name) {
        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
      }
      function IsByteLengthQueuingStrategy2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_byteLengthQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x3 instanceof ByteLengthQueuingStrategy2;
      }
      const countSizeFunction2 = () => {
        return 1;
      };
      try {
        Object.defineProperty(countSizeFunction2, "name", {
          value: "size",
          configurable: true
        });
      } catch (_a2) {
      }
      class CountQueuingStrategy2 {
        constructor(options) {
          assertRequiredArgument2(options, 1, "CountQueuingStrategy");
          options = convertQueuingStrategyInit2(options, "First parameter");
          this._countQueuingStrategyHighWaterMark = options.highWaterMark;
        }
        get highWaterMark() {
          if (!IsCountQueuingStrategy2(this)) {
            throw countBrandCheckException2("highWaterMark");
          }
          return this._countQueuingStrategyHighWaterMark;
        }
        get size() {
          if (!IsCountQueuingStrategy2(this)) {
            throw countBrandCheckException2("size");
          }
          return countSizeFunction2;
        }
      }
      Object.defineProperties(CountQueuingStrategy2.prototype, {
        highWaterMark: { enumerable: true },
        size: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(CountQueuingStrategy2.prototype, SymbolPolyfill2.toStringTag, {
          value: "CountQueuingStrategy",
          configurable: true
        });
      }
      function countBrandCheckException2(name) {
        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
      }
      function IsCountQueuingStrategy2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_countQueuingStrategyHighWaterMark")) {
          return false;
        }
        return x3 instanceof CountQueuingStrategy2;
      }
      function convertTransformer2(original, context) {
        assertDictionary2(original, context);
        const flush = original === null || original === void 0 ? void 0 : original.flush;
        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
        const start = original === null || original === void 0 ? void 0 : original.start;
        const transform = original === null || original === void 0 ? void 0 : original.transform;
        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
        return {
          flush: flush === void 0 ? void 0 : convertTransformerFlushCallback2(flush, original, `${context} has member 'flush' that`),
          readableType,
          start: start === void 0 ? void 0 : convertTransformerStartCallback2(start, original, `${context} has member 'start' that`),
          transform: transform === void 0 ? void 0 : convertTransformerTransformCallback2(transform, original, `${context} has member 'transform' that`),
          writableType
        };
      }
      function convertTransformerFlushCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (controller) => promiseCall2(fn, original, [controller]);
      }
      function convertTransformerStartCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (controller) => reflectCall2(fn, original, [controller]);
      }
      function convertTransformerTransformCallback2(fn, original, context) {
        assertFunction2(fn, context);
        return (chunk, controller) => promiseCall2(fn, original, [chunk, controller]);
      }
      class TransformStream2 {
        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
          if (rawTransformer === void 0) {
            rawTransformer = null;
          }
          const writableStrategy = convertQueuingStrategy2(rawWritableStrategy, "Second parameter");
          const readableStrategy = convertQueuingStrategy2(rawReadableStrategy, "Third parameter");
          const transformer = convertTransformer2(rawTransformer, "First parameter");
          if (transformer.readableType !== void 0) {
            throw new RangeError("Invalid readableType specified");
          }
          if (transformer.writableType !== void 0) {
            throw new RangeError("Invalid writableType specified");
          }
          const readableHighWaterMark = ExtractHighWaterMark2(readableStrategy, 0);
          const readableSizeAlgorithm = ExtractSizeAlgorithm2(readableStrategy);
          const writableHighWaterMark = ExtractHighWaterMark2(writableStrategy, 1);
          const writableSizeAlgorithm = ExtractSizeAlgorithm2(writableStrategy);
          let startPromise_resolve;
          const startPromise = newPromise2((resolve) => {
            startPromise_resolve = resolve;
          });
          InitializeTransformStream2(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
          SetUpTransformStreamDefaultControllerFromTransformer2(this, transformer);
          if (transformer.start !== void 0) {
            startPromise_resolve(transformer.start(this._transformStreamController));
          } else {
            startPromise_resolve(void 0);
          }
        }
        get readable() {
          if (!IsTransformStream2(this)) {
            throw streamBrandCheckException2("readable");
          }
          return this._readable;
        }
        get writable() {
          if (!IsTransformStream2(this)) {
            throw streamBrandCheckException2("writable");
          }
          return this._writable;
        }
      }
      Object.defineProperties(TransformStream2.prototype, {
        readable: { enumerable: true },
        writable: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(TransformStream2.prototype, SymbolPolyfill2.toStringTag, {
          value: "TransformStream",
          configurable: true
        });
      }
      function InitializeTransformStream2(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
        function startAlgorithm() {
          return startPromise;
        }
        function writeAlgorithm(chunk) {
          return TransformStreamDefaultSinkWriteAlgorithm2(stream, chunk);
        }
        function abortAlgorithm(reason) {
          return TransformStreamDefaultSinkAbortAlgorithm2(stream, reason);
        }
        function closeAlgorithm() {
          return TransformStreamDefaultSinkCloseAlgorithm2(stream);
        }
        stream._writable = CreateWritableStream2(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
        function pullAlgorithm() {
          return TransformStreamDefaultSourcePullAlgorithm2(stream);
        }
        function cancelAlgorithm(reason) {
          TransformStreamErrorWritableAndUnblockWrite2(stream, reason);
          return promiseResolvedWith2(void 0);
        }
        stream._readable = CreateReadableStream2(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        stream._backpressure = void 0;
        stream._backpressureChangePromise = void 0;
        stream._backpressureChangePromise_resolve = void 0;
        TransformStreamSetBackpressure2(stream, true);
        stream._transformStreamController = void 0;
      }
      function IsTransformStream2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_transformStreamController")) {
          return false;
        }
        return x3 instanceof TransformStream2;
      }
      function TransformStreamError2(stream, e3) {
        ReadableStreamDefaultControllerError2(stream._readable._readableStreamController, e3);
        TransformStreamErrorWritableAndUnblockWrite2(stream, e3);
      }
      function TransformStreamErrorWritableAndUnblockWrite2(stream, e3) {
        TransformStreamDefaultControllerClearAlgorithms2(stream._transformStreamController);
        WritableStreamDefaultControllerErrorIfNeeded2(stream._writable._writableStreamController, e3);
        if (stream._backpressure) {
          TransformStreamSetBackpressure2(stream, false);
        }
      }
      function TransformStreamSetBackpressure2(stream, backpressure) {
        if (stream._backpressureChangePromise !== void 0) {
          stream._backpressureChangePromise_resolve();
        }
        stream._backpressureChangePromise = newPromise2((resolve) => {
          stream._backpressureChangePromise_resolve = resolve;
        });
        stream._backpressure = backpressure;
      }
      class TransformStreamDefaultController2 {
        constructor() {
          throw new TypeError("Illegal constructor");
        }
        get desiredSize() {
          if (!IsTransformStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException2("desiredSize");
          }
          const readableController = this._controlledTransformStream._readable._readableStreamController;
          return ReadableStreamDefaultControllerGetDesiredSize2(readableController);
        }
        enqueue(chunk = void 0) {
          if (!IsTransformStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException2("enqueue");
          }
          TransformStreamDefaultControllerEnqueue2(this, chunk);
        }
        error(reason = void 0) {
          if (!IsTransformStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException2("error");
          }
          TransformStreamDefaultControllerError2(this, reason);
        }
        terminate() {
          if (!IsTransformStreamDefaultController2(this)) {
            throw defaultControllerBrandCheckException2("terminate");
          }
          TransformStreamDefaultControllerTerminate2(this);
        }
      }
      Object.defineProperties(TransformStreamDefaultController2.prototype, {
        enqueue: { enumerable: true },
        error: { enumerable: true },
        terminate: { enumerable: true },
        desiredSize: { enumerable: true }
      });
      if (typeof SymbolPolyfill2.toStringTag === "symbol") {
        Object.defineProperty(TransformStreamDefaultController2.prototype, SymbolPolyfill2.toStringTag, {
          value: "TransformStreamDefaultController",
          configurable: true
        });
      }
      function IsTransformStreamDefaultController2(x3) {
        if (!typeIsObject2(x3)) {
          return false;
        }
        if (!Object.prototype.hasOwnProperty.call(x3, "_controlledTransformStream")) {
          return false;
        }
        return x3 instanceof TransformStreamDefaultController2;
      }
      function SetUpTransformStreamDefaultController2(stream, controller, transformAlgorithm, flushAlgorithm) {
        controller._controlledTransformStream = stream;
        stream._transformStreamController = controller;
        controller._transformAlgorithm = transformAlgorithm;
        controller._flushAlgorithm = flushAlgorithm;
      }
      function SetUpTransformStreamDefaultControllerFromTransformer2(stream, transformer) {
        const controller = Object.create(TransformStreamDefaultController2.prototype);
        let transformAlgorithm = (chunk) => {
          try {
            TransformStreamDefaultControllerEnqueue2(controller, chunk);
            return promiseResolvedWith2(void 0);
          } catch (transformResultE) {
            return promiseRejectedWith2(transformResultE);
          }
        };
        let flushAlgorithm = () => promiseResolvedWith2(void 0);
        if (transformer.transform !== void 0) {
          transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
        }
        if (transformer.flush !== void 0) {
          flushAlgorithm = () => transformer.flush(controller);
        }
        SetUpTransformStreamDefaultController2(stream, controller, transformAlgorithm, flushAlgorithm);
      }
      function TransformStreamDefaultControllerClearAlgorithms2(controller) {
        controller._transformAlgorithm = void 0;
        controller._flushAlgorithm = void 0;
      }
      function TransformStreamDefaultControllerEnqueue2(controller, chunk) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue2(readableController)) {
          throw new TypeError("Readable side is not in a state that permits enqueue");
        }
        try {
          ReadableStreamDefaultControllerEnqueue2(readableController, chunk);
        } catch (e3) {
          TransformStreamErrorWritableAndUnblockWrite2(stream, e3);
          throw stream._readable._storedError;
        }
        const backpressure = ReadableStreamDefaultControllerHasBackpressure2(readableController);
        if (backpressure !== stream._backpressure) {
          TransformStreamSetBackpressure2(stream, true);
        }
      }
      function TransformStreamDefaultControllerError2(controller, e3) {
        TransformStreamError2(controller._controlledTransformStream, e3);
      }
      function TransformStreamDefaultControllerPerformTransform2(controller, chunk) {
        const transformPromise = controller._transformAlgorithm(chunk);
        return transformPromiseWith2(transformPromise, void 0, (r3) => {
          TransformStreamError2(controller._controlledTransformStream, r3);
          throw r3;
        });
      }
      function TransformStreamDefaultControllerTerminate2(controller) {
        const stream = controller._controlledTransformStream;
        const readableController = stream._readable._readableStreamController;
        ReadableStreamDefaultControllerClose2(readableController);
        const error2 = new TypeError("TransformStream terminated");
        TransformStreamErrorWritableAndUnblockWrite2(stream, error2);
      }
      function TransformStreamDefaultSinkWriteAlgorithm2(stream, chunk) {
        const controller = stream._transformStreamController;
        if (stream._backpressure) {
          const backpressureChangePromise = stream._backpressureChangePromise;
          return transformPromiseWith2(backpressureChangePromise, () => {
            const writable = stream._writable;
            const state = writable._state;
            if (state === "erroring") {
              throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform2(controller, chunk);
          });
        }
        return TransformStreamDefaultControllerPerformTransform2(controller, chunk);
      }
      function TransformStreamDefaultSinkAbortAlgorithm2(stream, reason) {
        TransformStreamError2(stream, reason);
        return promiseResolvedWith2(void 0);
      }
      function TransformStreamDefaultSinkCloseAlgorithm2(stream) {
        const readable = stream._readable;
        const controller = stream._transformStreamController;
        const flushPromise = controller._flushAlgorithm();
        TransformStreamDefaultControllerClearAlgorithms2(controller);
        return transformPromiseWith2(flushPromise, () => {
          if (readable._state === "errored") {
            throw readable._storedError;
          }
          ReadableStreamDefaultControllerClose2(readable._readableStreamController);
        }, (r3) => {
          TransformStreamError2(stream, r3);
          throw readable._storedError;
        });
      }
      function TransformStreamDefaultSourcePullAlgorithm2(stream) {
        TransformStreamSetBackpressure2(stream, false);
        return stream._backpressureChangePromise;
      }
      function defaultControllerBrandCheckException2(name) {
        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
      }
      function streamBrandCheckException2(name) {
        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
      }
      exports2.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy2;
      exports2.CountQueuingStrategy = CountQueuingStrategy2;
      exports2.ReadableByteStreamController = ReadableByteStreamController2;
      exports2.ReadableStream = ReadableStream3;
      exports2.ReadableStreamBYOBReader = ReadableStreamBYOBReader2;
      exports2.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest2;
      exports2.ReadableStreamDefaultController = ReadableStreamDefaultController2;
      exports2.ReadableStreamDefaultReader = ReadableStreamDefaultReader2;
      exports2.TransformStream = TransformStream2;
      exports2.TransformStreamDefaultController = TransformStreamDefaultController2;
      exports2.WritableStream = WritableStream2;
      exports2.WritableStreamDefaultController = WritableStreamDefaultController2;
      exports2.WritableStreamDefaultWriter = WritableStreamDefaultWriter2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/fetch-blob/streams.cjs
var require_streams = __commonJS({
  "node_modules/fetch-blob/streams.cjs"() {
    var POOL_SIZE3 = 65536;
    if (!globalThis.ReadableStream) {
      try {
        const process2 = require("process");
        const { emitWarning } = process2;
        try {
          process2.emitWarning = () => {
          };
          Object.assign(globalThis, require("stream/web"));
          process2.emitWarning = emitWarning;
        } catch (error2) {
          process2.emitWarning = emitWarning;
          throw error2;
        }
      } catch (error2) {
        Object.assign(globalThis, require_ponyfill_es2018());
      }
    }
    try {
      const { Blob: Blob5 } = require("buffer");
      if (Blob5 && !Blob5.prototype.stream) {
        Blob5.prototype.stream = function name(params) {
          let position = 0;
          const blob = this;
          return new ReadableStream({
            type: "bytes",
            async pull(ctrl) {
              const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE3));
              const buffer = await chunk.arrayBuffer();
              position += buffer.byteLength;
              ctrl.enqueue(new Uint8Array(buffer));
              if (position === blob.size) {
                ctrl.close();
              }
            }
          });
        };
      }
    } catch (error2) {
    }
  }
});

// node_modules/fetch-blob/index.js
async function* toIterator(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0, b2 = part;
      while (position !== b2.size) {
        const chunk = b2.slice(position, Math.min(b2.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var import_streams, POOL_SIZE, _Blob, Blob2, fetch_blob_default;
var init_fetch_blob = __esm({
  "node_modules/fetch-blob/index.js"() {
    import_streams = __toESM(require_streams(), 1);
    POOL_SIZE = 65536;
    _Blob = class Blob {
      #parts = [];
      #type = "";
      #size = 0;
      #endings = "transparent";
      constructor(blobParts = [], options = {}) {
        if (typeof blobParts !== "object" || blobParts === null) {
          throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
        }
        if (typeof blobParts[Symbol.iterator] !== "function") {
          throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
        }
        if (typeof options !== "object" && typeof options !== "function") {
          throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
        }
        if (options === null)
          options = {};
        const encoder2 = new TextEncoder();
        for (const element of blobParts) {
          let part;
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0));
          } else if (element instanceof Blob) {
            part = element;
          } else {
            part = encoder2.encode(`${element}`);
          }
          this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
          this.#parts.push(part);
        }
        this.#endings = `${options.endings === void 0 ? "transparent" : options.endings}`;
        const type = options.type === void 0 ? "" : String(options.type);
        this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
      }
      get size() {
        return this.#size;
      }
      get type() {
        return this.#type;
      }
      async text() {
        const decoder = new TextDecoder();
        let str = "";
        for await (const part of toIterator(this.#parts, false)) {
          str += decoder.decode(part, { stream: true });
        }
        str += decoder.decode();
        return str;
      }
      async arrayBuffer() {
        const data = new Uint8Array(this.size);
        let offset = 0;
        for await (const chunk of toIterator(this.#parts, false)) {
          data.set(chunk, offset);
          offset += chunk.length;
        }
        return data.buffer;
      }
      stream() {
        const it = toIterator(this.#parts, true);
        return new globalThis.ReadableStream({
          type: "bytes",
          async pull(ctrl) {
            const chunk = await it.next();
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
          },
          async cancel() {
            await it.return();
          }
        });
      }
      slice(start = 0, end = this.size, type = "") {
        const { size } = this;
        let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
        let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
        const span = Math.max(relativeEnd - relativeStart, 0);
        const parts = this.#parts;
        const blobParts = [];
        let added = 0;
        for (const part of parts) {
          if (added >= span) {
            break;
          }
          const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
          if (relativeStart && size2 <= relativeStart) {
            relativeStart -= size2;
            relativeEnd -= size2;
          } else {
            let chunk;
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.byteLength;
            } else {
              chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
              added += chunk.size;
            }
            relativeEnd -= size2;
            blobParts.push(chunk);
            relativeStart = 0;
          }
        }
        const blob = new Blob([], { type: String(type).toLowerCase() });
        blob.#size = span;
        blob.#parts = blobParts;
        return blob;
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
      static [Symbol.hasInstance](object) {
        return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
      }
    };
    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    });
    Blob2 = _Blob;
    fetch_blob_default = Blob2;
  }
});

// node_modules/fetch-blob/file.js
var _File, File2, file_default;
var init_file = __esm({
  "node_modules/fetch-blob/file.js"() {
    init_fetch_blob();
    _File = class File extends fetch_blob_default {
      #lastModified = 0;
      #name = "";
      constructor(fileBits, fileName, options = {}) {
        if (arguments.length < 2) {
          throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
        }
        super(fileBits, options);
        if (options === null)
          options = {};
        const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
        if (!Number.isNaN(lastModified)) {
          this.#lastModified = lastModified;
        }
        this.#name = String(fileName);
      }
      get name() {
        return this.#name;
      }
      get lastModified() {
        return this.#lastModified;
      }
      get [Symbol.toStringTag]() {
        return "File";
      }
      static [Symbol.hasInstance](object) {
        return !!object && object instanceof fetch_blob_default && /^(File)$/.test(object[Symbol.toStringTag]);
      }
    };
    File2 = _File;
    file_default = File2;
  }
});

// node_modules/formdata-polyfill/esm.min.js
function formDataToBlob(F3, B2 = fetch_blob_default) {
  var b2 = `${r()}${r()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), c2 = [], p2 = `--${b2}\r
Content-Disposition: form-data; name="`;
  F3.forEach((v2, n2) => typeof v2 == "string" ? c2.push(p2 + e(n2) + `"\r
\r
${v2.replace(/\r(?!\n)|(?<!\r)\n/g, "\r\n")}\r
`) : c2.push(p2 + e(n2) + `"; filename="${e(v2.name, 1)}"\r
Content-Type: ${v2.type || "application/octet-stream"}\r
\r
`, v2, "\r\n"));
  c2.push(`--${b2}--`);
  return new B2(c2, { type: "multipart/form-data; boundary=" + b2 });
}
var t, i, h, r, m, f, e, x, FormData;
var init_esm_min = __esm({
  "node_modules/formdata-polyfill/esm.min.js"() {
    init_fetch_blob();
    init_file();
    ({ toStringTag: t, iterator: i, hasInstance: h } = Symbol);
    r = Math.random;
    m = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
    f = (a2, b2, c2) => (a2 += "", /^(Blob|File)$/.test(b2 && b2[t]) ? [(c2 = c2 !== void 0 ? c2 + "" : b2[t] == "File" ? b2.name : "blob", a2), b2.name !== c2 || b2[t] == "blob" ? new file_default([b2], c2, b2) : b2] : [a2, b2 + ""]);
    e = (c2, f4) => (f4 ? c2 : c2.replace(/\r?\n|\r/g, "\r\n")).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22");
    x = (n2, a2, e3) => {
      if (a2.length < e3) {
        throw new TypeError(`Failed to execute '${n2}' on 'FormData': ${e3} arguments required, but only ${a2.length} present.`);
      }
    };
    FormData = class FormData2 {
      #d = [];
      constructor(...a2) {
        if (a2.length)
          throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
      }
      get [t]() {
        return "FormData";
      }
      [i]() {
        return this.entries();
      }
      static [h](o2) {
        return o2 && typeof o2 === "object" && o2[t] === "FormData" && !m.some((m3) => typeof o2[m3] != "function");
      }
      append(...a2) {
        x("append", arguments, 2);
        this.#d.push(f(...a2));
      }
      delete(a2) {
        x("delete", arguments, 1);
        a2 += "";
        this.#d = this.#d.filter(([b2]) => b2 !== a2);
      }
      get(a2) {
        x("get", arguments, 1);
        a2 += "";
        for (var b2 = this.#d, l2 = b2.length, c2 = 0; c2 < l2; c2++)
          if (b2[c2][0] === a2)
            return b2[c2][1];
        return null;
      }
      getAll(a2, b2) {
        x("getAll", arguments, 1);
        b2 = [];
        a2 += "";
        this.#d.forEach((c2) => c2[0] === a2 && b2.push(c2[1]));
        return b2;
      }
      has(a2) {
        x("has", arguments, 1);
        a2 += "";
        return this.#d.some((b2) => b2[0] === a2);
      }
      forEach(a2, b2) {
        x("forEach", arguments, 1);
        for (var [c2, d2] of this)
          a2.call(b2, d2, c2, this);
      }
      set(...a2) {
        x("set", arguments, 2);
        var b2 = [], c2 = true;
        a2 = f(...a2);
        this.#d.forEach((d2) => {
          d2[0] === a2[0] ? c2 && (c2 = !b2.push(a2)) : b2.push(d2);
        });
        c2 && b2.push(a2);
        this.#d = b2;
      }
      *entries() {
        yield* this.#d;
      }
      *keys() {
        for (var [a2] of this)
          yield a2;
      }
      *values() {
        for (var [, a2] of this)
          yield a2;
      }
    };
  }
});

// node_modules/node-domexception/index.js
var require_node_domexception = __commonJS({
  "node_modules/node-domexception/index.js"(exports, module2) {
    if (!globalThis.DOMException) {
      try {
        const { MessageChannel } = require("worker_threads"), port = new MessageChannel().port1, ab = new ArrayBuffer();
        port.postMessage(ab, [ab, ab]);
      } catch (err) {
        err.constructor.name === "DOMException" && (globalThis.DOMException = err.constructor);
      }
    }
    module2.exports = globalThis.DOMException;
  }
});

// node_modules/fetch-blob/from.js
var import_node_fs, import_node_path, import_node_domexception, stat, BlobDataItem;
var init_from = __esm({
  "node_modules/fetch-blob/from.js"() {
    import_node_fs = require("fs");
    import_node_path = require("path");
    import_node_domexception = __toESM(require_node_domexception(), 1);
    init_file();
    init_fetch_blob();
    ({ stat } = import_node_fs.promises);
    BlobDataItem = class {
      #path;
      #start;
      constructor(options) {
        this.#path = options.path;
        this.#start = options.start;
        this.size = options.size;
        this.lastModified = options.lastModified;
      }
      slice(start, end) {
        return new BlobDataItem({
          path: this.#path,
          lastModified: this.lastModified,
          size: end - start,
          start: this.#start + start
        });
      }
      async *stream() {
        const { mtimeMs } = await stat(this.#path);
        if (mtimeMs > this.lastModified) {
          throw new import_node_domexception.default("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
        }
        yield* (0, import_node_fs.createReadStream)(this.#path, {
          start: this.#start,
          end: this.#start + this.size - 1
        });
      }
      get [Symbol.toStringTag]() {
        return "Blob";
      }
    };
  }
});

// node_modules/node-fetch/src/utils/multipart-parser.js
var multipart_parser_exports = {};
__export(multipart_parser_exports, {
  toFormData: () => toFormData
});
function _fileName(headerValue) {
  const m3 = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
  if (!m3) {
    return;
  }
  const match = m3[2] || m3[3] || "";
  let filename = match.slice(match.lastIndexOf("\\") + 1);
  filename = filename.replace(/%22/g, '"');
  filename = filename.replace(/&#(\d{4});/g, (m4, code) => {
    return String.fromCharCode(code);
  });
  return filename;
}
async function toFormData(Body2, ct) {
  if (!/multipart/i.test(ct)) {
    throw new TypeError("Failed to fetch");
  }
  const m3 = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
  if (!m3) {
    throw new TypeError("no or bad content-type header, no multipart boundary");
  }
  const parser = new MultipartParser(m3[1] || m3[2]);
  let headerField;
  let headerValue;
  let entryValue;
  let entryName;
  let contentType;
  let filename;
  const entryChunks = [];
  const formData = new FormData();
  const onPartData = (ui8a) => {
    entryValue += decoder.decode(ui8a, { stream: true });
  };
  const appendToFile = (ui8a) => {
    entryChunks.push(ui8a);
  };
  const appendFileToFormData = () => {
    const file2 = new file_default(entryChunks, filename, { type: contentType });
    formData.append(entryName, file2);
  };
  const appendEntryToFormData = () => {
    formData.append(entryName, entryValue);
  };
  const decoder = new TextDecoder("utf-8");
  decoder.decode();
  parser.onPartBegin = function() {
    parser.onPartData = onPartData;
    parser.onPartEnd = appendEntryToFormData;
    headerField = "";
    headerValue = "";
    entryValue = "";
    entryName = "";
    contentType = "";
    filename = null;
    entryChunks.length = 0;
  };
  parser.onHeaderField = function(ui8a) {
    headerField += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderValue = function(ui8a) {
    headerValue += decoder.decode(ui8a, { stream: true });
  };
  parser.onHeaderEnd = function() {
    headerValue += decoder.decode();
    headerField = headerField.toLowerCase();
    if (headerField === "content-disposition") {
      const m4 = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
      if (m4) {
        entryName = m4[2] || m4[3] || "";
      }
      filename = _fileName(headerValue);
      if (filename) {
        parser.onPartData = appendToFile;
        parser.onPartEnd = appendFileToFormData;
      }
    } else if (headerField === "content-type") {
      contentType = headerValue;
    }
    headerValue = "";
    headerField = "";
  };
  for await (const chunk of Body2) {
    parser.write(chunk);
  }
  parser.end();
  return formData;
}
var s, S, f2, F, LF, CR, SPACE, HYPHEN, COLON, A, Z, lower, noop, MultipartParser;
var init_multipart_parser = __esm({
  "node_modules/node-fetch/src/utils/multipart-parser.js"() {
    init_from();
    init_esm_min();
    s = 0;
    S = {
      START_BOUNDARY: s++,
      HEADER_FIELD_START: s++,
      HEADER_FIELD: s++,
      HEADER_VALUE_START: s++,
      HEADER_VALUE: s++,
      HEADER_VALUE_ALMOST_DONE: s++,
      HEADERS_ALMOST_DONE: s++,
      PART_DATA_START: s++,
      PART_DATA: s++,
      END: s++
    };
    f2 = 1;
    F = {
      PART_BOUNDARY: f2,
      LAST_BOUNDARY: f2 *= 2
    };
    LF = 10;
    CR = 13;
    SPACE = 32;
    HYPHEN = 45;
    COLON = 58;
    A = 97;
    Z = 122;
    lower = (c2) => c2 | 32;
    noop = () => {
    };
    MultipartParser = class {
      constructor(boundary) {
        this.index = 0;
        this.flags = 0;
        this.onHeaderEnd = noop;
        this.onHeaderField = noop;
        this.onHeadersEnd = noop;
        this.onHeaderValue = noop;
        this.onPartBegin = noop;
        this.onPartData = noop;
        this.onPartEnd = noop;
        this.boundaryChars = {};
        boundary = "\r\n--" + boundary;
        const ui8a = new Uint8Array(boundary.length);
        for (let i3 = 0; i3 < boundary.length; i3++) {
          ui8a[i3] = boundary.charCodeAt(i3);
          this.boundaryChars[ui8a[i3]] = true;
        }
        this.boundary = ui8a;
        this.lookbehind = new Uint8Array(this.boundary.length + 8);
        this.state = S.START_BOUNDARY;
      }
      write(data) {
        let i3 = 0;
        const length_ = data.length;
        let previousIndex = this.index;
        let { lookbehind, boundary, boundaryChars, index, state, flags } = this;
        const boundaryLength = this.boundary.length;
        const boundaryEnd = boundaryLength - 1;
        const bufferLength = data.length;
        let c2;
        let cl;
        const mark = (name) => {
          this[name + "Mark"] = i3;
        };
        const clear = (name) => {
          delete this[name + "Mark"];
        };
        const callback = (callbackSymbol, start, end, ui8a) => {
          if (start === void 0 || start !== end) {
            this[callbackSymbol](ui8a && ui8a.subarray(start, end));
          }
        };
        const dataCallback = (name, clear2) => {
          const markSymbol = name + "Mark";
          if (!(markSymbol in this)) {
            return;
          }
          if (clear2) {
            callback(name, this[markSymbol], i3, data);
            delete this[markSymbol];
          } else {
            callback(name, this[markSymbol], data.length, data);
            this[markSymbol] = 0;
          }
        };
        for (i3 = 0; i3 < length_; i3++) {
          c2 = data[i3];
          switch (state) {
            case S.START_BOUNDARY:
              if (index === boundary.length - 2) {
                if (c2 === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else if (c2 !== CR) {
                  return;
                }
                index++;
                break;
              } else if (index - 1 === boundary.length - 2) {
                if (flags & F.LAST_BOUNDARY && c2 === HYPHEN) {
                  state = S.END;
                  flags = 0;
                } else if (!(flags & F.LAST_BOUNDARY) && c2 === LF) {
                  index = 0;
                  callback("onPartBegin");
                  state = S.HEADER_FIELD_START;
                } else {
                  return;
                }
                break;
              }
              if (c2 !== boundary[index + 2]) {
                index = -2;
              }
              if (c2 === boundary[index + 2]) {
                index++;
              }
              break;
            case S.HEADER_FIELD_START:
              state = S.HEADER_FIELD;
              mark("onHeaderField");
              index = 0;
            case S.HEADER_FIELD:
              if (c2 === CR) {
                clear("onHeaderField");
                state = S.HEADERS_ALMOST_DONE;
                break;
              }
              index++;
              if (c2 === HYPHEN) {
                break;
              }
              if (c2 === COLON) {
                if (index === 1) {
                  return;
                }
                dataCallback("onHeaderField", true);
                state = S.HEADER_VALUE_START;
                break;
              }
              cl = lower(c2);
              if (cl < A || cl > Z) {
                return;
              }
              break;
            case S.HEADER_VALUE_START:
              if (c2 === SPACE) {
                break;
              }
              mark("onHeaderValue");
              state = S.HEADER_VALUE;
            case S.HEADER_VALUE:
              if (c2 === CR) {
                dataCallback("onHeaderValue", true);
                callback("onHeaderEnd");
                state = S.HEADER_VALUE_ALMOST_DONE;
              }
              break;
            case S.HEADER_VALUE_ALMOST_DONE:
              if (c2 !== LF) {
                return;
              }
              state = S.HEADER_FIELD_START;
              break;
            case S.HEADERS_ALMOST_DONE:
              if (c2 !== LF) {
                return;
              }
              callback("onHeadersEnd");
              state = S.PART_DATA_START;
              break;
            case S.PART_DATA_START:
              state = S.PART_DATA;
              mark("onPartData");
            case S.PART_DATA:
              previousIndex = index;
              if (index === 0) {
                i3 += boundaryEnd;
                while (i3 < bufferLength && !(data[i3] in boundaryChars)) {
                  i3 += boundaryLength;
                }
                i3 -= boundaryEnd;
                c2 = data[i3];
              }
              if (index < boundary.length) {
                if (boundary[index] === c2) {
                  if (index === 0) {
                    dataCallback("onPartData", true);
                  }
                  index++;
                } else {
                  index = 0;
                }
              } else if (index === boundary.length) {
                index++;
                if (c2 === CR) {
                  flags |= F.PART_BOUNDARY;
                } else if (c2 === HYPHEN) {
                  flags |= F.LAST_BOUNDARY;
                } else {
                  index = 0;
                }
              } else if (index - 1 === boundary.length) {
                if (flags & F.PART_BOUNDARY) {
                  index = 0;
                  if (c2 === LF) {
                    flags &= ~F.PART_BOUNDARY;
                    callback("onPartEnd");
                    callback("onPartBegin");
                    state = S.HEADER_FIELD_START;
                    break;
                  }
                } else if (flags & F.LAST_BOUNDARY) {
                  if (c2 === HYPHEN) {
                    callback("onPartEnd");
                    state = S.END;
                    flags = 0;
                  } else {
                    index = 0;
                  }
                } else {
                  index = 0;
                }
              }
              if (index > 0) {
                lookbehind[index - 1] = c2;
              } else if (previousIndex > 0) {
                const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
                callback("onPartData", 0, previousIndex, _lookbehind);
                previousIndex = 0;
                mark("onPartData");
                i3--;
              }
              break;
            case S.END:
              break;
            default:
              throw new Error(`Unexpected state entered: ${state}`);
          }
        }
        dataCallback("onHeaderField");
        dataCallback("onHeaderValue");
        dataCallback("onPartData");
        this.index = index;
        this.state = state;
        this.flags = flags;
      }
      end() {
        if (this.state === S.HEADER_FIELD_START && this.index === 0 || this.state === S.PART_DATA && this.index === this.boundary.length) {
          this.onPartEnd();
        } else if (this.state !== S.END) {
          throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      }
    };
  }
});

// node_modules/mime/Mime.js
var require_Mime = __commonJS({
  "node_modules/mime/Mime.js"(exports, module2) {
    "use strict";
    function Mime() {
      this._types = /* @__PURE__ */ Object.create(null);
      this._extensions = /* @__PURE__ */ Object.create(null);
      for (let i3 = 0; i3 < arguments.length; i3++) {
        this.define(arguments[i3]);
      }
      this.define = this.define.bind(this);
      this.getType = this.getType.bind(this);
      this.getExtension = this.getExtension.bind(this);
    }
    Mime.prototype.define = function(typeMap, force) {
      for (let type in typeMap) {
        let extensions = typeMap[type].map(function(t3) {
          return t3.toLowerCase();
        });
        type = type.toLowerCase();
        for (let i3 = 0; i3 < extensions.length; i3++) {
          const ext = extensions[i3];
          if (ext[0] === "*") {
            continue;
          }
          if (!force && ext in this._types) {
            throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
          }
          this._types[ext] = type;
        }
        if (force || !this._extensions[type]) {
          const ext = extensions[0];
          this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
        }
      }
    };
    Mime.prototype.getType = function(path) {
      path = String(path);
      let last = path.replace(/^.*[/\\]/, "").toLowerCase();
      let ext = last.replace(/^.*\./, "").toLowerCase();
      let hasPath = last.length < path.length;
      let hasDot = ext.length < last.length - 1;
      return (hasDot || !hasPath) && this._types[ext] || null;
    };
    Mime.prototype.getExtension = function(type) {
      type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
      return type && this._extensions[type.toLowerCase()] || null;
    };
    module2.exports = Mime;
  }
});

// node_modules/mime/types/standard.js
var require_standard = __commonJS({
  "node_modules/mime/types/standard.js"(exports, module2) {
    module2.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  }
});

// node_modules/mime/types/other.js
var require_other = __commonJS({
  "node_modules/mime/types/other.js"(exports, module2) {
    module2.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  }
});

// node_modules/mime/index.js
var require_mime = __commonJS({
  "node_modules/mime/index.js"(exports, module2) {
    "use strict";
    var Mime = require_Mime();
    module2.exports = new Mime(require_standard(), require_other());
  }
});

// node_modules/eastasianwidth/eastasianwidth.js
var require_eastasianwidth = __commonJS({
  "node_modules/eastasianwidth/eastasianwidth.js"(exports, module2) {
    var eaw = {};
    if (typeof module2 == "undefined") {
      window.eastasianwidth = eaw;
    } else {
      module2.exports = eaw;
    }
    eaw.eastAsianWidth = function(character) {
      var x3 = character.charCodeAt(0);
      var y2 = character.length == 2 ? character.charCodeAt(1) : 0;
      var codePoint = x3;
      if (55296 <= x3 && x3 <= 56319 && (56320 <= y2 && y2 <= 57343)) {
        x3 &= 1023;
        y2 &= 1023;
        codePoint = x3 << 10 | y2;
        codePoint += 65536;
      }
      if (codePoint == 12288 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
        return "F";
      }
      if (codePoint == 8361 || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
        return "H";
      }
      if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
        return "W";
      }
      if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || codePoint == 172 || codePoint == 175 || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
        return "Na";
      }
      if (codePoint == 161 || codePoint == 164 || 167 <= codePoint && codePoint <= 168 || codePoint == 170 || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || codePoint == 198 || codePoint == 208 || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || codePoint == 230 || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || codePoint == 240 || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || codePoint == 252 || codePoint == 254 || codePoint == 257 || codePoint == 273 || codePoint == 275 || codePoint == 283 || 294 <= codePoint && codePoint <= 295 || codePoint == 299 || 305 <= codePoint && codePoint <= 307 || codePoint == 312 || 319 <= codePoint && codePoint <= 322 || codePoint == 324 || 328 <= codePoint && codePoint <= 331 || codePoint == 333 || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || codePoint == 363 || codePoint == 462 || codePoint == 464 || codePoint == 466 || codePoint == 468 || codePoint == 470 || codePoint == 472 || codePoint == 474 || codePoint == 476 || codePoint == 593 || codePoint == 609 || codePoint == 708 || codePoint == 711 || 713 <= codePoint && codePoint <= 715 || codePoint == 717 || codePoint == 720 || 728 <= codePoint && codePoint <= 731 || codePoint == 733 || codePoint == 735 || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || codePoint == 1025 || 1040 <= codePoint && codePoint <= 1103 || codePoint == 1105 || codePoint == 8208 || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || codePoint == 8240 || 8242 <= codePoint && codePoint <= 8243 || codePoint == 8245 || codePoint == 8251 || codePoint == 8254 || codePoint == 8308 || codePoint == 8319 || 8321 <= codePoint && codePoint <= 8324 || codePoint == 8364 || codePoint == 8451 || codePoint == 8453 || codePoint == 8457 || codePoint == 8467 || codePoint == 8470 || 8481 <= codePoint && codePoint <= 8482 || codePoint == 8486 || codePoint == 8491 || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || codePoint == 8585 || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || codePoint == 8658 || codePoint == 8660 || codePoint == 8679 || codePoint == 8704 || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || codePoint == 8715 || codePoint == 8719 || codePoint == 8721 || codePoint == 8725 || codePoint == 8730 || 8733 <= codePoint && codePoint <= 8736 || codePoint == 8739 || codePoint == 8741 || 8743 <= codePoint && codePoint <= 8748 || codePoint == 8750 || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || codePoint == 8776 || codePoint == 8780 || codePoint == 8786 || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || codePoint == 8853 || codePoint == 8857 || codePoint == 8869 || codePoint == 8895 || codePoint == 8978 || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || codePoint == 9675 || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || codePoint == 9711 || 9733 <= codePoint && codePoint <= 9734 || codePoint == 9737 || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || codePoint == 9756 || codePoint == 9758 || codePoint == 9792 || codePoint == 9794 || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || codePoint == 9839 || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || codePoint == 9955 || 9960 <= codePoint && codePoint <= 9983 || codePoint == 10045 || codePoint == 10071 || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || codePoint == 65533 || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
        return "A";
      }
      return "N";
    };
    eaw.characterLength = function(character) {
      var code = this.eastAsianWidth(character);
      if (code == "F" || code == "W" || code == "A") {
        return 2;
      } else {
        return 1;
      }
    };
    function stringToArray(string) {
      return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
    }
    eaw.length = function(string) {
      var characters = stringToArray(string);
      var len = 0;
      for (var i3 = 0; i3 < characters.length; i3++) {
        len = len + this.characterLength(characters[i3]);
      }
      return len;
    };
    eaw.slice = function(text, start, end) {
      textLen = eaw.length(text);
      start = start ? start : 0;
      end = end ? end : 1;
      if (start < 0) {
        start = textLen + start;
      }
      if (end < 0) {
        end = textLen + end;
      }
      var result = "";
      var eawLen = 0;
      var chars = stringToArray(text);
      for (var i3 = 0; i3 < chars.length; i3++) {
        var char = chars[i3];
        var charLen = eaw.length(char);
        if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
          if (eawLen + charLen <= end) {
            result += char;
          } else {
            break;
          }
        }
        eawLen += charLen;
      }
      return result;
    };
  }
});

// node_modules/emoji-regex/index.js
var require_emoji_regex = __commonJS({
  "node_modules/emoji-regex/index.js"(exports, module2) {
    "use strict";
    module2.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
});

// node_modules/path-browserify/index.js
var require_path_browserify = __commonJS({
  "node_modules/path-browserify/index.js"(exports, module2) {
    "use strict";
    function assertPath(path) {
      if (typeof path !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
      }
    }
    function normalizeStringPosix(path, allowAboveRoot) {
      var res = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i3 = 0; i3 <= path.length; ++i3) {
        if (i3 < path.length)
          code = path.charCodeAt(i3);
        else if (code === 47)
          break;
        else
          code = 47;
        if (code === 47) {
          if (lastSlash === i3 - 1 || dots === 1) {
          } else if (lastSlash !== i3 - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf("/");
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = "";
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                  }
                  lastSlash = i3;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = "";
                lastSegmentLength = 0;
                lastSlash = i3;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += "/..";
              else
                res = "..";
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0)
              res += "/" + path.slice(lastSlash + 1, i3);
            else
              res = path.slice(lastSlash + 1, i3);
            lastSegmentLength = i3 - lastSlash - 1;
          }
          lastSlash = i3;
          dots = 0;
        } else if (code === 46 && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }
    var posix = {
      resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for (var i3 = arguments.length - 1; i3 >= -1 && !resolvedAbsolute; i3--) {
          var path;
          if (i3 >= 0)
            path = arguments[i3];
          else {
            if (cwd === void 0)
              cwd = process.cwd();
            path = cwd;
          }
          assertPath(path);
          if (path.length === 0) {
            continue;
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = path.charCodeAt(0) === 47;
        }
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return "/" + resolvedPath;
          else
            return "/";
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return ".";
        }
      },
      normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0)
          return ".";
        var isAbsolute = path.charCodeAt(0) === 47;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute)
          path = ".";
        if (path.length > 0 && trailingSeparator)
          path += "/";
        if (isAbsolute)
          return "/" + path;
        return path;
      },
      isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0)
          return ".";
        var joined;
        for (var i3 = 0; i3 < arguments.length; ++i3) {
          var arg = arguments[i3];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === void 0)
              joined = arg;
            else
              joined += "/" + arg;
          }
        }
        if (joined === void 0)
          return ".";
        return posix.normalize(joined);
      },
      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to)
          return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to)
          return "";
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47)
            break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i3 = 0;
        for (; i3 <= length; ++i3) {
          if (i3 === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i3) === 47) {
                return to.slice(toStart + i3 + 1);
              } else if (i3 === 0) {
                return to.slice(toStart + i3);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i3) === 47) {
                lastCommonSep = i3;
              } else if (i3 === 0) {
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i3);
          var toCode = to.charCodeAt(toStart + i3);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47)
            lastCommonSep = i3;
        }
        var out = "";
        for (i3 = fromStart + lastCommonSep + 1; i3 <= fromEnd; ++i3) {
          if (i3 === fromEnd || from.charCodeAt(i3) === 47) {
            if (out.length === 0)
              out += "..";
            else
              out += "/..";
          }
        }
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47)
            ++toStart;
          return to.slice(toStart);
        }
      },
      _makeLong: function _makeLong(path) {
        return path;
      },
      dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0)
          return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47;
        var end = -1;
        var matchedSlash = true;
        for (var i3 = path.length - 1; i3 >= 1; --i3) {
          code = path.charCodeAt(i3);
          if (code === 47) {
            if (!matchedSlash) {
              end = i3;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1)
          return hasRoot ? "/" : ".";
        if (hasRoot && end === 1)
          return "//";
        return path.slice(0, end);
      },
      basename: function basename2(path, ext) {
        if (ext !== void 0 && typeof ext !== "string")
          throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i3;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
          if (ext.length === path.length && ext === path)
            return "";
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i3 = path.length - 1; i3 >= 0; --i3) {
            var code = path.charCodeAt(i3);
            if (code === 47) {
              if (!matchedSlash) {
                start = i3 + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i3 + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i3;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end)
            end = firstNonSlashEnd;
          else if (end === -1)
            end = path.length;
          return path.slice(start, end);
        } else {
          for (i3 = path.length - 1; i3 >= 0; --i3) {
            if (path.charCodeAt(i3) === 47) {
              if (!matchedSlash) {
                start = i3 + 1;
                break;
              }
            } else if (end === -1) {
              matchedSlash = false;
              end = i3 + 1;
            }
          }
          if (end === -1)
            return "";
          return path.slice(start, end);
        }
      },
      extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var preDotState = 0;
        for (var i3 = path.length - 1; i3 >= 0; --i3) {
          var code = path.charCodeAt(i3);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i3 + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i3 + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i3;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path.slice(startDot, end);
      },
      format: function format2(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format("/", pathObject);
      },
      parse: function parse(path) {
        assertPath(path);
        var ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path.length === 0)
          return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47;
        var start;
        if (isAbsolute) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i3 = path.length - 1;
        var preDotState = 0;
        for (; i3 >= start; --i3) {
          code = path.charCodeAt(i3);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i3 + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i3 + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i3;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute)
              ret.base = ret.name = path.slice(1, end);
            else
              ret.base = ret.name = path.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot);
            ret.base = path.slice(1, end);
          } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
          }
          ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0)
          ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute)
          ret.dir = "/";
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    posix.posix = posix;
    module2.exports = posix;
  }
});

// node_modules/path-to-regexp/dist/index.js
var require_dist = __commonJS({
  "node_modules/path-to-regexp/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pathToRegexp = exports.tokensToRegexp = exports.regexpToFunction = exports.match = exports.tokensToFunction = exports.compile = exports.parse = void 0;
    function lexer(str) {
      var tokens = [];
      var i3 = 0;
      while (i3 < str.length) {
        var char = str[i3];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i3, value: str[i3++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i3++, value: str[i3++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i3, value: str[i3++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i3, value: str[i3++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i3 + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at ".concat(i3));
          tokens.push({ type: "NAME", index: i3, value: name });
          i3 = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i3 + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at '.concat(j));
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at ".concat(j));
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at ".concat(i3));
          if (!pattern)
            throw new TypeError("Missing pattern at ".concat(i3));
          tokens.push({ type: "PATTERN", index: i3, value: pattern });
          i3 = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i3, value: str[i3++] });
      }
      tokens.push({ type: "END", index: i3, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a2 = options.prefixes, prefixes = _a2 === void 0 ? "./" : _a2;
      var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
      var result = [];
      var key = 0;
      var i3 = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i3 < tokens.length && tokens[i3].type === type)
          return tokens[i3++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a3 = tokens[i3], nextType = _a3.type, index = _a3.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i3 < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports.parse = parse;
    function compile2(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile2;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a2 = options.encode, encode = _a2 === void 0 ? function(x3) {
        return x3;
      } : _a2, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i3 = 0; i3 < tokens.length; i3++) {
          var token = tokens[i3];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i3].test(segment)) {
                throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i3].test(segment)) {
              throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
        }
        return path;
      };
    }
    exports.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys2 = [];
      var re = pathToRegexp(str, keys2, options);
      return regexpToFunction(re, keys2, options);
    }
    exports.match = match;
    function regexpToFunction(re, keys2, options) {
      if (options === void 0) {
        options = {};
      }
      var _a2 = options.decode, decode = _a2 === void 0 ? function(x3) {
        return x3;
      } : _a2;
      return function(pathname) {
        var m3 = re.exec(pathname);
        if (!m3)
          return false;
        var path = m3[0], index = m3.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i4) {
          if (m3[i4] === void 0)
            return "continue";
          var key = keys2[i4 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m3[i4].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m3[i4], key);
          }
        };
        for (var i3 = 1; i3 < m3.length; i3++) {
          _loop_1(i3);
        }
        return { path, index, params };
      };
    }
    exports.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys2) {
      if (!keys2)
        return path;
      var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      var index = 0;
      var execResult = groupsRegex.exec(path.source);
      while (execResult) {
        keys2.push({
          name: execResult[1] || index++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
      }
      return path;
    }
    function arrayToRegexp(paths, keys2, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp(path, keys2, options).source;
      });
      return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
    }
    function stringToRegexp(path, keys2, options) {
      return tokensToRegexp(parse(path, options), keys2, options);
    }
    function tokensToRegexp(tokens, keys2, options) {
      if (options === void 0) {
        options = {};
      }
      var _a2 = options.strict, strict = _a2 === void 0 ? false : _a2, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x3) {
        return x3;
      } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
      var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
      var delimiterRe = "[".concat(escapeString(delimiter), "]");
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys2)
              keys2.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
              } else {
                route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
              }
            } else {
              if (token.modifier === "+" || token.modifier === "*") {
                route += "((?:".concat(token.pattern, ")").concat(token.modifier, ")");
              } else {
                route += "(".concat(token.pattern, ")").concat(token.modifier);
              }
            }
          } else {
            route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
          }
        }
      }
      if (end) {
        if (!strict)
          route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
          route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
      }
      return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    function pathToRegexp(path, keys2, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys2);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys2, options);
      return stringToRegexp(path, keys2, options);
    }
    exports.pathToRegexp = pathToRegexp;
  }
});

// .netlify/functions-internal/entry.mjs
var entry_exports = {};
__export(entry_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(entry_exports);

// node_modules/@astrojs/netlify/dist/netlify-functions.js
var netlify_functions_exports = {};
__export(netlify_functions_exports, {
  createExports: () => createExports
});

// node_modules/@astrojs/webapi/mod.js
var import_node_perf_hooks = require("perf_hooks");
var import_node_timers = require("timers");

// node_modules/node-fetch/src/index.js
var import_node_http2 = __toESM(require("http"), 1);
var import_node_https = __toESM(require("https"), 1);
var import_node_zlib = __toESM(require("zlib"), 1);
var import_node_stream2 = __toESM(require("stream"), 1);
var import_node_buffer2 = require("buffer");

// node_modules/data-uri-to-buffer/dist/index.js
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i3 = 1; i3 < meta.length; i3++) {
    if (meta[i3] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i3]}`;
      if (meta[i3].indexOf("charset=") === 0) {
        charset = meta[i3].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var dist_default = dataUriToBuffer;

// node_modules/node-fetch/src/body.js
var import_node_stream = __toESM(require("stream"), 1);
var import_node_util = require("util");
var import_node_buffer = require("buffer");
init_fetch_blob();
init_esm_min();

// node_modules/node-fetch/src/errors/base.js
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};

// node_modules/node-fetch/src/errors/fetch-error.js
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};

// node_modules/node-fetch/src/utils/is.js
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return object && typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
var isAbortSignal = (object) => {
  return typeof object === "object" && (object[NAME] === "AbortSignal" || object[NAME] === "EventTarget");
};
var isDomainOrSubdomain = (destination, original) => {
  const orig = new URL(original).hostname;
  const dest = new URL(destination).hostname;
  return orig === dest || orig.endsWith(`.${dest}`);
};
var isSameProtocol = (destination, original) => {
  const orig = new URL(original).protocol;
  const dest = new URL(destination).protocol;
  return orig === dest;
};

// node_modules/node-fetch/src/body.js
var pipeline = (0, import_node_util.promisify)(import_node_stream.default.pipeline);
var INTERNALS = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = import_node_buffer.Buffer.from(body.toString());
    } else if (isBlob(body)) {
    } else if (import_node_buffer.Buffer.isBuffer(body)) {
    } else if (import_node_util.types.isAnyArrayBuffer(body)) {
      body = import_node_buffer.Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = import_node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_node_stream.default) {
    } else if (body instanceof FormData) {
      body = formDataToBlob(body);
      boundary = body.type.split("=")[1];
    } else {
      body = import_node_buffer.Buffer.from(String(body));
    }
    let stream = body;
    if (import_node_buffer.Buffer.isBuffer(body)) {
      stream = import_node_stream.default.Readable.from(body);
    } else if (isBlob(body)) {
      stream = import_node_stream.default.Readable.from(body.stream());
    }
    this[INTERNALS] = {
      body,
      stream,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_node_stream.default) {
      body.on("error", (error_) => {
        const error2 = error_ instanceof FetchBaseError ? error_ : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, "system", error_);
        this[INTERNALS].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS].stream;
  }
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async formData() {
    const ct = this.headers.get("content-type");
    if (ct.startsWith("application/x-www-form-urlencoded")) {
      const formData = new FormData();
      const parameters = new URLSearchParams(await this.text());
      for (const [name, value] of parameters) {
        formData.append(name, value);
      }
      return formData;
    }
    const { toFormData: toFormData2 } = await Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
    return toFormData2(this.body, ct);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS].body && this[INTERNALS].body.type || "";
    const buf = await this.arrayBuffer();
    return new fetch_blob_default([buf], {
      type: ct
    });
  }
  async json() {
    const text = await this.text();
    return JSON.parse(text);
  }
  async text() {
    const buffer = await consumeBody(this);
    return new TextDecoder().decode(buffer);
  }
  buffer() {
    return consumeBody(this);
  }
};
Body.prototype.buffer = (0, import_node_util.deprecate)(Body.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer");
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true },
  data: { get: (0, import_node_util.deprecate)(() => {
  }, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") }
});
async function consumeBody(data) {
  if (data[INTERNALS].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS].disturbed = true;
  if (data[INTERNALS].error) {
    throw data[INTERNALS].error;
  }
  const { body } = data;
  if (body === null) {
    return import_node_buffer.Buffer.alloc(0);
  }
  if (!(body instanceof import_node_stream.default)) {
    return import_node_buffer.Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const error2 = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(error2);
        throw error2;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    const error_ = error2 instanceof FetchBaseError ? error2 : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    throw error_;
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c2) => typeof c2 === "string")) {
        return import_node_buffer.Buffer.from(accum.join(""));
      }
      return import_node_buffer.Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance[INTERNALS];
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_node_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_node_stream.PassThrough({ highWaterMark });
    p2 = new import_node_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS].stream = p1;
    body = p2;
  }
  return body;
};
var getNonSpecFormDataBoundary = (0, import_node_util.deprecate)((body) => body.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (import_node_buffer.Buffer.isBuffer(body) || import_node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body instanceof FormData) {
    return `multipart/form-data; boundary=${request[INTERNALS].boundary}`;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
  }
  if (body instanceof import_node_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request[INTERNALS];
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (import_node_buffer.Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  return null;
};
var writeToStream = async (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else {
    await pipeline(body, dest);
  }
};

// node_modules/node-fetch/src/headers.js
var import_node_util2 = require("util");
var import_node_http = __toESM(require("http"), 1);
var validateHeaderName = typeof import_node_http.default.validateHeaderName === "function" ? import_node_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const error2 = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(error2, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw error2;
  }
};
var validateHeaderValue = typeof import_node_http.default.validateHeaderValue === "function" ? import_node_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const error2 = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(error2, "code", { value: "ERR_INVALID_CHAR" });
    throw error2;
  }
};
var Headers2 = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers2) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null) {
    } else if (typeof init2 === "object" && !import_node_util2.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_node_util2.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p2, receiver) {
        switch (p2) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p2].call(target, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p2].call(target, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p2, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback, thisArg = void 0) {
    for (const name of this.keys()) {
      Reflect.apply(callback, thisArg, [this.get(name), name, this]);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers2.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers2(headers.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}

// node_modules/node-fetch/src/utils/is-redirect.js
var redirectStatus = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};

// node_modules/node-fetch/src/response.js
var INTERNALS2 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options = {}) {
    super(body, options);
    const status = options.status != null ? options.status : 200;
    const headers = new Headers2(options.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS2] = {
      type: "default",
      url: options.url,
      status,
      statusText: options.statusText || "",
      headers,
      counter: options.counter,
      highWaterMark: options.highWaterMark
    };
  }
  get type() {
    return this[INTERNALS2].type;
  }
  get url() {
    return this[INTERNALS2].url || "";
  }
  get status() {
    return this[INTERNALS2].status;
  }
  get ok() {
    return this[INTERNALS2].status >= 200 && this[INTERNALS2].status < 300;
  }
  get redirected() {
    return this[INTERNALS2].counter > 0;
  }
  get statusText() {
    return this[INTERNALS2].statusText;
  }
  get headers() {
    return this[INTERNALS2].headers;
  }
  get highWaterMark() {
    return this[INTERNALS2].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      type: this.type,
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size,
      highWaterMark: this.highWaterMark
    });
  }
  static redirect(url2, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url2).toString()
      },
      status
    });
  }
  static error() {
    const response = new Response2(null, { status: 0, statusText: "" });
    response[INTERNALS2].type = "error";
    return response;
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  type: { enumerable: true },
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});

// node_modules/node-fetch/src/request.js
var import_node_url = require("url");
var import_node_util3 = require("util");

// node_modules/node-fetch/src/utils/get-search.js
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash.length] === "?" ? "?" : "";
};

// node_modules/node-fetch/src/utils/referrer.js
var import_node_net = require("net");
function stripURLForUseAsAReferrer(url2, originOnly = false) {
  if (url2 == null) {
    return "no-referrer";
  }
  url2 = new URL(url2);
  if (/^(about|blob|data):$/.test(url2.protocol)) {
    return "no-referrer";
  }
  url2.username = "";
  url2.password = "";
  url2.hash = "";
  if (originOnly) {
    url2.pathname = "";
    url2.search = "";
  }
  return url2;
}
var ReferrerPolicy = /* @__PURE__ */ new Set([
  "",
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
]);
var DEFAULT_REFERRER_POLICY = "strict-origin-when-cross-origin";
function validateReferrerPolicy(referrerPolicy) {
  if (!ReferrerPolicy.has(referrerPolicy)) {
    throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
  }
  return referrerPolicy;
}
function isOriginPotentiallyTrustworthy(url2) {
  if (/^(http|ws)s:$/.test(url2.protocol)) {
    return true;
  }
  const hostIp = url2.host.replace(/(^\[)|(]$)/g, "");
  const hostIPVersion = (0, import_node_net.isIP)(hostIp);
  if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
    return true;
  }
  if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
    return true;
  }
  if (url2.host === "localhost" || url2.host.endsWith(".localhost")) {
    return false;
  }
  if (url2.protocol === "file:") {
    return true;
  }
  return false;
}
function isUrlPotentiallyTrustworthy(url2) {
  if (/^about:(blank|srcdoc)$/.test(url2)) {
    return true;
  }
  if (url2.protocol === "data:") {
    return true;
  }
  if (/^(blob|filesystem):$/.test(url2.protocol)) {
    return true;
  }
  return isOriginPotentiallyTrustworthy(url2);
}
function determineRequestsReferrer(request, { referrerURLCallback, referrerOriginCallback } = {}) {
  if (request.referrer === "no-referrer" || request.referrerPolicy === "") {
    return null;
  }
  const policy = request.referrerPolicy;
  if (request.referrer === "about:client") {
    return "no-referrer";
  }
  const referrerSource = request.referrer;
  let referrerURL = stripURLForUseAsAReferrer(referrerSource);
  let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);
  if (referrerURL.toString().length > 4096) {
    referrerURL = referrerOrigin;
  }
  if (referrerURLCallback) {
    referrerURL = referrerURLCallback(referrerURL);
  }
  if (referrerOriginCallback) {
    referrerOrigin = referrerOriginCallback(referrerOrigin);
  }
  const currentURL = new URL(request.url);
  switch (policy) {
    case "no-referrer":
      return "no-referrer";
    case "origin":
      return referrerOrigin;
    case "unsafe-url":
      return referrerURL;
    case "strict-origin":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin.toString();
    case "strict-origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerOrigin;
    case "same-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return "no-referrer";
    case "origin-when-cross-origin":
      if (referrerURL.origin === currentURL.origin) {
        return referrerURL;
      }
      return referrerOrigin;
    case "no-referrer-when-downgrade":
      if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
        return "no-referrer";
      }
      return referrerURL;
    default:
      throw new TypeError(`Invalid referrerPolicy: ${policy}`);
  }
}
function parseReferrerPolicyFromHeader(headers) {
  const policyTokens = (headers.get("referrer-policy") || "").split(/[,\s]+/);
  let policy = "";
  for (const token of policyTokens) {
    if (token && ReferrerPolicy.has(token)) {
      policy = token;
    }
  }
  return policy;
}

// node_modules/node-fetch/src/request.js
var INTERNALS3 = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS3] === "object";
};
var doBadDataWarn = (0, import_node_util3.deprecate)(() => {
}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
var Request2 = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    if (parsedURL.username !== "" || parsedURL.password !== "") {
      throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
    }
    let method = init2.method || input.method || "GET";
    if (/^(delete|get|head|options|post|put)$/i.test(method)) {
      method = method.toUpperCase();
    }
    if (!isRequest(init2) && "data" in init2) {
      doBadDataWarn();
    }
    if ((init2.body != null || isRequest(input) && input.body !== null) && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers2(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.set("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
    }
    let referrer = init2.referrer == null ? input.referrer : init2.referrer;
    if (referrer === "") {
      referrer = "no-referrer";
    } else if (referrer) {
      const parsedReferrer = new URL(referrer);
      referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? "client" : parsedReferrer;
    } else {
      referrer = void 0;
    }
    this[INTERNALS3] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal,
      referrer
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
    this.referrerPolicy = init2.referrerPolicy || input.referrerPolicy || "";
  }
  get method() {
    return this[INTERNALS3].method;
  }
  get url() {
    return (0, import_node_url.format)(this[INTERNALS3].parsedURL);
  }
  get headers() {
    return this[INTERNALS3].headers;
  }
  get redirect() {
    return this[INTERNALS3].redirect;
  }
  get signal() {
    return this[INTERNALS3].signal;
  }
  get referrer() {
    if (this[INTERNALS3].referrer === "no-referrer") {
      return "";
    }
    if (this[INTERNALS3].referrer === "client") {
      return "about:client";
    }
    if (this[INTERNALS3].referrer) {
      return this[INTERNALS3].referrer.toString();
    }
    return void 0;
  }
  get referrerPolicy() {
    return this[INTERNALS3].referrerPolicy;
  }
  set referrerPolicy(referrerPolicy) {
    this[INTERNALS3].referrerPolicy = validateReferrerPolicy(referrerPolicy);
  }
  clone() {
    return new Request2(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request2.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true },
  referrer: { enumerable: true },
  referrerPolicy: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS3];
  const headers = new Headers2(request[INTERNALS3].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (request.referrerPolicy === "") {
    request.referrerPolicy = DEFAULT_REFERRER_POLICY;
  }
  if (request.referrer && request.referrer !== "no-referrer") {
    request[INTERNALS3].referrer = determineRequestsReferrer(request);
  } else {
    request[INTERNALS3].referrer = "no-referrer";
  }
  if (request[INTERNALS3].referrer instanceof URL) {
    headers.set("Referer", request.referrer);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip, deflate, br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const options = {
    path: parsedURL.pathname + search,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return {
    parsedURL,
    options
  };
};

// node_modules/node-fetch/src/errors/abort-error.js
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};

// node_modules/node-fetch/src/index.js
init_esm_min();
init_from();
var supportedSchemas = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
async function fetch(url2, options_) {
  return new Promise((resolve, reject) => {
    const request = new Request2(url2, options_);
    const { parsedURL, options } = getNodeRequestOptions(request);
    if (!supportedSchemas.has(parsedURL.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url2}. URL scheme "${parsedURL.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (parsedURL.protocol === "data:") {
      const data = dist_default(request.url);
      const response2 = new Response2(data, { headers: { "Content-Type": data.typeFull } });
      resolve(response2);
      return;
    }
    const send = (parsedURL.protocol === "https:" ? import_node_https.default : import_node_http2.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_node_stream2.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(parsedURL.toString(), options);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (error2) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${error2.message}`, "system", error2));
      finalize();
    });
    fixResponseChunkedTransferBadEnding(request_, (error2) => {
      if (response && response.body) {
        response.body.destroy(error2);
      }
    });
    if (process.version < "v14") {
      request_.on("socket", (s3) => {
        let endedWithEventsCount;
        s3.prependListener("end", () => {
          endedWithEventsCount = s3._eventsCount;
        });
        s3.prependListener("close", (hadError) => {
          if (response && endedWithEventsCount < s3._eventsCount && !hadError) {
            const error2 = new Error("Premature close");
            error2.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", error2);
          }
        });
      });
    }
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        let locationURL = null;
        try {
          locationURL = location === null ? null : new URL(location, request.url);
        } catch {
          if (request.redirect !== "manual") {
            reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, "invalid-redirect"));
            finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers2(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: clone(request),
              signal: request.signal,
              size: request.size,
              referrer: request.referrer,
              referrerPolicy: request.referrerPolicy
            };
            if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
              for (const name of ["authorization", "www-authenticate", "cookie", "cookie2"]) {
                requestOptions.headers.delete(name);
              }
            }
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_node_stream2.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
            if (responseReferrerPolicy) {
              requestOptions.referrerPolicy = responseReferrerPolicy;
            }
            resolve(fetch(new Request2(locationURL, requestOptions)));
            finalize();
            return;
          }
          default:
            return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
        }
      }
      if (signal) {
        response_.once("end", () => {
          signal.removeEventListener("abort", abortAndFinalize);
        });
      }
      let body = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), (error2) => {
        if (error2) {
          reject(error2);
        }
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: import_node_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_node_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createGunzip(zlibOptions), (error2) => {
          if (error2) {
            reject(error2);
          }
        });
        response = new Response2(body, responseOptions);
        resolve(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_node_stream2.pipeline)(response_, new import_node_stream2.PassThrough(), (error2) => {
          if (error2) {
            reject(error2);
          }
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createInflate(), (error2) => {
              if (error2) {
                reject(error2);
              }
            });
          } else {
            body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createInflateRaw(), (error2) => {
              if (error2) {
                reject(error2);
              }
            });
          }
          response = new Response2(body, responseOptions);
          resolve(response);
        });
        raw.once("end", () => {
          if (!response) {
            response = new Response2(body, responseOptions);
            resolve(response);
          }
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_node_stream2.pipeline)(body, import_node_zlib.default.createBrotliDecompress(), (error2) => {
          if (error2) {
            reject(error2);
          }
        });
        response = new Response2(body, responseOptions);
        resolve(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve(response);
    });
    writeToStream(request_, request).catch(reject);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  const LAST_CHUNK = import_node_buffer2.Buffer.from("0\r\n\r\n");
  let isChunkedTransfer = false;
  let properLastChunkReceived = false;
  let previousChunk;
  request.on("response", (response) => {
    const { headers } = response;
    isChunkedTransfer = headers["transfer-encoding"] === "chunked" && !headers["content-length"];
  });
  request.on("socket", (socket) => {
    const onSocketClose = () => {
      if (isChunkedTransfer && !properLastChunkReceived) {
        const error2 = new Error("Premature close");
        error2.code = "ERR_STREAM_PREMATURE_CLOSE";
        errorCallback(error2);
      }
    };
    const onData = (buf) => {
      properLastChunkReceived = import_node_buffer2.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;
      if (!properLastChunkReceived && previousChunk) {
        properLastChunkReceived = import_node_buffer2.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 && import_node_buffer2.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0;
      }
      previousChunk = buf;
    };
    socket.prependListener("close", onSocketClose);
    socket.on("data", onData);
    request.on("close", () => {
      socket.removeListener("close", onSocketClose);
      socket.removeListener("data", onData);
    });
  });
}

// node_modules/@astrojs/webapi/mod.js
var import_node_stream3 = __toESM(require("stream"), 1);
var __function_bind = Function.bind.bind(Function.call);
Function.call.bind(Function.call);
var __object_hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
Function.call.bind(Object.prototype.toString);
var __object_isPrototypeOf = Function.call.bind(Object.prototype.isPrototypeOf);
var __performance_now = import_node_perf_hooks.performance.now;
var __string_escapeRegExp = (value) => value.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
var INTERNALS4 = /* @__PURE__ */ new WeakMap();
var internalsOf = (target, className, propName) => {
  const internals = INTERNALS4.get(target);
  if (!internals)
    throw new TypeError(`${className}.${propName} can only be used on instances of ${className}`);
  return internals;
};
var allowStringTag = (value) => value.prototype[Symbol.toStringTag] = value.name;
var pathToPosix = (pathname) => String(pathname == null ? "" : pathname).replace(/\\+/g, "/").replace(/^(?=[A-Za-z]:\/)/, "/").replace(/%/g, "%25").replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/\t/g, "%09");
var DOMException3 = class extends Error {
  constructor(message = "", name = "Error") {
    super(message);
    this.code = 0;
    this.name = name;
  }
};
DOMException3.INDEX_SIZE_ERR = 1;
DOMException3.DOMSTRING_SIZE_ERR = 2;
DOMException3.HIERARCHY_REQUEST_ERR = 3;
DOMException3.WRONG_DOCUMENT_ERR = 4;
DOMException3.INVALID_CHARACTER_ERR = 5;
DOMException3.NO_DATA_ALLOWED_ERR = 6;
DOMException3.NO_MODIFICATION_ALLOWED_ERR = 7;
DOMException3.NOT_FOUND_ERR = 8;
DOMException3.NOT_SUPPORTED_ERR = 9;
DOMException3.INUSE_ATTRIBUTE_ERR = 10;
DOMException3.INVALID_STATE_ERR = 11;
DOMException3.SYNTAX_ERR = 12;
DOMException3.INVALID_MODIFICATION_ERR = 13;
DOMException3.NAMESPACE_ERR = 14;
DOMException3.INVALID_ACCESS_ERR = 15;
DOMException3.VALIDATION_ERR = 16;
DOMException3.TYPE_MISMATCH_ERR = 17;
DOMException3.SECURITY_ERR = 18;
DOMException3.NETWORK_ERR = 19;
DOMException3.ABORT_ERR = 20;
DOMException3.URL_MISMATCH_ERR = 21;
DOMException3.QUOTA_EXCEEDED_ERR = 22;
DOMException3.TIMEOUT_ERR = 23;
DOMException3.INVALID_NODE_TYPE_ERR = 24;
DOMException3.DATA_CLONE_ERR = 25;
allowStringTag(DOMException3);
function assertType(condition, message, ...args) {
  if (!condition) {
    throw new TypeError(format(message, args));
  }
}
function format(message, args) {
  let i3 = 0;
  return message.replace(/%[os]/gu, () => anyToString(args[i3++]));
}
function anyToString(x3) {
  if (typeof x3 !== "object" || x3 === null) {
    return String(x3);
  }
  return Object.prototype.toString.call(x3);
}
var currentErrorHandler;
function reportError(maybeError) {
  try {
    const error2 = maybeError instanceof Error ? maybeError : new Error(anyToString(maybeError));
    if (currentErrorHandler)
      ;
    if (typeof dispatchEvent === "function" && typeof ErrorEvent === "function") {
      dispatchEvent(new ErrorEvent("error", { error: error2, message: error2.message }));
    } else if (typeof process !== "undefined" && typeof process.emit === "function") {
      process.emit("uncaughtException", error2);
      return;
    }
    console.error(error2);
  } catch (_a2) {
  }
}
var currentWarnHandler;
var Warning = class {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }
  warn(...args) {
    var _a2;
    try {
      if (currentWarnHandler)
        ;
      const stack = ((_a2 = new Error().stack) !== null && _a2 !== void 0 ? _a2 : "").replace(/^(?:.+?\n){2}/gu, "\n");
      console.warn(this.message, ...args, stack);
    } catch (_b) {
    }
  }
};
var InitEventWasCalledWhileDispatching = new Warning("W01", "Unable to initialize event under dispatching.");
var FalsyWasAssignedToCancelBubble = new Warning("W02", "Assigning any falsy value to 'cancelBubble' property has no effect.");
var TruthyWasAssignedToReturnValue = new Warning("W03", "Assigning any truthy value to 'returnValue' property has no effect.");
var NonCancelableEventWasCanceled = new Warning("W04", "Unable to preventDefault on non-cancelable events.");
var CanceledInPassiveListener = new Warning("W05", "Unable to preventDefault inside passive event listener invocation.");
var EventListenerWasDuplicated = new Warning("W06", "An event listener wasn't added because it has been added already: %o, %o");
var OptionWasIgnored = new Warning("W07", "The %o option value was abandoned because the event listener wasn't added as duplicated.");
var InvalidEventListener = new Warning("W08", "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
var InvalidAttributeHandler = new Warning("W09", "Event attribute handler must be a function: %o");
var Event = class {
  static get NONE() {
    return NONE;
  }
  static get CAPTURING_PHASE() {
    return CAPTURING_PHASE;
  }
  static get AT_TARGET() {
    return AT_TARGET;
  }
  static get BUBBLING_PHASE() {
    return BUBBLING_PHASE;
  }
  constructor(type, eventInitDict) {
    Object.defineProperty(this, "isTrusted", {
      value: false,
      enumerable: true
    });
    const opts = eventInitDict !== null && eventInitDict !== void 0 ? eventInitDict : {};
    internalDataMap.set(this, {
      type: String(type),
      bubbles: Boolean(opts.bubbles),
      cancelable: Boolean(opts.cancelable),
      composed: Boolean(opts.composed),
      target: null,
      currentTarget: null,
      stopPropagationFlag: false,
      stopImmediatePropagationFlag: false,
      canceledFlag: false,
      inPassiveListenerFlag: false,
      dispatchFlag: false,
      timeStamp: Date.now()
    });
  }
  get type() {
    return $(this).type;
  }
  get target() {
    return $(this).target;
  }
  get srcElement() {
    return $(this).target;
  }
  get currentTarget() {
    return $(this).currentTarget;
  }
  composedPath() {
    const currentTarget = $(this).currentTarget;
    if (currentTarget) {
      return [currentTarget];
    }
    return [];
  }
  get NONE() {
    return NONE;
  }
  get CAPTURING_PHASE() {
    return CAPTURING_PHASE;
  }
  get AT_TARGET() {
    return AT_TARGET;
  }
  get BUBBLING_PHASE() {
    return BUBBLING_PHASE;
  }
  get eventPhase() {
    return $(this).dispatchFlag ? 2 : 0;
  }
  stopPropagation() {
    $(this).stopPropagationFlag = true;
  }
  get cancelBubble() {
    return $(this).stopPropagationFlag;
  }
  set cancelBubble(value) {
    if (value) {
      $(this).stopPropagationFlag = true;
    } else {
      FalsyWasAssignedToCancelBubble.warn();
    }
  }
  stopImmediatePropagation() {
    const data = $(this);
    data.stopPropagationFlag = data.stopImmediatePropagationFlag = true;
  }
  get bubbles() {
    return $(this).bubbles;
  }
  get cancelable() {
    return $(this).cancelable;
  }
  get returnValue() {
    return !$(this).canceledFlag;
  }
  set returnValue(value) {
    if (!value) {
      setCancelFlag($(this));
    } else {
      TruthyWasAssignedToReturnValue.warn();
    }
  }
  preventDefault() {
    setCancelFlag($(this));
  }
  get defaultPrevented() {
    return $(this).canceledFlag;
  }
  get composed() {
    return $(this).composed;
  }
  get isTrusted() {
    return false;
  }
  get timeStamp() {
    return $(this).timeStamp;
  }
  initEvent(type, bubbles = false, cancelable = false) {
    const data = $(this);
    if (data.dispatchFlag) {
      InitEventWasCalledWhileDispatching.warn();
      return;
    }
    internalDataMap.set(this, __spreadProps(__spreadValues({}, data), {
      type: String(type),
      bubbles: Boolean(bubbles),
      cancelable: Boolean(cancelable),
      target: null,
      currentTarget: null,
      stopPropagationFlag: false,
      stopImmediatePropagationFlag: false,
      canceledFlag: false
    }));
  }
};
var NONE = 0;
var CAPTURING_PHASE = 1;
var AT_TARGET = 2;
var BUBBLING_PHASE = 3;
var internalDataMap = /* @__PURE__ */ new WeakMap();
function $(event, name = "this") {
  const retv = internalDataMap.get(event);
  assertType(retv != null, "'%s' must be an object that Event constructor created, but got another one: %o", name, event);
  return retv;
}
function setCancelFlag(data) {
  if (data.inPassiveListenerFlag) {
    CanceledInPassiveListener.warn();
    return;
  }
  if (!data.cancelable) {
    NonCancelableEventWasCanceled.warn();
    return;
  }
  data.canceledFlag = true;
}
Object.defineProperty(Event, "NONE", { enumerable: true });
Object.defineProperty(Event, "CAPTURING_PHASE", { enumerable: true });
Object.defineProperty(Event, "AT_TARGET", { enumerable: true });
Object.defineProperty(Event, "BUBBLING_PHASE", { enumerable: true });
var keys$1 = Object.getOwnPropertyNames(Event.prototype);
for (let i3 = 0; i3 < keys$1.length; ++i3) {
  if (keys$1[i3] === "constructor") {
    continue;
  }
  Object.defineProperty(Event.prototype, keys$1[i3], { enumerable: true });
}
var EventWrapper = class extends Event {
  static wrap(event) {
    return new (getWrapperClassOf(event))(event);
  }
  constructor(event) {
    super(event.type, {
      bubbles: event.bubbles,
      cancelable: event.cancelable,
      composed: event.composed
    });
    if (event.cancelBubble) {
      super.stopPropagation();
    }
    if (event.defaultPrevented) {
      super.preventDefault();
    }
    internalDataMap$1.set(this, { original: event });
    const keys2 = Object.keys(event);
    for (let i3 = 0; i3 < keys2.length; ++i3) {
      const key = keys2[i3];
      if (!(key in this)) {
        Object.defineProperty(this, key, defineRedirectDescriptor(event, key));
      }
    }
  }
  stopPropagation() {
    super.stopPropagation();
    const { original } = $$1(this);
    if ("stopPropagation" in original) {
      original.stopPropagation();
    }
  }
  get cancelBubble() {
    return super.cancelBubble;
  }
  set cancelBubble(value) {
    super.cancelBubble = value;
    const { original } = $$1(this);
    if ("cancelBubble" in original) {
      original.cancelBubble = value;
    }
  }
  stopImmediatePropagation() {
    super.stopImmediatePropagation();
    const { original } = $$1(this);
    if ("stopImmediatePropagation" in original) {
      original.stopImmediatePropagation();
    }
  }
  get returnValue() {
    return super.returnValue;
  }
  set returnValue(value) {
    super.returnValue = value;
    const { original } = $$1(this);
    if ("returnValue" in original) {
      original.returnValue = value;
    }
  }
  preventDefault() {
    super.preventDefault();
    const { original } = $$1(this);
    if ("preventDefault" in original) {
      original.preventDefault();
    }
  }
  get timeStamp() {
    const { original } = $$1(this);
    if ("timeStamp" in original) {
      return original.timeStamp;
    }
    return super.timeStamp;
  }
};
var internalDataMap$1 = /* @__PURE__ */ new WeakMap();
function $$1(event) {
  const retv = internalDataMap$1.get(event);
  assertType(retv != null, "'this' is expected an Event object, but got", event);
  return retv;
}
var wrapperClassCache = /* @__PURE__ */ new WeakMap();
wrapperClassCache.set(Object.prototype, EventWrapper);
function getWrapperClassOf(originalEvent) {
  const prototype = Object.getPrototypeOf(originalEvent);
  if (prototype == null) {
    return EventWrapper;
  }
  let wrapper = wrapperClassCache.get(prototype);
  if (wrapper == null) {
    wrapper = defineWrapper(getWrapperClassOf(prototype), prototype);
    wrapperClassCache.set(prototype, wrapper);
  }
  return wrapper;
}
function defineWrapper(BaseEventWrapper, originalPrototype) {
  class CustomEventWrapper extends BaseEventWrapper {
  }
  const keys2 = Object.keys(originalPrototype);
  for (let i3 = 0; i3 < keys2.length; ++i3) {
    Object.defineProperty(CustomEventWrapper.prototype, keys2[i3], defineRedirectDescriptor(originalPrototype, keys2[i3]));
  }
  return CustomEventWrapper;
}
function defineRedirectDescriptor(obj, key) {
  const d2 = Object.getOwnPropertyDescriptor(obj, key);
  return {
    get() {
      const original = $$1(this).original;
      const value = original[key];
      if (typeof value === "function") {
        return value.bind(original);
      }
      return value;
    },
    set(value) {
      const original = $$1(this).original;
      original[key] = value;
    },
    configurable: d2.configurable,
    enumerable: d2.enumerable
  };
}
function createListener(callback, capture, passive, once, signal, signalListener) {
  return {
    callback,
    flags: (capture ? 1 : 0) | (passive ? 2 : 0) | (once ? 4 : 0),
    signal,
    signalListener
  };
}
function setRemoved(listener) {
  listener.flags |= 8;
}
function isCapture(listener) {
  return (listener.flags & 1) === 1;
}
function isPassive(listener) {
  return (listener.flags & 2) === 2;
}
function isOnce(listener) {
  return (listener.flags & 4) === 4;
}
function isRemoved(listener) {
  return (listener.flags & 8) === 8;
}
function invokeCallback({ callback }, target, event) {
  try {
    if (typeof callback === "function") {
      callback.call(target, event);
    } else if (typeof callback.handleEvent === "function") {
      callback.handleEvent(event);
    }
  } catch (thrownError) {
    reportError(thrownError);
  }
}
function findIndexOfListener({ listeners }, callback, capture) {
  for (let i3 = 0; i3 < listeners.length; ++i3) {
    if (listeners[i3].callback === callback && isCapture(listeners[i3]) === capture) {
      return i3;
    }
  }
  return -1;
}
function addListener(list, callback, capture, passive, once, signal) {
  let signalListener;
  if (signal) {
    signalListener = removeListener.bind(null, list, callback, capture);
    signal.addEventListener("abort", signalListener);
  }
  const listener = createListener(callback, capture, passive, once, signal, signalListener);
  if (list.cow) {
    list.cow = false;
    list.listeners = [...list.listeners, listener];
  } else {
    list.listeners.push(listener);
  }
  return listener;
}
function removeListener(list, callback, capture) {
  const index = findIndexOfListener(list, callback, capture);
  if (index !== -1) {
    return removeListenerAt(list, index);
  }
  return false;
}
function removeListenerAt(list, index, disableCow = false) {
  const listener = list.listeners[index];
  setRemoved(listener);
  if (listener.signal) {
    listener.signal.removeEventListener("abort", listener.signalListener);
  }
  if (list.cow && !disableCow) {
    list.cow = false;
    list.listeners = list.listeners.filter((_, i3) => i3 !== index);
    return false;
  }
  list.listeners.splice(index, 1);
  return true;
}
function createListenerListMap() {
  return /* @__PURE__ */ Object.create(null);
}
function ensureListenerList(listenerMap, type) {
  var _a2;
  return (_a2 = listenerMap[type]) !== null && _a2 !== void 0 ? _a2 : listenerMap[type] = {
    attrCallback: void 0,
    attrListener: void 0,
    cow: false,
    listeners: []
  };
}
var EventTarget = class {
  constructor() {
    internalDataMap$2.set(this, createListenerListMap());
  }
  addEventListener(type0, callback0, options0) {
    const listenerMap = $$2(this);
    const { callback, capture, once, passive, signal, type } = normalizeAddOptions(type0, callback0, options0);
    if (callback == null || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
      return;
    }
    const list = ensureListenerList(listenerMap, type);
    const i3 = findIndexOfListener(list, callback, capture);
    if (i3 !== -1) {
      warnDuplicate(list.listeners[i3], passive, once, signal);
      return;
    }
    addListener(list, callback, capture, passive, once, signal);
  }
  removeEventListener(type0, callback0, options0) {
    const listenerMap = $$2(this);
    const { callback, capture, type } = normalizeOptions(type0, callback0, options0);
    const list = listenerMap[type];
    if (callback != null && list) {
      removeListener(list, callback, capture);
    }
  }
  dispatchEvent(e3) {
    const list = $$2(this)[String(e3.type)];
    if (list == null) {
      return true;
    }
    const event = e3 instanceof Event ? e3 : EventWrapper.wrap(e3);
    const eventData = $(event, "event");
    if (eventData.dispatchFlag) {
      throw new DOMException3("This event has been in dispatching.");
    }
    eventData.dispatchFlag = true;
    eventData.target = eventData.currentTarget = this;
    if (!eventData.stopPropagationFlag) {
      const { cow, listeners } = list;
      list.cow = true;
      for (let i3 = 0; i3 < listeners.length; ++i3) {
        const listener = listeners[i3];
        if (isRemoved(listener)) {
          continue;
        }
        if (isOnce(listener) && removeListenerAt(list, i3, !cow)) {
          i3 -= 1;
        }
        eventData.inPassiveListenerFlag = isPassive(listener);
        invokeCallback(listener, this, event);
        eventData.inPassiveListenerFlag = false;
        if (eventData.stopImmediatePropagationFlag) {
          break;
        }
      }
      if (!cow) {
        list.cow = false;
      }
    }
    eventData.target = null;
    eventData.currentTarget = null;
    eventData.stopImmediatePropagationFlag = false;
    eventData.stopPropagationFlag = false;
    eventData.dispatchFlag = false;
    return !eventData.canceledFlag;
  }
};
var internalDataMap$2 = /* @__PURE__ */ new WeakMap();
function $$2(target, name = "this") {
  const retv = internalDataMap$2.get(target);
  assertType(retv != null, "'%s' must be an object that EventTarget constructor created, but got another one: %o", name, target);
  return retv;
}
function normalizeAddOptions(type, callback, options) {
  var _a2;
  assertCallback(callback);
  if (typeof options === "object" && options !== null) {
    return {
      type: String(type),
      callback: callback !== null && callback !== void 0 ? callback : void 0,
      capture: Boolean(options.capture),
      passive: Boolean(options.passive),
      once: Boolean(options.once),
      signal: (_a2 = options.signal) !== null && _a2 !== void 0 ? _a2 : void 0
    };
  }
  return {
    type: String(type),
    callback: callback !== null && callback !== void 0 ? callback : void 0,
    capture: Boolean(options),
    passive: false,
    once: false,
    signal: void 0
  };
}
function normalizeOptions(type, callback, options) {
  assertCallback(callback);
  if (typeof options === "object" && options !== null) {
    return {
      type: String(type),
      callback: callback !== null && callback !== void 0 ? callback : void 0,
      capture: Boolean(options.capture)
    };
  }
  return {
    type: String(type),
    callback: callback !== null && callback !== void 0 ? callback : void 0,
    capture: Boolean(options)
  };
}
function assertCallback(callback) {
  if (typeof callback === "function" || typeof callback === "object" && callback !== null && typeof callback.handleEvent === "function") {
    return;
  }
  if (callback == null || typeof callback === "object") {
    InvalidEventListener.warn(callback);
    return;
  }
  throw new TypeError(format(InvalidEventListener.message, [callback]));
}
function warnDuplicate(listener, passive, once, signal) {
  EventListenerWasDuplicated.warn(isCapture(listener) ? "capture" : "bubble", listener.callback);
  if (isPassive(listener) !== passive) {
    OptionWasIgnored.warn("passive");
  }
  if (isOnce(listener) !== once) {
    OptionWasIgnored.warn("once");
  }
  if (listener.signal !== signal) {
    OptionWasIgnored.warn("signal");
  }
}
var keys$1$1 = Object.getOwnPropertyNames(EventTarget.prototype);
for (let i3 = 0; i3 < keys$1$1.length; ++i3) {
  if (keys$1$1[i3] === "constructor") {
    continue;
  }
  Object.defineProperty(EventTarget.prototype, keys$1$1[i3], { enumerable: true });
}
function getEventAttributeValue(target, type) {
  var _a2, _b;
  const listMap = $$2(target, "target");
  return (_b = (_a2 = listMap[type]) === null || _a2 === void 0 ? void 0 : _a2.attrCallback) !== null && _b !== void 0 ? _b : null;
}
function setEventAttributeValue(target, type, callback) {
  if (callback != null && typeof callback !== "function") {
    InvalidAttributeHandler.warn(callback);
  }
  if (typeof callback === "function" || typeof callback === "object" && callback !== null) {
    upsertEventAttributeListener(target, type, callback);
  } else {
    removeEventAttributeListener(target, type);
  }
}
function upsertEventAttributeListener(target, type, callback) {
  const list = ensureListenerList($$2(target, "target"), String(type));
  list.attrCallback = callback;
  if (list.attrListener == null) {
    list.attrListener = addListener(list, defineEventAttributeCallback(list), false, false, false, void 0);
  }
}
function removeEventAttributeListener(target, type) {
  const listMap = $$2(target, "target");
  const list = listMap[String(type)];
  if (list && list.attrListener) {
    removeListener(list, list.attrListener.callback, false);
    list.attrCallback = list.attrListener = void 0;
  }
}
function defineEventAttributeCallback(list) {
  return function(event) {
    const callback = list.attrCallback;
    if (typeof callback === "function") {
      callback.call(this, event);
    }
  };
}
function defineEventAttribute(target, type, _eventClass) {
  Object.defineProperty(target, `on${type}`, {
    get() {
      return getEventAttributeValue(this, type);
    },
    set(value) {
      setEventAttributeValue(this, type, value);
    },
    configurable: true,
    enumerable: true
  });
}
var AbortSignal = class extends EventTarget {
  constructor() {
    super();
    throw new TypeError("AbortSignal cannot be constructed directly");
  }
  get aborted() {
    const aborted = abortedFlags.get(this);
    if (typeof aborted !== "boolean") {
      throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
    }
    return aborted;
  }
};
defineEventAttribute(AbortSignal.prototype, "abort");
function createAbortSignal() {
  const signal = Object.create(AbortSignal.prototype);
  EventTarget.call(signal);
  abortedFlags.set(signal, false);
  return signal;
}
function abortSignal(signal) {
  if (abortedFlags.get(signal) !== false) {
    return;
  }
  abortedFlags.set(signal, true);
  signal.dispatchEvent({ type: "abort" });
}
var abortedFlags = /* @__PURE__ */ new WeakMap();
Object.defineProperties(AbortSignal.prototype, {
  aborted: { enumerable: true }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
  Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortSignal"
  });
}
var AbortController2 = class {
  constructor() {
    signals.set(this, createAbortSignal());
  }
  get signal() {
    return getSignal(this);
  }
  abort() {
    abortSignal(getSignal(this));
  }
};
var signals = /* @__PURE__ */ new WeakMap();
function getSignal(controller) {
  const signal = signals.get(controller);
  if (signal == null) {
    throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
  }
  return signal;
}
Object.defineProperties(AbortController2.prototype, {
  signal: { enumerable: true },
  abort: { enumerable: true }
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
  Object.defineProperty(AbortController2.prototype, Symbol.toStringTag, {
    configurable: true,
    value: "AbortController"
  });
}
var SymbolPolyfill = Symbol;
function noop2() {
  return void 0;
}
function typeIsObject(x3) {
  return typeof x3 === "object" && x3 !== null || typeof x3 === "function";
}
var rethrowAssertionErrorRejection = noop2;
var originalPromise = Promise;
var originalPromiseThen = Promise.prototype.then;
var originalPromiseResolve = Promise.resolve.bind(originalPromise);
var originalPromiseReject = Promise.reject.bind(originalPromise);
function newPromise(executor) {
  return new originalPromise(executor);
}
function promiseResolvedWith(value) {
  return originalPromiseResolve(value);
}
function promiseRejectedWith(reason) {
  return originalPromiseReject(reason);
}
function PerformPromiseThen(promise, onFulfilled, onRejected) {
  return originalPromiseThen.call(promise, onFulfilled, onRejected);
}
function uponPromise(promise, onFulfilled, onRejected) {
  PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), void 0, rethrowAssertionErrorRejection);
}
function uponFulfillment(promise, onFulfilled) {
  uponPromise(promise, onFulfilled);
}
function uponRejection(promise, onRejected) {
  uponPromise(promise, void 0, onRejected);
}
function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
  return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
}
function setPromiseIsHandledToTrue(promise) {
  PerformPromiseThen(promise, void 0, rethrowAssertionErrorRejection);
}
function reflectCall(F3, V, args) {
  if (typeof F3 !== "function") {
    throw new TypeError("Argument is not a function");
  }
  return Function.prototype.apply.call(F3, V, args);
}
function promiseCall(F3, V, args) {
  try {
    return promiseResolvedWith(reflectCall(F3, V, args));
  } catch (value) {
    return promiseRejectedWith(value);
  }
}
var QUEUE_MAX_ARRAY_SIZE = 16384;
var SimpleQueue = class {
  constructor() {
    this._cursor = 0;
    this._size = 0;
    this._front = {
      _elements: [],
      _next: void 0
    };
    this._back = this._front;
    this._cursor = 0;
    this._size = 0;
  }
  get length() {
    return this._size;
  }
  push(element) {
    const oldBack = this._back;
    let newBack = oldBack;
    if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
      newBack = {
        _elements: [],
        _next: void 0
      };
    }
    oldBack._elements.push(element);
    if (newBack !== oldBack) {
      this._back = newBack;
      oldBack._next = newBack;
    }
    ++this._size;
  }
  shift() {
    const oldFront = this._front;
    let newFront = oldFront;
    const oldCursor = this._cursor;
    let newCursor = oldCursor + 1;
    const elements = oldFront._elements;
    const element = elements[oldCursor];
    if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
      newFront = oldFront._next;
      newCursor = 0;
    }
    --this._size;
    this._cursor = newCursor;
    if (oldFront !== newFront) {
      this._front = newFront;
    }
    elements[oldCursor] = void 0;
    return element;
  }
  forEach(callback) {
    let i3 = this._cursor;
    let node = this._front;
    let elements = node._elements;
    while (i3 !== elements.length || node._next !== void 0) {
      if (i3 === elements.length) {
        node = node._next;
        elements = node._elements;
        i3 = 0;
        if (elements.length === 0) {
          break;
        }
      }
      callback(elements[i3]);
      ++i3;
    }
  }
  peek() {
    const front = this._front;
    const cursor = this._cursor;
    return front._elements[cursor];
  }
};
function ReadableStreamReaderGenericInitialize(reader, stream) {
  reader._ownerReadableStream = stream;
  stream._reader = reader;
  if (stream._state === "readable") {
    defaultReaderClosedPromiseInitialize(reader);
  } else if (stream._state === "closed") {
    defaultReaderClosedPromiseInitializeAsResolved(reader);
  } else {
    defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
  }
}
function ReadableStreamReaderGenericCancel(reader, reason) {
  const stream = reader._ownerReadableStream;
  return ReadableStreamCancel(stream, reason);
}
function ReadableStreamReaderGenericRelease(reader) {
  if (reader._ownerReadableStream._state === "readable") {
    defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
  } else {
    defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
  }
  reader._ownerReadableStream._reader = void 0;
  reader._ownerReadableStream = void 0;
}
function readerLockException(name) {
  return new TypeError("Cannot " + name + " a stream using a released reader");
}
function defaultReaderClosedPromiseInitialize(reader) {
  reader._closedPromise = newPromise((resolve, reject) => {
    reader._closedPromise_resolve = resolve;
    reader._closedPromise_reject = reject;
  });
}
function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
  defaultReaderClosedPromiseInitialize(reader);
  defaultReaderClosedPromiseReject(reader, reason);
}
function defaultReaderClosedPromiseInitializeAsResolved(reader) {
  defaultReaderClosedPromiseInitialize(reader);
  defaultReaderClosedPromiseResolve(reader);
}
function defaultReaderClosedPromiseReject(reader, reason) {
  if (reader._closedPromise_reject === void 0) {
    return;
  }
  setPromiseIsHandledToTrue(reader._closedPromise);
  reader._closedPromise_reject(reason);
  reader._closedPromise_resolve = void 0;
  reader._closedPromise_reject = void 0;
}
function defaultReaderClosedPromiseResetToRejected(reader, reason) {
  defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
}
function defaultReaderClosedPromiseResolve(reader) {
  if (reader._closedPromise_resolve === void 0) {
    return;
  }
  reader._closedPromise_resolve(void 0);
  reader._closedPromise_resolve = void 0;
  reader._closedPromise_reject = void 0;
}
var AbortSteps = SymbolPolyfill("[[AbortSteps]]");
var ErrorSteps = SymbolPolyfill("[[ErrorSteps]]");
var CancelSteps = SymbolPolyfill("[[CancelSteps]]");
var PullSteps = SymbolPolyfill("[[PullSteps]]");
var NumberIsFinite = Number.isFinite || function(x3) {
  return typeof x3 === "number" && isFinite(x3);
};
var MathTrunc = Math.trunc || function(v2) {
  return v2 < 0 ? Math.ceil(v2) : Math.floor(v2);
};
function isDictionary(x3) {
  return typeof x3 === "object" || typeof x3 === "function";
}
function assertDictionary(obj, context) {
  if (obj !== void 0 && !isDictionary(obj)) {
    throw new TypeError(`${context} is not an object.`);
  }
}
function assertFunction(x3, context) {
  if (typeof x3 !== "function") {
    throw new TypeError(`${context} is not a function.`);
  }
}
function isObject(x3) {
  return typeof x3 === "object" && x3 !== null || typeof x3 === "function";
}
function assertObject(x3, context) {
  if (!isObject(x3)) {
    throw new TypeError(`${context} is not an object.`);
  }
}
function assertRequiredArgument(x3, position, context) {
  if (x3 === void 0) {
    throw new TypeError(`Parameter ${position} is required in '${context}'.`);
  }
}
function assertRequiredField(x3, field, context) {
  if (x3 === void 0) {
    throw new TypeError(`${field} is required in '${context}'.`);
  }
}
function convertUnrestrictedDouble(value) {
  return Number(value);
}
function censorNegativeZero(x3) {
  return x3 === 0 ? 0 : x3;
}
function integerPart(x3) {
  return censorNegativeZero(MathTrunc(x3));
}
function convertUnsignedLongLongWithEnforceRange(value, context) {
  const lowerBound = 0;
  const upperBound = Number.MAX_SAFE_INTEGER;
  let x3 = Number(value);
  x3 = censorNegativeZero(x3);
  if (!NumberIsFinite(x3)) {
    throw new TypeError(`${context} is not a finite number`);
  }
  x3 = integerPart(x3);
  if (x3 < lowerBound || x3 > upperBound) {
    throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
  }
  if (!NumberIsFinite(x3) || x3 === 0) {
    return 0;
  }
  return x3;
}
function assertReadableStream(x3, context) {
  if (!IsReadableStream(x3)) {
    throw new TypeError(`${context} is not a ReadableStream.`);
  }
}
function AcquireReadableStreamDefaultReader(stream) {
  return new ReadableStreamDefaultReader(stream);
}
function ReadableStreamAddReadRequest(stream, readRequest) {
  stream._reader._readRequests.push(readRequest);
}
function ReadableStreamFulfillReadRequest(stream, chunk, done) {
  const reader = stream._reader;
  const readRequest = reader._readRequests.shift();
  if (done) {
    readRequest._closeSteps();
  } else {
    readRequest._chunkSteps(chunk);
  }
}
function ReadableStreamGetNumReadRequests(stream) {
  return stream._reader._readRequests.length;
}
function ReadableStreamHasDefaultReader(stream) {
  const reader = stream._reader;
  if (reader === void 0) {
    return false;
  }
  if (!IsReadableStreamDefaultReader(reader)) {
    return false;
  }
  return true;
}
var ReadableStreamDefaultReader = class {
  constructor(stream) {
    assertRequiredArgument(stream, 1, "ReadableStreamDefaultReader");
    assertReadableStream(stream, "First parameter");
    if (IsReadableStreamLocked(stream)) {
      throw new TypeError("This stream has already been locked for exclusive reading by another reader");
    }
    ReadableStreamReaderGenericInitialize(this, stream);
    this._readRequests = new SimpleQueue();
  }
  get closed() {
    if (!IsReadableStreamDefaultReader(this)) {
      return promiseRejectedWith(defaultReaderBrandCheckException("closed"));
    }
    return this._closedPromise;
  }
  cancel(reason = void 0) {
    if (!IsReadableStreamDefaultReader(this)) {
      return promiseRejectedWith(defaultReaderBrandCheckException("cancel"));
    }
    if (this._ownerReadableStream === void 0) {
      return promiseRejectedWith(readerLockException("cancel"));
    }
    return ReadableStreamReaderGenericCancel(this, reason);
  }
  read() {
    if (!IsReadableStreamDefaultReader(this)) {
      return promiseRejectedWith(defaultReaderBrandCheckException("read"));
    }
    if (this._ownerReadableStream === void 0) {
      return promiseRejectedWith(readerLockException("read from"));
    }
    let resolvePromise;
    let rejectPromise;
    const promise = newPromise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    const readRequest = {
      _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
      _closeSteps: () => resolvePromise({ value: void 0, done: true }),
      _errorSteps: (e3) => rejectPromise(e3)
    };
    ReadableStreamDefaultReaderRead(this, readRequest);
    return promise;
  }
  releaseLock() {
    if (!IsReadableStreamDefaultReader(this)) {
      throw defaultReaderBrandCheckException("releaseLock");
    }
    if (this._ownerReadableStream === void 0) {
      return;
    }
    if (this._readRequests.length > 0) {
      throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
    }
    ReadableStreamReaderGenericRelease(this);
  }
};
Object.defineProperties(ReadableStreamDefaultReader.prototype, {
  cancel: { enumerable: true },
  read: { enumerable: true },
  releaseLock: { enumerable: true },
  closed: { enumerable: true }
});
function IsReadableStreamDefaultReader(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_readRequests")) {
    return false;
  }
  return x3 instanceof ReadableStreamDefaultReader;
}
function ReadableStreamDefaultReaderRead(reader, readRequest) {
  const stream = reader._ownerReadableStream;
  stream._disturbed = true;
  if (stream._state === "closed") {
    readRequest._closeSteps();
  } else if (stream._state === "errored") {
    readRequest._errorSteps(stream._storedError);
  } else {
    stream._readableStreamController[PullSteps](readRequest);
  }
}
function defaultReaderBrandCheckException(name) {
  return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
}
var ReadableStreamAsyncIteratorImpl = class {
  constructor(reader, preventCancel) {
    this._ongoingPromise = void 0;
    this._isFinished = false;
    this._reader = reader;
    this._preventCancel = preventCancel;
  }
  next() {
    const nextSteps = () => this._nextSteps();
    this._ongoingPromise = this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) : nextSteps();
    return this._ongoingPromise;
  }
  return(value) {
    const returnSteps = () => this._returnSteps(value);
    return this._ongoingPromise ? transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) : returnSteps();
  }
  _nextSteps() {
    if (this._isFinished) {
      return Promise.resolve({ value: void 0, done: true });
    }
    const reader = this._reader;
    if (reader._ownerReadableStream === void 0) {
      return promiseRejectedWith(readerLockException("iterate"));
    }
    let resolvePromise;
    let rejectPromise;
    const promise = newPromise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    const readRequest = {
      _chunkSteps: (chunk) => {
        this._ongoingPromise = void 0;
        queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
      },
      _closeSteps: () => {
        this._ongoingPromise = void 0;
        this._isFinished = true;
        ReadableStreamReaderGenericRelease(reader);
        resolvePromise({ value: void 0, done: true });
      },
      _errorSteps: (reason) => {
        this._ongoingPromise = void 0;
        this._isFinished = true;
        ReadableStreamReaderGenericRelease(reader);
        rejectPromise(reason);
      }
    };
    ReadableStreamDefaultReaderRead(reader, readRequest);
    return promise;
  }
  _returnSteps(value) {
    if (this._isFinished) {
      return Promise.resolve({ value, done: true });
    }
    this._isFinished = true;
    const reader = this._reader;
    if (reader._ownerReadableStream === void 0) {
      return promiseRejectedWith(readerLockException("finish iterating"));
    }
    if (!this._preventCancel) {
      const result = ReadableStreamReaderGenericCancel(reader, value);
      ReadableStreamReaderGenericRelease(reader);
      return transformPromiseWith(result, () => ({ value, done: true }));
    }
    ReadableStreamReaderGenericRelease(reader);
    return promiseResolvedWith({ value, done: true });
  }
};
var ReadableStreamAsyncIteratorPrototype = {
  next() {
    if (!IsReadableStreamAsyncIterator(this)) {
      return promiseRejectedWith(streamAsyncIteratorBrandCheckException("next"));
    }
    return this._asyncIteratorImpl.next();
  },
  return(value) {
    if (!IsReadableStreamAsyncIterator(this)) {
      return promiseRejectedWith(streamAsyncIteratorBrandCheckException("return"));
    }
    return this._asyncIteratorImpl.return(value);
  }
};
function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
  const reader = AcquireReadableStreamDefaultReader(stream);
  const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
  const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
  iterator._asyncIteratorImpl = impl;
  return iterator;
}
function IsReadableStreamAsyncIterator(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_asyncIteratorImpl")) {
    return false;
  }
  try {
    return x3._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl;
  } catch (_a2) {
    return false;
  }
}
function streamAsyncIteratorBrandCheckException(name) {
  return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
}
var NumberIsNaN = Number.isNaN || function(x3) {
  return x3 !== x3;
};
function CreateArrayFromList(elements) {
  return elements.slice();
}
function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n2) {
  new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n2), destOffset);
}
function TransferArrayBuffer(O2) {
  return O2;
}
function IsDetachedBuffer(O2) {
  return false;
}
function ArrayBufferSlice(buffer, begin, end) {
  if (buffer.slice) {
    return buffer.slice(begin, end);
  }
  const length = end - begin;
  const slice = new ArrayBuffer(length);
  CopyDataBlockBytes(slice, 0, buffer, begin, length);
  return slice;
}
function IsNonNegativeNumber(v2) {
  if (typeof v2 !== "number") {
    return false;
  }
  if (NumberIsNaN(v2)) {
    return false;
  }
  if (v2 < 0) {
    return false;
  }
  return true;
}
function CloneAsUint8Array(O2) {
  const buffer = ArrayBufferSlice(O2.buffer, O2.byteOffset, O2.byteOffset + O2.byteLength);
  return new Uint8Array(buffer);
}
function DequeueValue(container) {
  const pair = container._queue.shift();
  container._queueTotalSize -= pair.size;
  if (container._queueTotalSize < 0) {
    container._queueTotalSize = 0;
  }
  return pair.value;
}
function EnqueueValueWithSize(container, value, size) {
  if (!IsNonNegativeNumber(size) || size === Infinity) {
    throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
  }
  container._queue.push({ value, size });
  container._queueTotalSize += size;
}
function PeekQueueValue(container) {
  const pair = container._queue.peek();
  return pair.value;
}
function ResetQueue(container) {
  container._queue = new SimpleQueue();
  container._queueTotalSize = 0;
}
var ReadableStreamBYOBRequest = class {
  constructor() {
    throw new TypeError("Illegal constructor");
  }
  get view() {
    if (!IsReadableStreamBYOBRequest(this)) {
      throw byobRequestBrandCheckException("view");
    }
    return this._view;
  }
  respond(bytesWritten) {
    if (!IsReadableStreamBYOBRequest(this)) {
      throw byobRequestBrandCheckException("respond");
    }
    assertRequiredArgument(bytesWritten, 1, "respond");
    bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, "First parameter");
    if (this._associatedReadableByteStreamController === void 0) {
      throw new TypeError("This BYOB request has been invalidated");
    }
    if (IsDetachedBuffer(this._view.buffer))
      ;
    ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
  }
  respondWithNewView(view) {
    if (!IsReadableStreamBYOBRequest(this)) {
      throw byobRequestBrandCheckException("respondWithNewView");
    }
    assertRequiredArgument(view, 1, "respondWithNewView");
    if (!ArrayBuffer.isView(view)) {
      throw new TypeError("You can only respond with array buffer views");
    }
    if (this._associatedReadableByteStreamController === void 0) {
      throw new TypeError("This BYOB request has been invalidated");
    }
    if (IsDetachedBuffer(view.buffer))
      ;
    ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
  }
};
Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
  respond: { enumerable: true },
  respondWithNewView: { enumerable: true },
  view: { enumerable: true }
});
var ReadableByteStreamController = class {
  constructor() {
    throw new TypeError("Illegal constructor");
  }
  get byobRequest() {
    if (!IsReadableByteStreamController(this)) {
      throw byteStreamControllerBrandCheckException("byobRequest");
    }
    return ReadableByteStreamControllerGetBYOBRequest(this);
  }
  get desiredSize() {
    if (!IsReadableByteStreamController(this)) {
      throw byteStreamControllerBrandCheckException("desiredSize");
    }
    return ReadableByteStreamControllerGetDesiredSize(this);
  }
  close() {
    if (!IsReadableByteStreamController(this)) {
      throw byteStreamControllerBrandCheckException("close");
    }
    if (this._closeRequested) {
      throw new TypeError("The stream has already been closed; do not close it again!");
    }
    const state = this._controlledReadableByteStream._state;
    if (state !== "readable") {
      throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
    }
    ReadableByteStreamControllerClose(this);
  }
  enqueue(chunk) {
    if (!IsReadableByteStreamController(this)) {
      throw byteStreamControllerBrandCheckException("enqueue");
    }
    assertRequiredArgument(chunk, 1, "enqueue");
    if (!ArrayBuffer.isView(chunk)) {
      throw new TypeError("chunk must be an array buffer view");
    }
    if (chunk.byteLength === 0) {
      throw new TypeError("chunk must have non-zero byteLength");
    }
    if (chunk.buffer.byteLength === 0) {
      throw new TypeError(`chunk's buffer must have non-zero byteLength`);
    }
    if (this._closeRequested) {
      throw new TypeError("stream is closed or draining");
    }
    const state = this._controlledReadableByteStream._state;
    if (state !== "readable") {
      throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
    }
    ReadableByteStreamControllerEnqueue(this, chunk);
  }
  error(e3 = void 0) {
    if (!IsReadableByteStreamController(this)) {
      throw byteStreamControllerBrandCheckException("error");
    }
    ReadableByteStreamControllerError(this, e3);
  }
  [CancelSteps](reason) {
    ReadableByteStreamControllerClearPendingPullIntos(this);
    ResetQueue(this);
    const result = this._cancelAlgorithm(reason);
    ReadableByteStreamControllerClearAlgorithms(this);
    return result;
  }
  [PullSteps](readRequest) {
    const stream = this._controlledReadableByteStream;
    if (this._queueTotalSize > 0) {
      const entry = this._queue.shift();
      this._queueTotalSize -= entry.byteLength;
      ReadableByteStreamControllerHandleQueueDrain(this);
      const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
      readRequest._chunkSteps(view);
      return;
    }
    const autoAllocateChunkSize = this._autoAllocateChunkSize;
    if (autoAllocateChunkSize !== void 0) {
      let buffer;
      try {
        buffer = new ArrayBuffer(autoAllocateChunkSize);
      } catch (bufferE) {
        readRequest._errorSteps(bufferE);
        return;
      }
      const pullIntoDescriptor = {
        buffer,
        bufferByteLength: autoAllocateChunkSize,
        byteOffset: 0,
        byteLength: autoAllocateChunkSize,
        bytesFilled: 0,
        elementSize: 1,
        viewConstructor: Uint8Array,
        readerType: "default"
      };
      this._pendingPullIntos.push(pullIntoDescriptor);
    }
    ReadableStreamAddReadRequest(stream, readRequest);
    ReadableByteStreamControllerCallPullIfNeeded(this);
  }
};
Object.defineProperties(ReadableByteStreamController.prototype, {
  close: { enumerable: true },
  enqueue: { enumerable: true },
  error: { enumerable: true },
  byobRequest: { enumerable: true },
  desiredSize: { enumerable: true }
});
function IsReadableByteStreamController(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_controlledReadableByteStream")) {
    return false;
  }
  return x3 instanceof ReadableByteStreamController;
}
function IsReadableStreamBYOBRequest(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_associatedReadableByteStreamController")) {
    return false;
  }
  return x3 instanceof ReadableStreamBYOBRequest;
}
function ReadableByteStreamControllerCallPullIfNeeded(controller) {
  const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
  if (!shouldPull) {
    return;
  }
  if (controller._pulling) {
    controller._pullAgain = true;
    return;
  }
  controller._pulling = true;
  const pullPromise = controller._pullAlgorithm();
  uponPromise(pullPromise, () => {
    controller._pulling = false;
    if (controller._pullAgain) {
      controller._pullAgain = false;
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }, (e3) => {
    ReadableByteStreamControllerError(controller, e3);
  });
}
function ReadableByteStreamControllerClearPendingPullIntos(controller) {
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  controller._pendingPullIntos = new SimpleQueue();
}
function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
  let done = false;
  if (stream._state === "closed") {
    done = true;
  }
  const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
  if (pullIntoDescriptor.readerType === "default") {
    ReadableStreamFulfillReadRequest(stream, filledView, done);
  } else {
    ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
  }
}
function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
  const bytesFilled = pullIntoDescriptor.bytesFilled;
  const elementSize = pullIntoDescriptor.elementSize;
  return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
}
function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
  controller._queue.push({ buffer, byteOffset, byteLength });
  controller._queueTotalSize += byteLength;
}
function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
  const elementSize = pullIntoDescriptor.elementSize;
  const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
  const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
  const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
  const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
  let totalBytesToCopyRemaining = maxBytesToCopy;
  let ready = false;
  if (maxAlignedBytes > currentAlignedBytes) {
    totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
    ready = true;
  }
  const queue = controller._queue;
  while (totalBytesToCopyRemaining > 0) {
    const headOfQueue = queue.peek();
    const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
    const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
    CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
    if (headOfQueue.byteLength === bytesToCopy) {
      queue.shift();
    } else {
      headOfQueue.byteOffset += bytesToCopy;
      headOfQueue.byteLength -= bytesToCopy;
    }
    controller._queueTotalSize -= bytesToCopy;
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
    totalBytesToCopyRemaining -= bytesToCopy;
  }
  return ready;
}
function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
  pullIntoDescriptor.bytesFilled += size;
}
function ReadableByteStreamControllerHandleQueueDrain(controller) {
  if (controller._queueTotalSize === 0 && controller._closeRequested) {
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamClose(controller._controlledReadableByteStream);
  } else {
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }
}
function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
  if (controller._byobRequest === null) {
    return;
  }
  controller._byobRequest._associatedReadableByteStreamController = void 0;
  controller._byobRequest._view = null;
  controller._byobRequest = null;
}
function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
  while (controller._pendingPullIntos.length > 0) {
    if (controller._queueTotalSize === 0) {
      return;
    }
    const pullIntoDescriptor = controller._pendingPullIntos.peek();
    if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
      ReadableByteStreamControllerShiftPendingPullInto(controller);
      ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    }
  }
}
function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
  const stream = controller._controlledReadableByteStream;
  let elementSize = 1;
  if (view.constructor !== DataView) {
    elementSize = view.constructor.BYTES_PER_ELEMENT;
  }
  const ctor = view.constructor;
  const buffer = TransferArrayBuffer(view.buffer);
  const pullIntoDescriptor = {
    buffer,
    bufferByteLength: buffer.byteLength,
    byteOffset: view.byteOffset,
    byteLength: view.byteLength,
    bytesFilled: 0,
    elementSize,
    viewConstructor: ctor,
    readerType: "byob"
  };
  if (controller._pendingPullIntos.length > 0) {
    controller._pendingPullIntos.push(pullIntoDescriptor);
    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    return;
  }
  if (stream._state === "closed") {
    const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
    readIntoRequest._closeSteps(emptyView);
    return;
  }
  if (controller._queueTotalSize > 0) {
    if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
      const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
      ReadableByteStreamControllerHandleQueueDrain(controller);
      readIntoRequest._chunkSteps(filledView);
      return;
    }
    if (controller._closeRequested) {
      const e3 = new TypeError("Insufficient bytes to fill elements in the given buffer");
      ReadableByteStreamControllerError(controller, e3);
      readIntoRequest._errorSteps(e3);
      return;
    }
  }
  controller._pendingPullIntos.push(pullIntoDescriptor);
  ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
  ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
  const stream = controller._controlledReadableByteStream;
  if (ReadableStreamHasBYOBReader(stream)) {
    while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
      ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
    }
  }
}
function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
  ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
  if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
    return;
  }
  ReadableByteStreamControllerShiftPendingPullInto(controller);
  const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
  if (remainderSize > 0) {
    const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
    const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
  }
  pullIntoDescriptor.bytesFilled -= remainderSize;
  ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
  ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
}
function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
  const firstDescriptor = controller._pendingPullIntos.peek();
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  const state = controller._controlledReadableByteStream._state;
  if (state === "closed") {
    ReadableByteStreamControllerRespondInClosedState(controller);
  } else {
    ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
  }
  ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerShiftPendingPullInto(controller) {
  const descriptor = controller._pendingPullIntos.shift();
  return descriptor;
}
function ReadableByteStreamControllerShouldCallPull(controller) {
  const stream = controller._controlledReadableByteStream;
  if (stream._state !== "readable") {
    return false;
  }
  if (controller._closeRequested) {
    return false;
  }
  if (!controller._started) {
    return false;
  }
  if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    return true;
  }
  if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
    return true;
  }
  const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
  if (desiredSize > 0) {
    return true;
  }
  return false;
}
function ReadableByteStreamControllerClearAlgorithms(controller) {
  controller._pullAlgorithm = void 0;
  controller._cancelAlgorithm = void 0;
}
function ReadableByteStreamControllerClose(controller) {
  const stream = controller._controlledReadableByteStream;
  if (controller._closeRequested || stream._state !== "readable") {
    return;
  }
  if (controller._queueTotalSize > 0) {
    controller._closeRequested = true;
    return;
  }
  if (controller._pendingPullIntos.length > 0) {
    const firstPendingPullInto = controller._pendingPullIntos.peek();
    if (firstPendingPullInto.bytesFilled > 0) {
      const e3 = new TypeError("Insufficient bytes to fill elements in the given buffer");
      ReadableByteStreamControllerError(controller, e3);
      throw e3;
    }
  }
  ReadableByteStreamControllerClearAlgorithms(controller);
  ReadableStreamClose(stream);
}
function ReadableByteStreamControllerEnqueue(controller, chunk) {
  const stream = controller._controlledReadableByteStream;
  if (controller._closeRequested || stream._state !== "readable") {
    return;
  }
  const buffer = chunk.buffer;
  const byteOffset = chunk.byteOffset;
  const byteLength = chunk.byteLength;
  const transferredBuffer = TransferArrayBuffer(buffer);
  if (controller._pendingPullIntos.length > 0) {
    const firstPendingPullInto = controller._pendingPullIntos.peek();
    if (IsDetachedBuffer(firstPendingPullInto.buffer))
      ;
    firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
  }
  ReadableByteStreamControllerInvalidateBYOBRequest(controller);
  if (ReadableStreamHasDefaultReader(stream)) {
    if (ReadableStreamGetNumReadRequests(stream) === 0) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    } else {
      if (controller._pendingPullIntos.length > 0) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
      }
      const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
      ReadableStreamFulfillReadRequest(stream, transferredView, false);
    }
  } else if (ReadableStreamHasBYOBReader(stream)) {
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  } else {
    ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
  }
  ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerError(controller, e3) {
  const stream = controller._controlledReadableByteStream;
  if (stream._state !== "readable") {
    return;
  }
  ReadableByteStreamControllerClearPendingPullIntos(controller);
  ResetQueue(controller);
  ReadableByteStreamControllerClearAlgorithms(controller);
  ReadableStreamError(stream, e3);
}
function ReadableByteStreamControllerGetBYOBRequest(controller) {
  if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
    const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
    SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
    controller._byobRequest = byobRequest;
  }
  return controller._byobRequest;
}
function ReadableByteStreamControllerGetDesiredSize(controller) {
  const state = controller._controlledReadableByteStream._state;
  if (state === "errored") {
    return null;
  }
  if (state === "closed") {
    return 0;
  }
  return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableByteStreamControllerRespond(controller, bytesWritten) {
  const firstDescriptor = controller._pendingPullIntos.peek();
  const state = controller._controlledReadableByteStream._state;
  if (state === "closed") {
    if (bytesWritten !== 0) {
      throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
    }
  } else {
    if (bytesWritten === 0) {
      throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
    }
    if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
      throw new RangeError("bytesWritten out of range");
    }
  }
  firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
  ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
}
function ReadableByteStreamControllerRespondWithNewView(controller, view) {
  const firstDescriptor = controller._pendingPullIntos.peek();
  const state = controller._controlledReadableByteStream._state;
  if (state === "closed") {
    if (view.byteLength !== 0) {
      throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
    }
  } else {
    if (view.byteLength === 0) {
      throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
    }
  }
  if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
    throw new RangeError("The region specified by view does not match byobRequest");
  }
  if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
    throw new RangeError("The buffer of view has different capacity than byobRequest");
  }
  if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
    throw new RangeError("The region specified by view is larger than byobRequest");
  }
  const viewByteLength = view.byteLength;
  firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
  ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
}
function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
  controller._controlledReadableByteStream = stream;
  controller._pullAgain = false;
  controller._pulling = false;
  controller._byobRequest = null;
  controller._queue = controller._queueTotalSize = void 0;
  ResetQueue(controller);
  controller._closeRequested = false;
  controller._started = false;
  controller._strategyHWM = highWaterMark;
  controller._pullAlgorithm = pullAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  controller._autoAllocateChunkSize = autoAllocateChunkSize;
  controller._pendingPullIntos = new SimpleQueue();
  stream._readableStreamController = controller;
  const startResult = startAlgorithm();
  uponPromise(promiseResolvedWith(startResult), () => {
    controller._started = true;
    ReadableByteStreamControllerCallPullIfNeeded(controller);
  }, (r3) => {
    ReadableByteStreamControllerError(controller, r3);
  });
}
function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
  const controller = Object.create(ReadableByteStreamController.prototype);
  let startAlgorithm = () => void 0;
  let pullAlgorithm = () => promiseResolvedWith(void 0);
  let cancelAlgorithm = () => promiseResolvedWith(void 0);
  if (underlyingByteSource.start !== void 0) {
    startAlgorithm = () => underlyingByteSource.start(controller);
  }
  if (underlyingByteSource.pull !== void 0) {
    pullAlgorithm = () => underlyingByteSource.pull(controller);
  }
  if (underlyingByteSource.cancel !== void 0) {
    cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason);
  }
  const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
  if (autoAllocateChunkSize === 0) {
    throw new TypeError("autoAllocateChunkSize must be greater than 0");
  }
  SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
}
function SetUpReadableStreamBYOBRequest(request, controller, view) {
  request._associatedReadableByteStreamController = controller;
  request._view = view;
}
function byobRequestBrandCheckException(name) {
  return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
}
function byteStreamControllerBrandCheckException(name) {
  return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
}
function AcquireReadableStreamBYOBReader(stream) {
  return new ReadableStreamBYOBReader(stream);
}
function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
  stream._reader._readIntoRequests.push(readIntoRequest);
}
function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
  const reader = stream._reader;
  const readIntoRequest = reader._readIntoRequests.shift();
  if (done) {
    readIntoRequest._closeSteps(chunk);
  } else {
    readIntoRequest._chunkSteps(chunk);
  }
}
function ReadableStreamGetNumReadIntoRequests(stream) {
  return stream._reader._readIntoRequests.length;
}
function ReadableStreamHasBYOBReader(stream) {
  const reader = stream._reader;
  if (reader === void 0) {
    return false;
  }
  if (!IsReadableStreamBYOBReader(reader)) {
    return false;
  }
  return true;
}
var ReadableStreamBYOBReader = class {
  constructor(stream) {
    assertRequiredArgument(stream, 1, "ReadableStreamBYOBReader");
    assertReadableStream(stream, "First parameter");
    if (IsReadableStreamLocked(stream)) {
      throw new TypeError("This stream has already been locked for exclusive reading by another reader");
    }
    if (!IsReadableByteStreamController(stream._readableStreamController)) {
      throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
    }
    ReadableStreamReaderGenericInitialize(this, stream);
    this._readIntoRequests = new SimpleQueue();
  }
  get closed() {
    if (!IsReadableStreamBYOBReader(this)) {
      return promiseRejectedWith(byobReaderBrandCheckException("closed"));
    }
    return this._closedPromise;
  }
  cancel(reason = void 0) {
    if (!IsReadableStreamBYOBReader(this)) {
      return promiseRejectedWith(byobReaderBrandCheckException("cancel"));
    }
    if (this._ownerReadableStream === void 0) {
      return promiseRejectedWith(readerLockException("cancel"));
    }
    return ReadableStreamReaderGenericCancel(this, reason);
  }
  read(view) {
    if (!IsReadableStreamBYOBReader(this)) {
      return promiseRejectedWith(byobReaderBrandCheckException("read"));
    }
    if (!ArrayBuffer.isView(view)) {
      return promiseRejectedWith(new TypeError("view must be an array buffer view"));
    }
    if (view.byteLength === 0) {
      return promiseRejectedWith(new TypeError("view must have non-zero byteLength"));
    }
    if (view.buffer.byteLength === 0) {
      return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
    }
    if (IsDetachedBuffer(view.buffer))
      ;
    if (this._ownerReadableStream === void 0) {
      return promiseRejectedWith(readerLockException("read from"));
    }
    let resolvePromise;
    let rejectPromise;
    const promise = newPromise((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
    });
    const readIntoRequest = {
      _chunkSteps: (chunk) => resolvePromise({ value: chunk, done: false }),
      _closeSteps: (chunk) => resolvePromise({ value: chunk, done: true }),
      _errorSteps: (e3) => rejectPromise(e3)
    };
    ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
    return promise;
  }
  releaseLock() {
    if (!IsReadableStreamBYOBReader(this)) {
      throw byobReaderBrandCheckException("releaseLock");
    }
    if (this._ownerReadableStream === void 0) {
      return;
    }
    if (this._readIntoRequests.length > 0) {
      throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
    }
    ReadableStreamReaderGenericRelease(this);
  }
};
Object.defineProperties(ReadableStreamBYOBReader.prototype, {
  cancel: { enumerable: true },
  read: { enumerable: true },
  releaseLock: { enumerable: true },
  closed: { enumerable: true }
});
function IsReadableStreamBYOBReader(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_readIntoRequests")) {
    return false;
  }
  return x3 instanceof ReadableStreamBYOBReader;
}
function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
  const stream = reader._ownerReadableStream;
  stream._disturbed = true;
  if (stream._state === "errored") {
    readIntoRequest._errorSteps(stream._storedError);
  } else {
    ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
  }
}
function byobReaderBrandCheckException(name) {
  return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
}
function ExtractHighWaterMark(strategy, defaultHWM) {
  const { highWaterMark } = strategy;
  if (highWaterMark === void 0) {
    return defaultHWM;
  }
  if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
    throw new RangeError("Invalid highWaterMark");
  }
  return highWaterMark;
}
function ExtractSizeAlgorithm(strategy) {
  const { size } = strategy;
  if (!size) {
    return () => 1;
  }
  return size;
}
function convertQueuingStrategy(init2, context) {
  assertDictionary(init2, context);
  const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
  const size = init2 === null || init2 === void 0 ? void 0 : init2.size;
  return {
    highWaterMark: highWaterMark === void 0 ? void 0 : convertUnrestrictedDouble(highWaterMark),
    size: size === void 0 ? void 0 : convertQueuingStrategySize(size, `${context} has member 'size' that`)
  };
}
function convertQueuingStrategySize(fn, context) {
  assertFunction(fn, context);
  return (chunk) => convertUnrestrictedDouble(fn(chunk));
}
function convertUnderlyingSink(original, context) {
  assertDictionary(original, context);
  const abort = original === null || original === void 0 ? void 0 : original.abort;
  const close = original === null || original === void 0 ? void 0 : original.close;
  const start = original === null || original === void 0 ? void 0 : original.start;
  const type = original === null || original === void 0 ? void 0 : original.type;
  const write = original === null || original === void 0 ? void 0 : original.write;
  return {
    abort: abort === void 0 ? void 0 : convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
    close: close === void 0 ? void 0 : convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
    start: start === void 0 ? void 0 : convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
    write: write === void 0 ? void 0 : convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
    type
  };
}
function convertUnderlyingSinkAbortCallback(fn, original, context) {
  assertFunction(fn, context);
  return (reason) => promiseCall(fn, original, [reason]);
}
function convertUnderlyingSinkCloseCallback(fn, original, context) {
  assertFunction(fn, context);
  return () => promiseCall(fn, original, []);
}
function convertUnderlyingSinkStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return (controller) => reflectCall(fn, original, [controller]);
}
function convertUnderlyingSinkWriteCallback(fn, original, context) {
  assertFunction(fn, context);
  return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
}
function assertWritableStream(x3, context) {
  if (!IsWritableStream(x3)) {
    throw new TypeError(`${context} is not a WritableStream.`);
  }
}
function isAbortSignal2(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  try {
    return typeof value.aborted === "boolean";
  } catch (_a2) {
    return false;
  }
}
var WritableStream = class {
  constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
    if (rawUnderlyingSink === void 0) {
      rawUnderlyingSink = null;
    } else {
      assertObject(rawUnderlyingSink, "First parameter");
    }
    const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
    const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, "First parameter");
    InitializeWritableStream(this);
    const type = underlyingSink.type;
    if (type !== void 0) {
      throw new RangeError("Invalid type is specified");
    }
    const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
    const highWaterMark = ExtractHighWaterMark(strategy, 1);
    SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
  }
  get locked() {
    if (!IsWritableStream(this)) {
      throw streamBrandCheckException$2("locked");
    }
    return IsWritableStreamLocked(this);
  }
  abort(reason = void 0) {
    if (!IsWritableStream(this)) {
      return promiseRejectedWith(streamBrandCheckException$2("abort"));
    }
    if (IsWritableStreamLocked(this)) {
      return promiseRejectedWith(new TypeError("Cannot abort a stream that already has a writer"));
    }
    return WritableStreamAbort(this, reason);
  }
  close() {
    if (!IsWritableStream(this)) {
      return promiseRejectedWith(streamBrandCheckException$2("close"));
    }
    if (IsWritableStreamLocked(this)) {
      return promiseRejectedWith(new TypeError("Cannot close a stream that already has a writer"));
    }
    if (WritableStreamCloseQueuedOrInFlight(this)) {
      return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
    }
    return WritableStreamClose(this);
  }
  getWriter() {
    if (!IsWritableStream(this)) {
      throw streamBrandCheckException$2("getWriter");
    }
    return AcquireWritableStreamDefaultWriter(this);
  }
};
Object.defineProperties(WritableStream.prototype, {
  abort: { enumerable: true },
  close: { enumerable: true },
  getWriter: { enumerable: true },
  locked: { enumerable: true }
});
function AcquireWritableStreamDefaultWriter(stream) {
  return new WritableStreamDefaultWriter(stream);
}
function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
  const stream = Object.create(WritableStream.prototype);
  InitializeWritableStream(stream);
  const controller = Object.create(WritableStreamDefaultController.prototype);
  SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
  return stream;
}
function InitializeWritableStream(stream) {
  stream._state = "writable";
  stream._storedError = void 0;
  stream._writer = void 0;
  stream._writableStreamController = void 0;
  stream._writeRequests = new SimpleQueue();
  stream._inFlightWriteRequest = void 0;
  stream._closeRequest = void 0;
  stream._inFlightCloseRequest = void 0;
  stream._pendingAbortRequest = void 0;
  stream._backpressure = false;
}
function IsWritableStream(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_writableStreamController")) {
    return false;
  }
  return x3 instanceof WritableStream;
}
function IsWritableStreamLocked(stream) {
  if (stream._writer === void 0) {
    return false;
  }
  return true;
}
function WritableStreamAbort(stream, reason) {
  var _a2;
  if (stream._state === "closed" || stream._state === "errored") {
    return promiseResolvedWith(void 0);
  }
  stream._writableStreamController._abortReason = reason;
  (_a2 = stream._writableStreamController._abortController) === null || _a2 === void 0 ? void 0 : _a2.abort();
  const state = stream._state;
  if (state === "closed" || state === "errored") {
    return promiseResolvedWith(void 0);
  }
  if (stream._pendingAbortRequest !== void 0) {
    return stream._pendingAbortRequest._promise;
  }
  let wasAlreadyErroring = false;
  if (state === "erroring") {
    wasAlreadyErroring = true;
    reason = void 0;
  }
  const promise = newPromise((resolve, reject) => {
    stream._pendingAbortRequest = {
      _promise: void 0,
      _resolve: resolve,
      _reject: reject,
      _reason: reason,
      _wasAlreadyErroring: wasAlreadyErroring
    };
  });
  stream._pendingAbortRequest._promise = promise;
  if (!wasAlreadyErroring) {
    WritableStreamStartErroring(stream, reason);
  }
  return promise;
}
function WritableStreamClose(stream) {
  const state = stream._state;
  if (state === "closed" || state === "errored") {
    return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
  }
  const promise = newPromise((resolve, reject) => {
    const closeRequest = {
      _resolve: resolve,
      _reject: reject
    };
    stream._closeRequest = closeRequest;
  });
  const writer = stream._writer;
  if (writer !== void 0 && stream._backpressure && state === "writable") {
    defaultWriterReadyPromiseResolve(writer);
  }
  WritableStreamDefaultControllerClose(stream._writableStreamController);
  return promise;
}
function WritableStreamAddWriteRequest(stream) {
  const promise = newPromise((resolve, reject) => {
    const writeRequest = {
      _resolve: resolve,
      _reject: reject
    };
    stream._writeRequests.push(writeRequest);
  });
  return promise;
}
function WritableStreamDealWithRejection(stream, error2) {
  const state = stream._state;
  if (state === "writable") {
    WritableStreamStartErroring(stream, error2);
    return;
  }
  WritableStreamFinishErroring(stream);
}
function WritableStreamStartErroring(stream, reason) {
  const controller = stream._writableStreamController;
  stream._state = "erroring";
  stream._storedError = reason;
  const writer = stream._writer;
  if (writer !== void 0) {
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
  }
  if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
    WritableStreamFinishErroring(stream);
  }
}
function WritableStreamFinishErroring(stream) {
  stream._state = "errored";
  stream._writableStreamController[ErrorSteps]();
  const storedError = stream._storedError;
  stream._writeRequests.forEach((writeRequest) => {
    writeRequest._reject(storedError);
  });
  stream._writeRequests = new SimpleQueue();
  if (stream._pendingAbortRequest === void 0) {
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    return;
  }
  const abortRequest = stream._pendingAbortRequest;
  stream._pendingAbortRequest = void 0;
  if (abortRequest._wasAlreadyErroring) {
    abortRequest._reject(storedError);
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    return;
  }
  const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
  uponPromise(promise, () => {
    abortRequest._resolve();
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
  }, (reason) => {
    abortRequest._reject(reason);
    WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
  });
}
function WritableStreamFinishInFlightWrite(stream) {
  stream._inFlightWriteRequest._resolve(void 0);
  stream._inFlightWriteRequest = void 0;
}
function WritableStreamFinishInFlightWriteWithError(stream, error2) {
  stream._inFlightWriteRequest._reject(error2);
  stream._inFlightWriteRequest = void 0;
  WritableStreamDealWithRejection(stream, error2);
}
function WritableStreamFinishInFlightClose(stream) {
  stream._inFlightCloseRequest._resolve(void 0);
  stream._inFlightCloseRequest = void 0;
  const state = stream._state;
  if (state === "erroring") {
    stream._storedError = void 0;
    if (stream._pendingAbortRequest !== void 0) {
      stream._pendingAbortRequest._resolve();
      stream._pendingAbortRequest = void 0;
    }
  }
  stream._state = "closed";
  const writer = stream._writer;
  if (writer !== void 0) {
    defaultWriterClosedPromiseResolve(writer);
  }
}
function WritableStreamFinishInFlightCloseWithError(stream, error2) {
  stream._inFlightCloseRequest._reject(error2);
  stream._inFlightCloseRequest = void 0;
  if (stream._pendingAbortRequest !== void 0) {
    stream._pendingAbortRequest._reject(error2);
    stream._pendingAbortRequest = void 0;
  }
  WritableStreamDealWithRejection(stream, error2);
}
function WritableStreamCloseQueuedOrInFlight(stream) {
  if (stream._closeRequest === void 0 && stream._inFlightCloseRequest === void 0) {
    return false;
  }
  return true;
}
function WritableStreamHasOperationMarkedInFlight(stream) {
  if (stream._inFlightWriteRequest === void 0 && stream._inFlightCloseRequest === void 0) {
    return false;
  }
  return true;
}
function WritableStreamMarkCloseRequestInFlight(stream) {
  stream._inFlightCloseRequest = stream._closeRequest;
  stream._closeRequest = void 0;
}
function WritableStreamMarkFirstWriteRequestInFlight(stream) {
  stream._inFlightWriteRequest = stream._writeRequests.shift();
}
function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
  if (stream._closeRequest !== void 0) {
    stream._closeRequest._reject(stream._storedError);
    stream._closeRequest = void 0;
  }
  const writer = stream._writer;
  if (writer !== void 0) {
    defaultWriterClosedPromiseReject(writer, stream._storedError);
  }
}
function WritableStreamUpdateBackpressure(stream, backpressure) {
  const writer = stream._writer;
  if (writer !== void 0 && backpressure !== stream._backpressure) {
    if (backpressure) {
      defaultWriterReadyPromiseReset(writer);
    } else {
      defaultWriterReadyPromiseResolve(writer);
    }
  }
  stream._backpressure = backpressure;
}
var WritableStreamDefaultWriter = class {
  constructor(stream) {
    assertRequiredArgument(stream, 1, "WritableStreamDefaultWriter");
    assertWritableStream(stream, "First parameter");
    if (IsWritableStreamLocked(stream)) {
      throw new TypeError("This stream has already been locked for exclusive writing by another writer");
    }
    this._ownerWritableStream = stream;
    stream._writer = this;
    const state = stream._state;
    if (state === "writable") {
      if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
        defaultWriterReadyPromiseInitialize(this);
      } else {
        defaultWriterReadyPromiseInitializeAsResolved(this);
      }
      defaultWriterClosedPromiseInitialize(this);
    } else if (state === "erroring") {
      defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
      defaultWriterClosedPromiseInitialize(this);
    } else if (state === "closed") {
      defaultWriterReadyPromiseInitializeAsResolved(this);
      defaultWriterClosedPromiseInitializeAsResolved(this);
    } else {
      const storedError = stream._storedError;
      defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
      defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
    }
  }
  get closed() {
    if (!IsWritableStreamDefaultWriter(this)) {
      return promiseRejectedWith(defaultWriterBrandCheckException("closed"));
    }
    return this._closedPromise;
  }
  get desiredSize() {
    if (!IsWritableStreamDefaultWriter(this)) {
      throw defaultWriterBrandCheckException("desiredSize");
    }
    if (this._ownerWritableStream === void 0) {
      throw defaultWriterLockException("desiredSize");
    }
    return WritableStreamDefaultWriterGetDesiredSize(this);
  }
  get ready() {
    if (!IsWritableStreamDefaultWriter(this)) {
      return promiseRejectedWith(defaultWriterBrandCheckException("ready"));
    }
    return this._readyPromise;
  }
  abort(reason = void 0) {
    if (!IsWritableStreamDefaultWriter(this)) {
      return promiseRejectedWith(defaultWriterBrandCheckException("abort"));
    }
    if (this._ownerWritableStream === void 0) {
      return promiseRejectedWith(defaultWriterLockException("abort"));
    }
    return WritableStreamDefaultWriterAbort(this, reason);
  }
  close() {
    if (!IsWritableStreamDefaultWriter(this)) {
      return promiseRejectedWith(defaultWriterBrandCheckException("close"));
    }
    const stream = this._ownerWritableStream;
    if (stream === void 0) {
      return promiseRejectedWith(defaultWriterLockException("close"));
    }
    if (WritableStreamCloseQueuedOrInFlight(stream)) {
      return promiseRejectedWith(new TypeError("Cannot close an already-closing stream"));
    }
    return WritableStreamDefaultWriterClose(this);
  }
  releaseLock() {
    if (!IsWritableStreamDefaultWriter(this)) {
      throw defaultWriterBrandCheckException("releaseLock");
    }
    const stream = this._ownerWritableStream;
    if (stream === void 0) {
      return;
    }
    WritableStreamDefaultWriterRelease(this);
  }
  write(chunk = void 0) {
    if (!IsWritableStreamDefaultWriter(this)) {
      return promiseRejectedWith(defaultWriterBrandCheckException("write"));
    }
    if (this._ownerWritableStream === void 0) {
      return promiseRejectedWith(defaultWriterLockException("write to"));
    }
    return WritableStreamDefaultWriterWrite(this, chunk);
  }
};
Object.defineProperties(WritableStreamDefaultWriter.prototype, {
  abort: { enumerable: true },
  close: { enumerable: true },
  releaseLock: { enumerable: true },
  write: { enumerable: true },
  closed: { enumerable: true },
  desiredSize: { enumerable: true },
  ready: { enumerable: true }
});
function IsWritableStreamDefaultWriter(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_ownerWritableStream")) {
    return false;
  }
  return x3 instanceof WritableStreamDefaultWriter;
}
function WritableStreamDefaultWriterAbort(writer, reason) {
  const stream = writer._ownerWritableStream;
  return WritableStreamAbort(stream, reason);
}
function WritableStreamDefaultWriterClose(writer) {
  const stream = writer._ownerWritableStream;
  return WritableStreamClose(stream);
}
function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
  const stream = writer._ownerWritableStream;
  const state = stream._state;
  if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
    return promiseResolvedWith(void 0);
  }
  if (state === "errored") {
    return promiseRejectedWith(stream._storedError);
  }
  return WritableStreamDefaultWriterClose(writer);
}
function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error2) {
  if (writer._closedPromiseState === "pending") {
    defaultWriterClosedPromiseReject(writer, error2);
  } else {
    defaultWriterClosedPromiseResetToRejected(writer, error2);
  }
}
function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error2) {
  if (writer._readyPromiseState === "pending") {
    defaultWriterReadyPromiseReject(writer, error2);
  } else {
    defaultWriterReadyPromiseResetToRejected(writer, error2);
  }
}
function WritableStreamDefaultWriterGetDesiredSize(writer) {
  const stream = writer._ownerWritableStream;
  const state = stream._state;
  if (state === "errored" || state === "erroring") {
    return null;
  }
  if (state === "closed") {
    return 0;
  }
  return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
}
function WritableStreamDefaultWriterRelease(writer) {
  const stream = writer._ownerWritableStream;
  const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
  WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
  WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
  stream._writer = void 0;
  writer._ownerWritableStream = void 0;
}
function WritableStreamDefaultWriterWrite(writer, chunk) {
  const stream = writer._ownerWritableStream;
  const controller = stream._writableStreamController;
  const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
  if (stream !== writer._ownerWritableStream) {
    return promiseRejectedWith(defaultWriterLockException("write to"));
  }
  const state = stream._state;
  if (state === "errored") {
    return promiseRejectedWith(stream._storedError);
  }
  if (WritableStreamCloseQueuedOrInFlight(stream) || state === "closed") {
    return promiseRejectedWith(new TypeError("The stream is closing or closed and cannot be written to"));
  }
  if (state === "erroring") {
    return promiseRejectedWith(stream._storedError);
  }
  const promise = WritableStreamAddWriteRequest(stream);
  WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
  return promise;
}
var closeSentinel = {};
var WritableStreamDefaultController = class {
  constructor() {
    throw new TypeError("Illegal constructor");
  }
  get abortReason() {
    if (!IsWritableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$2("abortReason");
    }
    return this._abortReason;
  }
  get signal() {
    if (!IsWritableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$2("signal");
    }
    if (this._abortController === void 0) {
      throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
    }
    return this._abortController.signal;
  }
  error(e3 = void 0) {
    if (!IsWritableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$2("error");
    }
    const state = this._controlledWritableStream._state;
    if (state !== "writable") {
      return;
    }
    WritableStreamDefaultControllerError(this, e3);
  }
  [AbortSteps](reason) {
    const result = this._abortAlgorithm(reason);
    WritableStreamDefaultControllerClearAlgorithms(this);
    return result;
  }
  [ErrorSteps]() {
    ResetQueue(this);
  }
};
Object.defineProperties(WritableStreamDefaultController.prototype, {
  abortReason: { enumerable: true },
  signal: { enumerable: true },
  error: { enumerable: true }
});
function IsWritableStreamDefaultController(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_controlledWritableStream")) {
    return false;
  }
  return x3 instanceof WritableStreamDefaultController;
}
function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
  controller._controlledWritableStream = stream;
  stream._writableStreamController = controller;
  controller._queue = void 0;
  controller._queueTotalSize = void 0;
  ResetQueue(controller);
  controller._abortReason = void 0;
  controller._abortController = new AbortController2();
  controller._started = false;
  controller._strategySizeAlgorithm = sizeAlgorithm;
  controller._strategyHWM = highWaterMark;
  controller._writeAlgorithm = writeAlgorithm;
  controller._closeAlgorithm = closeAlgorithm;
  controller._abortAlgorithm = abortAlgorithm;
  const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
  WritableStreamUpdateBackpressure(stream, backpressure);
  const startResult = startAlgorithm();
  const startPromise = promiseResolvedWith(startResult);
  uponPromise(startPromise, () => {
    controller._started = true;
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }, (r3) => {
    controller._started = true;
    WritableStreamDealWithRejection(stream, r3);
  });
}
function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
  const controller = Object.create(WritableStreamDefaultController.prototype);
  let startAlgorithm = () => void 0;
  let writeAlgorithm = () => promiseResolvedWith(void 0);
  let closeAlgorithm = () => promiseResolvedWith(void 0);
  let abortAlgorithm = () => promiseResolvedWith(void 0);
  if (underlyingSink.start !== void 0) {
    startAlgorithm = () => underlyingSink.start(controller);
  }
  if (underlyingSink.write !== void 0) {
    writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller);
  }
  if (underlyingSink.close !== void 0) {
    closeAlgorithm = () => underlyingSink.close();
  }
  if (underlyingSink.abort !== void 0) {
    abortAlgorithm = (reason) => underlyingSink.abort(reason);
  }
  SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
}
function WritableStreamDefaultControllerClearAlgorithms(controller) {
  controller._writeAlgorithm = void 0;
  controller._closeAlgorithm = void 0;
  controller._abortAlgorithm = void 0;
  controller._strategySizeAlgorithm = void 0;
}
function WritableStreamDefaultControllerClose(controller) {
  EnqueueValueWithSize(controller, closeSentinel, 0);
  WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
  try {
    return controller._strategySizeAlgorithm(chunk);
  } catch (chunkSizeE) {
    WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
    return 1;
  }
}
function WritableStreamDefaultControllerGetDesiredSize(controller) {
  return controller._strategyHWM - controller._queueTotalSize;
}
function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
  try {
    EnqueueValueWithSize(controller, chunk, chunkSize);
  } catch (enqueueE) {
    WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
    return;
  }
  const stream = controller._controlledWritableStream;
  if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === "writable") {
    const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
  }
  WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
  const stream = controller._controlledWritableStream;
  if (!controller._started) {
    return;
  }
  if (stream._inFlightWriteRequest !== void 0) {
    return;
  }
  const state = stream._state;
  if (state === "erroring") {
    WritableStreamFinishErroring(stream);
    return;
  }
  if (controller._queue.length === 0) {
    return;
  }
  const value = PeekQueueValue(controller);
  if (value === closeSentinel) {
    WritableStreamDefaultControllerProcessClose(controller);
  } else {
    WritableStreamDefaultControllerProcessWrite(controller, value);
  }
}
function WritableStreamDefaultControllerErrorIfNeeded(controller, error2) {
  if (controller._controlledWritableStream._state === "writable") {
    WritableStreamDefaultControllerError(controller, error2);
  }
}
function WritableStreamDefaultControllerProcessClose(controller) {
  const stream = controller._controlledWritableStream;
  WritableStreamMarkCloseRequestInFlight(stream);
  DequeueValue(controller);
  const sinkClosePromise = controller._closeAlgorithm();
  WritableStreamDefaultControllerClearAlgorithms(controller);
  uponPromise(sinkClosePromise, () => {
    WritableStreamFinishInFlightClose(stream);
  }, (reason) => {
    WritableStreamFinishInFlightCloseWithError(stream, reason);
  });
}
function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
  const stream = controller._controlledWritableStream;
  WritableStreamMarkFirstWriteRequestInFlight(stream);
  const sinkWritePromise = controller._writeAlgorithm(chunk);
  uponPromise(sinkWritePromise, () => {
    WritableStreamFinishInFlightWrite(stream);
    const state = stream._state;
    DequeueValue(controller);
    if (!WritableStreamCloseQueuedOrInFlight(stream) && state === "writable") {
      const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }, (reason) => {
    if (stream._state === "writable") {
      WritableStreamDefaultControllerClearAlgorithms(controller);
    }
    WritableStreamFinishInFlightWriteWithError(stream, reason);
  });
}
function WritableStreamDefaultControllerGetBackpressure(controller) {
  const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
  return desiredSize <= 0;
}
function WritableStreamDefaultControllerError(controller, error2) {
  const stream = controller._controlledWritableStream;
  WritableStreamDefaultControllerClearAlgorithms(controller);
  WritableStreamStartErroring(stream, error2);
}
function streamBrandCheckException$2(name) {
  return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
}
function defaultControllerBrandCheckException$2(name) {
  return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
}
function defaultWriterBrandCheckException(name) {
  return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
}
function defaultWriterLockException(name) {
  return new TypeError("Cannot " + name + " a stream using a released writer");
}
function defaultWriterClosedPromiseInitialize(writer) {
  writer._closedPromise = newPromise((resolve, reject) => {
    writer._closedPromise_resolve = resolve;
    writer._closedPromise_reject = reject;
    writer._closedPromiseState = "pending";
  });
}
function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
  defaultWriterClosedPromiseInitialize(writer);
  defaultWriterClosedPromiseReject(writer, reason);
}
function defaultWriterClosedPromiseInitializeAsResolved(writer) {
  defaultWriterClosedPromiseInitialize(writer);
  defaultWriterClosedPromiseResolve(writer);
}
function defaultWriterClosedPromiseReject(writer, reason) {
  if (writer._closedPromise_reject === void 0) {
    return;
  }
  setPromiseIsHandledToTrue(writer._closedPromise);
  writer._closedPromise_reject(reason);
  writer._closedPromise_resolve = void 0;
  writer._closedPromise_reject = void 0;
  writer._closedPromiseState = "rejected";
}
function defaultWriterClosedPromiseResetToRejected(writer, reason) {
  defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterClosedPromiseResolve(writer) {
  if (writer._closedPromise_resolve === void 0) {
    return;
  }
  writer._closedPromise_resolve(void 0);
  writer._closedPromise_resolve = void 0;
  writer._closedPromise_reject = void 0;
  writer._closedPromiseState = "resolved";
}
function defaultWriterReadyPromiseInitialize(writer) {
  writer._readyPromise = newPromise((resolve, reject) => {
    writer._readyPromise_resolve = resolve;
    writer._readyPromise_reject = reject;
  });
  writer._readyPromiseState = "pending";
}
function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
  defaultWriterReadyPromiseInitialize(writer);
  defaultWriterReadyPromiseReject(writer, reason);
}
function defaultWriterReadyPromiseInitializeAsResolved(writer) {
  defaultWriterReadyPromiseInitialize(writer);
  defaultWriterReadyPromiseResolve(writer);
}
function defaultWriterReadyPromiseReject(writer, reason) {
  if (writer._readyPromise_reject === void 0) {
    return;
  }
  setPromiseIsHandledToTrue(writer._readyPromise);
  writer._readyPromise_reject(reason);
  writer._readyPromise_resolve = void 0;
  writer._readyPromise_reject = void 0;
  writer._readyPromiseState = "rejected";
}
function defaultWriterReadyPromiseReset(writer) {
  defaultWriterReadyPromiseInitialize(writer);
}
function defaultWriterReadyPromiseResetToRejected(writer, reason) {
  defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterReadyPromiseResolve(writer) {
  if (writer._readyPromise_resolve === void 0) {
    return;
  }
  writer._readyPromise_resolve(void 0);
  writer._readyPromise_resolve = void 0;
  writer._readyPromise_reject = void 0;
  writer._readyPromiseState = "fulfilled";
}
function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
  const reader = AcquireReadableStreamDefaultReader(source);
  const writer = AcquireWritableStreamDefaultWriter(dest);
  source._disturbed = true;
  let shuttingDown = false;
  let currentWrite = promiseResolvedWith(void 0);
  return newPromise((resolve, reject) => {
    let abortAlgorithm;
    if (signal !== void 0) {
      abortAlgorithm = () => {
        const error2 = new DOMException3("Aborted", "AbortError");
        const actions = [];
        if (!preventAbort) {
          actions.push(() => {
            if (dest._state === "writable") {
              return WritableStreamAbort(dest, error2);
            }
            return promiseResolvedWith(void 0);
          });
        }
        if (!preventCancel) {
          actions.push(() => {
            if (source._state === "readable") {
              return ReadableStreamCancel(source, error2);
            }
            return promiseResolvedWith(void 0);
          });
        }
        shutdownWithAction(() => Promise.all(actions.map((action) => action())), true, error2);
      };
      if (signal.aborted) {
        abortAlgorithm();
        return;
      }
      signal.addEventListener("abort", abortAlgorithm);
    }
    function pipeLoop() {
      return newPromise((resolveLoop, rejectLoop) => {
        function next(done) {
          if (done) {
            resolveLoop();
          } else {
            PerformPromiseThen(pipeStep(), next, rejectLoop);
          }
        }
        next(false);
      });
    }
    function pipeStep() {
      if (shuttingDown) {
        return promiseResolvedWith(true);
      }
      return PerformPromiseThen(writer._readyPromise, () => {
        return newPromise((resolveRead, rejectRead) => {
          ReadableStreamDefaultReaderRead(reader, {
            _chunkSteps: (chunk) => {
              currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), void 0, noop2);
              resolveRead(false);
            },
            _closeSteps: () => resolveRead(true),
            _errorSteps: rejectRead
          });
        });
      });
    }
    isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
      if (!preventAbort) {
        shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
      } else {
        shutdown(true, storedError);
      }
    });
    isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
      if (!preventCancel) {
        shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
      } else {
        shutdown(true, storedError);
      }
    });
    isOrBecomesClosed(source, reader._closedPromise, () => {
      if (!preventClose) {
        shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
      } else {
        shutdown();
      }
    });
    if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === "closed") {
      const destClosed = new TypeError("the destination writable stream closed before all data could be piped to it");
      if (!preventCancel) {
        shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
      } else {
        shutdown(true, destClosed);
      }
    }
    setPromiseIsHandledToTrue(pipeLoop());
    function waitForWritesToFinish() {
      const oldCurrentWrite = currentWrite;
      return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : void 0);
    }
    function isOrBecomesErrored(stream, promise, action) {
      if (stream._state === "errored") {
        action(stream._storedError);
      } else {
        uponRejection(promise, action);
      }
    }
    function isOrBecomesClosed(stream, promise, action) {
      if (stream._state === "closed") {
        action();
      } else {
        uponFulfillment(promise, action);
      }
    }
    function shutdownWithAction(action, originalIsError, originalError) {
      if (shuttingDown) {
        return;
      }
      shuttingDown = true;
      if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
        uponFulfillment(waitForWritesToFinish(), doTheRest);
      } else {
        doTheRest();
      }
      function doTheRest() {
        uponPromise(action(), () => finalize(originalIsError, originalError), (newError) => finalize(true, newError));
      }
    }
    function shutdown(isError, error2) {
      if (shuttingDown) {
        return;
      }
      shuttingDown = true;
      if (dest._state === "writable" && !WritableStreamCloseQueuedOrInFlight(dest)) {
        uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error2));
      } else {
        finalize(isError, error2);
      }
    }
    function finalize(isError, error2) {
      WritableStreamDefaultWriterRelease(writer);
      ReadableStreamReaderGenericRelease(reader);
      if (signal !== void 0) {
        signal.removeEventListener("abort", abortAlgorithm);
      }
      if (isError) {
        reject(error2);
      } else {
        resolve(void 0);
      }
    }
  });
}
var ReadableStreamDefaultController = class {
  constructor() {
    throw new TypeError("Illegal constructor");
  }
  get desiredSize() {
    if (!IsReadableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$1("desiredSize");
    }
    return ReadableStreamDefaultControllerGetDesiredSize(this);
  }
  close() {
    if (!IsReadableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$1("close");
    }
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
      throw new TypeError("The stream is not in a state that permits close");
    }
    ReadableStreamDefaultControllerClose(this);
  }
  enqueue(chunk = void 0) {
    if (!IsReadableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$1("enqueue");
    }
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
      throw new TypeError("The stream is not in a state that permits enqueue");
    }
    return ReadableStreamDefaultControllerEnqueue(this, chunk);
  }
  error(e3 = void 0) {
    if (!IsReadableStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException$1("error");
    }
    ReadableStreamDefaultControllerError(this, e3);
  }
  [CancelSteps](reason) {
    ResetQueue(this);
    const result = this._cancelAlgorithm(reason);
    ReadableStreamDefaultControllerClearAlgorithms(this);
    return result;
  }
  [PullSteps](readRequest) {
    const stream = this._controlledReadableStream;
    if (this._queue.length > 0) {
      const chunk = DequeueValue(this);
      if (this._closeRequested && this._queue.length === 0) {
        ReadableStreamDefaultControllerClearAlgorithms(this);
        ReadableStreamClose(stream);
      } else {
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
      }
      readRequest._chunkSteps(chunk);
    } else {
      ReadableStreamAddReadRequest(stream, readRequest);
      ReadableStreamDefaultControllerCallPullIfNeeded(this);
    }
  }
};
Object.defineProperties(ReadableStreamDefaultController.prototype, {
  close: { enumerable: true },
  enqueue: { enumerable: true },
  error: { enumerable: true },
  desiredSize: { enumerable: true }
});
function IsReadableStreamDefaultController(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_controlledReadableStream")) {
    return false;
  }
  return x3 instanceof ReadableStreamDefaultController;
}
function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
  const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
  if (!shouldPull) {
    return;
  }
  if (controller._pulling) {
    controller._pullAgain = true;
    return;
  }
  controller._pulling = true;
  const pullPromise = controller._pullAlgorithm();
  uponPromise(pullPromise, () => {
    controller._pulling = false;
    if (controller._pullAgain) {
      controller._pullAgain = false;
      ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }
  }, (e3) => {
    ReadableStreamDefaultControllerError(controller, e3);
  });
}
function ReadableStreamDefaultControllerShouldCallPull(controller) {
  const stream = controller._controlledReadableStream;
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    return false;
  }
  if (!controller._started) {
    return false;
  }
  if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    return true;
  }
  const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
  if (desiredSize > 0) {
    return true;
  }
  return false;
}
function ReadableStreamDefaultControllerClearAlgorithms(controller) {
  controller._pullAlgorithm = void 0;
  controller._cancelAlgorithm = void 0;
  controller._strategySizeAlgorithm = void 0;
}
function ReadableStreamDefaultControllerClose(controller) {
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    return;
  }
  const stream = controller._controlledReadableStream;
  controller._closeRequested = true;
  if (controller._queue.length === 0) {
    ReadableStreamDefaultControllerClearAlgorithms(controller);
    ReadableStreamClose(stream);
  }
}
function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
    return;
  }
  const stream = controller._controlledReadableStream;
  if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
    ReadableStreamFulfillReadRequest(stream, chunk, false);
  } else {
    let chunkSize;
    try {
      chunkSize = controller._strategySizeAlgorithm(chunk);
    } catch (chunkSizeE) {
      ReadableStreamDefaultControllerError(controller, chunkSizeE);
      throw chunkSizeE;
    }
    try {
      EnqueueValueWithSize(controller, chunk, chunkSize);
    } catch (enqueueE) {
      ReadableStreamDefaultControllerError(controller, enqueueE);
      throw enqueueE;
    }
  }
  ReadableStreamDefaultControllerCallPullIfNeeded(controller);
}
function ReadableStreamDefaultControllerError(controller, e3) {
  const stream = controller._controlledReadableStream;
  if (stream._state !== "readable") {
    return;
  }
  ResetQueue(controller);
  ReadableStreamDefaultControllerClearAlgorithms(controller);
  ReadableStreamError(stream, e3);
}
function ReadableStreamDefaultControllerGetDesiredSize(controller) {
  const state = controller._controlledReadableStream._state;
  if (state === "errored") {
    return null;
  }
  if (state === "closed") {
    return 0;
  }
  return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableStreamDefaultControllerHasBackpressure(controller) {
  if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
    return false;
  }
  return true;
}
function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
  const state = controller._controlledReadableStream._state;
  if (!controller._closeRequested && state === "readable") {
    return true;
  }
  return false;
}
function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
  controller._controlledReadableStream = stream;
  controller._queue = void 0;
  controller._queueTotalSize = void 0;
  ResetQueue(controller);
  controller._started = false;
  controller._closeRequested = false;
  controller._pullAgain = false;
  controller._pulling = false;
  controller._strategySizeAlgorithm = sizeAlgorithm;
  controller._strategyHWM = highWaterMark;
  controller._pullAlgorithm = pullAlgorithm;
  controller._cancelAlgorithm = cancelAlgorithm;
  stream._readableStreamController = controller;
  const startResult = startAlgorithm();
  uponPromise(promiseResolvedWith(startResult), () => {
    controller._started = true;
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
  }, (r3) => {
    ReadableStreamDefaultControllerError(controller, r3);
  });
}
function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
  const controller = Object.create(ReadableStreamDefaultController.prototype);
  let startAlgorithm = () => void 0;
  let pullAlgorithm = () => promiseResolvedWith(void 0);
  let cancelAlgorithm = () => promiseResolvedWith(void 0);
  if (underlyingSource.start !== void 0) {
    startAlgorithm = () => underlyingSource.start(controller);
  }
  if (underlyingSource.pull !== void 0) {
    pullAlgorithm = () => underlyingSource.pull(controller);
  }
  if (underlyingSource.cancel !== void 0) {
    cancelAlgorithm = (reason) => underlyingSource.cancel(reason);
  }
  SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
}
function defaultControllerBrandCheckException$1(name) {
  return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
}
function ReadableStreamTee(stream, cloneForBranch2) {
  if (IsReadableByteStreamController(stream._readableStreamController)) {
    return ReadableByteStreamTee(stream);
  }
  return ReadableStreamDefaultTee(stream);
}
function ReadableStreamDefaultTee(stream, cloneForBranch2) {
  const reader = AcquireReadableStreamDefaultReader(stream);
  let reading = false;
  let readAgain = false;
  let canceled1 = false;
  let canceled2 = false;
  let reason1;
  let reason2;
  let branch1;
  let branch2;
  let resolveCancelPromise;
  const cancelPromise = newPromise((resolve) => {
    resolveCancelPromise = resolve;
  });
  function pullAlgorithm() {
    if (reading) {
      readAgain = true;
      return promiseResolvedWith(void 0);
    }
    reading = true;
    const readRequest = {
      _chunkSteps: (chunk) => {
        queueMicrotask(() => {
          readAgain = false;
          const chunk1 = chunk;
          const chunk2 = chunk;
          if (!canceled1) {
            ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
          }
          if (!canceled2) {
            ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
          }
          reading = false;
          if (readAgain) {
            pullAlgorithm();
          }
        });
      },
      _closeSteps: () => {
        reading = false;
        if (!canceled1) {
          ReadableStreamDefaultControllerClose(branch1._readableStreamController);
        }
        if (!canceled2) {
          ReadableStreamDefaultControllerClose(branch2._readableStreamController);
        }
        if (!canceled1 || !canceled2) {
          resolveCancelPromise(void 0);
        }
      },
      _errorSteps: () => {
        reading = false;
      }
    };
    ReadableStreamDefaultReaderRead(reader, readRequest);
    return promiseResolvedWith(void 0);
  }
  function cancel1Algorithm(reason) {
    canceled1 = true;
    reason1 = reason;
    if (canceled2) {
      const compositeReason = CreateArrayFromList([reason1, reason2]);
      const cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function cancel2Algorithm(reason) {
    canceled2 = true;
    reason2 = reason;
    if (canceled1) {
      const compositeReason = CreateArrayFromList([reason1, reason2]);
      const cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function startAlgorithm() {
  }
  branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
  branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
  uponRejection(reader._closedPromise, (r3) => {
    ReadableStreamDefaultControllerError(branch1._readableStreamController, r3);
    ReadableStreamDefaultControllerError(branch2._readableStreamController, r3);
    if (!canceled1 || !canceled2) {
      resolveCancelPromise(void 0);
    }
  });
  return [branch1, branch2];
}
function ReadableByteStreamTee(stream) {
  let reader = AcquireReadableStreamDefaultReader(stream);
  let reading = false;
  let readAgainForBranch1 = false;
  let readAgainForBranch2 = false;
  let canceled1 = false;
  let canceled2 = false;
  let reason1;
  let reason2;
  let branch1;
  let branch2;
  let resolveCancelPromise;
  const cancelPromise = newPromise((resolve) => {
    resolveCancelPromise = resolve;
  });
  function forwardReaderError(thisReader) {
    uponRejection(thisReader._closedPromise, (r3) => {
      if (thisReader !== reader) {
        return;
      }
      ReadableByteStreamControllerError(branch1._readableStreamController, r3);
      ReadableByteStreamControllerError(branch2._readableStreamController, r3);
      if (!canceled1 || !canceled2) {
        resolveCancelPromise(void 0);
      }
    });
  }
  function pullWithDefaultReader() {
    if (IsReadableStreamBYOBReader(reader)) {
      ReadableStreamReaderGenericRelease(reader);
      reader = AcquireReadableStreamDefaultReader(stream);
      forwardReaderError(reader);
    }
    const readRequest = {
      _chunkSteps: (chunk) => {
        queueMicrotask(() => {
          readAgainForBranch1 = false;
          readAgainForBranch2 = false;
          const chunk1 = chunk;
          let chunk2 = chunk;
          if (!canceled1 && !canceled2) {
            try {
              chunk2 = CloneAsUint8Array(chunk);
            } catch (cloneE) {
              ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
              ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
              resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
              return;
            }
          }
          if (!canceled1) {
            ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
          }
          if (!canceled2) {
            ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
          }
          reading = false;
          if (readAgainForBranch1) {
            pull1Algorithm();
          } else if (readAgainForBranch2) {
            pull2Algorithm();
          }
        });
      },
      _closeSteps: () => {
        reading = false;
        if (!canceled1) {
          ReadableByteStreamControllerClose(branch1._readableStreamController);
        }
        if (!canceled2) {
          ReadableByteStreamControllerClose(branch2._readableStreamController);
        }
        if (branch1._readableStreamController._pendingPullIntos.length > 0) {
          ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
        }
        if (branch2._readableStreamController._pendingPullIntos.length > 0) {
          ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
        }
        if (!canceled1 || !canceled2) {
          resolveCancelPromise(void 0);
        }
      },
      _errorSteps: () => {
        reading = false;
      }
    };
    ReadableStreamDefaultReaderRead(reader, readRequest);
  }
  function pullWithBYOBReader(view, forBranch2) {
    if (IsReadableStreamDefaultReader(reader)) {
      ReadableStreamReaderGenericRelease(reader);
      reader = AcquireReadableStreamBYOBReader(stream);
      forwardReaderError(reader);
    }
    const byobBranch = forBranch2 ? branch2 : branch1;
    const otherBranch = forBranch2 ? branch1 : branch2;
    const readIntoRequest = {
      _chunkSteps: (chunk) => {
        queueMicrotask(() => {
          readAgainForBranch1 = false;
          readAgainForBranch2 = false;
          const byobCanceled = forBranch2 ? canceled2 : canceled1;
          const otherCanceled = forBranch2 ? canceled1 : canceled2;
          if (!otherCanceled) {
            let clonedChunk;
            try {
              clonedChunk = CloneAsUint8Array(chunk);
            } catch (cloneE) {
              ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
              ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
              resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
              return;
            }
            if (!byobCanceled) {
              ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
            }
            ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
          } else if (!byobCanceled) {
            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
          }
          reading = false;
          if (readAgainForBranch1) {
            pull1Algorithm();
          } else if (readAgainForBranch2) {
            pull2Algorithm();
          }
        });
      },
      _closeSteps: (chunk) => {
        reading = false;
        const byobCanceled = forBranch2 ? canceled2 : canceled1;
        const otherCanceled = forBranch2 ? canceled1 : canceled2;
        if (!byobCanceled) {
          ReadableByteStreamControllerClose(byobBranch._readableStreamController);
        }
        if (!otherCanceled) {
          ReadableByteStreamControllerClose(otherBranch._readableStreamController);
        }
        if (chunk !== void 0) {
          if (!byobCanceled) {
            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
          }
          if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
            ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
          }
        }
        if (!byobCanceled || !otherCanceled) {
          resolveCancelPromise(void 0);
        }
      },
      _errorSteps: () => {
        reading = false;
      }
    };
    ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
  }
  function pull1Algorithm() {
    if (reading) {
      readAgainForBranch1 = true;
      return promiseResolvedWith(void 0);
    }
    reading = true;
    const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
    if (byobRequest === null) {
      pullWithDefaultReader();
    } else {
      pullWithBYOBReader(byobRequest._view, false);
    }
    return promiseResolvedWith(void 0);
  }
  function pull2Algorithm() {
    if (reading) {
      readAgainForBranch2 = true;
      return promiseResolvedWith(void 0);
    }
    reading = true;
    const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
    if (byobRequest === null) {
      pullWithDefaultReader();
    } else {
      pullWithBYOBReader(byobRequest._view, true);
    }
    return promiseResolvedWith(void 0);
  }
  function cancel1Algorithm(reason) {
    canceled1 = true;
    reason1 = reason;
    if (canceled2) {
      const compositeReason = CreateArrayFromList([reason1, reason2]);
      const cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function cancel2Algorithm(reason) {
    canceled2 = true;
    reason2 = reason;
    if (canceled1) {
      const compositeReason = CreateArrayFromList([reason1, reason2]);
      const cancelResult = ReadableStreamCancel(stream, compositeReason);
      resolveCancelPromise(cancelResult);
    }
    return cancelPromise;
  }
  function startAlgorithm() {
    return;
  }
  branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
  branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
  forwardReaderError(reader);
  return [branch1, branch2];
}
function convertUnderlyingDefaultOrByteSource(source, context) {
  assertDictionary(source, context);
  const original = source;
  const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
  const cancel = original === null || original === void 0 ? void 0 : original.cancel;
  const pull = original === null || original === void 0 ? void 0 : original.pull;
  const start = original === null || original === void 0 ? void 0 : original.start;
  const type = original === null || original === void 0 ? void 0 : original.type;
  return {
    autoAllocateChunkSize: autoAllocateChunkSize === void 0 ? void 0 : convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
    cancel: cancel === void 0 ? void 0 : convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
    pull: pull === void 0 ? void 0 : convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
    start: start === void 0 ? void 0 : convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
    type: type === void 0 ? void 0 : convertReadableStreamType(type, `${context} has member 'type' that`)
  };
}
function convertUnderlyingSourceCancelCallback(fn, original, context) {
  assertFunction(fn, context);
  return (reason) => promiseCall(fn, original, [reason]);
}
function convertUnderlyingSourcePullCallback(fn, original, context) {
  assertFunction(fn, context);
  return (controller) => promiseCall(fn, original, [controller]);
}
function convertUnderlyingSourceStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return (controller) => reflectCall(fn, original, [controller]);
}
function convertReadableStreamType(type, context) {
  type = `${type}`;
  if (type !== "bytes") {
    throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
  }
  return type;
}
function convertReaderOptions(options, context) {
  assertDictionary(options, context);
  const mode = options === null || options === void 0 ? void 0 : options.mode;
  return {
    mode: mode === void 0 ? void 0 : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
  };
}
function convertReadableStreamReaderMode(mode, context) {
  mode = `${mode}`;
  if (mode !== "byob") {
    throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
  }
  return mode;
}
function convertIteratorOptions(options, context) {
  assertDictionary(options, context);
  const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
  return { preventCancel: Boolean(preventCancel) };
}
function convertPipeOptions(options, context) {
  assertDictionary(options, context);
  const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
  const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
  const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
  const signal = options === null || options === void 0 ? void 0 : options.signal;
  if (signal !== void 0) {
    assertAbortSignal(signal, `${context} has member 'signal' that`);
  }
  return {
    preventAbort: Boolean(preventAbort),
    preventCancel: Boolean(preventCancel),
    preventClose: Boolean(preventClose),
    signal
  };
}
function assertAbortSignal(signal, context) {
  if (!isAbortSignal2(signal)) {
    throw new TypeError(`${context} is not an AbortSignal.`);
  }
}
function convertReadableWritablePair(pair, context) {
  assertDictionary(pair, context);
  const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
  assertRequiredField(readable, "readable", "ReadableWritablePair");
  assertReadableStream(readable, `${context} has member 'readable' that`);
  const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
  assertRequiredField(writable, "writable", "ReadableWritablePair");
  assertWritableStream(writable, `${context} has member 'writable' that`);
  return { readable, writable };
}
var ReadableStream2 = class {
  constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
    if (rawUnderlyingSource === void 0) {
      rawUnderlyingSource = null;
    } else {
      assertObject(rawUnderlyingSource, "First parameter");
    }
    const strategy = convertQueuingStrategy(rawStrategy, "Second parameter");
    const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, "First parameter");
    InitializeReadableStream(this);
    if (underlyingSource.type === "bytes") {
      if (strategy.size !== void 0) {
        throw new RangeError("The strategy for a byte stream cannot have a size function");
      }
      const highWaterMark = ExtractHighWaterMark(strategy, 0);
      SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
    } else {
      const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
      const highWaterMark = ExtractHighWaterMark(strategy, 1);
      SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
    }
  }
  get locked() {
    if (!IsReadableStream(this)) {
      throw streamBrandCheckException$1("locked");
    }
    return IsReadableStreamLocked(this);
  }
  cancel(reason = void 0) {
    if (!IsReadableStream(this)) {
      return promiseRejectedWith(streamBrandCheckException$1("cancel"));
    }
    if (IsReadableStreamLocked(this)) {
      return promiseRejectedWith(new TypeError("Cannot cancel a stream that already has a reader"));
    }
    return ReadableStreamCancel(this, reason);
  }
  getReader(rawOptions = void 0) {
    if (!IsReadableStream(this)) {
      throw streamBrandCheckException$1("getReader");
    }
    const options = convertReaderOptions(rawOptions, "First parameter");
    if (options.mode === void 0) {
      return AcquireReadableStreamDefaultReader(this);
    }
    return AcquireReadableStreamBYOBReader(this);
  }
  pipeThrough(rawTransform, rawOptions = {}) {
    if (!IsReadableStream(this)) {
      throw streamBrandCheckException$1("pipeThrough");
    }
    assertRequiredArgument(rawTransform, 1, "pipeThrough");
    const transform = convertReadableWritablePair(rawTransform, "First parameter");
    const options = convertPipeOptions(rawOptions, "Second parameter");
    if (IsReadableStreamLocked(this)) {
      throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
    }
    if (IsWritableStreamLocked(transform.writable)) {
      throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
    }
    const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    setPromiseIsHandledToTrue(promise);
    return transform.readable;
  }
  pipeTo(destination, rawOptions = {}) {
    if (!IsReadableStream(this)) {
      return promiseRejectedWith(streamBrandCheckException$1("pipeTo"));
    }
    if (destination === void 0) {
      return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
    }
    if (!IsWritableStream(destination)) {
      return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
    }
    let options;
    try {
      options = convertPipeOptions(rawOptions, "Second parameter");
    } catch (e3) {
      return promiseRejectedWith(e3);
    }
    if (IsReadableStreamLocked(this)) {
      return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
    }
    if (IsWritableStreamLocked(destination)) {
      return promiseRejectedWith(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
    }
    return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
  }
  tee() {
    if (!IsReadableStream(this)) {
      throw streamBrandCheckException$1("tee");
    }
    const branches = ReadableStreamTee(this);
    return CreateArrayFromList(branches);
  }
  values(rawOptions = void 0) {
    if (!IsReadableStream(this)) {
      throw streamBrandCheckException$1("values");
    }
    const options = convertIteratorOptions(rawOptions, "First parameter");
    return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
  }
};
Object.defineProperties(ReadableStream2.prototype, {
  cancel: { enumerable: true },
  getReader: { enumerable: true },
  pipeThrough: { enumerable: true },
  pipeTo: { enumerable: true },
  tee: { enumerable: true },
  values: { enumerable: true },
  locked: { enumerable: true }
});
function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
  const stream = Object.create(ReadableStream2.prototype);
  InitializeReadableStream(stream);
  const controller = Object.create(ReadableStreamDefaultController.prototype);
  SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
  return stream;
}
function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
  const stream = Object.create(ReadableStream2.prototype);
  InitializeReadableStream(stream);
  const controller = Object.create(ReadableByteStreamController.prototype);
  SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, void 0);
  return stream;
}
function InitializeReadableStream(stream) {
  stream._state = "readable";
  stream._reader = void 0;
  stream._storedError = void 0;
  stream._disturbed = false;
}
function IsReadableStream(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_readableStreamController")) {
    return false;
  }
  return x3 instanceof ReadableStream2;
}
function IsReadableStreamLocked(stream) {
  if (stream._reader === void 0) {
    return false;
  }
  return true;
}
function ReadableStreamCancel(stream, reason) {
  stream._disturbed = true;
  if (stream._state === "closed") {
    return promiseResolvedWith(void 0);
  }
  if (stream._state === "errored") {
    return promiseRejectedWith(stream._storedError);
  }
  ReadableStreamClose(stream);
  const reader = stream._reader;
  if (reader !== void 0 && IsReadableStreamBYOBReader(reader)) {
    reader._readIntoRequests.forEach((readIntoRequest) => {
      readIntoRequest._closeSteps(void 0);
    });
    reader._readIntoRequests = new SimpleQueue();
  }
  const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
  return transformPromiseWith(sourceCancelPromise, noop2);
}
function ReadableStreamClose(stream) {
  stream._state = "closed";
  const reader = stream._reader;
  if (reader === void 0) {
    return;
  }
  defaultReaderClosedPromiseResolve(reader);
  if (IsReadableStreamDefaultReader(reader)) {
    reader._readRequests.forEach((readRequest) => {
      readRequest._closeSteps();
    });
    reader._readRequests = new SimpleQueue();
  }
}
function ReadableStreamError(stream, e3) {
  stream._state = "errored";
  stream._storedError = e3;
  const reader = stream._reader;
  if (reader === void 0) {
    return;
  }
  defaultReaderClosedPromiseReject(reader, e3);
  if (IsReadableStreamDefaultReader(reader)) {
    reader._readRequests.forEach((readRequest) => {
      readRequest._errorSteps(e3);
    });
    reader._readRequests = new SimpleQueue();
  } else {
    reader._readIntoRequests.forEach((readIntoRequest) => {
      readIntoRequest._errorSteps(e3);
    });
    reader._readIntoRequests = new SimpleQueue();
  }
}
function streamBrandCheckException$1(name) {
  return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
}
function convertQueuingStrategyInit(init2, context) {
  assertDictionary(init2, context);
  const highWaterMark = init2 === null || init2 === void 0 ? void 0 : init2.highWaterMark;
  assertRequiredField(highWaterMark, "highWaterMark", "QueuingStrategyInit");
  return {
    highWaterMark: convertUnrestrictedDouble(highWaterMark)
  };
}
var byteLengthSizeFunction = (chunk) => {
  return chunk.byteLength;
};
try {
  Object.defineProperty(byteLengthSizeFunction, "name", {
    value: "size",
    configurable: true
  });
} catch (_a2) {
}
var ByteLengthQueuingStrategy = class {
  constructor(options) {
    assertRequiredArgument(options, 1, "ByteLengthQueuingStrategy");
    options = convertQueuingStrategyInit(options, "First parameter");
    this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
  }
  get highWaterMark() {
    if (!IsByteLengthQueuingStrategy(this)) {
      throw byteLengthBrandCheckException("highWaterMark");
    }
    return this._byteLengthQueuingStrategyHighWaterMark;
  }
  get size() {
    if (!IsByteLengthQueuingStrategy(this)) {
      throw byteLengthBrandCheckException("size");
    }
    return byteLengthSizeFunction;
  }
};
Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
  highWaterMark: { enumerable: true },
  size: { enumerable: true }
});
function byteLengthBrandCheckException(name) {
  return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
}
function IsByteLengthQueuingStrategy(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_byteLengthQueuingStrategyHighWaterMark")) {
    return false;
  }
  return x3 instanceof ByteLengthQueuingStrategy;
}
var countSizeFunction = () => {
  return 1;
};
try {
  Object.defineProperty(countSizeFunction, "name", {
    value: "size",
    configurable: true
  });
} catch (_a2) {
}
var CountQueuingStrategy = class {
  constructor(options) {
    assertRequiredArgument(options, 1, "CountQueuingStrategy");
    options = convertQueuingStrategyInit(options, "First parameter");
    this._countQueuingStrategyHighWaterMark = options.highWaterMark;
  }
  get highWaterMark() {
    if (!IsCountQueuingStrategy(this)) {
      throw countBrandCheckException("highWaterMark");
    }
    return this._countQueuingStrategyHighWaterMark;
  }
  get size() {
    if (!IsCountQueuingStrategy(this)) {
      throw countBrandCheckException("size");
    }
    return countSizeFunction;
  }
};
Object.defineProperties(CountQueuingStrategy.prototype, {
  highWaterMark: { enumerable: true },
  size: { enumerable: true }
});
function countBrandCheckException(name) {
  return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
}
function IsCountQueuingStrategy(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_countQueuingStrategyHighWaterMark")) {
    return false;
  }
  return x3 instanceof CountQueuingStrategy;
}
function convertTransformer(original, context) {
  assertDictionary(original, context);
  const flush = original === null || original === void 0 ? void 0 : original.flush;
  const readableType = original === null || original === void 0 ? void 0 : original.readableType;
  const start = original === null || original === void 0 ? void 0 : original.start;
  const transform = original === null || original === void 0 ? void 0 : original.transform;
  const writableType = original === null || original === void 0 ? void 0 : original.writableType;
  return {
    flush: flush === void 0 ? void 0 : convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
    readableType,
    start: start === void 0 ? void 0 : convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
    transform: transform === void 0 ? void 0 : convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
    writableType
  };
}
function convertTransformerFlushCallback(fn, original, context) {
  assertFunction(fn, context);
  return (controller) => promiseCall(fn, original, [controller]);
}
function convertTransformerStartCallback(fn, original, context) {
  assertFunction(fn, context);
  return (controller) => reflectCall(fn, original, [controller]);
}
function convertTransformerTransformCallback(fn, original, context) {
  assertFunction(fn, context);
  return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
}
var TransformStream = class {
  constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
    if (rawTransformer === void 0) {
      rawTransformer = null;
    }
    const writableStrategy = convertQueuingStrategy(rawWritableStrategy, "Second parameter");
    const readableStrategy = convertQueuingStrategy(rawReadableStrategy, "Third parameter");
    const transformer = convertTransformer(rawTransformer, "First parameter");
    if (transformer.readableType !== void 0) {
      throw new RangeError("Invalid readableType specified");
    }
    if (transformer.writableType !== void 0) {
      throw new RangeError("Invalid writableType specified");
    }
    const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
    const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
    const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
    const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
    let startPromise_resolve;
    const startPromise = newPromise((resolve) => {
      startPromise_resolve = resolve;
    });
    InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
    if (transformer.start !== void 0) {
      startPromise_resolve(transformer.start(this._transformStreamController));
    } else {
      startPromise_resolve(void 0);
    }
  }
  get readable() {
    if (!IsTransformStream(this)) {
      throw streamBrandCheckException("readable");
    }
    return this._readable;
  }
  get writable() {
    if (!IsTransformStream(this)) {
      throw streamBrandCheckException("writable");
    }
    return this._writable;
  }
};
Object.defineProperties(TransformStream.prototype, {
  readable: { enumerable: true },
  writable: { enumerable: true }
});
function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
  function startAlgorithm() {
    return startPromise;
  }
  function writeAlgorithm(chunk) {
    return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
  }
  function abortAlgorithm(reason) {
    return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
  }
  function closeAlgorithm() {
    return TransformStreamDefaultSinkCloseAlgorithm(stream);
  }
  stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
  function pullAlgorithm() {
    return TransformStreamDefaultSourcePullAlgorithm(stream);
  }
  function cancelAlgorithm(reason) {
    TransformStreamErrorWritableAndUnblockWrite(stream, reason);
    return promiseResolvedWith(void 0);
  }
  stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
  stream._backpressure = void 0;
  stream._backpressureChangePromise = void 0;
  stream._backpressureChangePromise_resolve = void 0;
  TransformStreamSetBackpressure(stream, true);
  stream._transformStreamController = void 0;
}
function IsTransformStream(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_transformStreamController")) {
    return false;
  }
  return x3 instanceof TransformStream;
}
function TransformStreamError(stream, e3) {
  ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e3);
  TransformStreamErrorWritableAndUnblockWrite(stream, e3);
}
function TransformStreamErrorWritableAndUnblockWrite(stream, e3) {
  TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
  WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e3);
  if (stream._backpressure) {
    TransformStreamSetBackpressure(stream, false);
  }
}
function TransformStreamSetBackpressure(stream, backpressure) {
  if (stream._backpressureChangePromise !== void 0) {
    stream._backpressureChangePromise_resolve();
  }
  stream._backpressureChangePromise = newPromise((resolve) => {
    stream._backpressureChangePromise_resolve = resolve;
  });
  stream._backpressure = backpressure;
}
var TransformStreamDefaultController = class {
  constructor() {
    throw new TypeError("Illegal constructor");
  }
  get desiredSize() {
    if (!IsTransformStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException("desiredSize");
    }
    const readableController = this._controlledTransformStream._readable._readableStreamController;
    return ReadableStreamDefaultControllerGetDesiredSize(readableController);
  }
  enqueue(chunk = void 0) {
    if (!IsTransformStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException("enqueue");
    }
    TransformStreamDefaultControllerEnqueue(this, chunk);
  }
  error(reason = void 0) {
    if (!IsTransformStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException("error");
    }
    TransformStreamDefaultControllerError(this, reason);
  }
  terminate() {
    if (!IsTransformStreamDefaultController(this)) {
      throw defaultControllerBrandCheckException("terminate");
    }
    TransformStreamDefaultControllerTerminate(this);
  }
};
Object.defineProperties(TransformStreamDefaultController.prototype, {
  enqueue: { enumerable: true },
  error: { enumerable: true },
  terminate: { enumerable: true },
  desiredSize: { enumerable: true }
});
function IsTransformStreamDefaultController(x3) {
  if (!typeIsObject(x3)) {
    return false;
  }
  if (!Object.prototype.hasOwnProperty.call(x3, "_controlledTransformStream")) {
    return false;
  }
  return x3 instanceof TransformStreamDefaultController;
}
function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
  controller._controlledTransformStream = stream;
  stream._transformStreamController = controller;
  controller._transformAlgorithm = transformAlgorithm;
  controller._flushAlgorithm = flushAlgorithm;
}
function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
  const controller = Object.create(TransformStreamDefaultController.prototype);
  let transformAlgorithm = (chunk) => {
    try {
      TransformStreamDefaultControllerEnqueue(controller, chunk);
      return promiseResolvedWith(void 0);
    } catch (transformResultE) {
      return promiseRejectedWith(transformResultE);
    }
  };
  let flushAlgorithm = () => promiseResolvedWith(void 0);
  if (transformer.transform !== void 0) {
    transformAlgorithm = (chunk) => transformer.transform(chunk, controller);
  }
  if (transformer.flush !== void 0) {
    flushAlgorithm = () => transformer.flush(controller);
  }
  SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
}
function TransformStreamDefaultControllerClearAlgorithms(controller) {
  controller._transformAlgorithm = void 0;
  controller._flushAlgorithm = void 0;
}
function TransformStreamDefaultControllerEnqueue(controller, chunk) {
  const stream = controller._controlledTransformStream;
  const readableController = stream._readable._readableStreamController;
  if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
    throw new TypeError("Readable side is not in a state that permits enqueue");
  }
  try {
    ReadableStreamDefaultControllerEnqueue(readableController, chunk);
  } catch (e3) {
    TransformStreamErrorWritableAndUnblockWrite(stream, e3);
    throw stream._readable._storedError;
  }
  const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
  if (backpressure !== stream._backpressure) {
    TransformStreamSetBackpressure(stream, true);
  }
}
function TransformStreamDefaultControllerError(controller, e3) {
  TransformStreamError(controller._controlledTransformStream, e3);
}
function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
  const transformPromise = controller._transformAlgorithm(chunk);
  return transformPromiseWith(transformPromise, void 0, (r3) => {
    TransformStreamError(controller._controlledTransformStream, r3);
    throw r3;
  });
}
function TransformStreamDefaultControllerTerminate(controller) {
  const stream = controller._controlledTransformStream;
  const readableController = stream._readable._readableStreamController;
  ReadableStreamDefaultControllerClose(readableController);
  const error2 = new TypeError("TransformStream terminated");
  TransformStreamErrorWritableAndUnblockWrite(stream, error2);
}
function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
  const controller = stream._transformStreamController;
  if (stream._backpressure) {
    const backpressureChangePromise = stream._backpressureChangePromise;
    return transformPromiseWith(backpressureChangePromise, () => {
      const writable = stream._writable;
      const state = writable._state;
      if (state === "erroring") {
        throw writable._storedError;
      }
      return TransformStreamDefaultControllerPerformTransform(controller, chunk);
    });
  }
  return TransformStreamDefaultControllerPerformTransform(controller, chunk);
}
function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
  TransformStreamError(stream, reason);
  return promiseResolvedWith(void 0);
}
function TransformStreamDefaultSinkCloseAlgorithm(stream) {
  const readable = stream._readable;
  const controller = stream._transformStreamController;
  const flushPromise = controller._flushAlgorithm();
  TransformStreamDefaultControllerClearAlgorithms(controller);
  return transformPromiseWith(flushPromise, () => {
    if (readable._state === "errored") {
      throw readable._storedError;
    }
    ReadableStreamDefaultControllerClose(readable._readableStreamController);
  }, (r3) => {
    TransformStreamError(stream, r3);
    throw readable._storedError;
  });
}
function TransformStreamDefaultSourcePullAlgorithm(stream) {
  TransformStreamSetBackpressure(stream, false);
  return stream._backpressureChangePromise;
}
function defaultControllerBrandCheckException(name) {
  return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
}
function streamBrandCheckException(name) {
  return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
}
var POOL_SIZE$1 = 65536;
try {
  const { Blob: Blob5 } = require("buffer");
  if (Blob5 && !Blob5.prototype.stream) {
    Blob5.prototype.stream = function name(params) {
      let position = 0;
      const blob = this;
      return new ReadableStream2({
        type: "bytes",
        async pull(ctrl) {
          const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
          const buffer = await chunk.arrayBuffer();
          position += buffer.byteLength;
          ctrl.enqueue(new Uint8Array(buffer));
          if (position === blob.size) {
            ctrl.close();
          }
        }
      });
    };
  }
} catch (error2) {
}
var POOL_SIZE2 = 65536;
async function* toIterator2(parts, clone2 = true) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else if (ArrayBuffer.isView(part)) {
      if (clone2) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE2);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    } else {
      let position = 0, b2 = part;
      while (position !== b2.size) {
        const chunk = b2.slice(position, Math.min(b2.size, position + POOL_SIZE2));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}
var _Blob2 = class Blob3 {
  #parts = [];
  #type = "";
  #size = 0;
  #endings = "transparent";
  constructor(blobParts = [], options = {}) {
    if (typeof blobParts !== "object" || blobParts === null) {
      throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
    }
    if (typeof blobParts[Symbol.iterator] !== "function") {
      throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
    }
    if (typeof options !== "object" && typeof options !== "function") {
      throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
    }
    if (options === null)
      options = {};
    const encoder2 = new TextEncoder();
    for (const element of blobParts) {
      let part;
      if (ArrayBuffer.isView(element)) {
        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
      } else if (element instanceof ArrayBuffer) {
        part = new Uint8Array(element.slice(0));
      } else if (element instanceof Blob3) {
        part = element;
      } else {
        part = encoder2.encode(`${element}`);
      }
      this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
      this.#parts.push(part);
    }
    this.#endings = `${options.endings === void 0 ? "transparent" : options.endings}`;
    const type = options.type === void 0 ? "" : String(options.type);
    this.#type = /^[\x20-\x7E]*$/.test(type) ? type : "";
  }
  get size() {
    return this.#size;
  }
  get type() {
    return this.#type;
  }
  async text() {
    const decoder = new TextDecoder();
    let str = "";
    for await (const part of toIterator2(this.#parts, false)) {
      str += decoder.decode(part, { stream: true });
    }
    str += decoder.decode();
    return str;
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of toIterator2(this.#parts, false)) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    const it = toIterator2(this.#parts, true);
    return new ReadableStream2({
      type: "bytes",
      async pull(ctrl) {
        const chunk = await it.next();
        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
      },
      async cancel() {
        await it.return();
      }
    });
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = this.#parts;
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      if (added >= span) {
        break;
      }
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        let chunk;
        if (ArrayBuffer.isView(part)) {
          chunk = part.subarray(relativeStart, Math.min(size2, relativeEnd));
          added += chunk.byteLength;
        } else {
          chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
          added += chunk.size;
        }
        relativeEnd -= size2;
        blobParts.push(chunk);
        relativeStart = 0;
      }
    }
    const blob = new Blob3([], { type: String(type).toLowerCase() });
    blob.#size = span;
    blob.#parts = blobParts;
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.constructor === "function" && (typeof object.stream === "function" || typeof object.arrayBuffer === "function") && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(_Blob2.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var Blob4 = _Blob2;
var _File2 = class File3 extends Blob4 {
  #lastModified = 0;
  #name = "";
  constructor(fileBits, fileName, options = {}) {
    if (arguments.length < 2) {
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
    }
    super(fileBits, options);
    if (options === null)
      options = {};
    const lastModified = options.lastModified === void 0 ? Date.now() : Number(options.lastModified);
    if (!Number.isNaN(lastModified)) {
      this.#lastModified = lastModified;
    }
    this.#name = String(fileName);
  }
  get name() {
    return this.#name;
  }
  get lastModified() {
    return this.#lastModified;
  }
  get [Symbol.toStringTag]() {
    return "File";
  }
  static [Symbol.hasInstance](object) {
    return !!object && object instanceof Blob4 && /^(File)$/.test(object[Symbol.toStringTag]);
  }
};
var File4 = _File2;
var { toStringTag: t$1, iterator: i$1, hasInstance: h$1 } = Symbol;
var m$1 = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
var f$1 = (a2, b2, c2) => (a2 += "", /^(Blob|File)$/.test(b2 && b2[t$1]) ? [(c2 = c2 !== void 0 ? c2 + "" : b2[t$1] == "File" ? b2.name : "blob", a2), b2.name !== c2 || b2[t$1] == "blob" ? new File4([b2], c2, b2) : b2] : [a2, b2 + ""]);
var x$1 = (n2, a2, e3) => {
  if (a2.length < e3) {
    throw new TypeError(`Failed to execute '${n2}' on 'FormData': ${e3} arguments required, but only ${a2.length} present.`);
  }
};
var FormData3 = class FormData4 {
  #d = [];
  constructor(...a2) {
    if (a2.length)
      throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`);
  }
  get [t$1]() {
    return "FormData";
  }
  [i$1]() {
    return this.entries();
  }
  static [h$1](o2) {
    return o2 && typeof o2 === "object" && o2[t$1] === "FormData" && !m$1.some((m3) => typeof o2[m3] != "function");
  }
  append(...a2) {
    x$1("append", arguments, 2);
    this.#d.push(f$1(...a2));
  }
  delete(a2) {
    x$1("delete", arguments, 1);
    a2 += "";
    this.#d = this.#d.filter(([b2]) => b2 !== a2);
  }
  get(a2) {
    x$1("get", arguments, 1);
    a2 += "";
    for (var b2 = this.#d, l2 = b2.length, c2 = 0; c2 < l2; c2++)
      if (b2[c2][0] === a2)
        return b2[c2][1];
    return null;
  }
  getAll(a2, b2) {
    x$1("getAll", arguments, 1);
    b2 = [];
    a2 += "";
    this.#d.forEach((c2) => c2[0] === a2 && b2.push(c2[1]));
    return b2;
  }
  has(a2) {
    x$1("has", arguments, 1);
    a2 += "";
    return this.#d.some((b2) => b2[0] === a2);
  }
  forEach(a2, b2) {
    x$1("forEach", arguments, 1);
    for (var [c2, d2] of this)
      a2.call(b2, d2, c2, this);
  }
  set(...a2) {
    x$1("set", arguments, 2);
    var b2 = [], c2 = true;
    a2 = f$1(...a2);
    this.#d.forEach((d2) => {
      d2[0] === a2[0] ? c2 && (c2 = !b2.push(a2)) : b2.push(d2);
    });
    c2 && b2.push(a2);
    this.#d = b2;
  }
  *entries() {
    yield* this.#d;
  }
  *keys() {
    for (var [a2] of this)
      yield a2;
  }
  *values() {
    for (var [, a2] of this)
      yield a2;
  }
};
function u(u2, D2) {
  for (var t3 = 0; t3 < D2.length; t3++) {
    var F3 = D2[t3];
    F3.enumerable = F3.enumerable || false, F3.configurable = true, "value" in F3 && (F3.writable = true), Object.defineProperty(u2, F3.key, F3);
  }
}
function D(D2, t3, F3) {
  return t3 && u(D2.prototype, t3), F3 && u(D2, F3), D2;
}
function t2(u2, D2) {
  (D2 == null || D2 > u2.length) && (D2 = u2.length);
  for (var t3 = 0, F3 = new Array(D2); t3 < D2; t3++)
    F3[t3] = u2[t3];
  return F3;
}
function F2(u2, D2) {
  var F3 = typeof Symbol != "undefined" && u2[Symbol.iterator] || u2["@@iterator"];
  if (F3)
    return (F3 = F3.call(u2)).next.bind(F3);
  if (Array.isArray(u2) || (F3 = function(u3, D3) {
    if (u3) {
      if (typeof u3 == "string")
        return t2(u3, D3);
      var F4 = Object.prototype.toString.call(u3).slice(8, -1);
      return F4 === "Object" && u3.constructor && (F4 = u3.constructor.name), F4 === "Map" || F4 === "Set" ? Array.from(u3) : F4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F4) ? t2(u3, D3) : void 0;
    }
  }(u2)) || D2 && u2 && typeof u2.length == "number") {
    F3 && (u2 = F3);
    var e3 = 0;
    return function() {
      return e3 >= u2.length ? { done: true } : { done: false, value: u2[e3++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var e2 = /(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/;
var C = /(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])/;
function A2(u2, D2) {
  return (D2 ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(u2);
}
function E(u2, D2) {
  D2 === void 0 && (D2 = false);
  for (var t3 = [], F3 = 0; F3 < u2.length; ) {
    var E2 = u2[F3], n2 = function(e3) {
      if (!D2)
        throw new TypeError(e3);
      t3.push({ type: "INVALID_CHAR", index: F3, value: u2[F3++] });
    };
    if (E2 !== "*")
      if (E2 !== "+" && E2 !== "?")
        if (E2 !== "\\")
          if (E2 !== "{")
            if (E2 !== "}")
              if (E2 !== ":")
                if (E2 !== "(")
                  t3.push({ type: "CHAR", index: F3, value: u2[F3++] });
                else {
                  var r3 = 1, i3 = "", s3 = F3 + 1, a2 = false;
                  if (u2[s3] === "?") {
                    n2('Pattern cannot start with "?" at ' + s3);
                    continue;
                  }
                  for (; s3 < u2.length; ) {
                    if (!A2(u2[s3], false)) {
                      n2("Invalid character '" + u2[s3] + "' at " + s3 + "."), a2 = true;
                      break;
                    }
                    if (u2[s3] !== "\\") {
                      if (u2[s3] === ")") {
                        if (--r3 == 0) {
                          s3++;
                          break;
                        }
                      } else if (u2[s3] === "(" && (r3++, u2[s3 + 1] !== "?")) {
                        n2("Capturing groups are not allowed at " + s3), a2 = true;
                        break;
                      }
                      i3 += u2[s3++];
                    } else
                      i3 += u2[s3++] + u2[s3++];
                  }
                  if (a2)
                    continue;
                  if (r3) {
                    n2("Unbalanced pattern at " + F3);
                    continue;
                  }
                  if (!i3) {
                    n2("Missing pattern at " + F3);
                    continue;
                  }
                  t3.push({ type: "PATTERN", index: F3, value: i3 }), F3 = s3;
                }
              else {
                for (var B2 = "", o2 = F3 + 1; o2 < u2.length; ) {
                  var h3 = u2.substr(o2, 1);
                  if (!(o2 === F3 + 1 && e2.test(h3) || o2 !== F3 + 1 && C.test(h3)))
                    break;
                  B2 += u2[o2++];
                }
                if (!B2) {
                  n2("Missing parameter name at " + F3);
                  continue;
                }
                t3.push({ type: "NAME", index: F3, value: B2 }), F3 = o2;
              }
            else
              t3.push({ type: "CLOSE", index: F3, value: u2[F3++] });
          else
            t3.push({ type: "OPEN", index: F3, value: u2[F3++] });
        else
          t3.push({ type: "ESCAPED_CHAR", index: F3++, value: u2[F3++] });
      else
        t3.push({ type: "MODIFIER", index: F3, value: u2[F3++] });
    else
      t3.push({ type: "ASTERISK", index: F3, value: u2[F3++] });
  }
  return t3.push({ type: "END", index: F3, value: "" }), t3;
}
function n(u2, D2) {
  D2 === void 0 && (D2 = {});
  for (var t3 = E(u2), F3 = D2.prefixes, e3 = F3 === void 0 ? "./" : F3, C2 = "[^" + r2(D2.delimiter || "/#?") + "]+?", A3 = [], n2 = 0, i3 = 0, s3 = "", a2 = /* @__PURE__ */ new Set(), B2 = function(u3) {
    if (i3 < t3.length && t3[i3].type === u3)
      return t3[i3++].value;
  }, o2 = function() {
    return B2("MODIFIER") || B2("ASTERISK");
  }, h3 = function(u3) {
    var D3 = B2(u3);
    if (D3 !== void 0)
      return D3;
    var F4 = t3[i3];
    throw new TypeError("Unexpected " + F4.type + " at " + F4.index + ", expected " + u3);
  }, p2 = function() {
    for (var u3, D3 = ""; u3 = B2("CHAR") || B2("ESCAPED_CHAR"); )
      D3 += u3;
    return D3;
  }, c2 = D2.encodePart || function(u3) {
    return u3;
  }; i3 < t3.length; ) {
    var f4 = B2("CHAR"), l2 = B2("NAME"), m3 = B2("PATTERN");
    if (l2 || m3 || !B2("ASTERISK") || (m3 = ".*"), l2 || m3) {
      var d2 = f4 || "";
      e3.indexOf(d2) === -1 && (s3 += d2, d2 = ""), s3 && (A3.push(c2(s3)), s3 = "");
      var g2 = l2 || n2++;
      if (a2.has(g2))
        throw new TypeError("Duplicate name '" + g2 + "'.");
      a2.add(g2), A3.push({ name: g2, prefix: c2(d2), suffix: "", pattern: m3 || C2, modifier: o2() || "" });
    } else {
      var x3 = f4 || B2("ESCAPED_CHAR");
      if (x3)
        s3 += x3;
      else if (B2("OPEN")) {
        var S3 = p2(), v2 = B2("NAME") || "", y2 = B2("PATTERN") || "";
        v2 || y2 || !B2("ASTERISK") || (y2 = ".*");
        var R2 = p2();
        h3("CLOSE");
        var k2 = o2() || "";
        if (!v2 && !y2 && !k2) {
          s3 += S3;
          continue;
        }
        if (!v2 && !y2 && !S3)
          continue;
        s3 && (A3.push(c2(s3)), s3 = ""), A3.push({ name: v2 || (y2 ? n2++ : ""), pattern: v2 && !y2 ? C2 : y2, prefix: c2(S3), suffix: c2(R2), modifier: k2 });
      } else
        s3 && (A3.push(c2(s3)), s3 = ""), h3("END");
    }
  }
  return A3;
}
function r2(u2) {
  return u2.replace(/([.+*?^${}()[\]|/\\])/g, "\\$1");
}
function i2(u2) {
  return u2 && u2.sensitive ? "u" : "ui";
}
function s2(u2, D2, t3) {
  t3 === void 0 && (t3 = {});
  for (var e3, C2 = t3.strict, A3 = C2 !== void 0 && C2, E2 = t3.start, n2 = E2 === void 0 || E2, s3 = t3.end, a2 = s3 === void 0 || s3, B2 = t3.encode, o2 = B2 === void 0 ? function(u3) {
    return u3;
  } : B2, h3 = "[" + r2(t3.endsWith || "") + "]|$", p2 = "[" + r2(t3.delimiter || "/#?") + "]", c2 = n2 ? "^" : "", f4 = F2(u2); !(e3 = f4()).done; ) {
    var l2 = e3.value;
    if (typeof l2 == "string")
      c2 += r2(o2(l2));
    else {
      var m3 = r2(o2(l2.prefix)), d2 = r2(o2(l2.suffix));
      l2.pattern ? (D2 && D2.push(l2), c2 += m3 || d2 ? l2.modifier === "+" || l2.modifier === "*" ? "(?:" + m3 + "((?:" + l2.pattern + ")(?:" + d2 + m3 + "(?:" + l2.pattern + "))*)" + d2 + ")" + (l2.modifier === "*" ? "?" : "") : "(?:" + m3 + "(" + l2.pattern + ")" + d2 + ")" + l2.modifier : l2.modifier === "+" || l2.modifier === "*" ? "((?:" + l2.pattern + ")" + l2.modifier + ")" : "(" + l2.pattern + ")" + l2.modifier) : c2 += "(?:" + m3 + d2 + ")" + l2.modifier;
    }
  }
  if (a2)
    A3 || (c2 += p2 + "?"), c2 += t3.endsWith ? "(?=" + h3 + ")" : "$";
  else {
    var g2 = u2[u2.length - 1], x3 = typeof g2 == "string" ? p2.indexOf(g2[g2.length - 1]) > -1 : g2 === void 0;
    A3 || (c2 += "(?:" + p2 + "(?=" + h3 + "))?"), x3 || (c2 += "(?=" + p2 + "|" + h3 + ")");
  }
  return new RegExp(c2, i2(t3));
}
function a(u2, D2, t3) {
  return u2 instanceof RegExp ? function(u3, D3) {
    if (!D3)
      return u3;
    for (var t4 = /\((?:\?<(.*?)>)?(?!\?)/g, F3 = 0, e3 = t4.exec(u3.source); e3; )
      D3.push({ name: e3[1] || F3++, prefix: "", suffix: "", modifier: "", pattern: "" }), e3 = t4.exec(u3.source);
    return u3;
  }(u2, D2) : Array.isArray(u2) ? function(u3, D3, t4) {
    var F3 = u3.map(function(u4) {
      return a(u4, D3, t4).source;
    });
    return new RegExp("(?:" + F3.join("|") + ")", i2(t4));
  }(u2, D2, t3) : function(u3, D3, t4) {
    return s2(n(u3, t4), D3, t4);
  }(u2, D2, t3);
}
var B = { delimiter: "", prefixes: "", sensitive: true, strict: true };
var o = { delimiter: ".", prefixes: "", sensitive: true, strict: true };
var h2 = { delimiter: "/", prefixes: "/", sensitive: true, strict: true };
function p(u2, D2) {
  return u2.startsWith(D2) ? u2.substring(D2.length, u2.length) : u2;
}
function c(u2) {
  return !(!u2 || u2.length < 2 || u2[0] !== "[" && (u2[0] !== "\\" && u2[0] !== "{" || u2[1] !== "["));
}
var f3;
var l = ["ftp", "file", "http", "https", "ws", "wss"];
function m2(u2) {
  if (!u2)
    return true;
  for (var D2, t3 = F2(l); !(D2 = t3()).done; )
    if (u2.test(D2.value))
      return true;
  return false;
}
function d(u2) {
  switch (u2) {
    case "ws":
    case "http":
      return "80";
    case "wws":
    case "https":
      return "443";
    case "ftp":
      return "21";
    default:
      return "";
  }
}
function g(u2) {
  if (u2 === "")
    return u2;
  if (/^[-+.A-Za-z0-9]*$/.test(u2))
    return u2.toLowerCase();
  throw new TypeError("Invalid protocol '" + u2 + "'.");
}
function x2(u2) {
  if (u2 === "")
    return u2;
  var D2 = new URL("https://example.com");
  return D2.username = u2, D2.username;
}
function S2(u2) {
  if (u2 === "")
    return u2;
  var D2 = new URL("https://example.com");
  return D2.password = u2, D2.password;
}
function v(u2) {
  if (u2 === "")
    return u2;
  if (/[\t\n\r #%/:<>?@[\]^\\|]/g.test(u2))
    throw new TypeError("Invalid hostname '" + u2 + "'");
  var D2 = new URL("https://example.com");
  return D2.hostname = u2, D2.hostname;
}
function y(u2) {
  if (u2 === "")
    return u2;
  if (/[^0-9a-fA-F[\]:]/g.test(u2))
    throw new TypeError("Invalid IPv6 hostname '" + u2 + "'");
  return u2.toLowerCase();
}
function R(u2) {
  if (u2 === "")
    return u2;
  if (/^[0-9]*$/.test(u2) && parseInt(u2) <= 65535)
    return u2;
  throw new TypeError("Invalid port '" + u2 + "'.");
}
function k(u2) {
  if (u2 === "")
    return u2;
  var D2 = new URL("https://example.com");
  return D2.pathname = u2[0] !== "/" ? "/-" + u2 : u2, u2[0] !== "/" ? D2.pathname.substring(2, D2.pathname.length) : D2.pathname;
}
function w(u2) {
  return u2 === "" ? u2 : new URL("data:" + u2).pathname;
}
function P(u2) {
  if (u2 === "")
    return u2;
  var D2 = new URL("https://example.com");
  return D2.search = u2, D2.search.substring(1, D2.search.length);
}
function T(u2) {
  if (u2 === "")
    return u2;
  var D2 = new URL("https://example.com");
  return D2.hash = u2, D2.hash.substring(1, D2.hash.length);
}
!function(u2) {
  u2[u2.INIT = 0] = "INIT", u2[u2.PROTOCOL = 1] = "PROTOCOL", u2[u2.AUTHORITY = 2] = "AUTHORITY", u2[u2.USERNAME = 3] = "USERNAME", u2[u2.PASSWORD = 4] = "PASSWORD", u2[u2.HOSTNAME = 5] = "HOSTNAME", u2[u2.PORT = 6] = "PORT", u2[u2.PATHNAME = 7] = "PATHNAME", u2[u2.SEARCH = 8] = "SEARCH", u2[u2.HASH = 9] = "HASH", u2[u2.DONE = 10] = "DONE";
}(f3 || (f3 = {}));
var b = function() {
  function u2(u3) {
    this.input = void 0, this.tokenList = [], this.internalResult = {}, this.tokenIndex = 0, this.tokenIncrement = 1, this.componentStart = 0, this.state = f3.INIT, this.groupDepth = 0, this.hostnameIPv6BracketDepth = 0, this.shouldTreatAsStandardURL = false, this.input = u3;
  }
  var t3 = u2.prototype;
  return t3.parse = function() {
    for (this.tokenList = E(this.input, true); this.tokenIndex < this.tokenList.length; this.tokenIndex += this.tokenIncrement) {
      if (this.tokenIncrement = 1, this.tokenList[this.tokenIndex].type === "END") {
        if (this.state === f3.INIT) {
          this.rewind(), this.isHashPrefix() ? this.changeState(f3.HASH, 1) : this.isSearchPrefix() ? (this.changeState(f3.SEARCH, 1), this.internalResult.hash = "") : (this.changeState(f3.PATHNAME, 0), this.internalResult.search = "", this.internalResult.hash = "");
          continue;
        }
        if (this.state === f3.AUTHORITY) {
          this.rewindAndSetState(f3.HOSTNAME);
          continue;
        }
        this.changeState(f3.DONE, 0);
        break;
      }
      if (this.groupDepth > 0) {
        if (!this.isGroupClose())
          continue;
        this.groupDepth -= 1;
      }
      if (this.isGroupOpen())
        this.groupDepth += 1;
      else
        switch (this.state) {
          case f3.INIT:
            this.isProtocolSuffix() && (this.internalResult.username = "", this.internalResult.password = "", this.internalResult.hostname = "", this.internalResult.port = "", this.internalResult.pathname = "", this.internalResult.search = "", this.internalResult.hash = "", this.rewindAndSetState(f3.PROTOCOL));
            break;
          case f3.PROTOCOL:
            if (this.isProtocolSuffix()) {
              this.computeShouldTreatAsStandardURL();
              var u3 = f3.PATHNAME, D2 = 1;
              this.shouldTreatAsStandardURL && (this.internalResult.pathname = "/"), this.nextIsAuthoritySlashes() ? (u3 = f3.AUTHORITY, D2 = 3) : this.shouldTreatAsStandardURL && (u3 = f3.AUTHORITY), this.changeState(u3, D2);
            }
            break;
          case f3.AUTHORITY:
            this.isIdentityTerminator() ? this.rewindAndSetState(f3.USERNAME) : (this.isPathnameStart() || this.isSearchPrefix() || this.isHashPrefix()) && this.rewindAndSetState(f3.HOSTNAME);
            break;
          case f3.USERNAME:
            this.isPasswordPrefix() ? this.changeState(f3.PASSWORD, 1) : this.isIdentityTerminator() && this.changeState(f3.HOSTNAME, 1);
            break;
          case f3.PASSWORD:
            this.isIdentityTerminator() && this.changeState(f3.HOSTNAME, 1);
            break;
          case f3.HOSTNAME:
            this.isIPv6Open() ? this.hostnameIPv6BracketDepth += 1 : this.isIPv6Close() && (this.hostnameIPv6BracketDepth -= 1), this.isPortPrefix() && !this.hostnameIPv6BracketDepth ? this.changeState(f3.PORT, 1) : this.isPathnameStart() ? this.changeState(f3.PATHNAME, 0) : this.isSearchPrefix() ? this.changeState(f3.SEARCH, 1) : this.isHashPrefix() && this.changeState(f3.HASH, 1);
            break;
          case f3.PORT:
            this.isPathnameStart() ? this.changeState(f3.PATHNAME, 0) : this.isSearchPrefix() ? this.changeState(f3.SEARCH, 1) : this.isHashPrefix() && this.changeState(f3.HASH, 1);
            break;
          case f3.PATHNAME:
            this.isSearchPrefix() ? this.changeState(f3.SEARCH, 1) : this.isHashPrefix() && this.changeState(f3.HASH, 1);
            break;
          case f3.SEARCH:
            this.isHashPrefix() && this.changeState(f3.HASH, 1);
        }
    }
  }, t3.changeState = function(u3, D2) {
    switch (this.state) {
      case f3.INIT:
        break;
      case f3.PROTOCOL:
        this.internalResult.protocol = this.makeComponentString();
        break;
      case f3.AUTHORITY:
        break;
      case f3.USERNAME:
        this.internalResult.username = this.makeComponentString();
        break;
      case f3.PASSWORD:
        this.internalResult.password = this.makeComponentString();
        break;
      case f3.HOSTNAME:
        this.internalResult.hostname = this.makeComponentString();
        break;
      case f3.PORT:
        this.internalResult.port = this.makeComponentString();
        break;
      case f3.PATHNAME:
        this.internalResult.pathname = this.makeComponentString();
        break;
      case f3.SEARCH:
        this.internalResult.search = this.makeComponentString();
        break;
      case f3.HASH:
        this.internalResult.hash = this.makeComponentString();
    }
    this.changeStateWithoutSettingComponent(u3, D2);
  }, t3.changeStateWithoutSettingComponent = function(u3, D2) {
    this.state = u3, this.componentStart = this.tokenIndex + D2, this.tokenIndex += D2, this.tokenIncrement = 0;
  }, t3.rewind = function() {
    this.tokenIndex = this.componentStart, this.tokenIncrement = 0;
  }, t3.rewindAndSetState = function(u3) {
    this.rewind(), this.state = u3;
  }, t3.safeToken = function(u3) {
    return u3 < 0 && (u3 = this.tokenList.length - u3), u3 < this.tokenList.length ? this.tokenList[u3] : this.tokenList[this.tokenList.length - 1];
  }, t3.isNonSpecialPatternChar = function(u3, D2) {
    var t4 = this.safeToken(u3);
    return t4.value === D2 && (t4.type === "CHAR" || t4.type === "ESCAPED_CHAR" || t4.type === "INVALID_CHAR");
  }, t3.isProtocolSuffix = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, ":");
  }, t3.nextIsAuthoritySlashes = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex + 1, "/") && this.isNonSpecialPatternChar(this.tokenIndex + 2, "/");
  }, t3.isIdentityTerminator = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "@");
  }, t3.isPasswordPrefix = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, ":");
  }, t3.isPortPrefix = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, ":");
  }, t3.isPathnameStart = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "/");
  }, t3.isSearchPrefix = function() {
    if (this.isNonSpecialPatternChar(this.tokenIndex, "?"))
      return true;
    if (this.tokenList[this.tokenIndex].value !== "?")
      return false;
    var u3 = this.safeToken(this.tokenIndex - 1);
    return u3.type !== "NAME" && u3.type !== "PATTERN" && u3.type !== "CLOSE" && u3.type !== "ASTERISK";
  }, t3.isHashPrefix = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "#");
  }, t3.isGroupOpen = function() {
    return this.tokenList[this.tokenIndex].type == "OPEN";
  }, t3.isGroupClose = function() {
    return this.tokenList[this.tokenIndex].type == "CLOSE";
  }, t3.isIPv6Open = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "[");
  }, t3.isIPv6Close = function() {
    return this.isNonSpecialPatternChar(this.tokenIndex, "]");
  }, t3.makeComponentString = function() {
    var u3 = this.tokenList[this.tokenIndex], D2 = this.safeToken(this.componentStart).index;
    return this.input.substring(D2, u3.index);
  }, t3.computeShouldTreatAsStandardURL = function() {
    var u3 = {};
    Object.assign(u3, B), u3.encodePart = g;
    var D2 = a(this.makeComponentString(), void 0, u3);
    this.shouldTreatAsStandardURL = m2(D2);
  }, D(u2, [{ key: "result", get: function() {
    return this.internalResult;
  } }]), u2;
}();
var I = ["protocol", "username", "password", "hostname", "port", "pathname", "search", "hash"];
function O(u2, D2) {
  if (typeof u2 != "string")
    throw new TypeError("parameter 1 is not of type 'string'.");
  var t3 = new URL(u2, D2);
  return { protocol: t3.protocol.substring(0, t3.protocol.length - 1), username: t3.username, password: t3.password, hostname: t3.hostname, port: t3.port, pathname: t3.pathname, search: t3.search != "" ? t3.search.substring(1, t3.search.length) : void 0, hash: t3.hash != "" ? t3.hash.substring(1, t3.hash.length) : void 0 };
}
function H(u2, D2, t3) {
  var F3;
  if (typeof D2.baseURL == "string")
    try {
      F3 = new URL(D2.baseURL), u2.protocol = F3.protocol ? F3.protocol.substring(0, F3.protocol.length - 1) : "", u2.username = F3.username, u2.password = F3.password, u2.hostname = F3.hostname, u2.port = F3.port, u2.pathname = F3.pathname, u2.search = F3.search ? F3.search.substring(1, F3.search.length) : "", u2.hash = F3.hash ? F3.hash.substring(1, F3.hash.length) : "";
    } catch (u3) {
      throw new TypeError("invalid baseURL '" + D2.baseURL + "'.");
    }
  if (typeof D2.protocol == "string" && (u2.protocol = function(u3, D3) {
    var t4;
    return u3 = (t4 = u3).endsWith(":") ? t4.substr(0, t4.length - ":".length) : t4, D3 || u3 === "" ? u3 : g(u3);
  }(D2.protocol, t3)), typeof D2.username == "string" && (u2.username = function(u3, D3) {
    if (D3 || u3 === "")
      return u3;
    var t4 = new URL("https://example.com");
    return t4.username = u3, t4.username;
  }(D2.username, t3)), typeof D2.password == "string" && (u2.password = function(u3, D3) {
    if (D3 || u3 === "")
      return u3;
    var t4 = new URL("https://example.com");
    return t4.password = u3, t4.password;
  }(D2.password, t3)), typeof D2.hostname == "string" && (u2.hostname = function(u3, D3) {
    return D3 || u3 === "" ? u3 : c(u3) ? y(u3) : v(u3);
  }(D2.hostname, t3)), typeof D2.port == "string" && (u2.port = function(u3, D3, t4) {
    return d(D3) === u3 && (u3 = ""), t4 || u3 === "" ? u3 : R(u3);
  }(D2.port, u2.protocol, t3)), typeof D2.pathname == "string") {
    if (u2.pathname = D2.pathname, F3 && !function(u3, D3) {
      return !(!u3.length || u3[0] !== "/" && (!D3 || u3.length < 2 || u3[0] != "\\" && u3[0] != "{" || u3[1] != "/"));
    }(u2.pathname, t3)) {
      var e3 = F3.pathname.lastIndexOf("/");
      e3 >= 0 && (u2.pathname = F3.pathname.substring(0, e3 + 1) + u2.pathname);
    }
    u2.pathname = function(u3, D3, t4) {
      if (t4 || u3 === "")
        return u3;
      if (D3 && !l.includes(D3))
        return new URL(D3 + ":" + u3).pathname;
      var F4 = u3[0] == "/";
      return u3 = new URL(F4 ? u3 : "/-" + u3, "https://example.com").pathname, F4 || (u3 = u3.substring(2, u3.length)), u3;
    }(u2.pathname, u2.protocol, t3);
  }
  return typeof D2.search == "string" && (u2.search = function(u3, D3) {
    if (u3 = p(u3, "?"), D3 || u3 === "")
      return u3;
    var t4 = new URL("https://example.com");
    return t4.search = u3, t4.search ? t4.search.substring(1, t4.search.length) : "";
  }(D2.search, t3)), typeof D2.hash == "string" && (u2.hash = function(u3, D3) {
    if (u3 = p(u3, "#"), D3 || u3 === "")
      return u3;
    var t4 = new URL("https://example.com");
    return t4.hash = u3, t4.hash ? t4.hash.substring(1, t4.hash.length) : "";
  }(D2.hash, t3)), u2;
}
function N(u2) {
  return u2.replace(/([+*?:{}()\\])/g, "\\$1");
}
function L(u2, D2) {
  for (var t3 = "[^" + (D2.delimiter || "/#?").replace(/([.+*?^${}()[\]|/\\])/g, "\\$1") + "]+?", F3 = /(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])/, e3 = "", C2 = 0; C2 < u2.length; ++C2) {
    var A3 = u2[C2], E2 = C2 > 0 ? u2[C2 - 1] : null, n2 = C2 < u2.length - 1 ? u2[C2 + 1] : null;
    if (typeof A3 != "string")
      if (A3.pattern !== "") {
        var r3 = typeof A3.name != "number", i3 = D2.prefixes !== void 0 ? D2.prefixes : "./", s3 = A3.suffix !== "" || A3.prefix !== "" && (A3.prefix.length !== 1 || !i3.includes(A3.prefix));
        s3 || !r3 || A3.pattern !== t3 || A3.modifier !== "" || !n2 || n2.prefix || n2.suffix || (s3 = typeof n2 == "string" ? F3.test(n2.length > 0 ? n2[0] : "") : typeof n2.name == "number"), !s3 && A3.prefix === "" && E2 && typeof E2 == "string" && E2.length > 0 && (s3 = i3.includes(E2[E2.length - 1])), s3 && (e3 += "{"), e3 += N(A3.prefix), r3 && (e3 += ":" + A3.name), A3.pattern === ".*" ? e3 += r3 || E2 && typeof E2 != "string" && !E2.modifier && !s3 && A3.prefix === "" ? "(.*)" : "*" : A3.pattern === t3 ? r3 || (e3 += "(" + t3 + ")") : e3 += "(" + A3.pattern + ")", A3.pattern === t3 && r3 && A3.suffix !== "" && F3.test(A3.suffix[0]) && (e3 += "\\"), e3 += N(A3.suffix), s3 && (e3 += "}"), e3 += A3.modifier;
      } else {
        if (A3.modifier === "") {
          e3 += N(A3.prefix);
          continue;
        }
        e3 += "{" + N(A3.prefix) + "}" + A3.modifier;
      }
    else
      e3 += N(A3);
  }
  return e3;
}
var U = function() {
  function u2(u3, D2) {
    u3 === void 0 && (u3 = {}), this.pattern = void 0, this.regexp = {}, this.keys = {}, this.component_pattern = {};
    try {
      if (typeof u3 == "string") {
        var t4 = new b(u3);
        if (t4.parse(), u3 = t4.result, D2) {
          if (typeof D2 != "string")
            throw new TypeError("'baseURL' parameter is not of type 'string'.");
          u3.baseURL = D2;
        } else if (typeof u3.protocol != "string")
          throw new TypeError("A base URL must be provided for a relative constructor string.");
      } else if (D2)
        throw new TypeError("parameter 1 is not of type 'string'.");
      if (!u3 || typeof u3 != "object")
        throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");
      var e3;
      this.pattern = H({ pathname: "*", protocol: "*", username: "*", password: "*", hostname: "*", port: "*", search: "*", hash: "*" }, u3, true), d(this.pattern.protocol) === this.pattern.port && (this.pattern.port = "");
      for (var C2, A3 = F2(I); !(C2 = A3()).done; )
        if ((e3 = C2.value) in this.pattern) {
          var E2 = {}, r3 = this.pattern[e3];
          switch (this.keys[e3] = [], e3) {
            case "protocol":
              Object.assign(E2, B), E2.encodePart = g;
              break;
            case "username":
              Object.assign(E2, B), E2.encodePart = x2;
              break;
            case "password":
              Object.assign(E2, B), E2.encodePart = S2;
              break;
            case "hostname":
              Object.assign(E2, o), E2.encodePart = c(r3) ? y : v;
              break;
            case "port":
              Object.assign(E2, B), E2.encodePart = R;
              break;
            case "pathname":
              m2(this.regexp.protocol) ? (Object.assign(E2, h2), E2.encodePart = k) : (Object.assign(E2, B), E2.encodePart = w);
              break;
            case "search":
              Object.assign(E2, B), E2.encodePart = P;
              break;
            case "hash":
              Object.assign(E2, B), E2.encodePart = T;
          }
          try {
            var i3 = n(r3, E2);
            this.regexp[e3] = s2(i3, this.keys[e3], E2), this.component_pattern[e3] = L(i3, E2);
          } catch (u4) {
            throw new TypeError("invalid " + e3 + " pattern '" + this.pattern[e3] + "'.");
          }
        }
    } catch (u4) {
      throw new TypeError("Failed to construct 'URLPattern': " + u4.message);
    }
  }
  var t3 = u2.prototype;
  return t3.test = function(u3, D2) {
    u3 === void 0 && (u3 = {});
    var t4, F3 = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof u3 != "string" && D2)
      throw new TypeError("parameter 1 is not of type 'string'.");
    if (u3 === void 0)
      return false;
    try {
      F3 = H(F3, typeof u3 == "object" ? u3 : O(u3, D2), false);
    } catch (u4) {
      return false;
    }
    for (t4 in this.pattern)
      if (!this.regexp[t4].exec(F3[t4]))
        return false;
    return true;
  }, t3.exec = function(u3, D2) {
    u3 === void 0 && (u3 = {});
    var t4 = { pathname: "", protocol: "", username: "", password: "", hostname: "", port: "", search: "", hash: "" };
    if (typeof u3 != "string" && D2)
      throw new TypeError("parameter 1 is not of type 'string'.");
    if (u3 !== void 0) {
      try {
        t4 = H(t4, typeof u3 == "object" ? u3 : O(u3, D2), false);
      } catch (u4) {
        return null;
      }
      var e3, C2 = {};
      for (e3 in C2.inputs = D2 ? [u3, D2] : [u3], this.pattern) {
        var A3 = this.regexp[e3].exec(t4[e3]);
        if (!A3)
          return null;
        for (var E2, n2 = {}, r3 = F2(this.keys[e3].entries()); !(E2 = r3()).done; ) {
          var i3 = E2.value, s3 = i3[1];
          typeof s3.name != "string" && typeof s3.name != "number" || (n2[s3.name] = A3[i3[0] + 1] || "");
        }
        C2[e3] = { input: t4[e3] || "", groups: n2 };
      }
      return C2;
    }
  }, D(u2, [{ key: "protocol", get: function() {
    return this.component_pattern.protocol;
  } }, { key: "username", get: function() {
    return this.component_pattern.username;
  } }, { key: "password", get: function() {
    return this.component_pattern.password;
  } }, { key: "hostname", get: function() {
    return this.component_pattern.hostname;
  } }, { key: "port", get: function() {
    return this.component_pattern.port;
  } }, { key: "pathname", get: function() {
    return this.component_pattern.pathname;
  } }, { key: "search", get: function() {
    return this.component_pattern.search;
  } }, { key: "hash", get: function() {
    return this.component_pattern.hash;
  } }]), u2;
}();
var INTERNAL$2 = { tick: 0, pool: /* @__PURE__ */ new Map() };
function requestAnimationFrame(callback) {
  if (!INTERNAL$2.pool.size) {
    (0, import_node_timers.setTimeout)(() => {
      const next = __performance_now();
      for (const func2 of INTERNAL$2.pool.values()) {
        func2(next);
      }
      INTERNAL$2.pool.clear();
    }, 1e3 / 16);
  }
  const func = __function_bind(callback, void 0);
  const tick = ++INTERNAL$2.tick;
  INTERNAL$2.pool.set(tick, func);
  return tick;
}
function cancelAnimationFrame(requestId) {
  const timeout = INTERNAL$2.pool.get(requestId);
  if (timeout) {
    (0, import_node_timers.clearTimeout)(timeout);
    INTERNAL$2.pool.delete(requestId);
  }
}
function atob(data) {
  return Buffer.from(data, "base64").toString("binary");
}
function btoa(data) {
  return Buffer.from(data, "binary").toString("base64");
}
var Node = class extends EventTarget {
  append(...nodesOrDOMStrings) {
  }
  appendChild(childNode) {
    return childNode;
  }
  after(...nodesOrDOMStrings) {
  }
  before(...nodesOrDOMStrings) {
  }
  prepend(...nodesOrDOMStrings) {
  }
  replaceChild(newChild, oldChild) {
    return oldChild;
  }
  removeChild(childNode) {
    return childNode;
  }
  get attributes() {
    return {};
  }
  get childNodes() {
    return [];
  }
  get children() {
    return [];
  }
  get ownerDocument() {
    return null;
  }
  get nodeValue() {
    return "";
  }
  set nodeValue(value) {
  }
  get textContent() {
    return "";
  }
  set textContent(value) {
  }
  get previousElementSibling() {
    return null;
  }
  get nextElementSibling() {
    return null;
  }
  [Symbol.for("nodejs.util.inspect.custom")](depth, options) {
    return `${this.constructor.name}`;
  }
};
var DocumentFragment = class extends Node {
};
var ShadowRoot = class extends DocumentFragment {
  get innerHTML() {
    return "";
  }
  set innerHTML(value) {
  }
};
var NodeFilter$1 = Object.assign({
  NodeFilter() {
    throw new TypeError("Illegal constructor");
  }
}.NodeFilter, {
  FILTER_ACCEPT: 1,
  FILTER_REJECT: 2,
  FILTER_SKIP: 3,
  SHOW_ALL: 4294967295,
  SHOW_ELEMENT: 1,
  SHOW_ATTRIBUTE: 2,
  SHOW_TEXT: 4,
  SHOW_CDATA_SECTION: 8,
  SHOW_ENTITY_REFERENCE: 16,
  SHOW_ENTITY: 32,
  SHOW_PROCESSING_INSTRUCTION: 64,
  SHOW_COMMENT: 128,
  SHOW_DOCUMENT: 256,
  SHOW_DOCUMENT_TYPE: 512,
  SHOW_DOCUMENT_FRAGMENT: 1024,
  SHOW_NOTATION: 2048
});
var NodeIterator$1 = class {
  nextNode() {
    return null;
  }
  previousNode() {
    return null;
  }
  get filter() {
    const internals = internalsOf(this, "NodeIterator", "filter");
    return internals.filter;
  }
  get pointerBeforeReferenceNode() {
    const internals = internalsOf(this, "NodeIterator", "pointerBeforeReferenceNode");
    return internals.pointerBeforeReferenceNode;
  }
  get referenceNode() {
    const internals = internalsOf(this, "NodeIterator", "referenceNode");
    return internals.referenceNode;
  }
  get root() {
    const internals = internalsOf(this, "NodeIterator", "root");
    return internals.root;
  }
  get whatToShow() {
    const internals = internalsOf(this, "NodeIterator", "whatToShow");
    return internals.whatToShow;
  }
};
allowStringTag(Node);
allowStringTag(NodeIterator$1);
allowStringTag(DocumentFragment);
allowStringTag(ShadowRoot);
var CharacterData = class extends Node {
  constructor(data) {
    INTERNALS4.set(super(), {
      data: String(data)
    });
  }
  get data() {
    return internalsOf(this, "CharacterData", "data").data;
  }
  get textContent() {
    return internalsOf(this, "CharacterData", "textContent").data;
  }
};
var Comment = class extends CharacterData {
};
var Text = class extends CharacterData {
  get assignedSlot() {
    return null;
  }
  get wholeText() {
    return internalsOf(this, "CharacterData", "textContent").data;
  }
};
allowStringTag(CharacterData);
allowStringTag(Text);
allowStringTag(Comment);
var CustomEvent = class extends Event {
  constructor(type, params) {
    params = Object(params);
    super(type, params);
    if ("detail" in params)
      this.detail = params.detail;
  }
};
allowStringTag(CustomEvent);
var fetch2 = {
  fetch(resource, init2) {
    const resourceURL = new URL(__object_isPrototypeOf(Request2.prototype, resource) ? resource.url : pathToPosix(resource), typeof Object(globalThis.process).cwd === "function" ? "file:" + pathToPosix(process.cwd()) + "/" : "file:");
    if (resourceURL.protocol.toLowerCase() === "file:") {
      return import("fs").then((fs2) => {
        try {
          const stats = fs2.statSync(resourceURL);
          const body = fs2.createReadStream(resourceURL);
          return new Response2(body, {
            status: 200,
            statusText: "",
            headers: {
              "content-length": String(stats.size),
              date: new Date().toUTCString(),
              "last-modified": new Date(stats.mtimeMs).toUTCString()
            }
          });
        } catch (error2) {
          const body = new import_node_stream3.default.Readable();
          body._read = () => {
          };
          body.push(null);
          return new Response2(body, {
            status: 404,
            statusText: "",
            headers: {
              date: new Date().toUTCString()
            }
          });
        }
      });
    } else {
      return fetch(resource, init2);
    }
  }
}.fetch;
var INTERNAL$1 = { tick: 0, pool: /* @__PURE__ */ new Map() };
function requestIdleCallback(callback) {
  if (!INTERNAL$1.pool.size) {
    (0, import_node_timers.setTimeout)(() => {
      const next = __performance_now();
      for (const func2 of INTERNAL$1.pool.values()) {
        func2(next);
      }
      INTERNAL$1.pool.clear();
    }, 1e3 / 16);
  }
  const func = __function_bind(callback, void 0);
  const tick = ++INTERNAL$1.tick;
  INTERNAL$1.pool.set(tick, func);
  return tick;
}
function cancelIdleCallback(requestId) {
  const timeout = INTERNAL$1.pool.get(requestId);
  if (timeout) {
    (0, import_node_timers.clearTimeout)(timeout);
    INTERNAL$1.pool.delete(requestId);
  }
}
var PRIMITIVE = 0;
var ARRAY = 1;
var OBJECT = 2;
var DATE = 3;
var REGEXP = 4;
var MAP = 5;
var SET = 6;
var ERROR = 7;
var BIGINT = 8;
var env = typeof self === "object" ? self : globalThis;
var deserializer = ($3, _) => {
  const as = (out, index) => {
    $3.set(index, out);
    return out;
  };
  const unpair = (index) => {
    if ($3.has(index))
      return $3.get(index);
    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index2 of value)
          arr.push(unpair(index2));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index2] of value)
          object[unpair(key)] = unpair(index2);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const { source, flags } = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(/* @__PURE__ */ new Map(), index);
        for (const [key, index2] of value)
          map.set(unpair(key), unpair(index2));
        return map;
      }
      case SET: {
        const set = as(/* @__PURE__ */ new Set(), index);
        for (const index2 of value)
          set.add(unpair(index2));
        return set;
      }
      case ERROR: {
        const { name, message } = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case "BigInt":
        return as(Object(BigInt(value)), index);
    }
    return as(new env[type](value), index);
  };
  return unpair;
};
var deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
var EMPTY = "";
var { toString } = {};
var { keys } = Object;
var typeOf = (value) => {
  const type = typeof value;
  if (type !== "object" || !value)
    return [PRIMITIVE, type];
  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case "Array":
      return [ARRAY, EMPTY];
    case "Object":
      return [OBJECT, EMPTY];
    case "Date":
      return [DATE, EMPTY];
    case "RegExp":
      return [REGEXP, EMPTY];
    case "Map":
      return [MAP, EMPTY];
    case "Set":
      return [SET, EMPTY];
  }
  if (asString.includes("Array"))
    return [ARRAY, asString];
  if (asString.includes("Error"))
    return [ERROR, asString];
  return [OBJECT, asString];
};
var shouldSkip = ([TYPE, type]) => TYPE === PRIMITIVE && (type === "function" || type === "symbol");
var serializer = (strict, json, $3, _) => {
  const as = (out, value) => {
    const index = _.push(out) - 1;
    $3.set(value, index);
    return index;
  };
  const pair = (value) => {
    if ($3.has(value))
      return $3.get(value);
    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case "bigint":
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case "function":
          case "symbol":
            if (strict)
              throw new TypeError("unable to serialize " + type);
            entry = null;
            break;
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type)
          return as([type, [...value]], value);
        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case "BigInt":
              return as([type, value.toString()], value);
            case "Boolean":
            case "Number":
            case "String":
              return as([type, value.valueOf()], value);
          }
        }
        if (json && "toJSON" in value)
          return pair(value.toJSON());
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const { source, flags } = value;
        return as([TYPE, { source, flags }], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }
    const { message } = value;
    return as([TYPE, { name: type, message }], value);
  };
  return pair;
};
var serialize = (value, { json, lossy } = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _)(value), _;
};
var structuredClone = (any2, options) => deserialize(serialize(any2, options));
var INTERNAL = { tick: 0, pool: /* @__PURE__ */ new Map() };
function setTimeout(callback, delay = 0, ...args) {
  const func = __function_bind(callback, globalThis);
  const tick = ++INTERNAL.tick;
  const timeout = (0, import_node_timers.setTimeout)(func, delay, ...args);
  INTERNAL.pool.set(tick, timeout);
  return tick;
}
function clearTimeout(timeoutId) {
  const timeout = INTERNAL.pool.get(timeoutId);
  if (timeout) {
    (0, import_node_timers.clearTimeout)(timeout);
    INTERNAL.pool.delete(timeoutId);
  }
}
var TreeWalker = class {
  parentNode() {
    return null;
  }
  firstChild() {
    return null;
  }
  lastChild() {
    return null;
  }
  previousSibling() {
    return null;
  }
  nextSibling() {
    return null;
  }
  previousNode() {
    return null;
  }
  nextNode() {
    return null;
  }
  get currentNode() {
    const internals = internalsOf(this, "TreeWalker", "currentNode");
    return internals.currentNode;
  }
  get root() {
    const internals = internalsOf(this, "TreeWalker", "root");
    return internals.root;
  }
  get whatToShow() {
    const internals = internalsOf(this, "TreeWalker", "whatToShow");
    return internals.whatToShow;
  }
};
allowStringTag(TreeWalker);
var ImageData = class {
  constructor(arg0, arg1, ...args) {
    if (arguments.length < 2)
      throw new TypeError(`Failed to construct 'ImageData': 2 arguments required.`);
    const hasData = __object_isPrototypeOf(Uint8ClampedArray.prototype, arg0);
    const d2 = hasData ? arg0 : new Uint8ClampedArray(asNumber(arg0, "width") * asNumber(arg1, "height") * 4);
    const w2 = asNumber(hasData ? arg1 : arg0, "width");
    const h3 = d2.length / w2 / 4;
    const c2 = String(Object(hasData ? args[1] : args[0]).colorSpace || "srgb");
    if (args.length && asNumber(args[0], "height") !== h3)
      throw new DOMException3("height is not equal to (4 * width * height)", "IndexSizeError");
    if (c2 !== "srgb" && c2 !== "rec2020" && c2 !== "display-p3")
      throw new TypeError("colorSpace is not known value");
    Object.defineProperty(this, "data", {
      configurable: true,
      enumerable: true,
      value: d2
    });
    INTERNALS4.set(this, {
      width: w2,
      height: h3,
      colorSpace: c2
    });
  }
  get data() {
    internalsOf(this, "ImageData", "data");
    return Object.getOwnPropertyDescriptor(this, "data").value;
  }
  get width() {
    return internalsOf(this, "ImageData", "width").width;
  }
  get height() {
    return internalsOf(this, "ImageData", "height").height;
  }
};
allowStringTag(ImageData);
var asNumber = (value, axis) => {
  value = Number(value) || 0;
  if (value === 0)
    throw new TypeError(`The source ${axis} is zero or not a number.`);
  return value;
};
var CanvasRenderingContext2D = class {
  get canvas() {
    return internalsOf(this, "CanvasRenderingContext2D", "canvas").canvas;
  }
  get direction() {
    return internalsOf(this, "CanvasRenderingContext2D", "direction").direction;
  }
  get fillStyle() {
    return internalsOf(this, "CanvasRenderingContext2D", "fillStyle").fillStyle;
  }
  get filter() {
    return internalsOf(this, "CanvasRenderingContext2D", "filter").filter;
  }
  get globalAlpha() {
    return internalsOf(this, "CanvasRenderingContext2D", "globalAlpha").globalAlpha;
  }
  get globalCompositeOperation() {
    return internalsOf(this, "CanvasRenderingContext2D", "globalCompositeOperation").globalCompositeOperation;
  }
  get font() {
    return internalsOf(this, "CanvasRenderingContext2D", "font").font;
  }
  get imageSmoothingEnabled() {
    return internalsOf(this, "CanvasRenderingContext2D", "imageSmoothingEnabled").imageSmoothingEnabled;
  }
  get imageSmoothingQuality() {
    return internalsOf(this, "CanvasRenderingContext2D", "imageSmoothingQuality").imageSmoothingQuality;
  }
  get lineCap() {
    return internalsOf(this, "CanvasRenderingContext2D", "lineCap").lineCap;
  }
  get lineDashOffset() {
    return internalsOf(this, "CanvasRenderingContext2D", "lineDashOffset").lineDashOffset;
  }
  get lineJoin() {
    return internalsOf(this, "CanvasRenderingContext2D", "lineJoin").lineJoin;
  }
  get lineWidth() {
    return internalsOf(this, "CanvasRenderingContext2D", "lineWidth").lineWidth;
  }
  get miterLimit() {
    return internalsOf(this, "CanvasRenderingContext2D", "miterLimit").miterLimit;
  }
  get strokeStyle() {
    return internalsOf(this, "CanvasRenderingContext2D", "strokeStyle").strokeStyle;
  }
  get shadowOffsetX() {
    return internalsOf(this, "CanvasRenderingContext2D", "shadowOffsetX").shadowOffsetX;
  }
  get shadowOffsetY() {
    return internalsOf(this, "CanvasRenderingContext2D", "shadowOffsetY").shadowOffsetY;
  }
  get shadowBlur() {
    return internalsOf(this, "CanvasRenderingContext2D", "shadowBlur").shadowBlur;
  }
  get shadowColor() {
    return internalsOf(this, "CanvasRenderingContext2D", "shadowColor").shadowColor;
  }
  get textAlign() {
    return internalsOf(this, "CanvasRenderingContext2D", "textAlign").textAlign;
  }
  get textBaseline() {
    return internalsOf(this, "CanvasRenderingContext2D", "textBaseline").textBaseline;
  }
  arc() {
  }
  arcTo() {
  }
  beginPath() {
  }
  bezierCurveTo() {
  }
  clearRect() {
  }
  clip() {
  }
  closePath() {
  }
  createImageData(arg0, arg1) {
    const hasData = __object_isPrototypeOf(ImageData.prototype, arg0);
    const w2 = hasData ? arg0.width : arg0;
    const h3 = hasData ? arg0.height : arg1;
    const d2 = hasData ? arg0.data : new Uint8ClampedArray(w2 * h3 * 4);
    return new ImageData(d2, w2, h3);
  }
  createLinearGradient() {
  }
  createPattern() {
  }
  createRadialGradient() {
  }
  drawFocusIfNeeded() {
  }
  drawImage() {
  }
  ellipse() {
  }
  fill() {
  }
  fillRect() {
  }
  fillText() {
  }
  getContextAttributes() {
  }
  getImageData() {
  }
  getLineDash() {
  }
  getTransform() {
  }
  isPointInPath() {
  }
  isPointInStroke() {
  }
  lineTo() {
  }
  measureText() {
  }
  moveTo() {
  }
  putImageData() {
  }
  quadraticCurveTo() {
  }
  rect() {
  }
  resetTransform() {
  }
  restore() {
  }
  rotate() {
  }
  save() {
  }
  scale() {
  }
  setLineDash() {
  }
  setTransform() {
  }
  stroke() {
  }
  strokeRect() {
  }
  strokeText() {
  }
  transform() {
  }
  translate() {
  }
};
allowStringTag(CanvasRenderingContext2D);
var __createCanvasRenderingContext2D = (canvas) => {
  const renderingContext2D = Object.create(CanvasRenderingContext2D.prototype);
  INTERNALS4.set(renderingContext2D, {
    canvas,
    direction: "inherit",
    fillStyle: "#000",
    filter: "none",
    font: "10px sans-serif",
    globalAlpha: 0,
    globalCompositeOperation: "source-over",
    imageSmoothingEnabled: false,
    imageSmoothingQuality: "high",
    lineCap: "butt",
    lineDashOffset: 0,
    lineJoin: "miter",
    lineWidth: 1,
    miterLimit: 10,
    shadowBlur: 0,
    shadowColor: "#000",
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    strokeStyle: "#000",
    textAlign: "start",
    textBaseline: "alphabetic"
  });
  return renderingContext2D;
};
var CustomElementRegistry = class {
  define(name, constructor, options) {
    const internals = internalsOf(this, "CustomElementRegistry", "define");
    name = String(name);
    if (/[A-Z]/.test(name))
      throw new SyntaxError("Custom element name cannot contain an uppercase ASCII letter");
    if (!/^[a-z]/.test(name))
      throw new SyntaxError("Custom element name must have a lowercase ASCII letter as its first character");
    if (!/-/.test(name))
      throw new SyntaxError("Custom element name must contain a hyphen");
    INTERNALS4.set(constructor, {
      attributes: {},
      localName: name
    });
    internals.constructorByName.set(name, constructor);
    internals.nameByConstructor.set(constructor, name);
  }
  get(name) {
    const internals = internalsOf(this, "CustomElementRegistry", "get");
    name = String(name).toLowerCase();
    return internals.constructorByName.get(name);
  }
  getName(constructor) {
    const internals = internalsOf(this, "CustomElementRegistry", "getName");
    return internals.nameByConstructor.get(constructor);
  }
};
allowStringTag(CustomElementRegistry);
var initCustomElementRegistry = (target, exclude) => {
  if (exclude.has("customElements"))
    return;
  const CustomElementRegistry2 = target.CustomElementRegistry || globalThis.CustomElementRegistry;
  const customElements2 = target.customElements = Object.create(CustomElementRegistry2.prototype);
  INTERNALS4.set(customElements2, {
    constructorByName: /* @__PURE__ */ new Map(),
    nameByConstructor: /* @__PURE__ */ new Map()
  });
};
var Element = class extends Node {
  constructor() {
    super();
    if (INTERNALS4.has(new.target)) {
      const internals = internalsOf(new.target, "Element", "localName");
      INTERNALS4.set(this, {
        attributes: {},
        localName: internals.localName,
        ownerDocument: this.ownerDocument,
        shadowInit: null,
        shadowRoot: null
      });
    }
  }
  hasAttribute(name) {
    return false;
  }
  getAttribute(name) {
    return null;
  }
  setAttribute(name, value) {
  }
  removeAttribute(name) {
  }
  attachShadow(init2) {
    if (arguments.length < 1)
      throw new TypeError(`Failed to execute 'attachShadow' on 'Element': 1 argument required, but only 0 present.`);
    if (init2 !== Object(init2))
      throw new TypeError(`Failed to execute 'attachShadow' on 'Element': The provided value is not of type 'ShadowRootInit'.`);
    if (init2.mode !== "open" && init2.mode !== "closed")
      throw new TypeError(`Failed to execute 'attachShadow' on 'Element': Failed to read the 'mode' property from 'ShadowRootInit': The provided value '${init2.mode}' is not a valid enum value of type ShadowRootMode.`);
    const internals = internalsOf(this, "Element", "attachShadow");
    if (internals.shadowRoot)
      throw new Error("The operation is not supported.");
    internals.shadowInit = internals.shadowInit || {
      mode: init2.mode,
      delegatesFocus: Boolean(init2.delegatesFocus)
    };
    internals.shadowRoot = internals.shadowRoot || (/^open$/.test(internals.shadowInit.mode) ? Object.setPrototypeOf(new EventTarget(), ShadowRoot.prototype) : null);
    return internals.shadowRoot;
  }
  get assignedSlot() {
    return null;
  }
  get innerHTML() {
    internalsOf(this, "Element", "innerHTML");
    return "";
  }
  set innerHTML(value) {
    internalsOf(this, "Element", "innerHTML");
  }
  get shadowRoot() {
    const internals = internalsOf(this, "Element", "shadowRoot");
    return Object(internals.shadowInit).mode === "open" ? internals.shadowRoot : null;
  }
  get localName() {
    return internalsOf(this, "Element", "localName").localName;
  }
  get nodeName() {
    return internalsOf(this, "Element", "nodeName").localName.toUpperCase();
  }
  get tagName() {
    return internalsOf(this, "Element", "tagName").localName.toUpperCase();
  }
};
var HTMLElement2 = class extends Element {
};
var HTMLBodyElement = class extends HTMLElement2 {
};
var HTMLDivElement = class extends HTMLElement2 {
};
var HTMLHeadElement = class extends HTMLElement2 {
};
var HTMLHtmlElement = class extends HTMLElement2 {
};
var HTMLSpanElement = class extends HTMLElement2 {
};
var HTMLStyleElement = class extends HTMLElement2 {
};
var HTMLTemplateElement = class extends HTMLElement2 {
};
var HTMLUnknownElement = class extends HTMLElement2 {
};
allowStringTag(Element);
allowStringTag(HTMLElement2);
allowStringTag(HTMLBodyElement);
allowStringTag(HTMLDivElement);
allowStringTag(HTMLHeadElement);
allowStringTag(HTMLHtmlElement);
allowStringTag(HTMLSpanElement);
allowStringTag(HTMLStyleElement);
allowStringTag(HTMLTemplateElement);
allowStringTag(HTMLUnknownElement);
var Document = class extends Node {
  createElement(name) {
    const internals = internalsOf(this, "Document", "createElement");
    const customElementInternals = INTERNALS4.get(internals.target.customElements);
    name = String(name).toLowerCase();
    const TypeOfHTMLElement = internals.constructorByName.get(name) || customElementInternals && customElementInternals.constructorByName.get(name) || HTMLUnknownElement;
    const element = Object.setPrototypeOf(new EventTarget(), TypeOfHTMLElement.prototype);
    INTERNALS4.set(element, {
      attributes: {},
      localName: name,
      ownerDocument: this,
      shadowInit: null,
      shadowRoot: null
    });
    return element;
  }
  createNodeIterator(root, whatToShow = NodeFilter.SHOW_ALL, filter) {
    const target = Object.create(NodeIterator.prototype);
    INTERNALS4.set(target, {
      filter,
      pointerBeforeReferenceNode: false,
      referenceNode: root,
      root,
      whatToShow
    });
    return target;
  }
  createTextNode(data) {
    return new Text(data);
  }
  createTreeWalker(root, whatToShow = NodeFilter.SHOW_ALL, filter, expandEntityReferences) {
    const target = Object.create(TreeWalker.prototype);
    INTERNALS4.set(target, {
      filter,
      currentNode: root,
      root,
      whatToShow
    });
    return target;
  }
  get adoptedStyleSheets() {
    return [];
  }
  get styleSheets() {
    return [];
  }
};
var HTMLDocument = class extends Document {
};
allowStringTag(Document);
allowStringTag(HTMLDocument);
var initDocument = (target, exclude) => {
  if (exclude.has("document"))
    return;
  const EventTarget2 = target.EventTarget || globalThis.EventTarget;
  const HTMLDocument2 = target.HTMLDocument || globalThis.HTMLDocument;
  const document = target.document = Object.setPrototypeOf(new EventTarget2(), HTMLDocument2.prototype);
  INTERNALS4.set(document, {
    target,
    constructorByName: /* @__PURE__ */ new Map([
      ["body", target.HTMLBodyElement],
      ["canvas", target.HTMLCanvasElement],
      ["div", target.HTMLDivElement],
      ["head", target.HTMLHeadElement],
      ["html", target.HTMLHtmlElement],
      ["img", target.HTMLImageElement],
      ["span", target.HTMLSpanElement],
      ["style", target.HTMLStyleElement]
    ]),
    nameByConstructor: /* @__PURE__ */ new Map()
  });
  const initElement = (name, Class) => {
    const target2 = Object.setPrototypeOf(new EventTarget2(), Class.prototype);
    INTERNALS4.set(target2, {
      attributes: {},
      localName: name,
      ownerDocument: document,
      shadowRoot: null,
      shadowInit: null
    });
    return target2;
  };
  document.body = initElement("body", target.HTMLBodyElement);
  document.head = initElement("head", target.HTMLHeadElement);
  document.documentElement = initElement("html", target.HTMLHtmlElement);
};
var HTMLCanvasElement = class extends HTMLElement2 {
  get height() {
    return internalsOf(this, "HTMLCanvasElement", "height").height;
  }
  set height(value) {
    internalsOf(this, "HTMLCanvasElement", "height").height = Number(value) || 0;
  }
  get width() {
    return internalsOf(this, "HTMLCanvasElement", "width").width;
  }
  set width(value) {
    internalsOf(this, "HTMLCanvasElement", "width").width = Number(value) || 0;
  }
  captureStream() {
    return null;
  }
  getContext(contextType) {
    const internals = internalsOf(this, "HTMLCanvasElement", "getContext");
    switch (contextType) {
      case "2d":
        if (internals.renderingContext2D)
          return internals.renderingContext2D;
        internals.renderingContext2D = __createCanvasRenderingContext2D(this);
        return internals.renderingContext2D;
      default:
        return null;
    }
  }
  toBlob() {
  }
  toDataURL() {
  }
  transferControlToOffscreen() {
  }
};
allowStringTag(HTMLCanvasElement);
var HTMLImageElement = class extends HTMLElement2 {
  get src() {
    return internalsOf(this, "HTMLImageElement", "src").src;
  }
  set src(value) {
    const internals = internalsOf(this, "HTMLImageElement", "src");
    internals.src = String(value);
  }
};
allowStringTag(HTMLImageElement);
function Image() {
  INTERNALS4.set(this, {
    attributes: {},
    localName: "img",
    innerHTML: "",
    shadowRoot: null,
    shadowInit: null
  });
}
Image.prototype = HTMLImageElement.prototype;
var MediaQueryList = class extends EventTarget {
  get matches() {
    return internalsOf(this, "MediaQueryList", "matches").matches;
  }
  get media() {
    return internalsOf(this, "MediaQueryList", "media").media;
  }
};
allowStringTag(MediaQueryList);
var initMediaQueryList = (target, exclude) => {
  if (exclude.has("MediaQueryList") || exclude.has("matchMedia"))
    return;
  const EventTarget2 = target.EventTarget || globalThis.EventTarget;
  const MediaQueryList2 = target.MediaQueryList || globalThis.MediaQueryList;
  target.matchMedia = function matchMedia(media) {
    const mql = Object.setPrototypeOf(new EventTarget2(), MediaQueryList2.prototype);
    INTERNALS4.set(mql, {
      matches: false,
      media
    });
    return mql;
  };
};
var IntersectionObserver = class {
  disconnect() {
  }
  observe() {
  }
  takeRecords() {
    return [];
  }
  unobserve() {
  }
};
var MutationObserver = class {
  disconnect() {
  }
  observe() {
  }
  takeRecords() {
    return [];
  }
  unobserve() {
  }
};
var ResizeObserver = class {
  disconnect() {
  }
  observe() {
  }
  takeRecords() {
    return [];
  }
  unobserve() {
  }
};
allowStringTag(MutationObserver);
allowStringTag(IntersectionObserver);
allowStringTag(ResizeObserver);
var OffscreenCanvas = class extends EventTarget {
  constructor(width, height) {
    super();
    if (arguments.length < 2)
      throw new TypeError(`Failed to construct 'OffscreenCanvas': 2 arguments required.`);
    width = Number(width) || 0;
    height = Number(height) || 0;
    INTERNALS4.set(this, { width, height });
  }
  get height() {
    return internalsOf(this, "OffscreenCanvas", "height").height;
  }
  set height(value) {
    internalsOf(this, "OffscreenCanvas", "height").height = Number(value) || 0;
  }
  get width() {
    return internalsOf(this, "OffscreenCanvas", "width").width;
  }
  set width(value) {
    internalsOf(this, "OffscreenCanvas", "width").width = Number(value) || 0;
  }
  getContext(contextType) {
    const internals = internalsOf(this, "HTMLCanvasElement", "getContext");
    switch (contextType) {
      case "2d":
        if (internals.renderingContext2D)
          return internals.renderingContext2D;
        internals.renderingContext2D = __createCanvasRenderingContext2D(this);
        return internals.renderingContext2D;
      default:
        return null;
    }
  }
  convertToBlob(options) {
    options = Object(options);
    Number(options.quality) || 0;
    const type = getImageType(String(options.type).trim().toLowerCase());
    return Promise.resolve(new Blob4([], { type }));
  }
};
allowStringTag(OffscreenCanvas);
var getImageType = (type) => type === "image/avif" || type === "image/jpeg" || type === "image/png" || type === "image/webp" ? type : "image/png";
var Storage = class {
  clear() {
    internalsOf(this, "Storage", "clear").storage.clear();
  }
  getItem(key) {
    return getStringOrNull(internalsOf(this, "Storage", "getItem").storage.get(String(key)));
  }
  key(index) {
    return getStringOrNull([
      ...internalsOf(this, "Storage", "key").storage.keys()
    ][Number(index) || 0]);
  }
  removeItem(key) {
    internalsOf(this, "Storage", "getItem").storage.delete(String(key));
  }
  setItem(key, value) {
    internalsOf(this, "Storage", "getItem").storage.set(String(key), String(value));
  }
  get length() {
    return internalsOf(this, "Storage", "size").storage.size;
  }
};
var getStringOrNull = (value) => typeof value === "string" ? value : null;
var initStorage = (target, exclude) => {
  if (exclude.has("Storage") || exclude.has("localStorage"))
    return;
  target.localStorage = Object.create(Storage.prototype);
  const storageInternals = /* @__PURE__ */ new Map();
  INTERNALS4.set(target.localStorage, {
    storage: storageInternals
  });
};
var StyleSheet = class {
};
var CSSStyleSheet = class extends StyleSheet {
  async replace(text) {
    return new CSSStyleSheet();
  }
  replaceSync(text) {
    return new CSSStyleSheet();
  }
  get cssRules() {
    return [];
  }
};
allowStringTag(StyleSheet);
allowStringTag(CSSStyleSheet);
var Window = class extends EventTarget {
  get self() {
    return this;
  }
  get top() {
    return this;
  }
  get window() {
    return this;
  }
  get innerHeight() {
    return 0;
  }
  get innerWidth() {
    return 0;
  }
  get scrollX() {
    return 0;
  }
  get scrollY() {
    return 0;
  }
};
allowStringTag(Window);
var initWindow = (target, exclude) => {
  if (exclude.has("Window") || exclude.has("window"))
    return;
  target.window = target;
};
function alert(...messages) {
  console.log(...messages);
}
var hasOwn = {
  hasOwn(instance, property) {
    return __object_hasOwnProperty(instance, property);
  }
}.hasOwn;
var initObject = (target, exclude) => {
  if (exclude.has("Object") || exclude.has("object") || exclude.has("hasOwn"))
    return;
  const Class = target.Object || globalThis.Object;
  Object.defineProperty(Class, "hasOwn", {
    value: hasOwn,
    writable: true,
    enumerable: false,
    configurable: true
  });
};
var any = {
  async any(iterable) {
    return Promise.all([...iterable].map((promise) => {
      return new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
    })).then((errors) => Promise.reject(errors), (value) => Promise.resolve(value));
  }
}.any;
var initPromise = (target, exclude) => {
  if (exclude.has("Promise") || exclude.has("any"))
    return;
  const Class = target.Promise || globalThis.Promise;
  if (!Class.any)
    Object.defineProperty(Class, "any", {
      value: any,
      writable: true,
      enumerable: false,
      configurable: true
    });
};
var at = {
  at(index) {
    index = Math.trunc(index) || 0;
    if (index < 0)
      index += this.length;
    if (index < 0 || index >= this.length)
      return void 0;
    return this[index];
  }
}.at;
var initRelativeIndexingMethod = (target, exclude) => {
  if (exclude.has("at"))
    return;
  const Classes = [];
  if (!exclude.has("TypedArray"))
    Classes.push(Object.getPrototypeOf(target.Int8Array || globalThis.Int8Array));
  if (!exclude.has("Array"))
    Classes.push(target.Array || globalThis.Array);
  if (!exclude.has("String"))
    Classes.push(target.String || globalThis.String);
  for (const Class of Classes) {
    if (!Class.prototype.at)
      Object.defineProperty(Class.prototype, "at", {
        value: at,
        writable: true,
        enumerable: false,
        configurable: true
      });
  }
};
var replaceAll = {
  replaceAll(searchValue, replaceValue) {
    return __object_isPrototypeOf(RegExp.prototype, searchValue) ? this.replace(searchValue, replaceValue) : this.replace(new RegExp(__string_escapeRegExp(searchValue), "g"), replaceValue);
  }
}.replaceAll;
var initString = (target, exclude) => {
  if (exclude.has("String") || exclude.has("replaceAll"))
    return;
  const Class = target.String || globalThis.String;
  if (!Class.prototype.replaceAll)
    Object.defineProperty(Class.prototype, "replaceAll", {
      value: replaceAll,
      writable: true,
      enumerable: false,
      configurable: true
    });
};
var exclusionsForHTMLElement = [
  "CustomElementsRegistry",
  "HTMLElement",
  "HTMLBodyElement",
  "HTMLCanvasElement",
  "HTMLDivElement",
  "HTMLHeadElement",
  "HTMLHtmlElement",
  "HTMLImageElement",
  "HTMLStyleElement",
  "HTMLTemplateElement",
  "HTMLUnknownElement",
  "Image"
];
var exclusionsForElement = ["Element", ...exclusionsForHTMLElement];
var exclusionsForDocument = [
  "CustomElementsRegistry",
  "Document",
  "HTMLDocument",
  "document",
  "customElements"
];
var exclusionsForNode = [
  "Node",
  "DocumentFragment",
  "ShadowRoot",
  ...exclusionsForDocument,
  ...exclusionsForElement
];
var exclusionsForEventTarget = [
  "AbortSignal",
  "Event",
  "CustomEvent",
  "EventTarget",
  "OffscreenCanvas",
  "MediaQueryList",
  "Window",
  ...exclusionsForNode
];
var exclusionsForEvent = [
  "AbortSignal",
  "Event",
  "CustomEvent",
  "EventTarget",
  "MediaQueryList",
  "OffscreenCanvas",
  "Window",
  ...exclusionsForNode
];
var exclusions = {
  "Blob+": ["Blob", "File"],
  "Document+": exclusionsForDocument,
  "Element+": exclusionsForElement,
  "Event+": exclusionsForEvent,
  "EventTarget+": exclusionsForEventTarget,
  "HTMLElement+": exclusionsForHTMLElement,
  "Node+": exclusionsForNode,
  "StyleSheet+": ["StyleSheet", "CSSStyleSheet"]
};
var inheritence = {
  CSSStyleSheet: "StyleSheet",
  CustomEvent: "Event",
  DOMException: "Error",
  Document: "Node",
  DocumentFragment: "Node",
  Element: "Node",
  File: "Blob",
  HTMLDocument: "Document",
  HTMLElement: "Element",
  HTMLBodyElement: "HTMLElement",
  HTMLCanvasElement: "HTMLElement",
  HTMLDivElement: "HTMLElement",
  HTMLHeadElement: "HTMLElement",
  HTMLHtmlElement: "HTMLElement",
  HTMLImageElement: "HTMLElement",
  HTMLSpanElement: "HTMLElement",
  HTMLStyleElement: "HTMLElement",
  HTMLTemplateElement: "HTMLElement",
  HTMLUnknownElement: "HTMLElement",
  Image: "HTMLElement",
  MediaQueryList: "EventTarget",
  Node: "EventTarget",
  OffscreenCanvas: "EventTarget",
  ShadowRoot: "DocumentFragment",
  Window: "EventTarget"
};
var polyfill = (target, options) => {
  const webAPIs = {
    AbortController: AbortController2,
    AbortSignal,
    Blob: Blob4,
    ByteLengthQueuingStrategy,
    CanvasRenderingContext2D,
    CharacterData,
    Comment,
    CountQueuingStrategy,
    CSSStyleSheet,
    CustomElementRegistry,
    CustomEvent,
    Document,
    DocumentFragment,
    DOMException: DOMException3,
    Element,
    Event,
    EventTarget,
    File: File4,
    FormData: FormData3,
    HTMLDocument,
    HTMLElement: HTMLElement2,
    HTMLBodyElement,
    HTMLCanvasElement,
    HTMLDivElement,
    HTMLHeadElement,
    HTMLHtmlElement,
    HTMLImageElement,
    HTMLSpanElement,
    HTMLStyleElement,
    HTMLTemplateElement,
    HTMLUnknownElement,
    Headers: Headers2,
    IntersectionObserver,
    Image,
    ImageData,
    MediaQueryList,
    MutationObserver,
    Node,
    NodeFilter: NodeFilter$1,
    NodeIterator: NodeIterator$1,
    OffscreenCanvas,
    ReadableByteStreamController,
    ReadableStream: ReadableStream2,
    ReadableStreamBYOBReader,
    ReadableStreamBYOBRequest,
    ReadableStreamDefaultController,
    ReadableStreamDefaultReader,
    Request: Request2,
    ResizeObserver,
    Response: Response2,
    ShadowRoot,
    Storage,
    StyleSheet,
    Text,
    TransformStream,
    TreeWalker,
    URLPattern: U,
    WritableStream,
    WritableStreamDefaultController,
    WritableStreamDefaultWriter,
    Window,
    alert,
    atob,
    btoa,
    cancelAnimationFrame,
    cancelIdleCallback,
    clearTimeout,
    fetch: fetch2,
    requestAnimationFrame,
    requestIdleCallback,
    setTimeout,
    structuredClone
  };
  const excludeOptions = new Set(typeof Object(options).exclude === "string" ? String(Object(options).exclude).trim().split(/\s+/) : Array.isArray(Object(options).exclude) ? Object(options).exclude.reduce((array, entry) => array.splice(array.length, 0, ...typeof entry === "string" ? entry.trim().split(/\s+/) : []) && array, []) : []);
  for (const excludeOption of excludeOptions) {
    if (excludeOption in exclusions) {
      for (const exclusion of exclusions[excludeOption]) {
        excludeOptions.add(exclusion);
      }
    }
  }
  for (const name of Object.keys(webAPIs)) {
    if (excludeOptions.has(name))
      continue;
    if (Object.hasOwnProperty.call(target, name))
      continue;
    Object.defineProperty(target, name, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: webAPIs[name]
    });
  }
  for (const name of Object.keys(webAPIs)) {
    if (excludeOptions.has(name))
      continue;
    if (!Object.hasOwnProperty.call(inheritence, name))
      continue;
    const Class = target[name];
    const Super = target[inheritence[name]];
    if (!Class || !Super)
      continue;
    if (Object.getPrototypeOf(Class.prototype) === Super.prototype)
      continue;
    Object.setPrototypeOf(Class.prototype, Super.prototype);
  }
  if (!excludeOptions.has("HTMLDocument") && !excludeOptions.has("HTMLElement")) {
    initDocument(target, excludeOptions);
    if (!excludeOptions.has("CustomElementRegistry")) {
      initCustomElementRegistry(target, excludeOptions);
    }
  }
  initObject(target, excludeOptions);
  initMediaQueryList(target, excludeOptions);
  initPromise(target, excludeOptions);
  initRelativeIndexingMethod(target, excludeOptions);
  initStorage(target, excludeOptions);
  initString(target, excludeOptions);
  initWindow(target, excludeOptions);
  return target;
};
polyfill.internals = (target, name) => {
  const init2 = {
    CustomElementRegistry: initCustomElementRegistry,
    Document: initDocument,
    MediaQueryList: initMediaQueryList,
    Object: initObject,
    Promise: initPromise,
    RelativeIndexingMethod: initRelativeIndexingMethod,
    Storage: initStorage,
    String: initString,
    Window: initWindow
  };
  init2[name](target, /* @__PURE__ */ new Set());
  return target;
};

// node_modules/astro/dist/core/app/index.js
var import_mime = __toESM(require_mime(), 1);

// node_modules/astro/dist/runtime/server/endpoint.js
function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, request, params) {
  var _a2;
  const chosenMethod = (_a2 = request.method) == null ? void 0 : _a2.toLowerCase();
  const handler2 = getHandlerFromModule(mod, chosenMethod);
  if (!handler2 || typeof handler2 !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler2.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const context = {
    request,
    params
  };
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler2.call(mod, proxy, request);
}

// node_modules/html-escaper/esm/index.js
var { replace } = "";
var ca = /[&<>'"]/g;
var esca = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;"
};
var pe = (m3) => esca[m3];
var escape = (es) => replace.call(es, ca, pe);

// node_modules/astro/dist/runtime/server/escape.js
var escapeHTML = escape;
var HTMLString = class extends String {
};
var markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};

// node_modules/astro/dist/runtime/server/serialize.js
var PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v2) => {
    return convertToSerializedForm(v2, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(Object.entries(value).map(([k2, v2]) => {
    return [k2, convertToSerializedForm(v2, metadata, parents)];
  }));
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

// node_modules/astro/dist/runtime/server/util.js
function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}

// node_modules/astro/dist/runtime/server/hydration.js
var HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives = new Set(HydrationDirectivesRaw);
var HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n2) => `client:${n2}`));
function extractDirectives(inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(`Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(HydrationDirectiveProps).join(", ")}`);
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new Error('Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"');
          }
          break;
        }
      }
    } else if (key === "class:list") {
      extracted.props[key.slice(0, -5)] = serializeListValue(value);
    } else {
      extracted.props[key] = value;
    }
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(`Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`);
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = value;
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(JSON.stringify({
    name: metadata.displayName,
    value: metadata.hydrateArgs || ""
  }));
  return island;
}

// node_modules/astro/dist/runtime/client/idle.prebuilt.js
var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;

// node_modules/astro/dist/runtime/client/load.prebuilt.js
var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;

// node_modules/astro/dist/runtime/client/media.prebuilt.js
var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;

// node_modules/astro/dist/runtime/client/only.prebuilt.js
var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;

// node_modules/astro/dist/runtime/client/visible.prebuilt.js
var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;

// node_modules/astro/dist/runtime/server/astro-island.prebuilt.js
var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t)},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;

// node_modules/astro/dist/runtime/server/scripts.js
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}

// node_modules/astro/dist/runtime/server/render/common.js
var Fragment = Symbol.for("astro:fragment");
var Renderer = Symbol.for("astro:renderer");
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      return chunk.toString();
    }
  }
}

// node_modules/astro/dist/runtime/server/render/astro.js
var import_meta = {};
function validateComponentProps(props, displayName) {
  var _a2;
  if (((_a2 = import_meta.env) == null ? void 0 : _a2.DEV) && props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(`You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
      }
    }
  }
}
var AstroComponent = class {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.expressions = expressions;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i3 = 0; i3 < htmlParts.length; i3++) {
      const html2 = htmlParts[i3];
      const expression = expressions[i3];
      yield markHTMLString(html2);
      yield* renderChild(expression);
    }
  }
};
function isAstroComponent(obj) {
  return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
}
function isAstroComponentFactory(obj) {
  return obj == null ? false : !!obj.isAstroComponentFactory;
}
async function* renderAstroComponent(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
async function renderToIterable(result, componentFactory, displayName, props, children) {
  validateComponentProps(props, displayName);
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent(Component)) {
    console.warn(`Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.`);
    const response = Component;
    throw response;
  }
  return renderAstroComponent(Component);
}
async function renderTemplate(htmlParts, ...expressions) {
  return new AstroComponent(htmlParts, expressions);
}

// node_modules/astro/dist/runtime/server/render/any.js
async function* renderChild(child) {
  child = await child;
  if (child instanceof HTMLString) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) {
  } else if (child instanceof AstroComponent || Object.prototype.toString.call(child) === "[object AstroComponent]") {
    yield* renderAstroComponent(child);
  } else if (typeof child === "object" && Symbol.asyncIterator in child) {
    yield* child;
  } else {
    yield child;
  }
}
async function renderSlot(result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        content += stringifyChunk(result, chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(content);
  }
  return fallback;
}

// node_modules/astro/dist/runtime/server/shorthash.js
var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i3 = 0; i3 < str.length; i3++) {
    const ch = str.charCodeAt(i3);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

// node_modules/astro/dist/runtime/server/render/util.js
var voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent = (k2) => k2.trim().replace(/(?:(?<!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab = (k2) => k2.toLowerCase() === k2 ? k2 : k2.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString = (obj) => Object.entries(obj).map(([k2, v2]) => `${kebab(k2)}:${v2}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `let ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value));
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toStyleString(value)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const _a2 = _props, { lang: _, "data-astro-id": astroId, "define:vars": defineVars } = _a2, props = __objRest(_a2, ["lang", "data-astro-id", "define:vars"]);
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

// node_modules/astro/dist/runtime/server/render/dom.js
function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(`<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`);
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

// node_modules/astro/dist/runtime/server/render/component.js
var rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function getComponentType(Component) {
  if (Component === Fragment) {
    return "fragment";
  }
  if (Component && typeof Component === "object" && Component["astro:html"]) {
    return "html";
  }
  if (isAstroComponentFactory(Component)) {
    return "astro-factory";
  }
  return "unknown";
}
async function renderComponent(result, displayName, Component, _props, slots = {}) {
  var _a2;
  Component = await Component;
  switch (getComponentType(Component)) {
    case "fragment": {
      const children2 = await renderSlot(result, slots == null ? void 0 : slots.default);
      if (children2 == null) {
        return children2;
      }
      return markHTMLString(children2);
    }
    case "html": {
      const children2 = {};
      if (slots) {
        await Promise.all(Object.entries(slots).map(([key, value]) => renderSlot(result, value).then((output) => {
          children2[key] = output;
        })));
      }
      const html22 = Component.render({ slots: children2 });
      return markHTMLString(html22);
    }
    case "astro-factory": {
      async function* renderAstroComponentInline() {
        let iterable = await renderToIterable(result, Component, displayName, _props, slots);
        yield* iterable;
      }
      return renderAstroComponentInline();
    }
  }
  if (!Component && !_props["client:only"]) {
    throw new Error(`Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`);
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(_props);
  let html2 = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  if (Array.isArray(renderers2) && renderers2.length === 0 && typeof Component !== "string" && !componentIsHTMLElement(Component)) {
    const message = `Unable to render ${metadata.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${formatList(probableRendererNames.map((r3) => "`" + r3 + "`"))}?`;
    throw new Error(message);
  }
  const children = {};
  if (slots) {
    await Promise.all(Object.entries(slots).map(([key, value]) => renderSlot(result, value).then((output) => {
      children[key] = output;
    })));
  }
  let renderer;
  if (metadata.hydrate !== "only") {
    if (Component && Component[Renderer]) {
      const rendererName = Component[Renderer];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r3 of renderers2) {
        try {
          if (await r3.ssr.check.call({ result }, Component, props, children)) {
            renderer = r3;
            break;
          }
        } catch (e3) {
          error2 ?? (error2 = e3);
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers2.find(({ name }) => name === `@astrojs/${rendererName}` || name === rendererName);
    }
    if (!renderer && renderers2.length === 1) {
      renderer = renderers2[0];
    }
    if (!renderer) {
      const extname = (_a2 = metadata.componentUrl) == null ? void 0 : _a2.split(".").pop();
      renderer = renderers2.filter(({ name }) => name === `@astrojs/${extname}` || name === extname)[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new Error(`Unable to render ${metadata.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${metadata.displayName} client:only="${probableRendererNames.map((r3) => r3.replace("@astrojs/", "")).join("|")}" />
`);
    } else if (typeof Component !== "string") {
      const matchingRenderers = renderers2.filter((r3) => probableRendererNames.includes(r3.name));
      const plural = renderers2.length > 1;
      if (matchingRenderers.length === 0) {
        throw new Error(`Unable to render ${metadata.displayName}!

There ${plural ? "are" : "is"} ${renderers2.length} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render ${metadata.displayName}.

Did you mean to enable ${formatList(probableRendererNames.map((r3) => "`" + r3 + "`"))}?`);
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html: html2, attrs } = await renderer.ssr.renderToStaticMarkup.call({ result }, Component, props, children, metadata));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html2 = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html: html2, attrs } = await renderer.ssr.renderToStaticMarkup.call({ result }, Component, props, children, metadata));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new Error(`${metadata.displayName} component has a \`client:${metadata.hydrate}\` directive, but no client entrypoint was provided by ${renderer.name}!`);
  }
  if (!html2 && typeof Component === "string") {
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroComponent(await renderTemplate`<${Component}${internalSpreadAttributes(props)}${markHTMLString(childSlots === "" && voidElementNames.test(Component) ? `/>` : `>${childSlots}</${Component}>`)}`);
    html2 = "";
    for await (const chunk of iterable) {
      html2 += chunk;
    }
  }
  if (!hydration) {
    if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
      return html2;
    }
    return markHTMLString(html2.replace(/\<\/?astro-slot\>/g, ""));
  }
  const astroId = shorthash(`<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html2}
${serializeProps(props, metadata)}`);
  const island = await generateHydrateScript({ renderer, result, astroId, props, attrs }, metadata);
  let unrenderedSlots = [];
  if (html2) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html2.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map((key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`).join("") : "";
  island.children = `${html2 ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}

// node_modules/astro/dist/runtime/server/render/head.js
var uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i3) => JSON.stringify(i3.props) === props && i3.children == children);
};
var alreadyHeadRenderedResults = /* @__PURE__ */ new WeakSet();
function renderHead(result) {
  alreadyHeadRenderedResults.add(result);
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i3) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  return markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
}
async function* maybeRenderHead(result) {
  if (alreadyHeadRenderedResults.has(result)) {
    return;
  }
  yield renderHead(result);
}

// node_modules/astro/dist/runtime/server/response.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
var StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a2;
  StreamingCompatibleResponse = (_a2 = class extends Response {
    constructor(body, init2) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init2);
      __privateAdd(this, _isStream, void 0);
      __privateAdd(this, _body, void 0);
      __privateSet(this, _isStream, isStream);
      __privateSet(this, _body, body);
    }
    get body() {
      return __privateGet(this, _body);
    }
    async text() {
      if (__privateGet(this, _isStream) && isNodeJS) {
        let decoder = new TextDecoder();
        let body = __privateGet(this, _body);
        let out = "";
        for await (let chunk of body) {
          out += decoder.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet(this, _isStream) && isNodeJS) {
        let body = __privateGet(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of body) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = /* @__PURE__ */ new WeakMap(), _body = /* @__PURE__ */ new WeakMap(), _a2);
  return StreamingCompatibleResponse;
}
var createResponse = isNodeJS ? (body, init2) => {
  if (typeof body === "string") {
    return new Response(body, init2);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init2);
  }
  return new StreamingCompatibleResponse(body, init2);
} : (body, init2) => new Response(body, init2);

// node_modules/astro/dist/runtime/server/render/page.js
var encoder = new TextEncoder();
var needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function renderPage(result, componentFactory, props, children, streaming) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = __spreadProps(__spreadValues({}, props ?? {}), { "server:root": true });
    const output = await renderComponent(result, componentFactory.name, componentFactory, pageProps, null);
    let html2 = output.toString();
    if (!/<!doctype html/i.test(html2)) {
      let rest = html2;
      html2 = `<!DOCTYPE html>`;
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          html2 += chunk;
        }
      }
      html2 += rest;
    }
    const bytes = encoder.encode(html2);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  if (isAstroComponent(factoryReturnValue)) {
    let iterable = renderAstroComponent(factoryReturnValue);
    let init2 = result.response;
    let headers = new Headers(init2.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i3 = 0;
            try {
              for await (const chunk of iterable) {
                let html2 = stringifyChunk(result, chunk);
                if (i3 === 0) {
                  if (!/<!doctype html/i.test(html2)) {
                    controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                  }
                }
                controller.enqueue(encoder.encode(String(html2)));
                i3++;
              }
              controller.close();
            } catch (e3) {
              controller.error(e3);
            }
          }
          read();
        }
      });
    } else {
      body = "";
      let i3 = 0;
      for await (const chunk of iterable) {
        let html2 = stringifyChunk(result, chunk);
        if (i3 === 0) {
          if (!/<!doctype html/i.test(html2)) {
            body += "<!DOCTYPE html>\n";
          }
        }
        body += html2;
        i3++;
      }
      const bytes = encoder.encode(body);
      headers.set("Content-Length", bytes.byteLength.toString());
    }
    let response = createResponse(body, __spreadProps(__spreadValues({}, init2), { headers }));
    return response;
  } else {
    return factoryReturnValue;
  }
}

// node_modules/kleur/colors.mjs
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $2 = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x3, y2) {
  let rgx = new RegExp(`\\x1b\\[${y2}m`, "g");
  let open = `\x1B[${x3}m`, close = `\x1B[${y2}m`;
  return function(txt) {
    if (!$2.enabled || txt == null)
      return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);

// node_modules/string-width/index.js
var import_eastasianwidth = __toESM(require_eastasianwidth(), 1);
var import_emoji_regex = __toESM(require_emoji_regex(), 1);

// node_modules/astro/dist/core/logger/core.js
var dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
var levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
var defaultLogLevel;
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose")) {
    defaultLogLevel = "debug";
  } else if (process.argv.includes("--silent")) {
    defaultLogLevel = "silent";
  } else {
    defaultLogLevel = "info";
  }
} else {
  defaultLogLevel = "info";
}

// node_modules/astro/dist/core/routing/validation.js
var VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value]) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new Error(`[getStaticPaths] invalid route parameter for "${key}". Expected a string or number, received \`${value}\` ("${typeof value}")`);
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging
}) {
  if (mod.createCollection) {
    throw new Error(`[createCollection] deprecated. Please use getStaticPaths() instead.`);
  }
  if (ssr && mod.getStaticPaths) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if (!ssr && !mod.getStaticPaths) {
    throw new Error(`[getStaticPaths] getStaticPaths() function is required.
Make sure that you \`export\` a \`getStaticPaths\` function from your dynamic route.
Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. `);
  }
}
function validateGetStaticPathsResult(result, logging) {
  if (!Array.isArray(result)) {
    throw new Error(`[getStaticPaths] invalid return value. Expected an array of path objects, but got \`${JSON.stringify(result)}\`.`);
  }
  result.forEach((pathObject) => {
    if (!pathObject.params) {
      warn(logging, "getStaticPaths", `invalid path object. Expected an object with key \`params\`, but got \`${JSON.stringify(pathObject)}\`. Skipped.`);
      return;
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string")) {
        warn(logging, "getStaticPaths", `invalid path param: ${key}. A string value was expected, but got \`${JSON.stringify(val)}\`.`);
      }
      if (val === "") {
        warn(logging, "getStaticPaths", `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`);
      }
    }
  });
}

// node_modules/astro/dist/core/routing/params.js
function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i3) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i3 + 1] ? decodeURIComponent(match[i3 + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i3 + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next);
    const [key, value] = next;
    acc[key] = `${value}`;
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}

// node_modules/astro/dist/core/render/script.js
var SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
var scriptRe = new RegExp(`\\.(${Array.from(SCRIPT_EXTENSIONS).map((s3) => s3.slice(1)).join("|")})($|\\?)`);
var isScriptRequest = (request) => scriptRe.test(request);

// node_modules/astro/dist/core/render/util.js
var STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
var cssRe = new RegExp(`\\.(${Array.from(STYLE_EXTENSIONS).map((s3) => s3.slice(1)).join("|")})($|\\?)`);
var isCSSRequest = (request) => cssRe.test(request);

// node_modules/astro/dist/core/render/result.js
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _cache;
var _result;
var _slots;
var _loggingOpts;
var clientAddressSymbol = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    throw new Error(`Oops, you are trying to use ${name}, which is only available with SSR.`);
  };
}
function getFunctionExpression(slot) {
  var _a2;
  if (!slot)
    return;
  if (((_a2 = slot.expressions) == null ? void 0 : _a2.length) !== 1)
    return;
  return slot.expressions[0];
}
var Slots = class {
  constructor(result, slots, logging) {
    __privateAdd2(this, _cache, /* @__PURE__ */ new Map());
    __privateAdd2(this, _result, void 0);
    __privateAdd2(this, _slots, void 0);
    __privateAdd2(this, _loggingOpts, void 0);
    __privateSet2(this, _result, result);
    __privateSet2(this, _slots, slots);
    __privateSet2(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new Error(`Unable to create a slot named "${key}". "${key}" is a reserved slot name!
Please update the name of this slot.`);
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet2(this, _slots))
      return false;
    return Boolean(__privateGet2(this, _slots)[name]);
  }
  async render(name, args = []) {
    const cacheable = args.length === 0;
    if (!__privateGet2(this, _slots))
      return void 0;
    if (cacheable && __privateGet2(this, _cache).has(name)) {
      const result = __privateGet2(this, _cache).get(name);
      return result;
    }
    if (!this.has(name))
      return void 0;
    if (!cacheable) {
      const component = await __privateGet2(this, _slots)[name]();
      const expression = getFunctionExpression(component);
      if (!Array.isArray(args)) {
        warn(__privateGet2(this, _loggingOpts), "Astro.slots.render", `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`);
      } else {
        if (expression) {
          const slot = expression(...args);
          return await renderSlot(__privateGet2(this, _result), slot).then((res) => res != null ? String(res) : res);
        }
      }
    }
    const content = await renderSlot(__privateGet2(this, _result), __privateGet2(this, _slots)[name]).then((res) => res != null ? String(res) : res);
    if (cacheable)
      __privateGet2(this, _cache).set(name, content);
    return content;
  }
};
_cache = /* @__PURE__ */ new WeakMap();
_result = /* @__PURE__ */ new WeakMap();
_slots = /* @__PURE__ */ new WeakMap();
_loggingOpts = /* @__PURE__ */ new WeakMap();
var renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, props: pageProps, renderers: renderers2, request, resolve } = args;
  const url2 = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol in request)) {
            if (args.adapterName) {
              throw new Error(`Astro.clientAddress is not available in the ${args.adapterName} adapter. File an issue with the adapter to add support.`);
            } else {
              throw new Error(`Astro.clientAddress is not available in your environment. Ensure that you are using an SSR adapter that supports this feature.`);
            }
          }
          return Reflect.get(request, clientAddressSymbol);
        },
        params,
        props,
        request,
        url: url2,
        redirect: args.ssr ? (path) => {
          return new Response(null, {
            status: 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        resolve(path) {
          let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
          if (isCSSRequest(path)) {
            extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
          } else if (isScriptRequest(path)) {
            extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
          }
          warn(args.logging, `deprecation`, `${bold("Astro.resolve()")} is deprecated. We see that you are trying to resolve ${path}.
${extra}`);
          return "";
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "canonicalURL", {
        get: function() {
          warn(args.logging, "deprecation", `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`);
          return new URL(this.request.url.pathname, this.site);
        }
      });
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, __spreadValues(__spreadValues({}, markdown), opts ?? {}));
          return code;
        }
      });
      return Astro;
    },
    resolve,
    _metadata: {
      renderers: renderers2,
      pathname,
      hasHydrationScript: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}

// node_modules/astro/dist/core/render/paginate.js
function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(`[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`);
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = __spreadProps(__spreadValues({}, additionalParams), {
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      });
      return {
        params,
        props: __spreadProps(__spreadValues({}, additionalProps), {
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate(__spreadValues({}, params)),
              next: pageNum === lastPage ? void 0 : routeMatch.generate(__spreadProps(__spreadValues({}, params), { page: String(pageNum + 1) })),
              prev: pageNum === 1 ? void 0 : routeMatch.generate(__spreadProps(__spreadValues({}, params), {
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              }))
            }
          }
        })
      };
    });
    return result;
  };
}

// node_modules/astro/dist/core/render/route-cache.js
async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging });
  if (ssr) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = (await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new Error("The RSS helper has been removed from getStaticPaths! Try the new @astrojs/rss package instead. See https://docs.astro.build/en/guides/rss/");
    }
  })).flat();
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  if (isValidate) {
    validateGetStaticPathsResult(keyedStaticPaths, logging);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
var RouteCache = class {
  constructor(logging) {
    this.cache = {};
    this.logging = logging;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.cache[route.component]) {
      warn(this.logging, "routeCache", `Internal Warning: route cache overwritten. (${route.component})`);
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
};
function findPathItemByKey(staticPaths, params) {
  const paramsKey = stringifyParams(params);
  let matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
  matchedStaticPath = staticPaths.find(({ params: _params }) => JSON.stringify(_params) === paramsKey);
}

// node_modules/astro/dist/core/render/core.js
var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params);
    if (!matchedStaticPath && !ssr) {
      return 0;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? __spreadValues({}, matchedStaticPath.props) : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function render(opts) {
  const {
    adapterName,
    links,
    styles,
    logging,
    origin,
    markdown,
    mod,
    mode,
    pathname,
    scripts,
    renderers: renderers2,
    request,
    resolve,
    route,
    routeCache,
    site,
    ssr,
    streaming,
    status = 200
  } = opts;
  const paramsAndPropsRes = await getParamsAndProps({
    logging,
    mod,
    route,
    routeCache,
    pathname,
    ssr
  });
  if (paramsAndPropsRes === 0) {
    throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${pathname})`);
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = await mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName,
    links,
    styles,
    logging,
    markdown,
    mode,
    origin,
    params,
    props: pageProps,
    pathname,
    resolve,
    renderers: renderers2,
    request,
    site,
    scripts,
    ssr,
    status
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  if (typeof mod.default === "function" && mod.default.name.startsWith("MDX")) {
    Object.assign(pageProps, {
      components: Object.assign((pageProps == null ? void 0 : pageProps.components) ?? {}, { Fragment })
    });
  }
  return await renderPage(result, Component, pageProps, null, streaming);
}

// node_modules/astro/dist/core/endpoint/index.js
async function call(mod, opts) {
  const paramsAndPropsResp = await getParamsAndProps(__spreadProps(__spreadValues({}, opts), { mod }));
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${opts.pathname})`);
  }
  const [params] = paramsAndPropsResp;
  const response = await renderEndpoint(mod, opts.request, params);
  if (response instanceof Response) {
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding
  };
}

// node_modules/astro/dist/core/logger/console.js
var lastMessage;
var lastMessageCount = 1;
var consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};

// node_modules/astro/dist/core/path.js
function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}

// node_modules/astro/dist/core/render/ssr-element.js
var import_path_browserify = __toESM(require_path_browserify(), 1);
function getRootPath(site) {
  return appendForwardSlash(new URL(site || "http://localhost/").pathname);
}
function joinToRoot(href, site) {
  return import_path_browserify.default.posix.join(getRootPath(site), href);
}
function createLinkStylesheetElement(href, site) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, site)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, site) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, site)));
}
function createModuleScriptElement(script, site) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, site);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}

// node_modules/astro/dist/core/routing/match.js
function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(pathname));
}

// node_modules/astro/dist/core/app/index.js
var __accessCheck3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet3 = (obj, member, getter) => {
  __accessCheck3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet3 = (obj, member, value, setter) => {
  __accessCheck3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck3(obj, member, "access private method");
  return method;
};
var _manifest;
var _manifestData;
var _routeDataToRouteInfo;
var _routeCache;
var _encoder;
var _logging;
var _streaming;
var _renderPage;
var renderPage_fn;
var _callEndpoint;
var callEndpoint_fn;
var pagesVirtualModuleId = "@astrojs-pages-virtual-entry";
var resolvedPagesVirtualModuleId = "\0" + pagesVirtualModuleId;
var App = class {
  constructor(manifest, streaming = true) {
    __privateAdd3(this, _renderPage);
    __privateAdd3(this, _callEndpoint);
    __privateAdd3(this, _manifest, void 0);
    __privateAdd3(this, _manifestData, void 0);
    __privateAdd3(this, _routeDataToRouteInfo, void 0);
    __privateAdd3(this, _routeCache, void 0);
    __privateAdd3(this, _encoder, new TextEncoder());
    __privateAdd3(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd3(this, _streaming, void 0);
    __privateSet3(this, _manifest, manifest);
    __privateSet3(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet3(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet3(this, _routeCache, new RouteCache(__privateGet3(this, _logging)));
    __privateSet3(this, _streaming, streaming);
  }
  match(request, { matchNotFound = false } = {}) {
    const url2 = new URL(request.url);
    if (__privateGet3(this, _manifest).assets.has(url2.pathname)) {
      return void 0;
    }
    let routeData = matchRoute(url2.pathname, __privateGet3(this, _manifestData));
    if (routeData) {
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet3(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet3(this, _manifest).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet3(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet3(this, _manifest).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
};
_manifest = /* @__PURE__ */ new WeakMap();
_manifestData = /* @__PURE__ */ new WeakMap();
_routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
_routeCache = /* @__PURE__ */ new WeakMap();
_encoder = /* @__PURE__ */ new WeakMap();
_logging = /* @__PURE__ */ new WeakMap();
_streaming = /* @__PURE__ */ new WeakMap();
_renderPage = /* @__PURE__ */ new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url2 = new URL(request.url);
  const manifest = __privateGet3(this, _manifest);
  const renderers2 = manifest.renderers;
  const info = __privateGet3(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links, manifest.site);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script, manifest.site));
    }
  }
  try {
    const response = await render({
      adapterName: manifest.adapterName,
      links,
      logging: __privateGet3(this, _logging),
      markdown: manifest.markdown,
      mod,
      mode: "production",
      origin: url2.origin,
      pathname: url2.pathname,
      scripts,
      renderers: renderers2,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      route: routeData,
      routeCache: __privateGet3(this, _routeCache),
      site: __privateGet3(this, _manifest).site,
      ssr: true,
      request,
      streaming: __privateGet3(this, _streaming),
      status
    });
    return response;
  } catch (err) {
    error(__privateGet3(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = /* @__PURE__ */ new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url2 = new URL(request.url);
  const handler2 = mod;
  const result = await call(handler2, {
    logging: __privateGet3(this, _logging),
    origin: url2.origin,
    pathname: url2.pathname,
    request,
    route: routeData,
    routeCache: __privateGet3(this, _routeCache),
    ssr: true,
    status
  });
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = import_mime.default.getType(url2.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet3(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    return new Response(bytes, {
      status: 200,
      headers
    });
  }
};

// node_modules/@astrojs/netlify/dist/netlify-functions.js
polyfill(globalThis, {
  exclude: "window document"
});
function parseContentType(header) {
  return (header == null ? void 0 : header.split(";")[0]) ?? "";
}
var clientAddressSymbol2 = Symbol.for("astro.clientAddress");
var createExports = (manifest, args) => {
  const app = new App(manifest);
  const binaryMediaTypes = args.binaryMediaTypes ?? [];
  const knownBinaryMediaTypes = /* @__PURE__ */ new Set([
    "audio/3gpp",
    "audio/3gpp2",
    "audio/aac",
    "audio/midi",
    "audio/mpeg",
    "audio/ogg",
    "audio/opus",
    "audio/wav",
    "audio/webm",
    "audio/x-midi",
    "image/avif",
    "image/bmp",
    "image/gif",
    "image/vnd.microsoft.icon",
    "image/heif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "video/3gpp",
    "video/3gpp2",
    "video/mp2t",
    "video/mp4",
    "video/mpeg",
    "video/ogg",
    "video/x-msvideo",
    "video/webm",
    ...binaryMediaTypes
  ]);
  const handler2 = async (event) => {
    const { httpMethod, headers, rawUrl, body: requestBody, isBase64Encoded } = event;
    const init2 = {
      method: httpMethod,
      headers: new Headers(headers)
    };
    if (httpMethod !== "GET" && httpMethod !== "HEAD") {
      const encoding = isBase64Encoded ? "base64" : "utf-8";
      init2.body = typeof requestBody === "string" ? Buffer.from(requestBody, encoding) : requestBody;
    }
    const request = new Request(rawUrl, init2);
    let routeData = app.match(request, { matchNotFound: true });
    if (!routeData) {
      return {
        statusCode: 404,
        body: "Not found"
      };
    }
    const ip = headers["x-nf-client-connection-ip"];
    Reflect.set(request, clientAddressSymbol2, ip);
    const response = await app.render(request, routeData);
    const responseHeaders = Object.fromEntries(response.headers.entries());
    const responseContentType = parseContentType(responseHeaders["content-type"]);
    const responseIsBase64Encoded = knownBinaryMediaTypes.has(responseContentType);
    let responseBody;
    if (responseIsBase64Encoded) {
      const ab = await response.arrayBuffer();
      responseBody = Buffer.from(ab).toString("base64");
    } else {
      responseBody = await response.text();
    }
    const fnResponse = {
      statusCode: response.status,
      headers: responseHeaders,
      body: responseBody,
      isBase64Encoded: responseIsBase64Encoded
    };
    if (response.headers.has("set-cookie") && "raw" in response.headers) {
      const rawPacked = response.headers.raw();
      if ("set-cookie" in rawPacked) {
        fnResponse.multiValueHeaders = {
          "set-cookie": rawPacked["set-cookie"]
        };
      }
    }
    return fnResponse;
  };
  return { handler: handler2 };
};

// .netlify/functions-internal/entry.mjs
var import_mime2 = __toESM(require_mime(), 1);
var import_path_browserify2 = __toESM(require_path_browserify(), 1);
var import_path_to_regexp = __toESM(require_dist(), 1);
var ASTRO_VERSION = "1.2.8";
function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro2(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u2, segment) => new URL(segment, u2), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}
var escapeHTML2 = escape;
var HTMLString2 = class extends String {
};
var markHTMLString2 = (value) => {
  if (value instanceof HTMLString2) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString2(value);
  }
  return value;
};
function unescapeHTML2(str) {
  if (!!str && typeof str === "object" && typeof str.then === "function") {
    return Promise.resolve(str).then((value) => {
      return markHTMLString2(value);
    });
  }
  return markHTMLString2(str);
}
var Metadata = class {
  constructor(filePathname, opts) {
    this.modules = opts.modules;
    this.hoisted = opts.hoisted;
    this.hydratedComponents = opts.hydratedComponents;
    this.clientOnlyComponents = opts.clientOnlyComponents;
    this.hydrationDirectives = opts.hydrationDirectives;
    this.mockURL = new URL(filePathname, "http://example.com");
    this.metadataCache = /* @__PURE__ */ new Map();
  }
  resolvePath(specifier) {
    if (specifier.startsWith(".")) {
      const resolved = new URL(specifier, this.mockURL).pathname;
      if (resolved.startsWith("/@fs") && resolved.endsWith(".jsx")) {
        return resolved.slice(0, resolved.length - 4);
      }
      return resolved;
    }
    return specifier;
  }
  getPath(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentUrl) || null;
  }
  getExport(Component) {
    const metadata = this.getComponentMetadata(Component);
    return (metadata == null ? void 0 : metadata.componentExport) || null;
  }
  getComponentMetadata(Component) {
    if (this.metadataCache.has(Component)) {
      return this.metadataCache.get(Component);
    }
    const metadata = this.findComponentMetadata(Component);
    this.metadataCache.set(Component, metadata);
    return metadata;
  }
  findComponentMetadata(Component) {
    const isCustomElement = typeof Component === "string";
    for (const { module: module2, specifier } of this.modules) {
      const id = this.resolvePath(specifier);
      for (const [key, value] of Object.entries(module2)) {
        if (isCustomElement) {
          if (key === "tagName" && Component === value) {
            return {
              componentExport: key,
              componentUrl: id
            };
          }
        } else if (Component === value) {
          return {
            componentExport: key,
            componentUrl: id
          };
        }
      }
    }
    return null;
  }
};
function createMetadata2(filePathname, options) {
  return new Metadata(filePathname, options);
}
var PROP_TYPE2 = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7
};
function serializeArray2(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v2) => {
    return convertToSerializedForm2(v2, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject2(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(Object.entries(value).map(([k2, v2]) => {
    return [k2, convertToSerializedForm2(v2, metadata, parents)];
  }));
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm2(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE2.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE2.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE2.Map,
        JSON.stringify(serializeArray2(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE2.Set,
        JSON.stringify(serializeArray2(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE2.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE2.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE2.JSON, JSON.stringify(serializeArray2(value, metadata, parents))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE2.Value, serializeObject2(value, metadata, parents)];
      } else {
        return [PROP_TYPE2.Value, value];
      }
    }
  }
}
function serializeProps2(props, metadata) {
  const serialized = JSON.stringify(serializeObject2(props, metadata));
  return serialized;
}
function serializeListValue2(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
var HydrationDirectivesRaw2 = ["load", "idle", "media", "visible", "only"];
var HydrationDirectives2 = new Set(HydrationDirectivesRaw2);
var HydrationDirectiveProps2 = new Set(HydrationDirectivesRaw2.map((n2) => `client:${n2}`));
function extractDirectives2(inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives2.has(extracted.hydration.directive)) {
            throw new Error(`Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(HydrationDirectiveProps2).join(", ")}`);
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new Error('Error: Media query must be provided for "client:media", similar to client:media="(max-width: 600px)"');
          }
          break;
        }
      }
    } else if (key === "class:list") {
      extracted.props[key.slice(0, -5)] = serializeListValue2(value);
    } else {
      extracted.props[key] = value;
    }
  }
  return extracted;
}
async function generateHydrateScript2(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(`Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`);
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = value;
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML2(serializeProps2(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML2(JSON.stringify({
    name: metadata.displayName,
    value: metadata.hydrateArgs || ""
  }));
  return island;
}
var idle_prebuilt_default2 = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;
var load_prebuilt_default2 = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;
var media_prebuilt_default2 = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;
var only_prebuilt_default2 = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;
var visible_prebuilt_default2 = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;
var astro_island_prebuilt_default2 = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t)},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;
function determineIfNeedsHydrationScript2(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
var hydrationScripts2 = {
  idle: idle_prebuilt_default2,
  load: load_prebuilt_default2,
  only: only_prebuilt_default2,
  media: media_prebuilt_default2,
  visible: visible_prebuilt_default2
};
function determinesIfNeedsDirectiveScript2(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText2(directive) {
  if (!(directive in hydrationScripts2)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts2[directive];
  return directiveScriptText;
}
function getPrescripts2(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText2(directive) + astro_island_prebuilt_default2}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText2(directive)}<\/script>`;
  }
  return "";
}
var Fragment2 = Symbol.for("astro:fragment");
var Renderer2 = Symbol.for("astro:renderer");
function stringifyChunk2(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript2(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript2(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts2(prescriptType, hydration.directive);
        return markHTMLString2(prescripts);
      } else {
        return "";
      }
    }
    default: {
      return chunk.toString();
    }
  }
}
function validateComponentProps2(props, displayName) {
  var _a2;
  if (((_a2 = { "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true }) == null ? void 0 : _a2.DEV) && props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps2.has(prop)) {
        console.warn(`You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`);
      }
    }
  }
}
var AstroComponent2 = class {
  constructor(htmlParts, expressions) {
    this.htmlParts = htmlParts;
    this.expressions = expressions;
  }
  get [Symbol.toStringTag]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i3 = 0; i3 < htmlParts.length; i3++) {
      const html2 = htmlParts[i3];
      const expression = expressions[i3];
      yield markHTMLString2(html2);
      yield* renderChild2(expression);
    }
  }
};
function isAstroComponent2(obj) {
  return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
}
function isAstroComponentFactory2(obj) {
  return obj == null ? false : !!obj.isAstroComponentFactory;
}
async function* renderAstroComponent2(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild2(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString2(chunk);
            break;
          }
        }
      }
    }
  }
}
async function renderToString2(result, componentFactory, props, children) {
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent2(Component)) {
    const response = Component;
    throw response;
  }
  let html2 = "";
  for await (const chunk of renderAstroComponent2(Component)) {
    html2 += stringifyChunk2(result, chunk);
  }
  return html2;
}
async function renderToIterable2(result, componentFactory, displayName, props, children) {
  validateComponentProps2(props, displayName);
  const Component = await componentFactory(result, props, children);
  if (!isAstroComponent2(Component)) {
    console.warn(`Returning a Response is only supported inside of page components. Consider refactoring this logic into something like a function that can be used in the page.`);
    const response = Component;
    throw response;
  }
  return renderAstroComponent2(Component);
}
async function renderTemplate2(htmlParts, ...expressions) {
  return new AstroComponent2(htmlParts, expressions);
}
async function* renderChild2(child) {
  child = await child;
  if (child instanceof HTMLString2) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString2(await renderChild2(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild2(child());
  } else if (typeof child === "string") {
    yield markHTMLString2(escapeHTML2(child));
  } else if (!child && child !== 0)
    ;
  else if (child instanceof AstroComponent2 || Object.prototype.toString.call(child) === "[object AstroComponent]") {
    yield* renderAstroComponent2(child);
  } else if (typeof child === "object" && Symbol.asyncIterator in child) {
    yield* child;
  } else {
    yield child;
  }
}
async function renderSlot2(result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild2(slotted);
    let content = "";
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        content += stringifyChunk2(result, chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString2(content);
  }
  return fallback;
}
var dictionary2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
var binary2 = dictionary2.length;
function bitwise2(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i3 = 0; i3 < str.length; i3++) {
    const ch = str.charCodeAt(i3);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash2(text) {
  let num;
  let result = "";
  let integer = bitwise2(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary2) {
    num = integer % binary2;
    integer = Math.floor(integer / binary2);
    result = dictionary2[num] + result;
  }
  if (integer > 0) {
    result = dictionary2[integer] + result;
  }
  return sign + result;
}
var voidElementNames2 = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
var htmlBooleanAttributes2 = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
var htmlEnumAttributes2 = /^(contenteditable|draggable|spellcheck|value)$/i;
var svgEnumAttributes2 = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
var STATIC_DIRECTIVES2 = /* @__PURE__ */ new Set(["set:html", "set:text"]);
var toIdent2 = (k2) => k2.trim().replace(/(?:(?<!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
var toAttributeString2 = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
var kebab2 = (k2) => k2.toLowerCase() === k2 ? k2 : k2.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
var toStyleString2 = (obj) => Object.entries(obj).map(([k2, v2]) => `${kebab2(k2)}:${v2}`).join(";");
function defineScriptVars2(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `let ${toIdent2(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString2(output);
}
function formatList2(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute2(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes2.test(key) || svgEnumAttributes2.test(key)) {
      return markHTMLString2(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES2.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString2(serializeListValue2(value));
    if (listValue === "") {
      return "";
    }
    return markHTMLString2(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString2) && typeof value === "object") {
    return markHTMLString2(` ${key}="${toStyleString2(value)}"`);
  }
  if (key === "className") {
    return markHTMLString2(` class="${toAttributeString2(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes2.test(key))) {
    return markHTMLString2(` ${key}`);
  } else {
    return markHTMLString2(` ${key}="${toAttributeString2(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes2(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute2(value, key, shouldEscape);
  }
  return markHTMLString2(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const _a2 = _props, { lang: _, "data-astro-id": astroId, "define:vars": defineVars } = _a2, props = __objRest(_a2, ["lang", "data-astro-id", "define:vars"]);
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars2(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames2.test(name)) {
    return `<${name}${internalSpreadAttributes2(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes2(props, shouldEscape)}>${children}</${name}>`;
}
function componentIsHTMLElement2(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement2(result, constructor, props, slots) {
  const name = getHTMLElementName2(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString2(await props[attr])}"`;
  }
  return markHTMLString2(`<${name}${attrHTML}>${await renderSlot2(result, slots == null ? void 0 : slots.default)}</${name}>`);
}
function getHTMLElementName2(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}
var rendererAliases2 = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers2(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact"];
    default:
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/vue", "@astrojs/svelte"];
  }
}
function getComponentType2(Component) {
  if (Component === Fragment2) {
    return "fragment";
  }
  if (Component && typeof Component === "object" && Component["astro:html"]) {
    return "html";
  }
  if (isAstroComponentFactory2(Component)) {
    return "astro-factory";
  }
  return "unknown";
}
async function renderComponent2(result, displayName, Component, _props, slots = {}) {
  var _a2;
  Component = await Component;
  switch (getComponentType2(Component)) {
    case "fragment": {
      const children2 = await renderSlot2(result, slots == null ? void 0 : slots.default);
      if (children2 == null) {
        return children2;
      }
      return markHTMLString2(children2);
    }
    case "html": {
      const children2 = {};
      if (slots) {
        await Promise.all(Object.entries(slots).map(([key, value]) => renderSlot2(result, value).then((output) => {
          children2[key] = output;
        })));
      }
      const html22 = Component.render({ slots: children2 });
      return markHTMLString2(html22);
    }
    case "astro-factory": {
      async function* renderAstroComponentInline() {
        let iterable = await renderToIterable2(result, Component, displayName, _props, slots);
        yield* iterable;
      }
      return renderAstroComponentInline();
    }
  }
  if (!Component && !_props["client:only"]) {
    throw new Error(`Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`);
  }
  const { renderers: renderers2 } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives2(_props);
  let html2 = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers2(metadata.componentUrl);
  if (Array.isArray(renderers2) && renderers2.length === 0 && typeof Component !== "string" && !componentIsHTMLElement2(Component)) {
    const message = `Unable to render ${metadata.displayName}!

There are no \`integrations\` set in your \`astro.config.mjs\` file.
Did you mean to add ${formatList2(probableRendererNames.map((r3) => "`" + r3 + "`"))}?`;
    throw new Error(message);
  }
  const children = {};
  if (slots) {
    await Promise.all(Object.entries(slots).map(([key, value]) => renderSlot2(result, value).then((output) => {
      children[key] = output;
    })));
  }
  let renderer;
  if (metadata.hydrate !== "only") {
    if (Component && Component[Renderer2]) {
      const rendererName = Component[Renderer2];
      renderer = renderers2.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error2;
      for (const r3 of renderers2) {
        try {
          if (await r3.ssr.check.call({ result }, Component, props, children)) {
            renderer = r3;
            break;
          }
        } catch (e3) {
          error2 ?? (error2 = e3);
        }
      }
      if (!renderer && error2) {
        throw error2;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement2(Component)) {
      const output = renderHTMLElement2(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases2.has(passedName) ? rendererAliases2.get(passedName) : passedName;
      renderer = renderers2.find(({ name }) => name === `@astrojs/${rendererName}` || name === rendererName);
    }
    if (!renderer && renderers2.length === 1) {
      renderer = renderers2[0];
    }
    if (!renderer) {
      const extname = (_a2 = metadata.componentUrl) == null ? void 0 : _a2.split(".").pop();
      renderer = renderers2.filter(({ name }) => name === `@astrojs/${extname}` || name === extname)[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new Error(`Unable to render ${metadata.displayName}!

Using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.
Did you mean to pass <${metadata.displayName} client:only="${probableRendererNames.map((r3) => r3.replace("@astrojs/", "")).join("|")}" />
`);
    } else if (typeof Component !== "string") {
      const matchingRenderers = renderers2.filter((r3) => probableRendererNames.includes(r3.name));
      const plural = renderers2.length > 1;
      if (matchingRenderers.length === 0) {
        throw new Error(`Unable to render ${metadata.displayName}!

There ${plural ? "are" : "is"} ${renderers2.length} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render ${metadata.displayName}.

Did you mean to enable ${formatList2(probableRendererNames.map((r3) => "`" + r3 + "`"))}?`);
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html: html2, attrs } = await renderer.ssr.renderToStaticMarkup.call({ result }, Component, props, children, metadata));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList2(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html2 = await renderSlot2(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html: html2, attrs } = await renderer.ssr.renderToStaticMarkup.call({ result }, Component, props, children, metadata));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new Error(`${metadata.displayName} component has a \`client:${metadata.hydrate}\` directive, but no client entrypoint was provided by ${renderer.name}!`);
  }
  if (!html2 && typeof Component === "string") {
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroComponent2(await renderTemplate2`<${Component}${internalSpreadAttributes2(props)}${markHTMLString2(childSlots === "" && voidElementNames2.test(Component) ? `/>` : `>${childSlots}</${Component}>`)}`);
    html2 = "";
    for await (const chunk of iterable) {
      html2 += chunk;
    }
  }
  if (!hydration) {
    if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
      return html2;
    }
    return markHTMLString2(html2.replace(/\<\/?astro-slot\>/g, ""));
  }
  const astroId = shorthash2(`<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html2}
${serializeProps2(props, metadata)}`);
  const island = await generateHydrateScript2({ renderer, result, astroId, props, attrs }, metadata);
  let unrenderedSlots = [];
  if (html2) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html2.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map((key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`).join("") : "";
  island.children = `${html2 ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    yield { type: "directive", hydration, result };
    yield markHTMLString2(renderElement$1("astro-island", island, false));
  }
  return renderAll();
}
var uniqueElements2 = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i3) => JSON.stringify(i3.props) === props && i3.children == children);
};
var alreadyHeadRenderedResults2 = /* @__PURE__ */ new WeakSet();
function renderHead2(result) {
  alreadyHeadRenderedResults2.add(result);
  const styles = Array.from(result.styles).filter(uniqueElements2).map((style) => renderElement$1("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements2).map((script, i3) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements2).map((link) => renderElement$1("link", link, false));
  return markHTMLString2(links.join("\n") + styles.join("\n") + scripts.join("\n"));
}
async function* maybeRenderHead2(result) {
  if (alreadyHeadRenderedResults2.has(result)) {
    return;
  }
  yield renderHead2(result);
}
typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
new TextEncoder();
function createComponent(cb) {
  cb.isAstroComponentFactory = true;
  return cb;
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute2(value, key, true);
  }
  return markHTMLString2(output);
}
var AstroJSX = "astro:jsx";
var Empty = Symbol("empty");
var toSlotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w2) => w2.toUpperCase());
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v2) => v2 !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString2(child);
  if (Array.isArray(child))
    return child.map((c2) => markRawChildren(c2));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}
var ClientOnlyPlaceholder = "astro-client-only";
var skipAstroJSXCheck = /* @__PURE__ */ new WeakSet();
var originalConsoleError;
var consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString2:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString2(escapeHTML2(vnode));
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString2((await Promise.all(vnode.map((v2) => renderJSX(result, v2)))).join(""));
  }
  if (isVNode(vnode)) {
    switch (true) {
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString2(await renderToString2(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString2(await renderElement2(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c2) => extractSlots2(c2));
        }
        if (!isVNode(child)) {
          _slots2.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots2[child.props.slot] = [..._slots2[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots2.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skipAstroJSXCheck.add(vnode.type);
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function" && !skipAstroJSXCheck.has(vnode.type)) {
        useConsoleFilter();
        try {
          const output2 = await vnode.type(vnode.props ?? {});
          if (output2 && output2[AstroJSX]) {
            return await renderJSX(result, output2);
          } else if (!output2) {
            return await renderJSX(result, output2);
          }
        } catch (e3) {
          skipAstroJSXCheck.add(vnode.type);
        } finally {
          finishUsingConsoleFilter();
        }
      }
      const _a2 = vnode.props ?? {}, { children = null } = _a2, props = __objRest(_a2, ["children"]);
      const _slots2 = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots2[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots2)) {
        slotPromises.push(renderJSX(result, value).then((output2) => {
          if (output2.toString().trim().length === 0)
            return;
          slots[key] = () => output2;
        }));
      }
      await Promise.all(slotPromises);
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponent2(result, vnode.props["client:display-name"] ?? "", null, props, slots);
      } else {
        output = await renderComponent2(result, typeof vnode.type === "function" ? vnode.type.name : vnode.type, vnode.type, props, slots);
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let body = "";
        for await (const chunk of output) {
          let html2 = stringifyChunk2(result, chunk);
          body += html2;
        }
        return markHTMLString2(body);
      } else {
        return markHTMLString2(output);
      }
    }
  }
  return markHTMLString2(`${vnode}`);
}
async function renderElement2(result, tag, _a2) {
  var _b = _a2, { children } = _b, props = __objRest(_b, ["children"]);
  return markHTMLString2(`<${tag}${spreadAttributes(props)}${markHTMLString2((children == null || children == "") && voidElementNames2.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`)}`);
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error2) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}
var slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w2) => w2.toUpperCase());
async function check(Component, props, _a2 = {}) {
  var _b = _a2, { default: children = null } = _b, slotted = __objRest(_b, ["default"]);
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component(__spreadProps(__spreadValues(__spreadValues({}, props), slots), { children }));
    return result[AstroJSX];
  } catch (e3) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, _a2 = {}) {
  var _b = _a2, { default: children = null } = _b, slotted = __objRest(_b, ["default"]);
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html2 = await renderJSX(result, createVNode(Component, __spreadProps(__spreadValues(__spreadValues({}, props), slots), { children })));
  return { html: html2 };
}
var server_default = {
  check,
  renderToStaticMarkup
};
var $$metadata$h = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/Footer.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$h = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/Footer.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Footer;
  const { footerClass } = Astro2.props;
  const imgSrc = "assets/footer-dots.svg";
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<footer${addAttribute2((footerClass ? footerClass : "footer") + " astro-5NAYDS26", "class")}${addAttribute2("background-image: url(" + imgSrc + ")", "style")}>
  <!-- <SocialMedia /> -->
</footer>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TV8NVWT" height="0" width="0" style="display:none;visibility:hidden" class="astro-5NAYDS26"></iframe>
</noscript>

<!-- End Google Tag Manager (noscript) -->
<!-- To do's -->
<!-- Add work experiences -->
<!-- Add animation -->
<!-- Add UI framework? -->
<!-- https://www.youtube.com/watch?v=T33NN_pPeNI -->
<!-- https://css-tricks.com/svg-line-animation-works/ -->

`;
});
var $$file$h = "C:/Project/astro/jerecho/src/components/Footer.astro";
var $$url$h = void 0;
var $$module1$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$h,
  default: $$Footer,
  file: $$file$h,
  url: $$url$h
}, Symbol.toStringTag, { value: "Module" }));
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
var $$metadata$g = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/MetaHead.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$g = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/MetaHead.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$MetaHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$MetaHead;
  const {
    title = "Jech | Web Developer and designer",
    description = "My name is Jech and I'm a Freelance Web Developer and designer from the Philippines"
  } = Astro2.props;
  return renderTemplate2(_a$2 || (_a$2 = __template$2(['<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width">\n<meta name="generator"', ">\n<title>", '</title>\n\n<meta name="description"', '>\n\n<!-- Open Graph Tags (Facebook) -->\n<meta property="og:type" content="website">\n<meta property="og:title"', '>\n<meta property="og:url" content="https://jerecho.com">\n<meta property="og:description"', '>\n<meta property="og:image" content="assets/og-cover.png">\n\n<link rel="icon" type="image/svg+xml" href="assets/fav.svg">\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n\n<link href="https://fonts.googleapis.com/css2?family=Abel&family=Roboto:wght@100&family=Rubik+Glitch&family=Roboto+Mono:wght@100;400&display=swap" rel="stylesheet">\n\n<!-- Google Tag Manager -->\n<script>\n  (function (w, d, s, l, i) {\n    w[l] = w[l] || [];\n    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });\n    var f = d.getElementsByTagName(s)[0],\n      j = d.createElement(s),\n      dl = l != "dataLayer" ? "&l=" + l : "";\n    j.async = true;\n    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;\n    f.parentNode.insertBefore(j, f);\n  })(window, document, "script", "dataLayer", "GTM-TV8NVWT");\n<\/script>\n<!-- End Google Tag Manager -->\n'])), addAttribute2(Astro2.generator, "content"), title, addAttribute2(description, "content"), addAttribute2(title, "content"), addAttribute2(description, "content"));
});
var $$file$g = "C:/Project/astro/jerecho/src/components/MetaHead.astro";
var $$url$g = void 0;
var $$module1$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$g,
  default: $$MetaHead,
  file: $$file$g,
  url: $$url$g
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$f = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/Nav.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$f = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/Nav.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Nav;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<nav class="navigation astro-5XGTLM6P">
  <a class="link astro-5XGTLM6P" href="/" title="Hi">
    <div class="logo astro-5XGTLM6P">
      <svg width="32" height="50" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="astro-5XGTLM6P">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5797 5.7971C24.5797 5.87476 24.5782 5.95205 24.5751 6.02897H24.5797V43.3623V43.5942H24.5751C24.4534 46.6884 21.9066 49.1594 18.7826 49.1594C15.6586 49.1594 13.1117 46.6884 12.99 43.5942H12.9855V43.3623V6.02897H12.99C12.987 5.95205 12.9855 5.87476 12.9855 5.7971C12.9855 2.59545 15.5809 0 18.7826 0C21.9842 0 24.5797 2.59545 24.5797 5.7971ZM30.302 7.26316C29.2149 6.17599 27.7404 5.56523 26.2029 5.56523V11.3623L26.2029 17.1594C27.7404 17.1594 29.2149 16.5487 30.302 15.4615C31.3892 14.3743 32 12.8998 32 11.3623C32 9.82484 31.3892 8.35033 30.302 7.26316ZM11.5897 30.1449C11.5927 30.068 11.5942 29.9907 11.5942 29.9131C11.5942 26.7114 8.99875 24.116 5.7971 24.116C2.59545 24.116 0 26.7114 0 29.9131C0 29.9907 0.00152685 30.068 0.00455217 30.1449H0V37.1015H0.0413096C0.0140335 37.3295 0 37.5617 0 37.7971C0 40.9988 2.59545 43.5942 5.7971 43.5942C8.99875 43.5942 11.5942 40.9988 11.5942 37.7971C11.5942 37.5617 11.5802 37.3295 11.5529 37.1015H11.5942V30.1449H11.5897Z" fill="url(#paint0_linear_952_12)" class="astro-5XGTLM6P"></path>
        <defs class="astro-5XGTLM6P">
          <linearGradient id="paint0_linear_952_12" x1="27.2" y1="-1.06667" x2="1.6" y2="49.0667" gradientUnits="userSpaceOnUse" class="astro-5XGTLM6P">
            <stop stop-color="white" class="astro-5XGTLM6P"></stop>
            <stop offset="1" stop-color="white" class="astro-5XGTLM6P"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </a>
  <a href="mailto:subs373n@gmail.com?subject=Hi" class="astro-5XGTLM6P">Contact</a>
</nav>

`;
});
var $$file$f = "C:/Project/astro/jerecho/src/components/Nav.astro";
var $$url$f = void 0;
var $$module2$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$f,
  default: $$Nav,
  file: $$file$f,
  url: $$url$f
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$e = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/Header.astro", { modules: [{ module: $$module2$4, specifier: "./Nav.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$e = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/Header.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Header;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<header class="astro-E463ZOFQ">
  ${renderComponent2($$result, "Nav", $$Nav, { "class": "astro-E463ZOFQ" })}
</header>

`;
});
var $$file$e = "C:/Project/astro/jerecho/src/components/Header.astro";
var $$url$e = void 0;
var $$module3$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$e,
  default: $$Header,
  file: $$file$e,
  url: $$url$e
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$d = createMetadata2("/@fs/C:/Project/astro/jerecho/src/layouts/Splash.astro", { modules: [{ module: $$module1$7, specifier: "../components/Footer.astro", assert: {} }, { module: $$module1$6, specifier: "../components/MetaHead.astro", assert: {} }, { module: $$module3$1, specifier: "../components/Header.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$d = createAstro2("/@fs/C:/Project/astro/jerecho/src/layouts/Splash.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Splash = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Splash;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`<html lang="en" class="astro-OSETKEJJ">
  <head>
    ${renderComponent2($$result, "MetaHead", $$MetaHead, { "title": "Jech | Web Developer and designer", "description": "My name is Jech and I'm a Freelance Web Developer and designer from the Philippines", "class": "astro-OSETKEJJ" })}
    
  ${renderHead2($$result)}</head>
  <body class="blur astro-OSETKEJJ">
    <div class="container-grid astro-OSETKEJJ">
      ${renderComponent2($$result, "Header", $$Header, { "class": "astro-OSETKEJJ" })}
      ${renderSlot2($$result, $$slots["default"])}
      ${renderComponent2($$result, "Footer", $$Footer, { "class": "astro-OSETKEJJ" })}
    </div>
  </body></html>`;
});
var $$file$d = "C:/Project/astro/jerecho/src/layouts/Splash.astro";
var $$url$d = void 0;
var $$module1$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$d,
  default: $$Splash,
  file: $$file$d,
  url: $$url$d
}, Symbol.toStringTag, { value: "Module" }));
var html$1 = "";
var frontmatter$1 = { "title": "Hi, my name is", "name": "Jech", "slogan": "Web Developer", "description": "I\u2019m a seasoned web developer with agile methodology background and over 10 years industry experience." };
var file$1 = "C:/Project/astro/jerecho/src/pages/home/intro.md";
var url$1 = "/home/intro";
function rawContent$1() {
  return "";
}
function compiledContent$1() {
  return html$1;
}
function getHeadings$1() {
  return [];
}
function getHeaders$1() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings$1();
}
async function Content$1() {
  const _a2 = frontmatter$1, { layout } = _a2, content = __objRest(_a2, ["layout"]);
  content.file = file$1;
  content.url = url$1;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment2, { "set:html": html$1 });
  return contentFragment;
}
Content$1[Symbol.for("astro.needsHeadRendering")] = true;
var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter: frontmatter$1,
  file: file$1,
  url: url$1,
  rawContent: rawContent$1,
  compiledContent: compiledContent$1,
  getHeadings: getHeadings$1,
  getHeaders: getHeaders$1,
  Content: Content$1,
  default: Content$1
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$c = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/Link.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$c = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/Link.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Link;
  const { text, className, url: url2, title, hasIcon } = Astro2.props;
  const icon = `<svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="svg"
      >
        <path
          d="M1 8H17M10 1L17 8L10 15"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>`;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<a${addAttribute2(url2 || "/", "href")}${addAttribute2((className && className + " flex") + " astro-MD2LI5PC", "class")}${addAttribute2(title, "title")}>${text}

  ${hasIcon ? renderTemplate2`<div class="svg astro-MD2LI5PC">
        ${renderComponent2($$result, "Fragment", Fragment2, {}, { "default": () => renderTemplate2`${unescapeHTML2(icon)}` })}
      </div>` : ""}
</a>

`;
});
var $$file$c = "C:/Project/astro/jerecho/src/components/Link.astro";
var $$url$c = void 0;
var $$module2$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$c,
  default: $$Link,
  file: $$file$c,
  url: $$url$c
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$b = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/SocialList.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$b = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/SocialList.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$SocialList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SocialList;
  const { title, url: url2, classes, svg, target } = Astro2.props;
  const svgHover = `<path d="M19.6962 9.7904C17.8868 9.7904 10.1157 14.858 7.94052 20.3562C7.32025 23.1401 6.6786 24.8467 6.6786 27.7423C6.6786 28.9962 7.3682 31.0058 7.94052 32.1475C8.64 33.5428 9.17694 35.089 10.1157 36.3374C11.6672 38.4007 13.9604 40.3166 16.2426 41.4546C22.1509 44.4011 28.0788 44.7771 34.7229 42.6471C38.0373 41.5845 40.8297 40.2029 43.1412 37.5132C45.0312 35.314 48.3881 30.6767 48.3881 27.7423C48.3881 24.7074 48.8198 23.5621 48.8198 20.3562C48.8198 18.7295 49.4365 15.1587 48.3881 13.9637C48.193 13.7413 47.7314 12.6233 47.6409 12.3076C47.4516 11.6467 46.7287 11.2692 46.3624 10.6847C45.7221 9.66293 44.5815 8.79901 43.9714 7.70374C43.4543 6.77539 41.8747 5.27744 40.9163 5.00433C38.4497 4.30143 36.3159 1.8936 33.5773 1.74185C31.7417 1.64014 30.0382 1.14566 28.1975 1.14566C27.0419 1.14566 24.8757 0.734031 23.8639 1.29471C22.7188 1.92922 20.9362 1.40506 19.6962 1.75841C18.4133 2.12402 16.6258 2.13505 15.3459 2.70238C10.449 4.87311 5.66679 6.99763 1 9.7904" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round"/>`;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<a${addAttribute2(url2 || "/", "href")}${addAttribute2(title, "title")}${addAttribute2(target, "target")}${addAttribute2(classes + " astro-ESVPYYQ6", "class")}>
  <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg" class="svgHover astro-ESVPYYQ6">${renderComponent2($$result, "Fragment", Fragment2, {}, { "default": () => renderTemplate2`${unescapeHTML2(svgHover)}` })}
  </svg>
  ${renderComponent2($$result, "Fragment", Fragment2, {}, { "default": () => renderTemplate2`${unescapeHTML2(svg)}` })}
</a>

`;
});
var $$file$b = "C:/Project/astro/jerecho/src/components/SocialList.astro";
var $$url$b = void 0;
var $$module1$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$b,
  default: $$SocialList,
  file: $$file$b,
  url: $$url$b
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$a = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/SocialMedia.astro", { modules: [{ module: $$module1$4, specifier: "./SocialList.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$a = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/SocialMedia.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$SocialMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SocialMedia;
  const socialMedia = [
    {
      classes: "link-codepen",
      title: "devUI codepen",
      url: "https://codepen.io/co0kie",
      src: "../assets/codepen.svg",
      svg: `<svg class="svgIcon" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 1V6.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M12.25 7.25C11.5245 7.34069 10.1026 8.5085 9.55553 9.05556C8.92624 9.68484 7.93055 9.93053 7.30553 10.5556C6.71587 11.1452 5.39444 11.1344 4.69442 11.6944C4.48276 11.8638 3.51255 12.2191 3.24998 12.25C2.78246 12.305 2.39055 12.8706 1.88887 13.0139C0.379641 13.4451 2.55953 14.4516 2.88887 14.875C3.46452 15.6151 4.23483 16.9879 4.87498 17.5C5.9317 18.3454 6.64588 19.3074 7.49998 20.375C8.12243 21.1531 9.49982 21.0338 10.1944 21.8056C10.5743 22.2276 10.8534 22.8428 11.3055 23.1944C11.4205 23.2838 12.224 22.2211 12.25 22C12.3975 20.7462 14.1313 20.7073 14.6944 19.75C15.1617 18.9557 16.4538 18.6573 17.0555 18.0556C17.3869 17.7242 17.7238 17.5709 18.0555 17.3056C18.3981 17.0315 18.992 16.4768 19.3889 16.25C22.8565 14.2685 17.528 13.2856 16.9861 11.3889C16.86 10.9476 16.1123 10.8181 16.0139 10.375C15.9114 9.91399 15.5885 9.58601 15.4861 9.125C15.3404 8.46944 14.1302 7.31511 13.5 7" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M12.5 1.25C13.1972 1.25 13.8378 2.07024 14.375 2.5C14.707 2.76558 15.3424 3.69905 15.75 3.75C15.9435 3.77419 17.048 4.87253 17.25 5.125C17.6846 5.66827 18.6678 5.83159 19.1944 6.30556C19.797 6.84788 20.75 6.95128 20.75 7.875C20.75 8.6236 20.5369 9.37288 20.5 10C20.4234 11.303 20.1908 13.3815 20.75 14.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M12.25 1.5C11.3321 1.5 11.1619 2.2573 10.3611 2.48611C9.73043 2.66631 9.45069 3.56766 8.86111 3.73611C8.56825 3.81979 7.20348 4.62064 7 4.875C6.70549 5.24314 5.54111 5.61325 5.11111 5.73611C4.47376 5.91821 3.63454 6.21267 3 6.25C1.92139 6.31345 1.75 6.7183 1.75 7.75C1.75 9.62407 1 11.2271 1 13" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M1.5 7C2.71036 7 3.37338 8.22078 4.25 9C5.04074 9.70288 5.79657 10.4355 6.55556 11.1944C7.35654 11.9954 8.26363 13.2834 9.25 13.8056C10.0132 14.2096 11.114 14.9781 11.5 15.75" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M20.25 7.5C20.118 8.68771 18.8041 9.30698 18.0556 10.0556C17.2253 10.8858 16.0952 11.4518 15.25 12.25C14.1808 13.2598 12.4901 14.8799 11.25 15.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M10.75 16C10.75 17.375 10.75 18.75 10.75 20.125C10.75 21.1902 11.25 21.9855 11.25 23" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
</svg>
`,
      target: "_blank"
    },
    {
      classes: "link-youtube",
      title: "devUI youtube channel",
      url: "https://www.youtube.com/channel/UCZnuUnd4XeKxfuTPFFs9OBA",
      src: "../assets/youtube.svg",
      svg: `<svg class="svgIcon" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.75 2.5C3.222 2.5 4.15787 1 5.625 1C7.22893 1 8.87614 0.750002 10.3611 0.750002C12.0324 0.750002 13.7037 0.750002 15.375 0.750002C16.5958 0.750002 19.3722 0.2777 20.25 1.375C20.5174 1.70923 21.4224 2.13854 21.8611 2.26389C22.0311 2.31247 22.9899 3.3288 23 3.5C23.0925 5.0717 23.25 6.42386 23.25 8C23.25 11.1646 23.2226 14.0823 22.25 17" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M1.5 2.5C1.14746 5.32029 0.75 7.96136 0.75 11C0.75 12.4713 1 14.0324 1 15.375C1 15.9421 1.66507 16.7223 1.94444 17.25C2.05507 17.459 3.24558 18.25 3.375 18.25C4.0068 18.25 4.65852 18.75 5.375 18.75C6.28812 18.75 7.47207 18.8464 8.36111 19.0556C10.4828 19.5548 12.9273 19.25 15.125 19.25C16.75 19.25 18.375 19.25 20 19.25C21.8314 19.25 22.75 19.0381 22.75 17" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M9.25 6C9.25 8.52373 9.75 10.8007 9.75 13.25" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M9 6.25C10.2368 6.25 10.9894 7.60051 11.6944 8.30556C12.1233 8.73442 13.4276 9.93266 14 10C15.9423 10.2285 12.4428 11.7458 12.0556 12.0556C11.3628 12.6098 9.95395 12.5921 9.5 13.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
</svg>
`,
      target: "_blank"
    },
    {
      classes: "link-dribbble",
      title: "devui2022",
      url: "https://dribbble.com/devui2022",
      src: "../assets/dribbble.svg",
      svg: `<svg class="svgIcon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00001 1.75001C6.51938 1.75001 2.63696 4.94624 2.2639 6.62501C2.01557 7.74251 1.25001 8.7614 1.25001 10C1.25001 11.0112 0.875949 12.9767 1.37501 13.875C2.41737 15.7513 4.18204 18.3712 6.50001 18.5C7.82698 18.5737 9.12473 19 10.5 19C11.9319 19 13.375 19.055 14.8056 19C15.9704 18.9552 17.2961 17.8151 18.0556 17.0556C19.1673 15.9438 19.5 14.9475 19.5 13.3611C19.5 12.0349 19.6562 10.7013 19.0556 9.50001C18.4487 8.28625 17.646 7.26933 17 6.1389C16.4706 5.21244 15.7535 4.51998 15.25 3.6389C14.5978 2.49759 13.8221 2.42096 12.75 1.94446C11.7581 1.50363 5.00001 0.344797 5.00001 2.00001" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M7.5 2C8.7355 2.15444 10.2471 4.52484 11.1111 5.38889C11.643 5.92078 11.6063 7.08503 12.125 7.5C12.5115 7.8092 13 9.17569 13 9.625C13 10.0947 13.4857 11.2804 13.6944 11.75C13.9808 12.3943 14 13.7883 14 14.5C14 15.4113 14.0535 16.3405 14 17.25C13.9602 17.9271 13.5 18.7996 13.5 19.5" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M1.5 9.75C2.79562 9.75 4.14158 10 5.5 10C6.86651 10 8.04664 9 9.375 9C10.2115 9 11.87 8.29443 12.625 7.875C13.1291 7.59493 13.6957 7.30189 14.25 7.05556C14.8371 6.79462 14.995 6.25249 15.5 6" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
<path d="M6.5 18.25C6.5 15.2373 9.86983 14.6542 11.5556 13.3056C11.925 13.01 12.7774 13.0263 13.25 13C13.9217 12.9627 14.559 12.5 15.25 12.5C16.5812 12.5 17.6271 12.4386 18.75 13" stroke="white" stroke-opacity="0.5" stroke-linecap="round"/>
</svg>
`,
      target: "_blank"
    }
  ];
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<div class="astro-WT4OJHEN">
  ${socialMedia.map((item) => renderTemplate2`${renderComponent2($$result, "SocialList", $$SocialList, { "title": item.title, "url": item.url, "src": item == null ? void 0 : item.src, "classes": item.classes, "target": item.target, "svg": item.svg, "class": "astro-WT4OJHEN" })}`)}
</div>
`;
});
var $$file$a = "C:/Project/astro/jerecho/src/components/SocialMedia.astro";
var $$url$a = void 0;
var $$module3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$a,
  default: $$SocialMedia,
  file: $$file$a,
  url: $$url$a
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$9 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/Intro.astro", { modules: [{ module: _page1, specifier: "../pages/home/intro.md", assert: {} }, { module: $$module2$3, specifier: "./Link.astro", assert: {} }, { module: $$module3, specifier: "./SocialMedia.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$9 = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/Intro.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Intro;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<div class="splash-container astro-DNHY5HEH">
  <div class="card-splash astro-DNHY5HEH">
    <h5${addAttribute2(frontmatter$1.slogan, "data-copy-sub")} style="--shade: var(--c-gray);" class="astro-DNHY5HEH">
      ${frontmatter$1.slogan}
    </h5>
    <h1${addAttribute2(frontmatter$1.title + " " + frontmatter$1.name, "data-copy")} class="astro-DNHY5HEH">
      ${frontmatter$1.title}
      <span class="astro-DNHY5HEH">${frontmatter$1.name}</span>
    </h1>
    <p${addAttribute2(frontmatter$1.description, "data-copy-description")} class="astro-DNHY5HEH">
      ${frontmatter$1.description}
    </p>
    <div class="splash-links astro-DNHY5HEH">
      ${renderComponent2($$result, "Link", $$Link, { "url": "/work", "text": "View Portfolio", "className": "cta astro-DNHY5HEH", "title": "View Portfolio" })}
      ${renderComponent2($$result, "SocialMedia", $$SocialMedia, { "class": "astro-DNHY5HEH" })}
    </div>
  </div>
</div>

`;
});
var $$file$9 = "C:/Project/astro/jerecho/src/components/Intro.astro";
var $$url$9 = void 0;
var $$module1$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$9,
  default: $$Intro,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: "Module" }));
var html = '<img src="assets/dots.svg" width="525">';
var frontmatter = { "me": "assets/me.svg" };
var file = "C:/Project/astro/jerecho/src/pages/home/me.md";
var url = "/home/me";
function rawContent() {
  return '<img src="assets/dots.svg" width="525">';
}
function compiledContent() {
  return html;
}
function getHeadings() {
  return [];
}
function getHeaders() {
  console.warn("getHeaders() have been deprecated. Use getHeadings() function instead.");
  return getHeadings();
}
async function Content() {
  const _a2 = frontmatter, { layout } = _a2, content = __objRest(_a2, ["layout"]);
  content.file = file;
  content.url = url;
  content.astro = {};
  Object.defineProperty(content.astro, "headings", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "headings" from your layout, try using "Astro.props.headings."');
    }
  });
  Object.defineProperty(content.astro, "html", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "html" from your layout, try using "Astro.props.compiledContent()."');
    }
  });
  Object.defineProperty(content.astro, "source", {
    get() {
      throw new Error('The "astro" property is no longer supported! To access "source" from your layout, try using "Astro.props.rawContent()."');
    }
  });
  const contentFragment = createVNode(Fragment2, { "set:html": html });
  return contentFragment;
}
Content[Symbol.for("astro.needsHeadRendering")] = true;
var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  frontmatter,
  file,
  url,
  rawContent,
  compiledContent,
  getHeadings,
  getHeaders,
  Content,
  default: Content
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$8 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/Me.astro", { modules: [{ module: _page2, specifier: "../pages/home/me.md", assert: {} }, { module: _page2, specifier: "../pages/home/me.md", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$8 = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/Me.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Me = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Me;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<div class="me-image astro-CAQ6UA63">
  <img${addAttribute2(frontmatter.me, "src")} alt="" class="me astro-CAQ6UA63" loading="lazy" width="317">
  ${renderComponent2($$result, "Me", Content, { "class": "astro-CAQ6UA63" })}
</div>

`;
});
var $$file$8 = "C:/Project/astro/jerecho/src/components/Me.astro";
var $$url$8 = void 0;
var $$module2$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$8,
  default: $$Me,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$7 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/TopFold.astro", { modules: [{ module: $$module1$3, specifier: "../components/Intro.astro", assert: {} }, { module: $$module2$2, specifier: "./Me.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$7 = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/TopFold.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$TopFold = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TopFold;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<div class="top-fold astro-UZNU7MGG">
  <!-- <Coconut /> -->
  ${renderComponent2($$result, "Intro", $$Intro, { "class": "astro-UZNU7MGG" })}
  ${renderComponent2($$result, "Me", $$Me, { "class": "astro-UZNU7MGG" })}
  <!-- <WaterEffects /> -->
</div>

`;
});
var $$file$7 = "C:/Project/astro/jerecho/src/components/TopFold.astro";
var $$url$7 = void 0;
var $$module1$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$7,
  default: $$TopFold,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: "Module" }));
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
var $$metadata$6 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/MainContainer.astro", { modules: [{ module: $$module1$2, specifier: "./TopFold.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$6 = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/MainContainer.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$MainContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$MainContainer;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2(_a$1 || (_a$1 = __template$1(["", '<main class="main-container astro-YKXOXMTJ">\n  ', '\n</main>\n\n\n\n<script defer>\n  window.addEventListener("load", function () {\n    document.body.classList.remove("blur");\n  });\n  window.onbeforeunload = function () {\n    document.body.classList.add("blur");\n  };\n<\/script>'])), maybeRenderHead2($$result), renderComponent2($$result, "TopFold", $$TopFold, { "class": "astro-YKXOXMTJ" }));
});
var $$file$6 = "C:/Project/astro/jerecho/src/components/MainContainer.astro";
var $$url$6 = void 0;
var $$module2$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$6,
  default: $$MainContainer,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$5 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/pages/index.astro", { modules: [{ module: $$module1$5, specifier: "../layouts/Splash.astro", assert: {} }, { module: $$module2$1, specifier: "../components/MainContainer.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$5 = createAstro2("/@fs/C:/Project/astro/jerecho/src/pages/index.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate2`${renderComponent2($$result, "Splash", $$Splash, {}, { "default": () => renderTemplate2`${renderComponent2($$result, "Main", $$MainContainer, {})}` })}`;
});
var $$file$5 = "C:/Project/astro/jerecho/src/pages/index.astro";
var $$url$5 = "";
var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$5,
  default: $$Index,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$4 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/WorkList.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$4 = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/WorkList.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$WorkList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$WorkList;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`${maybeRenderHead2($$result)}<div class="top-fold astro-APZ7OAUI">
  <p class="astro-APZ7OAUI">test</p>
  <!-- <Coconut /> -->
</div>

`;
});
var $$file$4 = "C:/Project/astro/jerecho/src/components/WorkList.astro";
var $$url$4 = void 0;
var $$module1$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$4,
  default: $$WorkList,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: "Module" }));
var __freeze = Object.freeze;
var __defProp2 = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp2(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
var $$metadata$3 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/components/PortfolioContainer.astro", { modules: [{ module: $$module1$1, specifier: "./WorkList.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$3 = createAstro2("/@fs/C:/Project/astro/jerecho/src/components/PortfolioContainer.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$PortfolioContainer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortfolioContainer;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2(_a || (_a = __template(["", '<main class="main-container astro-R3ALXACM">\n  ', '\n</main>\n\n\n\n<script defer>\n  window.addEventListener("load", function () {\n    document.body.classList.remove("blur");\n  });\n<\/script>'])), maybeRenderHead2($$result), renderComponent2($$result, "WorkList", $$WorkList, { "class": "astro-R3ALXACM" }));
});
var $$file$3 = "C:/Project/astro/jerecho/src/components/PortfolioContainer.astro";
var $$url$3 = void 0;
var $$module1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$3,
  default: $$PortfolioContainer,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$2 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/layouts/Experience.astro", { modules: [{ module: $$module1$7, specifier: "../components/Footer.astro", assert: {} }, { module: $$module1$6, specifier: "../components/MetaHead.astro", assert: {} }, { module: $$module3$1, specifier: "../components/Header.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$2 = createAstro2("/@fs/C:/Project/astro/jerecho/src/layouts/Experience.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`<html lang="en" class="astro-2GNULTYC">
  <head>
    ${renderComponent2($$result, "MetaHead", $$MetaHead, { "title": "Jech | Portfolio", "description": "My name is Jech and I'm a Freelance Web Developer and designer from the Philippines", "class": "astro-2GNULTYC" })}
    
  ${renderHead2($$result)}</head>
  <body class="blur astro-2GNULTYC">
    <div class="container-grid astro-2GNULTYC">
      ${renderComponent2($$result, "Header", $$Header, { "class": "astro-2GNULTYC" })}
      ${renderSlot2($$result, $$slots["default"])}
      ${renderComponent2($$result, "Footer", $$Footer, { "footerClass": "footer footer-work", "class": "astro-2GNULTYC" })}
    </div>
  </body></html>`;
});
var $$file$2 = "C:/Project/astro/jerecho/src/layouts/Experience.astro";
var $$url$2 = void 0;
var $$module2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$2,
  default: $$Experience,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata$1 = createMetadata2("/@fs/C:/Project/astro/jerecho/src/pages/work.astro", { modules: [{ module: $$module1, specifier: "../components/PortfolioContainer.astro", assert: {} }, { module: $$module2, specifier: "../layouts/Experience.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro$1 = createAstro2("/@fs/C:/Project/astro/jerecho/src/pages/work.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Work;
  return renderTemplate2`${renderComponent2($$result, "Experience", $$Experience, {}, { "default": () => renderTemplate2`${renderComponent2($$result, "PortfolioContainer", $$PortfolioContainer, {})}` })}`;
});
var $$file$1 = "C:/Project/astro/jerecho/src/pages/work.astro";
var $$url$1 = "/work";
var _page3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata: $$metadata$1,
  default: $$Work,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: "Module" }));
var $$metadata = createMetadata2("/@fs/C:/Project/astro/jerecho/src/pages/404.astro", { modules: [{ module: $$module1$6, specifier: "../components/MetaHead.astro", assert: {} }, { module: $$module2$4, specifier: "../components/Nav.astro", assert: {} }], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [] });
var $$Astro = createAstro2("/@fs/C:/Project/astro/jerecho/src/pages/404.astro", "https://j3rech0.netlify.app/", "file:///C:/Project/astro/jerecho/");
var $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const STYLES = [];
  for (const STYLE of STYLES)
    $$result.styles.add(STYLE);
  return renderTemplate2`<html lang="en" class="astro-KLJ6CSCR">
  <head>
    ${renderComponent2($$result, "MetaHead", $$MetaHead, { "title": "Jech | Not Found", "class": "astro-KLJ6CSCR" })}
    
  ${renderHead2($$result)}</head>
  <body class="astro-KLJ6CSCR">
    ${renderComponent2($$result, "Nav", $$Nav, { "class": "astro-KLJ6CSCR" })}
    <div class="astro-KLJ6CSCR">
      <h1 class="astro-KLJ6CSCR">Page Not Found</h1>

      <a href="/" class="astro-KLJ6CSCR">back</a>
    </div>
  </body></html>`;
});
var $$file = "C:/Project/astro/jerecho/src/pages/404.astro";
var $$url = "/404";
var _page4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$metadata,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/home/intro.md", _page1], ["src/pages/home/me.md", _page2], ["src/pages/work.astro", _page3], ["src/pages/404.astro", _page4]]);
var renderers = [Object.assign({ "name": "astro:jsx", "serverEntrypoint": "astro/jsx/server.js", "jsxImportSource": "astro" }, { ssr: server_default })];
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose"))
    ;
  else if (process.argv.includes("--silent"))
    ;
  else
    ;
}
var SCRIPT_EXTENSIONS2 = /* @__PURE__ */ new Set([".js", ".ts"]);
new RegExp(`\\.(${Array.from(SCRIPT_EXTENSIONS2).map((s3) => s3.slice(1)).join("|")})($|\\?)`);
var STYLE_EXTENSIONS2 = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
new RegExp(`\\.(${Array.from(STYLE_EXTENSIONS2).map((s3) => s3.slice(1)).join("|")})($|\\?)`);
function getRouteGenerator2(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return segment[0].spread ? `/:${segment[0].content.slice(3)}(.*)?` : "/" + segment.map((part) => {
      if (part)
        return part.dynamic ? `:${part.content}` : part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = (0, import_path_to_regexp.compile)(template + trailing);
  return toPath;
}
function deserializeRouteData2(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator2(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}
function deserializeManifest2(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push(__spreadProps(__spreadValues({}, serializedRoute), {
      routeData: deserializeRouteData2(serializedRoute.routeData)
    }));
    const route = serializedRoute;
    route.routeData = deserializeRouteData2(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return __spreadProps(__spreadValues({}, serializedManifest), {
    assets,
    routes
  });
}
var _manifest2 = Object.assign(deserializeManifest2({ "adapterName": "@astrojs/netlify/functions", "routes": [{ "file": "", "links": ["assets/404-index-work.3590d5a2.css", "assets/index-work.bf6abf16.css", "assets/index.69995dcd.css"], "scripts": [], "routeData": { "route": "/", "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "routeData": { "route": "/home/intro", "type": "page", "pattern": "^\\/home\\/intro\\/?$", "segments": [[{ "content": "home", "dynamic": false, "spread": false }], [{ "content": "intro", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/home/intro.md", "pathname": "/home/intro", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": [], "scripts": [], "routeData": { "route": "/home/me", "type": "page", "pattern": "^\\/home\\/me\\/?$", "segments": [[{ "content": "home", "dynamic": false, "spread": false }], [{ "content": "me", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/home/me.md", "pathname": "/home/me", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/work.bf6fc389.css", "assets/404-index-work.3590d5a2.css", "assets/index-work.bf6abf16.css"], "scripts": [], "routeData": { "route": "/work", "type": "page", "pattern": "^\\/work\\/?$", "segments": [[{ "content": "work", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/work.astro", "pathname": "/work", "_meta": { "trailingSlash": "ignore" } } }, { "file": "", "links": ["assets/404.d05432fa.css", "assets/404-index-work.3590d5a2.css"], "scripts": [], "routeData": { "route": "/404", "type": "page", "pattern": "^\\/404\\/?$", "segments": [[{ "content": "404", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/404.astro", "pathname": "/404", "_meta": { "trailingSlash": "ignore" } } }], "site": "https://j3rech0.netlify.app/", "base": "/", "markdown": { "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [], "remarkRehype": {}, "extendDefaultPlugins": false, "isAstroFlavoredMd": false }, "pageMap": null, "renderers": [], "entryModules": { "\0@astrojs-ssr-virtual-entry": "entry.mjs", "astro:scripts/before-hydration.js": "" }, "assets": ["/assets/404.d05432fa.css", "/assets/404-index-work.3590d5a2.css", "/assets/index.69995dcd.css", "/assets/index-work.bf6abf16.css", "/assets/work.bf6fc389.css", "/robots.txt", "/assets/circle-stroke.svg", "/assets/coconut.svg", "/assets/codepen.svg", "/assets/cta-arrow.svg", "/assets/dots.svg", "/assets/dribbble.svg", "/assets/fake_cursor.svg", "/assets/fav.svg", "/assets/footer-dots.svg", "/assets/logo-stroke.svg", "/assets/me.png", "/assets/me.svg", "/assets/mountains.svg", "/assets/ocean.svg", "/assets/og-cover.png", "/assets/stroke-bg.svg", "/assets/youtube.svg"] }), {
  pageMap,
  renderers
});
var _args = {};
var _exports = createExports(_manifest2, _args);
var handler = _exports["handler"];
var _start = "start";
if (_start in netlify_functions_exports) {
  netlify_functions_exports[_start](_manifest2, _args);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
//# sourceMappingURL=entry.js.map
