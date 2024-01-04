<template>
  <div class="flex flex-col justify-start items-center container w-full mt-12 pb-12">
    <article class="prose dark:prose-invert lg:w-[856px]">
      <h1>WebSocket in Android using callbackFlow - Dev Diary #5</h1>

      <em>January 04, 2024 • Reading Time: 12 minutes</em>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1704397303/lucianghimpu.com/dev-diary-5/post-image.png"
          alt="Post Image"
        />
        <figcaption>Generated with DALL·E</figcaption>
      </figure>

      <p>It's been a while since my latest update 🫠</p>

      <p>
        Truth be told, I had time to work on the app, but I just didn't feel like it. So, no smart
        excuses here. However, I recently got back to it and had some fun with
        <b>WebSockets</b>
        in Android.
      </p>

      <p>
        To provide a bit of context - I'm working on a side project. I won't go into too many
        details; you can check out previous posts
        <a class="text-indigo" href="/posts?tag=Dev+Diary">here</a>
        👀
      </p>

      <p>
        I've started integrating both
        <b>HTTP</b>
        and
        <b>WebSockets</b>
        for communication with the backend. While HTTP is pretty straightforward (if you're an
        Android developer, you've probably already used libraries like
        <code>Retrofit),</code>
        WebSockets are a bit different. They're not necessarily
        <span class="text-red-500">hard,</span>
        but sometimes managing their
        <b>lifecycle</b>
        can be a bit tricky.
      </p>

      <p>So, in this post, I've decided to share my experience with WebSockets.</p>

      <h2>0. Get an Idea of the Flow</h2>

      <p>Before you start, I recommend two things:</p>
      <ol>
        <li>Create a diagram depicting the possible communication flow</li>
        <li>Review the server's documentation and message structure</li>
      </ol>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1704396901/lucianghimpu.com/dev-diary-5/diagram.png"
          alt="Sample Diagram"
        />
        <figcaption>Sample Diagram</figcaption>
      </figure>

      <p>
        In my case, it's a mix of HTTP and WebSocket (WS) communication. There's definitely more
        communication, but this represents the main flow.
      </p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="messages_code" />
      </div>

      <p>
        For the messages, I use
        <code>JSON,</code>
        although you can use any format you prefer. I find JSON easier to work with since it ensures
        both the client and server code are type-safe.
      </p>

      <p>This step is definitely not mandatory, but it's quite helpful.</p>

      <h2>1. Basic Setup 🔧</h2>

      <p>
        There's not much needed here. In terms of libraries for
        <code>WebSockets,</code>
        you can simply use
        <code>OkHttp3,</code>
        and you're good to go.
      </p>

      <p>In my setup, I also use:</p>
      <ul>
        <li>
          <a class="text-indigo" href="https://kotlinlang.org/docs/serialization.html">
            Kotlin Serialization
          </a>
          for serializing/deserializing messages.
        </li>
        <li>
          <a
            class="text-indigo"
            href="https://developer.android.com/training/dependency-injection/hilt-android"
          >
            Hilt
          </a>
          for Dependency Injection (DI).
        </li>
        <li>And, of course, MVVM, Compose, and Flows for the app architecture.</li>
      </ul>

      <p>Here's a snippet from my network module code:</p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="network_module_code" />
      </div>

      <h2>2. WebSocket Service 🚂</h2>

      <p>This class will be the central point for handling WebSocket-related logic, such as:</p>
      <ul>
        <li>Connecting to the server & managing lifecycle.</li>
        <li>Sending and receiving messages.</li>
        <li>Exposing updates to ViewModels.</li>
      </ul>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="interface_code" />
      </div>

      <p>
        ℹ️ In my setup, there isn't a separate
        <code>connect</code>
        method, as the
        <code>observeLobby</code>
        function also initiates the connection.
      </p>

      <p>
        <code>WebSocketMessage</code>
        comprises a series of data classes that are passed as updates to a ViewModel via
        <code>Flow</code>
        .
      </p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="data_class_code" />
      </div>

      <h2>3. The Service Implementation</h2>

      <p>
        We'll explore each function in detail. Let's start with a few fields in our implementation
        class:
      </p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="implementation_def_code" />
      </div>

      <p>
        The
        <code>webSocket</code>
        field is for sending/receiving messages, and
        <code>isConnectionOpen</code>
        checks if the connection is active. Pretty straightforward so far.
      </p>

      <h3>3.1. observeLobby</h3>

      <p>Here's the primary logic:</p>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="observe_lobby_code" />
      </div>

      <p>Let's break it down:</p>
      <ul>
        <li>
          We use
          <code>callbackFlow</code>
          , which is ideal since
          <code>OkHttp3</code>
          provides callbacks for all necessary actions
        </li>
        <li>
          We set up a
          <code>WebSocketListener</code>
          to handle all callbacks. In these callbacks, we either
          <code>trySend</code>
          a value or
          <code>close</code>
          the flow
        </li>
        <li>
          The WebSocket is created as long as the flow is in use and closed when it's no longer
          needed
        </li>
      </ul>

      <h3>
        3.2.
        <code>sendMessage</code>
        and
        <code>closeConnection</code>
      </h3>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="send_message_code" />
      </div>

      <p>
        These functions are pretty straightforward: sending a message to the server and closing the
        connection.
      </p>

      <h2>4. ViewModel, UI & Testing</h2>

      <p>
        I implemented a dedicated
        <code>DebugScreen</code>
        to debug the WebSocket communication. I actually recommend this approach, as it simplifies
        testing. My debug screen looks like this:
      </p>

      <figure>
        <img
          src="https://res.cloudinary.com/dkcw58wif/image/upload/v1704397303/lucianghimpu.com/dev-diary-5/debug"
          alt="Debug Screen"
        />
        <figcaption>Debug Screen</figcaption>
      </figure>

      <div class="not-prose code-block">
        <highlightjs language="typescript" :code="view_model_code" />
      </div>

      <p>
        As you can see, I observe the
        <code>Flow</code>
        and respond to updates. There are also a few buttons to trigger actions. We'll skip the UI
        code as it's not the focus of this post.
      </p>

      <p>And here's a short demo:</p>

      <div class="flex justify-center">
        <video controls class="w-full">
          <source
            src="https://res.cloudinary.com/dkcw58wif/video/upload/v1698936853/lucianghimpu.com/dev-diary-5/demo.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <h2>Final Thoughts</h2>

      <p>
        Well, that's about it. The code shown isn't 100% final, as I still need to add more message
        types and conduct further testing. But, it's a
        <span class="text-green-500">great start.</span>
      </p>

      <p>
        ℹ️
        <b>BONUS:</b>
        I want to mention that
        <span class="text-indigo">Tinder</span>
        has a library very similar to
        <code>Retrofit</code>
        but for WebSockets, named
        <a class="text-indigo" href="https://github.com/Tinder/Scarlet">Scarlet.</a>
        I used it in the past and found it quite effective. I didn't opt for it this time mainly
        because it's no longer maintained, and I wanted to get my hands dirty 🫡
      </p>

      <p>There's definitely some space to create a more modern Android WebSocket library 👀</p>
    </article>
  </div>
