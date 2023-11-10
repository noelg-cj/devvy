// Import your functions
import {
    createUser,
    getUserById,
    createProject,
    createTask,
    createSubtask,
    deleteUser,
    deleteProject,
    deleteTask,
    deleteSubtask,
  } from './api.mjs';  // Update the path accordingly
  
  // Test cases
  async function testApiFunctions() {
    try {
      // Test createUser
      const newUser = await createUser({
        name: 'ABS',
        about: 'PRO',
        github: 'abs',
        email: 'abs@gmail.com',
      });
      console.log('New User:', newUser);
  
      // Test getUserById
      const userId = newUser.id;
      const fetchedUser = await getUserById(userId);
      console.log('Fetched User:', fetchedUser);
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Run the test cases
  testApiFunctions();
  
