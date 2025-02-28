export default function PatientList() {
    const patients = [
        { id: 1, name: 'Juan Pérez', age: 45, condition: 'Diabetes' },
        { id: 2, name: 'María Gómez', age: 34, condition: 'Hipertensión' },
        { id: 3, name: 'Carlos Ruiz', age: 50, condition: 'Rehabilitación' },
    ];

    return (
        <div className="space-y-3">
            {patients.map((patient) => (
                <div
                    key={patient.id}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg"
                >
                    <div>
                        <p className="text-gray-800 font-medium">{patient.name}</p>
                        <p className="text-sm text-gray-500">
                            {patient.age} años · {patient.condition}
                        </p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">Ver detalles</button>
                </div>
            ))}
        </div>
    );
}