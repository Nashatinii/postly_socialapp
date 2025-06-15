// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Container, Grid, Button, Card, CardContent, Divider, TextField } from '@mui/material';
// import { Trash } from 'lucide-react';

// export default function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showEditEmail, setShowEditEmail] = useState(false);
//   const [showEditPassword, setShowEditPassword] = useState(false);
//   const [newEmail, setNewEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   // Fetch all users from the API
//   useEffect(() => {
//     fetchAllUsers();
//   }, []);

//   const fetchAllUsers = () => {
//     fetch('http://localhost:5000/api/users/')
//       .then(response => response.json())
//       .then(data => setUsers(data.users)) // Extract users array from the response data
//       .catch(error => console.error('Error fetching users:', error));
//   };

//   const handleDeleteUser = (userId) => {
//     fetch(`http://localhost:5000/api/users/${userId}`, {
//       method: 'DELETE'
//     })
//       .then(response => {
//         console.log('User deleted successfully');
//         fetchAllUsers();
//       })
//       .catch(error => console.error('Error deleting user:', error));
//   };

//   const handleUpdateEmail = () => {
//     fetch(`http://localhost:5000/api/users/email/${selectedUser._id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ "email": newEmail }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         console.log('Email updated successfully');
//         setNewEmail('');
//         setShowEditEmail(false);
//         fetchAllUsers();
//       })
//       .catch(error => console.error('Error updating email:', error));
//   };

//   const handleUpdatePassword = () => {
//     fetch(`http://localhost:5000/api/users/password/${selectedUser._id}`, {
//       method: 'PUT',
//       body: JSON.stringify({ password: newPassword }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(response => {
//         console.log('Password updated successfully');
//         setNewPassword(''); 
//         setShowEditPassword(false);
//         fetchAllUsers();
//       })
//       .catch(error => console.error('Error updating password:', error));
//   };

//   return (
//     <div>
//       <AppBar position="static" className='mb-5'>
//         <Toolbar >
//           <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Admin Dashboard
//           </Typography>
         
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="lg" className="my-8">
//         <Grid container spacing={4}>
//           {users.map(user => (
//            <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
//            <Card className="h-full">
//              <CardContent>
//                <div className="flex justify-between items-center">
//                  <Typography variant="h5">{user.username}</Typography>
//                  <div>
//                    <Button variant="contained" color="primary" className="mr-2" onClick={() => setSelectedUser(selectedUser === user ? null : user)}>
//                      {selectedUser === user ? 'Close' : 'Edit'}
//                    </Button>
//                    <Button variant="contained" color="secondary" onClick={() => handleDeleteUser(user._id)}><Trash /></Button>
//                  </div>
//                </div>
//                {(selectedUser && selectedUser._id === user._id) && (
//                  <React.Fragment>
//                    <Divider className="my-4" />
//                    <div className="flex flex-col items-center md:flex-row">
//                    <Button variant="contained" color="primary" className="mb-2 md:mb-0 md:mr-2"  onClick={() => {
//     setShowEditEmail(prevState => !prevState); // Toggle the showEditEmail state
//     setShowEditPassword(false); // Close the password edit field
//   }}
// >
//   {showEditEmail ? 'Cancel' : 'Update Email'}
// </Button>

// <Button variant="contained" color="primary" onClick={() => {
//     setShowEditPassword(prevState => !prevState); // Toggle the showEditPassword state
//     setShowEditEmail(false); // Close the email edit field
//   }}
// >
//   {showEditPassword ? 'Cancel' : 'Update Password'}
// </Button>