</template>

<script setup lang="ts">
const messages_code = `export enum WebSocketMessageType {
  Join = 'join',
  Ping = 'ping',
}

export interface WebSocketResponse {
  type: WebSocketMessageType;
}

export interface JoinMessage extends WebSocketResponse {
  code: string;
  nickname: string;
}

export interface PingMessage {
  message: string;
}
`;

const network_module_code = `@Module
@InstallIn(SingletonComponent::class)
object NetworkModule {

    @OptIn(ExperimentalSerializationApi::class)
    val networkJson = Json {
        ignoreUnknownKeys = true
        decodeEnumsCaseInsensitive = true
    }

    @Provides
    @Singleton
    fun webSocketClient(): OkHttpClient {
        return OkHttpClient.Builder()
            .build()
    }

    ...
}`;

const interface_code = `interface LobbyService {
    fun observeLobby(): Flow<WebSocketResponse>

    fun sendMessage(message: WebSocketMessage)

    fun closeConnection()
}`;

const data_class_code = `sealed class WebSocketResponse {

    data object Connected : WebSocketResponse()

    data object Closed : WebSocketResponse()

    data object Closing : WebSocketResponse()

    data class Failure(
        val message: String,
        val code: Int,
    ) : WebSocketResponse()

    data class Message(
        val message: WebSocketMessage
    ) : WebSocketResponse()
}`;

