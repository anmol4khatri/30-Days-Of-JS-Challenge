function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (charMap.has(s[end])) {
            start = Math.max(charMap.get(s[end]) + 1, start);
        }
        charMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3