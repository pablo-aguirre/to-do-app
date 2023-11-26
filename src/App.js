function AppTitle() {
    return <h1>ToDo App</h1>;
}

function AppMessage() {
    return <p>Benvenuto!</p>;
}

export default function App() {
    return (
        <div>
            <AppTitle/>
            <AppMessage/>
        </div>
    );
}
