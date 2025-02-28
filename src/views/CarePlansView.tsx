import { useState } from 'react';
import CarePlanList from '@/components/care-plans/CarePlanList';
import CarePlanForm from '@/components/care-plans/CarePlanForm';
import Button from '@/components/shared/Button';

export default function CarePlansView() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Gestión de Planes de Cuidado</h1>

            {/* Botón para agregar plan */}
            <div className="flex justify-end">
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancelar' : 'Crear Plan'}
                </Button>
            </div>

            {/* Formulario de plan (condicional) */}
            {showForm && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <CarePlanForm onCancel={() => setShowForm(false)} />
                </div>
            )}

            {/* Listado de planes */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Planes de Cuidado</h2>
                <CarePlanList />
            </div>
        </div>
    );
}