function decode(knownWords, message) {
    let words = message.split(" ");
    function findWord(word){
        return knownWords.find(kw => {
            const sorted_kw = kw.split("").sort().join("");
            const sorted_w = word.split("").sort().join("");
            return sorted_kw === sorted_w;
        });
    }
    return words.map(word => findWord(word)).join(" ");
}

module.exports = decode;
