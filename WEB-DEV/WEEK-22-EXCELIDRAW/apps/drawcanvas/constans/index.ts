import { Square, Circle, Triangle ,Diamond , MousePointer2 , MoveRight ,Hand} from 'lucide-react'
import {createElement} from 'react'


export const shapes=[
    {name: "Hand", icon: createElement(Hand)},
    {name: "Pointer", icon: createElement(MousePointer2)},
    {name: "Square", icon: createElement(Square)},
    {name: "Eclipse", icon: createElement(Circle)},
    {name: "Triangle", icon: createElement(Triangle)},
    {name: "Diamond", icon: createElement(Diamond)},
    {name: "Arrow", icon: createElement(MoveRight)},
] as const
