const string1 = "hithismeaqsachoudharyhellodolly";
console.log("string1", string1);
// length
const string2 = "hithisjckjdcjnjhcjhscj";
const length = string2.length;
console.log("lengh", length);
// slice in string
const slicestring = "apple,banana,kivi";
const resultslice = slicestring.slice(7, 13);
console.log("resultslice", resultslice);
// toLowerCase method
const tolowercasestring = "Hello its JAVASCRIPT";
const lowerresult = tolowercasestring.toLocaleLowerCase();
console.log("lowerresult", lowerresult);
// uppercase method
const uppercasetring = "hello its jvascript";
const upercaseresult = uppercasetring.toUpperCase();
console.log("upercaseresult", upercaseresult);
// include returns true or false if given character is available in string
const includestr = "its string methods";
const includeresult = includestr.includes("itsss");
console.log("includeresult", includeresult);
// startwith also returns true or false only return first word of the character
const startwiths = "its a stsrt wth string ";
const startresult = startwiths.startsWith("n");
console.log("startresult", startresult);
// endwithis used to find the last word of the string and only return true or false
const endwithss = "its  endwith string ";
const resultendwith = endwithss.endsWith("");
console.log("resultendwith", resultendwith);
// search actually return exact position of the word if it founds in string and if it founds nothing then it returns -1
const searchstring = "its  endwith string ";
const resultsearch = searchstring.search("string");
console.log("resultsearch", resultsearch);
// match search again and again and if it found word more then one time or one time its returns array of the string we use this special type in this method
const matchstring = "its  endwith string hi yes its string  ";
const resultmatch = matchstring.match(/string/g);
console.log("resultmatch", resultmatch);
// indexof is actually that returns the index of a string and then if there are repatitive values then its will return the index of a first value not a last value
const indexofstring = "hi its  endwith string hi yes its string";
const resultindexof = indexofstring.indexOf("hi");
console.log("resultindexof", resultindexof);
// lastindexof viceverca it returns the last index of the string
const lastindexofstring = "hi its  endwith string hi yes its string";
const resultlastindexof = lastindexofstring.lastIndexOf("hi");
console.log("resultlastindexof ", resultlastindexof);
// replace simply replace the word with given word that we provide
const replacestr = "javascript is a great language";
const resultreplacestr = replacestr.replace("javascript", "php");
console.log("resultreplacestr", resultreplacestr);
// trim basically remove the extraw spaces that come from left and right
const trimstr = "    hi its javascript";
const trimresult = trimstr.trim();
console.log("trimresult", trimresult);
// in charat we define position with number and it returns the character at that position
const charatstr = "hi tis is javascript and its methods";
const charatresult = charatstr.charAt("5");
console.log("charatresulthaatresult", charatresult);
// CHARCODEAT basically returns the Ascii code of the character
const charcodestr = "hi i am string";
const charatcoderesult = charatstr.charCodeAt("i");
console.log("charcoderesult", charatcoderesult);
// through concat e can merg tow strings
const str1 = "hello";
const str2 = "bye";
const str3 = "hah";
const concatresult = str1.concat(str2, str3);
console.log("concatresult", concatresult);
// split method it broke the string in words and returns the array
const splitstr = "hiitsajavascript";
const splitstrresult = splitstr.split("");
console.log(" splitstrresult", splitstrresult);
// repeat method basically repeat the string as many time as we want
const repeatstr = "its java script";
const rresult = repeatstr.repeat(5);
console.log("rresult", rresult);
// substr basically work like string but when we assign (3,5) its means that from digit three it will count its counting till digit 5 means 3 digit is here 1 and onword 1,2,3,4,5
const substrs = "its a java script";
const substrresult = substrs.substr(3, 5);
console.log("substrs", substrs);
// substring basically returns the only digit that we will assign (3,5) means it will return only character that exist on 3 and on the only one
const substrings = "its java";
const resultstrings = substrings.substring(3, 5);
console.log(resultstrings);
