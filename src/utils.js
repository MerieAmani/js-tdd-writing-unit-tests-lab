function isPalindrome(input) {
    if (typeof input !== 'string') {
        throw new Error("Input must be a string");
    }

    if (!input.trim() || !/^[A-Za-z\s,']+$/.test(input)) {
        throw new Error("Input must contain only alphabetic characters");
    }

    const normalized = input
        .toLowerCase()
        .replace(/[^a-z]/g, ''); 

    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

module.exports = { isPalindrome };