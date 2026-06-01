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
        published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau courante", "Électricité", "Balcon"]
    },
    {
        id: 2,
        title: "2 Pièces confortable Abobo",
        type: "2pieces",
        commune: "Abobo",
        price: 150000,
        description: "2 pièces spacieux, bien aéré, proche des transports.",
        rooms: 2,
        published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Cuisine", "Salle à manger", "Balcon", "Parking"]
    },
    {
        id: 3,
        title: "1 Pièce Abobo - Prix abordable",
        type: "1piece",
        commune: "Abobo",
        price: 110000,
        description: "1 pièce idéale pour célibataire, quartier sûr.",
        rooms: 1,
        published: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), // 8 days ago
        source: "Jumia Immo",
        link: "https://jumia.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Cuisine", "Toilettes indépendants"]
    },
    // Adjamé
    {
        id: 4,
        title: "Studio neuf à Adjamé",
        type: "studio",
        commune: "Adjamé",
        price: 95000,
        description: "Studio avec finitions modernes, location immediate.",
        rooms: 0,
        published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Eau chaude", "Internet"]
    },
    {
        id: 5,
        title: "2 Pièces luxe Adjamé",
        type: "2pieces",
        commune: "Adjamé",
        price: 200000,
        description: "2 pièces haut standing avec équipements premium.",
        rooms: 2,
        published: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Cuisine équipée", "Balcon", "Ascenseur"]
    },
    // Cocody
    {
        id: 6,
        title: "Studio Cocody premium",
        type: "studio",
        commune: "Cocody",
        price: 140000,
        description: "Studio dans quartier secure et prestigieux.",
        rooms: 0,
        published: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Sécurité 24/24", "Parking"]
    },
    {
        id: 7,
        title: "2 Pièces Cocody - Quartier plaisant",
        type: "2pieces",
        commune: "Cocody",
        price: 250000,
        description: "2 pièces dans un immeuble sécurisé avec toutes commodités.",
        rooms: 2,
        published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        source: "Google Maps Business",
        link: "https://maps.google.com",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Ascenseur", "Parking", "Sécurité", "Piscine"]
    },
    {
        id: 8,
        title: "3 Pièces Cocody",
        type: "3pieces",
        commune: "Cocody",
        price: 350000,
        description: "3 pièces spacieux, bien situé, quartier tranquille.",
        rooms: 3,
        published: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Cuisine", "Balcon", "Buanderie"]
    },
    // Koumassi
    {
        id: 9,
        title: "1 Pièce Koumassi économique",
        type: "1piece",
        commune: "Koumassi",
        price: 75000,
        description: "1 pièce pour petit budget, quartier animé.",
        rooms: 1,
        published: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000), // 9 days ago
        source: "Avito.ci",
        link: "https://avito.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité"]
    },
    {
        id: 10,
        title: "2 Pièces Koumassi",
        type: "2pieces",
        commune: "Koumassi",
        price: 120000,
        description: "2 pièces bien aménagé, prix raisonnable.",
        rooms: 2,
        published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Cuisine", "Balcon", "Toilettes"]
    },
    // Marcory
    {
        id: 11,
        title: "Studio Marcory vue mer",
        type: "studio",
        commune: "Marcory",
        price: 125000,
        description: "Studio avec vue sur lagune, emplacement privilégié.",
        rooms: 0,
        published: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Balcon", "Vue lagune"]
    },
    {
        id: 12,
        title: "2 Pièces Marcory standing",
        type: "2pieces",
        commune: "Marcory",
        price: 180000,
        description: "2 pièces meublé, standing moyen, très bien situé.",
        rooms: 2,
        published: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Meublé", "Clim", "Cuisinette"]
    },
    // Plateau
    {
        id: 13,
        title: "Studio Plateau centre-ville",
        type: "studio",
        commune: "Plateau",
        price: 175000,
        description: "Studio au coeur du centre d'affaires de Plateau.",
        rooms: 0,
        published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        source: "Google Business",
        link: "https://maps.google.com",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Accès ascenseur", "Sécurité"]
    },
    {
        id: 14,
        title: "2 Pièces Plateau prestige",
        type: "2pieces",
        commune: "Plateau",
        price: 280000,
        description: "2 pièces dans immeuble prestige du Plateau.",
        rooms: 2,
        published: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Parking", "Ascenseur", "Sécurité"]
    },
    // Port-Bouët
    {
        id: 15,
        title: "1 Pièce Port-Bouët accès aéroport",
        type: "1piece",
        commune: "Port-Bouët",
        price: 90000,
        description: "1 pièce proche de l'aéroport, quartier en développement.",
        rooms: 1,
        published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Parking", "Eau chaude"]
    },
    {
        id: 16,
        title: "2 Pièces Port-Bouët",
        type: "2pieces",
        commune: "Port-Bouët",
        price: 140000,
        description: "2 pièces meublé, idéal pour expatriés.",
        rooms: 2,
        published: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Meublé", "Clim", "Internet"]
    },
    // Treichville
    {
        id: 17,
        title: "Studio Treichville artiste",
        type: "studio",
        commune: "Treichville",
        price: 65000,
        description: "Studio parfait pour artiste, quartier culturel.",
        rooms: 0,
        published: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), // 8 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité", "Lumière naturelle"]
    },
    {
        id: 18,
        title: "2 Pièces Treichville animation",
        type: "2pieces",
        commune: "Treichville",
        price: 130000,
        description: "2 pièces dans zone commerçante animée.",
        rooms: 2,
        published: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
        source: "Google Maps Business",
        link: "https://maps.google.com",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Balcon", "Commerce"]
    },
    // Yopougon
    {
        id: 19,
        title: "Studio Yopougon proche marché",
        type: "studio",
        commune: "Yopougon",
        price: 70000,
        description: "Studio proche du grand marché de Yopougon.",
        rooms: 0,
        published: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité", "Accès marché"]
    },
    {
        id: 20,
        title: "2 Pièces Yopougon résidentiel",
        type: "2pieces",
        commune: "Yopougon",
        price: 125000,
        description: "2 pièces zone résidentielle calme de Yopougon.",
        rooms: 2,
        published: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Parking", "Sécurité"]
    },
    {
        id: 21,
        title: "4 Pièces Yopougon luxe",
        type: "4pieces",
        commune: "Yopougon",
        price: 400000,
        description: "4 pièces villa standing avec jardin, hauteur sécurité.",
        rooms: 4,
        published: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000), // 9 days ago
        source: "Immobilier.ci",
        link: "https://immobilier.ci",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Clim", "Jardin", "Piscine", "Sécurité 24/24"]
    },
    // San Pédro
    {
        id: 22,
        title: "Studio San Pédro port",
        type: "studio",
        commune: "San Pédro",
        price: 55000,
        description: "Studio proche du port, idéal pour marin.",
        rooms: 0,
        published: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
        source: "Facebook",
        link: "https://www.facebook.com/search/housing",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Eau", "Électricité"]
    },
    // Bingerville
    {
        id: 23,
        title: "2 Pièces Bingerville campagne",
        type: "2pieces",
        commune: "Bingerville",
        price: 100000,
        description: "2 pièces en environnement calme de Bingerville.",
        rooms: 2,
        published: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        source: "TikTok Real Estate",
        link: "https://www.tiktok.com/search",
        contact: "+225 07 XX XX XX XX",
        amenities: ["Terrasse", "Jardin", "Tranquille"]
    },
];

