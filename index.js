function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    var hello = "hello";
    var HELLO = "HELLO";
    if(string === hello){
        return "I can't hear you!"

    }else if(string===HELLO){
        return "YES INDEED!"
    }else
    return "I would love to!"
    
}