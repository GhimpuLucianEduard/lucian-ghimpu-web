<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Took a break - Figma - Dev Diary #3</h1>

      <em>September 16, 2023 • Reading Time: 6 minutes</em>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/dev-diary-3.png"
          alt="Post Image"
        />
        <figcaption>Generated with DELLE-2</figcaption>
      </figure>

      <h2>🍝 Pasta, Wine and Figma</h2>

      <p>
        It feels like forever since my last dev diary entry. That's because I hit pause on
        everything to take a refreshing break. I ventured out to the enchanting 🇮🇹
        <b>Puglia</b>
        for a vacation, and what a journey that was!
      </p>

      <p>Fast forward a month, and here I am, penning down a fresh entry for my dev diary.</p>

      <em>Yet, with not so much progress to report...</em>

      <p>
        When it comes to the code, I haven't made any progress. After returning, I found myself
        struggling to go back to the backend code. For reasons unknown, it felt overwhelming,
        hinting at burnout. That's when I decided to steer clear of code for a bit and immerse
        myself in the world of design 🧑‍🎨
      </p>

      <p>
        Surprisingly, I find immense joy in tinkering with UI/UX, despite not being a professional
        designer. In fact,
        <b>Figma</b>
        might just be the most frequented app on my computer. I use it for myriad tasks: designing
        projects, crafting diagrams, share ideas, brainstorming, and more 🫡
      </p>

      <h2>🎨 Crafting a Design System</h2>

      <p>
        I dove in, starting screen by screen, particularly with the "create & join lobby" use case.
      </p>

      <p>
        And as each screen took shape, I began extracting tokens and components to form my design
        system.
      </p>

      <p>
        <b>Tokens:</b>
        Think of these as the foundational elements like colors, typography, and icons.
      </p>
      <p>
        <b>Components:</b>
        These are the more complex entities, like a Button.
      </p>

      <p>
        As you can probably tell, I'm pretty thorough with my designs. In fact, I might be even more
        organized with them than I am with my code 😅
      </p>

      <p>
        A huge shoutout to all the UI/UX people I've had the honor of working with. I've learned so
        much from them.
      </p>

      <em>Now, let's dive into some details 👀</em>

      <h3>Colors</h3>

      <p>
        For this, I began with the
        <a href="https://mtgtreachery.net/en/">original website.</a>
        I delved into their stylesheet and extracted a few colors.
      </p>

      <p>
        I liked the gradient they used for the background, but from there, I decided to craft my own
        palette.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/colors.png"
          alt="Colors"
        />
        <figcaption>Colors</figcaption>
      </figure>

      <h3>Typography</h3>

      <p>
        On the typography front, things are pretty straightforward for now. I'm sticking to
        <b>Lato</b>
        — a fundamental, yet aesthetically pleasing font.
      </p>

      <p>
        I'm definitely considering another font to enhance titles and headers. Still thinking over
        the choices.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/typo.png"
          alt="Typography"
        />
        <figcaption>Typography</figcaption>
      </figure>

      <h3>Icons</h3>

      <p>For icons, I borrowed a few resources from the original website.</p>

      <p>
        I also stumbled upon a link to
        <a href="https://game-icons.net/">game-icons.net</a>
        on their site. An amazing website, It's packed with a vast array of game-specific icons.
      </p>

      <p>
        Additionally, I turned to the trusty
        <a href="https://fonts.google.com/icons">material icons</a>
        for some fundamental mobile icons, like back arrows, copy-to-clipboard symbols, and the
        like.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/resources.png"
          alt="Icons"
        />
        <figcaption>Icons</figcaption>
      </figure>

      <h3>Components</h3>

      <p>
        For components, I've kept things rather basic so far, focusing primarily on navigation
        elements and buttons. You can actually see the various tokens in action here.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/components.png"
          alt="Components"
        />
        <figcaption>Components</figcaption>
      </figure>

      <h2>Create & Join Lobby</h2>

      <p>Now, let's see the first screen: creating/joining a lobby:</p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-3/flow.png"
          alt="Flow"
        />
        <figcaption>The Create/Join Lobby Flow</figcaption>
      </figure>

      <p>
        This functions much like a step-by-step wizard to guide users in creating or joining a
        lobby.
      </p>

      <ul>
        <li>Step 1: A host initiates by creating a lobby</li>
        <li>Step 2: The host configures the game parameters</li>
        <li>Step 3: The host then waits for others to join the game using the generated code</li>
      </ul>

      <p>
        Implementing this flow will be a great opportunity for me to test the WebSocket logic
        further, allowing me to identify potential edge cases and refine the error-handling
        mechanism.
      </p>

      <h2>Wrap-up 👋</h2>

      <p>
        That wraps it up! I'm contemplating switching to a
        <b>top-down</b>
        approach or maybe oscillating between the two methods. Admittedly, backend code can
        sometimes bore me, and I often find myself craving visible results.
      </p>

      <p>For now, I'm very happy to have finished my 3rd entry in this dev diary!</p>
    </article>
  </div>
</template>
