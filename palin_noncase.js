
let stdin = process.openStdin()
const main = () => {
  console.log('Enter a Palindrome : ')
  stdin.addListener("data",(word) => {
    checkPalindrom(word.toString().trim())
    stdin.destroy()
  })
}

function checkPalindrom(palindrom){
   var value = true;
   var j = 0;
   len = palindrom.toLowerCase()
    for( var i = len.length-1; i > len.length / 2; i-- )
    {
        if( len[i] != len[j] )
        {
           value = false
           break 
        }
        j++
    }
  if( value ) {
  console.log('the word is palindrome.')
  }
  else {
console.log('the word is not palindrome.')
  }
}

main()
