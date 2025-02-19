import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // localStorage.clear();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
            setLocalStorage();  // Set default data if not present
        }
        const { employees } = getLocalStorage(); //local storage madhun dadta ghetla ani saglikade avilable krun dila
        setUserData(employees);
    }, []);

    return (
        <AuthContext.Provider value={[userData,setUserData]}>  
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;









// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage } from '../utils/localStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({children}) => {

//     const[userData, setUserData] = useState(null)

//     useEffect(() => {
//         const { employees, admin } = getLocalStorage() || { employees: [], admin: [] };
//         setUserData({ employees, admin });
//     }, []);
    
    
    
//   return (
    
//     <div>
//         <AuthContext.Provider value={userData}>  
//             {children}
//         </AuthContext.Provider>
//     </div>
//   )
// }

// export default AuthProvider
