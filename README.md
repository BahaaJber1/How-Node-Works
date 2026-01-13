# How Node.js Works ⚙️

A comprehensive demonstration of Node.js core concepts including the event loop, event emitters, module system, and streams.

## 📋 Project Overview

This project explores fundamental Node.js internals through practical examples:

- Event Loop execution order and phases
- EventEmitter pattern and custom events
- CommonJS module system (require/exports)
- Streams and backpressure handling
- Synchronous vs Asynchronous operations
- Module caching behavior

## 📁 Project Structure

```
2-how-node-works/
├── event-loop.js         # Event loop phases demonstration
├── event.js              # EventEmitter and custom events
├── modules.js            # Module system and caching
├── streams.js            # Streams and file serving
├── test-file.txt         # Sample file for streams demo
├── test-module1-1.js     # Class-based module (module.exports)
├── test-module-2.js      # Object-based module (exports)
└── test-module-3.js      # Function module with caching demo
```

## 🎯 Concepts Demonstrated

### 1. Event Loop (`event-loop.js`)

Demonstrates the order of execution in Node.js event loop phases:

- **Top-level code** - Executes first
- **process.nextTick()** - Executes before any other phase
- **Timers** - `setTimeout()` and `setImmediate()`
- **I/O callbacks** - File system operations
- **Synchronous vs Asynchronous** crypto operations
- **Thread pool** behavior with multiple async operations

**Key Learning:**

- Event loop phases and their priorities
- Blocking vs non-blocking operations
- Thread pool size and its impact on performance

**Run:**

```bash
node event-loop.js
```

### 2. Event Emitter (`event.js`)

Shows how to create and use custom events using Node's EventEmitter:

- Creating custom event emitter classes
- Registering multiple listeners for the same event
- Passing arguments to event listeners
- Built-in events in `http.createServer()`
- Understanding why browsers trigger multiple requests (favicon)

**Key Learning:**

- Observer pattern in Node.js
- Event-driven architecture
- Multiple listeners per event
- HTTP server events (`request`, `close`)

**Run:**

```bash
node event.js
```

Server starts on port 8000. Visit `http://localhost:8000` to see event emissions.

### 3. Modules (`modules.js`)

Explores Node.js module system (CommonJS):

- **module.exports** - Exporting classes
- **exports** - Exporting multiple functions
- **require()** - Importing modules
- **Destructuring** imports
- **Module caching** - Modules are cached after first load

**Supporting Modules:**

- `test-module1-1.js` - Calculator class using `module.exports`
- `test-module-2.js` - Math functions using `exports.functionName`
- `test-module-3.js` - Function demonstrating caching behavior

**Key Learning:**

- Difference between `module.exports` and `exports`
- Module wrapper function
- Caching mechanism (module runs only once)

**Run:**

```bash
node modules.js
```

### 4. Streams (`streams.js`)

Demonstrates three approaches to serving files via HTTP:

1. **Solution 1:** `fs.readFile()` - Loads entire file into memory (not optimal)
2. **Solution 2:** `fs.createReadStream()` - Reads in chunks (backpressure issue)
3. **Solution 3:** `readable.pipe(writable)` - Best solution with automatic backpressure handling

**Key Learning:**

- Memory efficiency with large files
- Backpressure problem and solution
- Readable and writable streams
- The `pipe()` method

**Run:**

```bash
node streams.js
```

Server starts on port 8000. Visit `http://localhost:8000` to see file streaming.

## 🚀 Running the Examples

Each file can be run independently:

```bash
# Event Loop demo
node event-loop.js

# Event Emitter demo (starts server on port 8000)
node event.js

# Module system demo
node modules.js

# Streams demo (starts server on port 8000)
node streams.js
```

> [!NOTE] 
> Make sure port 8000 is free before running server examples.

## 💡 Key Takeaways

### Event Loop Order:

1. Top-level synchronous code
2. `process.nextTick()` callbacks
3. Microtasks (Promises)
4. Timer callbacks (`setTimeout`, `setInterval`)
5. I/O callbacks
6. `setImmediate()` callbacks
7. Close callbacks

### Module System:

- `module.exports` = exports a single value (class, function, object)
- `exports.name` = exports multiple named values
- Modules are cached after first `require()`

### Streams Benefits:

- Memory efficient for large files
- Don't wait for entire file to load
- `pipe()` automatically handles backpressure

### EventEmitter Pattern:

- Foundation of Node.js event-driven architecture
- Many Node.js core modules inherit from EventEmitter
- Allows loose coupling between components

## 📚 Related Concepts

- **Thread Pool:** Node.js uses libuv with default 4 threads for heavy operations
- **Backpressure:** When writable stream is slower than readable stream
- **Module Wrapper:** Node wraps all modules in a function with `exports`, `require`, `module`, `__filename`, `__dirname`

---

_This project is part of Jonas Schmedtmann's Node.js course on Udemy_
