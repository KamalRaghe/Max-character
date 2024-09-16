{/* <div id="string" >String:</div>
    <input class='User' id="input" type="text" placeholder="Enter string" >  */}
    const string = document.getElementById('string')
    const re = document.getElementById('re')    
    let charMap = {}
    const input = document.getElementById('input')
    const btn = document.getElementById('btn')
    
    
  
    function Max(){
       let str = input.value
       let MaxNum = 0
       let MaxChar = ''
       for(let char of str){
            charMap[char] = charMap[char] + 1 || 1
        }
        str = ''      
       for(let char in charMap){
        if(charMap[char] > MaxNum){
            MaxNum = charMap[char]
            MaxChar = char
            string.innerHTML = 'The letter ' + MaxChar + ' repeats the most'
            re.innerHTML = "It repeats "+MaxNum + " times"
        }
       }charMap = {}  
       
    }

 btn.addEventListener('click', Max)