const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.append(newParagraph);


const newImage = document.createElement("img")
newImage.setAttribute("alt", "random image")
newImage.src = "https://picsum.photos/200";
document.body.append(newImage)


const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// const newSection = document.createElement("h2")
// newSection.innerHTML = "DOM Basics";
// document.body.append(newSection)

// const newP = document.createElement("p")
// newP.innerText = "This was added through Javascript";
// document.body.append(newP);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added through Javascript</p>";
document.body.appendChild(newSection);
