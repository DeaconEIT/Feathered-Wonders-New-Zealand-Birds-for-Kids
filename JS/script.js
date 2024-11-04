// Function to show popup on email submission
function submitEmail() {
    alert("Email was submitted.");
}

// Array of bird data including image URLs, alt text, and captions
const birds = [
    { imgSrc: "https://cdn.pixabay.com/photo/2022/10/18/17/56/bird-7530845_1280.jpg", alt: "Kea", caption: "Kea" },
    { imgSrc: "https://cdn.pixabay.com/photo/2024/04/21/04/17/tui-8709809_1280.jpg", alt: "Tui", caption: "Tui" },
    { imgSrc: "https://images.unsplash.com/photo-1692490157248-85c4dd57af19?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Takahe", caption: "Takahē" },
    { imgSrc: "https://images.unsplash.com/photo-1710909424228-26093a9d5c16?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Fantail", caption: "Fantail" },
    { imgSrc: "https://images.unsplash.com/photo-1692490157266-127ed20c27bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Tieke", caption: "Tīeke" },
    { imgSrc: "https://cdn.pixabay.com/photo/2017/03/15/18/23/ralle-2147030_1280.jpg", alt: "Weka", caption: "Weka" },
    { imgSrc: "https://images.unsplash.com/photo-1668487945046-44eb4bd9df78?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Kereru", caption: "Kererū" },
    { imgSrc: "https://images.unsplash.com/photo-1679869639325-a819a16629d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Morepork", caption: "Morepork" },
    { imgSrc: "https://cdn.pixabay.com/photo/2022/07/26/19/07/kingfisher-7346545_1280.jpg", alt: "Kingfisher", caption: "Kingfisher" },
    { imgSrc: "https://cdn.pixabay.com/photo/2022/10/28/18/07/penguin-7553626_1280.jpg", alt: "Blue Penguin", caption: "Blue Penguin" },
    { imgSrc: "https://cdn.pixabay.com/photo/2017/09/07/22/09/kokako-2726905_960_720.jpg", alt: "Kokako", caption: "Kōkako" },
    { imgSrc: "https://cdn.pixabay.com/photo/2016/06/04/05/28/bird-1435039_1280.jpg", alt: "Pukeko", caption: "Pukeko" }
];

// Generate gallery images
function generateGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    birds.forEach(bird => {
        const birdCard = document.createElement('div');
        birdCard.classList.add('bird-card');

        const birdImage = document.createElement('img');
        birdImage.src = bird.imgSrc;
        birdImage.alt = bird.alt;
        birdImage.onclick = () => openModal(bird.imgSrc, bird.alt, bird.caption);
        birdCard.appendChild(birdImage);

        const birdCaption = document.createElement('p');
        birdCaption.innerText = bird.caption;
        birdCard.appendChild(birdCaption);

        galleryContainer.appendChild(birdCard);
    });
}

// Open modal function
function openModal(imgSrc, altText, captionText) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('caption');

    modal.style.display = 'block';
    modalImg.src = imgSrc;
    modalImg.alt = altText;
    caption.innerText = captionText;
}

// Close modal function
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Filter gallery based on search input
function filterGallery() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const birdCards = document.querySelectorAll('.bird-card');

    birdCards.forEach(card => {
        const caption = card.querySelector('p').innerText.toLowerCase();
        const altText = card.querySelector('img').alt.toLowerCase();
        if (caption.includes(keyword) || altText.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize gallery on page load
window.onload = generateGallery;