<template>
    <!-- Generate Rating Button -->
    <div class="flex justify-center mt-8 mb-8">
        <button @click="this.$emit('generate-review', true)" :disabled="isLoading"
            class="inline-flex items-center justify-center w-[234px] h-[48px] pt-[11.55px] pr-10 pb-[12.44px] pl-10 gap-[8px] rounded-[14px] text-base font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            :style="{
                backgroundColor: 'hsl(239, 84%, 67%)',
            }">
            <template v-if="isLoading">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
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
                                    stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M8.32996 12.4501C10.5391 12.4501 12.33 10.6592 12.33 8.45007C12.33 6.24093 10.5391 4.45007 8.32996 4.45007C6.12082 4.45007 4.32996 6.24093 4.32996 8.45007C4.32996 10.6592 6.12082 12.4501 8.32996 12.4501Z"
                                    stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M8.32959 9.78272C9.06579 9.78272 9.6626 9.18591 9.6626 8.44971C9.6626 7.71351 9.06579 7.1167 8.32959 7.1167C7.59339 7.1167 6.99658 7.71351 6.99658 8.44971C6.99658 9.18591 7.59339 9.78272 8.32959 9.78272Z"
                                    stroke="#F8FAFC" stroke-width="1.33301" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_66_3121">
                                    <rect width="16" height="16" fill="white"
                                        transform="translate(0.329956 0.450073)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </span>
            </template>
        </button>
    </div>
</template>

<script>
export default {
    name: 'GenerateReviewButton',
    props: {
        isLoading: {
            type: Boolean, 
            required: true,
            default: false,
        }
    }
}
</script>