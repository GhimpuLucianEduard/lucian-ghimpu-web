<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Do I need a DB? - Dev Diary #2</h1>

      <em>August 18, 2023 - Reading Time: 6 minutes</em>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-2/dev-diary-2.png"
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
        <b>MVP.</b>
        Surprisingly, managing the game state in memory does the trick. Plus, the Clients will be
        handling the
        <b>Game History</b>
        storage (and other stuff) anyway.
      </p>
      <p>
        Ready to geek out on some nitty-gritty details? Let's dive into the tech side of things 🧑🏻‍💻
      </p>

      <h2>🪵 Deep Dive: Logging</h2>
      <p>
        Alright, bear with me - logging might not seem like the most cool part of development, but
        trust me, it's a game changer. A top-notch logger can be a lifesaver 📜✨
      </p>
      <p>
        It's my first time working with logging specifically for
        <code>Node.JS.</code>
        Back in the day, my go-to was
        <code>Morgan</code>
        for HTTP logs. Bu now I was on the hunt for something more robust. I envisioned a logger
        that's eloquent in both the console and file, delivering logs in a neat, structured way.
      </p>
      <p>
        And after a bit of soul searching, I settled on a dynamic duo:
        <a href="https://www.npmjs.com/package/winston">Winston</a>
        in tandem with
        <a href="https://www.npmjs.com/search?q=morgan">Morgan</a>
        .
      </p>
      <p>
        In the
        <code>Winston</code>
        universe we talk
        <code>transports</code>
        as log outputs streams:
      </p>
      <ul>
        <li>First up, a colorized console.</li>
        <li>
          And then there's the sleek
          <code>log.json</code>
          file.
        </li>
      </ul>
      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-2/console-log.png"
          alt="Console Log"
        />
        <figcaption>Captivating Console Log</figcaption>
      </figure>
      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-2/json-log.png"
          alt="JSON Log"
        />
        <figcaption>And the JSON Log</figcaption>
      </figure>
      <p>
        And yes, if your keen eyes spotted it, that
        <code>.json</code>
        file logs request data in a brilliantly structured format. This means, in the grand future,
        we can easily query through the entries. 🧐
      </p>
      <div class="not-prose code-block">
        <highlightjs language="json" :code="log_code" />
      </div>

      <p>
        Looking to replicate the same setup? 👀 check
        <a href="https://gist.github.com/GhimpuLucianEduard/580ef0ac319682bdcc89d46221bc5564">
          this gist.
        </a>
      </p>

      <h2>🔎 Inside Look: The API</h2>

      <h3>HTTP - The RESTful Routes</h3>

      <p>As of now, the REST API has two key endpoints:</p>

      <ul>
        <li>
          <code>[POST]</code>
          at
          <code>/game/create</code>
          <ul>
            <li>
              It checks the
              <code>body</code>
              for a
              <code>noPlayers</code>
              parameter.
            </li>
            <li>
              Ensures the number of players is between
              <code>4</code>
              to
              <code>8</code>
              .
            </li>
            <li>
              If successful, a shiny
              <code>game_code</code>
              is dispatched for players to hop into the game.
            </li>
          </ul>
        </li>
        <li>
          <code>[PUT]</code>
          at
          <code>/game/start/:gameCode</code>
          <ul>
            <li>Runs a set of checks to ensure the game is all set and players have huddled in.</li>
            <li>
              Once it's a green signal, each player gets assigned a unique role, all thanks to the
              <code>Treachery</code>
              game guidelines.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        The goal isn't to craft the most bulletproof REST API in town, especially since this one's
        our little secret. So, I'm going with the flow.
      </p>

      <p>Oh, and speaking of structure, here's a glimpse at some models shaping our responses:</p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="model_code" />
      </div>

      <h3>WebSockets - The Real-time Magic</h3>

      <p>
        I'm still experimenting with WebSockets, but I've confidently carved out the basic
        <em>connect, join &amp; send message</em>
        motions - a solid MVP foundation.
      </p>

      <p>
        Yet, there's more to refine, especially those tricky
        <a href="https://github.com/Luka967/websocket-close-codes">web socket close codes</a>
        . I believe things will become clearer as I pair it up with real mobile client tests.
      </p>

      <p>And here's a snapshot of the code:</p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="game_server_code" />
      </div>

      <p>
        Witness the
        <code>game server class</code>
        in all its glory, governing the
        <code>WebSockets</code>
        interactions. All games are neatly stowed in a
        <code>Map</code>
        .
      </p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="game_code" />
      </div>

      <h2>🤺 Treachery's Game Logic</h2>

      <p>
        Alright, I'll keep this segment sleek, since it leans more into the realms of
        <em>MTG</em>
        than tech.
      </p>

      <ul>
        <li>
          We've got a nifty
          <code>Compendium</code>
          class in play. Acts as a scrapper for game rules and materials from
          <a href="https://mtgtreachery.net/en/">https://mtgtreachery.net/en/</a>
          .
        </li>
        <li>
          The core game logic? It's under the trustworthy hands of a specialized
          <code>Treachery</code>
          class.
        </li>
      </ul>

      <p>
        As you might've guessed, I'm all about that encapsulation life. Modular design for the win!
      </p>

      <h2>💭 Wrapping Up and Gearing Up</h2>

      <p>
        Another week down! It's a joy writing down these updates. Beyond serving as a digital
        journal, crafting these entries sharpens my grasp on the subjects at hand. It's a reflective
        exercise, shedding light on the progress I've made.
      </p>

      <p>
        Maybe nobody's out there reading on my every word - but, truth be told, this helps me first.
      </p>

      <p>
        The roadmap ahead? I'm setting my sights on diving deeper into
        <code>WebSocket</code>
        interplay. Stay tuned, and catch you in the next update! 👋
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
const log_code = `{
   "content_length": "33",
   "level": "http",
   "message": "[PUT 200] /game/start/xzjur 3.813ms",
   "method": "PUT",
   "response_time": 3.813,
   "status": 200,
   "timestamp": "2023-08-16T11:38:52.450Z",
   "url": "/game/start/xzjur"
}`;

const model_code = `{
  export enum ResponseStatus {
  Success = 'success',
  Error = 'error',
}

/**
 * HTTP Response
 */

export interface ApiResponse {
  status: ResponseStatus;
  message: string;
  data?: GameResponse | PlayerResponse;
}

export interface GameResponse {
  code: string;
  noPlayers: number;
  createdAt: Date;
  players: Array<PlayerResponse>;
}

export interface PlayerResponse {
  nickname: string;
  role: string | undefined;
}`;

const game_server_code = `export enum WebSocketEvent {
  Connection = 'connection',
  Message = 'message',
  Close = 'close',
  Error = 'error',
}

export class GameServer {
  private server: Server;
  private games: Map<string, Game> = new Map();
  
  // more code here
}`;

const game_code = `enum GameStatus {
  Created = 'created',
  Started = 'started',
}

export class Game {
  private noPlayers: number;
  private code: string;
  private players: Set<Player>;
  private status: GameStatus;
  private createdAt: Date;
}

export class Player {
  public nickname: string;
  public websocket: WebSocket;
  public role: Role;
}`;
</script>

<style lang="postcss" scoped></style>
