import axios from "axios";


const mySecret = process.env['REACT_APP_OPENAI_API_KEY']
const prompt = (characteristics) => `Based on the following characteristics: ${characteristics}, suggest 20 gift ideas: `;

const gpt3Request = async (characteristics) => {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    {
      prompt: prompt(characteristics),
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.8,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const ideas = response.data.choices[0].text.split("\n").filter((idea) => idea.trim());
  return ideas;
};

export default gpt3Request;