import { useState, useEffect } from 'react';

let porcentaje = 2.32; // Base para nacional

export default function DashboardView() {
    const [precioAuto, setPrecioAuto] = useState(0);
    const [tipoCoche, setTipoCoche] = useState('nacional');
    const [tipoPersona, setTipoPersona] = useState('fisica');
    const [meses, setMeses] = useState(66);

    interface Car {
        marca: string;
        descripcion: string;
        precio: number;
    }
    
    const [cars, setCars] = useState<Car[]>([]);
    const [selectedCar, setSelectedCar] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/data/precios.json')
            .then((response) => response.json())
            .then((data: Car[]) => setCars(data))
            .catch((error) => console.error('Error fetching cars:', error));
    }, []);

    useEffect(() => {
        const car = cars.find(car => car.descripcion === selectedCar);
        if (car) {
            setPrecioAuto(car.precio);
        }
    }, [selectedCar, cars]);

    const calcularPorcentajeEnganche = () => {
        porcentaje = 2.32; // Reset base for nacional
        if (tipoCoche === 'nacional') {
            if (tipoPersona === 'fisica') porcentaje += 2.6435;
            else if (tipoPersona === 'moral') porcentaje += 2.58;
        } else if (tipoCoche === 'importado') {
            if (tipoPersona === 'fisica') porcentaje += 2.7935;
            else if (tipoPersona === 'moral') porcentaje += 2.73;
        }
        return porcentaje;
    };

    const calcularEnganche = () => {
        return (precioAuto * calcularPorcentajeEnganche()) / 100;
    };

    const calcularMensualidad = () => {
        const porcentajeMensualidad = calcularPorcentajeEnganche() - 2.32;
        return (precioAuto * porcentajeMensualidad) / 100;
    };

    const filteredCars = cars.filter(car => {
        const searchWords = searchTerm.toLowerCase().split(' ');
        return searchWords.every(word =>
            car.marca.toLowerCase().includes(word) ||
            car.descripcion.toLowerCase().includes(word)
        );
    });

    return (
        <div className="space-y-6 p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-800">Cotización de planes</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Columna izquierda - Datos de entrada */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Buscar coche
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md"
                                placeholder="Buscar por marca o modelo"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Seleccionar coche
                            </label>
                            <select
                                className="w-full p-2 border rounded-md"
                                value={selectedCar}
                                onChange={(e) => setSelectedCar(e.target.value)}
                            >
                                <option value="">Seleccione un coche</option>
                                {filteredCars.map((car, index) => (
                                    <option key={index} value={car.descripcion}>
                                        {car.marca} - {car.descripcion} - ${car.precio}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Precio del coche (MXN)
                            </label>
                            <input
                                type="number"
                                min="0"
                                className="w-full p-2 border rounded-md"
                                value={precioAuto}
                                onChange={(e) => setPrecioAuto(Number(e.target.value))}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tipo de coche
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tipoCoche"
                                        value="nacional"
                                        checked={tipoCoche === 'nacional'}
                                        onChange={(e) => setTipoCoche(e.target.value)}
                                        className="mr-2"
                                    />
                                    Nacional
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tipoCoche"
                                        value="importado"
                                        checked={tipoCoche === 'importado'}
                                        onChange={(e) => setTipoCoche(e.target.value)}
                                        className="mr-2"
                                    />
                                    Importado
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Tipo de persona
                            </label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tipoPersona"
                                        value="fisica"
                                        checked={tipoPersona === 'fisica'}
                                        onChange={(e) => setTipoPersona(e.target.value)}
                                        className="mr-2"
                                    />
                                    Física
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="tipoPersona"
                                        value="moral"
                                        checked={tipoPersona === 'moral'}
                                        onChange={(e) => setTipoPersona(e.target.value)}
                                        className="mr-2"
                                    />
                                    Moral
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Mensualidades
                            </label>
                            <select
                                className="w-full p-2 border rounded-md"
                                value={meses}
                                onChange={(e) => setMeses(Number(e.target.value))}
                            >
                                {/* <option value={60}>18 meses</option> */}
                                <option value={66}>66 meses</option>
                            </select>
                        </div>
                    </div>

                    {/* Columna derecha - Resultados */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Resumen de cotización</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span>Porcentaje de enganche:</span>
                                <span className="font-medium">
                                    {calcularPorcentajeEnganche()}%
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Enganche:</span>
                                <span className="font-medium">
                                    {calcularEnganche().toLocaleString('es-MX', {
                                        style: 'currency',
                                        currency: 'MXN',
                                    })}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Meses:</span>
                                <span className="font-medium">{meses}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Mensualidad:</span>
                                <span className="font-medium text-blue-600">
                                    {calcularMensualidad().toLocaleString('es-MX', {
                                        style: 'currency',
                                        currency: 'MXN',
                                    })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}