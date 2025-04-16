<template>
  <div v-if="!isAuthenticated">
    <Login :isAuthenticated="isAuthenticated" @auth-change="isAuthenticated = $event"></Login>
  </div>
  <div v-else>
    <!--heder Navigation -->
    <Nav></Nav>
    <div class="min-h-screen flex items-start justify-center relative pt-8" style="background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;">
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <!-- Main Content Grid -->
        <div class="w-full">
      
          <ReviewSettings :params="params"></ReviewSettings>

          <div class="space-y-4">

             <BuildReviewPersona :review-persona-params="reviewPersona"></BuildReviewPersona>
             <!-- Generate Rating Button -->
             <div class="flex justify-center mt-8 mb-8">
                <button @click="generateReview" :disabled="isLoading"
                  class="inline-flex items-center justify-center w-[234px] h-[48px] pt-[11.55px] pr-10 pb-[12.44px] pl-10 gap-[8px] rounded-[14px] text-base font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  :style="{
                    backgroundColor: 'hsl(239, 84%, 67%)',
                  }">
                  <template v-if="isLoading">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>
                    Generating...
                  </template>
                  <template v-else>
                    <span class="flex items-center justify-center">
                      Generate Rating
                      <span class="ml-2">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_66_3121)">
                            <path
                              d="M8.33 15.1168C12.0119 15.1168 14.9967 12.132 14.9967 8.45011C14.9967 4.76822 12.0119 1.78345 8.33 1.78345C4.6481 1.78345 1.66333 4.76822 1.66333 8.45011C1.66333 12.132 4.6481 15.1168 8.33 15.1168Z"
                              stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M8.32996 12.4501C10.5391 12.4501 12.33 10.6592 12.33 8.45007C12.33 6.24093 10.5391 4.45007 8.32996 4.45007C6.12082 4.45007 4.32996 6.24093 4.32996 8.45007C4.32996 10.6592 6.12082 12.4501 8.32996 12.4501Z"
                              stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M8.32959 9.78272C9.06579 9.78272 9.6626 9.18591 9.6626 8.44971C9.6626 7.71351 9.06579 7.1167 8.32959 7.1167C7.59339 7.1167 6.99658 7.71351 6.99658 8.44971C6.99658 9.18591 7.59339 9.78272 8.32959 9.78272Z"
                              stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                            <clipPath id="clip0_66_3121">
                              <rect width="16" height="16" fill="white" transform="translate(0.329956 0.450073)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </span>
                  </template>
                </button>
              </div>
          </div>
          <!-- Generated Reviews - Full Width -->
          <div v-if="generatedReviews.length" class="space-y-4 mt-4">
            <article class="bg-white/80 backdrop-blur-lg overflow-hidden sm:rounded-lg border border-[#E1E7EF]"
              style="box-shadow: 0px 1px 2px 0px #0000000d">
              <div class="p-4">
                <div class="flex justify-between items-center mb-6">
                  <h1 class="text-xl font-semibold text-gray-900">
                    Generated Reviews
                  </h1>
                  <div class="border border-[#E1E7EF] flex items-center gap-1 rounded-full px-1.5 py-1">
                    <span class="text-[#6467F2] text-[12px] leading-[16px] font-semibold">{{ generatedReviews.length
                      }}</span>
                    <span class="text-[#0F1729] text-[12px] leading-[16px] font-semibold">{{ generatedReviews.length ===
                      1 ? 'review' : ' reviews' }}</span>
                  </div>
                </div>
                <div v-for="(review, index) in generatedReviews" :key="index"
                  class="bg-white/80 backdrop-blur-lg overflow-hidden sm:rounded-lg border border-[#E1E7EF] p-6 mb-6"
                  style="box-shadow: 0px 1px 2px 0px #0000000d">
                  <div class="flex items-start justify-between">
                    <div class="flex items-start">
                      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mr-2">
                        <rect x="0.625" y="0.349976" width="39.99" height="39.99" rx="19.995" fill="#6467F2"
                          fill-opacity="0.1" />
                        <path
                          d="M27.6171 29.3412V27.3421C27.6171 26.2817 27.1958 25.2647 26.446 24.5148C25.6962 23.765 24.6792 23.3438 23.6188 23.3438H17.6213C16.5608 23.3438 15.5438 23.765 14.794 24.5148C14.0442 25.2647 13.6229 26.2817 13.6229 27.3421V29.3412"
                          stroke="#6467F2" stroke-width="1.99951" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                          d="M20.62 19.3454C22.8283 19.3454 24.6184 17.5553 24.6184 15.3471C24.6184 13.1389 22.8283 11.3488 20.62 11.3488C18.4118 11.3488 16.6217 13.1389 16.6217 15.3471C16.6217 17.5553 18.4118 19.3454 20.62 19.3454Z"
                          stroke="#6467F2" stroke-width="1.99951" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div>
                        <div class="font-medium text-gray-900">
                          <p>
                            {{ review.firstname }}
                          </p>
                          <div class="flex items-center">
                            <svg width="17" height="13" viewBox="0 0 17 13" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_66_3207)">
                                <path
                                  d="M6.6002 11.191C9.35933 11.191 11.596 8.9543 11.596 6.19517C11.596 3.43605 9.35933 1.19934 6.6002 1.19934C3.84108 1.19934 1.60437 3.43605 1.60437 6.19517C1.60437 8.9543 3.84108 11.191 6.6002 11.191Z"
                                  stroke="#65758B" stroke-width="0.99935" stroke-linecap="round"
                                  stroke-linejoin="round" />
                                <path d="M6.59998 3.19751V6.19556L8.59868 7.19491" stroke="#65758B"
                                  stroke-width="0.99935" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_66_3207">
                                  <rect width="11.99" height="11.99" fill="white"
                                    transform="translate(0.60498 0.200012)" />
                                </clipPath>
                              </defs>
                            </svg>
                            <span class="text-sm leading-5 text-gray-500 ml-1">Apr 11, 2025</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span class="text-sm font-medium text-gray-900 mr-2"><span class="text-lg font-bold">{{
                        review.reviewOverallScore
                          }}</span><span calss="text-xs font-normal text-[#65758B]">/10</span></span>
                      <template v-for="n in parseInt(review.reviewOverallScore)" :key="'full-' + n">
                        <svg class="w-3 h-3 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </template>
                      <template v-for="n in 10 - parseInt(review.reviewOverallScore)" :key="'empty-' + n">
                        <svg class="w-3 h-3 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </template>
                    </div>
                  </div>
                  <p class="mt-4 mb-2 text-gray-700">
                    {{ review.data }}
                  </p>
                  <button @click="review.showDetails = !review.showDetails"
                    class="text-sm font-medium text-[#65758B] hover:text-blue-600 transition-colors duration-200 flex items-center py-4">
                    <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                      :class="[
                        review.showDetails ? 'rotate-180' : '',
                        'mr-1 transition-transform duration-200',
                      ]">
                      <g clip-path="url(#clip0_66_3300)">
                        <path d="M4.625 6.79498L8.625 10.795L12.625 6.79498" stroke="currentColor"
                          stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_66_3300">
                          <rect width="16" height="16" fill="white" transform="translate(0.625 0.794983)" />
                        </clipPath>
                      </defs>
                    </svg>
                    {{
                      review.showDetails
                        ? "Hide Detailed Review"
                        : "Show Detailed Review"
                    }}
                  </button>
                  <div v-if="review.showDetails" class="mt-4">
                    <div class="w-full">
                      <p class="text-sm font-medium mb-2">Rating Breakdown</p>
                      <div v-for="[key, data] in Object.entries(
                        review.rating
                      ).filter(
                        ([_, data]) =>
                          data.query !==
                          'Share your thoughts with our community:' &&
                          data.query !== 'Overall Casino Rating'
                      )" :key="key" class="mb-2">
                        <div class="flex items-center justify-between">
                          <span class="text-sm font-normal text-[#0F1729]">{{
                            data.query
                            }}</span>
                          <span :class="[
                            'px-2 py-0.5 rounded-full text-xs font-medium',
                            data.answer >= 8
                              ? 'bg-green-100 text-green-800'
                              : data.answer >= 5
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800',
                          ]">
                            {{ data.answer }}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./layouts/Footer.vue";
