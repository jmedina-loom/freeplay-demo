// @ts-expect-error if you remove this, typescript complains that if cannot find the module
import Freeplay from "freeplay/thin";

async function runApp() {
  console.log("creating a freeplay client");

  new Freeplay({
    freeplayApiKey: process.env.FREEPLAY_API_KEY || "",
    baseUrl: process.env.FREEPLAY_BASE_URL || "",
  });
}

runApp();
