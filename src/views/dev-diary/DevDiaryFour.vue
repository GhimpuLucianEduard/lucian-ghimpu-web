<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>Implementing a code text field in Android - Dev Diary #4</h1>

      <em>November 2, 2023 • Reading Time: 6 minutes</em>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1691762564/lucianghimpu.com/dev-diary-4/intro.png"
          alt="Post Image"
        />
        <figcaption>Generated with OpenAI</figcaption>
      </figure>

      <h2>📲 Next up: the Android Project</h2>

      <p>
        Just like I mentioned in my previous dev diary entry, I'm taking a top-down approach. So,
        I've started things off by bootstrapping the Android app 🫡
        <br />
        Ideally, this is supposed to be the
        <em>"easy"</em>
        part, especially since I've been working with Android professionally for some time.
      </p>

      <p>
        And so far, it's been pretty straightforward. I've set up the project, tossed in the
        dependencies, sorted out the basic navigation, helpers, and so on...
      </p>

      <em>Here's a quick demo 👀</em>

      <div class="flex justify-center">
        <video controls class="w-full md:w-1/2">
          <source
            src="https://res.cloudinary.com/dkcw58wif/video/upload/v1698936853/lucianghimpu.com/dev-diary-4/demo.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <p>
        <em>It's not mind-blowing, but hey, it's a start.</em>
      </p>

      <p>So far, the code for the project looks something like this:</p>

      <div class="flex justify-center">
        <figure class="w-full md:w-1/2">
          <img
            src="https://res.cloudinary.com/dkcw58wif/image/upload/v1699010512/lucianghimpu.com/dev-diary-4/project.png"
            alt="Project Structure"
          />
          <figcaption>Snapshot of the Current Project Structure</figcaption>
        </figure>
      </div>

      <p>
        <em>So, anything interesting, Lucian?</em>
        <br />
        Well, in this blog post, I thought I'd discuss the
        <code>CodeTextField</code>
        component. As the name implies, it's an input field for codes. Think of those auth codes
        apps use to confirm your identity via 2FA. In my app, it's not for 2FA, but for granting
        access to a game lobby.
      </p>

      <h2>🔐 CodeTextField - Requirements & Implementation</h2>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1699011810/lucianghimpu.com/dev-diary-4/codefield.png"
          alt="CodeTextField"
        />
        <figcaption>CodeTextField Preview</figcaption>
      </figure>

      <p>The requirements are as follows:</p>

      <ol>
        <li>UI-wise, it should be composed of independent boxes.</li>
        <li>The boxes should function as a single input entity.</li>
        <li>The boxes should have distinct styles based on whether they're empty or not.</li>
        <li>They should have a maximum length (in our case, 5).</li>
      </ol>

      <p>
        Usually, when you need a text input in Android, you'd go for the built-in Material one. But
        that's not really suitable for my use case. Instead, we're going to lean on
        <code>BasicTextField</code>
        . It's a more
        <em>primitive</em>
        component that allows for more fundamental customization while retaining essential text
        field behaviors like text change handling, focus, and keyboard utilities.
      </p>

      <p>
        ℹ️ For those interested in diving deeper into working with Text in
        <b>Android/Jetpack Compose,</b>
        I recommend
        <a href="https://developer.android.com/jetpack/compose/text">this resource.</a>
      </p>

      <h3>The UI</h3>

      <p>
        The built-in component has a parameter
        <code>decorationBox: @Composable (innerTextField: @Composable () -> Unit) -> Unit</code>
        , which grants full control over the UI.
      </p>

      <p>
        As I was mentioning earlier, I'm aiming for some boxes that vary in style depending on
        whether they contain a character:
      </p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="ui_code" />
      </div>

      <p>📝 A few notes:</p>

      <ul>
        <li>
          We're using a
          <code>Row</code>
          as the main container.
        </li>
        <li>
          For each box, we use a regular
          <code>Box</code>
          with basic styling.
        </li>
        <li>
          If there's a character for a specific index, we add a
          <code>Text</code>
          inside the box.
        </li>
        <li>
          Styling is applied throughout using my custom
          <code>Theme</code>
          object - which is just a personalized extension of the
          <b>MaterialTheme.</b>
        </li>
      </ul>

      <h3>Handling Max Length</h3>

      <p>
        Once again, the
        <code>BasicTextField</code>
        provides a parameter for handling text change events:
        <code>onValueChange: (String) -> Unit</code>
        . We'll use this with a custom validation rule:
      </p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="handler_code" />
      </div>

      <p>
        <em>
          <code>onValueChange</code>
          is the normal handler, and
          <code>maxLength</code>
          is the limit we've set.
        </em>
      </p>

      <h3>End Result</h3>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="full_code" />
      </div>

      <p>
        As you can see, in the final rendition I've added some extra parameters for further
        customization.
      </p>

      <p>
        That's it! We now have a functional text code field. Truth be told, during testing, I did
        encounter some focus-related bugs 🐛 But that's all part of the process, and improvements
        are definitely on the horizon 🫡
      </p>

      <h2>👋 Conclusion</h2>

      <p>
        That wraps up this post. I'll probably continue tinkering with the Android app for now as
        I'm quite enjoying it.
      </p>

      <p>Stay tuned for more updates coming soon 🔜</p>
    </article>
  </div>
</template>

<script setup lang="ts">
const ui_code = `Row(
    Modifier.fillMaxWidth(),
    horizontalArrangement = Arrangement.SpaceBetween,
) {
    repeat(length) { index ->
        // if char is not null, show it, otherwise show empty box
        val currentChar = value.getOrNull(index)

        Box(
            modifier = modifier
                .size(56.dp)
                .border(
                    width = 1.dp,
                    color = if (currentChar != null) AppColors.White else AppColors.Gray,
                    shape = Theme.dimensions.radius.medium.toRoundedShape(),
                ),
        ) {
            if (currentChar != null) {
                Text(
                    modifier = Modifier.fillMaxSize(),
                    text = currentChar.toString(),
                    textAlign = TextAlign.Center,
                    style = Theme.typography.hugeTitle.copy(
                        fontWeight = FontWeight.Normal,
                    ),
                )
            }
        }
    }
}`;

const handler_code = `onValueChange = {
    if (it.length <= length) {
        onValueChange(it)
    }
}`;

const full_code = `
@Composable
fun CodeTextField(
    value: String,
    length: Int,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    keyboardOptions: KeyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Text),
    keyboardActions: KeyboardActions = KeyboardActions(),
    onValueChange: (String) -> Unit,
) {
    BasicTextField(
        modifier = modifier,
        value = value,
        singleLine = true,
        onValueChange = {
            if (it.length <= length) {
                onValueChange(it)
            }
        },
        enabled = enabled,
        keyboardOptions = keyboardOptions,
        keyboardActions = keyboardActions,
        decorationBox = {
            Row(
                Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
            ) {
                repeat(length) { index ->
                    // if char is not null, show it, otherwise show empty box
                    val currentChar = value.getOrNull(index)

                    Box(
                        modifier = modifier
                            .size(56.dp)
                            .border(
                                width = 1.dp,
                                color = if (currentChar != null) AppColors.White else AppColors.Gray,
                                shape = Theme.dimensions.radius.medium.toRoundedShape(),
                            ),
                    ) {
                        if (currentChar != null) {
                            Text(
                                modifier = Modifier.fillMaxSize(),
                                text = currentChar.toString(),
                                textAlign = TextAlign.Center,
                                style = Theme.typography.hugeTitle.copy(
                                    fontWeight = FontWeight.Normal,
                                ),
                            )
                        }
                    }
                }
            }
        },
    )
}`;
</script>
