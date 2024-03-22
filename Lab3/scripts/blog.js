document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const API_KEY = '43005745-3573de11a551317b615684397';
    const PIXABAY_URL = `https://pixabay.com/api/?key=${API_KEY}&q=alien+invasion&image_type=photo&per_page=20`;

    // Fetching images from Pixabay
    fetch(PIXABAY_URL)
        .then(response => response.json())
        .then(data => {
            const images = data.hits;
            // Fetching posts from JSONPlaceholder
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    posts.slice(0, 20).forEach((post, index) => {
                        const image = images[index % images.length].webformatURL; 
                        const postElement = `
                            <div class="card mb-3" style="flex-direction: row;">
                                <img src="${image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text">${post.body}</p>
                                </div>
                            </div>
                        `;
                        postsContainer.innerHTML += postElement;
                    });
                })
                .catch(error => console.error('Error fetching posts:', error));
        })
        .catch(error => console.error('Error fetching images:', error));
});
