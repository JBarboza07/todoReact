async function getUsers(endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
//////////LLAMADO POST//////////
async function postUsers(obj,endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}
////////LLAMADO PATCH//////////////
async function patchData(estado,endpoint,id)
{
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(estado)
        });
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}
//////////////LLAMADO DELETE/////////////
async function deleteUser(id,endpoint) {
    try {
        const response = await fetch(`http://localhost:3000/${endpoint}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }
        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}
export { getUsers, postUsers, patchData, deleteUser };