export default function RecentPatients() {
    const patients = [
        { id: 1, name: 'Juan Pérez', plan: 'Plan de Diabetes' },
        { id: 2, name: 'María Gómez', plan: 'Plan de Hipertensión' },
        { id: 3, name: 'Carlos Ruiz', plan: 'Plan de Rehabilitación' },
    ];

    return (
        <div className="space-y-3">
            {patients.map((patient) => (
                <div key={patient.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg">
                    <p className="text-gray-800">{patient.name}</p>
                    <span className="text-sm text-gray-500">{patient.plan}</span>
                </div>
            ))}
        </div>
    );
}