// Mock database of rental listings
const mockListings = [
    // Abobo
    {
        id: 1,
        title: "Studio moderne à Abobo",
        type: "studio",
        commune: "Abobo",
        price: 85000,
        description: "Studio lumineux avec cuisine équipée et salle d'eau.",
        rooms: 0,
        published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau courante", "Électricité", "Balcon"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: false
    },
    {
        id: 2,
        title: "2 Pièces confortable Abobo",
        type: "2pieces",
        commune: "Abobo",
        price: 150000,
        description: "2 pièces spacieux, bien aéré, proche des transports.",
        rooms: 2,
        published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Cuisine", "Salle à manger", "Balcon", "Parking"],
        furnished: false,
        elevator: false,
        security: false,
        parking: true,
        aircon: false,
        internet: false
    },
    {
        id: 3,
        title: "1 Pièce Abobo - Prix abordable",
        type: "1piece",
        commune: "Abobo",
        price: 110000,
        description: "1 pièce idéale pour célibataire, quartier sûr.",
        rooms: 1,
        published: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        source: "Jumia Immo",
        link: "https://jumia.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Cuisine", "Toilettes indépendants"],
        furnished: false,
        elevator: false,
        security: true,
        parking: false,
        aircon: false,
        internet: false
    },
    {
        id: 4,
        title: "Studio neuf à Adjamé",
        type: "studio",
        commune: "Adjamé",
        price: 95000,
        description: "Studio avec finitions modernes, location immediate.",
        rooms: 0,
        published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Eau chaude", "Internet"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: true,
        internet: true
    },
    {
        id: 5,
        title: "2 Pièces luxe Adjamé",
        type: "2pieces",
        commune: "Adjamé",
        price: 200000,
        description: "2 pièces haut standing avec équipements premium.",
        rooms: 2,
        published: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Cuisine équipée", "Balcon", "Ascenseur"],
        furnished: true,
        elevator: true,
        security: true,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 6,
        title: "Studio Cocody premium",
        type: "studio",
        commune: "Cocody",
        price: 140000,
        description: "Studio dans quartier secure et prestigieux.",
        rooms: 0,
        published: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Sécurité 24/24", "Parking"],
        furnished: false,
        elevator: false,
        security: true,
        parking: true,
        aircon: true,
        internet: false
    },
    {
        id: 7,
        title: "2 Pièces Cocody - Quartier plaisant",
        type: "2pieces",
        commune: "Cocody",
        price: 250000,
        description: "2 pièces dans un immeuble sécurisé avec toutes commodités.",
        rooms: 2,
        published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        source: "Google Maps Business",
        link: "https://maps.google.com",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Ascenseur", "Parking", "Sécurité", "Piscine"],
        furnished: true,
        elevator: true,
        security: true,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 8,
        title: "3 Pièces Cocody",
        type: "3pieces",
        commune: "Cocody",
        price: 350000,
        description: "3 pièces spacieux, bien situé, quartier tranquille.",
        rooms: 3,
        published: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Cuisine", "Balcon", "Buanderie"],
        furnished: true,
        elevator: false,
        security: true,
        parking: true,
        aircon: true,
        internet: false
    },
    {
        id: 9,
        title: "1 Pièce Koumassi économique",
        type: "1piece",
        commune: "Koumassi",
        price: 75000,
        description: "1 pièce pour petit budget, quartier animé.",
        rooms: 1,
        published: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
        source: "Avito.ci",
        link: "https://avito.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: false
    },
    {
        id: 10,
        title: "2 Pièces Koumassi",
        type: "2pieces",
        commune: "Koumassi",
        price: 120000,
        description: "2 pièces bien aménagé, prix raisonnable.",
        rooms: 2,
        published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Cuisine", "Balcon", "Toilettes"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: true
    },
    {
        id: 11,
        title: "Studio Marcory vue mer",
        type: "studio",
        commune: "Marcory",
        price: 125000,
        description: "Studio avec vue sur lagune, emplacement privilégié.",
        rooms: 0,
        published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Balcon", "Vue lagune"],
        furnished: true,
        elevator: false,
        security: false,
        parking: true,
        aircon: true,
        internet: false
    },
    {
        id: 12,
        title: "2 Pièces Marcory standing",
        type: "2pieces",
        commune: "Marcory",
        price: 180000,
        description: "2 pièces meublé, standing moyen, très bien situé.",
        rooms: 2,
        published: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Meublé", "Clim", "Cuisinette"],
        furnished: true,
        elevator: false,
        security: true,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 13,
        title: "Studio Plateau centre-ville",
        type: "studio",
        commune: "Plateau",
        price: 175000,
        description: "Studio au coeur du centre d'affaires de Plateau.",
        rooms: 0,
        published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        source: "Google Business",
        link: "https://maps.google.com",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Accès ascenseur", "Sécurité"],
        furnished: false,
        elevator: true,
        security: true,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 14,
        title: "2 Pièces Plateau prestige",
        type: "2pieces",
        commune: "Plateau",
        price: 280000,
        description: "2 pièces dans immeuble prestige du Plateau.",
        rooms: 2,
        published: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Parking", "Ascenseur", "Sécurité"],
        furnished: true,
        elevator: true,
        security: true,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 15,
        title: "1 Pièce Port-Bouët accès aéroport",
        type: "1piece",
        commune: "Port-Bouët",
        price: 90000,
        description: "1 pièce proche de l'aéroport, quartier en développement.",
        rooms: 1,
        published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Parking", "Eau chaude"],
        furnished: false,
        elevator: false,
        security: false,
        parking: true,
        aircon: true,
        internet: false
    },
    {
        id: 16,
        title: "2 Pièces Port-Bouët",
        type: "2pieces",
        commune: "Port-Bouët",
        price: 140000,
        description: "2 pièces meublé, idéal pour expatriés.",
        rooms: 2,
        published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Meublé", "Clim", "Internet"],
        furnished: true,
        elevator: false,
        security: false,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 17,
        title: "Studio Treichville artiste",
        type: "studio",
        commune: "Treichville",
        price: 65000,
        description: "Studio parfait pour artiste, quartier culturel.",
        rooms: 0,
        published: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité", "Lumière naturelle"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: false
    },
    {
        id: 18,
        title: "2 Pièces Treichville animation",
        type: "2pieces",
        commune: "Treichville",
        price: 130000,
        description: "2 pièces dans zone commerçante animée.",
        rooms: 2,
        published: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        source: "Google Maps Business",
        link: "https://maps.google.com",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Balcon", "Commerce"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: true,
        internet: false
    },
    {
        id: 19,
        title: "Studio Yopougon proche marché",
        type: "studio",
        commune: "Yopougon",
        price: 70000,
        description: "Studio proche du grand marché de Yopougon.",
        rooms: 0,
        published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité", "Accès marché"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: false
    },
    {
        id: 20,
        title: "2 Pièces Yopougon résidentiel",
        type: "2pieces",
        commune: "Yopougon",
        price: 125000,
        description: "2 pièces zone résidentielle calme de Yopougon.",
        rooms: 2,
        published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Parking", "Sécurité"],
        furnished: false,
        elevator: false,
        security: true,
        parking: true,
        aircon: true,
        internet: false
    },
    {
        id: 21,
        title: "4 Pièces Yopougon luxe",
        type: "4pieces",
        commune: "Yopougon",
        price: 400000,
        description: "4 pièces villa standing avec jardin, hauteur sécurité.",
        rooms: 4,
        published: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000),
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Jardin", "Piscine", "Sécurité 24/24"],
        furnished: true,
        elevator: false,
        security: true,
        parking: true,
        aircon: true,
        internet: true
    },
    {
        id: 22,
        title: "Studio San Pédro port",
        type: "studio",
        commune: "San Pédro",
        price: 55000,
        description: "Studio proche du port, idéal pour marin.",
        rooms: 0,
        published: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: false
    },
    {
        id: 23,
        title: "2 Pièces Bingerville campagne",
        type: "2pieces",
        commune: "Bingerville",
        price: 100000,
        description: "2 pièces en environnement calme de Bingerville.",
        rooms: 2,
        published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Terrasse", "Jardin", "Tranquille"],
        furnished: false,
        elevator: false,
        security: false,
        parking: false,
        aircon: false,
        internet: false
    }
];

