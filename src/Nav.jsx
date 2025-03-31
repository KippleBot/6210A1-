function Nav({ scp, onSelect }) {
    // Check if scp exists and is an array.
    if (!scp || !Array.isArray(scp)) {

    return null;

    }

    return (
    <nav>
        <div>
        {scp.map((scpItem, index) => (
            <a
        key={index}
        onClick={() => onSelect(scp)}
            >
        {scpItem.item}
            </a>
        ))}
        </div>
    </nav>
    );
    
}
export default Nav;