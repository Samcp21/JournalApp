import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      sx={{ mb: 1 }}
      className="animate_animated animate_fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          21,agosto,2001
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ Padding: 2 }}>
          <SaveOutlined sx={{ fontsize: 30, mr: 1 }}>Guardar</SaveOutlined>
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingresar un titulo"
          label="Titulo"
          sx={{ border: "none", mb: 1 }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que noveda hubo hoy?"
          label="Titulo"
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