//                    </div>
//                    {showEditEmail && (
//                      <div className="mt-4">
//                        <TextField
//                          type="email"
//                          placeholder="Enter new email"
//                          value={newEmail}
//                          onChange={(e) => setNewEmail(e.target.value)}
//                          className="w-full mb-2"
//                        />
//                        <Button variant="contained" color="primary" onClick={handleUpdateEmail} className="mx-2">Save Email</Button>
//                      </div>
//                    )}
//                    {showEditPassword && (
//                      <div className="mt-4">
//                        <TextField
//                          type="password"
//                          placeholder="Enter new password"
//                          value={newPassword}
//                          onChange={(e) => setNewPassword(e.target.value)}
//                          className="w-full mb-2"
//                        />
//                        <Button variant="contained" color="primary" onClick={handleUpdatePassword} className="mx-2">Save Password</Button>
//                      </div>
//                    )}
//                  </React.Fragment>
//                )}
//              </CardContent>
//            </Card>
//          </Grid>
         
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Container,
//   Grid,
//   Button,
//   Card,
//   CardContent,
//   Divider,
//   TextField,
// } from '@mui/material';
// import { Trash } from 'lucide-react';

// export default function AdminDashboard() {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [showEditEmail, setShowEditEmail] = useState(false);
//   const [showEditPassword, setShowEditPassword] = useState(false);
//   const [newEmail, setNewEmail] = useState('');
//   const [newPassword, setNewPassword] = useState('');

//   // استخدم بيانات وهمية بدل الاتصال بالباكيند
//   useEffect(() => {
//     const dummyUsers = [
//       { _id: '1', username: 'user1@example.com' },
//       { _id: '2', username: 'user2@example.com' },
//       { _id: '3', username: 'user3@example.com' },
//     ];
//     setUsers(dummyUsers);
//   }, []);

//   const handleDeleteUser = (userId) => {
//     const updatedUsers = users.filter((user) => user._id !== userId);
//     setUsers(updatedUsers);
//     if (selectedUser?._id === userId) {
//       setSelectedUser(null);
//     }
//   };

//   const handleUpdateEmail = () => {
//     const updatedUsers = users.map((user) =>
//       user._id === selectedUser._id ? { ...user, username: newEmail } : user
//     );
//     setUsers(updatedUsers);
//     setNewEmail('');
//     setShowEditEmail(false);
//   };

//   const handleUpdatePassword = () => {
//     // لا نحدث شيء فعليًا، فقط نحاكي العملية
//     console.log(`Password updated for user ${selectedUser._id}: ${newPassword}`);
//     setNewPassword('');
//     setShowEditPassword(false);
//   };

//   return (
//     <div>
//       <AppBar position="static" className="mb-5">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Admin Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Container maxWidth="lg" className="my-8">
//         <Grid container spacing={4}>
//           {users.map((user) => (
//             <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
//               <Card className="h-full">
//                 <CardContent>
//                   <div className="flex justify-between items-center">
//                     <Typography variant="h5">{user.username}</Typography>
//                     <div>
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         className="mr-2"
//                         onClick={() =>
//                           setSelectedUser(selectedUser === user ? null : user)
//                         }
//                       >
//                         {selectedUser === user ? 'Close' : 'Edit'}
//                       </Button>
//                       <Button
//                         variant="contained"
//                         color="secondary"
//                         onClick={() => handleDeleteUser(user._id)}
//                       >
//                         <Trash />
//                       </Button>
//                     </div>
//                   </div>
//                   {selectedUser && selectedUser._id === user._id && (
//                     <>
//                       <Divider className="my-4" />
//                       <div className="flex flex-col items-center md:flex-row">
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           className="mb-2 md:mb-0 md:mr-2"
//                           onClick={() => {
//                             setShowEditEmail((prev) => !prev);
//                             setShowEditPassword(false);
//                           }}
//                         >
//                           {showEditEmail ? 'Cancel' : 'Update Email'}
//                         </Button>
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           onClick={() => {
//                             setShowEditPassword((prev) => !prev);
//                             setShowEditEmail(false);
//                           }}
//                         >
//                           {showEditPassword ? 'Cancel' : 'Update Password'}
//                         </Button>
//                       </div>
//                       {showEditEmail && (
//                         <div className="mt-4">
//                           <TextField
//                             type="email"
//                             placeholder="Enter new email"
//                             value={newEmail}
//                             onChange={(e) => setNewEmail(e.target.value)}
//                             className="w-full mb-2"
//                           />
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleUpdateEmail}
//                             className="mx-2"
//                           >
//                             Save Email
//                           </Button>
//                         </div>
//                       )}
//                       {showEditPassword && (
//                         <div className="mt-4">
//                           <TextField
//                             type="password"
//                             placeholder="Enter new password"
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)}
//                             className="w-full mb-2"
//                           />
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleUpdatePassword}
//                             className="mx-2"
//                           >
//                             Save Password
//                           </Button>
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
} from '@mui/material';
import {
  Pencil,
  Trash2,
  XCircle,
  CheckCircle,
  Mail,
  Lock,
} from 'lucide-react';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditEmail, setShowEditEmail] = useState(false);
  const [showEditPassword, setShowEditPassword] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Dummy data for users
  useEffect(() => {
    const dummyUsers = [
      { _id: '1', username: 'user1@example.com' },
      { _id: '2', username: 'user2@example.com' },
      { _id: '3', username: 'user3@example.com' },
    ];
    setUsers(dummyUsers);
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user._id !== userId);
    setUsers(updatedUsers);
    if (selectedUser?._id === userId) {
      setSelectedUser(null);
    }
  };

  const handleUpdateEmail = () => {
    const updatedUsers = users.map((user) =>
      user._id === selectedUser._id ? { ...user, username: newEmail } : user
    );
    setUsers(updatedUsers);
    setNewEmail('');
    setShowEditEmail(false);
  };

  const handleUpdatePassword = () => {
    console.log(`Password updated for user ${selectedUser._id}: ${newPassword}`);
    setNewPassword('');
    setShowEditPassword(false);
  };

  return (
    <div className="adminDashboard">
      <AppBar position="static" className="mb-5">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" className="my-8">
        <Grid container spacing={4}>
          {users.map((user) => (
            <Grid item key={user._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-full shadow-md rounded-lg overflow-hidden">
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Typography variant="h5" className="text-lg font-semibold text-gray-800">
                      {user.username}
                    </Typography>
                    <div className="flex gap-2">
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Pencil size={16} />}
                        onClick={() =>
                          setSelectedUser(selectedUser === user ? null : user)
                        }
                        className="text-sm px-3 py-1"
                      >
                        {selectedUser === user ? 'Close' : 'Edit'}
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<Trash2 size={16} />}
                        onClick={() => handleDeleteUser(user._id)}
                        className="text-sm px-3 py-1"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                  {selectedUser && selectedUser._id === user._id && (
                    <>
                      <Divider className="my-4" />
                      <div className="update-btns">
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={showEditEmail ? <XCircle size={16} /> : <Mail size={16} />}
                          onClick={() => {
                            setShowEditEmail((prev) => !prev);
                            setShowEditPassword(false);
                          }}
                          className="w-full mb-2"
                        >
                          {showEditEmail ? 'Cancel Email Update' : 'Update Email'}
                        </Button>
                        <Button
                          variant="outlined"
                          color="primary"
                          startIcon={showEditPassword ? <XCircle size={16} /> : <Lock size={16} />}
                          onClick={() => {
                            setShowEditPassword((prev) => !prev);
                            setShowEditEmail(false);
                          }}
                          className="w-full mb-2"
                        >
                          {showEditPassword ? 'Cancel Password Update' : 'Update Password'}
                        </Button>
                      </div>
                      {showEditEmail && (
                        <div className="editForm mt-4">
                          <TextField
                            type="email"
                            placeholder="Enter new email"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                            className="w-full mb-2"
                            InputProps={{
                              startAdornment: <Mail size={16} className="mr-2" />,
                            }}
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<CheckCircle size={16} />}
                            onClick={handleUpdateEmail}
                            className="w-full"
                          >
                            Save Email
                          </Button>
                        </div>
                      )}
                      {showEditPassword && (
                        <div className="editForm mt-4">
                          <TextField
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full mb-2"
                            InputProps={{
                              startAdornment: <Lock size={16} className="mr-2" />,
                            }}
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<CheckCircle size={16} />}
                            onClick={handleUpdatePassword}
                            className="w-full"
                          >
                            Save Password
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}