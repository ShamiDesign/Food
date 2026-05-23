// import { useEffect, useState } from "react";
// import { BASE_URL } from "../constents/BASE_URL.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRecipe } from "../context/recipe/RecipeContext.jsx";
import { BASE_URL } from "../constents/BASE_URL.jsx";

const RecipeGrid = () => {
  const {recipes}=useRecipe()


  return (
    <section>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Instructions</TableCell>
              <TableCell align="right">Cover Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((item, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{item.title}</TableCell>
                <TableCell component="th" scope="row">
                  {item.ingredients}
                </TableCell>
                <TableCell align="right">{item.instructions}</TableCell>
                <TableCell align="right" sx={{overflow:"hidden", bgcolor:"#eee"}}>
                  <img src={`http://localhost:5000${item.image}`} alt="imagetitle" width={"90px"} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </section>
  );
};

export default RecipeGrid;
