<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">

      <h1 class="text-center">
        <a class="no-underline hover:underline" href="https://www.ibangen.io">🏦 ibangen.io</a>
      </h1>

      <h3 class="text-center">
        <a class="no-underline hover:underline" href="https://www.ibangen.io">ibangen.io</a> is a simple
        <span class="text-indigo">IBAN generator</span> that helps you generate IBANs while also providing some handy
        utility features
      </h3>

      <div class="grid grid-cols-2 md:grid-rows-1 md:flex md:flex-row grid-rows-2 gap-2 mt-8">
        <ProjectLabel label="Vue.js" />
        <ProjectLabel label="Tailwind" />
        <ProjectLabel label="Typescript" />
      </div>

      <figure class="mt-12">
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1735745662/lucianghimpu.com/projects/img-iban-gen-home.png"
          alt="iban-gen-home"
        />
      </figure>

      <h2 class="text-center mt-12">🤔 Why</h2>

      <p>
        Working for a Fintech I was finding myself looking for mock IBANs multiple times a day.
        Most of the online tools have multiple issues:
      </p>

      <ol>
        <li>They provide invalid IBANs</li>
        <li>They don't provide it for all countries</li>
        <li>They don't have a <b>copy to clipboard</b> feature 😭</li>
        <li>Clunky UI/UX</li>
      </ol>

      <p>So I decided to create my IBAN Generator with:</p>
      <ol>
        <li>Improved UI/UX 🧑‍🎨</li>
        <li>Support for most countries</li>
        <li>Hot countries 🔥</li>
        <li>Local storage to keep past generated IBANs</li>
        <li>And a copy to clipboard 😭</li>
      </ol>

      <h2>🛠️ Tech Stack</h2>

      <p>It's a simple Vue3 App with:</p>

      <ol>
        <li>Typescript</li>
        <li>Composition API & Pinia 🍍</li>
        <li>Vite ⚡</li>
        <li>Tailwind CSS 🎨</li>
      </ol>

    </article>
  </div>
</template>

<script setup lang="ts">
import ProjectLabel from "../../components/ProjectLabel.vue";
</script>

