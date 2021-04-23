
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
    const dogNames = Object.keys(dogs);
    const dogLinks = [];

  dogNames.forEach((dog) => {
    const dogsLink = document.createElement('a');
    const li = document.createElement('li');

    li.classList.add("dog-link")
    dogsLink.innerHTML = dog;
    dogsLink.href = dogs[dog];

    li.appendChild(dogsLink);
    dogLinks.push(li);
  });

  return dogLinks;
}

const attachDogLinks = () => {
  const dogDropdown = document.querySelector(".drop-down-dog-list")
  const dogsLink = dogLinkCreator(dogs);
  // debugger
  dogsLink.forEach((dogLink) => {
    dogDropdown.appendChild(dogLink)
  });
}

attachDogLinks();

const handleEnter = () => {
  // debugger
  const dogLink = Array.from(document.querySelectorAll(".dog-link"))
  dogLink.forEach(li => li.classList.toggle("open"));
  
}

const handleLeave = () => {
  // debugger
  const dogLink = Array.from(document.querySelectorAll(".dog-link"))
  dogLink.forEach(li => li.classList.toggle("open"));
  
}

const list = document.querySelector(".drop-down-dog-nav")
list.addEventListener("mouseenter", handleEnter)
list.addEventListener("mouseleave", handleLeave)