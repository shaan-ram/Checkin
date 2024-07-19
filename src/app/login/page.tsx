"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    managerEmail: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    managerEmail: '',
  });

  const validateName = (name: any) => {
    return name.trim().length > 0;
  };

  const validateEmail = (email: any) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: any) => {
    return password.length > 0;
  };

  const onLogin = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/landing');
      }, 1000);
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      managerEmail: '',
    };

    if (!validateName(user.name)) {
      newErrors.name = 'Name is required';
    }
    if (!validateEmail(user.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!validatePassword(user.password)) {
      newErrors.password = 'Password cannot be empty';
    }
    if (!validateEmail(user.managerEmail)) {
      newErrors.managerEmail = 'Invalid manager email address';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.password && !newErrors.managerEmail;
  };

  const handleInputChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-login"></div>
      <div className="relative z-10 w-full max-w-screen-sm m-20 bg-white shadow-lg flex justify-center flex-1">
        <div className="w-full p-10">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">CheckIn</h1>
            <div className="text-sm font-light top-3 relative text-gray-600 tracking-wide">
              Track and manage reimbursement effortlessly
            </div>
            <div className="w-full flex-1">
              <div className="my-8 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  {loading ? 'Processing' : 'Login'}
                </div>
              </div>
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full mb-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className="text-red-500 tracking-wide text-sm">{errors.name}</p>
                )}
                <input
                  className="w-full mt-5 mb-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 tracking-wide text-sm">{errors.email}</p>
                )}
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="text-red-500 tracking-wide text-sm">{errors.password}</p>
                )}
                <input
                  className="w-full mt-5 mb-2 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Approvers/Managers Email"
                  name="managerEmail"
                  value={user.managerEmail}
                  onChange={handleInputChange}
                />
                {errors.managerEmail && (
                  <p className="text-red-500 tracking-wide text-sm">{errors.managerEmail}</p>
                )}
                <button
                  onClick={onLogin}
                  className="mt-7 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 8v6M23 11h-6"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                  </svg>
                  <span className="ml-3">Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
