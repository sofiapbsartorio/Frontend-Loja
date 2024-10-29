import React, { memo } from 'react'
import { useEffect, useState } from "react";
import TableUsers from "./TableUsers";
import api from "./axiosApi";
import Loading from "./Loading";
import ModalConfirm from "./ModalConfirm";
import NoUsers from './NoUsers';

const Users = memo((props) => {
  const [users, setUsers] = useState([]);
    const [selectedUsersId, setSelectedUserId] = useState(0);
    const [loading, setLoading] = useState(true);

    const loadUsers = () => {
        setLoading(true);
        const usersEndpoint = "obter_usuarios";
        api.get(usersEndpoint)
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    const deleteUsers = (userId) => {
        setLoading(true);
        api.post("excluir_usuario", {"id_usuario": userId})
            .then(response => {
                if (response.status === 204)
                    loadUsers();
            })
            .catch(error => {
                console.error('Erro ao excluir usuario:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleDeleteUser = (userId) => {
        setSelectedUserId(userId);
        const modal = new bootstrap.Modal(document.getElementById('modalDeleteUser'));
        modal.show();
    }

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <>
        {users.length > 0 ?
            <>
                <ModalConfirm modalId="modalDeleteUser" question="Deseja realmente excluir o usuário?" confirmAction={() => deleteUsers(selectedUsersId)} />
                <TableUsers users={users} handleDeleteUser={handleDeleteUser} /> :
            </> :
            (!loading && <NoUsers />)
        }
            {loading && <Loading />}
        </>
    );
})

Users.propTypes = {}

export default Users