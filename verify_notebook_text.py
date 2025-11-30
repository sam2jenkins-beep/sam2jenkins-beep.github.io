# Verify the notebooklm text exists in the file
content = open('index.html').read()
target_text_1 = "This custom CHAT program is designed specifically for you, focusing on both Survivor and Survivor Québec."
target_text_2 = "It comes preloaded with hundreds of resources, including PDFs, podcasts, articles, interviews, and challenge databases."

if target_text_1 in content and target_text_2 in content:
    print("SUCCESS: New NotebookLM text found.")
else:
    print("FAILURE: New NotebookLM text NOT found.")
    exit(1)
