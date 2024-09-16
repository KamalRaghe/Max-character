{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
    const string = document.getElementById('string')
    const re = document.getElementById('re')    
    const str = 'kamal raghe'
    const charMap = {}
    
    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1
        }else{
            charMap[char] = charMap[char] + 1 || 1
        }
    }
  

    console.log(charMap)