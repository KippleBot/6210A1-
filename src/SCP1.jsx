import "./SSF/scp.json"

function SCP({ selectedSCP }) {
    return (
        <div>
            <SCPmake selectedSCP={selectedSCP} />
        </div>
    );
}

function SCPmake({ selectedSCP }) {if (!selectedSCP) {
    return <div>No SCP data available.</div>;
}
    return (
        <div className="container">
            <div className="border p-3 rounded shadow">
                <h1>{selectedSCP.item}</h1>
                <p className="text-center">
                    <img src={selectedSCP.image} alt={selectedSCP.name} className="rounded img-fluid" />
                </p>
                <p><strong>Class:</strong> {selectedSCP.type}</p>
                <p><strong>Containment:</strong> {selectedSCP.containment}</p>
                <p><strong>Description:</strong> {selectedSCP.description}</p>
            </div>
        </div>
    );
}

export default SCP;
