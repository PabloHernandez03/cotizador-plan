import { useState } from 'react';
import Button from '@/components/shared/Button';

export default function ProfileView() {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: 'Dr. Juan Pérez',
        email: 'juan.perez@hospital.com',
        role: 'Médico',
    });

    const handleSave = () => {
        setIsEditing(false);
        // Aquí podrías enviar los datos actualizados a una API
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Perfil de Usuario</h1>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Información Personal</h2>

                {/* Nombre */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    {isEditing ? (
                        <input
                            type="text"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    ) : (
                        <p className="mt-1 text-gray-900">{user.name}</p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    {isEditing ? (
                        <input
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    ) : (
                        <p className="mt-1 text-gray-900">{user.email}</p>
                    )}
                </div>

                {/* Rol */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Rol</label>
                    <p className="mt-1 text-gray-900">{user.role}</p>
                </div>

                {/* Botones */}
                <div className="flex justify-end gap-4">
                    {isEditing ? (
                        <>
                            <Button onClick={() => setIsEditing(false)} variant="secondary">
                                Cancelar
                            </Button>
                            <Button onClick={handleSave}>Guardar</Button>
                        </>
                    ) : (
                        <Button onClick={() => setIsEditing(true)}>Editar</Button>
                    )}
                </div>
            </div>
        </div>
    );
}