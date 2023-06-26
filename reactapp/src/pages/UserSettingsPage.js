// import React, { useState } from 'react';
// import UserManagement from '../components/user/UserManagement';
// import Preferences from '../components/user/Preferences';
// import Enrollments from '../components/user/Enrollments';
// import PaymentInformation from '../components/user/PaymentInformation';
// import AccountDeletion from '../components/user/AccountDeletion';
// const UserSettingsPage = () => {
//   const [activeSection, setActiveSection] = useState('');

//   const renderSection = () => {
//     switch (activeSection) {
//       case 'userManagement':
//         return <UserManagement />;
//       case 'preferences':
//         return <Preferences />;
//       case 'enrollments':
//         return <Enrollments />;
//       case 'paymentInformation':
//         return <PaymentInformation />;
//       case 'accountDeletion':
//         return <AccountDeletion />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h2 onClick={() => setActiveSection('userManagement')}>User Management</h2>
//       <h2 onClick={() => setActiveSection('preferences')}>Preferences</h2>
//       <h2 onClick={() => setActiveSection('enrollments')}>Enrollments</h2>
//       <h2 onClick={() => setActiveSection('paymentInformation')}>Payment Information</h2>
//       <h2 onClick={() => setActiveSection('accountDeletion')}>Account Deletion</h2>
      
//       {renderSection()}
//     </div>
//   );
// };

// export default UserSettingsPage;
import React from 'react';
import { Grid, FormControl, InputLabel, Input, Select, MenuItem, Button } from '@material-ui/core';

function UserManagementSettings() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" type="text" placeholder="Username" />
        </FormControl>
      </Grid>
      {/* Add more form controls for user management settings */}
    </Grid>
  );
}

function PreferencesSettings() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="theme">Theme</InputLabel>
          <Select id="theme" placeholder="Select theme">
            {/* Add theme options */}
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Add more form controls for preferences settings */}
    </Grid>
  );
}

function EnrollmentsSettings() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="course">Course</InputLabel>
          <Select id="course" placeholder="Select course">
            {/* Add course options */}
            <MenuItem value="course1">Course 1</MenuItem>
            <MenuItem value="course2">Course 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Add more form controls for enrollments settings */}
    </Grid>
  );
}

function PaymentSettings() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="cardNumber">Card Number</InputLabel>
          <Input id="cardNumber" type="text" placeholder="Card Number" />
        </FormControl>
      </Grid>
      {/* Add more form controls for payment settings */}
    </Grid>
  );
}

function AccountDeletionSettings() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor="deleteConfirmation">Confirmation</InputLabel>
          <Input id="deleteConfirmation" type="text" placeholder="Type 'DELETE' to confirm" />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="secondary">
          Delete Account
        </Button>
      </Grid>
      {/* Add more form controls for account deletion settings */}
    </Grid>
  );
}

function AccountSettings() {
  return (
    <>
      <UserManagementSettings />
      <PreferencesSettings />
      <EnrollmentsSettings />
      <PaymentSettings />
      <AccountDeletionSettings />
    </>
  );
}

export default AccountSettings;
