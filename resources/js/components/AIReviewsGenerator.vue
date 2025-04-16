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
             <GenerateReviewButton :isLoading="isLoading" @generate-review="generateReview"></GenerateReviewButton>

          </div>
          <!-- Generated Reviews - Full Width -->
          <div v-if="generatedReviews.length" class="space-y-4 mt-4">

            <GeneratedReviewCard :generated-reviews="generatedReviews"></GeneratedReviewCard>

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
import GenerateReviewButton from "./GenerateReviewButton.vue";
import GeneratedReviewCard from "./ReviewCard.vue";

export default {
  name: "AIReviewsGenerator",
  components: { Footer, Nav, Login, ReviewSettings, BuildReviewPersona, GenerateReviewButton, GeneratedReviewCard },
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
        selectedTone: '',
        selectedPlayerType: '',
        selectedExperienceLevel: '',
        selectedPersonality: '',
        selectedWritingStyle: '',
        selectedMotivation: '',
        selectedFocusArea: '',
      },
      params: {
        key: '1q2w3e4r',
        product: 'casino',
        brand_name: '',
        url: '',
        score: '7',
        character_max: '200',
        statements: '1',
        model: 'claude',
        misspellings: '0',
        language: 'EN'
      }
    };
  },
  mounted() {
    this.checkAuth();
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
