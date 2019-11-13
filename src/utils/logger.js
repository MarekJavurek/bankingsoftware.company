let logger;
if (process.env.NODE_ENV === "local") {
  logger = console;
} else {
  logger = {
    log: () => {},
    error: console.error,
    warn: () => {},
    info: () => {}
  };
}

export default logger;
