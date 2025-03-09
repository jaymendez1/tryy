module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    switch (true) {
        case typeof err === 'string':
            // Custom application error
            const is404 = err.toLowerCase().endsWith('not found'); // Fix: toLowerCase()
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ message: err });
        default:
            // Default to 500 server error
            return res.status(500).json({ message: err.message });
    }
}