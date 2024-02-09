const baseURL = 'http://127.0.0.1:5002/posts'

const getAllPosts = async () => {
    try {
        const response = await fetch(`${baseURL}/`);
         const data = await response.json();
         console.log(data);
       } catch(error) {
          console.log(error)
         } 
    }
getAllPosts()