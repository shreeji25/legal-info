// Legal database with comprehensive information
const legalDatabase = {
    // Traffic Laws
    "traffic signal": {
        title: "Traffic Signal Violation",
        article: "Section 119 of Motor Vehicles Act, 1988",
        description: "Violation of traffic signals is a serious offense under the Motor Vehicles Act. This includes jumping red lights, not stopping at stop signs, and disobeying traffic signals.",
        solution: "Penalties for traffic signal violation:\n1. First offense: Fine of ₹1,000\n2. Second offense: Fine of ₹2,000\n3. Third and subsequent offenses: Fine of ₹5,000\n4. License suspension for 3 months\n5. Community service for repeated violations",
        category: "Traffic Laws",
        relatedLaws: ["Motor Vehicles Act, 1988", "Central Motor Vehicles Rules, 1989"],
        importantPoints: "• Traffic signals are mandatory for all vehicles\n• Emergency vehicles are exempted\n• Red light violation is considered a serious offense\n• Camera-based evidence is admissible in court"
    },
    "speeding": {
        title: "Speeding Violation",
        article: "Section 112 of Motor Vehicles Act, 1988",
        description: "Exceeding the speed limit is a traffic violation that can result in serious accidents and penalties. Speed limits vary based on the type of road and vehicle.",
        solution: "Penalties for speeding:\n1. First offense: Fine of ₹1,000-2,000\n2. Second offense: Fine of ₹2,000-4,000\n3. Third offense: Fine of ₹4,000-8,000\n4. License suspension for 3 months\n5. Mandatory attendance in traffic safety classes",
        category: "Traffic Laws",
        relatedLaws: ["Motor Vehicles Act, 1988", "Central Motor Vehicles Rules, 1989"],
        importantPoints: "• Speed limits vary by vehicle type and road\n• School zones have lower speed limits\n• Speed guns and cameras are used for detection\n• Repeat offenders face stricter penalties"
    },
    "drunk driving": {
        title: "Drunk Driving",
        article: "Section 185 of Motor Vehicles Act, 1988",
        description: "Driving under the influence of alcohol or drugs is a serious criminal offense that endangers public safety.",
        solution: "Penalties for drunk driving:\n1. First offense: Fine of ₹10,000 and/or imprisonment up to 6 months\n2. Second offense: Fine of ₹15,000 and/or imprisonment up to 2 years\n3. License suspension for 6 months\n4. Mandatory alcohol/drug rehabilitation program",
        category: "Traffic Laws"
    },

    // Property Rights
    "property rights": {
        title: "Property Rights",
        article: "Article 300A of Indian Constitution",
        description: "The right to property is a constitutional right that protects individuals from arbitrary deprivation of their property.",
        solution: "If your property rights are violated:\n1. File a civil suit in the appropriate court\n2. Approach the District Magistrate\n3. Contact the State Human Rights Commission\n4. File a writ petition in the High Court\n5. Seek legal aid from property lawyers",
        category: "Property Rights"
    },

    // Criminal Law
    "theft": {
        title: "Theft",
        article: "Section 378 of Indian Penal Code",
        description: "Theft is defined as dishonestly taking any movable property out of the possession of any person without their consent.",
        solution: "Legal recourse for theft:\n1. File an FIR at the nearest police station\n2. Contact a criminal lawyer\n3. Gather evidence and witnesses\n4. File a criminal complaint in the Magistrate's court\n5. Seek compensation through civil court",
        category: "Criminal Law"
    },
    "murder": {
        title: "Murder",
        article: "Section 300 of Indian Penal Code",
        description: "Murder is defined as causing death with the intention of causing death or causing bodily injury likely to cause death.",
        solution: "Legal recourse for murder:\n1. Immediate police reporting\n2. Filing FIR\n3. Investigation by police\n4. Trial in Sessions Court\n5. Appeal in High Court if needed",
        category: "Criminal Law",
        relatedLaws: ["Indian Penal Code, 1860", "Code of Criminal Procedure, 1973"],
        importantPoints: "• Murder is a non-bailable offense\n• Punishment: Death penalty or life imprisonment\n• Burden of proof lies on prosecution\n• Self-defense is a valid defense"
    },
    "cybercrime": {
        title: "Cybercrime",
        article: "Information Technology Act, 2000",
        description: "Cybercrime includes various offenses committed using computers and the internet, such as hacking, online fraud, and cyberbullying.",
        solution: "Steps to handle cybercrime:\n1. Report to Cyber Crime Cell\n2. Preserve digital evidence\n3. File complaint with CERT-In\n4. Contact cyber law experts\n5. File case in cyber courts",
        category: "Criminal Law",
        relatedLaws: ["Information Technology Act, 2000", "Indian Penal Code, 1860"],
        importantPoints: "• Digital evidence is admissible\n• Jurisdiction can be complex\n• International cooperation may be needed\n• Special cyber courts handle cases"
    },

    // Civil Rights
    "right to education": {
        title: "Right to Education",
        article: "Article 21A",
        description: "The Right to Education Act (RTE) provides free and compulsory education to all children aged 6 to 14 years.",
        solution: "If denied right to education:\n1. File complaint with State Commission for Protection of Child Rights\n2. Approach District Education Officer\n3. File writ petition in High Court under Article 226\n4. Contact NGOs working in education sector\n5. Seek legal aid from education lawyers",
        category: "Civil Rights"
    },

    // Business Law
    "consumer rights": {
        title: "Consumer Rights",
        article: "Consumer Protection Act, 2019",
        description: "The Consumer Protection Act provides rights to consumers and mechanisms for redressal of consumer disputes.",
        solution: "For consumer complaints:\n1. File complaint in Consumer Forum\n2. Contact Consumer Helpline\n3. Approach State Consumer Commission\n4. File case in National Consumer Commission\n5. Seek assistance from consumer rights organizations",
        category: "Business Law"
    },

    // Family Law
    "divorce": {
        title: "Divorce Laws",
        article: "Hindu Marriage Act, 1955 / Special Marriage Act, 1954",
        description: "Divorce laws in India vary based on religion and personal laws. The process includes grounds for divorce and maintenance rights.",
        solution: "For divorce proceedings:\n1. Consult a family lawyer\n2. File petition in Family Court\n3. Attend counseling sessions\n4. Negotiate settlement terms\n5. File for maintenance if required",
        category: "Family Law"
    },
    "domestic violence": {
        title: "Domestic Violence",
        article: "Protection of Women from Domestic Violence Act, 2005",
        description: "The law provides protection to women from domestic violence, including physical, emotional, and economic abuse.",
        solution: "Steps to handle domestic violence:\n1. Contact women's helpline\n2. File complaint with Protection Officer\n3. Seek protection order\n4. File for maintenance\n5. Get counseling support",
        category: "Family Law",
        relatedLaws: ["Domestic Violence Act, 2005", "Indian Penal Code, 1860"],
        importantPoints: "• Protection orders available\n• Emergency protection possible\n• Maintenance rights included\n• Counseling services provided"
    },

    // Labor Law
    "minimum wage": {
        title: "Minimum Wage",
        article: "Minimum Wages Act, 1948",
        description: "The law ensures fair wages for workers and sets minimum wage rates for different types of work.",
        solution: "If minimum wage is not paid:\n1. File complaint with Labor Commissioner\n2. Contact trade unions\n3. Approach Labor Court\n4. File case in Industrial Tribunal\n5. Seek legal aid",
        category: "Labor Law",
        relatedLaws: ["Minimum Wages Act, 1948", "Payment of Wages Act, 1936"],
        importantPoints: "• Varies by state and occupation\n• Regular revision required\n• Overtime rates applicable\n• Equal pay for equal work"
    },

    // Environmental Law
    "environmental protection": {
        title: "Environmental Protection",
        article: "Environment Protection Act, 1986",
        description: "The law aims to protect and improve the environment, prevent pollution, and ensure sustainable development.",
        solution: "For environmental violations:\n1. Report to Pollution Control Board\n2. File public interest litigation\n3. Contact environmental NGOs\n4. Approach National Green Tribunal\n5. Seek environmental compensation",
        category: "Environmental Law",
        relatedLaws: ["Environment Protection Act, 1986", "Air Act, 1981", "Water Act, 1974"],
        importantPoints: "• Polluter pays principle\n• Environmental impact assessment\n• Public participation in decisions\n• Strict penalties for violations"
    },

    // Consumer Law
    "product liability": {
        title: "Product Liability",
        article: "Consumer Protection Act, 2019",
        description: "The law holds manufacturers and sellers responsible for defective products and provides compensation to consumers.",
        solution: "For defective products:\n1. Document the defect\n2. Contact manufacturer/seller\n3. File complaint in Consumer Forum\n4. Seek product testing\n5. Claim compensation",
        category: "Consumer Law",
        relatedLaws: ["Consumer Protection Act, 2019", "Sale of Goods Act, 1930"],
        importantPoints: "• Strict liability on manufacturers\n• Product testing available\n• Compensation for damages\n• Class action suits possible"
    },

    // Property Law
    "land acquisition": {
        title: "Land Acquisition",
        article: "Right to Fair Compensation and Transparency in Land Acquisition Act, 2013",
        description: "The law governs the process of acquiring private land for public purposes, ensuring fair compensation and rehabilitation.",
        solution: "If your land is being acquired:\n1. Verify acquisition notice\n2. Participate in social impact assessment\n3. Negotiate compensation\n4. File objections if needed\n5. Seek legal assistance",
        category: "Property Rights",
        relatedLaws: ["Land Acquisition Act, 2013", "Constitution of India"],
        importantPoints: "• Consent required for private projects\n• Social impact assessment mandatory\n• Fair compensation guaranteed\n• Rehabilitation and resettlement provided"
    }
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsSection = document.getElementById('resultsSection');
const categoryCards = document.querySelectorAll('.category-card');
const searchTags = document.querySelectorAll('.search-tag');

// Create a search index for faster searching
const searchIndex = {};
Object.entries(legalDatabase).forEach(([key, value]) => {
    const searchableText = `${key} ${value.title} ${value.description} ${value.category} ${value.article} ${value.importantPoints || ''}`.toLowerCase();
    const words = searchableText.split(/\s+/);
    words.forEach(word => {
        if (!searchIndex[word]) {
            searchIndex[word] = new Set();
        }
        searchIndex[word].add(key);
    });
});

// Optimized search function with index
function searchLegalInfo(query) {
    query = query.toLowerCase();
    const queryWords = query.split(/\s+/);
    const resultSet = new Set();
    
    // Search using the index
    queryWords.forEach(word => {
        if (searchIndex[word]) {
            searchIndex[word].forEach(key => resultSet.add(key));
        }
    });

    // Convert Set to array of results
    return Array.from(resultSet).map(key => legalDatabase[key]);
}

// Debounce function to limit API calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized display results with lazy loading
function displayResults(results) {
    resultsSection.innerHTML = '';

    if (results.length === 0) {
        resultsSection.innerHTML = `
            <div class="result-card">
                <h2>No Results Found</h2>
                <p>Please try different keywords or check your spelling.</p>
                <div class="suggestions">
                    <h3>Try searching for:</h3>
                    <ul>
                        <li>Traffic violations</li>
                        <li>Property rights</li>
                        <li>Criminal offenses</li>
                        <li>Civil rights</li>
                        <li>Business laws</li>
                        <li>Family matters</li>
                        <li>Environmental laws</li>
                        <li>Labor rights</li>
                    </ul>
                </div>
            </div>
        `;
        return;
    }

    // Create a document fragment for better performance
    const fragment = document.createDocumentFragment();

    results.forEach(result => {
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        resultCard.innerHTML = `
            <h2>${result.title}</h2>
            <div class="article">Legal Reference: ${result.article}</div>
            <div class="category">Category: ${result.category}</div>
            <div class="description">${result.description}</div>
            ${result.relatedLaws ? `
                <div class="related-laws">
                    <h3>Related Laws:</h3>
                    <ul>
                        ${result.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}
            ${result.importantPoints ? `
                <div class="important-points">
                    <h3>Important Points:</h3>
                    <p>${result.importantPoints}</p>
                </div>
            ` : ''}
            <div class="solution">
                <h3>Legal Solutions and Penalties:</h3>
                <p>${result.solution}</p>
            </div>
            <div class="action-buttons">
                <button class="action-btn" onclick="showMoreDetails('${result.title}')">
                    <i class="fas fa-info-circle"></i> More Details
                </button>
                <button class="action-btn" onclick="printResult('${result.title}')">
                    <i class="fas fa-print"></i> Print
                </button>
            </div>
        `;
        fragment.appendChild(resultCard);
    });

    resultsSection.appendChild(fragment);
}

// Optimized event listeners with debouncing
const debouncedSearch = debounce((query) => {
    if (query) {
        showLoading();
        const results = searchLegalInfo(query);
        displayResults(results);
    }
}, 300);

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `results.html?q=${encodeURIComponent(query)}`;
    }
});

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    debouncedSearch(query);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `results.html?q=${encodeURIComponent(query)}`;
        }
    }
});

// Optimized category card click handlers
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('h3').textContent.trim();
        window.location.href = `results.html?q=${encodeURIComponent(category)}`;
    });
});

// Optimized search tag click handlers
searchTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const query = this.textContent.trim();
        window.location.href = `results.html?q=${encodeURIComponent(query)}`;
    });
});

// Optimized loading animation
function showLoading() {
    if (!resultsSection.querySelector('.loading')) {
        resultsSection.innerHTML = `
            <div class="result-card">
                <div class="loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Searching legal database...</p>
                </div>
            </div>
        `;
    }
}

// Optimized error handling
function showError(message) {
    resultsSection.innerHTML = `
        <div class="result-card">
            <h2>Error</h2>
            <p>${message}</p>
        </div>
    `;
}

// Cache for modal content
const modalCache = new Map();

// Optimized showMoreDetails function with caching
function showMoreDetails(title) {
    const result = Object.values(legalDatabase).find(item => item.title === title);
    if (result) {
        // Check cache first
        if (modalCache.has(title)) {
            showModal(modalCache.get(title));
            return;
        }

        // Create modal content
        const modalContent = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${result.title}</h2>
                <div class="modal-body">
                    <div class="article">Legal Reference: ${result.article}</div>
                    <div class="description">${result.description}</div>
                    ${result.relatedLaws ? `
                        <div class="related-laws">
                            <h3>Related Laws:</h3>
                            <ul>
                                ${result.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    ${result.importantPoints ? `
                        <div class="important-points">
                            <h3>Important Points:</h3>
                            <p>${result.importantPoints}</p>
                        </div>
                    ` : ''}
                    <div class="solution">
                        <h3>Legal Solutions and Penalties:</h3>
                        <p>${result.solution}</p>
                    </div>
                </div>
            </div>
        `;

        // Cache the content
        modalCache.set(title, modalContent);
        showModal(modalContent);
    }
}

// Separate function to show modal
function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = content;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = () => modal.remove();

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.remove();
        }
    };
}

function printResult(title) {
    const result = Object.values(legalDatabase).find(item => item.title === title);
    if (result) {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>${result.title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        h1, h2, h3 { color: #2c3e50; }
                        .section { margin-bottom: 20px; }
                    </style>
                </head>
                <body>
                    <h1>${result.title}</h1>
                    <div class="section">
                        <h2>Legal Reference</h2>
                        <p>${result.article}</p>
                    </div>
                    <div class="section">
                        <h2>Description</h2>
                        <p>${result.description}</p>
                    </div>
                    <div class="section">
                        <h2>Related Laws</h2>
                        <ul>
                            ${result.relatedLaws.map(law => `<li>${law}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="section">
                        <h2>Important Points</h2>
                        <p>${result.importantPoints}</p>
                    </div>
                    <div class="section">
                        <h2>Legal Solutions and Penalties</h2>
                        <p>${result.solution}</p>
                    </div>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchTags = document.querySelectorAll('.search-tag');

    // Handle search button click
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `results.html?q=${encodeURIComponent(query)}`;
        }
    });

    // Handle Enter key press
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `results.html?q=${encodeURIComponent(query)}`;
            }
        }
    });

    // Handle search tag clicks
    searchTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const query = this.textContent.trim();
            window.location.href = `results.html?q=${encodeURIComponent(query)}`;
        });
    });

    // Handle category card clicks
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.querySelector('h3').textContent.trim();
            window.location.href = `results.html?q=${encodeURIComponent(category)}`;
        });
    });
}); 
