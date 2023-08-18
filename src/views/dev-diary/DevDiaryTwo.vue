<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Do I need a DB? - Dev Diary #2</h1>

      <em>August 18, 2023 - Reading Time: 5 minutes</em>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/dev-diary-2.png"
          alt="Post Image"
        />
        <figcaption>Generated with DELLE-2</figcaption>
      </figure>

      <h2>📆 Past Week Progress</h2>

      <p>
        Last week, I dove deep into the backend part, and it's shaping up quite nicely. We've got
        the basics down: logging, error management, basic API responses, and a sprinkle of game
        lobby logic.
      </p>

      <p>
        BUT most important:
        <em><b>I decided to not use a Database</b></em>
      </p>

      <em>Wait, what?</em>

      <p>
        Well I don't need one, or at least not for the first
        <b>MVP,</b>
        I've found that we don't really need one. Surprisingly, managing the game state in memory
        does the trick. Plus, the Clients will be handling the
        <b>Game History</b>
        storage (and other stuff) anyway.
      </p>
      <p>
        Ready to geek out on some nitty-gritty details? Let's dive into the tech side of things 🧑🏻‍💻
      </p>

      <h2>Logging</h2>

      <p>
        I know I know, not the most flashy thing but hey, I like having a propper logger, helps alot
      </p>

      <p>
        Turns out it's my first time I look into logging for
        <code>Node.JS.</code>
        In the past I only used
        <code>Morgan</code>
        for simple HTTP logging. But now I wanted something more robust, something that can handle
        both console and file in a nice structured way.
      </p>

      <p>
        Sooo I ended up with
        <a href="https://www.npmjs.com/package/winston">Winston</a>
        and
        <a href="https://www.npmjs.com/search?q=morgan">Morgan.</a>
        We have two `transports`, as they are called in `Winston` world:
      </p>
      <ul>
        <li>A colorized console one</li>
        <li>
          A
          <code>log.json</code>
          file
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped></style>
