function analyzeSentence(sentence) {
    let wordCount = 0;
    let vowelCount = 0;
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];


        if (vowels.includes(char)) {
            vowelCount++;
        }


        if (char === ' ' || char === '.') {
            wordCount++;
        }
    }

    return {
        words: wordCount,
        vowels: vowelCount
    };
}





function sumOfDistinctElements(set1, set2)
{
    let sum = 0;

    let combinedSet = set1.concat(set2);

    for (let i = 0; i < combinedSet.length; i++) {
        let element = combinedSet[i];
    }
        if (set1.includes(element) !== set2.includes(element)) {
            sum += element;
}
}