// State management
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let notificationSettings = JSON.parse(localStorage.getItem('notificationSettings')) || {
    newListings: true,
    priceDrops: true,
    matches: true
};

// GOOGLE DORKS GENERATOR SYSTEM
const googleDorksDatabase = {
    facebook: {
        name: "Facebook Marketplace",
        icon: "👍",
        baseUrl: "https://www.facebook.com/search/homes/",
        generator: (criteria) => `https://www.facebook.com/search/?q=location+${criteria.commune}+logement+${criteria.type}&t=page`
    },
    tiktok: {
        name: "TikTok Immobilier",
        icon: "🎵",
        baseUrl: "https://www.tiktok.com/search/video",
        generator: (criteria) => `https://www.tiktok.com/search?q=location%20${criteria.commune}%20${criteria.type}%20abidjan&t=video`
    },
    instagram: {
        name: "Instagram Immobilier",
        icon: "📷",
        baseUrl: "https://www.instagram.com/explore/tags/",
        generator: (criteria) => `https://www.instagram.com/explore/tags/location${criteria.commune}abidjan/?hl=fr`
    },
    google: {
        name: "Google Search",
        icon: "🔍",
        baseUrl: "https://www.google.com/search",
        generator: (criteria) => `https://www.google.com/search?q=logement+location+${criteria.commune}+abidjan+${criteria.type}+${criteria.minPrice}-${criteria.maxPrice}`
    },
    immobilierci: {
        name: "Immobilier.ci",
        icon: "🏢",
        baseUrl: "https://immobilier.ci",
        generator: (criteria) => `https://immobilier.ci/search?type=${criteria.type}&location=${criteria.commune}&minPrice=${criteria.minPrice}&maxPrice=${criteria.maxPrice}`
    },
    twitter: {
        name: "Twitter/X Immobilier",
        icon: "𝕏",
        baseUrl: "https://twitter.com/search",
        generator: (criteria) => `https://twitter.com/search?q=location%20${criteria.commune}%20logement%20abidjan&f=live`
    },
    whatsapp: {
        name: "WhatsApp Business",
        icon: "💬",
        baseUrl: "https://wa.me",
        generator: (criteria) => `https://wa.me/?text=Je%20cherche%20un%20logement%20${criteria.type}%20à%20${criteria.commune}%20Abidjan`
    },
    avito: {
        name: "Avito.ci",
        icon: "🛍️",
        baseUrl: "https://avito.ci",
        generator: (criteria) => `https://avito.ci/ci?q=logement+${criteria.commune}&ps=1`
    }
};

