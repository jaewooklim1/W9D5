
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {

    if (htmlElement.children) {
        Array.from(htmlElement.children).forEach((el) => el.remove());
    }

    const pTag = document.createElement("p");
    pTag.textContent = string;
    htmlElement.append(pTag);

};

htmlGenerator('Party Time.', partyHeader);

// We'll warm up with something simple. Head to src/warmup.js. Once here you'll be see a function named htmlGenerator. 
// The htmlGenerator function will take two arguments: a string, and a HTML Element. The desired behavior of this function is the input string will be converted into a 
// <p> tag and then appended to the input HTML Element. Never be afraid to look up the documentation for how to interact with HTML Elements if you need a reminder.

// Since the DOM is a traversable tree you can add to - use your htmlGenerator to add a fun phrase like "I <3 Vanilla DOM manipulation." to your h1 tag. 
// Now whenever you reload the page your htmlGenerator will append a p tag below your h1 tag. Neat! Let's move on to the next phase.