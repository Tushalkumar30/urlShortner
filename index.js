const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        const logEntry = `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`;
        fs.appendFile(filename, logEntry, (err) => {
            if (err) {
                console.error("Failed to write to file", err);
            }
            next();
        });
    };
}

module.exports = {
    logReqRes,
};
