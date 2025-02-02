// datas=fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCLpFWdmghLtYZNR6fNR8j-sSbVtW9azF8",{
//     method:"POST",
//     headers:{
//         "Content-type":"Application/json"
//     },
//     body:JSON.stringify({"text":"this is a sample text"})
// }).then((res)=>res.json()).then((data)=>console.log(data))



// datas=fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCLpFWdmghLtYZNR6fNR8j-sSbVtW9azF8")
// console.log(datas)

// curl=fetch( "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=GEMINI_API_KEY" ,{    
//     method: "POST",
//     headers: {'Content-Type': 'application/json'},
//     body: {
//       "contents": [{
//         "parts":JSON.stringify([{"text": "Explain how AI works"}])
//         }]
//     }
// })

// const curl = fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB2BbBhhQkm2gf_xquWWeOnhys3hVrx-iA", {
//     method: "POST",
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       contents: [{"text":"Explain how AI works"}]
//     })
//   });
  
//   curl.then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.error("Error:", error));

// const prompts=[
//     "Write a story about a magic backpack.",
//     "Explain how Artificial Intelligence works.",
//     "Describe the process of photosynthesis in plants.",
//     "List 5 ways to improve productivity at work.",
//     "Summarize the key points of Einstein's theory of relativity.",
//     "Write a poem about the changing seasons.",
//     "What are the main differences between Java and Python?",
//     "Explain the significance of the moon landing in 1969.",
//     "Provide a recipe for a classic Margherita pizza.",
//     "Give advice on how to prepare for a marathon.",
//     "Write a story about a talking dog.",
//     "Explain the concept of blockchain technology.",
//     "Describe the history of the Roman Empire.",
//     "What are the benefits of a healthy diet?",
//     "Create a haiku about a peaceful lake.",
//     "Explain the basics of quantum mechanics.",
//     "What is the significance of the Great Wall of China?",
//     "Write a motivational speech for students.",
//     // "Describe the lifecycle of a butterfly.",
//     // "What are the main causes of climate change?",
//     // "Write a letter to your future self.",
//     // "Explain the Pythagorean theorem in simple terms.",
//     // "What is the importance of biodiversity?",
//     // "Create a list of 10 fun outdoor activities.",
//     // "Write a short story set on Mars.",
//     // "Describe how the internet works.",
//     // "What is the role of the United Nations?",
//     // "Write a guide for starting a small business.",
//     // "Describe the process of making chocolate.",
//     // "Explain the water cycle in detail.",
//     // "What are the steps to solve a Rubik's Cube?",
//     // "Write a poem about a rainy day.",
//     // "Explain the difference between renewable and non-renewable energy.",
//     // "Describe the features of the Amazon rainforest.",
//     // "What are the benefits of meditation?",
//     // "Write a story about a treasure hunt.",
//     // "Explain how photosynthesis works.",
//     // "Describe the cultural importance of the Eiffel Tower.",
//     // "Write tips for learning a new language quickly.",
//     // "What is the function of the heart in the human body?",
//     // "Explain the significance of the Renaissance period.",
//     // "Write a list of top 5 travel destinations.",
//     // "What are the key elements of a good story?",
//     // "Describe the process of creating a video game.",
//     // "What is the importance of exercise for mental health?",
//     // "Write a futuristic story about space exploration.",
//     "Explain the basics of the stock market.",
//     // "Describe the role of bees in pollination.",
//     // "What are the effects of deforestation?",
//     // "Write a letter from a cat to its owner.",
//     // "Explain the key differences between socialism and capitalism.",
//     // "Describe the mechanics of how airplanes fly.",
//     // "What are the top 5 benefits of good sleep?",
//     // "Write a story about a magical forest.",
//     // "Explain how GPS works.",
//     // "What are the basic principles of democracy?",
//     // "Describe the steps in baking a cake.",
//     // "Write an essay about the impact of social media on society.",
//     // "What are the causes and effects of global warming?",
//     // "Describe the differences between saltwater and freshwater ecosystems.",
//     // "What are the top 5 programming languages to learn in 2024?",
//     // "Write a story about a robot learning emotions.",
//     // "Explain the significance of the moon phases.",
//     // "What is the history of the Olympic Games?",
//     // "Write a story about a hidden underwater city.",
//     // "Explain how electric cars work.",
//     // "What are the advantages of solar power?",
//     // "Describe the cultural significance of sushi in Japan.",
//     // "What are the benefits of volunteering?",
//     // "Write a guide on time management for students.",
//     // "Explain the key features of the Milky Way galaxy.",
//     // "What are the components of a healthy lifestyle?",
//     // "Describe the significance of the Statue of Liberty.",
//     // "Write a story about a lost pirate ship.",
//     // "Explain the importance of water conservation.",
//     // "What are the benefits of reading books?",
//     // "Describe the architecture of ancient Egypt.",
//     // "Write a story about a young inventor.",
//     // "Explain the basic principles of magnetism.",
//     // "What are the differences between birds and mammals?",
//     // "Write a story about a magical amulet.",
//     // "Describe the process of fermentation.",
//     // "What are the key elements of a balanced diet?",
//     // "Explain the importance of teamwork in the workplace.",
//     // "Write a story about a futuristic city.",
//     // "Describe the effects of plastic pollution on marine life.",
//     // "What are the benefits of practicing gratitude?",
//     // "Write a guide for building a computer.",
//     // "Explain the significance of the Wright brothers' invention.",
//     // "What are the key differences between fiction and non-fiction?",
//     // "Describe the process of making glass.",
//     // "Write a story about a dragon guarding a secret.",
//     // "Explain the importance of family traditions.",
//     // "What are the top 5 most endangered animals?",
//     "Describe the features of the Sahara Desert.",
//     "What are the principles of effective communication?",
//     "Write a story about a magical library.",
//     "Explain the basics of virtual reality technology.",
//     "What are the benefits of traveling?",
//     "Describe the impact of technology on education.",
//     "Write a story about a secret garden."
// ]
    // const api="AIzaSyDOxwg2uMF-IpwKL8KF-KSpXbGCPCbgMUs"
    // const url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"
    const apikey="AIzaSyAiLTAGhBQ4uQVgpvoGLWdDaXkh9GlMDLo"
    // const apikey="AIzaSyByee4MIz3a1O8xux4HDhk-ce0IV5Ddbv8"
    const apiurl="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

    contents=document.getElementById("content")
    // contents.style.position = "relative";
    contents.style.width = "80%";
    contents.style.height = "500px"; // Adjust height as needed
    contents.style.overflow = "auto"; // Enable scrolling if content overflows
    // contents.style.border = "1px solid #ccc";
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "results-container";
    resultsContainer.style.marginTop = "20px";
    resultsContainer.style.position="absolute"
    resultsContainer.style.top="5%"
    resultsContainer.style.left="15%"
    resultsContainer.style.padding = "10px";
    resultsContainer.style.maxWidth = "100%";
    resultsContainer.style.height="400px";
    resultsContainer.style.overflow="visible"
    resultsContainer.style.margin = "auto";
    // resultsContainer.style.zIndex="-20"
    contents.appendChild(resultsContainer);

    // Create a loading indicator
    const loadingIndicator = document.createElement("h2");
    loadingIndicator.id = "loading-indicator";
    loadingIndicator.style.display = "none";
    loadingIndicator.style.textAlign = "center";
    loadingIndicator.style.padding = "10px";
    loadingIndicator.style.marginTop = "10px";
    loadingIndicator.style.margin="auto"
    loadingIndicator.style.position="absolute"
    loadingIndicator.style.top="25%"
    loadingIndicator.style.left="40%"
    loadingIndicator.innerText = "Loading...";
    document.body.appendChild(loadingIndicator);


