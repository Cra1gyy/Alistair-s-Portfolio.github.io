const boxDiv1 = document.querySelector('.html');
const boxDiv2 = document.querySelector('.css');
const boxDiv3 = document.querySelector('.javascript');
const boxDiv4 = document.querySelector('.github');
const boxDiv5 = document.querySelector('.git')

// Makes all of the paragraphes appear on the poage when you hover over the div

let paragraphChangeHTML = () => {
    document.querySelector('.html p').style.display = 'block';
}

boxDiv1.addEventListener('mouseover', paragraphChangeHTML);
 


let paragraphChangeCSS = () => {
    document.querySelector('.css p').style.display = 'block';
}

boxDiv2.addEventListener('mouseover', paragraphChangeCSS);



let paragraphChangejavascript = () => {
    document.querySelector('.javascript p').style.display = 'block';
}

boxDiv3.addEventListener('mouseover', paragraphChangejavascript);



let paragraphChangegithub = () => {
    document.querySelector('.github p').style.display = 'block';
}

boxDiv4.addEventListener('mouseover', paragraphChangegithub);



let paragraphChangegit = () => {
    document.querySelector('.git p').style.display = 'block';
}

boxDiv5.addEventListener('mouseover', paragraphChangegit);



// this will make all of the paragrphes disapper when you are no longer hovering over them



let paragraphChangeHTMLNone = () => {
    document.querySelector('.html p').style.display = 'none';
}

boxDiv1.addEventListener('mouseout', paragraphChangeHTMLNone);
 


let paragraphChangeCSSNone = () => {
    document.querySelector('.css p').style.display = 'none';
}

boxDiv2.addEventListener('mouseout', paragraphChangeCSSNone);



let paragraphChangejavascriptNone = () => {
    document.querySelector('.javascript p').style.display = 'none';
}

boxDiv3.addEventListener('mouseout', paragraphChangejavascriptNone);



let paragraphChangegithubNone = () => {
    document.querySelector('.github p').style.display = 'none';
}

boxDiv4.addEventListener('mouseout', paragraphChangegithubNone);



let paragraphChangegitNone = () => {
    document.querySelector('.git p').style.display = 'none';
}

boxDiv5.addEventListener('mouseout', paragraphChangegitNone);



// Here is where you will be able to view the skills information by clicking making it work for phones



let paragraphChangeHTMLClick = () => {
    document.querySelector('.html p').style.display = 'block';
}

boxDiv1.addEventListener('touched', paragraphChangeHTMLClick);
 


let paragraphChangeCSSClick = () => {
    document.querySelector('.css p').style.display = 'block';
}

boxDiv2.addEventListener('touched', paragraphChangeCSSClick);



let paragraphChangejavascriptClick = () => {
    document.querySelector('.javascript p').style.display = 'block';
}

boxDiv3.addEventListener('touched', paragraphChangejavascriptClick);



let paragraphChangegithubClick = () => {
    document.querySelector('.github p').style.display = 'block';
}

boxDiv4.addEventListener('touched', paragraphChangegithubClick);



let paragraphChangegitClick = () => {
    document.querySelector('.git p').style.display = 'block';
}

boxDiv5.addEventListener('touched', paragraphChangegitClick);


