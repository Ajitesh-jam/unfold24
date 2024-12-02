import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LogIn } from 'lucide-react';

interface DoctorLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const DoctorLoginModal = ({ isOpen, onClose }: DoctorLoginModalProps) => {
    const [walletAddress, setWalletAddress] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!walletAddress.trim()) {
            setError('Please enter a wallet address');
            return;
        }

        setIsLoading(true);
        try {
            // Store wallet address in localStorage
            localStorage.setItem('doctorWalletAddress', walletAddress);
            onClose();
            navigate('/doctor-dashboard');
        } catch (error) {
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
            <div className="min-h-screen px-4 text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-medium text-gray-900">Doctor Login</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Wallet Address
                            </label>
                            <input
                                type="text"
                                value={walletAddress}
                                onChange={(e) => setWalletAddress(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your wallet address"
                            />
                            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorLoginModal;