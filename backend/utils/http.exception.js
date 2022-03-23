export const httpException = (code, message) => {
    const error = new Error(`${message}`);
    error.statusCode = code;
    throw error;
}