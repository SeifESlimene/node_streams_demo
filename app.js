// import { readFile, writeFile } from "node:fs/promises";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";

const stream = createReadStream("video.mp4");
const { size } = await stat("video.mp4");
const read = 0

stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("close", (chunk) => {
  console.log("close");
});

// const content = await readFile("video.mp4");
// await writeFile("video-copy.mp4", content);
