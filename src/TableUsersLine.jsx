
const TableUsersLine = ({ usuario, handleDeleteUser }) => {
    return (
        <tr>
            <td>{usuario.id}</td>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
            <td>{usuario.telefone}</td>
            <td>
            {
                <button className="btn btn-danger btn-sm" title="Excluir Usuário" onClick={() => handleDeleteUser(usuario.id)}>
                    <i className="bi bi-trash"></i>
                </button>
                
            }</td>

        </tr>
    )
}

export default TableUsersLine;