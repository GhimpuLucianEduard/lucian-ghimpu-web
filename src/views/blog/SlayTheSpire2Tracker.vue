<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Slay the Spire 2 & Time Tracker App</h1>

      <em>
        March 14, 2026 - Reading Time: 3 minutes
      </em>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('lucianghimpu.com/blog/slaythespire2tracker/main.png')"
          :plugins="cloudinary.plugins" />
        <figcaption>Timecoin App</figcaption>
      </figure>


      <p><a class="text-indigo" href="https://store.steampowered.com/app/2868840/Slay_the_Spire_2/">Slay the Spire 2</a>
        released ~1 week ago and ofc I got addicted to it 🫠</p>

      <p>I've played a grand total of ~16h or ~2h per day since its release. Which might not seem a lot, but it adds up
        when you got 10000 other things going on.</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('lucianghimpu.com/blog/slaythespire2tracker/stats.png')"
          :plugins="cloudinary.plugins" />
        <figcaption>My Slay the Spire 2 Stats</figcaption>
      </figure>

      <p>Usually in these situations I end up using the most brutal apps/extensions to block me from using whatever I am
        abusing. For instance, using a Chrome extension to block YouTube home and recommendations. But still, I do
        want to play, it's just that I want to balance it with other activities I would do at my computer.</p>

      <p>💡 In my mind I was like: </p>

      <em>Ok, if I want to play 1h of Slay the Spire 2, I got to at least do 1h of Game Development myself in Unity.</em>

      <p>Sounds fair enough right?</p>

      <p>And that's how I ended up creating what I called <i class="text-green-500">"Timecoin"</i></p>

      <ul>
        <li>A simple Swift App</li>
        <li>Tracks the current <b class="text-blue-500">focused</b> app</li>
        <li>We keep a global <i class="text-yellow-500">"balance"</i></li>
        <li>Each app either <span class="text-red-500">spends</span> or <span class="text-green-500">adds</span> to the balance</li>
        <li>We can also <span class="text-grey-500">ignore</span> unrelevant apps suchs Finder</li>
      </ul>

      <p>I do have to say it was vibe-coded, but "the old way", I just kept a simple chat with Claude. And mostly just to understand Swift, or compare it to Kotlin/Android. They are quite similar in the end.</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('lucianghimpu.com/blog/slaythespire2tracker/claude.png')"
          :plugins="cloudinary.plugins" />
        <figcaption>Claude Chat & my lazy typos</figcaption>
      </figure>

      <p>The App is in beta test with 2 active users. But I would like to add some more complex features such as:</p>
      <ul>
        <li>Custom rules: allow to play "Factorio" if you have 10 hours in any IDE this week</li>
        <li>Sync between devices</li>
        <li>Browser tab detection???</li>
      </ul>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('lucianghimpu.com/blog/slaythespire2tracker/balance.png')"
          :plugins="cloudinary.plugins" />
        <figcaption>Current balance</figcaption>
      </figure>

      <p>Well, I got to make my balance positive, so better get back to work if I want to beat the game with my boy the Regent</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('lucianghimpu.com/blog/slaythespire2tracker/reg.png')"
          :plugins="cloudinary.plugins" />
      </figure>

      <em><a href="https://www.reddit.com/r/slaythespire/comments/1rox4w3/big_sword_hit_big_numbers">Credits</a></em>

    </article>
  </div>
</template>

<script setup lang="ts">
import { AdvancedImage } from "@cloudinary/vue";
import useCloudinary from "@/composables/useCloudinary";

const cloudinary = useCloudinary();
</script>

<style scoped></style>
