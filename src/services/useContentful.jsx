import { createClient } from "contentful";
import { TOKEN } from "./token";

const useContentful = () => {
  // The following data is copied from ContentFul platform "Settings -> API keys":
  // use of accessToken for content preview to receive also draft items
  const client = createClient({
    space: "gkpegdy872u1",
    accessToken: TOKEN,
    host: "preview.contentful.com",
  });

  // fetch recipes matching the title
  // fetch all, if none specified
  const getRecipes = async (title) => {
    try {
      const entries = await client.getEntries({
        content_type: "recipe",
        select: "fields",
        order: "fields.title",
        // each line is a query option
        "fields.title[match]": title
        //"fields.categories.sys.id": category
      });

      //console.log(entries);
      return sanitizeEntries(entries);
    } catch (error) {
      console.log("Error fetching recipes: " + error);
    }
  }

  // get recipe for specified ID
  const getRecipeDetails = async (id) => {
    try {
      const entry = await client.getEntry(id);
      
      return sanitizeEntry(entry);
    } catch (error) {
      console.log("Error fetching specific recipe: " + error);
    }
  }

  // helper function 
  const sanitizeEntry = (entry) => {
    //const image = entry.fields.image.fields;
    // handle empty images
    const image = entry.fields.image !== undefined ? entry.fields.image.fields : { file: {url: "https://via.placeholder.com/220x150/efefef/efefef"}, title: ""};
    return {
      ...entry.fields,
      image
    };
  };

  // helper function 
  const sanitizeEntries = (entries) => {
    const sanitizedEntries = entries.items.map((item) => {
      // handle empty images
      const image = item.fields.image !== undefined ? item.fields.image.fields : { file: {url: "https://via.placeholder.com/220x150/efefef/efefef"}, title: ""};
      const sys_id = item.sys.id;

      // replace image and append sys_id
      return {
        ...item.fields,
        image, sys_id
      };
    });
    return sanitizedEntries;
  }

  return { getRecipes, getRecipeDetails };
};

export default useContentful;