<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Vim, Game Dev and the Outdoor Boys 🏔️</h1>

      <em>November 23, 2025 - Reading Time: 5 minutes</em>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/intro.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <p>
        Do you guys know that feeling when watching the <a href="https://www.youtube.com/@OutdoorBoys/videos">OutdoorBoys</a>
        YouTube channel?
      </p>

      <p>I'm not sure how to describe it, but part of it makes me want throw my computer away. Now, that's not too smart
        as I kinda earn my living with it 😭
      </p>

      <p>That being said, in the last ~2 years I've dropped more projects than AI models being released. Literally my
        Notion has become a graveyard of half-baked ideas and prototypes.
      </p>


      <div class="grid grid-cols-2">
        <figure class="col-span-1">
          <AdvancedImage
            :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/arch1.png')"
            :plugins="cloudinary.plugins"
          />
        </figure>
        <figure>
          <AdvancedImage
            :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/arch2.png')"
            :plugins="cloudinary.plugins"
          />
        </figure>
      </div>

      <em class="text-green-600">Ok - but how's this related to VIM, Game Dev and the Outdoor Boys???</em>

      <h3>🫠 The fall</h3>

      <p>
        I'm not sure if it's due to AI, me getting older, or just general burnout, but I really despite working on
        normal apps. As in, mobile apps, web apps, SaaS, etc...
      </p>

      <p>
        That's a pity because this is were my expertise lies, and I used to enjoy it. I still do, well I have to at work
        for sure, but not as a personal project. Like after 8 hours of meetings and coding at work, the last thing I
        want is to brainstorm user flows and database schemas for another app.
      </p>

      <em class="text-red-500">It reached a point where I despite coding 🫠</em>

      <h2>🤔 Wandering around</h2>

      <p>I then started looking back at goals I wrote down in the previous years, and there was one that keep recurring:
        <b>game development.</b></p>

      <em>I know, I know - what better solution to burnout than to start a whole new field that is still kinda related
        to coding?</em>


      <p>But this time I told myself I would just do a simple tutorial and that's it, I'll give it a chance to see if it
        sparks anything in me.</p>

      <p>I had a course I bought from <a href="https://gamedev.tv/">gamedev.tv</a> back in <b>2021</b> - never finished
        the first chapter. In fact 3 times I tried to finish it over the years.</p>

      <em>Safe to say there were no much hopes here.</em>

      <p>So I get Unity, I boot up my Rider IDE, and start following along. I get a little bit of nostalgia from writing
        <b>C#</b> - for sure still one of my favourite languages. I finally finish the first chapter, then the second,
        and then the third, all in <b>2 days</b>.
      </p>

      <em class="text-orange-500">I don't understand - I was supposed to drop it, as the last three times.</em>

      <p>I retrospect, what happened?</p>

      <ol>
        <li>While doing the course, I turned off copilot and tried to come up with my own solutions during the <i>"homeworks"</i>
        </li>
        <li>During those days I watched A LOT of game-dev on you tube, that really boosted my interest and kept me
          motivated. Hell, did you guys know about <a href="https://www.lexaloffle.com/pico-8.php">PICO-8?</a>
        </li>
        <li><b class="text-indigo">Most important:</b> I was <i>pure-coding</i></li>
      </ol>

      <h3>💻 "Pure-coding"</h3>

      <em>Bare with me guys - I'm about to clarify the term.</em>

      <p>
        Pure coding is how I would describe that feeling of writing code with no-AI, no enterprise patterns, no clean
        architecture and no commercial/product pressure.
      </p>

      <p>
        Just you and your <code>for (var i=0; i&lt;10; i++) { ... }</code> loops, the variables and the logic, the
        purity of a 100 LOC project that just works.
        It reminded me of my days in university, writing my own <b>HashMap</b> implementation in C++. I was the product
        owner, the architect, the developer and the tester.
        I could do whatever I wanted, experiment, break things, and learn.
      </p>

      <h3>3️⃣ After Chapter 3</h3>

      <p>
        Ok, let's go back to the course, after chapter 3 I was so hooked. I decided to take a break and play around
        building my own game.
        And not just that - I also wanted to take up <b>pixel art</b>.
      </p>

      <p>I do actually have a plan for a pretty big game, inspired by <b>Factorio</b> and <b>modded Minecraft</b> - but
        I decided to put it on hold, and first learn on a smaller scale project.</p>


      <h2>🥕 Name TBD?</h2>

      <p>And that's how I decided to build a:</p>
      <ul>
        <li>Farm/Plant breeding game</li>
        <li>Isometric - grid based</li>
        <li>In pixel art</li>
      </ul>

      <h3>🌈 Color/Art exploration</h3>

      <p>First step, I wanted to get a basic color palette for the game. I played around with some from <a
        href="https://lospec.com">Lospec</a> and decided to stick for now with <b>Resurrect 64</b>.</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/cubes.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <p>Then I just tried to build some basic farming tiles I could use in <b>Unity</b> to play around.</p>


      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/plants-demo.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <p>For now I'm sticking to a <b>~32 pixel</b> tile in width. And by the way, isometric art is <b>hard</b>?
      </p>

      <h3>🎮 Unity Time</h3>

      <p>Safe to say that both art and logic when dealing with isometric perspective is not that easy, but Unity does
        help quite a bit. For now I've just:
      </p>

      <ul>
        <li>Set up a basic TileMap with a palette to try the art</li>
        <li>Get used to importing, slicing and setting up the sprites for the isometric view</li>
        <li>Some basic "highlight" selected tile</li>
        <li>And getting started on UI - which I also find quite interesting to deal with in games</li>
      </ul>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/dev-unity.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/something-new/game-view.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <p>Well, it's all WIP and I'm sure things will change, but I'm having a blast.
        And funny enough, I've never been more into coding than now, what started as a sort of burnout, turned into a
        burst of creativity and curiosity.
      </p>

      <em class="text-yellow-500">So much so that I even started using <b class="text-red-500">Vim motions </b>😭</em>

      <p>I don't even know what got into me, I guess I was so excited about learning new things that I just threw Vim in
        the mix as well.
        And honestly right now it's doing more harm than good 🫠 But it's to be expected. I still disable during normal
        work hours sometimes.
      </p>

      <em>And as I'm writing this, oh boy do I regret this decision... ?</em>

      <h2>And then what?</h2>

      <p>More pixel art and more "pure-coding" - the perfect blend of creativity and problem solving. I think I found my
        Outdoor Boys moment.
      </p>

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