const baseURL = 'http://localhost:5002/posts'

const getAllPosts = async () => {
    try {
        const response = await fetch(`${baseURL}/get`);
         const data = await response.json();
         console.log(data);
       } catch(error) {
          console.log(error)
         } 
    }
getAllPosts()