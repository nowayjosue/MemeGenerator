document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.getElementById("meme-form");
    const memeContainer = document.getElementById("meme-container");

    memeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const imageUrl = document.getElementById("image-url").value;
        const topText = document.getElementById("top-text").value;
        const bottomText = document.getElementById("bottom-text").value;

        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        // Create an image element
        const image = document.createElement("img");
        image.src = imageUrl;

        // Create top text element
        const topTextElement = document.createElement("div");
        topTextElement.classList.add("top-text");
        topTextElement.innerText = topText;

        // Create bottom text element
        const bottomTextElement = document.createElement("div");
        bottomTextElement.classList.add("bottom-text");
        bottomTextElement.innerText = bottomText;

        // Append elements to meme div
        memeDiv.appendChild(image);
        memeDiv.appendChild(topTextElement);
        memeDiv.appendChild(bottomTextElement);

        // Add meme to meme container
        memeContainer.appendChild(memeDiv);

        // Clear form inputs
        memeForm.reset();
    });

    memeContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("meme")) {
            e.target.remove();
        }
    });
});
