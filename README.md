# 📱 LLM UI Playground

   This is a mobile UI playground that allows users to modify the UI using natural language commands, simulating how an LLM might interpret layout instructions.

   Designed for the [LLM Coding Challenge], it demonstrates prompt interpretation, real-time layout updates, and dynamic UI rendering using React Native and Zustand.

# ✨ Features

   ## 🧠 Natural Language Prompt Bar — type commands like:

      Change title to Settings

      Make the background green

      Move save button to top

      Reset

   ## ⚙️ Prompt-to-Layout Interpreter

      Parses user input into structured JSON

      Applies updates using Zustand layout store

   ## 💡 Mock LLM Layer

      Interprets freeform prompts

      Simulates what an LLM would return in a real integration

   ## 🎨 Dynamic UI

      Title, background color, and button position update live

      Uses LayoutAnimation for smooth transitions

   ## 🔁 Reset Functionality

      Reverts the UI to its original state on demand

# 📸 Demo

   Insert Loom or video link here when ready

# 🛠️ Tech Stack

   Expo (React Native)

   Zustand for state management

   mockLLM.ts for prompt interpretation

   LayoutAnimation for smooth transitions

# 🚀 Getting Started

   git clone https://github.com/bruno-repo/ui-playground
   cd ui-playground
   npm install
   npx expo start

# 🧠 Reflection

   This playground explores how developers and LLMs can collaborate to evolve UIs via natural interaction. It's flexible, extendable, and LLM-ready — and just a ton of fun to build. 😄