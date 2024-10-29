import TableUsersLine from "./TableUsersLine"

const TableUsers = ({ users, handleDeleteUser }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Excluir</th>
                </tr>
            </thead>
            <tbody>
                {users.map(p => <TableUsersLine usuario={p} key={p.id} 
                    handleDeleteUser={handleDeleteUser}
                />)}
            </tbody>
        </table>
    )
}

export default TableUsers;