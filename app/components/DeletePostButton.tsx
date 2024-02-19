"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { TrashIcon } from '@radix-ui/react-icons';

const DeletePostButton = ({ id }: { id: string; }) => {
    const router = useRouter();

    const handleDelete = async () => {
        try {
            await fetch(`/api/delete-post/${id}`, {
                method: 'DELETE',
            })
            router.refresh();
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div><TrashIcon style={{ color: 'red' }} width={20} height={20} onClick={handleDelete} /></div>
    )
}

export default DeletePostButton