// Utility function to get days ago
function getDaysAgo(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// Utility function to check if listing is less than 1 month old
function isRecentListing(date) {
    return getDaysAgo(date) < 30;
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('fr-CI', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Get property type display
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

// Create result card HTML
function createResultCard(listing) {
    const daysAgo = getDaysAgo(listing.published);
    const daysText = daysAgo === 0 ? "Aujourd'hui" : daysAgo === 1 ? "Hier" : `Il y a ${daysAgo} j`;

    return `
        <div class="result-card">
            <div class="result-card-image">
                🏠
            </div>
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

// Share result
function shareResult(title, commune, price) {
    const text = `Découvrez cette annonce: ${title} à ${commune} pour ${price}/mois via Housing Search App`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Housing Search App',
            text: text
        });
    } else {
        // Fallback
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
}

// Search function
function performSearch() {
    const propertyType = document.getElementById('propertyType').value;
    const commune = document.getElementById('commune').value;
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;

    // Show loading spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.classList.remove('hidden');

    // Simulate search delay
    setTimeout(() => {
        loadingSpinner.classList.add('hidden');

        // Filter results
        let results = mockListings.filter(listing => {
            const matchesType = !propertyType || listing.type === propertyType;
            const matchesCommune = !commune || listing.commune === commune;
            const matchesPrice = listing.price >= minPrice && listing.price <= maxPrice;
            const isRecent = isRecentListing(listing.published);

            return matchesType && matchesCommune && matchesPrice && isRecent;
        });

        // Sort by recent first
        results.sort((a, b) => b.published - a.published);

        // Display results
        displayResults(results);
    }, 800);
}

// Display results
function displayResults(results) {
    const container = document.getElementById('resultsContainer');

    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>😕 Aucun résultat ne correspond à votre recherche.</p>
                <p style="margin-top: 10px; font-size: 0.9em;">Essayez de modifier vos critères de recherche.</p>
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

// Reset form
function resetForm() {
    document.getElementById('propertyType').value = '';
    document.getElementById('commune').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';

    const container = document.getElementById('resultsContainer');
    container.innerHTML = `
        <div class="no-results">
            <p>Veuillez effectuer une recherche pour voir les résultats</p>
        </div>
    `;
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', performSearch);
document.getElementById('resetBtn').addEventListener('click', resetForm);

// Allow Enter key to search
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.target.matches('textarea')) {
        performSearch();
    }
});