const authorSpace = document.querySelector('.author-space');
const tagSpace = document.querySelector('.tag-space');
const quoteSpace = document.querySelector('.quote-space');
const regroupButton = document.querySelector('.regroup-button');
const linkButton = document.querySelector('.link-button');

// Add new elements to the quote-section
const authorElement  = document.createElement('h2');
const quoteElement = document.createElement('p');

const apiUrl = 'https://api.quotable.io/random';

authorSpace.appendChild(authorElement);
quoteSpace.appendChild(quoteElement);


const realizateFetch  = () => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        authorElement.textContent = data.author;
        quoteElement.textContent = `"${data.content}"`;
        
        // Clean container before adding new tags
        tagSpace.innerHTML = '';

        for (let i = 0; i < data.tags.length; i++) {
            const nuevoTagElement = document.createElement('h3');
            nuevoTagElement.textContent = data.tags[i];
            tagSpace.appendChild(nuevoTagElement);
        }

        console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

const copyFuction = () => {
    const textCopy = quoteElement.textContent
    navigator.clipboard.writeText(textCopy)
}

realizateFetch();

regroupButton.addEventListener('click', () => {
    realizateFetch();
});

linkButton.addEventListener('click', () => {
    copyFuction();
});
