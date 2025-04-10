<template>
    <div v-if="!isAuthenticated" class="fixed inset-0 flex items-center justify-center" :style="{ backgroundColor: 'hsl(210, 40%, 98%)' }">
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
                        class="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-700"
                        required
                    >
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                        id="password"
                        type="password" 
                        v-model="password" 
                        class="w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-700"
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
    <div v-else>
        <!-- Navigation Bar -->
        <nav class="bg-white border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 flex items-center">
                            <div class="w-3 h-3 bg-purple-400 rounded-full animate-pulse mr-2"></div>
                            <span class="text-gray-900 text-xl font-bold">Gambling.com Group AI ReviewBuilder</span>
                        </div>
                    </div>
                    <div>
                        <a href="#" class="text-gray-600 hover:text-gray-900 font-medium text-sm">Documentation</a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="min-h-screen flex items-start justify-center relative pt-8" :style="{ backgroundColor: 'hsl(210, 40%, 98%)' }">
            <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
                <!-- Title and Subtitle -->
                <div class="mb-8">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">AI Rating Generator</h1>
                    <p class="text-lg text-gray-600">Create realistic user reviews using AI services</p>
                </div>

                <!-- AI Service Configuration Card -->
                <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg mb-8">
                    <div class="p-6">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">AI Service Configuration</h2>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-800 mb-2">AI Service</label>
                                <select 
                                    v-model="formParams.model"
                                    class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 pr-8 focus:border-blue-500 focus:ring-blue-500 appearance-none placeholder-gray-500"
                                >
                                    <option v-for="option in modelOptions" :key="option.value" :value="option.value">
                                        {{ option.label }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-800 mb-2">Language</label>
                                <select 
                                    v-model="selectedLanguage"
                                    class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 pr-8 focus:border-blue-500 focus:ring-blue-500 appearance-none placeholder-gray-500"
                                >
                                    <option v-for="lang in languageOptions" :key="lang.value" :value="lang.value">
                                        {{ lang.label }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brand Configuration Card -->
                <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg mb-8">
                    <div class="p-6 pb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">Brand Configuration</h2>
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-800 mb-2">Product Type</label>
                                    <select 
                                        v-model="params.product"
                                        class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 pr-8 focus:border-blue-500 focus:ring-blue-500 appearance-none placeholder-gray-500"
                                    >
                                        <option value="" disabled>Select product type</option>
                                        <option value="casino">Casino</option>
                                        <option value="betting">Betting</option>
                                    </select>
                                    <p v-if="validationErrors.product" class="mt-1 text-sm text-red-600">{{ validationErrors.product }}</p>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-800 mb-2">Brand Name</label>
                                    <input 
                                        type="text" 
                                        v-model="params.brand_name"
                                        class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500"
                                        placeholder="Enter brand name"
                                    >
                                    <p v-if="validationErrors.brand_name" class="mt-1 text-sm text-red-600">{{ validationErrors.brand_name }}</p>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-800 mb-2">Brand Review URL</label>
                                <input 
                                    type="text" 
                                    v-model="params.url"
                                    class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500"
                                    placeholder="@https://www.gambling.com/uk/online-casinos/pub-casino"
                                >
                                <p v-if="validationErrors.url" class="mt-1 text-sm text-red-600">{{ validationErrors.url }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Review Settings Card -->
                <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg mb-8">
                    <div class="p-6 pb-8">
                        <h2 class="text-xl font-semibold text-gray-900 mb-6">Review Settings</h2>
                        <div class="space-y-6">
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-800 mb-2">Comment Length (chars)</label>
                                    <input 
                                        type="number" 
                                        v-model="params.character_max"
                                        max="200"
                                        class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500"
                                        placeholder="Enter max characters"
                                    >
                                    <p v-if="validationErrors.character_max" class="mt-1 text-sm text-red-600">{{ validationErrors.character_max }}</p>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-800 mb-2">Sentences in Comment</label>
                                    <input 
                                        type="number" 
                                        v-model="params.statements"
                                        class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500"
                                        placeholder="Enter number of sentences"
                                    >
                                    <p v-if="validationErrors.statements" class="mt-1 text-sm text-red-600">{{ validationErrors.statements }}</p>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-800 mb-2">Misspellings Count</label>
                                    <input 
                                        type="number" 
                                        v-model="params.misspellings"
                                        class="block w-full rounded-2xl border-gray-300 bg-gray-100 text-base px-3 py-2 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-500"
                                        placeholder="Enter misspellings count"
                                    >
                                    <p v-if="validationErrors.misspellings" class="mt-1 text-sm text-red-600">{{ validationErrors.misspellings }}</p>
                                </div>
                            </div>
                            <div class="mt-6 pb-4">
                                <div class="flex items-center justify-between mb-2">
                                    <label class="block text-sm font-medium text-gray-800">Rating Score</label>
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {{ params.score }}/10
                                    </span>
                                </div>
                                <div 
                                    class="relative w-full h-4 bg-blue-100 rounded-full cursor-pointer group"
                                    @mousemove="handleMouseMove"
                                    @click="handleClick"
                                    ref="progressBar"
                                >
                                    <div 
                                        class="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                                        :style="{ width: `${(params.score * 10)}%`, backgroundColor: 'hsl(239, 84%, 67%)' }"
                                    >
                                        <div 
                                            class="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 transition-transform duration-200 transform group-hover:scale-110 group-hover:shadow-lg"
                                            :style="{ borderColor: 'hsl(239, 84%, 67%)' }"
                                        ></div>
                                    </div>
                                    <div class="absolute inset-0 flex items-center justify-between px-2 pointer-events-none opacity-0">
                                        <template v-for="n in 10" :key="n">
                                            <div class="h-4 w-0.5 bg-gray-400"></div>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Generate Rating Button -->
                <div class="flex justify-center mb-8">
                    <button 
                        @click="generateReview"
                        :disabled="isLoading"
                        class="inline-flex items-center px-6 py-3 text-base font-medium rounded-xl text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        :style="{ backgroundColor: 'hsl(239, 84%, 67%)' }"
                    >
                        <template v-if="isLoading">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </template>
                        <template v-else>
                            Generate Rating
                        </template>
                    </button>
                </div>

                <!-- Fading Horizontal Line -->
                <div class="flex items-center justify-center mb-8">
                    <div class="w-full max-w-4xl mx-auto flex items-center">
                        <div class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                    </div>
                </div>

                <div v-if="generatedReviews.length" class="generated-reviews">
                    <article class="p-8">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-2xl font-bold text-gray-900">Generated Reviews</h1>
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

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p class="text-center text-sm text-gray-600">© 2025 Gambling.com Group AI ReviewBuilder. All rights reserved.</p>
            </div>
        </footer>
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
            generatedReviews: [],
            isLoading: false,
            apiError: null,
            params: {
                key: '1q2w3e4r',
                product: '',
                brand_name: '',
                url: '',
                score: '7',
                character_max: '200',
                statements: '1',
                model: 'claude',
                misspellings: '0'
            },
            validationErrors: {
                product: '',
                brand_name: '',
                url: '',
                character_max: '',
                statements: '',
                misspellings: ''
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
            ],
            selectedLanguage: 'EN',
            languageOptions: [
                { value: 'EN', label: 'English' },
                { value: 'GR', label: 'Greek' },
                { value: 'DE', label: 'German' },
                { value: 'ES', label: 'Spanish' }
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
        async generateReview() {
            // Reset validation errors
            this.validationErrors = {
                product: '',
                brand_name: '',
                url: '',
                character_max: '',
                statements: '',
                misspellings: ''
            };

            let hasErrors = false;

            // Validate required fields
            if (!this.params.product) {
                this.validationErrors.product = 'Please select a product type';
                hasErrors = true;
            }
            if (!this.params.brand_name) {
                this.validationErrors.brand_name = 'Please enter a brand name';
                hasErrors = true;
            }
            if (!this.params.url) {
                this.validationErrors.url = 'Please enter a brand review URL';
                hasErrors = true;
            }
            if (!this.params.character_max) {
                this.validationErrors.character_max = 'Please enter maximum characters';
                hasErrors = true;
            }
            if (!this.params.statements) {
                this.validationErrors.statements = 'Please enter number of sentences';
                hasErrors = true;
            }
            if (!this.params.misspellings) {
                this.validationErrors.misspellings = 'Please enter misspellings count';
                hasErrors = true;
            }

            if (hasErrors) {
                return;
            }

            this.isLoading = true;
            this.apiError = null;
            
            try {
                const queryParams = new URLSearchParams({
                    key: this.params.key,
                    product: this.params.product,
                    brand_name: this.params.brand_name,
                    url: this.params.url,
                    score: this.params.score,
                    character_max: this.params.character_max,
                    statements: this.params.statements,
                    model: this.formParams.model,
                    misspellings: this.params.misspellings,
                    language: this.selectedLanguage
                });

                const response = await fetch(`${this.apiBaseUrl}/ratings/rating-generator2?${queryParams}`);
                
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data = await response.json();
                
                if (data.message === "SUCCESS") {
                    this.generatedReviews.push({
                        data: data.data.rating[9].answer,
                        showDetails: false,
                        rating: data.data.rating,
                        username: data.data.username,
                        joinDate: this.getRandomJoinDate(),
                        botColor: this.getRandomColor()
                    });
                } else {
                    throw new Error(data.message || 'Failed to generate review');
                }
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
                model: this.formParams.model,
                misspellings: this.params.misspellings
            };
            this.showSettingsModal = false;
        },
        handleMouseMove(event) {
            if (event.buttons === 1) { // Only update if mouse button is pressed
                this.updateScoreFromMousePosition(event);
            }
        },
        handleClick(event) {
            this.updateScoreFromMousePosition(event);
        },
        updateScoreFromMousePosition(event) {
            const rect = this.$refs.progressBar.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const width = rect.width;
            let percentage = (x / width) * 100;
            percentage = Math.max(0, Math.min(100, percentage));
            // Calculate score as a whole number between 1 and 10
            let score = Math.round(percentage / 10);
            score = Math.max(1, Math.min(10, score));
            this.params.score = score.toString();
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

select {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
    background-position: right 0.75rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
}
</style> 