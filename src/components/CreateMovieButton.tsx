import React, { useState } from 'react';
import { Movie } from '../types';
import Button from '@mui/material/Button';
import MovieFormDialog from './MovieFormDialog';
import { createMovie } from '../api';

interface CreateMovieButtonProps {
  onCreate: (newMovie: Movie) => void;
}

const CreateMovieButton: React.FC<CreateMovieButtonProps> = ({ onCreate }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCreateMovie = async (newMovie: Movie) => {
    console.log('Created movie:', newMovie);
    try {
      await createMovie({ ...newMovie, id: 0 });
      window.location.reload();
    } catch (error) {
      console.error('Error creating movie:', error);
    }
    handleCloseDialog();
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpenDialog}>
        Create Movie
      </Button>
      <MovieFormDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        movie={{ title: '', description: '', id: 0 }}
        onSave={handleCreateMovie}
        isCreate={true}
      />
    </>
  );
};

export default CreateMovieButton;
