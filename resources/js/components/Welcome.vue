<template>
    <div v-if="!isAuthenticated" class="fixed inset-0 flex items-center justify-center" style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;">
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
                        class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-700"
                        required
                    >
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                        id="password"
                        type="password" 
                        v-model="password" 
                        class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-700"
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
                            <span class="rounded-full bg-[#9B87F5]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8333 1.66675L3.41163 10.0784C3.3094 10.1999 3.24399 10.348 3.22308 10.5053C3.20217 10.6627 3.22664 10.8227 3.29361 10.9667C3.36059 11.1106 3.46727 11.2324 3.60111 11.3177C3.73496 11.4031 3.89039 11.4484 4.04913 11.4484H8.3333L7.49997 18.1151L14.9216 9.70341C15.0239 9.58197 15.0893 9.43386 15.1102 9.27651C15.1311 9.11915 15.1066 8.95909 15.0397 8.81517C14.9727 8.67125 14.866 8.54945 14.7322 8.46411C14.5983 8.37876 14.4429 8.33342 14.2841 8.33341H11.6666L12.5 1.66675H10.8333Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </span>
                            <span class="text-gray-900 text-base leading-7 font-semibold ml-2">Gambling.com Group AI ReviewBuilder</span>
                        </div>
                    </div>
                    <div>
                        <a 
                            href="https://gdcgroup.atlassian.net/wiki/spaces/GDCC/pages/5541822623/API+for+UGC+ratings+using+AI" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="text-gray-600 hover:text-gray-900 font-normal text-sm">Documentation</a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="min-h-screen flex items-start justify-center relative pt-8" style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;">
            <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 relative z-10">
               

                <!-- Main Content Grid -->
                <div class="grid grid-cols-12 gap-6">
                    <!-- Left Column - Configuration Cards -->
                    
                    <div class="col-span-8 space-y-6">
                        <div class="">
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">AI Rating Generator</h1>
                        <p class="text-base text-gray-600">Create realistic user reviews using AI services</p>
                       </div>
                        <!-- AI Service Configuration Card -->
                        <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg">
                            <div class="p-4">
                                <h2 class="text-lg font-semibold text-gray-900 mb-6">AI Service Configuration</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">AI Service</label>
                                        <select 
                                            v-model="formParams.model"
                                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                            style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                        >
                                            <option v-for="option in modelOptions" :key="option.value" :value="option.value">
                                                {{ option.label }}
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Language</label>
                                        <select 
                                            v-model="selectedLanguage"
                                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                            style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
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
                        <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg">
                            <div class="p-4">
                                <h2 class="text-lg font-semibold text-gray-900 mb-6">Brand Configuration</h2>
                                <div class="space-y-6">
                                    <div class="flex gap-6">
                                        <div class="flex-1">
                                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Product Type</label>
                                            <select 
                                                v-model="params.product"
                                                class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                                style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                            >
                                                <option value="" disabled>Select product type</option>
                                                <option value="casino">Casino</option>
                                                <option value="betting">Betting</option>
                                            </select>
                                            <p v-if="validationErrors.product" class="mt-1 text-sm text-red-600">{{ validationErrors.product }}</p>
                                        </div>
                                        <div class="flex-1">
                                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Brand Name</label>
                                            <input 
                                                type="text" 
                                                v-model="params.brand_name"
                                                placeholder="Enter brand name"
                                                class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                                style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                            >
                                            <p v-if="validationErrors.brand_name" class="mt-1 text-sm text-red-600">{{ validationErrors.brand_name }}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Brand Review URL</label>
                                        <input 
                                            type="text" 
                                            v-model="params.url"
                                            placeholder="Enter brand review URL"
                                            class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                            style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                        >
                                        <p v-if="validationErrors.url" class="mt-1 text-sm text-red-600">{{ validationErrors.url }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Review Settings Card -->
                        <div class="bg-white/80 backdrop-blur-lg overflow-hidden shadow-lg sm:rounded-lg">
                            <div class="p-4">
                                <h2 class="text-lg font-semibold text-gray-900 mb-6">Review Settings</h2>
                                <div class="space-y-6">
                                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div>
                                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Comment Length (chars)</label>
                                            <input 
                                                type="number" 
                                                v-model="params.character_max"
                                                placeholder="Enter max characters"
                                                class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                                style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                            >
                                            <p v-if="validationErrors.character_max" class="mt-1 text-sm text-red-600">{{ validationErrors.character_max }}</p>
                                        </div>
                                        <div>
                                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Sentences in Comment</label>
                                            <input 
                                                type="number" 
                                                v-model="params.statements"
                                                placeholder="Enter number of sentences"
                                                class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                                style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                            >
                                            <p v-if="validationErrors.statements" class="mt-1 text-sm text-red-600">{{ validationErrors.statements }}</p>
                                        </div>
                                        <div>
                                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Misspellings Count</label>
                                            <input 
                                                type="number" 
                                                v-model="params.misspellings"
                                                placeholder="Enter number of misspellings"
                                                class="w-full px-3 py-2 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                                style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;"
                                            >
                                            <p v-if="validationErrors.misspellings" class="mt-1 text-sm text-red-600">{{ validationErrors.misspellings }}</p>
                                        </div>
                                    </div>
                                    <div class="mt-6 pb-4">
                                        <div class="flex items-center justify-between mb-2">
                                            <label class="block text-sm font-medium text-gray-800">Rating Score</label>
                                            <span class="inline-flex items-center px-2 rounded-full text-xs leading-[14px] font-medium text-grey-200 border">
                                                {{ params.score }}/10
                                            </span>
                                        </div>
                                        <div 
                                            class="relative w-full h-2 rounded-full cursor-pointer group"
                                            @mousemove="handleMouseMove"
                                            @click="handleClick"
                                            ref="progressBar"
                                            style="background: #059ED1"
                                        >
                                            <div 
                                                class="absolute top-0 left-0 h-full rounded-full transition-all duration-200"
                                                :style="{ width: `${(params.score * 10)}%`, backgroundColor: 'hsl(239, 84%, 67%)' }"
                                            >
                                                <div 
                                                    class="absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-2 transition-transform duration-200 transform group-hover:scale-110 group-hover:shadow-lg"
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
                        <div class="flex justify-center mt-8">
                            <button 
                                @click="generateReview"
                                :disabled="isLoading"
                                class="inline-flex items-center justify-center w-[234px] h-[48px] pt-[11.55px] pr-10 pb-[12.44px] pl-10 gap-[8px] rounded-[14px] text-base font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                    <span class="flex items-center justify-center">
                                        Generate Rating
                                        <span class="ml-2"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_66_3121)">
                                            <path d="M8.33 15.1168C12.0119 15.1168 14.9967 12.132 14.9967 8.45011C14.9967 4.76822 12.0119 1.78345 8.33 1.78345C4.6481 1.78345 1.66333 4.76822 1.66333 8.45011C1.66333 12.132 4.6481 15.1168 8.33 15.1168Z" stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.32996 12.4501C10.5391 12.4501 12.33 10.6592 12.33 8.45007C12.33 6.24093 10.5391 4.45007 8.32996 4.45007C6.12082 4.45007 4.32996 6.24093 4.32996 8.45007C4.32996 10.6592 6.12082 12.4501 8.32996 12.4501Z" stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.32959 9.78272C9.06579 9.78272 9.6626 9.18591 9.6626 8.44971C9.6626 7.71351 9.06579 7.1167 8.32959 7.1167C7.59339 7.1167 6.99658 7.71351 6.99658 8.44971C6.99658 9.18591 7.59339 9.78272 8.32959 9.78272Z" stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_66_3121">
                                            <rect width="16" height="16" fill="white" transform="translate(0.329956 0.450073)"/>
                                            </clipPath>
                                            </defs>
                                        </svg></span>
                                    </span>
                                </template>
                            </button>
                        </div>

                        <!-- Fading Horizontal Line -->
                        <div class="flex items-center justify-center">
                            <div class="w-full max-w-4xl mx-auto flex items-center">
                                <div class="flex-grow h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column - Reviewer Persona Content -->
                    <div class="col-span-4 overflow-hidden shadow-lg sm:rounded-lg border-2 border-gray-200 bg-white h-fit" style="background: linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), linear-gradient(0deg, #F8FAFC 0%, #F8FAFC 100%), #FFF;">
                        <div class="px-4 my-4">
                            <div class="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49999C6.61593 12.5 5.76809 12.8512 5.14297 13.4763C4.51785 14.1014 4.16666 14.9493 4.16666 15.8333V17.5" stroke="#0F1729" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z" stroke="#0F1729" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span class="text-xl font-medium text-gray-900 ml-2">Build Reviewer Persona</span>
                            </div>
                            <p class="text-gray-600 mb-1 text-sm leading-5">Customize the traits of your AI-generated reviewer.</p>
                            <p class="text-gray-600 mb-1 text-sm leading-5">Choose one from each category.</p>
                            <!-- Player Type Selection -->
                            <div class="py-2">
                                <div class="flex items-center mb-2">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.202 14.8555V13.5221C13.202 12.8149 12.921 12.1366 12.4209 11.6365C11.9208 11.1364 11.2426 10.8555 10.5353 10.8555H6.53532C5.82807 10.8555 5.1498 11.1364 4.6497 11.6365C4.1496 12.1366 3.86865 12.8149 3.86865 13.5221V14.8555" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.53532 8.1888C10.0081 8.1888 11.202 6.99489 11.202 5.52214C11.202 4.04938 10.0081 2.85547 8.53532 2.85547C7.06256 2.85547 5.86865 4.04938 5.86865 5.52214C5.86865 6.99489 7.06256 8.1888 8.53532 8.1888Z" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Player Type</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedPlayerType = selectedPlayerType === 'novice' ? null : 'novice'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPlayerType === 'novice' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Novice
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPlayerType = selectedPlayerType === 'casual' ? null : 'casual'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPlayerType === 'casual' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Casual
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPlayerType = selectedPlayerType === 'regular' ? null : 'regular'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPlayerType === 'regular' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Regular
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPlayerType = selectedPlayerType === 'expert' ? null : 'expert'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPlayerType === 'expert' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Expert
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPlayerType = selectedPlayerType === 'high-stakes' ? null : 'high-stakes'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPlayerType === 'high-stakes' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        High-Stakes
                                    </button>
                                </div>
                            </div>

                            <!-- Personality Selection -->
                            <div class="py-2">
                                <div class="flex items-center mb-2">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.202 14.8555V13.5221C13.202 12.8149 12.921 12.1366 12.4209 11.6365C11.9208 11.1364 11.2426 10.8555 10.5353 10.8555H6.53532C5.82807 10.8555 5.1498 11.1364 4.6497 11.6365C4.1496 12.1366 3.86865 12.8149 3.86865 13.5221V14.8555" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M8.53532 8.1888C10.0081 8.1888 11.202 6.99489 11.202 5.52214C11.202 4.04938 10.0081 2.85547 8.53532 2.85547C7.06256 2.85547 5.86865 4.04938 5.86865 5.52214C5.86865 6.99489 7.06256 8.1888 8.53532 8.1888Z" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Personality</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedPersonality = selectedPersonality === 'analytical' ? null : 'analytical'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPersonality === 'analytical' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Analytical
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPersonality = selectedPersonality === 'emotional' ? null : 'emotional'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPersonality === 'emotional' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Emotional
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPersonality = selectedPersonality === 'direct' ? null : 'direct'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPersonality === 'direct' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Direct
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedPersonality = selectedPersonality === 'verbose' ? null : 'verbose'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedPersonality === 'verbose' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Verbose
                                    </button>
                                </div>
                            </div>

                            <!-- Writing Style Selection -->
                            <div class="py-2">
                                <div class="flex items-center mb-2">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6513 5.38648C15.0037 5.03409 15.2018 4.55612 15.2019 4.05771C15.2019 3.5593 15.004 3.08128 14.6516 2.72881C14.2992 2.37634 13.8213 2.17829 13.3228 2.17822C12.8244 2.17816 12.3464 2.37609 11.9939 2.72848L3.09661 11.6278C2.94182 11.7821 2.82735 11.9722 2.76328 12.1811L1.88261 15.0825C1.86538 15.1401 1.86408 15.2014 1.87884 15.2597C1.89361 15.318 1.92389 15.3713 1.96647 15.4138C2.00906 15.4563 2.06236 15.4865 2.12071 15.5012C2.17907 15.5159 2.24031 15.5145 2.29794 15.4971L5.19994 14.6171C5.40872 14.5536 5.59872 14.4399 5.75328 14.2858L14.6513 5.38648Z" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Writing Style</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedWritingStyle = selectedWritingStyle === 'formal' ? null : 'formal'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedWritingStyle === 'formal' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Formal
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedWritingStyle = selectedWritingStyle === 'casual' ? null : 'casual'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedWritingStyle === 'casual' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Casual
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedWritingStyle = selectedWritingStyle === 'enthusiastic' ? null : 'enthusiastic'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedWritingStyle === 'enthusiastic' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Enthusiastic
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedWritingStyle = selectedWritingStyle === 'critical' ? null : 'critical'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedWritingStyle === 'critical' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Critical
                                    </button>
                                </div>
                            </div>

                            <!-- Tone Selection -->
                            <div class="py-2">
                                <div class="flex items-center mb-2">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.20165 9.19833C2.0755 9.19876 1.95181 9.16338 1.84496 9.09631C1.73811 9.02924 1.65248 8.93323 1.59802 8.81943C1.54357 8.70563 1.52252 8.57872 1.53732 8.45343C1.55213 8.32815 1.60218 8.20964 1.68166 8.11166L8.28165 1.31166C8.33116 1.25452 8.39863 1.2159 8.47298 1.20215C8.54732 1.1884 8.62414 1.20034 8.69081 1.236C8.75748 1.27166 8.81004 1.32893 8.83988 1.3984C8.86971 1.46788 8.87504 1.54543 8.85499 1.61833L7.57499 5.63166C7.53724 5.73268 7.52457 5.84134 7.53805 5.94833C7.55153 6.05533 7.59076 6.15745 7.65238 6.24595C7.714 6.33444 7.79617 6.40667 7.89184 6.45644C7.98751 6.5062 8.09382 6.53201 8.20165 6.53166H12.8683C12.9945 6.53123 13.1182 6.56661 13.225 6.63368C13.3319 6.70075 13.4175 6.79676 13.472 6.91056C13.5264 7.02436 13.5475 7.15127 13.5327 7.27656C13.5179 7.40184 13.4678 7.52036 13.3883 7.61833L6.78832 14.4183C6.73881 14.4755 6.67135 14.5141 6.597 14.5278C6.52265 14.5416 6.44584 14.5297 6.37917 14.494C6.3125 14.4583 6.25993 14.4011 6.2301 14.3316C6.20026 14.2621 6.19494 14.1846 6.21499 14.1117L7.49499 10.0983C7.53273 9.99731 7.54541 9.88865 7.53193 9.78166C7.51845 9.67467 7.47921 9.57254 7.41759 9.48405C7.35597 9.39555 7.27381 9.32332 7.17814 9.27356C7.08247 9.22379 6.97616 9.19798 6.86832 9.19833H2.20165Z" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Tone</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedTone = selectedTone === 'positive' ? null : 'positive'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedTone === 'positive' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Positive
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedTone = selectedTone === 'neutral' ? null : 'neutral'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedTone === 'neutral' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Neutral
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedTone = selectedTone === 'negative' ? null : 'negative'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedTone === 'negative' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Negative
                                    </button>
                                </div>
                            </div>

                            <!-- Emotion Selection -->
                            <div class="py-2">
                                <div class="flex items-center mb-2">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.20165 9.19833C2.0755 9.19876 1.95181 9.16338 1.84496 9.09631C1.73811 9.02924 1.65248 8.93323 1.59802 8.81943C1.54357 8.70563 1.52252 8.57872 1.53732 8.45343C1.55213 8.32815 1.60218 8.20964 1.68166 8.11166L8.28165 1.31166C8.33116 1.25452 8.39863 1.2159 8.47298 1.20215C8.54732 1.1884 8.62414 1.20034 8.69081 1.236C8.75748 1.27166 8.81004 1.32893 8.83988 1.3984C8.86971 1.46788 8.87504 1.54543 8.85499 1.61833L7.57499 5.63166C7.53724 5.73268 7.52457 5.84134 7.53805 5.94833C7.55153 6.05533 7.59076 6.15745 7.65238 6.24595C7.714 6.33444 7.79617 6.40667 7.89184 6.45644C7.98751 6.5062 8.09382 6.53201 8.20165 6.53166H12.8683C12.9945 6.53123 13.1182 6.56661 13.225 6.63368C13.3319 6.70075 13.4175 6.79676 13.472 6.91056C13.5264 7.02436 13.5475 7.15127 13.5327 7.27656C13.5179 7.40184 13.4678 7.52036 13.3883 7.61833L6.78832 14.4183C6.73881 14.4755 6.67135 14.5141 6.597 14.5278C6.52265 14.5416 6.44584 14.5297 6.37917 14.494C6.3125 14.4583 6.25993 14.4011 6.2301 14.3316C6.20026 14.2621 6.19494 14.1846 6.21499 14.1117L7.49499 10.0983C7.53273 9.99731 7.54541 9.88865 7.53193 9.78166C7.51845 9.67467 7.47921 9.57254 7.41759 9.48405C7.35597 9.39555 7.27381 9.32332 7.17814 9.27356C7.08247 9.22379 6.97616 9.19798 6.86832 9.19833H2.20165Z" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Emotion</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedEmotion = selectedEmotion === 'complain' ? null : 'complain'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedEmotion === 'complain' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Complain
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedEmotion = selectedEmotion === 'debate' ? null : 'debate'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedEmotion === 'debate' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Debate
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedEmotion = selectedEmotion === 'happy' ? null : 'happy'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedEmotion === 'happy' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Happy
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedEmotion = selectedEmotion === 'disagreement' ? null : 'disagreement'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedEmotion === 'disagreement' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Disagreement
                                    </button>
                                </div>
                            </div>

                            <!-- Focus Areas Selection -->
                            <div class="py-2">
                                <div class="flex items-center mb-2">
                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.20165 9.19833C2.0755 9.19876 1.95181 9.16338 1.84496 9.09631C1.73811 9.02924 1.65248 8.93323 1.59802 8.81943C1.54357 8.70563 1.52252 8.57872 1.53732 8.45343C1.55213 8.32815 1.60218 8.20964 1.68166 8.11166L8.28165 1.31166C8.33116 1.25452 8.39863 1.2159 8.47298 1.20215C8.54732 1.1884 8.62414 1.20034 8.69081 1.236C8.75748 1.27166 8.81004 1.32893 8.83988 1.3984C8.86971 1.46788 8.87504 1.54543 8.85499 1.61833L7.57499 5.63166C7.53724 5.73268 7.52457 5.84134 7.53805 5.94833C7.55153 6.05533 7.59076 6.15745 7.65238 6.24595C7.714 6.33444 7.79617 6.40667 7.89184 6.45644C7.98751 6.5062 8.09382 6.53201 8.20165 6.53166H12.8683C12.9945 6.53123 13.1182 6.56661 13.225 6.63368C13.3319 6.70075 13.4175 6.79676 13.472 6.91056C13.5264 7.02436 13.5475 7.15127 13.5327 7.27656C13.5179 7.40184 13.4678 7.52036 13.3883 7.61833L6.78832 14.4183C6.73881 14.4755 6.67135 14.5141 6.597 14.5278C6.52265 14.5416 6.44584 14.5297 6.37917 14.494C6.3125 14.4583 6.25993 14.4011 6.2301 14.3316C6.20026 14.2621 6.19494 14.1846 6.21499 14.1117L7.49499 10.0983C7.53273 9.99731 7.54541 9.88865 7.53193 9.78166C7.51845 9.67467 7.47921 9.57254 7.41759 9.48405C7.35597 9.39555 7.27381 9.32332 7.17814 9.27356C7.08247 9.22379 6.97616 9.19798 6.86832 9.19833H2.20165Z" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Focus Areas</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedFocusArea = selectedFocusArea === 'offers' ? null : 'offers'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedFocusArea === 'offers' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Offers
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedFocusArea = selectedFocusArea === 'app' ? null : 'app'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedFocusArea === 'app' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        App
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedFocusArea = selectedFocusArea === 'usability' ? null : 'usability'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedFocusArea === 'usability' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Usability
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedFocusArea = selectedFocusArea === 'games' ? null : 'games'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedFocusArea === 'games' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Games
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedFocusArea = selectedFocusArea === 'support' ? null : 'support'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedFocusArea === 'support' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Support
                                    </button>
                                </div>
                            </div>

                            <!-- Comment Length Selection -->
                            <div>
                                <div class="flex items-center mb-3">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.9998 9.99976C13.9998 10.3534 13.8593 10.6925 13.6093 10.9426C13.3592 11.1926 13.0201 11.3331 12.6665 11.3331H4.66645L1.99979 13.9998V3.33309C1.99979 2.97947 2.14026 2.64033 2.39031 2.39028C2.64036 2.14023 2.9795 1.99976 3.33312 1.99976H12.6665C13.0201 1.99976 13.3592 2.14023 13.6093 2.39028C13.8593 2.64033 13.9998 2.97947 13.9998 3.33309V9.99976Z" stroke="#059ED1" stroke-width="1.33319" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <label class="text-sm font-medium text-gray-800 ml-2">Comment Length</label>
                                </div>
                                <div class="inline-flex flex-wrap gap-1 ml-2">
                                    <button 
                                        type="button"
                                        @click="selectedCommentLength = selectedCommentLength === 'short' ? null : 'short'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedCommentLength === 'short' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Short
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedCommentLength = selectedCommentLength === 'medium' ? null : 'medium'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedCommentLength === 'medium' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Medium
                                    </button>
                                    <button 
                                        type="button"
                                        @click="selectedCommentLength = selectedCommentLength === 'long' ? null : 'long'"
                                        :class="[
                                            'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                                            selectedCommentLength === 'long' 
                                                ? 'bg-[#ECEDFD] text-black' 
                                                : 'text-gray-700 hover:bg-gray-50'
                                        ]"
                                    >
                                        Long
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Generated Reviews - Full Width -->
                <div v-if="generatedReviews.length" class="generated-reviews mt-8">
                    <article class="p-8">
                        <div class="flex justify-between items-center mb-6">
                            <h1 class="text-2xl font-bold text-gray-900">Generated Reviews</h1>
                        </div>
                        <div v-for="(review, index) in generatedReviews" :key="index" class="bg-white/80 rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center">
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
                                                <span class="text-sm font-semibold text-gray-900 min-w-[3rem]">{{ data.answer }}/10</span>
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
                                                <span class="text-sm font-semibold text-gray-900 min-w-[3rem]">{{ data.answer }}/10</span>
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
            ],
            selectedTone: null,
            selectedEmotion: null,
            selectedFocusArea: null,
            selectedCommentLength: null,
            selectedPlayerType: null,
            selectedPersonality: null,
            selectedWritingStyle: null
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
            // Calculate percentage for 1-10 range
            return (data.answer * 10);
        },
        getProgressBarColor(score) {
            // Color based on 1-10 range
            if (score >= 8) return 'bg-green-500';
            if (score >= 6) return 'bg-yellow-400';
            if (score >= 4) return 'bg-orange-400';
            return 'bg-red-500';
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
                    language: this.selectedLanguage,
                    playerType: this.selectedPlayerType || '',
                    personality: this.selectedPersonality || '',
                    writingStyle: this.selectedWritingStyle || ''
                });

                const response = await fetch(`${this.apiBaseUrl}/ratings/rating-generator2?${queryParams}`);
                
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }

                const data = await response.json();
                
                if (!data || !data.data || !data.data.rating) {
                    throw new Error('Invalid response format from API');
                }

                // Get the review text from the last entry (9)
                const reviewText = data.data.rating['9']?.answer;

                if (!reviewText) {
                    throw new Error('Review text not found in response');
                }

                // Create a properly structured review object
                const reviewObject = {
                    data: reviewText,
                    showDetails: false,
                    rating: Object.entries(data.data.rating).reduce((acc, [key, value]) => {
                        // Skip the review text (entry 9) and overall rating (entry 8)
                        if (key !== '9' && key !== '8') {
                            acc[key] = {
                                query: value.query,
                                answer: parseInt(value.answer)
                            };
                        }
                        return acc;
                    }, {}),
                    username: data.data.username || 'Anonymous User',
                    joinDate: this.getRandomJoinDate(),
                    botColor: this.getRandomColor()
                };

                this.generatedReviews.push(reviewObject);
            } catch (error) {
                console.error('Error generating review:', error);
                this.apiError = error.message;
            } finally {
                this.isLoading = false;
            }
        },
        getRatingStars(review) {
            const score = parseFloat(this.getTotalScore(review));
            const fullStars = Math.floor(Math.min(5, score / 2)); // Ensure we don't exceed 5 stars
            const decimal = Math.min(1, (score / 2) - fullStars); // Ensure decimal is between 0 and 1
            const emptyStars = Math.max(0, 5 - fullStars - (decimal > 0 ? 1 : 0)); // Ensure we don't get negative empty stars
            
            return {
                full: fullStars,
                partial: decimal > 0 ? decimal * 10 : 0,
                empty: emptyStars
            };
        },
        getTotalScore(review) {
            const ratings = review.rating;
            const validRatings = Object.values(ratings)
                .filter(data => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Casino Rating");
            const total = validRatings.reduce((sum, data) => sum + data.answer, 0);
            const count = validRatings.length;
            return (total / count).toFixed(1);
        },
        getRatingText(review) {
            const score = parseFloat(this.getTotalScore(review));
            if (score >= 9) return 'Excellent';
            if (score >= 7) return 'Very Good';
            if (score >= 5) return 'Good';
            if (score >= 3) return 'Fair';
            return 'Poor';
        },
        getFirstColumnData(review) {
            const ratings = review.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Casino Rating")
                .slice(0, 4);
        },
        getSecondColumnData(review) {
            const ratings = review.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Casino Rating")
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
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Casino Rating")
                .slice(0, 4);
        },
        secondColumnData() {
            const ratings = this.reviewData.data.rating;
            return Object.entries(ratings)
                .filter(([_, data]) => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Casino Rating")
                .slice(4);
        },
        totalScore() {
            const ratings = this.reviewData.data.rating;
            // Filter out community thoughts and overall rating, then calculate average
            const validRatings = Object.values(ratings)
                .filter(data => data.query !== "Share your thoughts with our community:" && data.query !== "Overall Casino Rating");
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
            if (score >= 9) return 'Excellent';
            if (score >= 7) return 'Very Good';
            if (score >= 5) return 'Good';
            if (score >= 3) return 'Fair';
            return 'Poor';
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