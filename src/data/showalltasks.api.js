import {deliveryClient, managementClient} from '../config/contenful'


export const getAllTasks = async() => {
    try{
        const response = await deliveryClient.getEntries({
        content_type: 'taskManager',
        order: '-sys.createdAt',
    });
    return response.items;
    }catch(error){
    console.error('Error fetching tasks', error);
    return [];
};   
} 

export const createTask = async (tasksData) => {
    //create a new task
    try{
        const space = await managementClient.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID);
        const environment = await space.getEnvironment('master');


        const entry = await environment.createEntry('taskManager', {
            fields: {
                taskTitle: { 'en-US': tasksData.taskTitle },
                taskDescription: { 'en-US': tasksData.taskDescription },
                startDate: { 'en-US': new Date(tasksData.startDate).toISOString() },
                endDate: { 'en-US': new Date(tasksData.endDate).toISOString() },
                status: { 'en-US': tasksData.status },
                taskGiven: { 'en-US': tasksData.taskGiven },
            },
        }); 
        
        //Publish the entry in Contentful status
        const publishedEntry = await entry.publish();
        return publishedEntry;

    }catch(error){
    console.error('Error creating task:', error);
    throw error; // Re-throw for the caller to handle
    }
};


export const updateTask = async (id, updatedData) => {
  try {
    // get entry by id
    const entry = await managementClient
      .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
      .then(space => space.getEnvironment("master"))
      .then(env => env.getEntry(id));

    // update fields
    Object.keys(updatedData).forEach(key => {
      entry.fields[key] = {
        "en-US": updatedData[key] // contentful expects localized values
      };
    });

    // save + publish
    const updatedEntry = await entry.update();
    await updatedEntry.publish();

    return updatedEntry;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};


export async function deleteTask(taskId) {
  try {
    const space = await managementClient.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master"); // or your environment id
    const entry = await environment.getEntry(taskId);
    await entry.unpublish().catch(() => {}); // unpublish first if published
    await entry.delete();
    return true;
  } catch (error) {
    console.error("Error deleting task:", error);
    return false;
  }
}