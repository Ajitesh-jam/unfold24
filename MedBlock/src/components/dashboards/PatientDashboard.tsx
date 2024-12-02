import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';


interface PatientLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PatientLoginModal = ({ isOpen, onClose }: PatientLoginModalProps) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [authToken, setAuth] = useState(null);
//     const navigate = useNavigate();
   
//     // Ensure `authenticate` exists
//   const authenticate = okto?.authenticate;

//   if (!authenticate) {
//     console.error("Error: `authenticate` is not defined in `useOkto`.");
//     return <div>Error: Okto SDK not configured properly.</div>;
//   }

//   const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
//     const idToken = credentialResponse?.credential;
//     if (!idToken) {
//       console.error("Google login failed: Missing credential.");
//       return;
//     }

//     console.log("Google ID Token:", idToken);

    // Authenticate the user
    // authenticate(idToken, async ({ authResponse, error }: { authResponse?: any; error?: any }) => {
    //   if (authResponse) {
    //     console.log("Authentication successful:", authResponse);
    //     setAuth(authResponse.auth_token); // Save the auth token
    //     navigate("/patient-dashboard");
    //   } else if (error) {
    //     console.error("Authentication error:", error);
    //   }
    // });
    //};

    // const handleGoogleError = () => {
    //     setError('Google login failed. Please try again.');
    // };

    // if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
            <div className="min-h-screen px-4 text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-medium text-gray-900">Patient Login</h3>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mb-4 text-center">
                        <p className="text-gray-700 mb-4">
                            Log in using your Google account to access the patient dashboard.
                        </p>
                        {/* <GoogleLogin
                            onSuccess={handleGoogleLogin}
                            onError={handleGoogleError}
                            useOneTap
                            promptMomentNotification={(notification) =>
                                console.log('Prompt moment notification:', notification)
                            }
                        /> */}
                        {isLoading && <p className="mt-4 text-blue-500">Authenticating...</p>}
                        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientLoginModal;