import React, { useState, useEffect } from 'react';
import { Movie } from '../types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface MovieFormDialogProps {
  open: boolean;
  onClose: () => void;
  movie: Movie;
  onSave: (editedMovie: Movie) => void;
  isCreate: boolean;
}

const MovieFormDialog: React.FC<MovieFormDialogProps> = ({
  open,
  onClose,
  movie,
  onSave,
  isCreate,
}) => {
  const [editedMovie, setEditedMovie] = useState<Movie>({ ...movie });
  const maxTitleCharacters = 50;
  const maxDescriptionCharacters = 175;

  useEffect(() => {
    setEditedMovie({ ...movie });
  }, [movie]);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMovie({ ...editedMovie, title: event.target.value });
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedMovie({ ...editedMovie, description: event.target.value });
  };

  const handleSave = () => {
    onSave(editedMovie);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>{isCreate ? 'Create Movie' : 'Edit Movie'}</DialogTitle>
      <DialogContent >
        <TextField
          fullWidth
          label="Title"
          value={editedMovie.title}
          onChange={handleTitleChange}
          sx={{ my: 2 }}
          InputProps={{
            inputProps: {
              maxLength: maxTitleCharacters,
            },
          }}
        />
        <TextField
          fullWidth
          label="Description"
          value={editedMovie.description}
          onChange={handleDescriptionChange}
          multiline
          rows={4}
          sx={{ my: 2 }}
          InputProps={{
            inputProps: {
              maxLength: maxDescriptionCharacters,
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSave} color="primary">
          {isCreate ? 'Create' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieFormDialog;
