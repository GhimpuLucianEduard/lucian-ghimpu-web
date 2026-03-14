---
name: new-blog-post
description: Scaffold a new blog post across all 3 required files in this Vue/Pinia/Vue Router site. Use this skill whenever the user says "add a blog post", "new post", "create a post", "scaffold a post", or anything similar — even if they don't say "skill". Always use this skill for blog post creation, not just answer freeform.
---

# New Blog Post Scaffold

Every new blog post requires exactly **3 file changes**. Always make all 3. Never skip one.

## Project conventions

- Views: `src/views/[category]/[ComponentName].vue`
- Categories: `blog` | `dev-diary` | `fire` | `game-dev` | `law-app-diary`
- Store: `src/store/index.ts` — prepend to the top of the `posts` array (most recent first)
- Router: `src/router/index.ts` — import + route entry before the `/:pathMatch(.*)*` catch-all

---

## Required inputs

Ask the user for these if not already provided:

| Field | Example |
|---|---|
| Title | `Sunday Farm #3 - Pathfinding` |
| Subtitle | `March 14, 2026 - Reading Time: 4 minutes` |
| Category | `game-dev` |
| ComponentName | `SundayFarm3` (PascalCase) |
| RoutePath | `/game-dev/sunday-farm-3` |
| RouteName | `sunday-farm-3` (kebab-case) |
| Tags | `['Game Dev']` |
| Image URL | Cloudinary URL |
| Preview content | 1–2 short HTML sentences for the posts list |

---

## File 1 — View component

Create `src/views/[category]/[ComponentName].vue`:
```vue
<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>TITLE</h1>
      <em>SUBTITLE</em>

      <figure>
        <img src="IMAGE_URL" alt="Post Image" />
        <figcaption>CAPTION</figcaption>
      </figure>

      <!-- POST CONTENT HERE -->

    </article>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped></style>
```

---

## File 2 — Store entry

Prepend to the top of the `posts` array in `src/store/index.ts`:
```ts
{
  title: 'TITLE',
  subtitle: 'SUBTITLE',
  tags: TAGS,
  intro: '',
  link: 'ROUTE_PATH',
  image: 'IMAGE_URL',
  content: `
    <p>PREVIEW_LINE_1</p>
    <p>PREVIEW_LINE_2</p>
  `,
},
```

---

## File 3 — Router

Add the import in `src/router/index.ts`, grouped with the same category imports:
```ts
import COMPONENT_NAME from '@/views/CATEGORY/COMPONENT_NAME.vue';
```

Add the route before the `/:pathMatch(.*)*` catch-all:
```ts
{
  path: 'ROUTE_PATH',
  name: 'ROUTE_NAME',
  component: COMPONENT_NAME
},
```

---

## Output

Show the complete content of all 3 files, ready to copy-paste. Do not summarize or abbreviate.