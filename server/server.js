const { RtspServer } = require("rtsp-streaming-server");

const server = new RtspServer({
  serverPort: 5554,
  rtpPortStart: 10000,
  rtpPortCount: 10000,
});

async function run() {
  try {
    console.log("server started!");
    await server.start();
  } catch (e) {
    console.error(e);
  }
}

run();
