// Contributor: Tayfun AYDINOZ
/**
 * NOTE: This function is designed for lower case sensitive sentences. 
 * 
 * @param sentence string to find longest
 * @returns longestWord if no words in sentence returns empty
*/
function findLongestWordWithMostVowels(sentence){
    /* Removing non-alphabet characters (non-English letter) and split the sentence into words */
    const wordsArray = sentence.replace(/[^a-z ]/g, '').split(/\s+/);;
    let longestWord = '';
    for (let word of wordsArray){
      /* Checking if the current word is longer than the previous longest word */
      if (word.length > longestWord.length){
        longestWord = word;
      }else if(word.length === longestWord.length && word != ''){
        const vowelCount = word.match(/[aeiou]/g).length;
        const longestWordCount = longestWord.match(/[aeiou]/g).length;
        if(vowelCount>longestWordCount){
          longestWord = word; 
        }
      }
    }
    return longestWord;
}
  
/* Given Test input */
const inputSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
/* Testing the non-alphabet characters included sentence */
const inputSentence1 = "Th!s !s @ t3st -- 123";
/* Testing the long sentence */
const inputSentence2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam ";
/* Testing the equal length with equal vowel counts */
const inputSentence3 = "aeiou aaeeiou aeioue aeeiouo"
/* Testing for no valid words input */
const inputSentence4 ="1234123!@<<>>$½^#"

const longestWord = findLongestWordWithMostVowels(inputSentence);
console.log(longestWord);