// Utility functions
function getDaysAgo(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function isRecentListing(date) {
    return getDaysAgo(date) < 30;
}

function formatPrice(price) {
    return new Intl.NumberFormat('fr-CI', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function getPropertyTypeDisplay(type) {
    const types = {
        'studio': '🏠 Studio',
        '1piece': '🏠 1 Pièce',
        '2pieces': '🏠 2 Pièces',
        '3pieces': '🏠 3 Pièces',
        '4pieces': '🏠 4 Pièces+'
    };
    return types[type] || type;
}

// GOOGLE DORKS FUNCTIONS
function generateGoogleDorks() {
    const propertyType = document.getElementById('propertyType').value || 'logement';
    const commune = document.getElementById('commune').value || 'Abidjan';
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || 1000000;

    const criteria = {
        type: propertyType,
        commune: commune,
        minPrice: minPrice,
        maxPrice: maxPrice
    };

    let dorksHTML = '';

    for (const [key, platform] of Object.entries(googleDorksDatabase)) {
        const searchUrl = platform.generator(criteria);
        dorksHTML += `
            <div class="dork-item">
                <div class="dork-info">
                    <span class="dork-icon">${platform.icon}</span>
                    <div class="dork-details">
                        <h4>${platform.name}</h4>
                        <p class="dork-criteria">📍 ${commune} • 🏠 ${propertyType} • 💰 ${minPrice}-${maxPrice} FCFA</p>
                    </div>
                </div>
                <a href="${searchUrl}" target="_blank" class="btn-small btn-view">🔗 Chercher</a>
            </div>
        `;
    }

    return dorksHTML;
}

function openDorksModal() {
    const modal = document.getElementById('dorksModal');
    const container = document.getElementById('dorksContainer');
    container.innerHTML = generateGoogleDorks();
    modal.classList.remove('hidden');
}

function closeDorksModal() {
    document.getElementById('dorksModal').classList.add('hidden');
}

// FAVORIS FUNCTIONS
function toggleFavorite(listingId) {
    const index = favorites.findIndex(fav => fav === listingId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(listingId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateResultsDisplay();
}

function isFavorite(listingId) {
    return favorites.includes(listingId);
}

function addToSearchHistory(query) {
    const searchEntry = {
        query,
        date: new Date().toISOString(),
        propertyType: document.getElementById('propertyType').value,
        commune: document.getElementById('commune').value,
        minPrice: document.getElementById('minPrice').value,
        maxPrice: document.getElementById('maxPrice').value
    };
    
    searchHistory.unshift(searchEntry);
    if (searchHistory.length > 10) searchHistory.pop();
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function createResultCard(listing) {
    const daysAgo = getDaysAgo(listing.published);
    const daysText = daysAgo === 0 ? "Aujourd'hui" : daysAgo === 1 ? "Hier" : `Il y a ${daysAgo} j`;
    const isFav = isFavorite(listing.id);

    return `
        <div class="result-card">
            <div class="favorite-badge" onclick="toggleFavorite(${listing.id})" title="Ajouter aux favoris">
                ${isFav ? '❤️' : '🤍'}
            </div>
            <div class="result-card-image">🏠</div>
            <div class="result-card-content">
                <h3 class="result-card-title">${listing.title}</h3>
                
                <div class="result-card-meta">
                    <span class="badge badge-price">${formatPrice(listing.price)}</span>
                    <span class="badge badge-location">📍 ${listing.commune}</span>
                    <span class="badge badge-date">📅 ${daysText}</span>
                </div>

                <p class="result-card-description">${listing.description}</p>

                <div class="result-card-details">
                    <div class="detail-item">
                        <span class="detail-icon">🔑</span>
                        <span>${getPropertyTypeDisplay(listing.type)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">🌐</span>
                        <span>${listing.source}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">📞</span>
                        <span>${listing.contact}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-icon">✅</span>
                        <span>${listing.amenities.length} aménagements</span>
                    </div>
                </div>

                <small style="color: var(--text-light); display: block; margin-bottom: 10px;">
                    Aménagements: ${listing.amenities.join(', ')}
                </small>

                <div class="result-card-footer">
                    <a href="${listing.link}" target="_blank" class="btn-small btn-view">
                        🔗 Voir l'annonce
                    </a>
                    <button class="btn-small btn-share" onclick="shareResult('${listing.title}', '${listing.commune}', '${formatPrice(listing.price)}')">  
                        📤 Partager
                    </button>
                </div>
            </div>
        </div>
    `;
}

function shareResult(title, commune, price) {
    const text = `Découvrez cette annonce: ${title} à ${commune} pour ${price}/mois via Housing Search App`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Housing Search App',
            text: text
        });
    } else {
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
}

function performSearch() {
    const propertyType = document.getElementById('propertyType').value;
    const commune = document.getElementById('commune').value;
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;
    
    const furnished = document.getElementById('furnished').checked;
    const elevator = document.getElementById('elevator').checked;
    const security = document.getElementById('security').checked;
    const parking = document.getElementById('parking').checked;
    const aircon = document.getElementById('aircon').checked;
    const internet = document.getElementById('internet').checked;

    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.classList.remove('hidden');

    setTimeout(() => {
        loadingSpinner.classList.add('hidden');

        let results = mockListings.filter(listing => {
            const matchesType = !propertyType || listing.type === propertyType;
            const matchesCommune = !commune || listing.commune === commune;
            const matchesPrice = listing.price >= minPrice && listing.price <= maxPrice;
            const isRecent = isRecentListing(listing.published);
            
            const matchesFurnished = !furnished || listing.furnished;
            const matchesElevator = !elevator || listing.elevator;
            const matchesSecurity = !security || listing.security;
            const matchesParking = !parking || listing.parking;
            const matchesAircon = !aircon || listing.aircon;
            const matchesInternet = !internet || listing.internet;

            return matchesType && matchesCommune && matchesPrice && isRecent &&
                   matchesFurnished && matchesElevator && matchesSecurity && 
                   matchesParking && matchesAircon && matchesInternet;
        });

        const sortBy = document.getElementById('sortBy').value;
        if (sortBy === 'recent') {
            results.sort((a, b) => b.published - a.published);
        } else if (sortBy === 'price-asc') {
            results.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            results.sort((a, b) => b.price - a.price);
        }

        addToSearchHistory(`${propertyType || 'Tous'} - ${commune || 'Toutes communes'}`);
        displayResults(results);
    }, 800);
}

function displayResults(results) {
    const container = document.getElementById('resultsContainer');

    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>😕 Aucun résultat ne correspond à votre recherche.</p>
                <p style="margin-top: 10px; font-size: 0.9em;">Essayez de modifier vos critères de recherche.</p>
                <p style="margin-top: 10px; font-size: 0.9em;">💡 Vous pouvez aussi utiliser <strong>Google Dorks</strong> pour élargir votre recherche sur d'autres plateformes</p>
            </div>
        `;
        return;
    }

    let html = `
        <div class="result-count">
            ✨ ${results.length} annonce(s) trouvée(s) (moins d'un mois)
        </div>
    `;

    results.forEach(listing => {
        html += createResultCard(listing);
    });

    container.innerHTML = html;
}

function updateResultsDisplay() {
    const container = document.getElementById('resultsContainer');
    const cards = container.querySelectorAll('.result-card');
    cards.forEach(card => {
        const listingId = parseInt(card.dataset.listingId);
        const badge = card.querySelector('.favorite-badge');
        if (badge && isFavorite(listingId)) {
            badge.textContent = '❤️';
        }
    });
}

function resetForm() {
    document.getElementById('propertyType').value = '';
    document.getElementById('commune').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('furnished').checked = false;
    document.getElementById('elevator').checked = false;
    document.getElementById('security').checked = false;
    document.getElementById('parking').checked = false;
    document.getElementById('aircon').checked = false;
    document.getElementById('internet').checked = false;

    const container = document.getElementById('resultsContainer');
    container.innerHTML = `
        <div class="no-results">
            <p>Veuillez effectuer une recherche pour voir les résultats</p>
        </div>
    `;
}

// MODAL FUNCTIONS
function openFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const favoritesList = document.getElementById('favoritesList');
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p style="color: var(--text-light);">Aucun favori pour le moment</p>';
    } else {
        let html = '';
        favorites.forEach(id => {
            const listing = mockListings.find(l => l.id === id);
            if (listing) {
                html += `
                    <div class="favorite-item">
                        <div class="favorite-item-info">
                            <div class="favorite-item-title">${listing.title}</div>
                            <div class="favorite-item-details">${listing.commune} - ${formatPrice(listing.price)}</div>
                        </div>
                        <button class="favorite-item-remove" onclick="toggleFavorite(${id}); openFavoritesModal();">Supprimer</button>
                    </div>
                `;
            }
        });
        favoritesList.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeFavoritesModal() {
    document.getElementById('favoritesModal').classList.add('hidden');
}

function openHistoryModal() {
    const modal = document.getElementById('historyModal');
    const historyList = document.getElementById('historyList');
    
    if (searchHistory.length === 0) {
        historyList.innerHTML = '<p style="color: var(--text-light);">Aucun historique</p>';
    } else {
        let html = '';
        searchHistory.forEach((entry, index) => {
            const date = new Date(entry.date);
            const dateStr = date.toLocaleDateString('fr-FR');
            html += `
                <div class="history-item">
                    <div class="history-item-info">
                        <div class="history-item-title">${entry.query}</div>
                        <div class="history-item-details">${dateStr}</div>
                    </div>
                    <button class="history-item-delete" onclick="deleteHistory(${index}); openHistoryModal();">Supprimer</button>
                </div>
            `;
        });
        historyList.innerHTML = html;
    }
    modal.classList.remove('hidden');
}

function closeHistoryModal() {
    document.getElementById('historyModal').classList.add('hidden');
}

function deleteHistory(index) {
    searchHistory.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}

function openNotificationsModal() {
    const modal = document.getElementById('notificationsModal');
    document.getElementById('notifyNewListings').checked = notificationSettings.newListings;
    document.getElementById('notifyPriceDrops').checked = notificationSettings.priceDrops;
    document.getElementById('notifyMatches').checked = notificationSettings.matches;
    modal.classList.remove('hidden');
}

function closeNotificationsModal() {
    document.getElementById('notificationsModal').classList.add('hidden');
}

function saveNotificationSettings() {
    notificationSettings = {
        newListings: document.getElementById('notifyNewListings').checked,
        priceDrops: document.getElementById('notifyPriceDrops').checked,
        matches: document.getElementById('notifyMatches').checked
    };
    localStorage.setItem('notificationSettings', JSON.stringify(notificationSettings));
    alert('Paramètres de notification enregistrés!');
    closeNotificationsModal();
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Initialize dark mode
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', performSearch);
document.getElementById('resetBtn').addEventListener('click', resetForm);
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
document.getElementById('favoritesBtn').addEventListener('click', openFavoritesModal);
document.getElementById('historyBtn').addEventListener('click', openHistoryModal);
document.getElementById('notificationsBtn').addEventListener('click', openNotificationsModal);
document.getElementById('dorksBtn').addEventListener('click', openDorksModal);
document.getElementById('advancedFiltersBtn').addEventListener('click', function() {
    document.getElementById('advancedFilters').classList.toggle('hidden');
});
document.getElementById('sortBy').addEventListener('change', () => {
    const container = document.getElementById('resultsContainer');
    if (container.children.length > 0 && !container.querySelector('.no-results')) {
        performSearch();
    }
});

document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.target.matches('textarea')) {
        performSearch();
    }
});