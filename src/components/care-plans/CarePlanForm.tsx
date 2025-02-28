import React, { useState } from 'react';
import Button from '@/components/shared/Button';

interface CarePlanFormProps {
    onCancel: () => void;
}

interface CarePlanFormData {
    title: string;
    description: string;
    patientId: string;
    frequency: 'diario' | 'semanal' | 'mensual';
}

const CarePlanForm: React.FC<CarePlanFormProps> = ({ onCancel }) => {
    const [formData, setFormData] = useState<CarePlanFormData>({
        title: '',
        description: '',
        patientId: '',
        frequency: 'diario',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos del plan:', formData);
        // Aquí podrías enviar los datos a una API
        onCancel(); // Cierra el formulario después de enviar
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Título del Plan</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    rows={4}
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Paciente</label>
                <select
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                >
                    <option value="">Seleccione un paciente</option>
                    <option value="1">Juan Pérez</option>
                    <option value="2">María Gómez</option>
                    <option value="3">Carlos Ruiz</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Frecuencia</label>
                <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                >
                    <option value="diario">Diario</option>
                    <option value="semanal">Semanal</option>
                    <option value="mensual">Mensual</option>
                </select>
            </div>

            <div className="flex justify-end gap-4">
                <Button type="button" onClick={onCancel} variant="secondary">
                    Cancelar
                </Button>
                <Button type="submit">Guardar</Button>
            </div>
        </form>
    );
};

export default CarePlanForm;