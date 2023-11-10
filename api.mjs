const BASE_URL = 'https://devvy-web-server.onrender.com';

// Function to create a new user
export const createUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (response.ok) {
    return response;
  } else {
    throw new Error(`Failed to create user: ${response.status}`);
  }
};

// Function to get a specific user by ID
export const getUserById = async (userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`,{
    method: 'GET'});
  if (response.ok) {
    const Response = await response.json();
    return Response;
  } else {
    throw new Error(`Failed to get user: ${response.status}`);
  }
};

// Function to create a new project for a user
export const createProject = async (userId, projectData) => {
    const response = await fetch(`${BASE_URL}/users/${userId}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
    if (response.ok) {
      return response;
    } else {
      throw new Error(`Failed to create project: ${response.status}`);
    }
  };
  
  // Function to create a new task for a project
  export const createTask = async (projectId, taskData) => {
    const response = await fetch(`${BASE_URL}/projects/${projectId}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    if (response.ok) {
      return response;
    } else {
      throw new Error(`Failed to create task: ${response.status}`);
    }
  };
  
  // Function to create a new subtask for a task
  export const createSubtask = async (taskId, subtaskData) => {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}/subtasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subtaskData),
    });
  
    if (response.ok) {
      return response;
    } else {
      throw new Error(`Failed to create subtask: ${response.status}`);
    }
  };
  
  // Function to delete a user
  export const deleteUser = async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return 'Deletion successful';
    } 
    else {
      throw new Error(`Failed to delete user: ${response.status}`);
    }
  };

  
  // Function to delete a project
  export const deleteProject = async (projectId) => {
    const response = await fetch(`${BASE_URL}/projects/${projectId}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      return 'Deletion successful';
    } else {
      throw new Error(`Failed to delete project: ${response.status}`);
    }
  };
  
  // Function to delete a task
  export const deleteTask = async (taskId) => {
    const response = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      return 'Deletion successful';
    } else {
      throw new Error(`Failed to delete task: ${response.status}`);
    }
  };
  
  // Function to delete a subtask
  export const deleteSubtask = async (subtaskId) => {
    const response = await fetch(`${BASE_URL}/subtasks/${subtaskId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      return 'Deletion successful';
    } else {
      throw new Error(`Failed to delete subtask: ${response.status}`);
    }
  };
