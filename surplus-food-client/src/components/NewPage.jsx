function NewPage(props) {
    const firstPerson = props.people && props.people.length > 0 ? props.people[0] : null;

    return (
        <div className="container mt-4 text-center">
            <h2>Welcome to a new page</h2>
            {firstPerson ? (
                <div className="mt-4">
                    <p><strong>First person:</strong> {firstPerson.name} {firstPerson.surname}</p>
                    <p><strong>ID:</strong> {firstPerson.id}</p>
                </div>
            ) : (
                <p className="mt-4">No people available</p>
            )}
        </div>
    );
}

export default NewPage;