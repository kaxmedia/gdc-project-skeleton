<template>
    <div class="space-y-4">
        <div>
            <h1 class="text-3xl font-bold text-gray-900 mb-2">AI Reviews Generator</h1>
            <p class="text-base text-gray-600">
                Create realistic user reviews using AI services
            </p>
        </div>
        <!-- AI Service Configuration Card -->
        <div class="bg-white/80 backdrop-blur-lg overflow-hidden sm:rounded-lg border border-[#E1E7EF]"
            style="box-shadow: 0px 1px 2px 0px #0000000d">
            <div class="p-4">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">AI Service</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">AI Service</label>
                        <select v-model="params.model"
                            class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                            style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;">
                            <option v-for="option in modelOptions" :key="option.value" :value="option.value">
                                {{ option.label }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Language</label>
                        <select v-model="params.language"
                            class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                            style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;">
                            <option v-for="lang in languageOptions" :key="lang.value" :value="lang.value">
                                {{ lang.label }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- Brand Configuration Card -->
        <div class="bg-white/80 backdrop-blur-lg overflow-hidden sm:rounded-lg border border-[#E1E7EF]"
            style="box-shadow: 0px 1px 2px 0px #0000000d">
            <div class="p-4">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">Brand</h2>
                <div class="space-y-6">
                    <div class="flex gap-6">
                        <div class="flex-1">
                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Product
                                Type</label>
                            <select v-model="params.product"
                                class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;">
                                <option value="" disabled>Select product type</option>
                                <option value="casino">Casino</option>
                                <option value="betting">Betting</option>
                            </select>
                            <p v-if="validationErrors.product" class="mt-1 text-sm text-red-600">
                                {{ validationErrors.product }}
                            </p>
                        </div>
                        <div class="flex-1">
                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Brand
                                Name</label>
                            <input type="text" v-model="params.brand_name" placeholder="Pub Casino"
                                class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                style="
                background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%),
                  linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;
              " />
                            <p v-if="validationErrors.brand_name" class="mt-1 text-sm text-red-600">
                                {{ validationErrors.brand_name }}
                            </p>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Brand Review
                            URL</label>
                        <input type="text" v-model="params.url"
                            placeholder="https://www.gambling.com/uk/online-casinos/pub-casino"
                            class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                            style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%),linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;"/>
                        <p v-if="validationErrors.url" class="mt-1 text-sm text-red-600">
                            {{ validationErrors.url }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Review Settings Card -->
        <div class="bg-white/80 backdrop-blur-lg overflow-hidden sm:rounded-lg border border-[#E1E7EF]"
            style="box-shadow: 0px 1px 2px 0px #0000000d">
            <div class="p-4">
                <h2 class="text-lg font-semibold text-gray-900 mb-6">Review Settings</h2>
                <div class="space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Comment Length
                                (chars)</label>
                            <input type="number" v-model="params.character_max" placeholder="Enter max characters"
                                class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%),linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;"/>
                            <p v-if="validationErrors.character_max" class="mt-1 text-sm text-red-600">
                                {{ validationErrors.character_max }}
                            </p>
                        </div>
                        <div>
                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Sentences in
                                Comment</label>
                            <input type="number" v-model="params.statements" placeholder="Enter number of sentences"
                                class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;"/>
                            <p v-if="validationErrors.statements" class="mt-1 text-sm text-red-600">
                                {{ validationErrors.statements }}
                            </p>
                        </div>
                        <div>
                            <label class="block text-sm leading-[14px] font-medium text-gray-800 mb-2">Misspellings
                                Count</label>
                            <input type="number" v-model="params.misspellings"
                                placeholder="Enter number of misspellings"
                                class="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors duration-200"
                                style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;"/>
                            <p v-if="validationErrors.misspellings" class="mt-1 text-sm text-red-600">
                                {{ validationErrors.misspellings }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-6 pb-4">
                        <div class="flex items-center justify-between mb-2">
                            <label class="block text-sm font-medium text-gray-800">Rating Score</label>
                            <span
                                class="inline-flex items-center px-2 rounded-full text-xs leading-[14px] font-medium border">
                                <span class="text-[#0F1729] font-semibold text-xs">{{ params.score }}/10</span>
                            </span>
                        </div>
                        <div class="relative w-full h-2 rounded-full cursor-pointer group" @mousemove="handleMouseMove"
                            @click="handleClick" @touchstart.prevent="handleTouch" @touchmove.prevent="handleTouch"
                            @touchend.prevent="handleTouchEnd" ref="progressBar" style="background: #059ed1">
                            <div class="absolute top-0 left-0 h-full rounded-full transition-all duration-200" :style="{
                                width: `${(exactScore || params.score) * 10}%`,
                                backgroundColor: 'hsl(239, 84%, 67%)',
                            }">
                                <div class="absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-2 transition-transform duration-200 transform group-hover:scale-110 group-hover:shadow-lg"
                                    :style="{
                                        borderColor: 'hsl(239, 84%, 67%)',
                                    }"></div>
                            </div>
                            <div
                                class="absolute inset-0 flex items-center justify-between px-2 pointer-events-none opacity-0">
                                <template v-for="n in 10" :key="n">
                                    <div class="h-4 w-0.5 bg-gray-400"></div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ReviewSettings',
    data() {
        return {
            formParams: {
                score: "7",
                character_max: "200",
                statements: "1",
                model: "claude",
                misspellings: 0,
                language: 'EN'
            },
            modelOptions: [
                { value: "claude", label: "Claude" },
                { value: "openai", label: "OpenAI" },
            ],
            languageOptions: [
                { value: "EN", label: "English" },
                { value: "GR", label: "Greek" },
            ],
            validationErrors: {
                product: "",
                brand_name: "",
                url: "",
                character_max: "",
                statements: "",
                misspellings: "",
            },
            exactScore: null,
        }

    },
    props: {
        params: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        // Initialize form params with current values
        this.formParams = {
            ...this.formParams,
            ...this.params,
        };
    },
    methods: {
        handleMouseMove(event) {
            if (event.buttons === 1) {
                // Only update if mouse button is pressed
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

            // Calculate exact score between 1 and 10 with one decimal place
            let score = (percentage / 10).toFixed(1);
            score = Math.max(1, Math.min(10, score));

            // Update both the display and query parameter with the exact decimal value
            this.exactScore = score;
            this.params.score = Math.round(this.exactScore);
        },
        handleTouchEnd(event) {
            // Add any additional logic you want to execute when touch ends
            console.log("Touch ended");
        },
        handleTouch(event) {
            const touch = event.touches[0];
            const rect = this.$refs.progressBar.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const width = rect.width;
            let percentage = (x / width) * 100;
            percentage = Math.max(0, Math.min(100, percentage));

            // Calculate exact score between 1 and 10 with one decimal place
            let score = (percentage / 10).toFixed(1);
            score = Math.max(1, Math.min(10, score));

            // Update both the display and query parameter with the exact decimal value
            this.exactScore = score;
            this.params.score = Math.round(this.exactScore);
        },
    }
}
</script>