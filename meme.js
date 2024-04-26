document.addEventListener("DOMContentLoaded", function () {
    const memeForm = document.getElementById("meme-form");
    const memeContainer = document.getElementById("meme-container");

    memeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const imageUrl = document.getElementById("image-url").value;
        const topText = document.getElementById("top-text").value;
        const bottomText = document.getElementById("bottom-text").value;

        // Create a new meme div
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

        // Create delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            memeDiv.remove();
        });

        // Append elements to meme div
        memeDiv.appendChild(image);
        memeDiv.appendChild(topTextElement);
        memeDiv.appendChild(bottomTextElement);
        memeDiv.appendChild(deleteButton);

        // Add meme to meme container
        memeContainer.appendChild(memeDiv);

        // Clear form inputs
        memeForm.reset();
    });
});
