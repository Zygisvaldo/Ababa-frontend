import React, { useState } from 'react';
import { Movie } from '../types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface EditMovieDialogProps {
  open: boolean;
  onClose: () => void;
  movie: Movie;
  onSave: (editedMovie: Movie) => void;
}

const EditMovieDialog: React.FC<EditMovieDialogProps> = ({ open, onClose, movie, onSave }) => {
  const [editedMovie, setEditedMovie] = useState<Movie>({ ...movie }); // Initialize with the current movie data

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
    <Dialog open={open} onClose={onClose} maxWidth="md" sx={{ '& .MuiDialog-paper': { minWidth: '400px', minHeight: '400px' } }}>
      <DialogTitle>Edit Movie</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          value={editedMovie.title}
          onChange={handleTitleChange}
          sx={{ my: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          value={editedMovie.description}
          onChange={handleDescriptionChange}
          multiline
          rows={4}
          sx={{ my: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMovieDialog;
