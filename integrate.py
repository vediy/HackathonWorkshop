import openai

# Copy and paste our API key on the line below
openai.api_key = 'YOUR_API_KEY'
messages = [ {"role": "system", "content": 
              "You are a intelligent assistant."} ]

# Create an infinite loop so we can have a continuous conversation with the AI
while True:
    message = input("User : ")
    if message:
        messages.append(
            {"role": "user", "content": message},
        )
      # Access the correct model of GPT for the code
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )
    reply = chat.choices[0].message.content
  # print whatever reply the AI comes up with into the terminal
    print(f"ChatGPT: {reply}")
    messages.append({"role": "assistant", "content": reply})
