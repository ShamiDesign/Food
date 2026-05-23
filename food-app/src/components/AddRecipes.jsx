import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import { useRecipe } from "../context/recipe/RecipeContext.jsx";
import { BASE_URL } from "../constents/BASE_URL.jsx";
const AddRecipes = () => {
  const { addRecipe } = useRecipe();

  const titleRef = useRef();
  const ingerRef = useRef();
  const instRef = useRef();
  const imageRef = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const ingredients = ingerRef.current.value;
    const instructions = instRef.current.value;
    const image = imageRef.current.files[0];
    // const newRecipe = { title, ingredients, instructions, image };

    // معالجه لاستقبال رفع الصور
    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("instructions", instructions);
    formData.append("image", image);
    try {
      const res = await fetch(`${BASE_URL}`, {
       method: "POST",
      
      body: formData,
      });
      console.log(res)
      const data = await res.json();
      addRecipe(data);
      console.log(data);
    } catch (error) {
      console.log("Can't post Data", error);
    }
  };

  return (
    <section className="flex flex-col items-center px-20 mt-10">
      <h1 className="text-2xl  py-5 text-[var(--sec-color)]">
        Add new Racipes{" "}
      </h1>
      <Paper>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            width: 700,

            px: 4,
            py: 6,
            borderRadius: 5,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            inputRef={titleRef}
            id="filled-basic"
            label="Title"
            variant="filled"
            name="title"
          />
          <TextField
            inputRef={ingerRef}
            id="filled-basic"
            label="ingredients"
            variant="filled"
            name="ingredients"
          />

          <TextField
            inputRef={instRef}
            fullWidth
            label="instructions"
            id="fullWidth"
            name="instructions"
          />
          <Box>
            <Button
              component="label"
              variant="contained"
              fullWidth
              sx={{ display: "flex", justifyContent: "space-between", gap: 2, }}
            >
              Upload File :-
              <input ref={imageRef} type="file" accept="image/*"  />
            </Button>
          </Box>
          <Button variant="contained" onClick={handelSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </section>
  );
};

export default AddRecipes;
