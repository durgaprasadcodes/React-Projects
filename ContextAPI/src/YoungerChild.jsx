import { useContext } from 'react';
import { Usercontext } from './hooks/context';

export default function YoungChild() {
    const youngChildData = useContext(Usercontext);
    return (
        <div>
            <h1>Young Child Component</h1>
            <h2>message from parent: {youngChildData}</h2>
        </div>
    )
}