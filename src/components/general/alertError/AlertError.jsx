import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertError = ({ setError, error }) => {

      return (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      );
    
}

export default AlertError;