input1.addEventListener("keypress",async (e)=>{
    if(e.key=="Enter" && input1.value.trim()!==""){
        e.preventDefault();
        const query=input1.value.trim()

        // if(prompts.includes(query)){
            h1=document.getElementById("h1")
            if(h1){
                h1.style.display="none"
                loadingIndicator.style.display="block"
            }

            try{
                const responce=await fetch(`${apiurl}?key=${apikey}` , {
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify({

                        contents:[
                            {
                                parts:[
                                    {text:query}
                                ]
                            }
                        ]
                    })

                } );
                console.log(responce.ok)
                if(!responce.ok){
                    throw new Error("Failed to fetch data from the API.")
                }
                const data = await responce.json();

                    const generatedContent = data.candidates?.[0]?.content?.parts[0]?.text || "No content generated.";


                    const existingContent = resultsContainer.innerHTML;
                    // resultsContainer.innerHTML = `
                    // <div style="
                    //     margin-bottom: 20px;
                    //     // padding: 15px;
                    //     border-bottom: 1px solid #ccc;
                    //     width:100%;
                    //     height:400px;
                    //     overflow:auto;

                    // ">
                    //     ${generatedContent}
                    // </div>
                    // `;
                    const content = document.createElement("div")
                    const contentDiv = document.createElement("div");
                    contentDiv.style.padding = "10px";
                    contentDiv.style.borderBottom = "1px solid #ddd";
                    contentDiv.style.marginBottom = "10px";
                    // contentDiv.textContent = `${input1.value} : 
                    


                    
                    // ${generatedContent}
                    contentDiv.innerHTML = `<div>${input1.value} : </div>
                    
                    
                    
                    <div>${generatedContent}</div>`;

                    // contentDiv.appendChild(content)

                    resultsContainer.appendChild(contentDiv);

                    loadingIndicator.style.display = "none";

                    // const resultDiv = document.createElement("div");
                    // resultDiv.style.margin = "50px";
                    // // resultDiv.style.position="absolute"
                    // resultDiv.style.top="5%"
                    // resultDiv.style.left="10%"
                    // // resultDiv.style.width="500px"
                    // // resultDiv.style.height="400px"
                    // resultDiv.style.padding = "10px";
                    // resultDiv.style.border = "1px solid #ccc";
                    // resultDiv.style.borderRadius = "5px";
                    // resultDiv.style.maxHeight="400px"
                    // // resultDiv.style.backgroundColor = "#f9f9f9";
                    // // resultDiv.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
                    // // resultDiv.style.overflowWrap = "break-word";
                    // // resultDiv.style.overflow="scroll"
                    // resultDiv.style.overflowY="auto"
                    // // resultDiv.style.overflowY="hidden"

                    // resultDiv.innerText = generatedContent;
                    // // resultsContainer.innerText=generatedContent

                    // // document.body.appendChild(resultDiv);
                    // resultsContainer.appendChild(resultDiv);

                    // search=document.getElementById("search")
                    // // console.log(search)
                
                    // search.style.zIndex="20"

            }catch(error){
                console.error("Error : ",error)

            }finally{
                if(h1){
                    h1.style.display="none"
                }
                loadingIndicator.style.display="none"
                input1.value="";
            }
        // }
        // else{
        //     alert("Prompt not recognized. Please try a valid one.")
        // }
    }
})

