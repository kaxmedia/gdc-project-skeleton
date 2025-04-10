<template>
    <div v-if="!isAuthenticated" class="fixed inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="max-w-md w-full mx-auto p-6 bg-white/80 backdrop-blur-lg rounded-lg shadow-lg border border-gray-200 relative z-10">
            <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Authentication Required</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                    <input 
                        id="username"
                        type="text" 
                        v-model="username" 
                        class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                        required
                    >
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                        id="password"
                        type="password" 
                        v-model="password" 
                        class="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900"
                        required
                    >
                </div>
                <div v-if="error" class="text-red-600 text-sm">{{ error }}</div>
                <button 
                    type="submit" 
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
                >
                    Sign In
                </button>
            </form>
        </div>
    </div>
    <div v-else class="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-start justify-center relative pt-8">
        <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
            <div class="flex justify-between items-center mb-12">
                <a href="https://www.gambling.com/"><img src="https://objects.kaxmedia.com/auto/o/192896/abed7dd555.svg" alt="Gambling.com" class="max-w-[200px]"></a>
                <div class="flex items-center space-x-4">
                    <button 
                        @click="showSettingsModal = true"
                        class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        Settings
                    </button>
                    <button 
                        @click="generateReview"
                        :disabled="isLoading"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span v-if="!isLoading">Ask For Review</span>
                        <span v-else class="flex items-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </span>
                    </button>
                </div>
            </div>
            <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg">
                <article class="p-8">
                    <div class="flex justify-between items-center mb-6">
                        <h1 class="text-2xl font-bold text-gray-900">GGPoker Review</h1>
                        <!-- <a href="https://www.gambling.com/uk/poker-sites/gg-poker" class="text-sm font-medium text-blue-600 hover:underline" target="_blank">Read all reviews</a> -->
                    </div>
                    <div v-for="(review, index) in generatedReviews" :key="index" class="bg-white/90 rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center">
                                <!-- <div class="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-blue-800 font-semibold">{{ index + 1 }}</span>
                                </div> -->
                                <div class="flex items-center mb-4">
                                    <svg :fill="review.botColor" viewBox="0 0 32.00 32.00" id="icon" xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mr-2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>chat-bot</title><path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z"></path><path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z"></path><path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z"></path><path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="fill-none" width="32" height="32"></rect></g></svg>
                                    <div class="font-medium text-gray-900">
                                        <p>{{ review.username }}<time :datetime="review.joinDate.toISOString()" class="block text-sm text-gray-600">Joined on {{ review.joinDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}</time></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div @click="() => review.showDetails = !review.showDetails" class="flex items-center mb-1 space-x-1 rtl:space-x-reverse cursor-pointer">
                            <template v-for="n in getRatingStars(review).full" :key="'full-'+n">
                                <svg class="w-4 h-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            </template>
                            <template v-if="getRatingStars(review).partial">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                                    <defs>
                                        <linearGradient :id="'partialFill-'+index">
                                            <stop :offset="`${getRatingStars(review).partial * 10}%`" stop-color="#FACC15"/>
                                            <stop :offset="`${getRatingStars(review).partial * 10}%`" stop-color="#E5E7EB"/>
                                        </linearGradient>
                                    </defs>
                                    <path :fill="'url(#partialFill-'+index+')'" d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            </template>
                            <template v-for="n in getRatingStars(review).empty" :key="'empty-'+n">
                                <svg class="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                            </template>
                            <h3 class="ms-2 text-sm font-semibold text-gray-900">{{ review.showDetails ? 'Click to hide detailed review!' : 'Click to see detailed review!' }}</h3>
                        </div>

                        <div v-if="review.showDetails" class="mt-4">
                            <div class="flex items-center mb-5">
                                <p class="bg-blue-50 text-blue-700 text-sm font-semibold inline-flex items-center p-1.5 rounded-sm">{{ getTotalScore(review) }}</p>
                                <p class="ms-2 font-medium text-gray-900">{{ getRatingText(review) }}</p>
                            </div>
                            <div class="gap-8 sm:grid sm:grid-cols-2">
                                <div>
                                    <dl v-for="[category, data] in getFirstColumnData(review)" :key="category" class="mb-4">
                                        <dt class="text-base font-semibold text-gray-900 mb-2">{{ data.query }}</dt>
                                        <dd class="flex items-center">
                                            <div class="w-full bg-gray-200 rounded-sm h-2.5 me-2">
                                                <div :class="getProgressBarColor(data.answer)" class="h-2.5 rounded-sm transition-colors duration-300" :style="{ width: `${calculateWidth(data)}%` }"></div>
                                            </div>
                                            <span class="text-sm font-semibold text-gray-900 min-w-[3rem]">{{ data.answer }}</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div>
                                    <dl v-for="[category, data] in getSecondColumnData(review)" :key="category" class="mb-4">
                                        <dt class="text-base font-semibold text-gray-900 mb-2">{{ data.query }}</dt>
                                        <dd class="flex items-center">
                                            <div class="w-full bg-gray-200 rounded-sm h-2.5 me-2">
                                                <div :class="getProgressBarColor(data.answer)" class="h-2.5 rounded-sm transition-colors duration-300" :style="{ width: `${calculateWidth(data)}%` }"></div>
                                            </div>
                                            <span class="text-sm font-semibold text-gray-900 min-w-[3rem]">{{ data.answer }}</span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <footer class="mb-5 text-sm text-gray-600"><p>Reviewed on <time :datetime="new Date().toISOString()">{{ new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</time></p></footer>
                        <p class="mb-2 text-gray-700">{{ review.data }}</p>
                    </div>
                </article>
            </div>

            <!-- Settings Modal -->
            <div v-if="showSettingsModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-medium text-gray-900">Review Generator Settings</h3>
                        <button @click="showSettingsModal = false" class="text-gray-400 hover:text-gray-500">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <form @submit.prevent="saveSettings" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Score (1-10)</label>
                            <input 
                                type="number" 
                                v-model="formParams.score" 
                                min="1" 
                                max="10"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            >
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Character Max</label>
                            <input 
                                type="number" 
                                v-model="formParams.character_max" 
                                min="50"
                                max="200"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            >
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Statements</label>
                            <input 
                                type="number" 
                                v-model="formParams.statements" 
                                min="1"
                                max="5"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            >
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Model</label>
                            <select 
                                v-model="formParams.model"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            >
                                <option v-for="option in modelOptions" :key="option.value" :value="option.value">
                                    {{ option.label }}
                                </option>
                            </select>
                        </div>
                        <div class="flex justify-end space-x-3 mt-6">
                            <button 
                                type="button"
                                @click="showSettingsModal = false"
                                class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    data() {
        return {
            username: '',
            password: '',
            error: '',
            isAuthenticated: false,
            showReviewDetails: false,
            authUsername: import.meta.env.VITE_AUTH_USERNAME,
            authPassword: import.meta.env.VITE_AUTH_PASSWORD,
            apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
            reviewData: {
                message: "SUCCESS",
                data: {
                    rating: {
                        "1": {
                            query: "Welcome Offer",
                            answer: 5
                        },
                        "2": {
                            query: "Cash Games",
                            answer: 4
                        },
                        "3": {
                            query: "Tournaments",
                            answer: 5
                        },
                        "4": {
                            query: "Liquidity",
                            answer: 5
                        },
                        "5": {
                            query: "Loyalty/Cashback",
                            answer: 4
                        },
                        "6": {
                            query: "Software Usability",
                            answer: 5
                        },
                        "7": {
                            query: "Payment Options",
                            answer: 4
                        },
                        "8": {
                            query: "Overall Poker Site Rating",
                            answer: 5
                        },
                        "9": {
                            query: "Share your thoughts with our community:",
                            answer: "GGPoker's MTT schedule is simply *chef's kiss*! Fish everywhere at micro stakes; I've crushed WSOP events without breaking a sweat. Interface is slick AF but depositing via Skrill sometimes glitches. Still my go-to grind spot."
                        }
                    },
                    username: 'SpinKing77'
                }
            },
            generatedReviews: [],
            isLoading: false,
            apiError: null,
            params: {
                key: '1q2w3e4r',
                product: 'poker',
                brand_name: 'GGPoker',
                url: 'https://www.gambling.com/uk/poker-sites/gg-poker',
                score: '7',
                character_max: '200',
                statements: '1',
                model: 'claude'
            },
            showSettingsModal: false,
            formParams: {
                score: '7',
                character_max: '200',
                statements: '1',
                model: 'claude'
            },
            modelOptions: [
                { value: 'claude', label: 'Claude' },
                { value: 'openai', label: 'OpenAI' }
            ]
        }
    },
    mounted() {
        this.checkAuth();
        // Initialize form params with current values
        this.formParams = {
            ...this.formParams,
            ...this.params
        };
        // Push initial review data
        if (this.reviewData.message === "SUCCESS") {
            this.generatedReviews.push({
                data: this.reviewData.data.rating[9].answer,
                showDetails: false,
                rating: this.reviewData.data.rating,
                username: this.reviewData.data.username,
                joinDate: this.getRandomJoinDate(),
                botColor: this.getRandomColor()
            });
        }
    },
    methods: {
        checkAuth() {
            const token = localStorage.getItem('auth_token');
            const timestamp = localStorage.getItem('auth_timestamp');
            
            if (!token || !timestamp) {
                this.isAuthenticated = false;
                return;
            }

            const now = new Date().getTime();
            const tokenAge = now - parseInt(timestamp);
            const maxAge = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

            if (tokenAge >= maxAge) {
                this.isAuthenticated = false;
                return;
            }

            this.isAuthenticated = true;
        },
        handleSubmit() {
            if (this.username === this.authUsername && this.password === this.authPassword) {
                localStorage.setItem('auth_token', 'authenticated');
                localStorage.setItem('auth_timestamp', new Date().getTime().toString());
                this.isAuthenticated = true;
                this.error = '';
            } else {
                this.error = 'Invalid username or password';
            }
        },
        toggleReviewDetails() {
            this.showReviewDetails = !this.showReviewDetails;
        },
        calculateWidth(data) {
            // Direct percentage calculation: 1 = 20%, 2 = 40%, 3 = 60%, 4 = 80%, 5 = 100%
            return (data.answer * 20);
        },
        getProgressBarColor(score) {
            return 'bg-yellow-400'; // Always return yellow color
        },
        getRandomJoinDate() {
            const now = new Date();
            const fiveYearsAgo = new Date(now.getFullYear() - 5, now.getMonth(), now.getDate());
            const randomTimestamp = fiveYearsAgo.getTime() + Math.random() * (now.getTime() - fiveYearsAgo.getTime());
            return new Date(randomTimestamp);
        },
        getRandomColor() {
            // Array of pleasant, muted colors
            const colors = [
                '#4F46E5', // Indigo
                '#7C3AED', // Purple
                '#EC4899', // Pink
                '#10B981', // Emerald
                '#3B82F6', // Blue
                '#F59E0B', // Amber
                '#6366F1', // Violet
                '#8B5CF6', // Purple
                '#06B6D4', // Cyan
                '#059669'  // Green
            ];
            return colors[Math.floor(Math.random() * colors.length)];
        },
        async generateReview(params = {}) {
            this.isLoading = true;
            this.apiError = null;
            
            try {
                const queryParams = new URLSearchParams({
                    ...this.params
                });

                const response = await fetch(`${this.apiBaseUrl}/ratings/rating-generator2?${queryParams}`);
                
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data = await response.json();
                this.generatedReviews.push({
                    data: data.data.rating[9].answer,
                    showDetails: false,
                    rating: data.data.rating,
                    username: data.data.username,
                    joinDate: this.getRandomJoinDate(),
                    botColor: this.getRandomColor()
                });
            } catch (error) {
                console.error('Error generating review:', error);
                this.apiError = error.message;
            } finally {
                this.isLoading = false;
            }
        },
        getRatingStars(review) {
            const score = parseFloat(this.getTotalScore(review));
            const fullStars = Math.floor(score);
            const decimal = score - fullStars;
            return {
                full: fullStars,
                partial: decimal * 10,
                empty: 5 - fullStars - (decimal > 0 ? 1 : 0)
            };
        },
        getTotalScore(review) {
            const ratings = review.rating;
            const validRatings = Object.values(ratings)
                .filter(data => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Poker Site Rating");
            const total = validRatings.reduce((sum, data) => sum + data.answer, 0);
            const count = validRatings.length;
            return (total / count).toFixed(1);
        },
        getRatingText(review) {
            const score = parseFloat(this.getTotalScore(review));
            if (score >= 4.5) return 'Excellent';
            if (score >= 4) return 'Very Good';
            if (score >= 3.5) return 'Good';
            if (score >= 3) return 'Fair';
            if (score >= 2.5) return 'Poor';
            return 'Very Poor';
        },
        getFirstColumnData(review) {
            const ratings = review.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Poker Site Rating")
                .slice(0, 4);
        },
        getSecondColumnData(review) {
            const ratings = review.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Poker Site Rating")
                .slice(4);
        },
        saveSettings() {
            // Update the params object with form values
            this.params = {
                ...this.params,
                score: this.formParams.score,
                character_max: this.formParams.character_max,
                statements: this.formParams.statements,
                model: this.formParams.model
            };
            this.showSettingsModal = false;
        }
    },
    computed: {
        firstColumnData() {
            const ratings = this.reviewData.data.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Poker Site Rating")
                .slice(0, 4);
        },
        secondColumnData() {
            const ratings = this.reviewData.data.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Poker Site Rating")
                .slice(4);
        },
        totalScore() {
            const ratings = this.reviewData.data.rating;
            // Filter out community thoughts and overall rating, then calculate average
            const validRatings = Object.values(ratings)
                .filter(data => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Poker Site Rating");
            const total = validRatings.reduce((sum, data) => sum + data.answer, 0);
            const count = validRatings.length;
            return (total / count).toFixed(1);
        },
        ratingStars() {
            const score = parseFloat(this.totalScore);
            const fullStars = Math.floor(score);
            const decimal = score - fullStars;
            return {
                full: fullStars,
                partial: decimal * 10,
                empty: 5 - fullStars - (decimal > 0 ? 1 : 0)
            };
        },
        ratingText() {
            const score = parseFloat(this.totalScore);
            if (score >= 4.5) return 'Excellent';
            if (score >= 4) return 'Very Good';
            if (score >= 3.5) return 'Good';
            if (score >= 3) return 'Fair';
            if (score >= 2.5) return 'Poor';
            return 'Very Poor';
        },
        reviewText() {
            const ratings = this.reviewData.data.rating;
            const review = ratings[9].answer;
            return review;
        }
    }
}
</script>

<style>
@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.bg-gradient-to-br {
    background-size: 200% 200%;
    animation: gradientAnimation 15s ease infinite;
}

.bg-grid-pattern {
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
    background-size: 20px 20px;
}
</style> 