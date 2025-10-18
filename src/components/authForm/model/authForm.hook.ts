import { axiosInstance } from '@/api/axios';
import { useAuthStore } from '@/shared/store/auth.store';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

/**
 * Хук авторизации/регистрации
 * @returns Функццию handleLogin
 */
export const useAuthForm = () => {
  const { email, fullName, password } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (isRegister: boolean) => {
    try {
      const { data } = await axiosInstance.post(`/auth/${isRegister ? 'register' : 'login'}`, {
        email,
        password,
        fullName: isRegister ? fullName : null,
      });

      if (data.token) {
        localStorage.setItem('token', data.token);
        toast.success('Успешная авторизация');
        setTimeout(() => router.push('/'), 100);
      } else {
        console.error('Нет токена в ответе сервера:', data);
      }
    } catch (error) {
      toast.error('Неправильный логин или пароль');
      console.error('Ошибка при авторизации:', error);
    }
  };

  return { handleLogin };
};
