// Handle the login form submission
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else if (username === 'testuser' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'profile.html'; // Redirect to profile page on success
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

// Handle the sign-up form submission
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    const picture = document.getElementById('picture').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const city = document.getElementById('city').value.trim();
    const address = document.getElementById('address').value.trim();

    if (picture === '' || name === '' || email === '' || password === '' || confirmPassword === '' || city === '' || address === '') {
        alert('Please fill in all fields.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Sign-up successful!');
        window.location.href = 'profile.html'; // Redirect to profile page on success
    }
});

// Handle the profile update form submission
document.getElementById('profileForm')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from refreshing

    const picture = document.getElementById('picture').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const city = document.getElementById('city').value.trim();
    const address = document.getElementById('address').value.trim();

    if (picture === '' || name === '' || email === '' || city === '' || address === '') {
        alert('Please fill in all required fields.');
    } else if (password !== '' && password !== confirmPassword) {
        alert('Passwords do not match.');
    } else {
        alert('Profile updated successfully!');
    }
});

// Handle the logout functionality
document.getElementById('logoutButton')?.addEventListener('click', function () {
    window.location.href = 'logout.html'; // Redirect to logout confirmation
});

// Handle the logout confirmation
document.getElementById('logoutYes')?.addEventListener('click', function () {
    alert('Logged out successfully!');
    window.location.href = 'login.html'; // Redirect to login page on logout
});

document.getElementById('logoutNo')?.addEventListener('click', function () {
    window.location.href = 'profile.html'; // Go back to profile page if no
});


// Sample data for demonstration
const businessesData = {
    food: [
        { name: "Habibi Restaurant", address: "123 Chato Chowk.", phone: "123-456-7890", description: "Authentic Mardan Cuisine", category: "food" },
        { name: "Chinese Bistro", address: "456 Chargano Chowk.", phone: "987-654-3210", description: "Delicious Mardan Dishes", category: "food" },
    ],
    healthcare: [
        { name: "City Clinic", address: "789 Clinic Ave.", phone: "555-555-5555", description: "General Healthcare", category: "healthcare" },
        { name: "Local Hospital", address: "159 Hospital Blvd.", phone: "444-444-4444", description: "Emergency Services", category: "healthcare" },
    ],
    hotels: [
        { name: "Grand Hotel", address: "321 Hotel St.", phone: "666-666-6666", description: "Luxury Accommodation", category: "hotels" },
    ],
    education: [
        { name: "City University", address: "753 University Dr.", phone: "222-222-2222", description: "Higher Education", category: "education" },
    ]
};

// Login functionality
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication check
    if (username === 'testuser' && password === 'password123') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials');
    }
});

// Populate category screen with business data
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.href.includes('category.html')) {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        document.getElementById('categoryTitle').innerText = category.charAt(0).toUpperCase() + category.slice(1);
        
        const businessList = document.getElementById('businessList');
        businessesData[category]?.forEach(business => {
            const businessItem = document.createElement('div');
            businessItem.className = 'business-item';
            businessItem.innerHTML = `
                <h3>${business.name}</h3>
                <p>${business.address}</p>
                <p>${business.description}</p>
                <a href="business-details.html" class="button">View Details</a>
            `;
            businessList.appendChild(businessItem);
        });
    }

    // Populate business details screen
    if (window.location.href.includes('business-details.html')) {
        const businessName = 'Desi Restaurant'; // For demonstration purposes
        const business = businessesData.food.find(b => b.name === businessName);
        
        if (business) {
            document.getElementById('businessName').innerText = business.name;
            document.getElementById('businessAddress').querySelector('span').innerText = business.address;
            document.getElementById('businessPhone').querySelector('span').innerText = business.phone;
            document.getElementById('businessDescription').querySelector('span').innerText = business.description;
        }
    }
});

// Review submission
document.getElementById('reviewForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const reviewText = document.getElementById('reviewText').value;
    const reviewsList = document.getElementById('reviewsList');
    
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    reviewItem.innerText = reviewText;
    reviewsList.appendChild(reviewItem);
    
    document.getElementById('reviewText').value = '';
});

// Logout button functionality
document.getElementById('logoutButton')?.addEventListener('click', () => {
    window.location.href = 'login.html';
});
