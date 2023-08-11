<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Treachery App - Dev Diary #1</h1>

      <em>August 12, 2023 - Reading Time: 5 minutes</em>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/motivation.png"
          alt="Image illustrating motivation"
        />
        <figcaption>Generated with DELLE-2</figcaption>
      </figure>

      <h2>👀 Where Did My Motivation Go?</h2>

      <p>
        Over the past months, I've hit several roadblocks trying to kick off, maintain, or wrap up
        personal projects. Whether it's diving into a new tech topic, experimenting with a mini-app,
        or crafting a fully fleshed-out product, the motivation just wasn't there.

        <em>So, the big question - why?</em>

        After some introspection, I pinpointed it to a couple of major culprits:
      </p>

      <ul>
        <li>Overthinking the nitty-gritty (like deciding on the tech stack)</li>
        <li>The ever-elusive motivation slipping away</li>
      </ul>

      <p>
        Now, the logical step for most would be to dig deeper into the underlying issues, perhaps
        consult some insightful literature or seek advice.
      </p>
      <em>Me? I opted to embark on yet another project 🫡</em>

      <p>This time around, to tackle the aforementioned challenges, I've resolved to:</p>

      <ol>
        <li>Ride the wave and not dwell too much on the details ⚡️</li>
        <li>
          Kick off a
          <code>dev diary,</code>
          ensuring I stay on track and transparent about my journey –
          <em>hence, this very post</em>
        </li>
      </ol>

      <h2>🔪 MTG Treachery App</h2>

      <p>So, you might be wondering, "Lucian, what groundbreaking idea are you cooking up?"</p>

      <em>Drumroll... None 👀</em>

      <p>
        My plan? Take the existing web app,
        <a href="https://mtgtreachery.net/en/">MTG Treachery,</a>
        and bring it to mobile. In simple terms, this app serves as a game lobby for
        <b>Treachery,</b>
        a specific
        <b>Magic The Gathering</b>
        format (or game mode).
      </p>

      <em>But hold on, if there's a web version accessible via phone, why bother?</em>

      <ol>
        <li>
          The web variant isn't the epitome of stability. Plus, let's be honest, native feels so
          much better than web on mobile.
        </li>
        <li>I've been itching to dive into developing a mobile app for both major platforms.</li>
        <li>
          This project is
          <b>manageably sized,</b>
          so there's no need for a complex infrastructure.
        </li>
        <li>
          (Bonus) I've always dreamt of establishing an
          <b>open-source</b>
          MTG Companion app, inviting collaboration from the community.
        </li>
      </ol>

      <p>
        I realize I might've lost a few people so far, so here's a quick recap: I'm building a
        game-lobby app that facilitates real-time communication between multiple users.
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691787931/app-diagram.png"
          alt="Diagram showcasing the app's architecture"
        />
        <figcaption>A bird's-eye view of the app's structure.</figcaption>
      </figure>

      <h2>🧑🏻‍💻 The Techy Bits: Stack Decisions</h2>

      <p>At a minimum, here's what we're looking at:</p>
      <ol>
        <li>A simple Backend</li>
        <li>Clients for Android and iOS</li>
      </ol>

      <h3>🏗️ Diving into the Backend</h3>

      <p>Truth be told, I've already got a game plan for it:</p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691787931/backend-board.png"
          alt="Visual representation of the backend board"
        />
        <figcaption>The initial blueprint of the backend board</figcaption>
      </figure>

      <p>
        As you've probably gleaned, I'm throwing my weight behind
        <b>Node.js</b>
        — it's straightforward and gets the job done. As for the other choices:
      </p>
      <ul>
        <li>
          🍀
          <code>MongoDB</code>
          — My go-to for every passion project
        </li>
        <li>
          🤙
          <code>WebSockets</code>
          — Nailing that client-server chit-chat
        </li>
        <li>
          📐
          <code>Typescript</code>
          — Because who doesn't appreciate the comfort of type-safety?
        </li>
      </ul>

      <p>
        Not gonna lie, I'm a little bit scared of
        <b>WebSockets,</b>
        especially handling their
        <em>lifecycle.</em>
        I even toyed with the idea of using
        <code>ASP.NET core + SignalR,</code>
        but that felt like bringing a bazooka to a knife fight.
      </p>

      <p>
        And just for fun, here's a glimpse of the Proof-of-Concept that came out of my sandbox
        sessions with the
        <code>ws</code>
        library:
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691787931/diary1-postman.png"
          alt="Screenshot from Postman"
        />
        <figcaption>Game created with a mere POST request</figcaption>
      </figure>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691787931/diary1-ws.png"
          alt="WebSocket operations"
        />
        <figcaption>Players connect and join a game using a code</figcaption>
      </figure>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691787931/diary1-node.png"
          alt="Node logs"
        />
        <figcaption>The logs of intrepid players connecting and joining the adventure</figcaption>
      </figure>

      <blockquote>
        <p>It's not much, but it's honest work</p>
      </blockquote>

      <h3>📱 The Apps</h3>

      <em>void... for now</em>

      <p>
        As someone entrenched in the
        <code>Android</code>
        development world, I could easily fall back on native. Sure, I've dabbled with iOS too.
      </p>

      <p>
        Yet, there's this call from `React Native` that's getting increasingly hard to ignore. 👀
      </p>

      <p>
        Choices, choices! For the moment though, my eyes are set on getting that backend up and
        running, we'll see in next
        <code>dev diary</code>
        posts.
      </p>
    </article>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped></style>
