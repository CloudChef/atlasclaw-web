import { mkdir, readdir, rename, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(projectDirectory, "dist");
const clientDirectory = join(outputDirectory, "client");
const serverDirectory = join(outputDirectory, "server");

await mkdir(clientDirectory, { recursive: true });

for (const entry of await readdir(outputDirectory)) {
  if (entry === "client" || entry === "server") {
    continue;
  }

  await rename(
    join(outputDirectory, entry),
    join(clientDirectory, entry),
  );
}

await mkdir(serverDirectory, { recursive: true });
await writeFile(
  join(serverDirectory, "index.js"),
  `const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const method = request.method.toUpperCase();

    if (response.status !== 404 || (method !== "GET" && method !== "HEAD")) {
      return response;
    }

    const url = new URL(request.url);
    const lastSegment = url.pathname.split("/").at(-1) ?? "";
    const looksLikeFile = lastSegment.includes(".");

    if (looksLikeFile) {
      return response;
    }

    url.pathname = \`\${url.pathname.endsWith("/") ? url.pathname : \`\${url.pathname}/\`}index.html\`;
    return env.ASSETS.fetch(new Request(url, request));
  },
};

export default worker;
`,
  "utf8",
);
