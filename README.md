# Unhandled Server Shutdown in Node.js

This repository demonstrates an uncommon bug in Node.js where a server might fail to shut down gracefully, potentially leading to resource leaks if not handled correctly. The issue often stems from unhandled events or asynchronous operations in the event loop that prevent the server from closing.

## The Bug
The `bug.js` file contains a simple HTTP server.  The primary problem isn't immediately apparent in the code itself, but rather in the potential race condition between closing the server and pending asynchronous operations.