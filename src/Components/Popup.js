import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function Popup({ onClose }) {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>QR Code</DialogTitle>
      <DialogContent>
        <Typography align="center">[QR Code here]</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}












// import React from 'react';

// export default function Popup ({ onClose }) {
//   return (
//     <div className="popup">
//       <div className="popup-inner">
//         <h2>QR Code</h2>
//         <p>[QR Code here]</p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

