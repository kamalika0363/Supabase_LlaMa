import Replicate from "replicate";

const replicate = new Replicate({
  // get your token from https://replicate.com/account
  auth: "r8_dJCrqd0LDQ6EmabjbSuKxJQFXmXY9Is4QLeWM",
});
const model = "stability-ai/stable-diffusion:27b93a2413e7f36cd83da926f3656280b2931564ff050bf9575f1fdf9bcd7478";
const input = {
  prompt: "a 19th century portrait of a raccoon gentleman wearing a suit",
};
const output =  replicate.run(model, { input });
// ['https://replicate.delivery/pbxt/GtQb3Sgve42ZZyVnt8xjquFk9EX5LP0fF68NTIWlgBMUpguQA/out-0.png']