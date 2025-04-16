<template>
  <!-- Reviewer Persona Content -->
  <div class="mt-4 overflow-hidden sm:rounded-lg bg-white h-fit border border-[#E1E7EF]"
    style="background: white; box-shadow: 0px 1px 2px 0px #0000000d">
    <div class="px-4 my-4">
      <div class="flex items-center mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49999C6.61593 12.5 5.76809 12.8512 5.14297 13.4763C4.51785 14.1014 4.16666 14.9493 4.16666 15.8333V17.5"
            stroke="#0F1729" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          <path
            d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z"
            stroke="#0F1729" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-xl font-medium text-gray-900 ml-2">Build Reviewer Persona</span>
      </div>
      <p class="text-gray-600 mb-1 text-sm leading-5">
        Customize the traits of your AI-generated reviewer
      </p>
      <!-- Player Type Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-0.5 rounded-lg">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.202 14.8555V13.5221C13.202 12.8149 12.921 12.1366 12.4209 11.6365C11.9208 11.1364 11.2426 10.8555 10.5353 10.8555H6.53532C5.82807 10.8555 5.1498 11.1364 4.6497 11.6365C4.1496 12.1366 3.86865 12.8149 3.86865 13.5221V14.8555"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M8.53532 8.1888C10.0081 8.1888 11.202 6.99489 11.202 5.52214C11.202 4.04938 10.0081 2.85547 8.53532 2.85547C7.06256 2.85547 5.86865 4.04938 5.86865 5.52214C5.86865 6.99489 7.06256 8.1888 8.53532 8.1888Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Player Type
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'budget-conscious gambler'
              ? null
              : 'budget-conscious gambler'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'budget-conscious gambler'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Budget-Conscious Gambler
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'high roller'
              ? null
              : 'high roller'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'high roller'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            High Roller
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'casual player'
              ? null
              : 'casual player'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'casual player'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Casual Player
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'slots lover'
              ? null
              : 'slots lover'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'slots lover'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Slots Lover
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'sports bettor'
              ? null
              : 'sports bettor'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'sports bettor'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Sports Bettor
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'bonus hunter'
              ? null
              : 'bonus hunter'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'bonus hunter'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Bonus Hunter
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'mobile-first player'
              ? null
              : 'mobile-first player'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'mobile-first player'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Mobile-First Player
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'live casino enthusiast'
              ? null
              : 'live casino enthusiast'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'live casino enthusiast'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Live Casino Enthusiast
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'VIP loyalist'
              ? null
              : 'VIP loyalist'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'VIP loyalist'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            VIP Loyalist
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'roulette fanatic'
              ? null
              : 'roulette fanatic'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'roulette fanatic'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Roulette Fanatic
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'blackjack strategist'
              ? null
              : 'blackjack strategist'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'blackjack strategist'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Blackjack Strategist
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'poker pro'
              ? null
              : 'poker pro'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'poker pro'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Poker Pro
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'weekend thrill seeker'
              ? null
              : 'weekend thrill seeker'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'weekend thrill seeker'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Weekend Thrill Seeker
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'jackpot chaser'
              ? null
              : 'jackpot chaser'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'jackpot chaser'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Jackpot Chaser
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'newbie explorer'
              ? null
              : 'newbie explorer'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'newbie explorer'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Newbie Explorer
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'nostalgic classic player'
              ? null
              : 'nostalgic classic player'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'nostalgic classic player'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Nostalgic Classic Player
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'social gamer'
              ? null
              : 'social gamer'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'social gamer'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Social Gamer
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'strategy-driven gambler'
              ? null
              : 'strategy-driven gambler'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'strategy-driven gambler'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Strategy-Driven Gambler
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'risk-averse player'
              ? null
              : 'risk-averse player'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'risk-averse player'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Risk-Averse Player
          </button>
          <button type="button" @click="
            params.selectedPlayerType =
            params.selectedPlayerType === 'fast-paced action seeker'
              ? null
              : 'fast-paced action seeker'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPlayerType === 'fast-paced action seeker'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Fast-Paced Action Seeker
          </button>
        </div>
      </div>

      <!-- Experience Level Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-0.5 rounded-lg">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.188 9.13306L12.198 14.8171C12.2093 14.884 12.1999 14.9528 12.1711 15.0142C12.1422 15.0757 12.0953 15.1269 12.0366 15.1609C11.9779 15.195 11.9102 15.2103 11.8425 15.2049C11.7749 15.1994 11.7105 15.1734 11.658 15.1304L9.27133 13.3391C9.15611 13.253 9.01615 13.2065 8.87233 13.2065C8.72851 13.2065 8.58855 13.253 8.47333 13.3391L6.08266 15.1297C6.03021 15.1727 5.96591 15.1986 5.89833 15.2041C5.83075 15.2095 5.76311 15.1943 5.70444 15.1603C5.64577 15.1263 5.59885 15.0753 5.56994 15.0139C5.54104 14.9526 5.53152 14.8839 5.54266 14.8171L6.552 9.13306"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M8.86999 9.87305C11.0791 9.87305 12.87 8.08219 12.87 5.87305C12.87 3.66391 11.0791 1.87305 8.86999 1.87305C6.66086 1.87305 4.87 3.66391 4.87 5.87305C4.87 8.08219 6.66086 9.87305 8.86999 9.87305Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Experience Level
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <button type="button" @click="
            params.selectedExperienceLevel =
            params.selectedExperienceLevel === 'newbie' ? null : 'newbie'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedExperienceLevel === 'newbie'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Newbie
          </button>
          <button type="button" @click="
            params.selectedExperienceLevel =
            params.selectedExperienceLevel === 'intermediate'
              ? null
              : 'intermediate'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedExperienceLevel === 'intermediate'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Intermediate
          </button>
          <button type="button" @click="
            params.selectedExperienceLevel =
            params.selectedExperienceLevel === 'seasoned'
              ? null
              : 'seasoned'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedExperienceLevel === 'seasoned'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Seasoned
          </button>
          <button type="button" @click="
            params.selectedExperienceLevel =
            params.selectedExperienceLevel === 'long-time'
              ? null
              : 'long-time'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedExperienceLevel === 'long-time'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Long-Time
          </button>
          <button type="button" @click="
            params.selectedExperienceLevel =
            params.selectedExperienceLevel === 'returning after a break'
              ? null
              : 'returning after a break'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedExperienceLevel === 'returning after a break'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Returning After a Break
          </button>
        </div>
      </div>

      <!-- Personality Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-0.5 rounded-lg">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.87 15.1964C12.5519 15.1964 15.5367 12.2116 15.5367 8.5297C15.5367 4.84781 12.5519 1.86304 8.87 1.86304C5.1881 1.86304 2.20333 4.84781 2.20333 8.5297C2.20333 12.2116 5.1881 15.1964 8.87 15.1964Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M6.20333 9.86304C6.20333 9.86304 7.20333 11.1964 8.87 11.1964C10.5367 11.1964 11.5367 9.86304 11.5367 9.86304"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.87 6.52979H6.87666" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M10.87 6.52979H10.8767" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Personality
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'analytical'
              ? null
              : 'analytical'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'analytical'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Analytical
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'emotional'
              ? null
              : 'emotional'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'emotional'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Emotional
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'direct' ? null : 'direct'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'direct'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Direct
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'verbose' ? null : 'verbose'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'verbose'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Verbose
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'humorous' ? null : 'humorous'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'humorous'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Humorous
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'realistic'
              ? null
              : 'realistic'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'realistic'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Realistic
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'naive' ? null : 'naive'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'naive'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Naive
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'cautious' ? null : 'cautious'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'cautious'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Cautious
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'bold' ? null : 'bold'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'bold'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Bold
          </button>
          <button type="button" @click="
            params.selectedPersonality =
            params.selectedPersonality === 'impulsive'
              ? null
              : 'impulsive'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedPersonality === 'impulsive'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Impulsive
          </button>
        </div>
      </div>

      <!-- Tone Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-2 rounded-lg">
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.87 12.5298C14.87 12.8834 14.7295 13.2225 14.4795 13.4726C14.2294 13.7226 13.8903 13.8631 13.5367 13.8631H5.53666L2.87 16.5298V5.86312C2.87 5.5095 3.01047 5.17036 3.26052 4.92031C3.51057 4.67026 3.84971 4.52979 4.20333 4.52979H13.5367C13.8903 4.52979 14.2294 4.67026 14.4795 4.92031C14.7295 5.17036 14.87 5.5095 14.87 5.86312V12.5298Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Tone of Voice
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'sincere' ? null : 'sincere'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'sincere'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Sincere
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'sarcastic' ? null : 'sarcastic'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'sarcastic'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Sarcastic
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'playful' ? null : 'playful'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'playful'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Playful
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'matter-of-fact'
              ? null
              : 'matter-of-fact'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'matter-of-fact'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Matter-of-fact
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'enthusiastic'
              ? null
              : 'enthusiastic'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'enthusiastic'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Enthusiastic
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'neutral' ? null : 'neutral'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'neutral'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Neutral
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'skeptical' ? null : 'skeptical'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'skeptical'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Skeptical
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'confident' ? null : 'confident'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'confident'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Confident
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'humble' ? null : 'humble'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'humble'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Humble
          </button>
          <button type="button" @click="
            params.selectedTone =
            params.selectedTone === 'provocative' ? null : 'provocative'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedTone === 'provocative'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Provocative
          </button>
        </div>
      </div>

      <!-- Writing Style Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-0.5 rounded-lg">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.6513 5.38648C15.0037 5.03409 15.2018 4.55612 15.2019 4.05771C15.2019 3.5593 15.004 3.08128 14.6516 2.72881C14.2992 2.37634 13.8213 2.17829 13.3228 2.17822C12.8244 2.17816 12.3464 2.37609 11.9939 2.72848L3.09661 11.6278C2.94182 11.7821 2.82735 11.9722 2.76328 12.1811L1.88261 15.0825C1.86538 15.1401 1.86408 15.2014 1.87884 15.2597C1.89361 15.318 1.92389 15.3713 1.96647 15.4138C2.00906 15.4563 2.06236 15.4865 2.12071 15.5012C2.17907 15.5159 2.24031 15.5145 2.29794 15.4971L5.19994 14.6171C5.40872 14.5536 5.59872 14.4399 5.75328 14.2858L14.6513 5.38648Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Writing Style
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <!-- Writing Style buttons -->
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'formal' ? null : 'formal'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'formal'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-[#F8FAFC]',
                      ]">
            Formal
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'casual' ? null : 'casual'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'casual'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Casual
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'detailed'
              ? null
              : 'detailed'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'detailed'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Detailed
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'to the point'
              ? null
              : 'to the point'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'to the point'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To The Point
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'storytelling'
              ? null
              : 'storytelling'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'storytelling'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Storytelling
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'bullet-point format'
              ? null
              : 'bullet-point format'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'bullet-point format'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Bullet-Point Format
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'stream of consciousness'
              ? null
              : 'stream of consciousness'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'stream of consciousness'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Stream of Consciousness
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'journal-style'
              ? null
              : 'journal-style'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'journal-style'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Journal-Style
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'review-style'
              ? null
              : 'review-style'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'review-style'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Review-Style
          </button>
          <button type="button" @click="
            params.selectedWritingStyle =
            params.selectedWritingStyle === 'conversational'
              ? null
              : 'conversational'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedWritingStyle === 'conversational'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Conversational
          </button>
        </div>
      </div>

      <!-- Motivation for Playing Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-0.5 rounded-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.87 7.17651V16.5098" stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M2.87 14.5098C2.69319 14.5098 2.52362 14.4395 2.39859 14.3145C2.27357 14.1895 2.20333 14.0199 2.20333 13.8431V5.17643C2.20333 4.99962 2.27357 4.83005 2.39859 4.70503C2.52362 4.58 2.69319 4.50977 2.87 4.50977H6.20333C6.91057 4.50977 7.58885 4.79072 8.08895 5.29081C8.58905 5.79091 8.87 6.46919 8.87 7.17643C8.87 6.46919 9.15095 5.79091 9.65105 5.29081C10.1511 4.79072 10.8294 4.50977 11.5367 4.50977H14.87C15.0468 4.50977 15.2164 4.58 15.3414 4.70503C15.4664 4.83005 15.5367 4.99962 15.5367 5.17643V13.8431C15.5367 14.0199 15.4664 14.1895 15.3414 14.3145C15.2164 14.4395 15.0468 14.5098 14.87 14.5098H10.87C10.3396 14.5098 9.83086 14.7205 9.45578 15.0956C9.08071 15.4706 8.87 15.9793 8.87 16.5098C8.87 15.9793 8.65928 15.4706 8.28421 15.0956C7.90914 14.7205 7.40043 14.5098 6.87 14.5098H2.87Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Motivation for Playing
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to win big'
              ? null
              : 'to win big'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to win big'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Win Big
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to kill time'
              ? null
              : 'to kill time'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to kill time'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Kill Time
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'for social interaction'
              ? null
              : 'for social interaction'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'for social interaction'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            For Social Interaction
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to try something new'
              ? null
              : 'to try something new'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to try something new'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Try Something New
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to escape stress'
              ? null
              : 'to escape stress'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to escape stress'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Escape Stress
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to feel the thrill'
              ? null
              : 'to feel the thrill'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to feel the thrill'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Feel The Thrill
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'for the bonuses'
              ? null
              : 'for the bonuses'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'for the bonuses'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            For The Bonuses
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to test strategies'
              ? null
              : 'to test strategies'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to test strategies'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Test Strategies
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'to chase the dream'
              ? null
              : 'to chase the dream'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'to chase the dream'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            To Chase The Dream
          </button>
          <button type="button" @click="
            params.selectedMotivation =
            params.selectedMotivation === 'because of habit'
              ? null
              : 'because of habit'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedMotivation === 'because of habit'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Because of Habit
          </button>
        </div>
      </div>

      <!-- Focus Area Selection -->
      <div class="py-2">
        <div class="flex items-center mb-2 bg-[#F8FAFC] p-0.5 rounded-lg">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.53666 9.83303C3.41051 9.83346 3.28682 9.79809 3.17996 9.73102C3.07311 9.66395 2.98748 9.56794 2.93303 9.45414C2.87857 9.34034 2.85752 9.21343 2.87233 9.08814C2.88713 8.96285 2.93718 8.84434 3.01666 8.74637L9.61666 1.94637C9.66617 1.88922 9.73363 1.85061 9.80798 1.83686C9.88233 1.82311 9.95914 1.83504 10.0258 1.8707C10.0925 1.90637 10.1451 1.96363 10.1749 2.03311C10.2047 2.10258 10.21 2.18013 10.19 2.25304L8.91 6.26637C8.87225 6.36738 8.85958 6.47605 8.87306 6.58304C8.88654 6.69003 8.92577 6.79215 8.98739 6.88065C9.04901 6.96915 9.13118 7.04138 9.22685 7.09114C9.32251 7.1409 9.42883 7.16672 9.53666 7.16637H14.2033C14.3295 7.16594 14.4532 7.20131 14.56 7.26838C14.6669 7.33545 14.7525 7.43146 14.807 7.54526C14.8614 7.65906 14.8825 7.78598 14.8677 7.91126C14.8529 8.03655 14.8028 8.15506 14.7233 8.25303L8.12333 15.053C8.07382 15.1102 8.00636 15.1488 7.93201 15.1625C7.85766 15.1763 7.78085 15.1644 7.71417 15.1287C7.6475 15.093 7.59494 15.0358 7.5651 14.9663C7.53527 14.8968 7.52994 14.8193 7.55 14.7464L8.82999 10.733C8.86774 10.632 8.88041 10.5234 8.86693 10.4164C8.85345 10.3094 8.81422 10.2072 8.7526 10.1187C8.69098 10.0303 8.60881 9.95802 8.51314 9.90826C8.41748 9.8585 8.31116 9.83268 8.20333 9.83303H3.53666Z"
              stroke="#059ED1" stroke-width="1.33301" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <label class="text-sm font-bold text-[#0F1729] ml-2">Focus Area
            <i class="text-xs text-[#0F1729] font-normal">required*</i></label>
        </div>
        <div class="inline-flex flex-wrap gap-1 w-full bg-[#F8FAFC] p-2 rounded-lg mt-2">
          <button type="button" @click="
            params.selectedFocusArea =
            params.selectedFocusArea === 'offers' ? null : 'offers'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedFocusArea === 'offers'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Offers
          </button>
          <button type="button" @click="
            params.selectedFocusArea =
            params.selectedFocusArea === 'app' ? null : 'app'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedFocusArea === 'app'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            App
          </button>
          <button type="button" @click="
            params.selectedFocusArea =
            params.selectedFocusArea === 'usability' ? null : 'usability'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedFocusArea === 'usability'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Usability
          </button>
          <button type="button" @click="
            params.selectedFocusArea =
            params.selectedFocusArea === 'games' ? null : 'games'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedFocusArea === 'games'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Games
          </button>
          <button type="button" @click="
            params.selectedFocusArea =
            params.selectedFocusArea === 'support' ? null : 'support'
            " :class="[
                        'px-2 py-2 rounded-[14px] text-sm font-medium transition-colors duration-200',
                        params.selectedFocusArea === 'support'
                          ? 'bg-[#ECEDFD] text-black'
                          : 'text-gray-700 hover:bg-gray-50',
                      ]">
            Support
          </button>
        </div>
      </div>

      <!-- Persona Preview -->
      <div class="py-2 rounded-lg" style="
                    background: linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%),
                      linear-gradient(0deg, #f8fafc 0%, #f8fafc 100%), #fff;
                  ">
        <div class="flex items-center mb-4 px-4">
          <h3 class="text-sm font-bold text-[#0F1729] underline decoration-[#0F1729] underline-offset-4">
            Persona Preview
          </h3>
        </div>
        <div class="flex flex-wrap gap-2 px-4 pb-4">
          <span v-if="params.selectedPlayerType"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedPlayerType }}
          </span>
          <span v-if="params.selectedExperienceLevel"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedExperienceLevel }}
          </span>
          <span v-if="params.selectedPersonality"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedPersonality }}
          </span>
          <span v-if="params.selectedTone"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedTone }}
          </span>
          <span v-if="params.selectedWritingStyle"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedWritingStyle }}
          </span>
          <span v-if="params.selectedMotivation"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedMotivation }}
          </span>
          <span v-if="params.selectedFocusArea"
            class="px-2 py-1 rounded-[14px] text-xs font-medium bg-[#059ED1] text-[#F8FAFC] capitalize">
            {{ params.selectedFocusArea }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'BuildReviewPersona',
  reviewPersonaParams: {
    type: Object,
    required: true,
  },
  data() {
    return {
      params: {
        selectedTone: 'sincere',
        selectedPlayerType: 'casual player',
        selectedExperienceLevel: 'intermediate',
        selectedPersonality: 'direct',
        selectedWritingStyle: 'casual',
        selectedMotivation: 'to win big',
        selectedFocusArea: 'offers',
      }
    }
  },
  mounted() {
    this.reviewPersonaParams = this.params
  }
}
</script>