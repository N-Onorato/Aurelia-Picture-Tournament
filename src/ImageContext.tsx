import { createContext, useState, ReactNode } from 'react';
import { Image } from './Image'

// Define a type for the context value
interface MyContextType {
    value: Array<Image>;
    updateValue: (newValue: Array<Image>) => void;
}

// Create the context with an initial undefined value, since it will be provided by the Provider component
const MyContext = createContext<MyContextType | undefined>(undefined);

// Define a type for the provider props
interface MyProviderProps {
    children: ReactNode;
}

export const ImageProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Array<Image>>([]);

    const updateValue = (newValue: Array<Image>) => {
        setValue(newValue);
    };

    return (
        <MyContext.Provider value={{ value, updateValue }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;
