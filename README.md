1) What is a WebSocket?
A WebSocket is a communication protocol that allows a persistent, two‑way (full‑duplex) connection between a client (like a browser or app) and a server over a single TCP connection. Once established, both sides can send messages to each other at any time without repeatedly opening new connections.

2) Why were WebSockets created?
Before WebSockets, web apps relied on HTTP, which follows a request–response model. The client must ask for data before the server can respond.
For real-time features (like chat or live updates), developers had to repeatedly send requests (polling), which was inefficient and slow.

WebSockets were created to:

Reduce latency
Reduce network overhead
Enable real-time communication
Keep a continuous open connection
3) How are WebSockets different from HTTP?
HTTP	WebSocket
Request–response model	Two-way communication
Connection closes after response	Connection stays open
More overhead (headers sent repeatedly)	Lightweight after handshake
Client must request updates	Server can push data anytime
4) How does a WebSocket connection start?
WebSockets begin with an HTTP handshake:

The client sends a special request asking to upgrade the connection.
The server agrees and switches the protocol.
The connection upgrades from HTTP to WebSocket.
After that, it stays open for continuous communication.
This happens only once at the beginning.

5) What does “full‑duplex” mean?
Full-duplex means:

The client and server can send messages simultaneously
No need to wait for the other side to finish
Communication is continuous and real-time
6) What are WebSockets commonly used for?
They are ideal for real-time applications, such as:

Chat applications
Online multiplayer games
Live sports score updates
Stock market tickers
Collaborative tools (like shared documents)
Live notifications
Real-time dashboards
Streaming data systems
7) What makes WebSockets faster than HTTP polling?
No repeated handshakes
No repeated HTTP headers
Lower latency
Less bandwidth usage
Immediate server push capability
Polling constantly checks the server. WebSockets allow the server to instantly send data when available.

8) What ports do WebSockets use?
Standard WebSocket (unsecured): typically port 80
Secure WebSocket (encrypted): typically port 443
Secure WebSockets use encryption similar to HTTPS.

9) What is the difference between WebSocket and Secure WebSocket?
WebSocket (WS) → Not encrypted
Secure WebSocket (WSS) → Encrypted using TLS
WSS is recommended for production environments for security.

10) What are WebSocket “frames”?
After the handshake, data is sent in small units called frames.
Frames:

Carry text or binary data
Are lightweight
Help maintain efficient communication
11) Can WebSockets send different types of data?
Yes. They can send:

Text
JSON
Binary data
Audio/video data
Any structured data format
12) Are WebSockets stateful?
Yes.
Unlike HTTP (which is stateless), WebSockets maintain an active stateful connection. The server remembers the connection until it closes.

13) What are the advantages of WebSockets?
✅ Real-time communication
✅ Low latency
✅ Reduced bandwidth usage
✅ Efficient for frequent updates
✅ Persistent connection

14) What are the disadvantages of WebSockets?
❌ More complex server infrastructure
❌ Persistent connections consume memory
❌ Harder to scale without special architecture
❌ Not ideal for simple one-time requests

15) How do WebSockets handle scaling?
Since connections stay open, each user consumes server resources.
To scale, systems often use:

Load balancers
Distributed servers
Message brokers
Event-driven architectures
Scaling WebSockets requires more planning than traditional HTTP systems.

16) What happens if a WebSocket connection drops?
If the connection drops:

Communication stops immediately
The client must reconnect
Many systems implement automatic reconnection logic
17) Are WebSockets secure?
They can be secure if:

Using Secure WebSocket (WSS)
Proper authentication is implemented
Access controls are enforced
Without encryption, data can be intercepted.

18) Do WebSockets replace HTTP?
No.
They serve different purposes.

Use HTTP for:

REST APIs
File uploads
Page loading
One-time requests
Use WebSockets for:

Continuous real-time communication
Most modern apps use both together.

19) Are WebSockets supported in browsers?
Yes.
All modern browsers support WebSockets natively.

20) When should you NOT use WebSockets?
Avoid WebSockets if:

Your app only needs occasional updates
Real-time communication isn’t required
Server resources are limited
Simple HTTP requests are enough
