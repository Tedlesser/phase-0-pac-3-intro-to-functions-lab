function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string){
    return string.toLowerCase();
  }

  const string = "Hello"  
  function logShout(String) {
    console.log(string.toUpperCase());
  }
 
  function logWhisper(String) {
    console.log(string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string){
      return "I can't hear you!";
  }
    if (string.toUpperCase() === string){  
      return "YES INDEED!";
    }
    if(string === "Let's have dinner together!"){
      return "I would love to!";
    }
  }