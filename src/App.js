import EnhancedTable from "./Components/DragDrop/DragDrop";
import './App.css' ;
import { Grid } from "@mui/material";
function App() {
  return (
    <div className="App">
      <center>
        <h1>Drag&Drop</h1>
        <h2>
          Experience seamless organization Sort, filter, and paginate effortlessly, while
          our intuitive drag-and-drop feature enhances usability
        </h2>
        <>
          <Grid container mt={4}>
            <Grid item lg={6} xs={11} margin="auto">
              <EnhancedTable />
            </Grid>
          </Grid>
        </>
      </center>
    </div>
  );
}

export default App;
