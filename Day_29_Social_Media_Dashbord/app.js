// Main app container
const app = document.getElementById('app');

// User authentication
function login(username, password) {
    // In a real app, you'd validate credentials against a backend
    localStorage.setItem('user', JSON.stringify({ username }));
    renderDashboard();
}

// Post creation
function createPost(text, imageUrl) {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    const user = JSON.parse(localStorage.getItem('user'));
    posts.push({
        id: Date.now(),
        text,
        imageUrl,
        likes: 0,
        comments: [],
        username: user.username,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('posts', JSON.stringify(posts));
    renderPosts();
}

// Render dashboard
function renderDashboard() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        app.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h1 class="text-2xl font-bold text-nightBlue mb-4">Welcome, ${user.username}!</h1>
                <div class="mb-4">
                    <input id="postText" class="w-full p-2 border rounded" placeholder="What's on your mind?">
                </div>
                <div class="mb-4">
                    <input id="postImage" class="w-full p-2 border rounded" placeholder="Image URL (optional)">
                </div>
                <button onclick="handlePostSubmit()" class="bg-skyBlue text-white px-4 py-2 rounded hover:bg-oceanBlue transition">Post</button>
            </div>
            <div id="posts"></div>
        `;
        renderPosts();
    } else {
        renderLoginForm();
    }
}

// Render login form
function renderLoginForm() {
    app.innerHTML = `
        <div class="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-10">
            <h2 class="text-2xl font-bold text-nightBlue mb-4">Login</h2>
            <input id="username" class="w-full p-2 border rounded mb-4" placeholder="Username">
            <input id="password" type="password" class="w-full p-2 border rounded mb-4" placeholder="Password">
            <button onclick="handleLogin()" class="bg-skyBlue text-white px-4 py-2 rounded hover:bg-oceanBlue transition">Login</button>
        </div>
    `;
}

// Handle login form submission
function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    login(username, password);
}

// Handle post form submission
function handlePostSubmit() {
    const text = document.getElementById('postText').value;
    const imageUrl = document.getElementById('postImage').value;
    createPost(text, imageUrl);
    document.getElementById('postText').value = '';
    document.getElementById('postImage').value = '';
}

// Render posts
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    postsContainer.innerHTML = posts.map(post => `
        <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
                <span class="font-bold text-oceanBlue">${post.username}</span>
                <span class="text-sm text-gray-500">${new Date(post.timestamp).toLocaleString()}</span>
            </div>
            <p class="mb-4">${post.text}</p>
            ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post image" class="w-full h-64 object-cover rounded mb-4">` : ''}
            <div class="flex items-center justify-between">
                <button onclick="likePost(${post.id})" class="text-skyBlue hover:text-oceanBlue transition">
                    Like (${post.likes})
                </button>
                <button onclick="showCommentForm(${post.id})" class="text-skyBlue hover:text-oceanBlue transition">
                    Comment (${post.comments.length})
                </button>
            </div>
            <div id="commentForm${post.id}" class="hidden mt-4">
                <input id="commentText${post.id}" class="w-full p-2 border rounded mb-2" placeholder="Add a comment...">
                <button onclick="addComment(${post.id})" class="bg-skyBlue text-white px-4 py-2 rounded hover:bg-oceanBlue transition">Submit</button>
            </div>
            <div class="mt-4">
                ${post.comments.map(comment => `
                    <div class="bg-gray-100 p-2 rounded mb-2">
                        <span class="font-bold">${comment.username}:</span> ${comment.text}
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Like post
function likePost(postId) {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    }
}

// Show comment form
function showCommentForm(postId) {
    const form = document.getElementById(`commentForm${postId}`);
    form.classList.toggle('hidden');
}

// Add comment
function addComment(postId) {
    const posts = JSON.parse(localStorage.getItem('posts'));
    const post = posts.find(p => p.id === postId);
    const user = JSON.parse(localStorage.getItem('user'));
    const commentText = document.getElementById(`commentText${postId}`).value;
    if (post && commentText) {
        post.comments.push({ username: user.username, text: commentText });
        localStorage.setItem('posts', JSON.stringify(posts));
        renderPosts();
    }
}

// Initial render
renderDashboard();