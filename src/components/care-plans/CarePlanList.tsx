export default function CarePlanList() {
    const plans = [
        { id: 1, title: 'Plan de Diabetes', patient: 'Juan Pérez' },
        { id: 2, title: 'Plan de Hipertensión', patient: 'María Gómez' },
        { id: 3, title: 'Plan de Rehabilitación', patient: 'Carlos Ruiz' },
    ];

    return (
        <div className="space-y-3">
            {plans.map((plan) => (
                <div
                    key={plan.id}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg"
                >
                    <div>
                        <p className="text-gray-800 font-medium">{plan.title}</p>
                        <p className="text-sm text-gray-500">Paciente: {plan.patient}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700">Ver detalles</button>
                </div>
            ))}
        </div>
    );
}