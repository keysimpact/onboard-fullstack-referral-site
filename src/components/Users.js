const { useState, useEffect } = require("react")

const Users = () => {

    const [users, setUsers] = useState

    return (
    <article>
        <h2>Users List</h2>
        {users?.length
        ? (
            <ul>
                {users.map((user,i) => <li key={i}>{user?.username}</li>)}
            </ul>
        ) :
        (<div>No users to display</div>)
    }
    </article>
    )
}