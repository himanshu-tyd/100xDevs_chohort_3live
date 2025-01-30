import { Square, Circle, Triangle ,Diamond , MousePointer2 , MoveRight ,Hand, Minus} from 'lucide-react'
import {createElement} from 'react'


export const shapes=[
    {name: "hand", icon: createElement(Hand)},
    {name: "pointer", icon: createElement(MousePointer2)},
    {name: "square", icon: createElement(Square)},
    {name: "eclipse", icon: createElement(Circle)},
    {name: "line", icon: createElement(Minus)},
    {name: "triangle", icon: createElement(Triangle)},
    {name: "diamond", icon: createElement(Diamond)},
    {name: "arrow", icon: createElement(MoveRight)},
] as const
