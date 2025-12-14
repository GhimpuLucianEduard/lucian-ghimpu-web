<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Sunday Farm #1 - Game Loop, GUI and more 🎮️</h1>

      <em>December 14, 2025 - Reading Time: 4 minutes</em>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm1/intro.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <p>In the <a class="text-indigo" href="/game-dev/something-new">last post</a> you guys saw what one could call an
        almost middle life crisis.

        But buckle up, it seems the crisis not over, in fact I managed to get my girlfriend involved too, as a designer
        🧑‍🎨 You know what, since it's our game, let's also give her the title of <em class="text-indigo font-bold">Chief
          Pixel Art Director</em> or CPAD for short.
      </p>

      <p>This week I'm going to spoil some artwork from her, plus me playing around with other stuff.</p>

      <h2>🔄 Game Mechanics and Theme</h2>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm1/loop.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Game loop brainstorming</figcaption>
      </figure>

      <p>In an very basic way, the game is farming game with some management aspect sprinked:</p>
      <ol>
        <li>We <span class="text-green-500">plant</span> various plants on tiles</li>
        <li>Then in the <span class="text-blue-500">growing</span> phase there are tiny mechanics like day and night
          cycles
        </li>
        <li>On <span class="text-yellow-500">harvest</span> we get back new plant with improved stats as plant breed and
          mutate
        </li>
        <li>Finally, we <span class="text-indigo">manage</span> different resources, buy upgrades, research and start
          all over!
        </li>
      </ol>

      <p>Besides the farming aspect, anothe core concept of the game will be the <span
        class="text-red-500">🧬 Genetics</span> aspect.</p>

      <p>Do you guys remember <a class="text-indigo" href="https://en.wikipedia.org/wiki/Punnett_square">Punnett
        square</a> from your
        biology class? Yeah, something around those lies.</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm1/gene.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Some early concept for stats and traits</figcaption>
      </figure>


      <p>For now the ideas would be:</p>
      <ul>
        <li>Plants have stats like <span class="text-orange-500">growth</span></li>
        <li>They will also have special traits like <span class="text-blue-500">"hydrophilic"</span></li>
        <li>By breeding we improve our plants or discover new traits</li>
        <li>By cross-breeding we discover new plants!</li>
      </ul>

      <h2>🎨 Some Pixel Art</h2>

      <p>Our CPAD was quite busy this week, she provided us a lot of assets to work with, from basic tiles, to icons and
        more.</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm1/tiles.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Basic tiles in isometric view</figcaption>
      </figure>

      <p>I'll not spoil more for now, but honestly that's been a blessing. I can focus more on the coding part, plus
        that's kinda her job in real life, so she's more skilled than me. I just hope the cuddles and free hugs are
        enough as payment.</p>

      <em>You know how expensive these high ranking exec get 💸</em>

      <h3>GUI</h3>

      <p>Now, we also did some work on the GUI, or better said we tried. I have to say that this part is probably the
        hardest so far of game dev. You can apply some basic UI/UX concept from commercial apps, but still, there's a
        whole different aspect to it.</p>

      <p>I have to say I have a lot of more respect now for people in this industry, it's not an easy problem.</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm1/gui.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Early GUI concepts</figcaption>
      </figure>

      <h2>🎥 Conclusions and demo</h2>

      <p>That's it for now, we hope we can keep these regular updates, for now I'll drop a short demo:</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm1/demo1.gif')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Early GUI concepts</figcaption>
      </figure>

    </article>
  </div>
</template>

<script setup lang="ts">
import { AdvancedImage } from "@cloudinary/vue";

import useCloudinary from "@/composables/useCloudinary";

const cloudinary = useCloudinary();
</script>

<style scoped lang="postcss">

</style>