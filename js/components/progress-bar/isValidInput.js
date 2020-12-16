function isValidInput(selector, data) {
    
    if (typeof selector !== 'string' ||
        selector === '' ||
        selector.length > 100) {
        return false;
    }

    
    if (!Array.isArray(data) ||
        data.length === 0) {
        return false;
    }

    return true;
}

export { isValidInput }