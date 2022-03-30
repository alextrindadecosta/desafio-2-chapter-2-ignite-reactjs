import { ReactNode } from 'react'

export interface InputProps {
    name: string;
    placeholder: string;
    icon?: ReactNode;
    rest?: {
        [x: string]: any;
    }
}

export interface FoodData {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    image: string
}