import Nav from "./layouts/Nav.vue";
import Login from "./Login.vue";
import ReviewSettings from "./forms/ReviewSettings.vue";
import BuildReviewPersona from "./forms/BuildReviewPersona.vue";

export default {
  name: "AIReviewsGenerator",
  components: { Footer, Nav, Login, ReviewSettings, BuildReviewPersona },
  data() {
    return {
      isAuthenticated: false,
      showReviewDetails: false,
      apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
      generatedReviews: [],
      isLoading: false,
      apiError: null,
      showSettingsModal: false,
      reviewPersona: {
        selectedTone: "sincere",
        selectedPlayerType: "casual player",
        selectedExperienceLevel: "intermediate",
        selectedPersonality: "direct",
        selectedWritingStyle: "casual",
        selectedMotivation: "to win big",
        selectedFocusArea: "offers",
      },
      params: {
        key: "1q2w3e4r",
        product: "casino",
        brand_name: "",
        url: "",
        score: "7",
        character_max: "200",
        statements: "1",
        model: "claude",
        misspellings: "0",
        language: 'EN'
      }
    };
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem("auth_token");
      const timestamp = localStorage.getItem("auth_timestamp");

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
    toggleReviewDetails() {
      this.showReviewDetails = !this.showReviewDetails;
    },
    calculateWidth(data) {
      // Calculate percentage for 1-10 range
      return data.answer * 10;
    },
    getProgressBarColor(score) {
      // Color based on 1-10 range
      if (score >= 8) return "bg-green-500";
      if (score >= 6) return "bg-yellow-400";
      if (score >= 4) return "bg-orange-400";
      return "bg-red-500";
    },
    getRandomJoinDate() {
      const now = new Date();
      const fiveYearsAgo = new Date(
        now.getFullYear() - 5,
        now.getMonth(),
        now.getDate()
      );
      const randomTimestamp =
        fiveYearsAgo.getTime() +
        Math.random() * (now.getTime() - fiveYearsAgo.getTime());
      return new Date(randomTimestamp);
    },
    getRandomColor() {
      // Array of pleasant, muted colors
      const colors = [
        "#4F46E5", // Indigo
        "#7C3AED", // Purple
        "#EC4899", // Pink
        "#10B981", // Emerald
        "#3B82F6", // Blue
        "#F59E0B", // Amber
        "#6366F1", // Violet
        "#8B5CF6", // Purple
        "#06B6D4", // Cyan
        "#059669", // Green
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    },
    async generateReview() {
      // Reset validation errors
      this.validationErrors = {
        product: "",
        brand_name: "",
        url: "",
        character_max: "",
        statements: "",
        misspellings: "",
      };

      let hasErrors = false;

      // Validate required fields
      if (!this.params.product) {
        this.validationErrors.product = "Please select a product type";
        hasErrors = true;
      }
      if (!this.params.brand_name) {
        this.validationErrors.brand_name = "Please enter a brand name";
        hasErrors = true;
      }
      if (!this.params.url) {
        this.validationErrors.url = "Please enter a brand review URL";
        hasErrors = true;
      }
      if (!this.params.character_max) {
        this.validationErrors.character_max = "Please enter maximum characters";
        hasErrors = true;
      }
      if (!this.params.statements) {
        this.validationErrors.statements = "Please enter number of sentences";
        hasErrors = true;
      }
      if (!this.params.misspellings) {
        this.validationErrors.misspellings = "Please enter misspellings count";
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
          model: this.params.model,
          misspellings: this.params.misspellings,
          language: this.params.language,
          playerType: this.reviewPersona.selectedPlayerType || "",
          personality: this.reviewPersona.selectedPersonality || "",
          writingStyle: this.reviewPersona.selectedWritingStyle || "",
          experienceLevel: this.reviewPersona.selectedExperienceLevel || "",
          toneOfVoice: this.reviewPersona.selectedTone || "",
          motivationForPlaying: this.reviewPersona.selectedMotivation || "",
          focusArea: this.reviewPersona.selectedFocusArea || "",
        });

        const response = await fetch(
          `${this.apiBaseUrl}/ratings/rating-generator?${queryParams}`
        );

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (!data || !data.data || !data.data.rating) {
          throw new Error("Invalid response format from API");
        }

        // Get the review text from the last entry (9)
        const reviewText = data.data.rating["9"]?.answer;
        const reviewOverallScore = data.data.rating["8"]?.answer;

        if (!reviewText) {
          throw new Error("Review text not found in response");
        }

        // Create a properly structured review object
        const reviewObject = {
          data: reviewText,
          showDetails: false,
          rating: Object.entries(data.data.rating).reduce(
            (acc, [key, value]) => {
              // Skip the review text (entry 9) and overall rating (entry 8)
              if (key !== "9" && key !== "8") {
                acc[key] = {
                  query: value.query,
                  answer: parseInt(value.answer),
                };
              }
              return acc;
            },
            {}
          ),
          firstname: data.data.firstname || "Anonymous User",
          reviewOverallScore: reviewOverallScore,
          joinDate: this.getRandomJoinDate(),
          botColor: this.getRandomColor(),
        };

        this.generatedReviews.push(reviewObject);
      } catch (error) {
        console.error("Error generating review:", error);
        this.apiError = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    getRatingStars(review) {
      const score = parseFloat(this.getTotalScore(review));
      const fullStars = Math.floor(Math.min(5, score / 2)); // Ensure we don't exceed 5 stars
      const decimal = Math.min(1, score / 2 - fullStars); // Ensure decimal is between 0 and 1
      const emptyStars = Math.max(0, 5 - fullStars - (decimal > 0 ? 1 : 0)); // Ensure we don't get negative empty stars

      return {
        full: fullStars,
        partial: decimal > 0 ? decimal * 10 : 0,
        empty: emptyStars,
      };
    },
    getTotalScore(review) {
      const ratings = review.rating;
      const validRatings = Object.values(ratings).filter(
        (data) =>
          data.query !== "Share your thoughts with our community:" &&
          data.query !== "Overall Casino Rating"
      );
      const total = validRatings.reduce((sum, data) => sum + data.answer, 0);
      const count = validRatings.length;
      return (total / count).toFixed(1);
    },
    getRatingText(review) {
      const score = parseFloat(this.getTotalScore(review));
      if (score >= 9) return "Excellent";
      if (score >= 7) return "Very Good";
      if (score >= 5) return "Good";
      if (score >= 3) return "Fair";
      return "Poor";
    },
    getFirstColumnData(review) {
      const ratings = review.rating;
      return Object.entries(ratings)
        .filter(
          ([_, data]) =>
            data.query !== "Share your thoughts with our community:" &&
            data.query !== "Overall Casino Rating"
        )
        .slice(0, 4);
    },
    getSecondColumnData(review) {
      const ratings = review.rating;
      return Object.entries(ratings)
        .filter(
          ([_, data]) =>
            data.query !== "Share your thoughts with our community:" &&
            data.query !== "Overall Casino Rating"
        )
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
        misspellings: this.params.misspellings,
      };
      this.showSettingsModal = false;
    },
  },
  computed: {
    firstColumnData() {
      const ratings = this.reviewData.data.rating;
      return Object.entries(ratings)
        .filter(
          ([_, data]) =>
            data.query !== "Share your thoughts with our community:" &&
            data.query !== "Overall Casino Rating"
        )
        .slice(0, 4);
    },
    secondColumnData() {
      const ratings = this.reviewData.data.rating;
      return Object.entries(ratings)
        .filter(
          ([_, data]) =>
            data.query !== "Share your thoughts with our community:" &&
            data.query !== "Overall Casino Rating"
        )
        .slice(4);
    },
    totalScore() {
      const ratings = this.reviewData.data.rating;
      // Filter out community thoughts and overall rating, then calculate average
      const validRatings = Object.values(ratings).filter(
        (data) =>
          data.query !== "Share your thoughts with our community:" &&
          data.query !== "Overall Casino Rating"
      );
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
        empty: 5 - fullStars - (decimal > 0 ? 1 : 0),
      };
    },
    ratingText() {
      const score = parseFloat(this.totalScore);
      if (score >= 9) return "Excellent";
      if (score >= 7) return "Very Good";
      if (score >= 5) return "Good";
      if (score >= 3) return "Fair";
      return "Poor";
    },
    reviewText() {
      const ratings = this.reviewData.data.rating;
      const review = ratings[9].answer;
      return review;
    },
  },
};
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
  background-image: linear-gradient(rgba(255, 255, 255, 0.2) 1px,
      transparent 1px),
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