const implementation_def_code = `@Singleton
class WebSocketLobbyService @Inject constructor(
    private val okHttpClient: OkHttpClient, // websocket one
) : LobbyService {

    private lateinit var webSocket: WebSocket

    private var isConnectionOpen = false
   
    ...
}`;

const observe_lobby_code = `override fun observeLobby(): Flow<WebSocketResponse> = callbackFlow {
    if (isConnectionOpen) {
        return@callbackFlow
    }

    val webSocketListener = object : WebSocketListener() {
        override fun onOpen(webSocket: WebSocket, response: Response) {
            isConnectionOpen = true
            trySend(WebSocketResponse.Connected)
        }

        override fun onMessage(webSocket: WebSocket, text: String) {
            val message = NetworkModule.networkJson.decodeFromString(
                WebSocketMessage.serializer(),
                text,
            )

            trySend(WebSocketResponse.Message(message))
        }

        override fun onClosed(webSocket: WebSocket, code: Int, reason: String) {
            isConnectionOpen = false
            trySend(WebSocketResponse.Closed)
            close()
        }


        override fun onFailure(
            webSocket: WebSocket,
            t: Throwable,
            response: Response?,
        ) {
            trySend(
                WebSocketResponse.Failure(
                    message = t.message ?: "Unknown Error",
                    code = response?.code ?: -1,
                ),
            )

            webSocket.close(WebSocketCodes.NORMAL_CLOSURE.code, "Closing due to failure")
            isConnectionOpen = false
            close()
        }

        override fun onClosing(
            webSocket: WebSocket,
            code: Int,
            reason: String,
        ) {
            trySend(WebSocketResponse.Closing)
        }


    }

    val request = Request.Builder()
        .url(BuildConfig.WEB_SOCKET_URL)
        .build()
    webSocket = okHttpClient.newWebSocket(request, webSocketListener)

    awaitClose { closeWebSocket() }
}`;

const send_message_code = `override fun sendMessage(message: WebSocketMessage) {
    webSocket.send(
        NetworkModule.networkJson.encodeToString(
            WebSocketMessage.serializer(),
            message,
        ),
    )
}

override fun closeConnection() {
    closeWebSocket()
}

private fun closeWebSocket() {
    if (!::webSocket.isInitialized) return
    webSocket.close(WebSocketCodes.NORMAL_CLOSURE.code, WebSocketCodes.NORMAL_CLOSURE.name)
}`;

const view_model_code = `@HiltViewModel
class DebugViewModel @Inject constructor(
    private val lobbyService: LobbyService,
) : ViewModel() {

    var uiState by mutableStateOf(DebugUIState())
        private set

    fun observerStatusFlow() {
        viewModelScope.launch {
            lobbyService.observeLobby().collect {
                Timber.d("Received status: $it")
                uiState = uiState.copy(
                    connectionStatus = when (it) {
                        is WebSocketResponse.Connected -> WebSocketStatus.CONNECTED
                        is WebSocketResponse.Closed -> WebSocketStatus.CLOSED
                        is WebSocketResponse.Closing -> WebSocketStatus.CLOSING
                        is WebSocketResponse.Failure -> WebSocketStatus.FAILURE
                        else -> uiState.connectionStatus
                    },
                    input = uiState.input + listOf(it),
                )
            }
        }
    }

    fun onConnectClicked() = viewModelScope.launch {
        if (uiState.connectionStatus == WebSocketStatus.CONNECTED) {
            return@launch
        }
        observerStatusFlow()
    }

    fun onDisconnectClicked() {
        lobbyService.closeConnection()
        uiState = uiState.copy(
            connectionStatus = WebSocketStatus.CLOSED,
        )
    }

    fun onJoinGameClicked() {
        val message = WebSocketMessage.Join(
            nickname = "Luci",
            code = "1234",
        )
        uiState = uiState.copy(
            output = uiState.output + listOf(
                message
            ),
        )
        lobbyService.sendMessage(message)
    }

}

data class DebugUIState(
    val connectionStatus: WebSocketStatus = WebSocketStatus.CLOSED,
    val input: List<WebSocketResponse> = emptyList(),
    val output: List<WebSocketMessage> = emptyList(),
)`;
</script>
