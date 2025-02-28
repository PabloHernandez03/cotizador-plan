import { useState } from 'react';
import PatientList from '@/components/patients/PatientList';
import PatientForm from '@/components/patients/PatientForm';
import Button from '@/components/shared/Button';

export default function PatientsView() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">Gestión de Pacientes</h1>

            {/* Botón para agregar paciente */}
            <div className="flex justify-end">
                <Button onClick={() => setShowForm(!showForm)}>
                    {showForm ? 'Cancelar' : 'Agregar Paciente'}
                </Button>
            </div>

            {/* Formulario de paciente (condicional) */}
            {showForm && (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <PatientForm onCancel={() => setShowForm(false)} />
                </div>
            )}

            {/* Listado de pacientes */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Listado de Pacientes</h2>
                <PatientList />
            </div>
        </div>
    );
}