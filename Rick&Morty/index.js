// Fetching images from API (Rick and Morty)
const images = await fetch("https://rickandmortyapi.com/api/character");
const response = await images.json();
const RAMImages = response.results;

console.log(RAMImages);

// Fetching characters container element
const characters = document.getElementById("characterList");

// Filtering images with status 'alive'
const aliveRAMImages = RAMImages.filter( (img) => img.status === 'Alive' )

console.log( aliveRAMImages );

// Mapping images with new formatting
const newAliveImages = aliveRAMImages.map( (img) => {
    const { name, image, location, species, gender } = img;
    return { name, image, location, species, gender };
} );

console.log( newAliveImages );

// Render the image
const renderImage = (img) => {
    characters.innerHTML += `
    <li type="none">
        <div>
            <img src="${img.image}" alt="${img.name}" class="ramImgs"/>
        </div>
        <ul class="ramImgsInfo">
            <li>${img.name}</li>
            <li>${img.location.name}</li>
            <li>${img.species}</li>
            <li>${img.gender}</li>
        </ul>
    </li>
    `;
};

const renderALL = (allImages) => {
    for (const image of allImages) {
        renderImage(image);
    }
}

renderALL(newAliveImages);