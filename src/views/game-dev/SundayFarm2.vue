<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Sunday Farm #2 - Systems and going crazy with fonts</h1>

      <em>January 04, 2026 - Reading Time: 5 minutes</em>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/font.png')"
          :plugins="cloudinary.plugins"
        />
      </figure>

      <p>In this new entry, we trash talk OOP and struggle to create an outlined pixel font 🫠</p>

      <p>I'm also thinking moving these to YouTube maybe, I really enjoy watching dev vlog videos 📹</p>

      <h2>Coding part: I'm about to drop OOP</h2>

      <p>To give you some context, in my day to day life I'm a mobile dev for a banking app. And in general I've been
        coding - let's call them "normal enterprise apps" - my whole life.</p>

      <p>Why I mention this? Well, my brain is wired to use OOP, I see everything around me in domain models, I map them
        in hierarchical trees.</p>

      <em>Turns out this is not the best when coding games</em>

      <p>Originally I was using a hierarchy of this sort:</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/model.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Tile model with subclasses</figcaption>
      </figure>

      <p>Basically, there's a sort of <b>BaseTile</b> with properties, then each sub classes implements it's own <code>transform</code>
        method specific to the tile type</p>

      <p class="text-green-500 font-bold">OOP 101 - right?</p>

      <p>Well, bear with me as I found two big problems with this typical approach:</p>
      <ol>
        <li>An inversion of control problem</li>
        <li>Potential weird hierarchical trees</li>
      </ol>

      <p>1️⃣ <b>The first problem</b> was due to methods like <code>transform</code> (in each subclass) ending up having
        code related to different "systems".</p>
      <ul>
        <li>Resource management</li>
        <li>In game position updates</li>
        <li>Inventory updates</li>
        <li>UI updates</li>
      </ul>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/ic.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Subclasses logic for transform</figcaption>
      </figure>

      <p>This was kinda weird to follow because if let's say I wanted to have a look at all the code that was managing
        the resources, I had to jump between the three files.
        But also I would expect the other way around, the "Manager/System" to control based on the
        entities.</p>

      <p>2️⃣ <b>The second problem</b> started arising when I realised I need <b>a new entity</b> that shares some
        behaviour with the <b>Tile</b> - like let's say it has a cost and a thumbnail BUT there's no actual in game
        position for it, we do not need to render it.</p>

      <p>We could tweak our hierarchy by adding a <code>BaseEntity</code> of sort:</p>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/newentity.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>New BaseEntity model</figcaption>
      </figure>


      <p>⚠️ I realised this was not scalable as I had no idea what features I will end up adding and I was quite sure
        the hierarchy is going to become a mess.</p>

      <h3>💡 ECS (Entity Component System)</h3>

      <p>Now, what I shared above was a slow process, the two problems manifested in parallel slowly and I started
        addressing
        them in time:</p>

      <ol>
        <li>I started moving all code related to one <b>System</b> from anywhere to that <b>System</b></li>
        <li>I've flatten my models hierarchy to the point I'm basically almost not using <b>inheritance</b></li>
        <li>The models are now just holding data</li>
        <li>The system reacts based on the data on the models</li>
      </ol>

      <figure>
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/semiecs.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Cost, Position, Stack and Sprite are just basic data classes, our models can have any of them!
        </figcaption>
      </figure>

      <p>And looking around, what you know, there's actually a paradigm that goes against OOP called <a
        class="text-indigo" href="https://en.wikipedia.org/wiki/Entity_component_system">Entity Component System</a>
        that's basically what I was trying to do.</p>

      <p>TL;DR: ECS revolves around three concepts:</p>
      <ol>
        <li><b>Entities</b> - which are basically just IDs</li>
        <li><b>Components</b> - which are data holders, no logic (e.g. <code>Position</code>)</li>
        <li><b>Systems</b> - which contain the logic and operate on entities based on their components</li>
      </ol>

      <p>The main idea is that we prioritise <b>composition</b> over <b>inheritance</b> - avoiding building rigid
        classes trees.</p>

      <p>There are also some performance benefits you get from this solution, but to be honest I'm not at that point
        yet.</p>

      <p>Now, my implementation is still not <em>pure-ECS</em> - I'm adapting to my use case, but I can definitely see
        the <span class="text-green-500">advantages</span> of using it. Also, I'm sure my explanation barely scratches
        the surface.. I highly recommend diving deeper into it on your own, I just wanted to share it 🫡</p>


      <h2>😭 Art part: Pixel Font Madness</h2>

      <p>I don't even know where to start and where to finish with this. The problem is simple:</p>

      <p class="font-bold">I need a pixel perfect font with different outlines:</p>

      <figure class="w-2/3">
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/font2.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Using a Google Font
        </figcaption>
      </figure>

      <p>The issue is that while I can import it into Unity, I cannot add an outline to it because it's a bitmap based
        font. So I have to draw the font with the outline myself.</p>

      <p class="text-red-500 font-bold">And this is total pain</p>

      <ol>
        <li>I have to draw the font manually in Aseprite using the text tool</li>
        <li>Convert it to ttf to create the shape of the font</li>
        <li>Import it into Unity and use TextMeshPro to create the Font Atlas</li>
        <li>Export the Font Atlas to draw the actual font again with the outline</li>
      </ol>

      <p>I'm still improving this workflow, but it's based <a href="https://www.youtube.com/watch?v=Ov2XR81oVcI">on this
        video</a> - thanks Zac 🙏</p>

      <figure class="w-2/3">
        <AdvancedImage
          :cld-img="cloudinary.createImageInstance('/lucianghimpu.com/game-dev/sundayfarm2/font3.png')"
          :plugins="cloudinary.plugins"
        />
        <figcaption>Drawing the font</figcaption>
      </figure>

      <h2>Conclusions</h2>

      <p>Slow progress but I do not expect much, it takes how much time it takes, and I'm still having fun 🫡</p>

      <em>Not the font drawing part, I hate that.</em>

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