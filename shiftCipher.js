
class ShiftCipher{
    constructor(num){
      this.num = num;
      }
  
    encrypt(s){
      let newString = "";
      let uni = "";
  
      s=s.toLowerCase();
      for(let i=0; i< s.length; i++){
        // get unicode 97 up to 122
        uni = s.charCodeAt(i);
        if( uni < 97 || uni > 122 ) { 
          newString += s[i];
          }
          else{
            uni += this.num;
            if(uni>122){
              uni -=26;
              }
              newString += String.fromCharCode(uni).toUpperCase();
            }
        }
        return newString;
  
    }
  
    decrypt(s){
      let newString = "";
      let uni = "";
  
      s=s.toLowerCase();
      for(let i=0; i< s.length; i++){
        // get unicode 97 up to 122
        uni = s.charCodeAt(i);
        if( uni < 97 || uni > 122 ) { 
          newString += s[i];
          }
          else{
            uni -= this.num;
            if(uni < 97){
              uni +=26;
              }
              newString += String.fromCharCode(uni);
            }
        }
        return newString;
  
    }
  
  }
  
  let myfun = new ShiftCipher(1);
  console.log(myfun.encrypt("Z"));