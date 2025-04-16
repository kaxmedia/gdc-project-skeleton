<template>
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
</template>

<script>

export default {
    name: 'GeneratedReviewCard',
    props: {
        generatedReviews: {
            type: Array, 
            required: true
        }
    }
}

</script>