import React, { useState } from "react";
import { Modal, Box } from "@mui/material";

interface ImageModalProps {
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <img
        src={imageUrl}
        loading="lazy"
        className="w-full h-auto rounded-lg cursor-pointer"
        style={{ margin: "0 auto" }}
        onClick={handleOpen} // Click để mở modal
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ width: { xs: "80%", md: "70%" } }}>
          <img
            src={imageUrl}
            loading="lazy"
            className="w-full h-auto rounded-lg"
            style={{ margin: "0 auto" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ImageModal;
