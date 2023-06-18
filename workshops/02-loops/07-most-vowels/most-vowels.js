function mostVowels(stringPara) {
    let vowel = 'aAeEiIoOUu'
    let count = 0
    let finalWord = ''
    let vCount = 0
    let word = ''
    for (let k = 0; k < stringPara.length; k++) {
        if (vowel.includes(stringPara[k])) {
            vCount++
        }
        if (stringPara[k] === ' ' || stringPara[k] === '.') {
            if (count < vCount) {
                count = vCount
                finalWord = word
            }
            word = ''
            vCount = 0
        } else {
            word += stringPara[k]
        }
    }
    console.log(finalWord)
    return finalWord
}

// mostVowels('Give her hell from Peeves.')