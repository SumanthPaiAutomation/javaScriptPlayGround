function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();

        if (!isAlphaNumeric(leftChar)) {
            left++;
        } else if (!isAlphaNumeric(rightChar)) {
            right--;
        } else if (leftChar !== rightChar) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}

function isAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
}
