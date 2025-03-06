class UserController {
    getAllUsers(req, res) {
        res.send('List of users');
    }

    getUser(req, res) {
        res.send(`User with ID: ${req.params.id}`);
    }

    createUser(req, res) {
        res.send('User created');
    }

    updateUser(req, res) {
        res.send(`User with ID: ${req.params.id} updated`);
    }

    deleteUser(req, res) {
        res.send(`User with ID: ${req.params.id} deleted`);
    }
}

export default UserController; // Ekspor class
